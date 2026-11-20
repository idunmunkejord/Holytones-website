import type { Metadata } from "next";
import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import OrderLink from "@/components/OrderLink";
import { orderButtonClass } from "@/components/CampaignParts";
import ZoomImage from "@/components/ZoomImage";
import { getLang } from "@/lib/get-lang";
import { books } from "@/lib/site-config";

const text = {
  en: {
    title: "Book",
    description: "Books by Idun Munkejord — honest, faith-rooted writing for readers who want depth over polish.",
    coverAlt: "front and back cover",
    coverHint: "Tap the image to see the whole cover",
    backAlt: "back cover",
    order: "Order",
  },
  no: {
    title: "Bok",
    description: "Bøker av Idun Munkejord – ærlig, troforankret skriving for deg som vil ha dybde fremfor fasade.",
    coverAlt: "forside og bakside",
    coverHint: "Trykk på bildet for å se hele omslaget",
    backAlt: "bakside",
    order: "Bestill",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const t = text[await getLang()];
  return { title: t.title, description: t.description };
}

export default async function BooksPage() {
  const lang = await getLang();
  const t = text[lang];
  return (
    <>
      <section className="px-6 pt-14 pb-16 md:px-10 md:pt-20">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>{t.title}</SectionLabel>
          <h1 className="sr-only">{t.title}</h1>
          {books.map((book, index) => (
            <div
              key={book.title}
              className="flex flex-col gap-8 border-b border-border-soft py-8 first:pt-0 last:border-b-0 sm:flex-row sm:items-start sm:gap-8 lg:gap-12"
            >
              {(book.cover || book.coverBack) && (
                <div className="flex w-full max-w-sm shrink-0 gap-3 sm:w-64 md:w-80 lg:w-96">
                  {book.cover && (
                    <figure className="w-full shrink-0">
                      <ZoomImage
                        src={book.cover}
                        alt={`${book.title} — ${t.coverAlt}`}
                        sizes="(min-width: 1024px) 384px, (min-width: 768px) 320px, (min-width: 640px) 256px, 384px"
                        className="aspect-[3/2] w-full overflow-hidden"
                        imageClassName="object-contain mix-blend-multiply"
                      />
                      <figcaption className="mt-2 text-center text-xs text-foreground/70">
                        {t.coverHint}
                      </figcaption>
                    </figure>
                  )}
                  {book.coverBack && (
                    <a
                      href={book.coverBack}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative aspect-[3/4] w-32 shrink-0 cursor-zoom-in overflow-hidden border border-border-soft transition-opacity hover:opacity-80 sm:w-40"
                    >
                      <Image
                        src={book.coverBack}
                        alt={`${book.title} — ${t.backAlt}`}
                        fill
                        sizes="(min-width: 640px) 160px, 128px"
                        quality={95}
                        className="object-cover"
                      />
                    </a>
                  )}
                </div>
              )}
              <div className="flex flex-1 gap-4">
                <span className="font-serif-display text-2xl text-foreground-muted/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-serif-display text-3xl leading-tight font-bold text-brown-dark md:text-4xl">
                    {book.title}
                  </h2>
                  {book.subtitle && (
                    <p className="mt-1 font-serif-display text-3xl leading-tight font-bold text-brown-dark md:text-4xl">
                      {book.subtitle}
                    </p>
                  )}
                  <p className="mt-1 text-sm text-foreground-muted">
                    {book.language[lang]} ·{" "}
                    <span className="uppercase tracking-[0.14em] text-accent">{book.status[lang]}</span>
                  </p>
                  <div className="mt-4 max-w-xl space-y-4 text-base leading-relaxed text-foreground-muted">
                    {book.note[lang].map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {book.orderUrl && (
                    <OrderLink
                      href={book.orderUrl}
                      className={`mt-8 ${orderButtonClass}`}
                    >
                      {t.order}
                    </OrderLink>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
