import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { orderButtonClass } from "@/components/CampaignParts";
import ReadMore from "@/components/ReadMore";
import SectionLabel from "@/components/SectionLabel";
import { getLang } from "@/lib/get-lang";
import { readMoreLabels } from "@/lib/i18n";
import { courses } from "@/lib/site-config";

const storyClass = "space-y-5 text-base leading-relaxed text-foreground-muted";

const text = {
  en: {
    title: "Courses",
    heading: "Confident in Who You Are",
    description: "Guided courses and devotionals from YouMatter Academy for a deeper, more honest faith.",
    imageAlt: "Idun in conversation with a small group in a bright living room",
    story: [
      "Over the years, as a leader and teacher, I’ve met many people who are wrestling with uncertainty, facing difficult choices, or questioning who they are. I’ve seen how deeply the pressure to perform can affect people and how much it means to be seen, heard, and taken seriously. These experiences have shaped the way I lead, teach, and guide others.",
      "I have found that the same principles apply across different sectors. People need clear expectations and leaders who recognise what they can contribute, give them responsibility and allow them room to grow. In my coaching, I draw on my experience in both leadership and teaching. This may involve understanding your own reactions, finding words for what feels difficult, or working out what you need to make a decision and build trust when working with others.",
    ],
    more: [
      "My own walk with God has shaped how I see people. My Christian faith informs how I relate to others and how I understand growth and change. I believe lasting change begins with getting to know God and discovering who you are in Christ. As you grow more secure in who you are in Him, it becomes easier to recognize the lies you’ve believed about yourself, let go of the need to prove your worth, and take the next step with God.",
      "As a teacher and mentor, I offer individual and group conversations with space for honest questions, practical guidance and biblical reflection. Together we explore what is holding you back, what you believe about yourself and how faith can shape your everyday choices. I bring energy, honesty and a listening ear. I will encourage you, ask questions that challenge you, and help you put insight into practice with room for both courage and rest.",
      "Having lived in Norway, the United States and Spain, I bring international experience and offer conversations in Norwegian, English and Spanish.",
    ],
    contactBefore: "If this speaks to where you are today, you are welcome to ",
    contactLink: "get in touch",
    contactButton: "Contact",
  },
  no: {
    title: "Kurs",
    heading: "Trygg på Hvem Du Er",
    description: "Kurs og andakter fra YouMatter Academy for en dypere og mer ærlig tro.",
    imageAlt: "Idun i samtale med en liten gruppe i en lys stue",
    story: [
      "Gjennom årene som leder og lærer har jeg møtt mange mennesker som strever med usikkerhet, vanskelige valg og spørsmål om hvem de er. Jeg har sett hvor hardt prestasjonspress kan ramme, og hvor mye det betyr å bli sett, lyttet til og tatt på alvor. Disse erfaringene har formet måten jeg leder, underviser og veileder på.",
      "Jeg har erfart at de samme prinsippene har verdi på tvers av bransjer. Mennesker trenger tydelige forventninger og ledere som ser hva de kan bidra med, gir dem ansvar og lar dem få rom til å utvikle seg. I veiledningen trekker jeg på erfaringen min fra både ledelse og undervisning. Det kan handle om å forstå egne reaksjoner, sette ord på det som er vanskelig, eller finne ut hva som skal til for å ta et valg og bygge tillit i samarbeid med andre.",
    ],
    more: [
      "Min egen vandring med Gud har formet menneskesynet mitt. Den kristne troen preger hvordan jeg møter mennesker, og hvordan jeg forstår vekst og forandring. Jeg tror varig forandring begynner med å bli kjent med Gud og oppdage hvem du er i Kristus. Når du blir tryggere på hvem du er i Ham, kan du lettere kjenne igjen løgnene du har trodd om deg selv, slippe taket i behovet for å bevise hva du er verdt, og ta neste steg sammen med Gud.",
      "Som lærer og mentor tilbyr jeg individuelle samtaler og gruppesamtaler med rom for ærlige spørsmål, praktisk veiledning og bibelsk refleksjon. Sammen utforsker vi hva som holder deg tilbake, hva du tror om deg selv og hvordan troen kan prege valgene du tar i hverdagen. Jeg tar med meg energi, ærlighet og et lyttende øre. Jeg vil oppmuntre deg, stille spørsmål som utfordrer deg og hjelpe deg å omsette innsikt til handling – med rom for både mot og hvile.",
      "Jeg har bodd i Norge, USA og Spania, har internasjonal erfaring og tilbyr samtaler på norsk, engelsk og spansk.",
    ],
    contactBefore: "Hvis dette treffer der du er i dag, er du velkommen til å ",
    contactLink: "ta kontakt",
    contactButton: "Kontakt",
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
            <h1 className="font-serif-display text-3xl leading-tight font-bold text-brown-dark md:text-4xl">
              {t.heading}
            </h1>

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
              <div className="pt-3">
                <Link href="/contact" className={orderButtonClass}>
                  {t.contactButton}
                </Link>
              </div>
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
