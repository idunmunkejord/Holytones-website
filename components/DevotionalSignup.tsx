import Image from "next/image";
import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { links } from "@/lib/site-config";

// Weekly devotional signup. The button opens the Substack publication in `links.substack`,
// where visitors subscribe; nothing is stored by this site.

const text = {
  en: {
    label: "Holytones | Newsletter",
    heading: "Weekly Devotional",
    lead: "What if the thought exhausting you is not true?",
    body: [
      "Your mind is shaped every day by pressure, comparison, fear and voices competing to define you. But what does God actually say?",
      "These short, honest devotionals will help you recognise the lies, renew your thinking and return to the truth of who you are in Christ.",
      "No empty motivation. No pressure to become a better version of yourself. Just honest, Bible rooted reflections that speak into the thoughts you rarely say out loud.",
    ],
    boxHeading: "Weekly Devotional Holytones",
    button: "Send Devotionals",
    soon: "Subscriptions open soon.",
    free: "Free to join. Free weekly reflections from Holytones.",
    privacy: "Privacy policy",
    imageAlt: "A tablet on a table showing the Weekly Devotional email",
  },
  no: {
    label: "Holytones | Nyhetsbrev",
    heading: "Ukentlig andakt",
    lead: "Hva om tanken som sliter deg ut, ikke er sann?",
    body: [
      "Tankene dine formes hver dag av press, sammenligning, frykt og stemmer som konkurrerer om å definere deg. Men hva sier Gud egentlig?",
      "Disse korte, ærlige andaktene hjelper deg å kjenne igjen løgnene, fornye tankene dine og vende tilbake til sannheten om hvem du er i Kristus.",
      "Ingen tom motivasjon. Ikke noe press om å bli en bedre versjon av deg selv. Bare ærlige, bibelforankrede refleksjoner som taler inn i tankene du sjelden sier høyt.",
    ],
    boxHeading: "Ukentlig andakt fra Holytones",
    button: "Send meg andakter",
    soon: "Påmeldingen åpner snart.",
    free: "Gratis å melde seg på. Gratis ukentlige refleksjoner fra Holytones.",
    privacy: "Personvernerklæring",
    imageAlt: "Et nettbrett på et bord som viser e-posten med ukentlig andakt",
  },
};

export default function DevotionalSignup({ lang }: { lang: Lang }) {
  const t = text[lang];
  const substack = links.substack.replace(/\/+$/, "");

  return (
    <div className="mx-auto grid max-w-5xl items-start gap-10 md:grid-cols-[1fr_minmax(0,24rem)] md:gap-14">
      {/* Text with the signup box under it; the picture sits in the right column (above the text on phones). */}
      <div className="max-w-xl">
        <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-accent-gold">
          <span className="h-px w-8 bg-accent-gold/70" aria-hidden />
          {t.label}
        </p>
        <h2 className="mt-4 font-serif-display text-[1.375rem] leading-[1.25] text-foreground md:text-[1.625rem]">
          {t.heading}
        </h2>
        <p className="mt-4 text-base leading-snug text-accent md:text-[1.0625rem]">{t.lead}</p>
        <div className="mt-4 space-y-4 text-[15px] leading-[1.75] text-foreground-muted md:text-base">
          {t.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8 max-w-[22.75rem] border border-border-soft border-t-2 border-t-accent-gold/70 bg-surface px-6 py-8 sm:px-8">
          <h3 className="font-serif-display text-xl text-foreground">{t.boxHeading}</h3>

          {substack ? (
            // Opens the Substack signup page, where visitors enter their email.
            <a
              href={`${substack}/subscribe`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full bg-accent px-6 py-3.5 text-center text-xs uppercase tracking-[0.2em] text-background transition-colors hover:bg-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {t.button}
            </a>
          ) : (
            <p className="mt-6 border border-dashed border-border-soft px-4 py-5 text-center text-sm text-foreground-muted">
              {t.soon}
            </p>
          )}

          <p className="mt-5 text-xs leading-relaxed text-foreground-muted">
            {t.free}{" "}
            <Link href="/personvern" className="link-underline text-accent">
              {t.privacy}
            </Link>
          </p>
        </div>
      </div>

      <div className="relative order-first aspect-square w-full overflow-hidden border border-border-soft md:order-none md:mt-10">
        <Image
          src="/images/weekly-devotional.webp"
          alt={t.imageAlt}
          fill
          sizes="(min-width: 768px) 384px, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
