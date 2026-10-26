import type { Metadata } from "next";
import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import { books } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Books",
  description: "Books by Idun Munkejord — honest, faith-rooted writing for readers who want depth over polish.",
};

export default function BooksPage() {
  return (
    <>
      <section className="border-b border-border-soft bg-background-alt px-6 pt-14 pb-16 md:px-10 md:pt-20">
        <div className="mx-auto max-w-4xl">
          <SectionLabel>Books</SectionLabel>
          <h1 className="sr-only">Books</h1>
          <div className="max-w-2xl space-y-5 text-base leading-relaxed text-foreground-muted">
            <p>
              What you believe shapes how you live, yet some of the ideas you trust most may deserve
              a closer look. Holytones books invite you to explore the questions that touch your
              identity, faith and everyday choices, helping you recognise misleading promises and
              deepen your trust in God. Through thoughtful reflection and Scripture-rooted
              encouragement, each book brings God&rsquo;s Word into the struggles, longings and
              decisions you know firsthand.
            </p>
            <p>
              Begin with LØGNEN, which examines what happens when self-development takes
              God&rsquo;s place.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-4xl">
          {books.map((book, index) => (
            <div
              key={book.title}
              className="flex flex-col gap-6 border-b border-border-soft py-8 first:pt-0 last:border-b-0 sm:flex-row sm:items-start sm:gap-8"
            >
              {(book.cover || book.coverBack) && (
                <div className="flex shrink-0 gap-3">
                  {book.cover && (
                    <a
                      href={book.cover}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative aspect-[3/2] w-full max-w-sm shrink-0 cursor-zoom-in overflow-hidden transition-opacity hover:opacity-80 sm:w-72"
                    >
                      <Image
                        src={book.cover}
                        alt={`${book.title} — front and back cover`}
                        fill
                        sizes="(min-width: 640px) 288px, 384px"
                        quality={95}
                        className="object-contain mix-blend-multiply"
                      />
                    </a>
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
                        alt={`${book.title} — back cover`}
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
                  <h2 className="font-serif-display text-2xl text-foreground">{book.title}</h2>
                  {book.subtitle && (
                    <p className="mt-1 font-serif-display text-lg text-foreground-muted">
                      {book.subtitle}
                    </p>
                  )}
                  <p className="mt-1 text-sm text-foreground-muted">
                    {book.language} ·{" "}
                    <span
                      className={
                        book.status === "Coming soon"
                          ? "uppercase tracking-[0.14em] text-accent"
                          : undefined
                      }
                    >
                      {book.status}
                    </span>
                  </p>
                  <div className="mt-4 max-w-xl space-y-4 text-sm leading-relaxed text-foreground-muted">
                    {book.note.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {book.orderUrl && (
                    <a
                      href={book.orderUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-block border border-accent px-8 py-3 text-xs uppercase tracking-[0.2em] text-accent transition-colors hover:bg-accent hover:text-background"
                    >
                      Order book
                    </a>
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
