"use client";

// Signup for the free reader's guide and the Holytones letters. Subscribers go to MailerLite via
// /api/subscribe; the confirmation email, welcome email, and guide delivery are set up there.

import { useEffect, useRef, useState, type FormEvent } from "react";
import Script from "next/script";
import { links } from "@/lib/site-config";

const labelClass = "text-xs uppercase tracking-[0.18em] text-foreground-muted";
const inputClass =
  "border border-border-soft bg-background px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-accent focus-visible:ring-2 focus-visible:ring-accent/30";

export default function GuideSignup() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  const openedAt = useRef(0);
  const thanksHeading = useRef<HTMLHeadingElement>(null);
  const turnstileBox = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);

  useEffect(() => {
    openedAt.current = Date.now();
    return () => {
      if (widgetId.current) window.turnstile?.remove(widgetId.current);
      widgetId.current = null;
    };
  }, []);

  useEffect(() => {
    if (status === "sent") thanksHeading.current?.focus();
  }, [status]);

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
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          email,
          consent,
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
      setError(result?.error ?? "Something went wrong and you weren't subscribed. Please try again.");
    } catch {
      setError("Something went wrong and you weren't subscribed. Please try again.");
    }

    // A Turnstile token can only be used once, so ask for a fresh one before a retry.
    if (widgetId.current) window.turnstile?.reset(widgetId.current);
    setTurnstileToken("");
    setStatus("error");
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_minmax(0,28rem)] lg:gap-20">
      <div>
        <h2 className="font-serif-display text-4xl leading-tight text-foreground md:text-5xl">
          A Little Less Striving. A Little More Truth.
        </h2>
        <p className="mt-5 font-serif-display text-xl italic leading-snug text-accent md:text-2xl">
          Discover five beliefs that may be keeping you from the freedom you&apos;re searching for.
        </p>
        <div className="mt-8 space-y-6 text-base leading-relaxed text-foreground-muted md:text-lg">
          <p>
            Some of the most influential beliefs in your life are also the ones you are least
            likely to question. You may have learned that your worth depends on what you achieve,
            that confidence is the answer to insecurity, or that taking control of your
            circumstances will finally bring peace. These ideas often contain enough truth to sound
            convincing, which makes it difficult to recognize when they begin to shape your
            identity and expectations in ways that leave you disappointed, anxious, or exhausted.
          </p>
          <p>
            The problem is not that personal growth is wrong. Developing your abilities, taking
            responsibility for your decisions, and learning to navigate life&apos;s challenges are
            valuable. The deeper question is what happens when these things become the foundation
            of your identity and the source of your security. When everything depends on your
            ability to think correctly, make the right choices, and continually improve, even
            ordinary difficulties can begin to feel like evidence that you are failing.
          </p>
          <p>
            In my free reader&apos;s guide, <em>5 Lies That Keep You Striving</em>, I explore five
            familiar beliefs about identity, worth, control, and personal growth, alongside the
            biblical truths that offer a different way of understanding yourself and your
            relationship with God. Rather than giving you another list of things to accomplish,
            this guide invites you to examine the ideas you have trusted and consider what changes
            when you no longer have to carry the responsibility for becoming your own source of
            meaning and security.
          </p>
        </div>
      </div>

      <div className="self-start border border-border-soft bg-surface px-6 py-10 sm:px-10 lg:sticky lg:top-36">
        {status === "sent" ? (
          <div role="status">
            <h3
              ref={thanksHeading}
              tabIndex={-1}
              className="font-serif-display text-3xl text-foreground outline-none"
            >
              Thank you for subscribing!
            </h3>
            <p className="mt-4 text-base leading-relaxed text-foreground-muted">
              I&apos;m glad you&apos;re here. Once you&apos;ve confirmed your email address, your
              free guide will be on its way. I hope it encourages you to question some familiar
              assumptions and discover a different perspective on identity, worth, and freedom.
            </p>
          </div>
        ) : (
          <>
            <h3 className="font-serif-display text-3xl text-foreground">
              Receive your free guide
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-foreground-muted md:text-base">
              Subscribe to receive your copy of <em>5 Lies That Keep You Striving</em>, along with
              occasional letters from me exploring faith, identity, personal growth, and the
              questions that shape your everyday life. I&apos;ll also share selected reflections
              from my books, news about upcoming courses, and new releases from Holytones.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
              <label className="flex flex-col gap-2">
                <span className={labelClass}>First name</span>
                <input
                  required
                  type="text"
                  name="firstName"
                  autoComplete="given-name"
                  maxLength={100}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={inputClass}
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className={labelClass}>Email address</span>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  inputMode="email"
                  maxLength={200}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                />
              </label>

              <label className="flex items-start gap-3 text-sm leading-relaxed text-foreground-muted">
                <input
                  required
                  type="checkbox"
                  name="consent"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 h-4 w-4 shrink-0 accent-accent"
                />
                <span>
                  Yes, I&apos;d like to receive the free guide and occasional emails from Idun
                  Munkejord and Holytones. I can unsubscribe at any time.
                </span>
              </label>

              <details className="text-sm leading-relaxed text-foreground-muted">
                <summary className="w-fit cursor-pointer text-xs uppercase tracking-[0.18em] text-accent hover:text-foreground">
                  How your details are used
                </summary>
                <div className="mt-3 space-y-3">
                  <p>
                    Your first name and email address are used only to send you the guide and the
                    emails described above, based on the consent you give here. They are stored
                    with MailerLite, the email service that sends these emails on my behalf, and
                    are never sold or shared for any other purpose.
                  </p>
                  <p>
                    You&apos;ll first receive an email asking you to confirm your subscription.
                    Every email includes an unsubscribe link, and your details are kept until you
                    unsubscribe. You can ask to see, correct, or delete them at any time by writing
                    to{" "}
                    <a href={`mailto:${links.email}`} className="link-underline text-accent">
                      {links.email}
                    </a>
                    .
                  </p>
                </div>
              </details>

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
                className="mt-1 w-full bg-accent px-8 py-4 text-xs uppercase tracking-[0.2em] text-background transition-colors hover:bg-foreground disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {status === "sending" ? "Sending..." : "Send Me the Free Guide"}
              </button>

              <p role="alert" className="text-sm text-foreground empty:hidden">
                {status === "error" && error}
              </p>

              <p className="text-xs leading-relaxed text-foreground-muted">
                Thoughtful reflections delivered occasionally. No unnecessary emails, and you can
                unsubscribe at any time.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
