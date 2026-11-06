import type { Metadata } from "next";
import Image from "next/image";
import AuthorPhoto from "@/components/AuthorPhoto";
import ZoomImage from "@/components/ZoomImage";
import {
  BackCoverHook,
  BuyButton,
  CampaignFooter,
  CampaignHeader,
  Missing,
  PromiseOpening,
  promiseOpening,
} from "@/components/CampaignParts";
import { books, siteConfig } from "@/lib/site-config";

// Third landing page for the LØGNEN Facebook ads, for readers who know manifestation and the law
// of attraction without knowing The Secret. Hidden like the others (standalonePaths, noindex).
// Most of the text is Idun's own, written for this page; the author section is her story from the
// About page. Prices are left to the order page.

const book = books[0];
const headline = "Kan du virkelig skape din egen virkelighet?";

export const metadata: Metadata = {
  title: `${headline} — ${book.title.toUpperCase()}`,
  description: promiseOpening,
  robots: { index: false, follow: false },
  openGraph: {
    title: headline,
    description: promiseOpening,
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
            <PromiseOpening />
            <div className="mt-8">
              <BuyButton />
            </div>
          </div>
        </div>
      </section>

      <BackCoverHook />

      {/* 2. Thoughts and actions versus thoughts and events, with a photo to the right */}
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="space-y-5 text-base leading-relaxed text-foreground-muted">
            <h2 className="font-serif-display text-3xl font-bold text-loegnen-night">
              Tankene dine betyr noe. Men skaper de livet ditt?
            </h2>
            <p>
              Dersom tankene dine skaper livet ditt, blir smerten da din egen skyld? For når sykdom
              rammer, ekteskapet ryker eller bønnesvar uteblir, var det du som skapte det? Tenkte du
              feil, trodde for lite, eller sendte du ut feil energi?
            </p>
            <p className="border-l-2 border-loegnen-light pl-5 font-serif-display text-2xl text-loegnen-night">
              Først ble du lovet makten til å skape alt. Så får du skylden når du mister det.
            </p>
          </div>
          <div className="relative order-first aspect-[3/2] overflow-hidden md:order-none">
            <Image
              src="/images/tankene-betyr-noe.webp"
              alt="En kvinne sitter ettertenksom ved et trebord i varmt lys"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. Our time's deception, and the most dangerous lies */}
      <section className="bg-loegnen-night px-6 py-16 text-background md:px-10 md:py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif-display text-3xl leading-tight font-bold text-loegnen-light md:text-4xl">
            Hva om dette er vår tids åndelige selvbedrag for å få deg bort fra Gud og Hans velsignelse?
          </h2>
          <blockquote className="mt-8 border-l-2 border-loegnen-light pl-6 font-serif-display text-2xl leading-snug text-background md:text-3xl">
            «For de farligste løgnene er ikke nødvendigvis de som er fullstendig usanne, men de som
            inneholder akkurat nok sannhet til at du ikke oppdager hva som har blitt endret på»
          </blockquote>
          <div className="mt-10">
            <BuyButton onDark />
          </div>
        </div>
      </section>

      {/* 4. Find out what is true, with a photo of an open Bible to the left */}
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="relative aspect-[3/2] overflow-hidden">
            <Image
              src="/images/finn-ut-hva-som-er-sant.webp"
              alt="En åpen bibel på et trebord i varmt lys"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-5 text-base leading-relaxed text-foreground-muted">
            <h2 className="font-serif-display text-3xl font-bold text-loegnen-night md:text-4xl">
              Finn ut hva som er sant
            </h2>
            <p>
              I {book.title.toUpperCase()} får du innsikt i hvordan tankens kraft gradvis har sneket seg
              inn i vår kultur. Du lærer å skille det som er sant fra det som bare ligner sannheten, og
              at friheten du søker ikke begynner med å vende blikket innover mot deg selv, men mot Ham
              som fyller alt i alle.
            </p>
            <div className="pt-3">
              <BuyButton />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Excerpt from the manuscript: not supplied yet, so only the marker shows, in preview */}
      <Missing>
        Et kort, ekte utdrag fra manuset (ca. 80–150 ord) som viser hvordan argumentet utvikles, med
        kapittel eller sidetall. Seksjonen vises ikke på den publiserte siden før utdraget er lagt inn.
      </Missing>

      {/* 6. About the author: her story, with her portrait to the right */}
      <section className="border-t border-border-soft px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-4xl items-start gap-10 md:grid-cols-[1fr_16rem] md:gap-14">
          <div className="space-y-4 text-base leading-relaxed text-foreground-muted">
            <h2 className="font-serif-display text-3xl font-bold text-loegnen-night">
              Jeg trodde selv på Tankens Kraft
            </h2>
            <p>
              I mange år var selvutvikling en del av livet mitt, og troen min på Jesus var sterk.
              Nettopp derfor var det skremmende å oppdage hvor lett jeg kunne bli ført på avveier av et
              språk som lignet på det i Bibelen.
            </p>
            <p>
              Det tok tid før jeg oppdaget det. Men etter hvert vokste det fram en indre uro – hvis
              kraften til å forme livet lå i meg selv, hvilken plass hadde Gud da?
            </p>
            <p>
              Det ble en skremmende oppvåkning. Jeg oppdaget at selvutvikling hadde utviklet seg til en
              tro med meg selv i sentrum.
            </p>
            <p className="font-serif-display text-xl leading-snug text-loegnen-night">
              Derfor skrev jeg {book.title.toUpperCase()} for å hjelpe deg til å gjenkjenne bedraget når
              det høres ut som Guds sannhet.
            </p>
          </div>
          <div className="order-first w-full max-w-[15rem] md:order-none md:mt-2 md:max-w-none">
            {/* Cropped from the top, which leaves out the credit printed in the photo's corner. */}
            <AuthorPhoto
              src="/images/idun-munkejord-brygge.webp"
              position="object-top"
              priority={false}
              sizes="(min-width: 768px) 16rem, 15rem"
            />
            <p className="mt-6 font-serif-display text-xl text-loegnen-night">Idun Munkejord</p>
            <p className="mt-1 text-xs text-foreground-muted">Foto: Soni Sousa</p>
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
            <div className="mt-6">
              <BuyButton />
            </div>
          </div>
        </div>
      </section>

      <CampaignFooter />
    </div>
  );
}
