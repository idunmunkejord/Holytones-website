import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import type { Category, CategoryTone } from "@/lib/site-config";

const toneClasses: Record<CategoryTone, { frame: string; text: string }> = {
  teal: {
    frame: "border-accent",
    text: "text-accent",
  },
  blush: {
    frame: "border-accent-blush",
    text: "text-accent-blush",
  },
  violet: {
    frame: "border-accent-violet",
    text: "text-accent-violet",
  },
  peach: {
    frame: "border-accent-peach",
    text: "text-accent-peach",
  },
  green: {
    frame: "border-accent-green",
    text: "text-accent-green",
  },
};

export default function CategoryCard({ category, lang }: { category: Category; lang: Lang }) {
  const tone = toneClasses[category.tone];

  return (
    <Link
      href={`/${category.slug}`}
      className={`group flex flex-col justify-between border-[3px] ${tone.frame} bg-surface px-8 py-10 transition-colors`}
    >
      <div>
        <h3 className="font-serif-display text-3xl leading-tight font-bold text-brown-dark md:text-4xl">{category.label[lang]}</h3>
        <p className="mt-4 text-base leading-relaxed text-foreground">{category.blurb[lang]}</p>
      </div>
      <span
        className={`link-underline mt-8 inline-block w-fit text-sm font-semibold uppercase tracking-[0.18em] transition-colors ${tone.text} group-hover:text-foreground`}
      >
        {lang === "no" ? "Utforsk" : "Explore"}
      </span>
    </Link>
  );
}
