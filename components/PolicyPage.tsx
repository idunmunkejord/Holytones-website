import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";

// A block in a policy section: a paragraph (line breaks kept), a subheading, or a bullet list.
export type PolicyBlock = string | { heading: string } | { list: string[] };

export type Policy = {
  title: string;
  subtitle: string;
  updated: string;
  intro?: string;
  sections: { title: string; paragraphs: PolicyBlock[] }[];
};

function Block({ block }: { block: PolicyBlock }) {
  if (typeof block === "string") return <p className="whitespace-pre-line">{block}</p>;
  if ("heading" in block) {
    return <h3 className="pt-1 font-medium text-foreground">{block.heading}</h3>;
  }
  return (
    <ul className="list-disc space-y-1 pl-5 marker:text-accent-gold">
      {block.list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function PolicyPage({
  policy,
  related,
}: {
  policy: Policy;
  related: { href: string; label: string };
}) {
  return (
    <section className="px-6 py-14 md:px-10 md:py-20">
      <div className="mx-auto max-w-3xl">
        <SectionLabel>Kundeservice</SectionLabel>
        <h1 className="font-serif-display text-[1.875rem] leading-[1.2] text-foreground md:text-[2.375rem]">
          {policy.title}
        </h1>
        <p className="mt-3 text-xs uppercase tracking-[0.2em] text-accent-gold">
          {policy.subtitle}
        </p>
        <p className="mt-1 text-xs text-foreground-muted">{policy.updated}</p>

        <div className="mt-8 space-y-8 text-[15px] leading-[1.75] text-foreground-muted md:text-base">
          {policy.intro && <p>{policy.intro}</p>}

          {policy.sections.map((section) => (
            <div key={section.title} className="space-y-3 border-t border-border-soft pt-6">
              <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-foreground">
                {section.title}
              </h2>
              {section.paragraphs.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>
          ))}

          <p className="border-t border-border-soft pt-6 text-sm">
            <Link href={related.href} className="link-underline text-accent">
              {related.label}
            </Link>
            <span className="mx-3" aria-hidden>
              ·
            </span>
            <Link href="/contact" className="link-underline text-accent">
              Tilbake til kontakt
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
