"use client";

import { useState, type FormEvent } from "react";
import type { Lang } from "@/lib/i18n";

// Sign-up for the devotional emails. Posts to the devotional program (see devotional/), which
// emails a confirmation link; Day 1 follows as soon as the reader confirms.

const text = {
  en: {
    email: "Your email address",
    newsletter: "Also send me the Holytones newsletter",
    button: "Send Devotionals",
    sending: "Sending...",
    doneTitle: "Check your inbox",
    done: "We've sent you an email. Click the link in it to confirm, and the first devotional is on its way.",
    invalid: "Please enter a valid email address.",
    failed: "Something went wrong. Please try again in a moment.",
  },
  no: {
    email: "Din e-postadresse",
    newsletter: "Send meg også nyhetsbrevet fra Holytones",
    button: "Send meg andakter",
    sending: "Sender...",
    doneTitle: "Sjekk innboksen din",
    done: "Vi har sendt deg en e-post. Klikk på lenken i den for å bekrefte, så er den første andakten på vei.",
    invalid: "Skriv inn en gyldig e-postadresse.",
    failed: "Noe gikk galt. Prøv igjen om litt.",
  },
};

export default function DevotionalForm({ lang, endpoint }: { lang: Lang; endpoint: string }) {
  const t = text[lang];
  const [email, setEmail] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch(`${endpoint}/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, lang, newsletter, website }),
      });
      const result = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (res.ok && result?.ok) {
        setStatus("done");
        return;
      }
      setError(result?.error === "email" ? t.invalid : t.failed);
    } catch {
      setError(t.failed);
    }
    setStatus("error");
  }

  if (status === "done") {
    return (
      <div role="status" className="mt-6">
        <p className="font-serif-display text-lg text-foreground">{t.doneTitle}</p>
        <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{t.done}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <label className="block">
        <span className="sr-only">{t.email}</span>
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          maxLength={200}
          placeholder={t.email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-border-soft bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
        />
      </label>

      <label className="flex items-start gap-3 text-sm leading-snug text-foreground-muted">
        <input
          type="checkbox"
          checked={newsletter}
          onChange={(e) => setNewsletter(e.target.checked)}
          className="mt-0.5 h-4 w-4 accent-accent"
        />
        {t.newsletter}
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

      <button
        type="submit"
        disabled={status === "sending"}
        className="block w-full bg-accent px-6 py-3.5 text-center text-xs uppercase tracking-[0.2em] text-background transition-colors hover:bg-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? t.sending : t.button}
      </button>

      <p role="alert" className="text-sm text-foreground-muted empty:hidden">
        {status === "error" && error}
      </p>
    </form>
  );
}
