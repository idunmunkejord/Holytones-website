// Central place for site content and links.
// Swap the placeholder URLs and copy below with the real ones whenever you have them.
// Text shown to visitors is given in English (en) and Norwegian (no); see lib/i18n.ts.

import type { Localized } from "@/lib/i18n";

export const siteConfig = {
  name: "Holytones",
  tagline: "Words, music, and work made for the deep and the honest.",
  description:
    "Holytones is the creative home of Idun Munkejord — original music, books, courses, art, and reflection, written across English, Norwegian, and Spanish.",
  url: "https://holytones.no",
  // Author portrait. Drop the photo into /public/images
  // and set its path here (e.g. "/images/idun-munkejord.jpg"). Shown on the About page. A portrait
  // (roughly 4:5) works best. Leave empty to show a soft placeholder.
  authorPhoto: "/images/idun-munkejord.webp",
};

// The registered business behind Holytones, shown in the footer (Brønnøysundregistrene).
export const company = {
  name: "Pedersen Interaktiv",
  form: "sole proprietorship",
  orgNumber: "927 929 783",
  offering: "Bøker, kurs og musikk",
};

// Customer service sections at the bottom of the Contact page. An item with `href` links to its
// own page; the others open to show their parts (an optional heading and subheading plus text,
// which links when it has `href`). One with no parts yet says the details are coming soon.
export type CustomerServicePart = {
  heading?: string;
  subheading?: string;
  text: string;
  href?: string;
};

export const customerService: { title: string; href?: string; parts: CustomerServicePart[] }[] = [
  { title: "Salgsbetingelser", href: "/salgsbetingelser", parts: [] },
  { title: "Personvernerklæring", href: "/personvern", parts: [] },
  {
    title: "Frakt og retur",
    parts: [
      {
        heading: "Priser og betaling",
        text: "Alle priser oppgis i norske kroner. Fraktkostnader vises før betaling. Du kan betale med betalingsmåtene som tilbys i nettbutikken.",
      },
      {
        heading: "Frakt og levering",
        text: "Vi sender bøker til hele Norge.\nForventet leveringstid er 3–10 dager. Frakt beregnes ved bestilling.",
      },
      {
        heading: "Retur og angrerett",
        text: "Du har 14 dagers angrerett fra dagen etter at du mottar boken.\nØnsker du å returnere en bok, kontakt oss på post@holytones.no innen fristen.\nBoken må sendes tilbake innen 14 dager etter at du har meldt fra. Du betaler selv returportoen. Kjøpesummen og ordinær frakt refunderes i henhold til angrerettloven.",
      },
      {
        heading: "Returadresse",
        text: "Pedersen Interaktiv (Holytones)\nKrooddveien 9b\n4624 Kristiansand",
      },
      {
        heading: "Reklamasjon",
        subheading: "Bok",
        text: "Dersom boken er skadet, feiltrykt eller du har mottatt feil vare, kontakt oss på post@holytones.no.\nVi hjelper deg i samsvar med forbrukerkjøpsloven.",
      },
      {
        subheading: "Nettkurs",
        text: "Nettkurs leveres digitalt uten frakt. Du får informasjon om tilgang på e-post.\nDu har som hovedregel 14 dagers angrerett fra dagen etter kjøpet. Eventuelle unntak krever at lovens vilkår er oppfylt. Se salgsbetingelsene for detaljer.\nVed spørsmål om tilgang, angrerett eller feil ved kurset, kontakt post@holytones.no.",
      },
      {
        heading: "Kontakt",
        text: "Holytones – Pedersen Interaktiv\nE-post: post@holytones.no\nTelefon: 971 91 960",
      },
      {
        text: "For fullstendige kjøpsvilkår, se våre salgsbetingelser.",
        href: "/salgsbetingelser",
      },
    ],
  },
  { title: "Angre kjøp", href: "/angre-kjop", parts: [] },
];

export const links = {
  // The Simplero popup form for the devotional emails. The homepage signup button opens it on the
  // page (see components/SimpleroPopupButton.tsx). Leave empty to fall back to the Substack link.
  simpleroDevotional: "https://www.youmatter.academy/page/720616",
  // The Weekly devotional section on Substack, where the devotionals were sent before Simplero.
  // Only used by the homepage signup button when `simpleroDevotional` is empty.
  substack: "https://holytones.substack.com/s/weekly-devotional",
  // The Holytones devotional email program (devotional/). When set, the homepage shows its own
  // signup form instead of the Substack button. Set to "https://andakt.holytones.no" once the
  // program is live in Cloudflare.
  devotionalSignup: "",
  spotify: "https://open.spotify.com/artist/7Ku7VA1XgZC0OPHhH0Zg1b?si=BYeHiVFhTm-gZRD8jIGffg",
  appleMusic: "https://music.apple.com/artist/holytones/6773490843",
  // Not shown anywhere for now: add it back to components/SocialLinks.tsx once the channel is ready.
  youtube: "https://www.youtube.com/@holytones",
  linkedin: "https://www.linkedin.com/in/idun-munkejord-522b5315/",
  email: "post@holytones.no",
  // Public site key for the Cloudflare Turnstile spam check on the contact form.
  // Leave empty to show the form without it.
  turnstileSiteKey: "",
};

