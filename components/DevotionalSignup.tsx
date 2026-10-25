import Link from "next/link";
import { links } from "@/lib/site-config";

// Weekly devotional signup. Subscribers go straight to the Substack publication in
// `links.substack` through Substack's own embedded form; nothing is stored by this site.

export default function DevotionalSignup() {
  const substack = links.substack.replace(/\/+$/, "");

  return (
    <div className="mx-auto grid max-w-5xl items-start gap-10 md:grid-cols-[1fr_minmax(0,24rem)] md:gap-14">
      <div className="max-w-xl">
        <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-accent-gold">
          <span className="h-px w-8 bg-accent-gold/70" aria-hidden />
          Holytones | Weekly Devotional
        </p>
        <h2 className="mt-4 font-serif-display text-[1.375rem] leading-[1.25] text-foreground md:text-[1.625rem]">
          A Moment of Truth. Once a Week.
        </h2>
        <p className="mt-3 font-serif-display text-base italic leading-snug text-accent md:text-lg">
          A Different Way to See Your Life.
        </p>
        <div className="mt-6 space-y-4 text-[15px] leading-[1.75] text-foreground-muted md:text-base">
          <p>
            You hear countless voices telling you who you should be, what you need to achieve, and
            how to take control of your life. But what does God actually say?
          </p>
          <p>
            Each week, receive a devotional from my upcoming 365-day devotional book, exploring
            identity, faith, relationships, and the freedom of living by God&apos;s truth rather
            than the expectations of the world.
          </p>
          <p>A moment to reflect, renew your mind, and turn your attention back to Him.</p>
        </div>
      </div>

      <div className="border border-border-soft border-t-2 border-t-accent-gold/70 bg-surface px-6 py-8 sm:px-8">
        <h3 className="font-serif-display text-xl text-foreground">
          Receive Your Weekly Devotional
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-foreground-muted">
          A Scripture-based reflection delivered to your inbox every week, free of charge.
        </p>

        {substack ? (
          <>
            {/* Substack's official embedded signup form, used as Substack provides it. */}
            <iframe
              src={`${substack}/embed`}
              title="Subscribe to the Holytones weekly devotional on Substack"
              width="100%"
              height="320"
              className="mt-6 block w-full"
              style={{ border: "1px solid #EEE", background: "white" }}
              frameBorder="0"
              scrolling="no"
            />
            <a
              href={`${substack}/subscribe`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 block w-full bg-accent px-6 py-3.5 text-center text-xs uppercase tracking-[0.2em] text-background transition-colors hover:bg-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Subscribe to Weekly Devotionals
            </a>
          </>
        ) : (
          <p className="mt-6 border border-dashed border-border-soft px-4 py-5 text-center text-sm text-foreground-muted">
            Subscriptions open soon.
          </p>
        )}

        <p className="mt-5 text-xs leading-relaxed text-foreground-muted">
          Free weekly reflections from Idun Munkejord. Unsubscribe whenever you wish.{" "}
          <Link href="/personvern" className="link-underline text-accent">
            Privacy policy
          </Link>
        </p>
      </div>
    </div>
  );
}
