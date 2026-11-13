// The Holytones devotional email program.
//
// Signing up:  POST /subscribe from the form on holytones.no stores the address as "pending" and
//              emails a confirmation link.
// Confirming:  GET /confirm?token=… makes the reader active and sends Day 1 straight away.
// Sending:     every hour, each active reader whose next devotional is due gets it. After Day n
//              the next one is due 2, 2 or 3 days later in turn (three a week), early morning.
// Leaving:     every email links to /unsubscribe?token=…; Gmail/Outlook use the one-click POST.
// Backup:      Mondays, the whole list is emailed to BACKUP_TO as a CSV file.
//
// Each reader's place is a day number, advanced only after a send succeeds. Repeats are blocked
// three ways: Resend drops a resent email with the same idempotency key, the advance only
// happens if the day still matches, and the sends table can hold each day only once.

import { devotionals } from "./content";
import {
  confirmEmail,
  devotionalEmail,
  page,
  sendEmail,
  SendError,
  type Env,
  type Lang,
} from "./emails";

interface Subscriber {
  id: number;
  email: string;
  lang: Lang;
  newsletter: number;
  status: "pending" | "active" | "unsubscribed";
  confirm_token: string;
  unsubscribe_token: string;
  created_at: string;
  confirm_sent_at: string | null;
  confirmed_at: string | null;
  unsubscribed_at: string | null;
  next_day: number;
  next_send_at: string | null;
  last_sent_at: string | null;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Gap in days after Day 1, 2, 3, 4 … : 2, 2, 3, 2, 2, 3 … makes three devotionals a week.
const GAPS = [2, 2, 3];
// Due devotionals go out from this hour (UTC): 07:00 in Norway in winter, 08:00 in summer.
const SEND_HOUR_UTC = 6;
// At most this many devotionals per hourly run; Resend's free plan allows 100 emails a day.
const BATCH = 50;
// Don't send a new confirmation email to the same pending address more often than this.
const CONFIRM_RESEND_MS = 10 * 60 * 1000;

const now = () => new Date().toISOString();
const token = () => crypto.randomUUID().replace(/-/g, "") + crypto.randomUUID().replace(/-/g, "");

function nextSendAt(dayJustSent: number, from = new Date()) {
  const gap = GAPS[(dayJustSent - 1) % GAPS.length];
  const next = new Date(from);
  next.setUTCDate(next.getUTCDate() + gap);
  next.setUTCHours(SEND_HOUR_UTC, 0, 0, 0);
  return next.toISOString();
}

function cors(request: Request, env: Env): Record<string, string> {
  const origin = request.headers.get("Origin") ?? "";
  const allowed = env.ALLOWED_ORIGINS.split(",").map((o) => o.trim());
  return allowed.includes(origin)
    ? {
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        Vary: "Origin",
      }
    : {};
}

function json(data: unknown, status: number, headers: Record<string, string> = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...headers },
  });
}

function html(body: string, status = 200) {
  return new Response(body, { status, headers: { "Content-Type": "text/html; charset=utf-8" } });
}

async function findBy(env: Env, column: "email" | "confirm_token" | "unsubscribe_token", value: string) {
  return env.DB.prepare(`SELECT * FROM subscribers WHERE ${column} = ?`).bind(value).first<Subscriber>();
}

// --- Signing up ---------------------------------------------------------------------------

async function subscribe(request: Request, env: Env) {
  const headers = cors(request, env);
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, error: "invalid" }, 400, headers);
  }
  // Spam trap: a hidden field people never fill in. Answer as if it worked.
  if (typeof data.website === "string" && data.website.trim()) return json({ ok: true }, 200, headers);

  const email = typeof data.email === "string" ? data.email.trim().toLowerCase() : "";
  if (!EMAIL_PATTERN.test(email) || email.length > 200) {
    return json({ ok: false, error: "email" }, 400, headers);
  }
  const lang: Lang = data.lang === "en" ? "en" : "no";
  const newsletter = data.newsletter === true ? 1 : 0;

  const existing = await findBy(env, "email", email);
  // Already active: say nothing different, so the form can't be used to test addresses.
  if (existing?.status === "active") return json({ ok: true }, 200, headers);

  let subscriber: Subscriber;
  if (!existing) {
    await env.DB.prepare(
      `INSERT INTO subscribers (email, lang, newsletter, status, confirm_token, unsubscribe_token, created_at)
       VALUES (?, ?, ?, 'pending', ?, ?, ?)`,
    )
      .bind(email, lang, newsletter, token(), token(), now())
      .run();
    subscriber = (await findBy(env, "email", email))!;
  } else {
    if (
      existing.status === "pending" &&
      existing.confirm_sent_at &&
      Date.now() - Date.parse(existing.confirm_sent_at) < CONFIRM_RESEND_MS
    ) {
      return json({ ok: true }, 200, headers);
    }
    // Pending again, or coming back after unsubscribing: a fresh confirmation link. A returning
    // reader keeps their place in the series, so nothing is repeated.
    await env.DB.prepare(
      `UPDATE subscribers SET status = 'pending', lang = ?, newsletter = MAX(newsletter, ?), confirm_token = ?
       WHERE id = ?`,
    )
      .bind(lang, newsletter, token(), existing.id)
      .run();
    subscriber = (await findBy(env, "email", email))!;
  }

  const confirmUrl = `${env.PUBLIC_URL}/confirm?token=${subscriber.confirm_token}`;
  try {
    await sendEmail(env, confirmEmail(subscriber.lang, email, confirmUrl), `confirm-${subscriber.confirm_token}`);
  } catch (error) {
    console.error("Confirmation email failed", error);
    return json({ ok: false, error: "send" }, 502, headers);
  }
  await env.DB.prepare("UPDATE subscribers SET confirm_sent_at = ? WHERE id = ?").bind(now(), subscriber.id).run();
  return json({ ok: true }, 200, headers);
}

