import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import Link from "next/link";
import { links } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind Holytones — music, books, courses, and creative work by Idun Munkejord.",
};

const languages = ["English", "Norwegian", "Spanish"];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border-soft bg-background-alt px-6 pt-20 pb-16 md:px-10 md:pt-28">
        <div className="mx-auto max-w-4xl">
          <SectionLabel>About</SectionLabel>
          <h1 className="font-serif-display text-5xl text-foreground md:text-6xl">
            The story behind Holytones
          </h1>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-3xl space-y-8 text-base leading-relaxed text-foreground-muted md:text-lg">
          <p>
            Holytones is the creative home of Idun Munkejord — a Christian writer, songwriter, and
            course creator based in Kristiansand, Norway. It gathers the music, the books, and the
            courses in one place, because they all come from the same source: a long-standing
            practice of writing theologically grounded, emotionally honest work across languages
            and formats.
          </p>
          <p>
            The songs move between styles on purpose. Some are worship songs meant to sit quietly
            in a room full of people. Others are personal, folk-leaning stories about grief,
            memory, and the seasons that ask more of us than we think we have. The books and
            courses, developed through YouMatter Academy, take on the same questions in prose —
            identity, truth, and a faith that doesn&apos;t ask you to perform.
          </p>
          <p>
            The voice across all of it is warm, direct, and non-preachy — writing for people who
            want depth more than polish, in whichever language a piece of work happens to arrive
            in.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl border-t border-border-soft pt-10">
          <SectionLabel>Written &amp; released in</SectionLabel>
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {languages.map((lang) => (
              <li
                key={lang}
                className="font-serif-display text-xl text-foreground md:text-2xl"
              >
                {lang}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-16 max-w-3xl border-t border-border-soft pt-10">
          <p className="font-serif-display text-2xl italic leading-relaxed text-foreground md:text-3xl">
            &ldquo;I make the work I needed to find, and hope it finds someone who needs it too.&rdquo;
          </p>
          <div className="mt-8 flex flex-wrap gap-6">
            <Link
              href="/music"
              className="border border-accent px-8 py-3 text-xs uppercase tracking-[0.2em] text-accent transition-colors hover:bg-accent hover:text-background"
            >
              Explore the work
            </Link>
            <a
              href={`mailto:${links.email}`}
              className="link-underline px-2 py-3 text-xs uppercase tracking-[0.2em] text-foreground-muted hover:text-foreground"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
