import AuthorHero from "@/components/AuthorHero";
import CategoryCard from "@/components/CategoryCard";
import { getLang } from "@/lib/get-lang";
import { categories } from "@/lib/site-config";

export default async function Home() {
  const lang = await getLang();
  return (
    <>
      <AuthorHero lang={lang} />

      <section id="my-work" className="scroll-mt-28 bg-background-alt px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} lang={lang} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
