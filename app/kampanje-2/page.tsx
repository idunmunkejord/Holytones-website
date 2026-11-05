import type { Metadata } from "next";
import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import ZoomImage from "@/components/ZoomImage";
import {
  BackCoverHook,
  BuyButton,
  CampaignBuySection,
  CampaignFooter,
  CampaignHeader,
} from "@/components/CampaignParts";
import { books, siteConfig } from "@/lib/site-config";

// Fourth landing page for the LØGNEN Facebook ads. Hidden like the others (standalonePaths,
// noindex). The text is Idun's own, written for this page; the photos are the site's own.

const book = books[0];
const headline = "Hva om det som lover frihet, gjør deg enda mer bundet til deg selv?";
const messages = [
  "Tankene dine former virkeligheten.",
  "Universet svarer på energien du sender ut.",
  "Kraften til å skape livet du ønsker, finnes allerede i deg.",
];
// For the link preview when the page is shared.
const description = messages.join(" ");

export const metadata: Metadata = {
  title: `${headline} — ${book.title.toUpperCase()}`,
  description,
  robots: { index: false, follow: false },
  openGraph: {
    title: headline,
    description,
    type: "website",
    url: `${siteConfig.url}/kampanje-2`,
    images: [{ url: `${siteConfig.url}${book.cover}` }],
  },
};

const gains = [
  {
    title: "Gjennomskue ideene bak ordene.",
    text: "Du får innsikt i hvordan manifestering, tiltrekningsloven og forestillinger om tankens kraft kommer til uttrykk i selvutvikling og åndelig språk.",
  },
  {
    title: "Skille påvirkning fra kontroll.",
    text: "Du får undersøke forskjellen mellom det å arbeide med tankene og vanene dine, og det å tro at du er ansvarlig for alt som rammer deg.",
  },
  {
    title: "Undersøke hva du setter din lit til.",
    text: "Du blir utfordret til å se hvordan disse ideene kan påvirke måten du forstår tro, bønn og Guds velsignelse på.",
  },
  {
    title: "Vende blikket mot Jesus.",
    text: "Du får utforske et håp som hviler på hvem Gud er, også når du ikke klarer å forstå eller forandre det som skjer.",
  },
];

const body = "space-y-5 text-base leading-relaxed text-foreground-muted";

