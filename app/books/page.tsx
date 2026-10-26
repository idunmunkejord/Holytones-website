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
          <p className="max-w-xl text-base leading-relaxed text-foreground-muted">
            Faith-rooted books, written primarily for readers ready to trade easy comfort for
            honest truth.
          </p>
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
                      className="relative aspect-[3/4] w-32 shrink-0 cursor-zoom-in overflow-hidden border border-border-soft transition-opacity hover:opacity-80 sm:w-40"
                    >
                      <Image
                        src={book.cover}
                        alt={`${book.title} — front cover`}
                        fill
                        sizes="(min-width: 640px) 160px, 128px"
                        quality={95}
                        className="object-cover"
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
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-foreground-muted">
                    {book.note}
                  </p>
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
