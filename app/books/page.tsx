import type { Metadata } from "next";
import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import OrderLink from "@/components/OrderLink";
import ReadMore from "@/components/ReadMore";
import ZoomImage from "@/components/ZoomImage";
import { getLang } from "@/lib/get-lang";
import { readMoreLabels } from "@/lib/i18n";
import { books } from "@/lib/site-config";

const text = {
  en: {
    title: "Book",
    description: "Books by Idun Munkejord — honest, faith-rooted writing for readers who want depth over polish.",
    // The opening of the LØGNEN landing page (app/lognen-manifestering), translated.
    headline: "Can you really create your own reality?",
    opening: [
      "You may have heard it: Your thoughts shape reality. The universe responds to the energy you send out. And the power to create the life you want already lies within you.",
      "It is a tempting promise, and the longing behind it is easy to understand. You can create the life you long for, if only you think the right way and focus on what you want.",
    ],
    openingQuestion:
      "But what if it is a LIE – and you have gradually learned to trust the power of thought more than God’s promises?",
    // Sections 2–4 of the landing page, shown under Read More.
    sections: [
      {
        heading: "What if what sounds so alluring and freeing moves God out of the centre of your life?",
        paragraphs: [
          "What if believing in the law of attraction, and that all the answers are found within you, is not just a harmless tool, but the expression of an older temptation – the desire to become your own God?",
          "Could it be the same old temptation that drove Adam and Eve out of paradise, “you will be like God” (Genesis 3:5), but this time disguised in motivational language that could have come from a TED talk?",
        ],
      },
      {
        heading: "Your thoughts matter. But do they create your life?",
        paragraphs: [
          "If your thoughts create your life, is the pain then your own fault? When illness strikes, a marriage breaks down or prayers go unanswered, did you create that?",
          "Did you think the wrong thoughts, believe too little, or send out the wrong energy?",
        ],
        quote: "First you were promised the power to create everything. Then you get the blame when you lose it.",
      },
      {
        heading: "What if this is the spiritual self-deception of our time, drawing us away from God and His blessing?",
        paragraphs: [],
        quote:
          "“For the most dangerous lies are not necessarily the ones that are completely untrue, but the ones that contain just enough truth that you don’t notice what has been changed” (LØGNEN)",
      },
    ],
    coverAlt: "front and back cover",
    coverHint: "Tap the image to see the whole cover",
    backAlt: "back cover",
    order: "Order book",
  },
  no: {
    title: "Bok",
    description: "Bøker av Idun Munkejord – ærlig, troforankret skriving for deg som vil ha dybde fremfor fasade.",
    // The opening of the LØGNEN landing page (app/lognen-manifestering), word for word.
    headline: "Kan du virkelig skape din egen virkelighet?",
    opening: [
      "Du har kanskje hørt det: Tankene dine former virkeligheten. Universet svarer på energien du sender ut. Og kraften til å skape livet du ønsker, finnes allerede i deg.",
      "Det er et fristende løfte, og lengselen bak er lett å forstå. Du kan skape det livet du lengter etter hvis du bare tenker riktig og retter oppmerksomheten mot det du ønsker deg.",
    ],
    openingQuestion:
      "Men hva om det er LØGN – og du gradvis har lært å tro mer på tankens kraft enn på Guds løfter?",
    // Sections 2–4 of the landing page, shown under Les mer.
    sections: [
      {
        heading: "Hva om det som høres så forlokkende og frigjørende ut, flytter Gud ut av sentrum av ditt liv?",
        paragraphs: [
          "Hva om troen på tiltrekningskraften, og på at alle svarene finnes i deg selv, ikke bare er uskyldige redskaper, men uttrykk for en eldre fristelse – ønsket om å bli din egen Gud?",
          "Kan det være den samme gamle fristelsen som drev Adam og Eva ut av paradis «dere vil bli som Gud» (1. Mosebok 3,5), men denne gangen forkledd i et motivasjonsspråk som kunne ha vært hentet fra en TED talk?",
        ],
      },
      {
        heading: "Tankene dine betyr noe. Men skaper de livet ditt?",
        paragraphs: [
          "Dersom tankene dine skaper livet ditt, blir smerten da din egen skyld? For når sykdom rammer, ekteskapet ryker eller bønnesvar uteblir, var det du som skapte det?",
          "Tenkte du feil, trodde for lite, eller sendte du ut feil energi?",
        ],
        quote: "Først ble du lovet makten til å skape alt. Så får du skylden når du mister det.",
      },
      {
        heading: "Hva om dette er vår tids åndelige selvbedrag for å få oss bort fra Gud og Hans velsignelse?",
        paragraphs: [],
        quote:
          "«For de farligste løgnene er ikke nødvendigvis de som er fullstendig usanne, men de som inneholder akkurat nok sannhet til at du ikke oppdager hva som har blitt endret på» (LØGNEN)",
      },
    ],
    coverAlt: "forside og bakside",
    coverHint: "Trykk på bildet for å se hele omslaget",
    backAlt: "bakside",
    order: "Bestill boka",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const t = text[await getLang()];
  return { title: t.title, description: t.description };
}

export default async function BooksPage() {
  const lang = await getLang();
  const t = text[lang];
  return (
    <>
      <section className="border-b border-border-soft bg-background-alt px-6 pt-14 pb-16 md:px-10 md:pt-20">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>{t.title}</SectionLabel>
          <div className="max-w-2xl">
            <h1 className="font-serif-display text-3xl leading-tight font-bold text-brown-dark md:text-4xl">
              {t.headline}
            </h1>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground-muted">
              {t.opening.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="font-serif-display text-2xl leading-snug font-bold text-brown-dark">
                {t.openingQuestion}
              </p>
            </div>
            <ReadMore className="space-y-12" {...readMoreLabels[lang]}>
              {t.sections.map((section) => (
                <div
                  key={section.heading}
                  className="space-y-5 text-base leading-relaxed text-foreground-muted"
                >
                  <h2 className="font-serif-display text-2xl leading-snug font-bold text-brown-dark md:text-3xl">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.quote && (
                    <p className="border-l-2 border-accent pl-5 font-serif-display text-2xl leading-snug text-brown-dark">
                      {section.quote}
                    </p>
                  )}
                </div>
              ))}
            </ReadMore>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-6xl">
          {books.map((book, index) => (
            <div
              key={book.title}
              className="flex flex-col gap-8 border-b border-border-soft py-8 first:pt-0 last:border-b-0 sm:flex-row sm:items-start sm:gap-8 lg:gap-12"
            >
              {(book.cover || book.coverBack) && (
                <div className="flex w-full max-w-sm shrink-0 gap-3 sm:w-64 md:w-80 lg:w-96">
                  {book.cover && (
                    <figure className="w-full shrink-0">
                      <ZoomImage
                        src={book.cover}
                        alt={`${book.title} — ${t.coverAlt}`}
                        sizes="(min-width: 1024px) 384px, (min-width: 768px) 320px, (min-width: 640px) 256px, 384px"
                        className="aspect-[3/2] w-full overflow-hidden"
                        imageClassName="object-contain mix-blend-multiply"
                      />
                      <figcaption className="mt-2 text-center text-xs text-foreground/70">
                        {t.coverHint}
                      </figcaption>
                    </figure>
                  )}
                  {book.coverBack && (
                    <a
                      href={book.coverBack}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative aspect-[3/4] w-32 shrink-0 cursor-zoom-in overflow-hidden border border-border-soft transition-opacity hover:opacity-80 sm:w-40"
                    >
                      <Image
                        src={book.coverBack}
                        alt={`${book.title} — ${t.backAlt}`}
                        fill
                        sizes="(min-width: 640px) 160px, 128px"
                        quality={95}
                        className="object-cover"
                      />
                    </a>
                  )}
                </div>
              )}
              <div className="flex flex-1 gap-4">
                <span className="font-serif-display text-2xl text-foreground-muted/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-serif-display text-2xl font-bold text-brown-dark">{book.title}</h2>
                  {book.subtitle && (
                    <p className="mt-1 font-serif-display text-lg font-bold text-brown-dark">
                      {book.subtitle}
                    </p>
                  )}
                  <p className="mt-1 text-sm text-foreground-muted">
                    {book.language[lang]} ·{" "}
                    <span className="uppercase tracking-[0.14em] text-accent">{book.status[lang]}</span>
                  </p>
                  <div className="mt-4 max-w-xl space-y-4 text-sm leading-relaxed text-foreground-muted">
                    {book.note[lang].map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {book.orderUrl && (
                    <OrderLink
                      href={book.orderUrl}
                      className="mt-6 inline-block border border-accent px-8 py-3 text-xs uppercase tracking-[0.2em] text-accent transition-colors hover:bg-accent hover:text-background"
                    >
                      {t.order}
                    </OrderLink>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
