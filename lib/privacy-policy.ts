// Content of the Personvernerklæring page (/personvern), kept word for word from Idun's
// document. Strings are paragraphs; { heading } and { list } are subheadings and bullet lists.

import type { Policy } from "@/components/PolicyPage";

export const privacyPolicy: Policy = {
  title: "Personvernerklæring",
  subtitle: "HOLYTONES | www.holytones.no",
  updated: "Sist oppdatert: 23. oktober 2026",
  sections: [
    {
      title: "1. Innledning",
      paragraphs: [
        "Hos Holytones er personvernet ditt viktig. Du skal kunne besøke nettstedet, handle produkter og melde deg på vår e-postliste med trygghet om at personopplysningene dine behandles på en ansvarlig og sikker måte.",
        "Denne personvernerklæringen forklarer hvilke personopplysninger som samles inn gjennom www.holytones.no, hvorfor opplysningene behandles, hvordan de beskyttes, og hvilke rettigheter du har.",
        "Erklæringen gjelder bruk av Holytones sitt nettsted, nettbutikk, kontaktskjema, e-postliste og øvrige digitale tjenester.",
        "Behandlingen av personopplysninger skjer i samsvar med personopplysningsloven og EUs personvernforordning (GDPR).",
        "Erklæringen kan oppdateres ved endringer i lovverket, nettstedets funksjoner eller tjenestene som tilbys.",
      ],
    },
    {
      title: "2. Behandlingsansvarlig",
      paragraphs: [
        "Pedersen Interaktiv er behandlingsansvarlig for personopplysninger som behandles gjennom Holytones sin virksomhet.",
        { heading: "Foretaksopplysninger" },
        "Nettbutikk og merkevare: Holytones\nJuridisk foretaksnavn: Pedersen Interaktiv\nOrganisasjonsnummer: 927 929 783\nForretningsadresse: Krooddveien 9b, 4624 Kristiansand\nE-post: post@holytones.no\nTelefon: 971 91 960\nNettsted: www.holytones.no",
        "Spørsmål om personvern kan rettes til post@holytones.no.",
      ],
    },
    {
      title: "3. Hvilke personopplysninger behandles?",
      paragraphs: [
        "Holytones behandler bare personopplysninger som er nødvendige og relevante for de aktuelle tjenestene. Dette kan omfatte:",
        { heading: "Kontaktopplysninger" },
        { list: ["Navn", "E-postadresse", "Telefonnummer", "Post- og leveringsadresse"] },
        { heading: "Kjøps- og betalingsopplysninger" },
        {
          list: [
            "Produkter som er bestilt",
            "Ordrenummer",
            "Kjøpsdato",
            "Beløp og betalingsstatus",
            "Leveringsinformasjon",
            "Opplysninger som er nødvendige ved retur, refusjon og reklamasjon",
          ],
        },
        { heading: "Opplysninger ved kommunikasjon" },
        {
          list: [
            "Meldinger som sendes gjennom kontaktskjema eller e-post",
            "Henvendelser til kundeservice",
            "Opplysninger du selv velger å gi",
          ],
        },
        { heading: "Opplysninger om bruk av nettstedet" },
        "Avhengig av nettstedets tekniske oppsett kan det behandles opplysninger som:",
        {
          list: [
            "IP-adresse",
            "Nettlesertype",
            "Enhetstype",
            "Besøkte sider",
            "Teknisk informasjon om bruk av nettstedet",
          ],
        },
        { heading: "Opplysninger knyttet til e-postlisten" },
        {
          list: [
            "Navn, dersom dette oppgis",
            "E-postadresse",
            "Dato og dokumentasjon for påmelding",
            "E-postpreferanser",
            "Eventuell statistikk om utsendelser, dersom dette er aktivert",
          ],
        },
        "Holytones samler ikke bevisst inn flere opplysninger enn det som er nødvendig for formålene som er beskrevet.",
      ],
    },
    {
      title: "4. Hvordan samles opplysningene inn?",
      paragraphs: [
        "Personopplysninger kan samles inn når du:",
        {
          list: [
            "Bestiller bøker eller andre produkter i nettbutikken.",
            "Melder deg på Holytones sin e-postliste.",
            "Sender en melding gjennom kontaktskjemaet.",
            "Kontakter Holytones via e-post.",
            "Melder deg på et arrangement eller kurs dersom dette tilbys.",
            "Bruker nettstedet og nødvendige tekniske funksjoner.",
          ],
        },
        "Noen opplysninger gis direkte av deg, mens andre kan registreres automatisk gjennom nettstedets tekniske systemer.",
      ],
    },
    {
      title: "5. Formålet med behandlingen",
      paragraphs: [
        "Holytones behandler personopplysninger for å kunne:",
        {
          list: [
            "Registrere og gjennomføre bestillinger.",
            "Behandle betalinger og refusjoner.",
            "Pakke og sende bøker til riktig adresse.",
            "Gi kundeservice og besvare henvendelser.",
            "Håndtere retur og reklamasjoner.",
            "Administrere påmeldinger til e-postlisten.",
            "Sende andakter, inspirasjon og informasjon til personer som ønsker dette.",
            "Oppfylle bokføringsmessige og andre lovpålagte forpliktelser.",
            "Ivareta sikkerheten og den tekniske driften av nettstedet.",
            "Analysere og forbedre nettstedet dersom nødvendige vilkår for dette er oppfylt.",
          ],
        },
        "Personopplysningene brukes ikke til uforenlige formål uten et gyldig behandlingsgrunnlag.",
      ],
    },
    {
      title: "6. Rettslig grunnlag for behandlingen",
      paragraphs: [
        "Holytones behandler personopplysninger på grunnlag av følgende bestemmelser i GDPR:",
        { heading: "Oppfyllelse av avtale – artikkel 6 nr. 1 bokstav b" },
        "Når du kjøper en bok, behandles nødvendige opplysninger for å gjennomføre bestillingen, motta betaling og levere produktet.",
        { heading: "Rettslig forpliktelse – artikkel 6 nr. 1 bokstav c" },
        "Enkelte opplysninger oppbevares for å oppfylle krav i blant annet bokførings- og regnskapslovgivningen.",
        { heading: "Samtykke – artikkel 6 nr. 1 bokstav a" },
        "Samtykke brukes når dette er nødvendig, blant annet ved frivillig påmelding til e-postlisten og ved bruk av informasjonskapsler som krever samtykke.",
        { heading: "Berettiget interesse – artikkel 6 nr. 1 bokstav f" },
        "Opplysninger kan behandles når dette er nødvendig for berettigede interesser, for eksempel å ivareta sikkerheten på nettstedet, forebygge misbruk og håndtere enkelte henvendelser.",
        "Slike interesser vurderes opp mot dine personvernrettigheter.",
        "Du kan trekke tilbake et samtykke når som helst. Dette påvirker ikke lovligheten av behandling som allerede har funnet sted.",
      ],
    },
    {
      title: "7. E-postliste og ukentlige andakter",
      paragraphs: [
        "Holytones tilbyr en frivillig e-postliste for deg som ønsker å motta inspirasjon, andakter og oppdateringer.",
        "Du kan blant annet motta:",
        {
          list: [
            "Ukentlige andakter og refleksjoner.",
            "Utdrag og inspirasjon fra kommende andaktsbøker.",
            "Informasjon om nye bøker og utgivelser.",
            "Nyheter om Holytones sine musikkprosjekter.",
            "Andre relevante oppdateringer fra Holytones innenfor det du har samtykket til.",
          ],
        },
        "Påmelding til e-postlisten er frivillig og skjer separat fra kjøp av produkter.",
        "E-postadressen brukes til utsendelser innenfor formålet med påmeldingen.",
        "Du kan når som helst melde deg av gjennom avmeldingslenken i e-postene eller ved å kontakte post@holytones.no.",
        "Dersom en ekstern leverandør, for eksempel Substack eller Simplero, benyttes til e-postutsendelser, vil nødvendige opplysninger bli behandlet gjennom den aktuelle tjenesten.",
        "Holytones vil sørge for at behandlingen skjer i samsvar med gjeldende personvernregelverk.",
      ],
    },
    {
      title: "8. Betaling og nettbutikk",
      paragraphs: [
        "Ved kjøp gjennom Holytones behandles nødvendige opplysninger for å gjennomføre betalingen og levere varen.",
        "Betaling kan tilbys gjennom Stripe, Vipps eller andre betalingsløsninger som er tilgjengelige i nettbutikken.",
        "Betalingsleverandørene behandler betalingsopplysninger i samsvar med sine respektive personvernvilkår og sitt ansvar etter personvernregelverket.",
        "Holytones lagrer ikke kundenes fullstendige betalingskortopplysninger.",
        "Opplysninger om bestillinger, betalinger, refusjoner og fakturering oppbevares så lenge det er nødvendig for å oppfylle avtalen og relevante lovkrav.",
      ],
    },
    {
      title: "9. Lagring av personopplysninger",
      paragraphs: [
        "Personopplysninger lagres ikke lenger enn det som er nødvendig for formålet de ble samlet inn for, med mindre lovgivningen krever lengre oppbevaring.",
        { heading: "Kunde- og bestillingsopplysninger" },
        "Opplysninger knyttet til kjøp oppbevares så lenge det er nødvendig for levering, kundeservice, reklamasjon og lovpålagt dokumentasjon.",
        "Regnskapsmateriale oppbevares i samsvar med bokføringsregelverket, normalt i fem år etter regnskapsårets slutt for materiale som omfattes av hovedregelen.",
        { heading: "E-postliste" },
        "Kontaktopplysninger til e-postlisten oppbevares så lenge påmeldingen er aktiv og opplysningene er nødvendige for formålet.",
        "Ved avmelding avsluttes utsendelsene. Nødvendig dokumentasjon på samtykke eller avmelding kan oppbevares så lenge det foreligger et lovlig behov.",
        { heading: "Kontakthenvendelser" },
        "Opplysninger fra kontaktskjema eller e-post oppbevares så lenge det er nødvendig for å behandle henvendelsen og eventuelt følge den opp.",
        "Når opplysninger ikke lenger er nødvendige, slettes eller anonymiseres de, med mindre lovpålagte plikter eller andre gyldige behandlingsgrunnlag tilsier fortsatt oppbevaring.",
      ],
    },
    {
      title: "10. Deling av personopplysninger",
      paragraphs: [
        "Holytones selger ikke personopplysninger til tredjeparter.",
        "Personopplysninger kan deles med tjenesteleverandører når dette er nødvendig for å drive nettstedet og levere tjenestene.",
        "Dette kan omfatte:",
        {
          list: [
            "Betalingsleverandører, som Stripe og Vipps.",
            "Frakt- og transportleverandører.",
            "Leverandører av nettsted og netthandelsløsninger.",
            "Leverandører av e-postliste og utsendelser.",
            "Regnskaps- og IT-tjenester.",
            "Analyse- og sikkerhetstjenester, dersom slike benyttes.",
          ],
        },
        "Der en leverandør behandler personopplysninger på vegne av Holytones, skal behandlingen reguleres gjennom nødvendige databehandleravtaler.",
        "Opplysninger kan også utleveres til offentlige myndigheter når dette følger av lov.",
      ],
    },
    {
      title: "11. Overføring av personopplysninger til utlandet",
      paragraphs: [
        "Enkelte digitale tjenesteleverandører kan behandle personopplysninger utenfor Norge eller EØS.",
        "Dersom personopplysninger overføres til land utenfor EØS, skal overføringen skje i samsvar med GDPR.",
        "Dette innebærer at overføringen må bygge på et gyldig overføringsgrunnlag, for eksempel en beslutning om tilstrekkelig beskyttelsesnivå eller godkjente standard personvernbestemmelser med nødvendige tilleggstiltak.",
        "Du kan kontakte Holytones for nærmere informasjon om aktuelle overføringer og beskyttelsestiltak.",
      ],
    },
    {
      title: "12. Informasjonskapsler (cookies)",
      paragraphs: [
        "Nettstedet kan bruke informasjonskapsler og lignende teknologier.",
        "Informasjonskapsler kan blant annet brukes til å:",
        {
          list: [
            "Sikre at nettstedet fungerer.",
            "Huske varer i handlekurven.",
            "Ivareta sikkerhet og tekniske innstillinger.",
            "Analysere bruk av nettstedet dersom dette er aktivert.",
            "Tilpasse innhold eller markedsføring dersom slike funksjoner er aktivert.",
          ],
        },
        "Informasjonskapsler som er strengt nødvendige for å levere en tjeneste brukeren uttrykkelig har bedt om, kan brukes uten forhåndssamtykke innenfor lovens unntak.",
        "Andre informasjonskapsler som krever samtykke, skal ikke aktiveres før gyldig samtykke er gitt.",
        "Der samtykke benyttes, skal det være mulig å avslå og senere trekke det tilbake.",
        "Nærmere informasjon om informasjonskapslene som faktisk brukes, deres formål, leverandører og lagringstid skal være tilgjengelig på nettstedet.",
      ],
    },
    {
      title: "13. Lenker til eksterne nettsteder",
      paragraphs: [
        "Holytones kan inneholde lenker til eksterne tjenester, blant annet musikkplattformer, sosiale medier, betalingsløsninger og publiseringsplattformer.",
        "Dette kan for eksempel være Spotify, Substack eller andre nettsteder.",
        "Når du følger en lenke til en ekstern tjeneste, gjelder den aktuelle tjenestens egne personvernvilkår for behandlingen den selv er ansvarlig for.",
        "Holytones anbefaler at du gjør deg kjent med personvernerklæringen til eksterne nettsteder du besøker.",
      ],
    },
    {
      title: "14. Informasjonssikkerhet",
      paragraphs: [
        "Holytones arbeider for å beskytte personopplysninger mot uautorisert tilgang, tap, misbruk, endring og utilsiktet deling.",
        "Dette innebærer å benytte relevante tekniske og organisatoriske sikkerhetstiltak tilpasset risikoen ved behandlingen.",
        "Tilgang til personopplysninger begrenses til personer og tjenesteleverandører som har et saklig behov for opplysningene.",
        "Ved eventuelle brudd på personopplysningssikkerheten vil Holytones følge gjeldende regler om vurdering, dokumentasjon og eventuell varsling til Datatilsynet og berørte personer.",
      ],
    },
    {
      title: "15. Dine rettigheter",
      paragraphs: [
        "Du har etter personvernregelverket rettigheter knyttet til behandlingen av personopplysningene dine.",
        "Avhengig av omstendighetene kan du ha rett til:",
        {
          list: [
            "Innsyn: Du kan be om informasjon om hvilke personopplysninger Holytones behandler om deg.",
            "Retting: Du kan kreve at uriktige eller ufullstendige opplysninger blir rettet.",
            "Sletting: Du kan be om sletting når vilkårene for dette er oppfylt.",
            "Begrensning: Du kan i bestemte tilfeller kreve at behandlingen begrenses.",
            "Dataportabilitet: Du kan i enkelte tilfeller få utlevert opplysningene dine i et strukturert og maskinlesbart format.",
            "Protest: Du kan protestere mot behandling som bygger på berettiget interesse, og mot behandling for direkte markedsføring.",
            "Tilbaketrekking av samtykke: Du kan når som helst trekke tilbake et samtykke.",
          ],
        },
        "Enkelte opplysninger kan ikke slettes umiddelbart dersom Holytones har lovpålagt plikt til å oppbevare dem.",
        "For å benytte rettighetene dine kan du sende en e-post til:\npost@holytones.no",
        "Henvendelser behandles innen fristene i personvernregelverket, normalt innen én måned.",
      ],
    },
    {
      title: "16. Personopplysninger om barn",
      paragraphs: [
        "Holytones sine tjenester er i hovedsak rettet mot et alminnelig publikum.",
        "Holytones ønsker ikke å samle inn personopplysninger om barn uten nødvendig rettslig grunnlag.",
        "Dersom det tilbys digitale tjenester som krever samtykke til behandling av personopplysninger fra barn, vil gjeldende regler om alder og samtykke bli fulgt.",
        "Foresatte kan kontakte Holytones dersom de mener at personopplysninger om et barn behandles uten gyldig grunnlag.",
      ],
    },
    {
      title: "17. Endringer i personvernerklæringen",
      paragraphs: [
        "Holytones kan oppdatere denne personvernerklæringen dersom det skjer endringer i lovgivningen, virksomheten eller tjenestene som tilbys.",
        "Den oppdaterte versjonen publiseres på www.holytones.no.",
        "Dersom endringer krever nytt samtykke eller særskilt informasjon etter personvernregelverket, vil dette bli håndtert i samsvar med gjeldende regler.",
      ],
    },
    {
      title: "18. Kontakt og klager",
      paragraphs: [
        "Dersom du har spørsmål om personvern, ønsker innsyn i opplysninger eller vil benytte andre rettigheter, kan du kontakte:",
        "Holytones – Pedersen Interaktiv\nOrganisasjonsnummer: 927 929 783\nKrooddveien 9b\n4624 Kristiansand\nTelefon: 971 91 960\nE-post: post@holytones.no\nNettsted: www.holytones.no",
        "Du har også rett til å klage til Datatilsynet dersom du mener at behandlingen av personopplysningene dine er i strid med personvernregelverket.",
        "Datatilsynet: www.datatilsynet.no",
      ],
    },
  ],
};
