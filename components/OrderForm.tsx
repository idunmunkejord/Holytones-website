"use client";

import { useState, type FormEvent } from "react";
import { links } from "@/lib/site-config";

export default function OrderForm({ bookTitle }: { bookTitle: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Book order: ${bookTitle}`);
    const body = encodeURIComponent(
      `Book: ${bookTitle}\nQuantity: ${quantity}\n\nName: ${name}\nEmail: ${email}\nShipping address:\n${address}`
    );
    window.location.href = `mailto:${links.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <p className="mt-6 max-w-sm text-sm leading-relaxed text-foreground-muted">
        Your email client should be opening now with your order ready to send. We&apos;ll reply
        with payment details, and your book will be shipped once payment is received. If nothing
        happened, write to us directly at{" "}
        <a href={`mailto:${links.email}`} className="link-underline text-accent">
          {links.email}
        </a>
        .
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex max-w-sm flex-col gap-5">
      <label className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-[0.18em] text-foreground-muted">Name</span>
        <input
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-b border-border-soft bg-transparent py-2 text-sm text-foreground outline-none transition-colors focus:border-accent"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-[0.18em] text-foreground-muted">Email</span>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-b border-border-soft bg-transparent py-2 text-sm text-foreground outline-none transition-colors focus:border-accent"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-[0.18em] text-foreground-muted">
          Shipping address
        </span>
        <textarea
          required
          rows={3}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="resize-none border-b border-border-soft bg-transparent py-2 text-sm text-foreground outline-none transition-colors focus:border-accent"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-[0.18em] text-foreground-muted">
          Quantity
        </span>
        <input
          required
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-24 border-b border-border-soft bg-transparent py-2 text-sm text-foreground outline-none transition-colors focus:border-accent"
        />
      </label>

      <button
        type="submit"
        className="mt-1 w-fit border border-accent px-8 py-3 text-xs uppercase tracking-[0.2em] text-accent transition-colors hover:bg-accent hover:text-background"
      >
        Place order
      </button>

      <p className="text-xs leading-relaxed text-foreground-muted/80">
        No payment is taken here. We&apos;ll email you with payment details, and ship your book
        once payment is received.
      </p>
    </form>
  );
}
