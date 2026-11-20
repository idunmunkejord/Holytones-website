import type { Metadata } from "next";
import DevotionalSignup from "@/components/DevotionalSignup";
import { getLang } from "@/lib/get-lang";

// The newsletter: signup for the weekly devotional, moved here from the home page.

const text = {
  en: {
    title: "Newsletter",
    description: "Sign up for the weekly devotional from Holytones: short, honest, Bible-rooted reflections every Sunday and Wednesday.",
  },
  no: {
    title: "Nyhetsbrev",
    description: "Meld deg på ukentlig andakt fra Holytones: korte, ærlige og bibelforankrede refleksjoner hver søndag og onsdag.",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const t = text[await getLang()];
  return { title: t.title, description: t.description };
}

export default async function NewsletterPage() {
  const lang = await getLang();
  return (
    <section id="mailing-list" className="bg-background-alt px-6 py-14 md:px-10 md:py-20">
      <h1 className="sr-only">{text[lang].title}</h1>
      <DevotionalSignup lang={lang} />
    </section>
  );
}
