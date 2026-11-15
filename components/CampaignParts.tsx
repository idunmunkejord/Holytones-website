import Link from "next/link";
import { books, siteConfig } from "@/lib/site-config";

// Pieces of the LØGNEN ad landing page (see standalonePaths in site-config).

const book = books[0];

// Stands in for the site menu: just the name, with no links away from the page.
export function CampaignHeader() {
  return (
    <header className="border-b border-border-soft bg-background px-6 py-4 md:px-10">
      <p className="logo-gold mx-auto max-w-5xl font-serif-display text-3xl tracking-wide sm:text-4xl">
        {siteConfig.name}
      </p>
    </header>
  );
}

// Centred in whatever column it sits in. The book is on pre-order until it is published on
// 24 November 2026; Idun changes the wording to "Kjøp" herself afterwards, so nothing here
// switches by date. Below desktop width the padding and letter spacing are tighter, so the longer
// label fits on a phone and never pushes a narrow tablet column wider than the screen.
const buyButtonShape =
  "inline-block border px-6 py-5 text-center text-base font-semibold uppercase tracking-[0.12em] transition-colors hover:bg-transparent lg:px-12 lg:tracking-[0.2em]";

export function BuyButton({ onDark = false }: { onDark?: boolean }) {
  if (!book.orderUrl) return null;
  return (
    <div className="flex justify-center">
      <a
        href={book.orderUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={
          onDark
            ? `${buyButtonShape} border-loegnen-light bg-loegnen-light text-loegnen-night hover:text-loegnen-light`
            : `${buyButtonShape} border-loegnen-night bg-loegnen-night text-loegnen-light hover:text-loegnen-night`
        }
      >
        Forhåndsbestill
      </a>
    </div>
  );
}

// Shown once, by the first button on the page.
export function PreorderNotice() {
  return (
    <p className="text-center text-base font-semibold text-loegnen-night md:text-lg">
      Utgis 24. november 2026 – forhåndsbestill nå!
    </p>
  );
}

// The back cover's opening paragraph in Idun's edited version, set like the cover itself, with
// its first question as the title.
export function BackCoverHook() {
  return (
    <section className="bg-loegnen-night px-6 py-16 text-background md:px-10 md:py-20">
      <figure className="mx-auto max-w-2xl">
        <h2 className="font-serif-display text-3xl leading-tight font-bold text-loegnen-light md:text-4xl">
          Hva om det som høres så forlokkende og frigjørende ut, flytter Gud ut av sentrum av ditt liv?
        </h2>
        <blockquote className="mt-6 space-y-4 font-serif-display text-xl leading-relaxed md:text-2xl">
          <p className="font-bold text-background">
            Hva om troen på tiltrekningskraften, og på at alle svarene finnes i deg selv, ikke bare er
            uskyldige redskaper, men uttrykk for en eldre fristelse – ønsket om å bli din egen Gud?
          </p>
          <p>
            Kan det være den samme gamle fristelsen som drev Adam og Eva ut av paradis «dere vil bli
            som Gud» (1. Mosebok 3,5), men denne gangen forkledd i et motivasjonsspråk som kunne ha vært
            hentet fra en TED talk?
          </p>
        </blockquote>
        <div className="mt-10">
          <BuyButton onDark />
        </div>
      </figure>
    </section>
  );
}

// The opening text under "Kan du virkelig skape din egen virkelighet?". `promiseOpening` doubles
// as the page's link-preview description.
export const promiseOpening =
  "Du har kanskje hørt det: Tankene dine former virkeligheten. Universet svarer på energien du sender ut. Og kraften til å skape livet du ønsker, finnes allerede i deg.";

export function PromiseOpening() {
  return (
    <div className="mt-6 space-y-4 text-lg leading-relaxed text-foreground">
      <p>{promiseOpening}</p>
      <p>
        Det er et fristende løfte, og lengselen bak er lett å forstå. Du kan skape det livet du
        lengter etter hvis du bare tenker riktig og retter oppmerksomheten mot det du ønsker deg.
      </p>
      <p className="font-serif-display text-2xl leading-snug font-bold text-loegnen-night">
        Men hva om det er LØGN – og du gradvis har lært å tro mer på tankens kraft enn på Guds løfter?
      </p>
    </div>
  );
}

// Marks content still to be supplied. Shown only in the local preview, never on the live site.
export function Missing({ children }: { children: React.ReactNode }) {
  if (process.env.NODE_ENV !== "development") return null;
  return (
    <div className="px-6 py-8 md:px-10">
      <div className="mx-auto max-w-2xl border-2 border-dashed border-accent-blush bg-accent-blush/10 p-4 text-sm text-foreground">
        <strong>Mangler (vises bare i forhåndsvisningen):</strong> {children}
      </div>
    </div>
  );
}

// Stands in for the site footer: the web address, linking to the home page.
export function CampaignFooter() {
  return (
    <footer className="border-t border-border-soft bg-background-alt px-6 py-8 text-center text-xs text-foreground-muted md:px-10">
      <Link href="/" className="link-underline hover:text-foreground">
        {siteConfig.url.replace("https://", "www.")}
      </Link>
    </footer>
  );
}
