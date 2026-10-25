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
          Holytones | Newsletter
        </p>
        <h2 className="mt-4 font-serif-display text-[1.375rem] leading-[1.25] text-foreground md:text-[1.625rem]">
          Weekly Devotional
        </h2>
        <p className="mt-3 font-serif-display text-base italic leading-snug text-accent md:text-lg">
          A Moment of Truth. Once a Week.
        </p>
        <p className="mt-6 text-base font-medium leading-snug text-accent md:text-[1.0625rem]">
          What if the thought exhausting you is not true?
        </p>
        <div className="mt-4 space-y-4 text-[15px] leading-[1.75] text-foreground-muted md:text-base">
          <p>
            Your mind is shaped every day by pressure, comparison, fear and voices competing to
            define you. But what does God actually say?
          </p>
          <p>
            These short, honest devotionals will help you recognise the lies, renew your thinking
            and return to the truth of who you are in Christ.
          </p>
          <p>
            No empty motivation. No pressure to become a better version of yourself. Just honest,
            Bible rooted reflections that speak into the thoughts you rarely say out loud.
          </p>
        </div>
      </div>

      <div className="border border-border-soft border-t-2 border-t-accent-gold/70 bg-surface px-6 py-8 sm:px-8">
        <h3 className="font-serif-display text-xl text-foreground">
          Sign up for the Holytones Weekly Devotional here.
        </h3>

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
              Send Me the Devotionals
            </a>
          </>
        ) : (
          <p className="mt-6 border border-dashed border-border-soft px-4 py-5 text-center text-sm text-foreground-muted">
            Subscriptions open soon.
          </p>
        )}

        <p className="mt-5 text-xs leading-relaxed text-foreground-muted">
          Free to join. Unsubscribe whenever you choose.{" "}
          <Link href="/personvern" className="link-underline text-accent">
            Privacy policy
          </Link>
        </p>
      </div>
    </div>
  );
}
