import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ReadMore from "@/components/ReadMore";
import SectionLabel from "@/components/SectionLabel";
import { getLang } from "@/lib/get-lang";
import { readMoreLabels } from "@/lib/i18n";
import { courses } from "@/lib/site-config";

const storyClass = "space-y-5 text-[15px] leading-[1.75] text-foreground-muted md:text-base";

const text = {
  en: {
    title: "Courses",
    description: "Guided courses and devotionals from YouMatter Academy for a deeper, more honest faith.",
    imageAlt: "Idun in conversation with a small group in a bright living room",
    lead: "Your worth is already given. You do not have to spend your life trying to earn it.",
    story: [
      "During my years as a teacher and principal in upper secondary education, I have walked alongside young people facing insecurity, difficult choices and questions about who they are. I have seen how deeply the pressure to succeed can affect a person, and how much it matters to be heard, supported and reminded of your worth.",
      "My own journey has changed the way I approach growth. My Christian faith shapes both my understanding of people and the guidance I offer. I believe lasting change begins with knowing God and discovering who you are in Christ. From that foundation you can recognise the lies shaping your thinking, loosen the grip of performance and take meaningful steps forward.",
    ],
    more: [
      "As a teacher and mentor, I offer individual and group conversations with space for honest questions, practical guidance and biblical reflection. Together we explore what is holding you back, what you believe about yourself and how faith can shape your everyday choices. I bring energy, honesty and a listening ear. I will encourage you, ask questions that challenge you, and help you put insight into practice with room for both courage and rest.",
      "Having lived in Norway, the United States and Spain, I bring international experience and offer conversations in Norwegian, English and Spanish.",
      "You are loved by God, your life matters, and you can move forward from a place of grace.",
    ],
    contactBefore: "If this speaks to where you are today, you are welcome to ",
    contactLink: "get in touch",
  },
  no: {
    title: "Kurs",
    description: "Kurs og andakter fra YouMatter Academy for en dypere og mer ærlig tro.",
    imageAlt: "Idun i samtale med en liten gruppe i en lys stue",
    lead: "Verdien din er allerede gitt. Du trenger ikke bruke livet på å prøve å fortjene den.",
    story: [
      "I årene som lærer og rektor i videregående skole har jeg gått sammen med unge mennesker som strever med usikkerhet, vanskelige valg og spørsmål om hvem de er. Jeg har sett hvor dypt prestasjonspresset kan påvirke et menneske, og hvor mye det betyr å bli hørt, få støtte og bli minnet på sin egen verdi.",
      "Min egen reise har endret måten jeg ser på vekst. Den kristne troen min former både hvordan jeg forstår mennesker og veiledningen jeg gir. Jeg tror varig forandring begynner med å kjenne Gud og oppdage hvem du er i Kristus. Fra det fundamentet kan du kjenne igjen løgnene som former tankene dine, løsne grepet prestasjonene har om deg og ta meningsfulle steg videre.",
    ],
    more: [
      "Som lærer og mentor tilbyr jeg individuelle samtaler og gruppesamtaler med rom for ærlige spørsmål, praktisk veiledning og bibelsk refleksjon. Sammen utforsker vi hva som holder deg tilbake, hva du tror om deg selv og hvordan troen kan prege valgene du tar i hverdagen. Jeg tar med meg energi, ærlighet og et lyttende øre. Jeg vil oppmuntre deg, stille spørsmål som utfordrer deg og hjelpe deg å omsette innsikt til handling – med rom for både mot og hvile.",
      "Jeg har bodd i Norge, USA og Spania, har internasjonal erfaring og tilbyr samtaler på norsk, engelsk og spansk.",
      "Du er elsket av Gud, livet ditt betyr noe, og du kan gå videre ut fra nåde.",
    ],
    contactBefore: "Hvis dette treffer der du er i dag, er du velkommen til å ",
    contactLink: "ta kontakt",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const t = text[await getLang()];
  return { title: t.title, description: t.description };
}

export default async function CoursesPage() {
  const lang = await getLang();
  const t = text[lang];
  return (
    <>
      <section className="border-b border-border-soft bg-background-alt px-6 pt-14 pb-16 md:px-10 md:pt-20">
        <div className="mx-auto grid max-w-6xl items-start gap-10 md:grid-cols-2 md:gap-14">
          <div className="relative aspect-[3/2] overflow-hidden border border-border-soft md:mt-10">
            <Image
              src="/images/courses-sessions.webp"
              alt={t.imageAlt}
              fill
              priority
              sizes="(min-width: 1152px) 548px, (min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="max-w-2xl">
            <SectionLabel>{t.title}</SectionLabel>
            <h1 className="sr-only">{t.title}</h1>
            <p className="font-serif-display text-[1.5rem] leading-[1.25] text-foreground md:text-[1.75rem]">
              {t.lead}
            </p>

            <div className={`mt-6 ${storyClass}`}>
              {t.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <ReadMore className={storyClass} {...readMoreLabels[lang]}>
              {t.more.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>
                {t.contactBefore}
                <Link href="/contact" className="link-underline text-accent hover:text-foreground">
                  {t.contactLink}
                </Link>
                .
              </p>
            </ReadMore>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-4xl">
          {courses.map((course, index) => (
            <div
              key={course.title.en}
              className="flex flex-col gap-4 border-b border-border-soft py-8 first:pt-0 last:border-b-0 sm:flex-row sm:items-start sm:gap-6"
            >
              <span className="font-serif-display text-2xl text-foreground-muted/60">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="font-serif-display text-2xl text-foreground">{course.title[lang]}</h2>
                {course.details && (
                  <p className="mt-1 text-sm text-foreground-muted">{course.details[lang]}</p>
                )}
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-foreground-muted">
                  {course.note[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
