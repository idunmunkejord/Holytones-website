import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import { salesTerms } from "@/lib/sales-terms";

export const metadata: Metadata = {
  title: "Salgsbetingelser",
  description: "Salgsbetingelser for kjøp av fysiske bøker fra Holytones.",
};

export default function SalesTermsPage() {
  return (
    <section className="px-6 py-14 md:px-10 md:py-20">
      <div className="mx-auto max-w-3xl">
        <SectionLabel>Kundeservice</SectionLabel>
        <h1 className="font-serif-display text-[1.875rem] leading-[1.2] text-foreground md:text-[2.375rem]">
          Salgsbetingelser
        </h1>
        <p className="mt-3 text-xs uppercase tracking-[0.2em] text-accent-gold">
          {salesTerms.subtitle}
        </p>
        <p className="mt-1 text-xs text-foreground-muted">{salesTerms.updated}</p>

        <div className="mt-8 space-y-8 text-[15px] leading-[1.75] text-foreground-muted md:text-base">
          <p>{salesTerms.intro}</p>

          {salesTerms.sections.map((section) => (
            <div key={section.title} className="space-y-3 border-t border-border-soft pt-6">
              <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-foreground">
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph, i) => (
                <p key={i} className="whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

          <p className="border-t border-border-soft pt-6 text-sm">
            <Link href="/privacy" className="link-underline text-accent">
              Personvernerklæring
            </Link>
            <span className="mx-3" aria-hidden>
              ·
            </span>
            <Link href="/contact" className="link-underline text-accent">
              Tilbake til kontakt
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
