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
    heading: "Make Room for God in Everyday Life",
    body: [
      "Perhaps you have worked hard on yourself to become more confident, overcome challenges and build a meaningful life. Yet there is always something more to achieve, a weakness to overcome or a side of yourself you feel you should change. What began as a desire to grow may have become an exhausting demand to keep improving.",
      "The Christian faith gives you a different starting point. You do not have to prove your worth or carry the responsibility for everything that happens. You were created for fellowship with God. As you get to know Him and discover who you are in Christ, you can find a security that does not depend on how well you perform.",
      "In the Holytones newsletter you receive short, honest reflections rooted in the Bible, about faith, identity and the thoughts you rarely share with others. They invite you to recognise the lies you have believed about yourself, find rest in God’s promises and take the next step with Him.",
      "Sign up and get the first reflection straight to your inbox. After that, you will receive a new one every Wednesday and Sunday.",
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
    heading: "Gi Gud plass i hverdagen",
    body: [
      "Kanskje har du jobbet hardt med deg selv for å bli tryggere, mestre utfordringer og skape et meningsfullt liv. Likevel er det alltid noe mer å få til, en svakhet å overvinne eller en side ved deg selv du burde forandre. Det som begynte som et ønske om å utvikle deg, har kanskje blitt et slitsomt krav om stadig å forbedre deg.",
      "Den kristne troen gir deg et annet utgangspunkt. Du trenger ikke å bevise din verdi eller bære ansvaret for alt som skjer. Du er skapt til fellesskap med Gud. Når du blir kjent med ham og oppdager hvem du er i Kristus, kan du finne trygghet som ikke avhenger av hvor godt du presterer.",
      "I nyhetsbrevet fra Holytones får du korte, ærlige refleksjoner forankret i Bibelen, om tro, identitet og tankene du sjelden deler med andre. Tekstene inviterer deg til å gjenkjenne løgnene du har trodd om deg selv, finne hvile i Guds løfter og ta neste steg sammen med ham.",
      "Meld deg på og få den første refleksjonen rett i innboksen. Deretter får du en ny tekst hver onsdag og søndag.",
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
        <h2 className="mt-4 font-serif-display text-3xl leading-tight font-bold text-brown-dark md:text-4xl">
          {t.heading}
        </h2>
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
