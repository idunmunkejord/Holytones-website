import Image from "next/image";
import { orderButtonClass } from "@/components/CampaignParts";
import OrderLink from "@/components/OrderLink";
import ReadMore from "@/components/ReadMore";
import SectionLabel from "@/components/SectionLabel";
import { readMoreLabels, type Lang } from "@/lib/i18n";
import { books } from "@/lib/site-config";

// The top of the home page: the opening of the LØGNEN landing page (app/lognen-manifestering),
// with sections 2–4 of that page under Read More and a button to order the book.

const bodyClass = "space-y-5 text-base leading-relaxed text-foreground-muted";
const book = books[0];

const text = {
  en: {
    imageAlt: "A woman at her desk with her head in her hand, looking weary",
    label: "Home",
    // Translated from the Norwegian landing page.
    headline: "Can you really create your own reality?",
    opening: [
      "You may have heard it: Your thoughts shape reality. The universe responds to the energy you send out. And the power to create the life you want already lies within you.",
      "It is a tempting promise, and the longing behind it is easy to understand. You can create the life you long for, if only you think the right way and focus on what you want.",
    ],
    openingQuestion:
      "But what if it is a LIE – and you have gradually learned to trust the power of thought more than God’s promises?",
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
    order: "Order LØGNEN",
  },
  no: {
    imageAlt: "En kvinne ved skrivebordet med hodet i hånden, sliten",
    label: "Hjem",
    headline: "Kan du virkelig skape din egen virkelighet?",
    opening: [
      "Du har kanskje hørt det: Tankene dine former virkeligheten. Universet svarer på energien du sender ut. Og kraften til å skape livet du ønsker, finnes allerede i deg.",
      "Det er et fristende løfte, og lengselen bak er lett å forstå. Du kan skape det livet du lengter etter hvis du bare tenker riktig og retter oppmerksomheten mot det du ønsker deg.",
    ],
    openingQuestion:
      "Men hva om det er LØGN – og du gradvis har lært å tro mer på tankens kraft enn på Guds løfter?",
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
    order: "Bestill LØGNEN",
  },
};

export default function AuthorHero({ lang }: { lang: Lang }) {
  const t = text[lang];
  return (
    <section className="border-b border-border-soft bg-background-alt px-6 py-14 md:px-10 md:py-20">
      <div className="mx-auto grid max-w-6xl items-start gap-10 md:grid-cols-2 md:gap-14">
        <div className="relative aspect-[1672/941] overflow-hidden border border-border-soft md:mt-10">
          <Image
            src="/images/home-hero.webp"
            alt={t.imageAlt}
            fill
            priority
            sizes="(min-width: 1152px) 548px, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="max-w-2xl">
          <SectionLabel>{t.label}</SectionLabel>
          <h1 className="font-serif-display text-3xl leading-tight font-bold text-brown-dark md:text-4xl">
            {t.headline}
          </h1>

          <div className={`mt-6 ${bodyClass}`}>
            {t.opening.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="font-serif-display text-2xl leading-snug font-bold text-brown-dark">
              {t.openingQuestion}
            </p>
          </div>

          <ReadMore className="space-y-12" {...readMoreLabels[lang]}>
            {t.sections.map((section) => (
              <div key={section.heading} className={bodyClass}>
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

          {book.orderUrl && (
            <div className="mt-10">
              <OrderLink href={book.orderUrl} className={orderButtonClass}>
                {t.order}
              </OrderLink>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
