// Building and sending the emails. Sending goes through Resend; without RESEND_API_KEY (local
// testing) emails are only logged, never sent.

export type Lang = "no" | "en";

export interface Env {
  DB: D1Database;
  RESEND_API_KEY?: string;
  PUBLIC_URL: string;
  SITE_URL: string;
  FROM: string;
  REPLY_TO: string;
  BACKUP_TO: string;
  ALLOWED_ORIGINS: string;
}

export interface Email {
  to: string;
  subject: string;
  html: string;
  text: string;
  // Gives the email a "one-click unsubscribe" in Gmail and Outlook.
  unsubscribeUrl?: string;
  attachments?: { filename: string; content: string }[];
}

export class SendError extends Error {
  constructor(
    message: string,
    // Resend's daily or rate limit: stop for now and try again next hour.
    readonly limited: boolean,
  ) {
    super(message);
  }
}

// Sends one email. The idempotency key makes Resend drop a repeat of the same email for 24
// hours, so a retry after an interruption can never deliver it twice.
export async function sendEmail(env: Env, email: Email, idempotencyKey: string): Promise<string> {
  if (!env.RESEND_API_KEY) {
    console.log(`[not sent: no RESEND_API_KEY] to=${email.to} subject="${email.subject}"`);
    return `local-${idempotencyKey}`;
  }
  const headers: Record<string, string> = {};
  if (email.unsubscribeUrl) {
    headers["List-Unsubscribe"] = `<${email.unsubscribeUrl}>`;
    headers["List-Unsubscribe-Post"] = "List-Unsubscribe=One-Click";
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
      "Idempotency-Key": idempotencyKey,
    },
    body: JSON.stringify({
      from: env.FROM,
      to: [email.to],
      reply_to: env.REPLY_TO,
      subject: email.subject,
      html: email.html,
      text: email.text,
      headers,
      attachments: email.attachments,
    }),
  });
  if (!res.ok) {
    throw new SendError(`Resend ${res.status}: ${await res.text()}`, res.status === 429);
  }
  const body = (await res.json()) as { id?: string };
  return body.id ?? "";
}

export function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// **bold** and *italic* inside already-escaped text.
function inline(text: string) {
  return text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>");
}

const P = 'style="margin:0 0 18px;font-size:17px;line-height:1.65;color:#2b2621"';
const QUOTE =
  'style="margin:0 0 18px;padding:4px 0 4px 18px;border-left:3px solid #b0915a;font-family:Georgia,serif;font-size:19px;line-height:1.5;color:#4a2c17;font-style:italic"';

// A devotional file: "# Title", then paragraphs separated by blank lines.
export function parseDevotional(source: string) {
  const lines = source.replace(/\r\n/g, "\n").trim().split("\n");
  const title = lines[0].startsWith("# ") ? lines.shift()!.slice(2).trim() : "Holytones";
  const blocks = lines
    .join("\n")
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);
  const html = blocks
    .map((block) => {
      if (block.startsWith("> ")) {
        const quote = block.replace(/^> ?/gm, "");
        return `<p ${QUOTE}>${inline(escapeHtml(quote)).replace(/\n/g, "<br>")}</p>`;
      }
      return `<p ${P}>${inline(escapeHtml(block)).replace(/\n/g, "<br>")}</p>`;
    })
    .join("\n");
  const text = blocks.map((block) => block.replace(/\*\*|\*/g, "")).join("\n\n");
  return { title, html, text };
}

const footerText: Record<Lang, { why: string; unsubscribe: string; sender: string }> = {
  no: {
    why: "Du får denne e-posten fordi du har meldt deg på andakter fra Holytones.",
    unsubscribe: "Meld meg av",
    sender: "Holytones · Pedersen Interaktiv · Org.nr. 927 929 783 · Krooddveien 9b, 4624 Kristiansand",
  },
  en: {
    why: "You are receiving this email because you signed up for devotionals from Holytones.",
    unsubscribe: "Unsubscribe",
    sender: "Holytones · Pedersen Interaktiv · Org. no. 927 929 783 · Krooddveien 9b, 4624 Kristiansand, Norway",
  },
};

