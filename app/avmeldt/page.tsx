import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";

// Shown after someone unsubscribes from the devotional emails. Simplero sends them here: the
// address of this page is set as the unsubscribe confirmation page in the Simplero account. The
// emails are in Norwegian, so the page is too. Kept out of search results.

export const metadata: Metadata = {
  title: "Avmeldt",
  description: "Du er nå meldt av Holytones Ukentlig andakt.",
  robots: { index: false, follow: false },
};

export default function UnsubscribedPage() {
  return (
    <section className="px-6 py-14 md:px-10 md:py-20">
      <div className="mx-auto max-w-2xl">
        <SectionLabel>Ukentlig andakt</SectionLabel>
        <div className="border border-border-soft border-t-2 border-t-accent-gold/70 bg-surface px-6 py-9 sm:px-10 sm:py-10">
          <h1 className="font-serif-display text-[1.5rem] leading-[1.25] text-foreground md:text-[1.75rem]">
            Du er nå meldt av Holytones Ukentlig andakt
          </h1>
          <div className="mt-6 space-y-4 text-[15px] leading-[1.75] text-foreground-muted md:text-base">
            <p>Du vil ikke lenger motta andaktene våre på e-post.</p>
            <p>
              Takk for at du har vært påmeldt denne tiden. Du er alltid hjertelig velkommen
              tilbake.
            </p>
            <p className="pt-2 text-foreground">Idun fra Holytones</p>
          </div>
        </div>
        <p className="mt-8 text-sm text-foreground-muted">
          <Link href="/" className="link-underline">
            Til forsiden
          </Link>
        </p>
      </div>
    </section>
  );
}