// --- Confirming ---------------------------------------------------------------------------

const confirmPage: Record<Lang, { title: string; body: string[]; already: string; invalid: string[] }> = {
  no: {
    title: "Takk! Du er påmeldt.",
    body: [
      "Den første andakten er på vei til innboksen din nå.",
      "Deretter får du en ny andakt tre ganger i uka. Finner du den ikke, se i søppelpost eller kampanjer-mappen.",
    ],
    already: "Du er allerede påmeldt, og andaktene kommer som planlagt.",
    invalid: ["Lenken er ikke gyldig lenger.", "Meld deg gjerne på igjen på holytones.no."],
  },
  en: {
    title: "Thank you! You're signed up.",
    body: [
      "The first devotional is on its way to your inbox now.",
      "After that you'll receive a new devotional three times a week. If you can't find it, check your spam or promotions folder.",
    ],
    already: "You're already signed up, and the devotionals will keep coming as planned.",
    invalid: ["This link is no longer valid.", "You're welcome to sign up again at holytones.no."],
  },
};

async function confirm(url: URL, env: Env) {
  const subscriber = await findBy(env, "confirm_token", url.searchParams.get("token") ?? "");
  if (!subscriber) {
    const t = confirmPage.no;
    return html(page("no", t.invalid[0], t.invalid.slice(1), env.SITE_URL), 404);
  }
  const t = confirmPage[subscriber.lang];
  if (subscriber.status === "active") return html(page(subscriber.lang, t.title, [t.already], env.SITE_URL));

  // Due right away: Day 1 for a new reader, or the next day for one who came back.
  await env.DB.prepare(
    `UPDATE subscribers SET status = 'active', confirmed_at = COALESCE(confirmed_at, ?), unsubscribed_at = NULL,
     next_send_at = ? WHERE id = ? AND status != 'active'`,
  )
    .bind(now(), now(), subscriber.id)
    .run();
  const active = await env.DB.prepare("SELECT * FROM subscribers WHERE id = ?").bind(subscriber.id).first<Subscriber>();
  if (active) {
    try {
      await sendNext(env, active);
    } catch (error) {
      // Still active and due, so the hourly run sends it.
      console.error("First devotional failed; the hourly run will retry", error);
    }
  }
  return html(page(subscriber.lang, t.title, t.body, env.SITE_URL));
}

// --- Leaving ------------------------------------------------------------------------------

const leavePage: Record<Lang, { ask: string; askBody: string; button: string; done: string; doneBody: string }> = {
  no: {
    ask: "Meld deg av andaktene?",
    askBody: "Du får ikke flere andakter fra Holytones etter dette.",
    button: "Ja, meld meg av",
    done: "Du er meldt av.",
    doneBody: "Du får ikke flere andakter. Takk for at du har lest med oss.",
  },
  en: {
    ask: "Unsubscribe from the devotionals?",
    askBody: "You won't receive any more devotionals from Holytones after this.",
    button: "Yes, unsubscribe me",
    done: "You're unsubscribed.",
    doneBody: "You won't receive any more devotionals. Thank you for reading with us.",
  },
};

// GET shows a button rather than unsubscribing at once, because email scanners open links.
// The button, and Gmail/Outlook's one-click unsubscribe, send a POST.
async function unsubscribe(request: Request, url: URL, env: Env) {
  const tokenValue = url.searchParams.get("token") ?? "";
  const subscriber = await findBy(env, "unsubscribe_token", tokenValue);
  if (!subscriber) {
    const t = confirmPage.no;
    return html(page("no", t.invalid[0], [], env.SITE_URL), 404);
  }
  const t = leavePage[subscriber.lang];
  if (request.method === "POST") {
    await env.DB.prepare(
      "UPDATE subscribers SET status = 'unsubscribed', unsubscribed_at = ? WHERE id = ? AND status != 'unsubscribed'",
    )
      .bind(now(), subscriber.id)
      .run();
    return html(page(subscriber.lang, t.done, [t.doneBody], env.SITE_URL));
  }
  if (subscriber.status === "unsubscribed") return html(page(subscriber.lang, t.done, [t.doneBody], env.SITE_URL));
  const form = `<form method="post" action="/unsubscribe?token=${tokenValue}"><button type="submit" style="background:#16110c;color:#e8b85c;border:0;padding:14px 28px;font-size:14px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;cursor:pointer">${t.button}</button></form>`;
  return html(page(subscriber.lang, t.ask, [t.askBody], env.SITE_URL, form));
}

