"use client";

// NOTE: this form currently only shows a confirmation message in the UI.
// Before launch, wire the onSubmit handler to a real email provider
// (Mailchimp, ConvertKit, Beehiiv, etc.) or point the <form> at that
// provider's hosted signup endpoint.

import { useState, type FormEvent } from "react";

export default function MailingList() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-xl text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-accent">Stay close</p>
      <h2 className="mt-3 font-serif-display text-3xl text-foreground md:text-4xl">
        Join the mailing list
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
        New songs, books, and courses — sent occasionally, never spammed.
      </p>

      {submitted ? (
        <p className="mt-8 text-sm text-accent">Thank you — you&apos;re on the list.</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="flex-1 border border-border-soft bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
          />
          <button
            type="submit"
            className="border border-accent px-6 py-3 text-xs uppercase tracking-[0.2em] text-accent transition-colors hover:bg-accent hover:text-background"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
