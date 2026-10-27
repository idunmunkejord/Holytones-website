import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";

// The cancellation form ("Angre kjøp"), word for word from Idun's document. The same form is
// offered as a Word file in /public/skjemaer to fill in and email.

export const metadata: Metadata = {
  title: "Angre kjøp",
  description: "Angreskjema for kjøp av fysiske bøker og nettkurs fra Holytones.",
};

const FORM_FILE = "/skjemaer/angreskjema-holytones.docx";

const sectionHeading = "text-sm font-medium uppercase tracking-[0.14em] text-foreground";

function Fields({ labels }: { labels: string[] }) {
  return (
    <dl className="space-y-4">
      {labels.map((label) => (
        <div key={label} className="border-b border-border-soft pb-2">
          <dt>{label}</dt>
        </div>
      ))}
    </dl>
  );
}

export default function CancellationPage() {
  return (
    <section className="px-6 py-14 md:px-10 md:py-20">
      <div className="mx-auto max-w-3xl">
        <SectionLabel>Kundeservice</SectionLabel>
        <h1 className="font-serif-display text-[1.5rem] leading-[1.25] text-foreground md:text-[1.75rem]">
          Har du ombestemt deg?
        </h1>

        <div className="mt-6 space-y-4 text-[15px] leading-[1.75] text-foreground-muted md:text-base">
          <p>
            Det er helt i orden. Fyll ut skjemaet under, så hjelper vi deg videre dersom du ønsker
            å benytte angreretten ved kjøp av fysiske bøker eller nettkurs fra Holytones.
          </p>
          <p>
            Du har som hovedregel 14 dagers angrerett fra dagen etter at du mottok boken, eller fra
            dagen etter avtaleinngåelsen ved kjøp av nettkurs, forutsatt at lovpålagt informasjon
            er mottatt. Eventuelle unntak for nettkurs krever at lovens vilkår er oppfylt. Se{" "}
            <Link href="/salgsbetingelser" className="link-underline text-accent">
              salgsbetingelsene
            </Link>{" "}
            for detaljer. Skjemaet kan sendes til{" "}
            <a href="mailto:post@holytones.no" className="link-underline text-accent">
              post@holytones.no
            </a>
            . Det er ikke obligatorisk å bruke dette skjemaet, men du må gi tydelig beskjed dersom
            du ønsker å angre kjøpet.
          </p>
        </div>

        <a
          href={FORM_FILE}
          download
          className="mt-8 inline-block bg-accent px-8 py-3.5 text-xs uppercase tracking-[0.2em] text-background transition-colors hover:bg-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Last ned angreskjema (Word)
        </a>

        <div className="mt-10 space-y-8 border border-border-soft bg-surface px-6 py-8 text-[15px] leading-[1.75] text-foreground-muted sm:px-10 md:text-base">
          <div className="space-y-3">
            <h2 className={sectionHeading}>Mottaker</h2>
            <p className="whitespace-pre-line">
              {"Selger: Holytones (Pedersen Interaktiv)\nOrganisasjonsnummer: 927 929 783\nAdresse: Krooddveien 9b, 4624 Kristiansand\nE-post: post@holytones.no\nTelefon: 971 91 960\nNettsteder: www.holytones.no og www.holytones.org"}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className={sectionHeading}>Kundeopplysninger</h2>
            <Fields labels={["Navn:", "Adresse:", "Postnummer og poststed:", "E-post:", "Telefon:"]} />
          </div>

          <div className="space-y-4">
            <h2 className={sectionHeading}>Opplysninger om kjøpet</h2>
            <Fields
              labels={[
                "Bokens eller nettkursets tittel:",
                "Ordrenummer:",
                "Bestillingsdato:",
                "Dato boken ble mottatt (gjelder kun bøker):",
              ]}
            />
          </div>

          <div className="space-y-3">
            <h2 className={sectionHeading}>Melding om angrerett</h2>
            <p>
              Jeg gir med dette melding om at jeg ønsker å benytte angreretten for kjøpet angitt
              ovenfor.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className={sectionHeading}>Retur av fysiske bøker</h2>
            <p>
              Boken skal returneres uten unødig opphold og senest 14 dager etter at melding om
              angrerett er gitt.
            </p>
            <p className="whitespace-pre-line">
              {"Returadresse:\nPedersen Interaktiv (Holytones)\nKrooddveien 9b\n4624 Kristiansand"}
            </p>
            <p>
              Kunden betaler de direkte kostnadene ved returforsendelsen, forutsatt at dette er
              opplyst før kjøpet.
            </p>
            <p>
              Nettkurs skal ikke returneres fysisk. Ved gyldig bruk av angreretten avsluttes
              tilgangen til kurset.
            </p>
            <p>Tilbakebetaling skjer i henhold til angrerettloven og Holytones sine salgsbetingelser.</p>
          </div>

          <div className="space-y-4">
            <h2 className={sectionHeading}>Dato og signatur</h2>
            <Fields labels={["Dato:", "Kundens signatur (kun dersom skjemaet sendes på papir):"]} />
          </div>
        </div>

        <p className="mt-8 border-t border-border-soft pt-6 text-sm">
          <Link href="/salgsbetingelser" className="link-underline text-accent">
            Salgsbetingelser
          </Link>
          <span className="mx-3" aria-hidden>
            ·
          </span>
          <Link href="/contact" className="link-underline text-accent">
            Tilbake til kontakt
          </Link>
        </p>
      </div>
    </section>
  );
}
