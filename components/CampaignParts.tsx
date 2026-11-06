import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import { books, links, siteConfig } from "@/lib/site-config";

// Shared pieces of the LØGNEN ad landing pages (see standalonePaths in site-config).

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

export function BuyButton({ onDark = false }: { onDark?: boolean }) {
  if (!book.orderUrl) return null;
  return (
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
  );
}

// The opening paragraph of the back cover, word for word, set like the cover itself. The hook
// shown right after the opening of every campaign page. With `questionAsTitle`, the paragraph's
// first question becomes the title and the text is Idun's lightly edited version, so it no
// longer claims to be quoted from the cover.
export function BackCoverHook({ questionAsTitle = false }: { questionAsTitle?: boolean }) {
  return (
    <section className="bg-loegnen-night px-6 py-16 text-background md:px-10 md:py-20">
      <figure className="mx-auto max-w-2xl">
        <h2 className="font-serif-display text-3xl leading-tight font-bold text-loegnen-light md:text-4xl">
          {questionAsTitle
            ? "Hva om det som høres så forlokkende og frigjørende ut, flytter Gud ut av sentrum av ditt liv?"
            : `Et kristent svar på ${book.title.toUpperCase()} som høres ut som sannhet`}
        </h2>
        <blockquote className="mt-6 space-y-4 font-serif-display text-xl leading-relaxed md:text-2xl">
          <p>
            {!questionAsTitle && (
              <>
                Hva om det som høres så forlokkende og frigjørende ut, flytter Gud ut av sentrum for
                ditt liv?{" "}
              </>
            )}
            <span className="font-bold text-loegnen-light">
              Hva om troen på tiltrekningskraften og på at alle svarene finnes i deg selv ikke bare er
              uskyldige redskaper, men uttrykk for en eldre fristelse
              {questionAsTitle ? " – " : ": "}
              ønsket om å bli din egen Gud?
            </span>{" "}
            Den samme gamle fristelsen som drev Adam og Eva ut av paradis «dere blir som Gud»
            (1. Mosebok 3,5), men denne gangen forkledd i et motivasjonsspråk som kunne ha vært
            hentet fra en TED-talk.
          </p>
        </blockquote>
        {!questionAsTitle && (
          <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-background/60">
            Fra bokas bakside
          </figcaption>
        )}
        <div className="mt-10">
          <BuyButton onDark />
        </div>
      </figure>
    </section>
  );
}

// The opening text under "Kan du virkelig skape din egen virkelighet?", shared by the pages that
// use that title. `promiseOpening` doubles as their link-preview description.
export const promiseOpening =
  "Du har kanskje hørt budskapet om at tankene dine former virkeligheten, universet svarer på energien du sender ut, og kraften til å skape finnes allerede i deg selv?";

// A page can pass its own `ending` in place of the closing question and paragraph.
export function PromiseOpening({ ending }: { ending?: string }) {
  return (
    <div className="mt-6 space-y-4 text-lg leading-relaxed text-foreground">
      <p>{promiseOpening}</p>
      <p>
        Det er et fristende løfte, og lengselen bak er lett å forstå. Livet kan få mening og hensikt
        hvis du bare tenker riktig og retter oppmerksomheten mot det du ønsker deg.
      </p>
      {ending ? (
        <p className="font-serif-display text-2xl leading-snug font-bold text-loegnen-night">{ending}</p>
      ) : (
        <>
          <p className="font-serif-display text-2xl font-bold text-loegnen-night">Men hva om det er LØGN?</p>
          <p>
            For hva om det som høres så forlokkende og frigjørende ut, gradvis flytter Gud ut av
            sentrum av ditt liv? Disse tankene kan gjennom årene ha sneket seg inn i måten du tenker
            på, og hvordan du forstår tro, bønn og Guds velsignelse.
          </p>
        </>
      )}
    </div>
  );
}

