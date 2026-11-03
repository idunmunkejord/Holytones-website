import type { Metadata } from "next";
import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import ZoomImage from "@/components/ZoomImage";
import { books, company, links, siteConfig } from "@/lib/site-config";

// Landing page for the Facebook ad for LØGNEN. Not linked from the menu or anywhere else on the
// site, and kept out of search engines; people reach it only through the ad's link.
// Everything said about The Secret is taken from the publisher's own description (sourceNote);
// everything said about LØGNEN is taken from the book's cover text.

const book = books[0];
const headline = "Hva om «Hemmeligheten» ikke er sann?";
const intro =
  "Det er et fristende løfte: Tenk riktig, og skap livet du ønsker. Men hvor mye makt har tankene dine egentlig? Og hva skjer med troen, håpet og selvbildet når livet ikke blir slik du har sett for deg?";
const sourceNote = "Kilde: forlagets omtale av The Secret, thesecret.tv/products/the-secret-book (lest 3. november 2026).";

// A passage from the manuscript, shown before the final purchase section. Until one is chosen,
// the page shows a passage from the back cover instead.
const excerpt: { text: string; source: string } = {
  text: "For de farligste løgnene er ikke nødvendigvis de som er fullstendig usanne, men de som inneholder akkurat nok sannhet til at du ikke oppdager hva som har blitt endret på.",
  source: "Fra bokens bakside",
};

export const metadata: Metadata = {
  title: `${headline} — ${book.title.toUpperCase()}`,
  description: intro,
  robots: { index: false, follow: false },
  openGraph: {
    title: headline,
    description: intro,
    type: "website",
    url: `${siteConfig.url}/kampanje`,
    images: [{ url: `${siteConfig.url}${book.cover}` }],
  },
};

