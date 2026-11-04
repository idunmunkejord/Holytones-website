import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import { getLang } from "@/lib/get-lang";

const text = {
  en: {
    title: "Skin",
    description: "A space taking shape — more to come soon.",
    label: "In progress",
    body: "This space is still taking shape. Come back soon to see what it becomes, or join the mailing list to hear when it launches.",
    join: "Join the mailing list",
    contact: "Get in touch",
  },
  no: {
    title: "Skin",
    description: "En side under arbeid – mer kommer snart.",
    label: "Under arbeid",
    body: "Denne siden er fortsatt under arbeid. Kom tilbake snart for å se hva den blir til, eller meld deg på nyhetsbrevet for å få beskjed når den åpner.",
    join: "Meld deg på nyhetsbrevet",
    contact: "Ta kontakt",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const t = text[await getLang()];
  return { title: t.title, description: t.description };
}

export default async function SkinPage() {
  const t = text[await getLang()];
  return (
    <section className="flex min-h-[60vh] items-center border-b border-border-soft px-6 py-24 md:px-10">
      <div className="mx-auto max-w-2xl text-center">
        <SectionLabel>{t.label}</SectionLabel>
        <h1 className="font-serif-display text-[1.5rem] leading-[1.25] text-foreground md:text-[1.75rem]">{t.title}</h1>
        <p className="mt-5 text-[15px] leading-[1.75] text-foreground-muted md:text-base">
          {t.body}
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-6">
          <Link
            href="/#mailing-list"
            className="border border-accent px-8 py-3 text-xs uppercase tracking-[0.2em] text-accent transition-colors hover:bg-accent hover:text-background"
          >
            {t.join}
          </Link>
          <Link
            href="/contact"
            className="link-underline px-2 py-3 text-xs uppercase tracking-[0.2em] text-foreground-muted hover:text-foreground"
          >
            {t.contact}
          </Link>
        </div>
      </div>
    </section>
  );
}
