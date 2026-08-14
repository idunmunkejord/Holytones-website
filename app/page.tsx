import Link from "next/link";
import OceanHero from "@/components/OceanHero";
import SectionLabel from "@/components/SectionLabel";
import CategoryCard from "@/components/CategoryCard";
import MailingList from "@/components/MailingList";
import { categories, links, siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <OceanHero />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 md:px-10 md:pb-28">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/80">
            Idun Munkejord · Holytones
          </p>
          <h1 className="mt-4 max-w-3xl font-serif-display text-5xl leading-[1.08] text-foreground drop-shadow-sm sm:text-6xl md:text-7xl">
            {siteConfig.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/90 md:text-lg">
            {siteConfig.description}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={links.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-foreground/70 bg-background/70 px-8 py-3 text-xs uppercase tracking-[0.2em] text-foreground backdrop-blur-sm transition-colors hover:bg-foreground hover:text-background"
            >
              Listen to the music
            </a>
            <Link
              href="/about"
              className="link-underline px-2 py-3 text-xs uppercase tracking-[0.2em] text-foreground/90 hover:text-foreground"
            >
              About Idun
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Welcome</SectionLabel>
          <p className="font-serif-display text-2xl leading-relaxed text-foreground md:text-3xl">
            Holytones is where the songs, the books, the courses, and the quieter work all live —
            made for people who want depth more than polish.
          </p>
        </div>
      </section>

      <section className="border-t border-border-soft bg-background-alt px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Explore</SectionLabel>
          <h2 className="font-serif-display text-4xl text-foreground md:text-5xl">
            Five ways in
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section id="mailing-list" className="border-t border-border-soft px-6 py-20 md:px-10 md:py-28">
        <MailingList />
      </section>
    </>
  );
}
