import Link from "next/link";
import type { Category, CategoryTone } from "@/lib/site-config";

const toneClasses: Record<CategoryTone, { top: string; text: string }> = {
  teal: {
    top: "border-t-accent",
    text: "text-accent",
  },
  blush: {
    top: "border-t-accent-blush",
    text: "text-accent-blush",
  },
  violet: {
    top: "border-t-accent-violet",
    text: "text-accent-violet",
  },
  peach: {
    top: "border-t-accent-peach",
    text: "text-accent-peach",
  },
  green: {
    top: "border-t-accent-green",
    text: "text-accent-green",
  },
};

export default function CategoryCard({ category }: { category: Category }) {
  const tone = toneClasses[category.tone];

  return (
    <Link
      href={`/${category.slug}`}
      className={`group flex flex-col justify-between border border-border-soft border-t-[3px] ${tone.top} bg-surface px-8 py-10 transition-colors`}
    >
      <div>
        <h3 className="font-serif-display text-2xl text-foreground">{category.label}</h3>
        <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{category.blurb}</p>
      </div>
      <span
        className={`link-underline mt-8 inline-block w-fit text-xs uppercase tracking-[0.18em] transition-colors ${tone.text} group-hover:text-foreground`}
      >
        Explore
      </span>
    </Link>
  );
}
