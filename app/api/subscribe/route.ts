import { NextResponse } from "next/server";
import { passesTurnstile } from "@/lib/turnstile";

// Adds newsletter signups to MailerLite.
// Needs MAILERLITE_API_KEY set as a secret in Cloudflare, and MAILERLITE_GROUP_ID for the group
// whose automation sends the welcome email and the free guide. TURNSTILE_SECRET_KEY is optional;
// when it is set, every signup must carry a valid Turnstile token.
// Double opt-in is switched on in MailerLite itself (Account settings → Subscribe settings →
// "Double opt-in for API and integrations"), which then sends the confirmation email.

const MAILERLITE_URL = "https://connect.mailerlite.com/api/subscribers";
const MIN_FILL_MS = 3000;
const MAX = { firstName: 100, email: 200 };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(value: unknown) {
  return typeof value === "string" ? value.trim().replace(/[\r\n]+/g, " ") : "";
}

function fail(error: string, status: number) {
  return NextResponse.json({ ok: false, error }, { status });
}

// MailerLite expects "yyyy-MM-dd HH:mm:ss" in UTC.
function mailerLiteDate(date: Date) {
  return date.toISOString().slice(0, 19).replace("T", " ");
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

  const firstName = field(data.firstName);
  const email = field(data.email).toLowerCase();

  if (!firstName || !email) {
    return fail("Please enter your first name and email address.", 400);
  }
  if (!EMAIL_PATTERN.test(email) || email.length > MAX.email) {
    return fail("Please enter a valid email address.", 400);
  }
  if (firstName.length > MAX.firstName) {
    return fail("Please use a shorter first name.", 400);
  }
  if (data.consent !== true) {
    return fail("Please tick the box to confirm you'd like to receive emails.", 400);
  }

  const ip = request.headers.get("cf-connecting-ip");

  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (turnstileSecret) {
    const token = field(data.turnstileToken);
    if (!token || !(await passesTurnstile(token, turnstileSecret, ip))) {
      return fail("The spam check did not pass. Please try again.", 400);
    }
  }

  const apiKey = process.env.MAILERLITE_API_KEY;
  if (!apiKey) {
    console.error("Signup form: MAILERLITE_API_KEY is not set");
    return fail("Signups aren't open just yet. Please try again soon.", 503);
  }

  const groupId = process.env.MAILERLITE_GROUP_ID;
  const res = await fetch(MAILERLITE_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email,
      fields: { name: firstName },
      ...(groupId ? { groups: [groupId] } : {}),
      // Kept as a record of when and from where consent was given.
      opted_in_at: mailerLiteDate(new Date()),
      ...(ip ? { ip_address: ip, optin_ip: ip } : {}),
    }),
  });

  if (res.status === 422) {
    return fail("Please check your email address and try again.", 400);
  }
  if (!res.ok) {
    console.error("Signup form: MailerLite request failed", res.status, await res.text());
    return fail("Something went wrong and you weren't subscribed. Please try again.", 502);
  }

  return NextResponse.json({ ok: true });
}
