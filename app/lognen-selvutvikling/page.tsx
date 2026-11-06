import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import ZoomImage from "@/components/ZoomImage";
import {
  BuyButton,
  CampaignBuySection,
  CampaignFooter,
  CampaignHeader,
} from "@/components/CampaignParts";
import { books, siteConfig } from "@/lib/site-config";

// Second landing page for the LØGNEN Facebook ads, built on the book's own angle: self-development
// taking God's place. Hidden like /kampanje (standalonePaths, noindex). The text is Idun's own,
// written for this page; it already carries the back cover's argument, so the shared
// BackCoverHook is left out here.

const book = books[0];
const headline = "Kan du virkelig skape din egen virkelighet?";
const opening =
  "Du har kanskje hørt budskapet om at tankene dine former virkeligheten, universet svarer på energien du sender ut, og kraften til å skape finnes allerede i deg selv?";
const intro =
  "Det er et fristende løfte, og lengselen bak er lett å forstå. Livet kan få mening og hensikt hvis du bare tenker riktig og retter oppmerksomheten mot det du ønsker deg.";
const shareTitle = `${book.subtitle} — ${book.title.toUpperCase()}`;

export const metadata: Metadata = {
  title: shareTitle,
  description: opening,
  robots: { index: false, follow: false },
  openGraph: {
    title: shareTitle,
    description: opening,
    type: "website",
    url: `${siteConfig.url}/lognen-selvutvikling`,
    images: [{ url: `${siteConfig.url}${book.cover}` }],
  },
};

const darkLabel = "mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-loegnen-light";

