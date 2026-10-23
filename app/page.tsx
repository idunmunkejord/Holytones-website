import AuthorHero from "@/components/AuthorHero";
import CategoryCard from "@/components/CategoryCard";
import DevotionalSignup from "@/components/DevotionalSignup";
import { categories } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      <AuthorHero />

      <section
        id="mailing-list"
        className="scroll-mt-28 border-y border-border-soft bg-background-alt px-6 py-14 md:px-10 md:py-16"
      >
        <DevotionalSignup />
      </section>

      <section id="my-work" className="scroll-mt-28 px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border-soft px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif-display text-4xl text-foreground md:text-5xl">
            Welcome. I&apos;m glad you&apos;re here.
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-foreground-muted md:text-lg">
            <p>
              Whether you&apos;re questioning something you&apos;ve always believed, searching for
              a deeper understanding of your Christian faith, or simply tired of the pressure to
              have everything figured out, I hope you&apos;ll find something here that encourages
              you to think differently.
            </p>
            <p>
              You don&apos;t have to become the answer to every problem in your life. The good news
              of Christianity is that you were never meant to be.
            </p>
          </div>
          <div className="mt-12">
            <span className="mx-auto block h-px w-12 bg-accent/60" aria-hidden />
            <p className="mt-6 font-serif-display text-3xl italic text-foreground">
              Idun Munkejord
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-accent">
              Author | Educator | Creator of Holytones
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