// Landing pages that stand on their own: the site menu and footer are hidden on them so visitors
// stay on the page.
export const standalonePaths = ["/lognen-manifestering", "/takk-for-bestillingen"];

export const navLinks: { href: string; label: Localized }[] = [
  { href: "/", label: { en: "Home", no: "Hjem" } },
  { href: "/books", label: { en: "Book", no: "Bok" } },
  { href: "/courses", label: { en: "Courses", no: "Kurs" } },
  { href: "/music", label: { en: "Music", no: "Musikk" } },
  { href: "/about", label: { en: "About", no: "Om meg" } },
  { href: "/contact", label: { en: "Contact", no: "Kontakt" } },
];

export type CategoryTone = "teal" | "blush" | "violet" | "peach" | "green";

export type Category = {
  slug: string;
  label: Localized;
  blurb: Localized;
  tone: CategoryTone;
};

// The category cards shown on the homepage.
export const categories: Category[] = [
  {
    slug: "books",
    label: { en: "Books", no: "Bøker" },
    blurb: {
      en: "Words that challenge, awaken and restore.",
      no: "Ord som utfordrer, vekker og gjenoppretter.",
    },
    tone: "blush",
  },
  {
    slug: "courses",
    label: { en: "Courses", no: "Kurs" },
    blurb: {
      en: "Learning that helps you grow and live with purpose.",
      no: "Læring som hjelper deg å vokse og leve med hensikt.",
    },
    tone: "violet",
  },
  {
    slug: "music",
    label: { en: "Music", no: "Musikk" },
    blurb: {
      en: "Songs with stories, truth and hope.",
      no: "Sanger med historier, sannhet og håp.",
    },
    tone: "teal",
  },
];

export type Book = {
  title: string;
  subtitle?: string;
  language: Localized;
  // One string per paragraph. The Norwegian text is from the back cover.
  note: Localized<string[]>;
  status: Localized;
  cover?: string;
  coverBack?: string;
  // Simplero checkout page the ORDER button opens.
  orderUrl?: string;
  // Delivery options and prices in NOK, as listed on the checkout page.
  prices?: { label: string; note: string; nok: number }[];
};

export const books: Book[] = [
  {
    title: "Løgnen",
    subtitle: "Når selvutvikling tar Guds plass",
    language: { en: "In Norwegian · Launch", no: "Lansering" },
    // The "Finn ut hva som er sant" section of the LØGNEN landing page; the English is a translation.
    note: {
      en: [
        "In LØGNEN you discover how the message about the power of thought has blended into Christian faith. You learn to tell the difference between what is true and what only resembles the truth. And you learn that you do not find what you long for by turning your gaze inward toward yourself, but by turning it toward Him who fills everything in every way.",
      ],
      no: [
        "I LØGNEN oppdager du hvordan budskapet om tankens kraft har blandet seg inn med kristen tro. Du lærer å skille mellom det som er sant og det som bare ligner sannheten. Og du lærer at du ikke finner det du lengter etter ved å vende blikket innover mot deg selv, men ved å vende det mot Ham som fyller alt i alle.",
      ],
    },
    status: { en: "24 November", no: "24. november" },
    cover: "/images/loegnen-book.webp",
    orderUrl: "https://www.youmatter.academy/cart/263881-Loegnen",
    prices: [
      { label: "Sendes i posten", note: "Frakt er inkludert", nok: 464 },
      { label: "Hent boka selv", note: "Etter avtale i Kristiansand", nok: 369 },
    ],
  },
];

export type Course = {
  title: Localized;
  // Short facts shown under the title, e.g. language or length. Leave empty to hide the line.
  details?: Localized;
  note: Localized;
};

export const courses: Course[] = [
  {
    title: { en: "Individual Session", no: "Individuell samtale" },
    note: { en: "More information coming soon.", no: "Mer informasjon kommer snart." },
  },
  {
    title: { en: "Group Session", no: "Gruppesamtale" },
    note: { en: "More information coming soon.", no: "Mer informasjon kommer snart." },
  },
];
