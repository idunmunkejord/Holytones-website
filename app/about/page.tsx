import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import Link from "next/link";
import AuthorPhoto from "@/components/AuthorPhoto";
import ReadMore from "@/components/ReadMore";
import { getLang } from "@/lib/get-lang";
import { readMoreLabels } from "@/lib/i18n";
import { links } from "@/lib/site-config";

const storyClass = "space-y-5 text-[15px] leading-[1.75] text-foreground-muted md:text-base";

const text = {
  en: {
    title: "About",
    description: "The story behind Holytones — music, books, courses, and creative work by Idun Munkejord.",
    heading: "I know what it means to search for answers in the wrong places.",
    story: [
      "For many years, personal growth was part of both my professional world and my own journey. I understood the appeal of becoming stronger, more capable, and better equipped to manage life. Yet my Christian faith gradually led me to question some of the assumptions beneath that pursuit, particularly the belief that lasting freedom could be found through greater confidence in myself.",
      "My relationship with God changed the way I understood personal growth. I began to see that there is a profound difference between developing your potential and making yourself the foundation of your identity. Although learning and personal responsibility remain important, they cannot provide everything the human heart needs.",
    ],
    readMore: "Read My Story ↓",
    more: "Today, my writing, teaching, and music grow out of that understanding. I want to communicate biblical truth in a way that is thoughtful, accessible, and relevant to the questions people are actually asking. I believe faith should engage both the heart and the mind, and that discovering who God is changes how you understand yourself and the world around you.",
    photo: "Photo: Soni Sousa",
    explore: "Explore the work",
    contact: "Get in touch",
  },
  no: {
    title: "Om meg",
    description: "Historien bak Holytones – musikk, bøker, kurs og kreativt arbeid av Idun Munkejord.",
    heading: "Jeg vet hva det vil si å lete etter svar på feil sted.",
    story: [
      "I mange år var personlig utvikling en del av både arbeidslivet mitt og min egen reise. Jeg forsto hvorfor det er tiltrekkende å bli sterkere, flinkere og bedre rustet til å mestre livet. Men den kristne troen min fikk meg gradvis til å stille spørsmål ved noen av antakelsene under – særlig troen på at varig frihet kan finnes gjennom større tillit til meg selv.",
      "Forholdet mitt til Gud endret måten jeg forsto personlig utvikling på. Jeg begynte å se at det er en dyp forskjell på å utvikle potensialet ditt og å gjøre deg selv til grunnmuren for identiteten din. Læring og personlig ansvar er fortsatt viktig, men det kan ikke gi alt menneskehjertet trenger.",
    ],
    readMore: "Les historien min ↓",
    more: "I dag vokser skrivingen, undervisningen og musikken min ut av den forståelsen. Jeg vil formidle bibelsk sannhet på en måte som er gjennomtenkt, tilgjengelig og relevant for spørsmålene mennesker faktisk stiller. Jeg tror troen skal engasjere både hjertet og tanken, og at det å oppdage hvem Gud er, forandrer hvordan du forstår deg selv og verden rundt deg.",
    photo: "Foto: Soni Sousa",
    explore: "Utforsk arbeidet",
    contact: "Ta kontakt",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const t = text[await getLang()];
  return { title: t.title, description: t.description };
}

export default async function AboutPage() {
  const lang = await getLang();
  const t = text[lang];
  return (
    <>
      <section className="border-b border-border-soft bg-background-alt px-6 py-14 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-5xl items-start gap-12 md:grid-cols-[1fr_16rem] md:gap-16 lg:grid-cols-[1fr_18rem]">
          <div className="max-w-2xl">
            <SectionLabel>{t.title}</SectionLabel>
            <h1 className="font-serif-display text-[1.5rem] leading-[1.25] text-foreground md:text-[1.75rem]">
              {t.heading}
            </h1>

            <div className={`mt-6 ${storyClass}`}>
              {t.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <ReadMore className={storyClass} {...readMoreLabels[lang]} moreLabel={t.readMore}>
              <p>{t.more}</p>
            </ReadMore>
          </div>

          <div className="w-full max-w-[15rem] md:mt-10 md:max-w-none">
            <AuthorPhoto sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 15rem" />
            <p className="mt-7 font-serif-display text-xl text-foreground">Idun Munkejord</p>
            <p className="mt-1 text-xs text-foreground-muted">{t.photo}</p>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-5xl border-t border-border-soft pt-10">
          <div className="flex flex-wrap gap-6">
            <Link
              href="/#my-work"
              className="border border-accent px-8 py-3 text-xs uppercase tracking-[0.2em] text-accent transition-colors hover:bg-accent hover:text-background"
            >
              {t.explore}
            </Link>
            <a
              href={`mailto:${links.email}`}
              className="link-underline px-2 py-3 text-xs uppercase tracking-[0.2em] text-foreground-muted hover:text-foreground"
            >
              {t.contact}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