// The back cover's line about the most dangerous lies, and what the book gives you.
export function DangerousLiesSection() {
  return (
    <section className="px-6 py-16 md:px-10">
      <figure className="mx-auto max-w-2xl">
        <blockquote className="border-l-2 border-loegnen-light pl-6 font-serif-display text-2xl leading-snug text-loegnen-night md:text-3xl">
          «For de farligste løgnene er ikke nødvendigvis de som er fullstendig usanne, men de som
          inneholder akkurat nok sannhet til at du ikke oppdager hva som har blitt endret på.»
        </blockquote>
        <p className="mt-8 text-base leading-relaxed text-foreground-muted">
          I {book.title.toUpperCase()} får du innsikt i hvordan tankens kraft gradvis har sneket seg inn
          i vår kultur. Du lærer å skille det som er sant fra det som bare ligner sannheten, og at
          friheten du søker ikke begynner med å vende blikket innover mot deg selv, men mot Ham som
          fyller alt i alle.
        </p>
      </figure>
    </section>
  );
}

const messages = [
  "Tankene dine former virkeligheten.",
  "Universet svarer på energien du sender ut.",
  "Kraften finnes allerede i deg selv.",
];

// The messages the reader may recognise, and the longing behind them. Same text on every page;
// a page can add its own paragraphs after it.
export function PromiseSection({
  label,
  heading,
  children,
}: {
  label: string;
  heading: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="px-6 py-16 md:px-10">
      <div className="mx-auto max-w-2xl space-y-5 text-base leading-relaxed text-foreground-muted">
        <SectionLabel>{label}</SectionLabel>
        <h2 className="font-serif-display text-3xl font-bold text-loegnen-night">{heading}</h2>
        <ul className="space-y-3 border-l-2 border-loegnen-light pl-6 font-serif-display text-2xl text-loegnen-night">
          {messages.map((message) => (
            <li key={message}>{message}</li>
          ))}
        </ul>
        <p>
          Lengselen bak er lett å forstå. Du vil at livet skal bli bedre, og du vil ha noe å holde
          fast ved. Men disse tankene kan gjennom årene ha sneket seg inn i måten du tenker på – og
          gradvis også inn i måten du forstår tro, bønn og Guds velsignelse.
        </p>
        {children}
      </div>
    </section>
  );
}

// The closing call to buy, with the author.
export function CampaignBuySection({
  heading,
  children,
}: {
  heading: string;
  // Optional text between the heading and the book's title.
  children?: React.ReactNode;
}) {
  return (
    <section className="px-6 py-20 md:px-10">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <h2 className="font-serif-display text-3xl font-bold text-loegnen-night md:text-4xl">{heading}</h2>
        {children && (
          <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground-muted">{children}</div>
        )}
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
  );
}

// The delivery options and their prices, from the book's details in site-config.
export function PriceList({ onDark = false }: { onDark?: boolean }) {
  if (!book.prices?.length) return null;
  return (
    <ul className={`space-y-2 text-sm ${onDark ? "text-background/85" : "text-foreground-muted"}`}>
      {book.prices.map((option) => (
        <li key={option.label}>
          <span className={`font-semibold ${onDark ? "text-background" : "text-loegnen-night"}`}>
            {option.nok} kr
          </span>{" "}
          · {option.label} <span className="opacity-75">({option.note})</span>
        </li>
      ))}
    </ul>
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

// Stands in for the site footer: the web address as plain text, with nothing to click. With
// `contact`, it also gives the email address and the terms and privacy pages.
export function CampaignFooter({ contact = false }: { contact?: boolean }) {
  return (
    <footer className="border-t border-border-soft bg-background-alt px-6 py-8 text-center text-xs text-foreground-muted md:px-10">
      {contact ? (
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
          <a href={`mailto:${links.email}`} className="hover:text-foreground">
            {links.email}
          </a>
          <Link href="/salgsbetingelser" className="hover:text-foreground">
            Salgsbetingelser
          </Link>
          <Link href="/personvern" className="hover:text-foreground">
            Personvern
          </Link>
          <span>{siteConfig.url.replace("https://", "www.")}</span>
        </div>
      ) : (
        siteConfig.url.replace("https://", "www.")
      )}
    </footer>
  );
}
