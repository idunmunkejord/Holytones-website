import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import ZoomImage from "@/components/ZoomImage";
import { BuyButton, CampaignBuySection, CampaignFooter, CampaignHeader } from "@/components/CampaignParts";
import { books, siteConfig } from "@/lib/site-config";

// Second landing page for the LØGNEN Facebook ads, built on the book's own angle: self-development
// taking God's place. Hidden like /kampanje (standalonePaths, noindex). All claims about the book
// come from its cover text.

const book = books[0];
const headline = "Hva om det som høres frigjørende ut, flytter Gud ut av sentrum?";
const intro =
  "Mange bærer på en lengsel om at livet kan forandres og få mening, hvis de bare tenker riktig og retter oppmerksomheten mot det de ønsker. Men hva skjer med troen når selvutvikling tar Guds plass?";

export const metadata: Metadata = {
  title: `${headline} — ${book.title.toUpperCase()}`,
  description: intro,
  robots: { index: false, follow: false },
  openGraph: {
    title: headline,
    description: intro,
    type: "website",
    url: `${siteConfig.url}/lognen-selvutvikling`,
    images: [{ url: `${siteConfig.url}${book.cover}` }],
  },
};

const messages = [
  "Tankene dine former virkeligheten.",
  "Universet svarer på energien du sender ut.",
  "Kraften finnes allerede i deg selv.",
];

export default function LognenSelvutviklingPage() {
  return (
    <div lang="no">
      <CampaignHeader />

      {/* 1. The question */}
      <section className="border-b border-border-soft bg-background-alt px-6 pt-12 pb-16 md:px-10 md:pt-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center md:gap-12">
          {book.cover && (
            <ZoomImage
              src={book.cover}
              alt={`${book.title} av Idun Munkejord — forside og bakside`}
              sizes="(min-width: 1024px) 480px, (min-width: 768px) 384px, 340px"
              className="order-last mx-auto aspect-[3/4] w-[85%] max-w-[340px] shrink-0 overflow-hidden md:order-first md:mx-0 md:w-[24rem] md:max-w-none lg:w-[30rem]"
              imageClassName="object-cover object-right mix-blend-multiply"
            />
          )}
          <div className="max-w-xl">
            <SectionLabel>Når selvutvikling tar Guds plass</SectionLabel>
            <h1 className="font-serif-display text-4xl leading-tight font-bold text-loegnen-night md:text-6xl">
              {headline}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground">{intro}</p>
            <p className="mt-4 text-base leading-relaxed text-foreground-muted">
              {book.title.toUpperCase()} av Idun Munkejord er et kristent oppgjør med vår tids
              åndelige selvbedrag – og en invitasjon til å skille det som er sant fra det som bare
              ligner sannheten.
            </p>
            <div className="mt-8">
              <BuyButton />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Recognising the message */}
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-2xl space-y-5 text-base leading-relaxed text-foreground-muted">
          <SectionLabel>Kjenner du igjen budskapet?</SectionLabel>
          <h2 className="font-serif-display text-3xl font-bold text-loegnen-night">
            Det høres forlokkende ut
          </h2>
          <ul className="space-y-3 border-l-2 border-loegnen-light pl-6 font-serif-display text-2xl text-loegnen-night">
            {messages.map((message) => (
              <li key={message}>{message}</li>
            ))}
          </ul>
          <p>
            Lengselen bak er lett å forstå. Vi vil at livet skal bli bedre, og vi vil ha noe å holde
            fast ved. Men disse tankene har gjennom årene sneket seg inn i måten vi tenker på – og
            gradvis også inn i måten mange kristne forstår tro, bønn og Guds velsignelse.
          </p>
        </div>
      </section>

      {/* 3. The old temptation */}
      <section className="bg-loegnen-night px-6 py-20 text-background md:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-loegnen-light">
            <span className="h-px w-8 bg-loegnen-light/60" />
            Spørsmålet
          </p>
          <h2 className="font-serif-display text-3xl leading-tight font-bold text-loegnen-light md:text-5xl">
            Uskyldige redskaper – eller en gammel fristelse?
          </h2>
          <div className="mt-10 space-y-5 leading-relaxed text-background/85">
            <p>
              Hva om troen på tiltrekningskraften, og på at alle svarene finnes i deg selv, ikke bare
              er nøytrale verktøy? Hva om de er uttrykk for en eldre fristelse: ønsket om å bli din
              egen Gud?
            </p>
            <p>
              Det er den samme fristelsen som møtte Adam og Eva i hagen: «dere blir som Gud»
              (1. Mosebok 3,5). Denne gangen er den bare kledd i et motivasjonsspråk som kunne vært
              hentet fra en TED-talk.
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
            Ikke innover, men utover og opp
          </h2>
          <p>
            {book.title.toUpperCase()} inviterer deg til å skille det som er sant fra det som bare
            ligner sannheten.
          </p>
          <p>
            Boken peker på at friheten du søker, og tomheten du kanskje forsøker å fylle, ikke
            begynner med å vende blikket innover mot deg selv – men utover og opp mot Han som «fyller
            alt i alle» (Efeserne 1,17–23).
          </p>
        </div>
      </section>

      {/* 5. Excerpt */}
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

      {/* 6. Buy */}
      <CampaignBuySection heading="Finn ut hva som er sant" />

      <CampaignFooter />
    </div>
  );
}