export default function LognenSelvutviklingPage() {
  return (
    <div lang="no">
      <CampaignHeader />

      {/* 1. The promise */}
      <section className="border-b border-border-soft bg-background-alt px-6 pt-12 pb-16 md:px-10 md:pt-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center md:gap-12">
          {book.cover && (
            <ZoomImage
              src={book.cover}
              alt={`${book.title} av Idun Munkejord — forside og bakside`}
              sizes="(min-width: 1024px) 480px, (min-width: 768px) 384px, 340px"
              className="order-last mx-auto aspect-[3/4] w-[85%] max-w-[340px] shrink-0 overflow-hidden md:order-first md:mx-0 md:w-[24rem] md:max-w-none lg:w-[30rem]"
              imageClassName="object-cover object-right mix-blend-multiply"
              unoptimized
            />
          )}
          <div className="max-w-xl">
            <SectionLabel>Et kristent oppgjør med vår tids åndelige selvbedrag</SectionLabel>
            <h1 className="font-serif-display text-4xl leading-tight font-bold text-loegnen-night md:text-6xl">
              {headline}
            </h1>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-foreground">
              <p>{opening}</p>
              <p>{intro}</p>
            </div>
            <div className="mt-8">
              <BuyButton />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Self-development, and the lie */}
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-2xl space-y-5 text-base leading-relaxed text-foreground-muted">
          <SectionLabel>{book.subtitle}</SectionLabel>
          <h2 className="font-serif-display text-4xl font-bold text-loegnen-night md:text-5xl">
            Men hva om det er LØGN?
          </h2>
          <p className="font-serif-display text-2xl leading-snug text-loegnen-night">
            For hva om det som høres så forlokkende og frigjørende ut, gradvis flytter Gud ut av
            sentrum av ditt liv?
          </p>
          <p>
            Loven dette handler om heter «tiltrekningsloven» og hevder at det du fester tankene ved,
            tiltrekker du deg.
          </p>
          <p>
            Disse tankene kan gjennom årene ha sneket seg inn i måten du tenker på, og hvordan du
            forstår tro, bønn og Guds velsignelse.
          </p>
        </div>
      </section>

      {/* 3. Who gets the blame */}
      <section className="bg-loegnen-night px-6 py-16 text-background md:px-10 md:py-20">
        <div className="mx-auto max-w-2xl">
          <p className={darkLabel}>
            <span className="h-px w-8 bg-loegnen-light/60" />
            Spørsmålet
          </p>
          <p className="leading-relaxed text-background/85">
            Tankene dine betyr noe. Det du tenker, påvirker hvordan du har det, hvilke valg du tar, og
            hvordan du oppfører deg.
          </p>
          <h2 className="mt-8 font-serif-display text-3xl leading-tight font-bold text-loegnen-light md:text-4xl">
            Men dersom påstanden om at tankene dine skaper livet ditt er sann, hvem får da skylden når
            livet gjør vondt?
          </h2>
          <div className="mt-8 space-y-5 leading-relaxed text-background/85">
            <p>
              For når sykdom rammer, ekteskapet ryker, eller bønnene dine ikke besvares, følger det
              med et stort ansvar.
            </p>
            <p className="border-l-2 border-loegnen-light pl-5 font-serif-display text-2xl text-loegnen-light italic">
              Du tenkte feil, trodde ikke nok, eller sendte ut feil energi?
            </p>
            <p>
              Budskapet som virket så forlokkende og frigjørende ut, gir deg nå ansvaret for alt som
              rammer deg.
            </p>
          </div>
          <div className="mt-10">
            <BuyButton onDark />
          </div>
        </div>
      </section>

      {/* 4. The old temptation */}
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-2xl space-y-5 text-base leading-relaxed text-foreground-muted">
          <SectionLabel>En gammel fristelse</SectionLabel>
          <p>
            Kanskje troen på tankens kraft, og på at alle svarene finnes i deg selv, ikke bare er
            uskyldige redskaper, men uttrykk for en eldre fristelse, nemlig ønsket om å bli din egen
            Gud? Den samme gamle fristelsen som drev Adam og Eva ut av paradis «dere blir som Gud»,
            men denne gangen forkledd i et motivasjonsspråk som kunne ha vært hentet fra en TED-talk.
          </p>
          <p className="font-serif-display text-2xl leading-snug font-bold text-loegnen-night">
            Hva om dette er vår tidsånds bedrag for å få deg bort fra Gud og Hans velsignelse?
          </p>
        </div>
      </section>

      {/* 5. The book's response */}
      <section className="border-t border-border-soft px-6 py-16 md:px-10">
        <div className="mx-auto max-w-2xl space-y-5 text-base leading-relaxed text-foreground-muted">
          <SectionLabel>Bokens svar</SectionLabel>
          <h2 className="font-serif-display text-3xl font-bold text-loegnen-night">
            Ikke innover, men utover og opp
          </h2>
          <p>
            {book.title.toUpperCase()} inviterer deg til å skille det som er sant fra det som bare
            ligner sannheten. Den peker på at friheten og lykken du søker, ikke begynner med å vende
            blikket innover mot deg selv (bli som Gud), men utover og opp mot Ham som «fyller alt i
            alle» (Efeserne 1,17–23).
          </p>
          <p>
            Dette er ikke et løfte om at livet blir lett. Men friheten og lykken du søker, trenger
            ikke hvile på at det er tankene dine som avgjør hvordan livet ditt utfolder seg.
          </p>
        </div>
      </section>

      {/* 6. Excerpt */}
      <section className="border-y border-border-soft bg-background-alt px-6 py-16 md:px-10">
        <figure className="mx-auto max-w-2xl">
          <blockquote className="border-l-2 border-loegnen-light pl-6 font-serif-display text-2xl leading-snug text-loegnen-night md:text-3xl">
            «For de farligste løgnene er ikke nødvendigvis de som er fullstendig usanne, men de som
            inneholder akkurat nok sannhet til at du ikke oppdager hva som har blitt endret på.»
          </blockquote>
          <figcaption className="mt-4 pl-6 text-xs uppercase tracking-[0.2em] text-foreground-muted">
            Fra bokens bakside
          </figcaption>
        </figure>
      </section>

      {/* 7. Buy */}
      <CampaignBuySection heading="Finn ut hva som er sant">
        <p>
          I {book.title.toUpperCase()} får du innsikt i hvordan tankens kraft gradvis har sneket seg
          inn i vår kultur. Du lærer å skille det som er sant fra det som bare ligner sannheten, og at
          friheten du søker ikke begynner med å vende blikket innover mot deg selv, men mot Ham som
          fyller alt i alle.
        </p>
      </CampaignBuySection>

      <CampaignFooter />
    </div>
  );
}
