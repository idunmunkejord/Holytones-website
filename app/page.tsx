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
        className="scroll-mt-28 border-b border-border-soft px-6 py-14 md:px-10 md:py-16"
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
    </>
  );
}
