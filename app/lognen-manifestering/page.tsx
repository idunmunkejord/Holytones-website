import type { Metadata } from "next";
import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import ZoomImage from "@/components/ZoomImage";
import {
  BuyButton,
  CampaignFooter,
  CampaignHeader,
  Missing,
  PriceList,
} from "@/components/CampaignParts";
import { books, siteConfig } from "@/lib/site-config";

// Third landing page for the LØGNEN Facebook ads, for readers who know manifestation and the law
// of attraction without knowing The Secret. Hidden like the others (standalonePaths, noindex).
// What it says about the book comes from the cover text; the author section is Idun's own story
// from the About page; prices come from the checkout page.

const book = books[0];
const headline = "Kan du virkelig skape din egen virkelighet?";
const intro =
  "Du har kanskje hørt at tankene dine tiltrekker det som skjer i livet ditt. At du kan manifestere kjærlighet, fremgang og lykke – hvis du bare tenker og tror riktig.";

export const metadata: Metadata = {
  title: `${headline} — ${book.title.toUpperCase()}`,
  description: intro,
  robots: { index: false, follow: false },
  openGraph: {
    title: headline,
    description: intro,
    type: "website",
    url: `${siteConfig.url}/lognen-manifestering`,
    images: [{ url: `${siteConfig.url}${book.cover}` }],
  },
};

const questions = [
  "Hvordan skiller du et inspirerende løfte fra en påstand du ikke kan stole på?",
  "Kan du ta ansvar for valgene dine uten å gjøre deg ansvarlig for alt som rammer deg?",
  "Hva bygger du håpet ditt på når livet ikke blir slik du ønsker?",
];

// Taken from the back cover.
const explore = [
  {
    title: "Er det bare uskyldige redskaper?",
    text: "Du får undersøke om troen på tiltrekningskraften, og på at alle svarene finnes i deg selv, kan være uttrykk for en eldre fristelse: ønsket om å bli din egen Gud – den samme fristelsen som møtte Adam og Eva (1. Mosebok 3,5).",
  },
  {
    title: "Hvordan har det påvirket troen din?",
    text: "Du får se hvordan budskapet om at tankene former virkeligheten, at universet svarer på energien du sender ut og at kraften finnes i deg selv, gradvis kan ha preget måten du forstår tro, bønn og Guds velsignelse på.",
  },
  {
    title: "Hvor begynner friheten?",
    text: "Du får hjelp til å skille det som er sant fra det som bare ligner sannheten – og til å se at friheten du søker, ikke begynner med å vende blikket innover mot deg selv, men utover og opp mot Ham som «fyller alt i alle» (Efeserne 1,17–23).",
  },
];

function Cover({ className, sizes }: { className: string; sizes: string }) {
  if (!book.cover) return null;
  return (
    <ZoomImage
      src={book.cover}
      alt={`${book.title} av Idun Munkejord — forside og bakside`}
      sizes={sizes}
      className={`aspect-[3/4] shrink-0 overflow-hidden ${className}`}
      imageClassName="object-cover object-right mix-blend-multiply"
      unoptimized
    />
  );
}

