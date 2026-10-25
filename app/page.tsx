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

      <section className="border-t border-border-soft px-6 py-10 md:px-10 md:py-14">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif-display text-[1.375rem] leading-[1.25] text-foreground md:text-[1.625rem]">
            Welcome. I&apos;m glad you&apos;re here.
          </h2>
        </div>
      </section>
    </>
  );
}
