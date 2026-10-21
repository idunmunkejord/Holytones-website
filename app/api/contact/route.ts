import { NextResponse } from "next/server";
import { links } from "@/lib/site-config";
import { passesTurnstile } from "@/lib/turnstile";

// Delivers contact form submissions to the Holytones inbox.
// Needs RESEND_API_KEY set as a secret in Cloudflare. TURNSTILE_SECRET_KEY is optional;
// when it is set, every submission must carry a valid Turnstile token.

const FROM = "Holytones website <website@holytones.no>";
const MIN_FILL_MS = 3000;
const MAX = { name: 100, email: 200, subject: 150, message: 5000 };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

// Single-line fields end up in email headers, so line breaks are never allowed in them.
function singleLine(value: unknown) {
  return field(value).replace(/[\r\n]+/g, " ");
}

function fail(error: string, status: number) {
  return NextResponse.json({ ok: false, error }, { status });
}

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return fail("Invalid request.", 400);
  }

  // Spam traps: a hidden field people never see, and a form filled in faster than a person
  // could. Answer as if it worked so bots get no signal to adapt to.
  const elapsed = Number(data.elapsed);
  if (field(data.website) || !Number.isFinite(elapsed) || elapsed < MIN_FILL_MS) {
    return NextResponse.json({ ok: true });
  }

  const name = singleLine(data.name);
  const email = singleLine(data.email);
  const subject = singleLine(data.subject);
  const message = field(data.message);

  if (!name || !email || !subject || !message) {
    return fail("Please fill in all the fields.", 400);
  }
  if (!EMAIL_PATTERN.test(email)) {
    return fail("Please enter a valid email address.", 400);
  }
  if (
    name.length > MAX.name ||
    email.length > MAX.email ||
    subject.length > MAX.subject ||
    message.length > MAX.message
  ) {
    return fail("Your message is too long.", 400);
  }

  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (turnstileSecret) {
    const token = field(data.turnstileToken);
    const ip = request.headers.get("cf-connecting-ip");
    if (!token || !(await passesTurnstile(token, turnstileSecret, ip))) {
      return fail("The spam check did not pass. Please try again.", 400);
    }
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set");
    return fail("The contact form is not available right now.", 503);
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: [links.email],
      reply_to: email,
      subject: `[Holytones] ${subject}`,
      text: `${message}\n\n— ${name} (${email})\nSent from the contact form on holytones.no`,
    }),
  });

  if (!res.ok) {
    console.error("Contact form: delivery failed", res.status, await res.text());
    return fail("Your message could not be sent.", 502);
  }

  return NextResponse.json({ ok: true });
}
