"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Script from "next/script";
import type { Lang } from "@/lib/i18n";
import { links } from "@/lib/site-config";

const text = {
  en: {
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    send: "Send message",
    sending: "Sending...",
    failed: "Your message could not be sent.",
    thanks: "Thank you",
    sentBefore: "Your message is on its way. We'll reply to ",
    sentAfter: " as soon as we can.",
    direct: "You can also write to us directly at",
  },
  no: {
    name: "Navn",
    email: "E-post",
    subject: "Emne",
    message: "Melding",
    send: "Send melding",
    sending: "Sender...",
    failed: "Meldingen din kunne ikke sendes.",
    thanks: "Takk",
    sentBefore: "Meldingen din er på vei. Vi svarer til ",
    sentAfter: " så snart vi kan.",
    direct: "Du kan også skrive direkte til oss på",
  },
};

// The server's error messages are in English; these are the Norwegian versions.
const norwegianErrors: Record<string, string> = {
  "Invalid request.": "Ugyldig forespørsel.",
  "Please fill in all the fields.": "Fyll ut alle feltene.",
  "Please enter a valid email address.": "Skriv inn en gyldig e-postadresse.",
  "Your message is too long.": "Meldingen din er for lang.",
  "The spam check did not pass. Please try again.": "Spamkontrollen gikk ikke gjennom. Prøv igjen.",
  "The contact form is not available right now.": "Kontaktskjemaet er ikke tilgjengelig akkurat nå.",
  "Your message could not be sent.": "Meldingen din kunne ikke sendes.",
};

const labelClass = "text-xs uppercase tracking-[0.18em] text-foreground-muted";
const inputClass =
  "border-b border-border-soft bg-transparent py-2 text-foreground outline-none transition-colors focus:border-accent";

export default function ContactForm({ lang }: { lang: Lang }) {
  const t = text[lang];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  const openedAt = useRef(0);
  const turnstileBox = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);

  useEffect(() => {
    openedAt.current = Date.now();
    return () => {
      if (widgetId.current) window.turnstile?.remove(widgetId.current);
      widgetId.current = null;
    };
  }, []);

  function renderTurnstile() {
    if (!window.turnstile || !turnstileBox.current || widgetId.current) return;
    widgetId.current = window.turnstile.render(turnstileBox.current, {
      sitekey: links.turnstileSiteKey,
      theme: "light",
      callback: setTurnstileToken,
    });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          website,
          turnstileToken,
          elapsed: Date.now() - openedAt.current,
        }),
      });
      const result = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (res.ok && result?.ok) {
        setStatus("sent");
        return;
      }
      const serverError = result?.error ?? text.en.failed;
      setError(lang === "no" ? (norwegianErrors[serverError] ?? t.failed) : serverError);
    } catch {
      setError(t.failed);
    }

    // A Turnstile token can only be used once, so ask for a fresh one before a retry.
    if (widgetId.current) window.turnstile?.reset(widgetId.current);
    setTurnstileToken("");
    setStatus("error");
  }

  if (status === "sent") {
    return (
      <div role="status">
        <h2 className="font-serif-display text-2xl text-foreground">{t.thanks}</h2>
        <p className="mt-4 max-w-md text-base leading-relaxed text-foreground-muted">
          {t.sentBefore}
          {email}
          {t.sentAfter}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className={labelClass}>{t.name}</span>
          <input
            required
            type="text"
            name="name"
            autoComplete="name"
            maxLength={100}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className={labelClass}>{t.email}</span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            maxLength={200}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className={labelClass}>{t.subject}</span>
        <input
          required
          type="text"
          name="subject"
          maxLength={150}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={inputClass}
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className={labelClass}>{t.message}</span>
        <textarea
          required
          rows={5}
          name="message"
          maxLength={5000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`resize-none ${inputClass}`}
        />
      </label>

      {/* Spam trap: hidden from people, tempting to bots. */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </label>
      </div>

      {links.turnstileSiteKey && (
        <>
          <Script
            src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
            onReady={renderTurnstile}
          />
          <div ref={turnstileBox} />
        </>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 w-fit border border-accent px-8 py-3 text-xs uppercase tracking-[0.2em] text-accent transition-colors hover:bg-accent hover:text-background disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? t.sending : t.send}
      </button>

      <p role="alert" className="text-sm text-foreground-muted empty:hidden">
        {status === "error" && (
          <>
            {error} {t.direct}{" "}
            <a href={`mailto:${links.email}`} className="link-underline text-accent">
              {links.email}
            </a>
            .
          </>
        )}
      </p>
    </form>
  );
}