// --- Sending ------------------------------------------------------------------------------

// Sends this reader's next devotional if there is one, then moves them on by one day.
async function sendNext(env: Env, subscriber: Subscriber) {
  const day = subscriber.next_day;
  const source = devotionals[day - 1];
  if (subscriber.status !== "active" || !source) return false;

  const unsubscribeUrl = `${env.PUBLIC_URL}/unsubscribe?token=${subscriber.unsubscribe_token}`;
  const email = devotionalEmail(subscriber.lang, subscriber.email, source, unsubscribeUrl);
  const messageId = await sendEmail(env, email, `devotional-${subscriber.id}-day-${day}`);

  const sentAt = now();
  await env.DB.batch([
    env.DB.prepare("INSERT OR IGNORE INTO sends (subscriber_id, day, sent_at, message_id) VALUES (?, ?, ?, ?)").bind(
      subscriber.id,
      day,
      sentAt,
      messageId,
    ),
    env.DB.prepare(
      "UPDATE subscribers SET next_day = ?, last_sent_at = ?, next_send_at = ? WHERE id = ? AND next_day = ?",
    ).bind(day + 1, sentAt, nextSendAt(day), subscriber.id, day),
  ]);
  return true;
}

async function sendDue(env: Env) {
  const due = await env.DB.prepare(
    `SELECT * FROM subscribers WHERE status = 'active' AND next_send_at <= ? AND next_day <= ?
     ORDER BY next_send_at LIMIT ?`,
  )
    .bind(now(), devotionals.length, BATCH)
    .all<Subscriber>();
  let sent = 0;
  for (const subscriber of due.results) {
    try {
      if (await sendNext(env, subscriber)) sent++;
    } catch (error) {
      console.error(`Devotional for subscriber ${subscriber.id} failed`, error);
      if (error instanceof SendError && error.limited) break;
    }
  }
  console.log(`Sent ${sent} of ${due.results.length} due devotionals`);
}

// --- Backup -------------------------------------------------------------------------------

// Base64 of the text as UTF-8, for an email attachment.
function base64(text: string) {
  let binary = "";
  for (const byte of new TextEncoder().encode(text)) binary += String.fromCharCode(byte);
  return btoa(binary);
}

function csvCell(value: unknown) {
  const text = value == null ? "" : String(value);
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

async function emailBackup(env: Env) {
  const rows = await env.DB.prepare("SELECT * FROM subscribers ORDER BY created_at").all<Subscriber>();
  const columns = [
    "email",
    "status",
    "lang",
    "newsletter",
    "created_at",
    "confirmed_at",
    "unsubscribed_at",
    "next_day",
    "last_sent_at",
  ] as const;
  const csv = [columns.join(","), ...rows.results.map((r) => columns.map((c) => csvCell(r[c])).join(","))].join("\n");
  const active = rows.results.filter((r) => r.status === "active").length;
  const date = now().slice(0, 10);
  const summary = `Ukentlig sikkerhetskopi av andaktslisten (${date}): ${active} aktive lesere, ${rows.results.length} adresser totalt. Listen ligger vedlagt som CSV-fil, som kan åpnes i Excel eller importeres i Substack.`;
  await sendEmail(
    env,
    {
      to: env.BACKUP_TO,
      subject: `Andaktslisten ${date}: ${active} aktive lesere`,
      html: `<p>${summary}</p>`,
      text: summary,
      // "﻿" lets Excel read æ, ø and å correctly.
      attachments: [{ filename: `andaktsliste-${date}.csv`, content: base64(`﻿${csv}`) }],
    },
    `backup-${date}`,
  );
}

// --- Entry points -------------------------------------------------------------------------

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors(request, env) });
    if (url.pathname === "/subscribe" && request.method === "POST") return subscribe(request, env);
    if (url.pathname === "/confirm" && request.method === "GET") return confirm(url, env);
    if (url.pathname === "/unsubscribe") return unsubscribe(request, url, env);
    // Local testing only (no Resend key): /preview/1 shows Day 1 as an email, /preview/confirm
    // the confirmation email.
    if (!env.RESEND_API_KEY && url.pathname.startsWith("/preview/")) {
      const which = url.pathname.slice("/preview/".length);
      const lang: Lang = url.searchParams.get("lang") === "en" ? "en" : "no";
      if (which === "confirm") return html(confirmEmail(lang, "leser@example.com", `${env.PUBLIC_URL}/confirm?token=preview`).html);
      const source = devotionals[Number(which) - 1];
      if (source) return html(devotionalEmail(lang, "leser@example.com", source, `${env.PUBLIC_URL}/unsubscribe?token=preview`).html);
    }
    return Response.redirect(env.SITE_URL, 302);
  },

  async scheduled(event: ScheduledController, env: Env): Promise<void> {
    if (event.cron === "0 6 * * 1") await emailBackup(env);
    else await sendDue(env);
  },
} satisfies ExportedHandler<Env>;
