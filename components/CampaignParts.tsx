import Image from "next/image";
import { books, siteConfig } from "@/lib/site-config";

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

// The closing call to buy, with the author.
export function CampaignBuySection({ heading }: { heading: string }) {
  return (
    <section className="px-6 py-20 md:px-10">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <h2 className="font-serif-display text-3xl font-bold text-loegnen-night md:text-4xl">{heading}</h2>
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

// Stands in for the site footer: the web address as plain text, with nothing to click.
export function CampaignFooter() {
  return (
    <footer className="border-t border-border-soft bg-background-alt px-6 py-8 text-center text-xs text-foreground-muted md:px-10">
      {siteConfig.url.replace("https://", "www.")}
    </footer>
  );
}
