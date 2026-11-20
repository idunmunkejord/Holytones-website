import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import Link from "next/link";
import AuthorPhoto from "@/components/AuthorPhoto";
import ReadMore from "@/components/ReadMore";
import { getLang } from "@/lib/get-lang";
import { readMoreLabels } from "@/lib/i18n";
import { links } from "@/lib/site-config";

const storyClass = "space-y-5 text-base leading-relaxed text-foreground-muted";

const text = {
  en: {
    title: "About",
    description: "The story behind Holytones — music, books, courses, and creative work by Idun Munkejord.",
    heading: "I know what it means to search for answers in the wrong places.",
    story: [
      "For many years, personal development was part of both my professional and personal life. I understood the desire to become more capable, feel more confident and gain greater control over life. Over time, my Christian faith led me to question the messages I had absorbed. Where was the line between taking responsibility for my life and believing that everything depended on me? And where was there room for God if I was supposed to hold all the power and have all the answers?",
      "My relationship with God changed how I understood growth and change. I began to see how promises of freedom can become a burden when they make us responsible for everything that happens. If our thoughts create reality, who gets the blame when life hurts? Learning, growing and taking responsibility for our choices matter, but we were never meant to carry responsibility for everything beyond our control.",
    ],
    readMore: "Read My Story ↓",
    more: "These questions became the starting point for LØGNEN and continue to shape my writing, teaching and music. I want to help people discern the difference between biblical faith and messages that encourage us to trust ourselves more than God. My hope is that more people will find security in who they are in Christ, let go of the burden of having to create their own lives through their thoughts, and learn to entrust to God what belongs to him.",
    photo: "Photo: Soni Sousa",
    explore: "Explore the work",
    contact: "Get in touch",
  },
  no: {
    title: "Om meg",
    description: "Historien bak Holytones – musikk, bøker, kurs og kreativt arbeid av Idun Munkejord.",
    heading: "Jeg vet hva det vil si å lete etter svar på feil sted.",
    story: [
      "I mange år var personlig utvikling en del av både yrkeslivet mitt og mitt eget liv. Jeg kjente ønsket om å mestre mer, bli tryggere på meg selv og få bedre kontroll over livet. Etter hvert fikk den kristne troen meg til å stille spørsmål ved budskapene jeg hadde tatt til meg. Hvor gikk grensen mellom å ta ansvar for eget liv og å tro at alt avhenger av meg? Og hvor fikk Gud plass når jeg selv skulle ha kraften og svarene?",
      "Forholdet mitt til Gud endret måten jeg forsto vekst og forandring på. Jeg begynte å se hvordan løfter om frihet kan bli en byrde når de gjør oss ansvarlige for alt som skjer. Hvis tankene våre skaper virkeligheten, hvem får da skylden når livet gjør vondt? Det er viktig å lære, utvikle seg og ta ansvar for egne valg, men vi var aldri ment å bære ansvaret for alt vi ikke kan kontrollere.",
    ],
    readMore: "Les historien min ↓",
    more: "Disse spørsmålene ble utgangspunktet for «LØGNEN» og preger det jeg skriver, underviser om og formidler gjennom musikken. Jeg ønsker å hjelpe mennesker til å skjelne mellom bibelsk tro og budskap som får oss til å stole mer på oss selv enn på Gud. Mitt håp er at flere skal finne trygghet i hvem de er i Kristus, slippe byrden av å måtte skape sitt eget liv med tankene og lære å overlate til Gud det som tilhører ham.",
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
            <h1 className="font-serif-display text-3xl leading-tight font-bold text-brown-dark md:text-4xl">
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
