import Link from "next/link";
import type { Category } from "@/lib/site-config";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/${category.slug}`}
      className="group flex flex-col justify-between border border-border-soft bg-surface px-8 py-10 transition-colors hover:border-accent"
    >
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-accent">{category.kicker}</p>
        <h3 className="mt-3 font-serif-display text-3xl text-foreground">{category.label}</h3>
        <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{category.blurb}</p>
      </div>
      <span className="link-underline mt-8 inline-block w-fit text-xs uppercase tracking-[0.18em] text-foreground-muted transition-colors group-hover:text-accent">
        Explore
      </span>
    </Link>
  );
}