// The shared email frame: Holytones name, the content, and a footer with the unsubscribe link.
export function layout(lang: Lang, inner: string, unsubscribeUrl?: string) {
  const f = footerText[lang];
  const unsubscribe = unsubscribeUrl
    ? `<p style="margin:0 0 8px"><a href="${escapeHtml(unsubscribeUrl)}" style="color:#776b5d">${f.unsubscribe}</a></p>`
    : "";
  return `<!doctype html>
<html lang="${lang === "no" ? "nb" : "en"}">
<body style="margin:0;padding:0;background:#faf6ee">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#faf6ee">
<tr><td align="center" style="padding:32px 16px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px">
<tr><td style="padding:0 0 24px;font-family:Georgia,serif;font-size:28px;color:#9a7a3c">Holytones</td></tr>
<tr><td style="background:#fffdf8;border:1px solid #eadfcd;padding:32px 28px;font-family:Arial,Helvetica,sans-serif">
${inner}
</td></tr>
<tr><td style="padding:24px 4px 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:#776b5d">
<p style="margin:0 0 8px">${f.why}</p>
${unsubscribe}
<p style="margin:0">${f.sender}</p>
</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;
}

function heading(title: string) {
  return `<h1 style="margin:0 0 22px;font-family:Georgia,serif;font-size:26px;line-height:1.3;color:#4a2c17">${escapeHtml(title)}</h1>`;
}

function button(url: string, label: string) {
  return `<p style="margin:26px 0"><a href="${escapeHtml(url)}" style="display:inline-block;background:#16110c;color:#e8b85c;padding:14px 28px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;text-decoration:none">${label}</a></p>`;
}

const confirmText: Record<Lang, { subject: string; title: string; body: string[]; button: string; ignore: string }> = {
  no: {
    subject: "Bekreft påmeldingen til andaktene fra Holytones",
    title: "Bekreft e-postadressen din",
    body: [
      "Takk for at du vil motta andakter fra Holytones.",
      "Klikk på knappen under for å bekrefte e-postadressen din. Da får du den første andakten med en gang, og deretter en ny andakt tre ganger i uka.",
    ],
    button: "Bekreft e-postadressen",
    ignore: "Meldte du deg ikke på? Da kan du se bort fra denne e-posten. Du blir ikke lagt til uten å bekrefte.",
  },
  en: {
    subject: "Confirm your Holytones devotional sign-up",
    title: "Confirm your email address",
    body: [
      "Thank you for signing up for devotionals from Holytones.",
      "Click the button below to confirm your email address. You will receive the first devotional straight away, and then a new one three times a week.",
    ],
    button: "Confirm email address",
    ignore: "Didn't sign up? Then you can ignore this email. You won't be added without confirming.",
  },
};

export function confirmEmail(lang: Lang, to: string, confirmUrl: string): Email {
  const t = confirmText[lang];
  const inner = [
    heading(t.title),
    ...t.body.map((p) => `<p ${P}>${escapeHtml(p)}</p>`),
    button(confirmUrl, t.button),
    `<p style="margin:0;font-size:14px;line-height:1.6;color:#776b5d">${escapeHtml(t.ignore)}</p>`,
  ].join("\n");
  return {
    to,
    subject: t.subject,
    html: layout(lang, inner),
    text: `${t.title}\n\n${t.body.join("\n\n")}\n\n${t.button}: ${confirmUrl}\n\n${t.ignore}`,
  };
}

export function devotionalEmail(lang: Lang, to: string, source: string, unsubscribeUrl: string): Email {
  const d = parseDevotional(source);
  const f = footerText[lang];
  return {
    to,
    subject: d.title,
    html: layout(lang, `${heading(d.title)}\n${d.html}`, unsubscribeUrl),
    text: `${d.title}\n\n${d.text}\n\n--\n${f.why}\n${f.unsubscribe}: ${unsubscribeUrl}`,
    unsubscribeUrl,
  };
}

// A simple web page in the Holytones style, shown after confirming or unsubscribing.
export function page(lang: Lang, title: string, paragraphs: string[], siteUrl: string, extra = "") {
  const back = lang === "no" ? "Til holytones.no" : "Go to holytones.no";
  return `<!doctype html>
<html lang="${lang === "no" ? "nb" : "en"}">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(title)} — Holytones</title></head>
<body style="margin:0;background:#faf6ee;font-family:Arial,Helvetica,sans-serif;color:#2b2621">
<main style="max-width:560px;margin:0 auto;padding:48px 20px">
<p style="font-family:Georgia,serif;font-size:30px;color:#9a7a3c;margin:0 0 32px">Holytones</p>
<h1 style="font-family:Georgia,serif;font-size:28px;line-height:1.3;color:#4a2c17;margin:0 0 20px">${escapeHtml(title)}</h1>
${paragraphs.map((p) => `<p style="font-size:17px;line-height:1.65;margin:0 0 16px">${escapeHtml(p)}</p>`).join("\n")}
${extra}
<p style="margin-top:32px"><a href="${escapeHtml(siteUrl)}" style="color:#6f9698">${back}</a></p>
</main>
</body>
</html>`;
}
