import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import Link from "next/link";
import AuthorPhoto from "@/components/AuthorPhoto";
import ReadMore from "@/components/ReadMore";
import { links } from "@/lib/site-config";

const storyClass = "space-y-5 text-[15px] leading-[1.75] text-foreground-muted md:text-base";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind Holytones — music, books, courses, and creative work by Idun Munkejord.",
};


export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border-soft bg-background-alt px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-5xl items-start gap-12 md:grid-cols-[1fr_16rem] md:gap-16 lg:grid-cols-[1fr_18rem]">
          <div className="max-w-2xl">
            <SectionLabel>About</SectionLabel>
            <h1 className="font-serif-display text-[1.5rem] leading-[1.25] text-foreground md:text-[1.75rem]">
              I know what it means to search for answers in the wrong places.
            </h1>

            <div className={`mt-6 ${storyClass}`}>
              <p>
                For many years, personal growth was part of both my professional world and my
                own journey. I understood the appeal of becoming stronger, more capable, and better
                equipped to manage life. Yet my Christian faith gradually led me to question some of
                the assumptions beneath that pursuit, particularly the belief that lasting freedom
                could be found through greater confidence in myself.
              </p>
              <p>
                My relationship with God changed the way I understood personal growth. I began to
                see that there is a profound difference between developing your potential and
                making yourself the foundation of your identity. Although learning and personal
                responsibility remain important, they cannot provide everything the human heart
                needs.
              </p>
            </div>

            <ReadMore className={storyClass} moreLabel="Read My Story ↓">
              <p>
                Today, my writing, teaching, and music grow out of that understanding. I want to
                communicate biblical truth in a way that is thoughtful, accessible, and relevant to
                the questions people are actually asking. I believe faith should engage both the
                heart and the mind, and that discovering who God is changes how you understand
                yourself and the world around you.
              </p>
            </ReadMore>
          </div>

          <div className="w-full max-w-[15rem] md:mt-10 md:max-w-none">
            <AuthorPhoto sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 15rem" />
            <p className="mt-7 font-serif-display text-xl text-foreground">Idun Munkejord</p>
            <p className="mt-1 text-xs text-foreground-muted">Photo: Soni Sousa</p>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-5xl border-t border-border-soft pt-10">
          <div className="flex flex-wrap gap-6">
            <Link
              href="/#my-work"
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