export default function Kampanje2Page() {
  return (
    <div lang="no">
      <CampaignHeader />

      {/* 1. Opening */}
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
            <h1 className="font-serif-display text-4xl leading-tight font-bold text-loegnen-night md:text-5xl">
              {headline}
            </h1>
            <ul className="mt-6 space-y-2 border-l-2 border-loegnen-light pl-5 font-serif-display text-2xl text-loegnen-night">
              {messages.map((message) => (
                <li key={message}>{message}</li>
              ))}
            </ul>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-foreground">
              <p>
                {book.title.toUpperCase()} avslører når selvutvikling går fra å hjelpe deg til å mestre
                livet til å forme det du tror på.
              </p>
              <p className="font-semibold">
                {book.title.toUpperCase()} hjelper deg til å gjenkjenne halvsannhetene og stille
                spørsmål ved tanker du gradvis har adoptert uten å legge merke til det.
              </p>
            </div>
            <div className="mt-8">
              <BuyButton />
            </div>
          </div>
        </div>
      </section>

      {/* 2. The promise */}
      <section className="px-6 py-16 md:px-10">
        <div className={`mx-auto max-w-2xl ${body}`}>
          <h2 className="font-serif-display text-3xl font-bold text-loegnen-night md:text-4xl">
            Men hva om løftet bygger på en løgn?
          </h2>
          <p>
            Forestillingen om at tankene og følelsene dine tiltrekker det som skjer i livet ditt, er en
            idé som eksploderte over hele verden i begynnelsen av 2000-tallet. Kanskje har du møtt den
            som oppmuntrende råd, åndelig inspirasjon eller metoder for personlig vekst.
          </p>
          <p>
            Du har kanskje møtt slike budskap i selvutviklingsbøker, motivasjonstaler, podkaster eller
            innlegg på sosiale medier. Løftet er fristende: Du kan få livet du lengter etter hvis du
            lærer å tenke riktig og rette oppmerksomheten mot det du ønsker deg.
          </p>
        </div>
      </section>

      {/* 2b. The hook from the back cover */}
      <BackCoverHook />

      {/* 3. Can you really create your own reality? */}
      <section className="border-t border-background/15 bg-loegnen-night px-6 py-16 text-background md:px-10 md:py-20">
        <div className="mx-auto grid max-w-5xl items-start gap-10 md:grid-cols-[1fr_minmax(0,22rem)] md:gap-14">
          <div>
            <h2 className="font-serif-display text-3xl leading-tight font-bold text-loegnen-light md:text-4xl">
              Kan du virkelig skape din egen virkelighet?
            </h2>
            <div className="mt-8 space-y-5 leading-relaxed text-background/85">
              <p>
                Tankene dine betyr noe. De påvirker hvordan du har det, hvilke valg du tar, og hvordan
                du handler. Men derfra er det et stort sprang til å hevde at tankene dine skaper det som
                skjer rundt deg.
              </p>
              <p>
                Hvis du har fått høre at du tiltrekker deg livet ditt, hvem får da skylden når livet
                ditt gjør vondt? Når sykdom rammer, et forhold går i stykker eller bønnene dine ikke
                blir besvart slik du håpet?
              </p>
              <p className="border-l-2 border-loegnen-light pl-5 font-serif-display text-2xl text-loegnen-light italic">
                Tenkte du feil? Trodde du ikke nok? Sendte du ut feil energi?
              </p>
              <p className="font-semibold text-background">
                Et løfte om at du kontrollerer alt med tankene og følelsene dine, er et belastende
                ansvar du ikke var ment å bære.
              </p>
            </div>
            <div className="mt-10">
              <BuyButton onDark />
            </div>
          </div>
          <div className="relative order-first aspect-[1672/941] overflow-hidden md:order-none md:mt-2">
            <Image
              src="/images/home-hero.webp"
              alt="En kvinne ved skrivebordet med hodet i hånden, sliten"
              fill
              sizes="(min-width: 768px) 352px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 4. What the book gives you */}
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif-display text-3xl font-bold text-loegnen-night md:text-4xl">
            Få hjelp til å gjennomskue det som nesten er sant
          </h2>
          <p className="mt-4 text-base text-foreground-muted">I {book.title.toUpperCase()} får du:</p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {gains.map((gain) => (
              <li key={gain.title} className="border border-border-soft border-t-2 border-t-loegnen-light bg-surface p-6">
                <h3 className="font-serif-display text-xl font-bold text-loegnen-night">{gain.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{gain.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <BuyButton />
          </div>
        </div>
      </section>

      {/* 5. Idun's own story */}
      <section className="border-t border-border-soft bg-background-alt px-6 py-16 md:px-10">
        <div className={`mx-auto max-w-2xl ${body}`}>
          <div className="flex items-center gap-5">
            {siteConfig.authorPhoto && (
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full">
                <Image src={siteConfig.authorPhoto} alt="Idun Munkejord" fill sizes="96px" className="object-cover" />
              </div>
            )}
            <h2 className="font-serif-display text-3xl leading-tight font-bold text-loegnen-night">
              «Jeg trodde selv på denne løgnen.»
            </h2>
          </div>
          <p>
            Jeg vet hvor tiltrekkende og frigjørende dette budskapet kan virke. Jeg søkte selv etter
            mening og identitet, indre legedom og fred ved stadig å lete dypere i meg selv.
          </p>
          <p>
            Språket var varmt, åndelig og tilsynelatende frigjørende. Mye hørtes sant ut og veldig
            bibelsk. Derfor tok det tid før jeg oppdaget at blikket mitt gradvis ble flyttet fra Gud
            til meg selv, fra overgivelse og tillit til Gud til selv å ta kontrollen.
          </p>
          <p>
            Jeg kjenner denne tiltrekningen fra innsiden. {book.title.toUpperCase()} ble skrevet som et
            resultat av min egen reise for å hjelpe deg til å undersøke de tankene du gradvis har
            akseptert som sannhet til å oppdage når noe som lover deg frihet, begynner å ta Guds plass.
          </p>
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Idun Munkejord</p>
          <div className="pt-3">
            <BuyButton />
          </div>
        </div>
      </section>

      {/* 5b. A second version of Idun's story, shown alongside the first while she chooses one */}
      <section className="border-t border-border-soft px-6 py-16 md:px-10">
        <div className={`mx-auto max-w-2xl ${body}`}>
          <div className="flex items-center gap-5">
            {siteConfig.authorPhoto && (
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full">
                <Image src={siteConfig.authorPhoto} alt="Idun Munkejord" fill sizes="96px" className="object-cover" />
              </div>
            )}
            <h2 className="font-serif-display text-3xl leading-tight font-bold text-loegnen-night">
              «Jeg kjenner denne tiltrekningen fra innsiden.»
            </h2>
          </div>
          <p>
            I mange år var selvutvikling en del av livet mitt. Jeg trodde på løftet om å finne svarene
            og hensikten med livet ved å gå dypere i meg selv.
          </p>
          <p>
            Troen min på Gud var sterk. Nettopp derfor var det skremmende å oppdage hvor lett jeg kunne
            bli ført på avveier av et språk som lignet Bibelens. Ordene om tro, kraft, takknemlighet og
            overflod var kjente. Det tok tid før jeg stilte det avgjørende spørsmålet: Hvem satte jeg
            egentlig min lit til?
          </p>
          <p>
            Etter hvert vokste en indre uro frem. Hvis sannheten fantes i meg, hvis tankene mine skulle
            skape virkeligheten, og hvis kraften til å forme livet lå i meg selv – hvilken plass hadde
            Gud da? Var jeg i ferd med å gi meg selv Hans plass?
          </p>
          <p>
            Det ble en skremmende oppvåkning. Jeg hadde ikke sluttet å tro på Jesus. Likevel hadde
            tyngdepunktet i troen min gradvis flyttet seg fra Ham til meg selv. Jeg så at det jeg hadde
            tatt imot som selvutvikling, hadde begynt å fungere som en annen tro, med et annet svar på
            hvor sannheten finnes, hvor kraften kommer fra, og hvem jeg skulle stole på.
          </p>
          <p>
            Derfor skrev jeg {book.title.toUpperCase()}. Jeg vil utfordre deg til å undersøke tankene du
            har akseptert som sannhet, særlig når de høres både kloke, frigjørende og bibelske ut. For
            et budskap kan beholde ordene om Gud samtidig som det lærer deg å sette din dypeste lit til
            deg selv.
          </p>
          <p className="font-serif-display text-2xl leading-snug text-loegnen-night">
            Jeg vet hvor lett det er å overse den forskjellen. Jeg gjorde det selv. Nå ønsker jeg å
            hjelpe deg å gjenkjenne den – og vende blikket fra deg selv til Jesus.
          </p>
          <p className="text-sm uppercase tracking-[0.2em] text-accent">Idun Munkejord</p>
          <div className="pt-3">
            <BuyButton />
          </div>
        </div>
      </section>

      {/* 6. Where the line goes */}
      <section className="border-t border-border-soft bg-background-alt px-6 py-16 md:px-10">
        <div className={`mx-auto max-w-2xl ${body}`}>
          <SectionLabel>Hvor går grensen?</SectionLabel>
          <p>
            Gode vaner, tydelige mål og arbeid med tankene dine kan ha verdi. Spørsmålet oppstår når en
            metode begynner å gi deg svar på hvem du er, hva som er sannheten, og hva som kan gi deg
            varig håp. Da handler det plutselig om tro.
          </p>
          <p>
            {book.title.toUpperCase()} inviterer deg til å undersøke denne grensen. Du får stille
            spørsmål ved tankesett du har tatt til deg, og vende tilbake til Gud med både lengselen,
            tvilen og det du ikke kan kontrollere.
          </p>
          <p className="font-serif-display text-2xl leading-snug text-loegnen-night">
            Du blir ikke lovet et enkelt liv, men du blir invitert til en personlig relasjon med Ham
            som du kan sette din lit til gjennom alt.
          </p>
          <div className="pt-3">
            <BuyButton />
          </div>
        </div>
      </section>

      {/* 7. Hope, over the calm ocean */}
      <section className="border-t border-border-soft">
        <div className="relative h-56 w-full overflow-hidden md:h-80">
          <Image
            src="/images/hero-ocean.jpg"
            alt="Et rolig hav ved soloppgang"
            fill
            sizes="100vw"
            className="object-cover object-[50%_60%]"
          />
        </div>
        <div className={`mx-auto max-w-2xl px-6 py-16 md:px-0 ${body}`}>
          <h2 className="font-serif-display text-3xl leading-tight font-bold text-loegnen-night md:text-4xl">
            Du kan utvikle deg uten å gjøre deg selv til frelseren i ditt eget liv!
          </h2>
          <p>
            Mitt dypeste ønske med denne boken er at du skal finne tilbake til Jesus og tryggheten i en
            levende relasjon med Ham som fyller alt i alle. {book.title.toUpperCase()} gir deg anledning
            til å stoppe opp og undersøke hva du faktisk blir invitert til å tro.
          </p>
          <blockquote className="border-l-2 border-loegnen-light pl-6 font-serif-display text-2xl leading-snug text-loegnen-night">
            «Tro handler ikke om å få virkeligheten til å bøye seg etter dine tanker, men om å stole på
            Gud også når virkeligheten ikke bøyer seg etter din vilje. Å være skapt i Guds bilde betyr
            ikke at du har blitt Skaperen.»
          </blockquote>
        </div>
      </section>

      {/* 8. Buy */}
      <CampaignBuySection heading="Hva bygger du din tro på?" />

      <CampaignFooter contact />
    </div>
  );
}
