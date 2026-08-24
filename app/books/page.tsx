import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import { books } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Books",
  description: "Books by Idun Munkejord — honest, faith-rooted writing for readers who want depth over polish.",
};

export default function BooksPage() {
  return (
    <>
      <section className="border-b border-border-soft bg-background-alt px-6 pt-20 pb-16 md:px-10 md:pt-28">
        <div className="mx-auto max-w-4xl">
          <SectionLabel>Words on the page</SectionLabel>
          <h1 className="font-serif-display text-5xl text-foreground md:text-6xl">Books</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground-muted">
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
              className="flex flex-col gap-4 border-b border-border-soft py-8 first:pt-0 last:border-b-0 sm:flex-row sm:items-start sm:gap-6"
            >
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
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
