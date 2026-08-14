"use client";

import { useState, type FormEvent } from "react";
import { links } from "@/lib/site-config";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name || "the Holytones site"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${links.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-[0.18em] text-foreground-muted">Name</span>
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-b border-border-soft bg-transparent py-2 text-foreground outline-none transition-colors focus:border-accent"
            placeholder="Your name"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-[0.18em] text-foreground-muted">Email</span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-b border-border-soft bg-transparent py-2 text-foreground outline-none transition-colors focus:border-accent"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-[0.18em] text-foreground-muted">Message</span>
        <textarea
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="resize-none border-b border-border-soft bg-transparent py-2 text-foreground outline-none transition-colors focus:border-accent"
          placeholder="Booking inquiry, press request, or just a hello..."
        />
      </label>

      <button
        type="submit"
        className="mt-2 w-fit border border-accent px-8 py-3 text-xs uppercase tracking-[0.2em] text-accent transition-colors hover:bg-accent hover:text-background"
      >
        Send message
      </button>

      {sent && (
        <p className="text-sm text-foreground-muted">
          Your email client should be opening now with your message ready to send. If nothing
          happened, write to us directly at{" "}
          <a href={`mailto:${links.email}`} className="link-underline text-accent">
            {links.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
