import Image from "next/image";
import ReadMore from "@/components/ReadMore";
import SectionLabel from "@/components/SectionLabel";
import { readMoreLabels, type Lang } from "@/lib/i18n";

const bodyClass = "space-y-5 text-[15px] leading-[1.75] text-foreground-muted md:text-base";

const text = {
  en: {
    imageAlt: "A woman at her desk with her head in her hand, looking weary",
    label: "Home",
    heading: "What if the greatest lie you've believed is that everything depends on you?",
    intro: [
      "You've been told to believe in yourself, trust your feelings, follow your heart, and become the best version of who you are. But what if these familiar promises are keeping you from discovering the truth that could actually set you free?",
      "What if you've been looking to yourself for answers that were never meant to come from you?",
    ],
    explore: "Explore Books, Courses & Music",
    more: [
      "Perhaps you've worked hard to improve yourself, overcome challenges, and create a meaningful life. You've learned to take responsibility, develop your abilities, and manage your circumstances, only to discover that there is always something more to achieve, another weakness to overcome, or another part of yourself that supposedly needs fixing. What began as a desire to grow can gradually become an exhausting responsibility to make everything in your life work.",
      "The Christian message offers a radically different starting point. Your value is not something you have to create, your identity is not something you have to invent, and lasting freedom is not something you can manufacture through the right thoughts, habits, or techniques. You were created for a relationship with God, and understanding who He is changes how you understand yourself, your purpose, and the life you have been given.",
    ],
  },
  no: {
    imageAlt: "En kvinne ved skrivebordet med hodet i hånden, sliten",
    label: "Hjem",
    heading: "Hva om den største løgnen du har trodd på, er at alt avhenger av deg?",
    intro: [
      "Du har fått høre at du skal tro på deg selv, stole på følelsene dine, følge hjertet ditt og bli den beste versjonen av deg selv. Men hva om disse kjente løftene hindrer deg i å oppdage sannheten som faktisk kan sette deg fri?",
      "Hva om du har lett i deg selv etter svar som aldri var ment å komme fra deg?",
    ],
    explore: "Utforsk bøker, kurs og musikk",
    more: [
      "Kanskje har du jobbet hardt for å forbedre deg selv, overvinne utfordringer og skape et meningsfullt liv. Du har lært å ta ansvar, utvikle evnene dine og håndtere omstendighetene dine – bare for å oppdage at det alltid er noe mer å oppnå, en ny svakhet å overvinne eller en annen del av deg som visstnok må fikses. Det som begynte som et ønske om å vokse, kan gradvis bli et utmattende ansvar for å få alt i livet ditt til å fungere.",
      "Det kristne budskapet gir et radikalt annerledes utgangspunkt. Verdien din er ikke noe du må skape, identiteten din er ikke noe du må finne opp, og varig frihet er ikke noe du kan fremstille gjennom de riktige tankene, vanene eller teknikkene. Du ble skapt for et forhold til Gud, og når du forstår hvem Han er, endres måten du forstår deg selv, meningen med livet ditt og livet du har fått.",
    ],
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
          <h1 className="font-serif-display text-[1.5rem] leading-[1.25] text-foreground md:text-[1.75rem]">
            {t.heading}
          </h1>

          <div className={`mt-6 ${bodyClass}`}>
            {t.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ReadMore
            className={bodyClass}
            {...readMoreLabels[lang]}
            actions={
              <a
                href="#my-work"
                className="inline-block border border-accent px-6 py-2.5 text-xs uppercase tracking-[0.2em] text-accent transition-colors hover:bg-accent hover:text-background"
              >
                {t.explore}
              </a>
            }
          >
            {t.more.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </ReadMore>
        </div>
      </div>
    </section>
  );
}
