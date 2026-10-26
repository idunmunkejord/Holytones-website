// Central place for site content and links.
// Swap the placeholder URLs and copy below with the real ones whenever you have them.

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
// own page; the others open to show their parts (an optional subheading plus text, which links
// when it has `href`). One with no parts yet says the details are coming soon.
export type CustomerServicePart = { heading?: string; text: string; href?: string };

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
        text: "Du har 14 dagers angrerett fra dagen etter at du mottar boken.\nØnsker du å returnere en bok, kontakt oss på post@holytones.no innen fristen.\nBoken må sendes tilbake innen 14 dager etter at du har meldt fra. Du betaler selv returportoen.\nKjøpesummen og ordinær frakt refunderes i henhold til angrerettloven.",
      },
      {
        heading: "Returadresse",
        text: "Pedersen Interaktiv (Holytones)\nKrooddveien 9b\n4624 Kristiansand",
      },
      {
        heading: "Reklamasjon",
        text: "Dersom boken er skadet, feiltrykt eller du har mottatt feil vare, kontakt oss på post@holytones.no.\nVi hjelper deg i samsvar med forbrukerkjøpsloven.",
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
];

export const links = {
  // The weekly devotional's Substack publication, e.g. "https://holytones.substack.com".
  // The homepage signup embeds Substack's own form from it. Leave empty until it exists.
  substack: "https://idunmunkejord.substack.com",
  spotify: "https://open.spotify.com/artist/7Ku7VA1XgZC0OPHhH0Zg1b?si=BYeHiVFhTm-gZRD8jIGffg",
  appleMusic: "https://music.apple.com/artist/holytones/6773490843",
  youtube: "https://www.youtube.com/@holytones",
  linkedin: "https://www.linkedin.com/in/idun-munkejord-522b5315/",
  email: "post@holytones.no",
  // Public site key for the Cloudflare Turnstile spam check on the contact form.
  // Leave empty to show the form without it.
  turnstileSiteKey: "",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/books", label: "Books" },
  { href: "/courses", label: "Courses" },
  { href: "/music", label: "Music" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export type CategoryTone = "teal" | "blush" | "violet" | "peach" | "green";

export type Category = {
  slug: string;
  label: string;
  blurb: string;
  tone: CategoryTone;
};

// The category cards shown on the homepage.
export const categories: Category[] = [
  {
    slug: "books",
    label: "Books",
    blurb: "Words that challenge, awaken and restore.",
    tone: "blush",
  },
  {
    slug: "courses",
    label: "Courses",
    blurb: "Learning that helps you grow and live with purpose.",
    tone: "violet",
  },
  {
    slug: "music",
    label: "Music",
    blurb: "Songs with stories, truth and hope.",
    tone: "teal",
  },
];

export type Book = {
  title: string;
  subtitle?: string;
  language: string;
  // One string per paragraph.
  note: string[];
  status: string;
  cover?: string;
  coverBack?: string;
  // Simplero checkout page the ORDER button opens.
  orderUrl?: string;
};

export const books: Book[] = [
  {
    title: "Løgnen",
    subtitle: "Når selvutvikling tar Guds plass",
    language: "Lansering",
    note: [
      "Mange mennesker bærer på en lengsel om at livet kan forandres og få mening hvis de bare tenker riktig og retter oppmerksomheten mot det de ønsker. Budskapet om at tankene dine former virkeligheten, universet svarer på energien du sender ut, og at kraften allerede finnes i deg selv, høres forlokkende ut. Disse tankene har gjennom årene sneket seg inn i måten vi tenker på, og gradvis også inn i måten mange kristne forstår tro, bønn og Guds velsignelse.",
      "LØGNEN er et kristent svar på denne forlokkende fortellingen som nesten umerket har sneket seg inn i vår kristne tro. For de farligste løgnene er ikke nødvendigvis de som er fullstendig usanne, men de som inneholder akkurat nok sannhet til at du ikke oppdager hva som har blitt endret på.",
    ],
    status: "24 November",
    cover: "/images/loegnen-book.webp",
    orderUrl: "https://www.youmatter.academy/cart/263881-Loegnen",
  },
];

export type Course = {
  title: string;
  language: string;
  modules: string;
  note: string;
};

export const courses: Course[] = [
  {
    title: "Conocer su corazón",
    language: "Spanish",
    modules: "10 modules",
    note: "A guided course for knowing your own heart honestly before God — identity, wounds, and truth.",
  },
  {
    title: "La Verdad que Libera",
    language: "Spanish",
    modules: "Full course",
    note: "A course built around the truths that set us free from the stories we've believed about ourselves.",
  },
  {
    title: "¿Eres suficiente? Desmontando el evangelio del yo",
    language: "Spanish",
    modules: "10 modules",
    note: "A biblical critique of self-help culture, New Age spirituality, and positive psychology — and what's offered in their place.",
  },
];
