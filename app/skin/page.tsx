import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Skin",
  description: "A space taking shape — more to come soon.",
};

export default function SkinPage() {
  return (
    <section className="flex min-h-[60vh] items-center border-b border-border-soft px-6 py-24 md:px-10">
      <div className="mx-auto max-w-2xl text-center">
        <SectionLabel>In progress</SectionLabel>
        <h1 className="font-serif-display text-5xl text-foreground md:text-6xl">Skin</h1>
        <p className="mt-5 text-base leading-relaxed text-foreground-muted md:text-lg">
          This space is still taking shape. Come back soon to see what it becomes, or join the
          mailing list to hear when it launches.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-6">
          <Link
            href="/#mailing-list"
            className="border border-accent px-8 py-3 text-xs uppercase tracking-[0.2em] text-accent transition-colors hover:bg-accent hover:text-background"
          >
            Join the mailing list
          </Link>
          <Link
            href="/contact"
            className="link-underline px-2 py-3 text-xs uppercase tracking-[0.2em] text-foreground-muted hover:text-foreground"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
