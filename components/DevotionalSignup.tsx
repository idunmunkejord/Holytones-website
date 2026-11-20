import Image from "next/image";
import Link from "next/link";
import { CookieSettingsLink } from "@/components/CookieBanner";
import DevotionalForm from "@/components/DevotionalForm";
import SimpleroPopupButton from "@/components/SimpleroPopupButton";
import type { Lang } from "@/lib/i18n";
import { links } from "@/lib/site-config";

// Weekly devotional signup. The button opens the Simplero popup form in
// `links.simpleroDevotional`, where visitors subscribe; nothing is stored by this site. The
// optional marketing cookies that come with that form are asked about in CookieBanner.

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
    boxHeading: "Weekly Devotional",
    button: "Send Devotionals",
    soon: "Subscriptions open soon.",
    failed: "The signup form could not be opened. Please try again in a moment.",
    free: "Free to join. Receive Bible-rooted devotionals every Sunday and Wednesday. Unsubscribe at any time.",
    privacy: "Privacy policy",
    cookies: "Cookie settings",
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
    boxHeading: "Ukentlig andakt",
    button: "Send andakter",
    soon: "Påmeldingen åpner snart.",
    failed: "Påmeldingsskjemaet kunne ikke åpnes. Prøv igjen om litt.",
    free: "Gratis påmelding. Motta bibelforankrede andakter hver søndag og onsdag. Meld deg av når som helst.",
    privacy: "Personvernerklæring",
    cookies: "Informasjonskapsler",
    imageAlt: "Et nettbrett på et bord som viser e-posten med ukentlig andakt",
  },
};

export default function DevotionalSignup({ lang }: { lang: Lang }) {
  const t = text[lang];
  const substack = links.substack.replace(/\/+$/, "");
  // Only the Simplero form brings optional cookies, so only then is there anything to ask about.
  const usesSimplero = Boolean(links.simpleroDevotional) && !links.devotionalSignup;

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
        <div className="mt-4 space-y-4 text-base leading-relaxed text-foreground-muted">
          {t.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-9 max-w-[24rem] border border-border-soft border-t-2 border-t-accent-gold/70 bg-surface px-6 py-9 text-center sm:px-10 sm:py-10">
          <h3 className="font-serif-display text-[1.75rem] leading-tight text-foreground sm:text-[2rem]">
            {t.boxHeading}
          </h3>

          {links.devotionalSignup ? (
            <DevotionalForm lang={lang} endpoint={links.devotionalSignup} />
          ) : links.simpleroDevotional ? (
            // Opens the Simplero signup popup on this page.
            <div className="mt-7">
              <SimpleroPopupButton
                page={links.simpleroDevotional}
                failedText={t.failed}
                className="block w-full bg-accent px-6 py-4 text-center text-[13px] font-medium uppercase tracking-[0.22em] text-background transition-colors hover:bg-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent aria-busy:cursor-progress aria-busy:opacity-60"
              >
                {t.button}
              </SimpleroPopupButton>
            </div>
          ) : substack ? (
            // Opens the Substack signup page, where visitors enter their email.
            <a
              href={substack}
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

          <p className="mt-6 text-left text-[13px] leading-relaxed text-foreground-muted">
            {t.free}
          </p>
          <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-xs text-foreground-muted">
            <Link href="/personvern" className="link-underline">
              {t.privacy}
            </Link>
            {usesSimplero && (
              <CookieSettingsLink className="link-underline">{t.cookies}</CookieSettingsLink>
            )}
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
