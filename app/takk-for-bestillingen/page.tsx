import type { Metadata } from "next";
import { CampaignFooter, CampaignHeader } from "@/components/CampaignParts";
import { books } from "@/lib/site-config";

// Shown after a pre-order of LØGNEN: the address of this page is given to Simplero as the page
// customers land on after checkout. Same text and colours as the order confirmation e-mail
// (emails/lognen-ordrebekreftelse.html), except that a web page cannot know the customer's name,
// so it has no greeting line. Standalone and hidden like the landing page (standalonePaths, noindex).

const book = books[0];

export const metadata: Metadata = {
  title: `Takk for forhåndsbestillingen — ${book.title.toUpperCase()}`,
  description: `Takk for at du har forhåndsbestilt ${book.title.toUpperCase()}.`,
  robots: { index: false, follow: false },
};

export default function PreorderThanksPage() {
  return (
    <div lang="no" className="bg-background-alt">
      <CampaignHeader />

      <section className="px-4 py-10 md:px-10 md:py-16">
        <div className="mx-auto max-w-2xl">
          <div className="bg-loegnen-night px-7 py-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-loegnen-light">
              Forhåndsbestilling bekreftet
            </p>
            <h1 className="mt-4 font-serif-display text-5xl leading-none font-bold tracking-wide text-loegnen-light md:text-6xl">
              {book.title.toUpperCase()}
            </h1>
            <p className="mt-3 font-serif-display text-xl text-background md:text-2xl">
              {book.subtitle}
            </p>
          </div>

          <div className="space-y-5 border-b-4 border-loegnen-light bg-surface px-7 py-9 text-base leading-relaxed text-foreground md:px-10 md:text-[17px]">
            <p>
              Tusen takk for at du har forhåndsbestilt {book.title.toUpperCase()} – {book.subtitle}.
            </p>
            <p className="border-l-4 border-loegnen-light bg-background-alt px-5 py-4 text-loegnen-night">
              Boken utgis <strong>24. november 2026</strong> og sendes så ut fortløpende etter dette.
              Har du valgt henting, får du beskjed om når du kan hente den.
            </p>
            <p>
              Mitt håp er at boken hjelper deg til å se når selvutvikling tar Guds plass, og finne
              trygghet i at kontrollen tilhører Ham. Du trenger ikke skape livet ditt med tankene
              dine, eller bære skylden for det du aldri var ment å ha kontroll over.
            </p>
            <p>Jeg gleder meg til at du får boken i hendene!</p>
            <div className="pt-2">
              <p>En varm hilsen</p>
              <p className="mt-1 font-serif-display text-2xl text-loegnen-night">
                Idun fra Holytones
              </p>
            </div>
          </div>
        </div>
      </section>

      <CampaignFooter />
    </div>
  );
}
