import type { Metadata } from "next";
import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import ZoomImage from "@/components/ZoomImage";
import {
  BackCoverHook,
  BuyButton,
  CampaignFooter,
  CampaignHeader,
  DangerousLiesSection,
  Missing,
} from "@/components/CampaignParts";
import { books, siteConfig } from "@/lib/site-config";

// Third landing page for the LØGNEN Facebook ads, for readers who know manifestation and the law
// of attraction without knowing The Secret. Hidden like the others (standalonePaths, noindex).
// Most of the text is Idun's own, written for this page; the author section is her story from the
// About page. Prices are left to the order page.

const book = books[0];
const headline = "Kan du virkelig skape din egen virkelighet?";
const intro =
  "Du har kanskje hørt budskapet om at tankene dine former virkeligheten, universet svarer på energien du sender ut, og kraften til å skape finnes allerede i deg selv?";

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
            <h1 className="font-serif-display text-4xl leading-tight font-bold text-loegnen-night md:text-6xl">
              {headline}
            </h1>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-foreground">
              <p>{intro}</p>
              <p>
                Det er et fristende løfte, og lengselen bak er lett å forstå. Livet kan få mening og
                hensikt hvis du bare tenker riktig og retter oppmerksomheten mot det du ønsker deg.
              </p>
              <p>
                <span className="font-semibold">Men hva om det er LØGN?</span> For hva om det som
                høres så forlokkende og frigjørende ut, gradvis flytter Gud ut av sentrum av ditt liv?
                Disse tankene kan gjennom årene ha sneket seg inn i måten du tenker på, og hvordan du
                forstår tro, bønn og Guds velsignelse.
              </p>
            </div>
            <div className="mt-8">
              <BuyButton />
            </div>
          </div>
        </div>
      </section>

      <BackCoverHook />

      {/* 2. Thoughts and actions versus thoughts and events */}
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-2xl space-y-5 text-base leading-relaxed text-foreground-muted">
          <SectionLabel>Hvor går grensen?</SectionLabel>
          <h2 className="font-serif-display text-3xl font-bold text-loegnen-night">
            Tankene dine betyr noe. Men styrer de livet ditt?
          </h2>
          <p>
            Tankene dine betyr noe. Det du tenker, påvirker hvordan du har det, hvilke valg du tar, og
            hvordan du oppfører deg.
          </p>
          <p>
            Men dersom påstanden om at tankene dine skaper livet ditt er sann, hvem får da skylden når
            livet gjør vondt? For når sykdom rammer, ekteskapet ryker, eller bønnene dine ikke
            besvares, følger det med et stort ansvar.
          </p>
          <p className="border-l-2 border-loegnen-light pl-5 font-serif-display text-2xl text-loegnen-night italic">
            Du tenkte feil, trodde ikke nok, eller sendte ut feil energi?
          </p>
          <p>
            Budskapet som virket så forlokkende og frigjørende ut, gir deg nå ansvaret for alt som
            rammer deg.
          </p>
        </div>
      </section>

      {/* 3. The book's response */}
      <section className="bg-loegnen-night px-6 py-16 text-background md:px-10 md:py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif-display text-3xl leading-tight font-bold text-loegnen-light md:text-4xl">
            Hva om dette er vår tidsånds bedrag for å få deg bort fra Gud og Hans velsignelse?
          </h2>
          <div className="mt-8 space-y-5 leading-relaxed text-background/85">
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
          <div className="mt-10">
            <BuyButton onDark />
          </div>
        </div>
      </section>

      {/* 4. The quote, and what the book gives you */}
      <DangerousLiesSection />

      {/* 5. Excerpt from the manuscript: not supplied yet, so only the marker shows, in preview */}
      <Missing>
        Et kort, ekte utdrag fra manuset (ca. 80–150 ord) som viser hvordan argumentet utvikles, med
        kapittel eller sidetall. Seksjonen vises ikke på den publiserte siden før utdraget er lagt inn.
      </Missing>

      {/* 6. Buy */}
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
              <BuyButton />
            </div>
          </div>
        </div>
      </section>

      {/* 7. About the author, with the round photo used on the other landing pages */}
      <section className="border-t border-border-soft px-6 py-16 md:px-10">
        <div className="mx-auto max-w-2xl space-y-4 text-base leading-relaxed text-foreground-muted">
          <div className="flex items-center gap-4">
            {siteConfig.authorPhoto && (
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full">
                <Image src={siteConfig.authorPhoto} alt="Idun Munkejord" fill sizes="80px" className="object-cover" />
              </div>
            )}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent">Om forfatteren</p>
              <h2 className="font-serif-display text-2xl font-bold text-loegnen-night">Idun Munkejord</h2>
            </div>
          </div>
          <p className="pt-2 font-serif-display text-xl text-loegnen-night">
            «Jeg vet hva det vil si å lete etter svar på feil sted.»
          </p>
          <p>
            I mange år var personlig utvikling en del av både arbeidslivet mitt og min egen reise. Jeg
            forsto hvorfor det er tiltrekkende å bli sterkere, flinkere og bedre rustet til å mestre
            livet. Men den kristne troen min fikk meg gradvis til å stille spørsmål ved noen av
            antakelsene under – særlig troen på at varig frihet kan finnes gjennom større tillit til meg
            selv.
          </p>
          <p>
            Forholdet mitt til Gud endret måten jeg forstår personlig utvikling på. Det er stor
            forskjell på å utvikle potensialet sitt og å gjøre seg selv til grunnmuren for identiteten
            sin. Ut av den forståelsen vokser det jeg skriver – også {book.title.toUpperCase()}.
          </p>
        </div>
      </section>

      <CampaignFooter contact />
    </div>
  );
}