function BuyButton({ onDark = false }: { onDark?: boolean }) {
  if (!book.orderUrl) return null;
  return (
    <div>
      <a
        href={book.orderUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={
          onDark
            ? "inline-block border border-loegnen-light bg-loegnen-light px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-loegnen-night transition-colors hover:bg-transparent hover:text-loegnen-light"
            : "inline-block border border-loegnen-night bg-loegnen-night px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-loegnen-light transition-colors hover:bg-transparent hover:text-loegnen-night"
        }
      >
        Kjøp {book.title.toUpperCase()}
      </a>
      <p className={`mt-3 text-xs ${onDark ? "text-background/60" : "text-foreground-muted"}`}>
        Lanseres {book.status.toLowerCase()}
      </p>
    </div>
  );
}

export default function KampanjePage() {
  return (
    <div lang="no">
      {/* The site menu is hidden here (standalonePaths); just the name, with no links away. */}
      <header className="border-b border-border-soft bg-background px-6 py-4 md:px-10">
        <p className="logo-gold mx-auto max-w-5xl font-serif-display text-3xl tracking-wide sm:text-4xl">
          {siteConfig.name}
        </p>
      </header>

      {/* 1. The promise, and the question it raises */}
      <section className="border-b border-border-soft bg-background-alt px-6 pt-12 pb-16 md:px-10 md:pt-20">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 md:flex-row md:items-center md:gap-16">
          {book.cover && (
            <ZoomImage
              src={book.cover}
              alt={`${book.title} av Idun Munkejord — forside og bakside`}
              sizes="(min-width: 768px) 320px, 220px"
              className="order-last mx-auto aspect-[3/4] w-[55%] max-w-[220px] shrink-0 overflow-hidden md:order-first md:mx-0 md:w-80 md:max-w-xs"
              imageClassName="object-cover object-right mix-blend-multiply"
            />
          )}
          <div className="max-w-xl">
            <SectionLabel>Et kristent svar på The Secret</SectionLabel>
            <h1 className="font-serif-display text-4xl leading-tight font-bold text-loegnen-night md:text-6xl">
              {headline}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground">{intro}</p>
            <p className="mt-4 text-base leading-relaxed text-foreground-muted">
              I {book.title.toUpperCase()} undersøker Idun Munkejord ideene bak The Secret – troen på
              tiltrekningskraften og på at alle svarene finnes i deg selv – i lys av kristen tro. En
              bok for deg som vil granske løftene, stille de vanskelige spørsmålene og undersøke hva
              du bygger håpet ditt på.
            </p>
            <div className="mt-8">
              <BuyButton />
            </div>
          </div>
        </div>
      </section>

      {/* 2. What The Secret promises, in its publisher's own words */}
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-2xl space-y-5 text-base leading-relaxed text-foreground-muted">
          <SectionLabel>Løftet</SectionLabel>
          <h2 className="font-serif-display text-3xl font-bold text-loegnen-night">
            Det er ikke rart at det treffer
          </h2>
          <p>
            De fleste av oss kjenner lengselen etter håp, retning og forandring. Når noe lover å vise
            veien til et bedre liv, er det forståelig at vi lytter.
          </p>
          <p>
            Forlaget beskriver The Secret som en bok som forklarer «the law that is governing all
            lives», og som gir kunnskapen om hvordan du kan skape et gledesfylt liv – med vilje og
            uten anstrengelse. Loven det handler om, er det boken kaller tiltrekningsloven: tanken om
            at det du fester tankene ved, trekker du til deg.
          </p>
          <p className="border-l border-border-soft pl-4 text-xs leading-relaxed">{sourceNote}</p>
        </div>
      </section>

      {/* 3. Examining the claim */}
      <section className="bg-loegnen-night px-6 py-20 text-background md:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-loegnen-light">
            <span className="h-px w-8 bg-loegnen-light/60" />
            Spørsmålet
          </p>
          <h2 className="font-serif-display text-3xl leading-tight font-bold text-loegnen-light md:text-5xl">
            Hvis tankene skaper livet ditt – hvem får skylden når livet gjør vondt?
          </h2>
          <p className="mt-4 text-xs text-background/60">
            Dette er ikke et sitat fra The Secret, men et spørsmål om hva læren innebærer.
          </p>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-loegnen-light">Det som stemmer</h3>
              <p className="mt-3 leading-relaxed text-background/85">
                Tankene dine betyr noe. Det du tenker, påvirker hvordan du har det, hvilke valg du
                tar og hvordan du handler. Det er ikke det som står på spill her.
              </p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-loegnen-light">Den store påstanden</h3>
              <p className="mt-3 leading-relaxed text-background/85">
                Det er en langt større påstand at tankene dine trekker til seg eller bestemmer det som
                skjer rundt deg: sykdom og helse, tap og fremgang, hvordan andre behandler deg.
              </p>
            </div>
          </div>

          <div className="mt-10 space-y-5 border-t border-background/15 pt-10 leading-relaxed text-background/85">
            <p>
              Hvis den påstanden er sann, følger noe tungt med. Når sykdommen kommer, når
              ekteskapet ryker eller når bønnen ikke blir besvart slik du håpet, ligger forklaringen
              hos deg: Du tenkte feil, du trodde ikke nok, du sendte ut feil energi.
            </p>
            <p>
              Et løfte som begynte som håp, kan da bli til skyld. Og et menneske som allerede har det
              vondt, får enda en byrde å bære.
            </p>
          </div>

          <div className="mt-12">
            <BuyButton onDark />
          </div>
        </div>
      </section>

      {/* 4. The book's response */}
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-2xl space-y-5 text-base leading-relaxed text-foreground-muted">
          <SectionLabel>Bokens svar</SectionLabel>
          <h2 className="font-serif-display text-3xl font-bold text-loegnen-night">
            En gammel fristelse i nytt språk
          </h2>
          <p>
            {book.title.toUpperCase()} spør om troen på tiltrekningskraften, og på at alle svarene
            finnes i deg selv, ikke bare er uskyldige redskaper. Kanskje er de uttrykk for en eldre
            fristelse: ønsket om å bli din egen Gud. Det er den samme fristelsen som møtte Adam og Eva
            i hagen: «dere blir som Gud» (1. Mosebok 3,5).
          </p>
          <p>
            Boken inviterer deg til å skille det som er sant fra det som bare ligner sannheten. Den
            peker på at friheten du søker, ikke begynner med å vende blikket innover mot deg selv,
            men utover og opp mot Han som «fyller alt i alle» (Efeserne 1,17–23).
          </p>
          <p>
            Det er ikke et løfte om at livet blir lett. Men håpet ditt trenger ikke å hvile på hvor
            riktig du klarer å tenke.
          </p>
        </div>
      </section>

      {/* 5. Excerpt */}
      <section className="border-y border-border-soft bg-background-alt px-6 py-16 md:px-10">
        <figure className="mx-auto max-w-2xl">
          <blockquote className="border-l-2 border-loegnen-light pl-6 font-serif-display text-2xl leading-snug text-loegnen-night md:text-3xl">
            «{excerpt.text}»
          </blockquote>
          <figcaption className="mt-4 pl-6 text-xs uppercase tracking-[0.2em] text-foreground-muted">
            {excerpt.source}
          </figcaption>
        </figure>
      </section>

      {/* 6. Buy */}
      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <h2 className="font-serif-display text-3xl font-bold text-loegnen-night md:text-4xl">
            Undersøk hva du bygger håpet ditt på
          </h2>
          <p className="mt-4 text-foreground-muted">
            {book.title.toUpperCase()} – {book.subtitle}
          </p>
          <div className="mt-8">
            <BuyButton />
          </div>
          <div className="mt-12 flex items-center gap-4 text-left">
            {siteConfig.authorPhoto && (
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
                <Image src={siteConfig.authorPhoto} alt="Idun Munkejord" fill sizes="64px" className="object-cover" />
              </div>
            )}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent">Forfatter</p>
              <p className="font-serif-display text-xl font-bold text-loegnen-night">Idun Munkejord</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border-soft bg-background-alt px-6 py-8 text-center text-xs text-foreground-muted md:px-10">
        {siteConfig.name} · {company.name} · Org.nr. {company.orgNumber} · {links.email}
      </footer>
    </div>
  );
}