export default function LognenManifesteringPage() {
  return (
    <div lang="no">
      <CampaignHeader />

      {/* 1. Opening, with the book, price and button */}
      <section className="border-b border-border-soft bg-background-alt px-6 pt-10 pb-14 md:px-10 md:pt-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center md:gap-12">
          <Cover
            sizes="(min-width: 1024px) 480px, (min-width: 768px) 384px, 340px"
            className="order-last mx-auto w-[85%] max-w-[340px] md:order-first md:mx-0 md:w-[24rem] md:max-w-none lg:w-[30rem]"
          />
          <div className="max-w-xl">
            <SectionLabel>Ny bok av Idun Munkejord</SectionLabel>
            <h1 className="font-serif-display text-4xl leading-tight font-bold text-loegnen-night md:text-6xl">
              {headline}
            </h1>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-foreground">
              <p>{intro}</p>
              <p className="font-semibold">Det er et fristende løfte. Men er det sant?</p>
            </div>
            <p className="mt-4 text-base leading-relaxed text-foreground-muted">
              I {book.title.toUpperCase()} får du utforske ideene bak manifestering, tankens kraft og
              loven om tiltrekning i lys av kristen tro. Hvor mye kan du påvirke gjennom tankene dine?
              Hvor går grensen for din kontroll? Og hva bygger du håpet ditt på når livet ikke blir
              slik du ønsker?
            </p>
            <div className="mt-8 space-y-4">
              <BuyButton />
              <PriceList />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Thoughts and actions versus thoughts and events */}
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-2xl space-y-5 text-base leading-relaxed text-foreground-muted">
          <SectionLabel>Hvor går grensen?</SectionLabel>
          <h2 className="font-serif-display text-3xl font-bold text-loegnen-night">
            Tankene dine betyr noe. Men styrer de livet ditt?
          </h2>
          <p>
            Det du tenker, påvirker hvordan du har det, hvilke valg du tar og hvordan du handler. Det
            er sant, og det er verdt å ta på alvor.
          </p>
          <p>
            Men det er noe helt annet å påstå at tankene dine styrer det som skjer rundt deg: om du
            blir syk eller frisk, om du mister noe eller lykkes, hvordan andre behandler deg.
          </p>
          <p>
            Hvis det stemmer, ligger forklaringen hos deg når livet gjør vondt. Kanskje har du spurt
            deg selv om du tenkte feil, eller om du ikke trodde nok.
          </p>
        </div>
      </section>

      {/* 3. The questions the book examines */}
      <section className="bg-loegnen-night px-6 py-16 text-background md:px-10 md:py-20">
        <div className="mx-auto max-w-2xl">
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-loegnen-light">
            <span className="h-px w-8 bg-loegnen-light/60" />
            Kjenner du igjen spørsmålene?
          </p>
          <ul className="space-y-6">
            {questions.map((question) => (
              <li
                key={question}
                className="border-l-2 border-loegnen-light pl-5 font-serif-display text-2xl leading-snug text-loegnen-light md:text-3xl"
              >
                {question}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <BuyButton onDark />
          </div>
        </div>
      </section>

      {/* 4. Three things to explore in the book */}
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-2xl">
          <SectionLabel>Dette får du undersøke</SectionLabel>
          <h2 className="font-serif-display text-3xl font-bold text-loegnen-night">
            Tre spørsmål boka tar på alvor
          </h2>
          <ol className="mt-8 space-y-8">
            {explore.map((item, index) => (
              <li key={item.title} className="flex gap-4">
                <span className="font-serif-display text-3xl text-loegnen-light">{index + 1}</span>
                <div>
                  <h3 className="font-serif-display text-xl font-bold text-loegnen-night">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-foreground-muted">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. Excerpt from the manuscript: not supplied yet, so only the marker shows, in preview */}
      <Missing>
        Et kort, ekte utdrag fra manuset (ca. 80–150 ord) som viser hvordan argumentet utvikles, med
        kapittel eller sidetall. Seksjonen vises ikke på den publiserte siden før utdraget er lagt inn.
      </Missing>

      {/* 6. About the author */}
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto flex max-w-2xl flex-col gap-8 sm:flex-row sm:items-start">
          {siteConfig.authorPhoto && (
            <div className="relative h-40 w-32 shrink-0 overflow-hidden">
              <Image src={siteConfig.authorPhoto} alt="Idun Munkejord" fill sizes="128px" className="object-cover" />
            </div>
          )}
          <div className="space-y-4 text-base leading-relaxed text-foreground-muted">
            <SectionLabel>Om forfatteren</SectionLabel>
            <h2 className="font-serif-display text-3xl font-bold text-loegnen-night">Idun Munkejord</h2>
            <p className="font-serif-display text-xl text-loegnen-night">
              «Jeg vet hva det vil si å lete etter svar på feil sted.»
            </p>
            <p>
              I mange år var personlig utvikling en del av både arbeidslivet mitt og min egen reise.
              Jeg forsto hvorfor det er tiltrekkende å bli sterkere, flinkere og bedre rustet til å
              mestre livet. Men den kristne troen min fikk meg gradvis til å stille spørsmål ved noen
              av antakelsene under – særlig troen på at varig frihet kan finnes gjennom større tillit
              til meg selv.
            </p>
            <p>
              Forholdet mitt til Gud endret måten jeg forstår personlig utvikling på. Det er stor
              forskjell på å utvikle potensialet sitt og å gjøre seg selv til grunnmuren for
              identiteten sin. Ut av den forståelsen vokser det jeg skriver – også {book.title.toUpperCase()}.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Buy */}
      <section className="border-t border-border-soft bg-background-alt px-6 py-16 md:px-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-10 md:flex-row md:gap-12">
          <Cover sizes="(min-width: 768px) 288px, 240px" className="w-60 md:w-72" />
          <div>
            <h2 className="font-serif-display text-3xl font-bold text-loegnen-night md:text-4xl">
              {book.title.toUpperCase()}
            </h2>
            <p className="mt-1 font-serif-display text-xl text-loegnen-night">{book.subtitle}</p>
            <p className="mt-1 text-sm text-foreground-muted">Idun Munkejord</p>
            <div className="mt-6">
              <PriceList />
            </div>
            <div className="mt-6">
              <BuyButton />
            </div>
          </div>
        </div>
      </section>

      <CampaignFooter contact />
    </div>
  );
}
