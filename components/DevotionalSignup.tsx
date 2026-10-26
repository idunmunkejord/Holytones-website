import Image from "next/image";
import Link from "next/link";
import { links } from "@/lib/site-config";

// Weekly devotional signup. The button opens the Substack publication in `links.substack`,
// where visitors subscribe; nothing is stored by this site.

export default function DevotionalSignup() {
  const substack = links.substack.replace(/\/+$/, "");

  return (
    <div className="mx-auto grid max-w-5xl items-start gap-10 md:grid-cols-[1fr_minmax(0,24rem)] md:gap-14">
      {/* Text with the signup box under it; the picture sits in the right column. */}
      <div className="max-w-xl">
        <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-accent-gold">
          <span className="h-px w-8 bg-accent-gold/70" aria-hidden />
          Holytones | Newsletter
        </p>
        <h2 className="mt-4 font-serif-display text-[1.375rem] leading-[1.25] text-foreground md:text-[1.625rem]">
          Weekly Devotional
        </h2>
        <p className="mt-4 text-base leading-snug text-accent md:text-[1.0625rem]">
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

        <div className="mt-8 border border-border-soft border-t-2 border-t-accent-gold/70 bg-surface px-6 py-8 sm:px-8">
          <h3 className="font-serif-display text-xl text-foreground">
            Weekly Devotional Holytones
          </h3>

          {substack ? (
            // Opens the Substack signup page, where visitors enter their email.
            <a
              href={`${substack}/subscribe`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full bg-accent px-6 py-3.5 text-center text-xs uppercase tracking-[0.2em] text-background transition-colors hover:bg-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Send Devotionals
            </a>
          ) : (
            <p className="mt-6 border border-dashed border-border-soft px-4 py-5 text-center text-sm text-foreground-muted">
              Subscriptions open soon.
            </p>
          )}

          <p className="mt-5 text-xs leading-relaxed text-foreground-muted">
            Free to join. Free weekly reflections from Holytones.{" "}
            <Link href="/personvern" className="link-underline text-accent">
              Privacy policy
            </Link>
          </p>
        </div>
      </div>

      <div className="relative aspect-square w-full overflow-hidden border border-border-soft md:mt-10">
        <Image
          src="/images/weekly-devotional.webp"
          alt="A tablet on a table showing the Weekly Devotional email"
          fill
          sizes="(min-width: 768px) 384px, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
