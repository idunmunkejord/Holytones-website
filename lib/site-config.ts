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
  offering: "Books, courses, and music",
};

export const links = {
  // The weekly devotional's Substack publication, e.g. "https://holytones.substack.com".
  // The homepage signup embeds Substack's own form from it. Leave empty until it exists.
  substack: "https://idunmunkejord.substack.com",
  spotify: "https://open.spotify.com/artist/7Ku7VA1XgZC0OPHhH0Zg1b?si=BYeHiVFhTm-gZRD8jIGffg",
  appleMusic: "https://music.apple.com/artist/REPLACE_WITH_APPLE_ID",
  youtube: "https://www.youtube.com/@holytones",
  email: "post@holytones.no",
  // Public site key for the Cloudflare Turnstile spam check on the contact form.
  // Leave empty to show the form without it.
  turnstileSiteKey: "",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/music", label: "Music" },
  { href: "/books", label: "Books" },
  { href: "/courses", label: "Courses" },
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
    slug: "music",
    label: "Music",
    blurb: "Songs with stories, truth and hope.",
    tone: "teal",
  },
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
];

export type Track = {
  title: string;
  language: string;
  note: string;
  year: string;
  featured?: boolean;
};

export const tracks: Track[] = [
  {
    title: "Through the Valley",
    language: "English",
    note: "A song for the seasons that ask more of you than you think you have.",
    year: "2026",
    featured: true,
  },
  {
    title: "Is It Possible to Forget",
    language: "English",
    note: "On memory, mercy, and the things that stay with us longer than we'd like.",
    year: "2025",
  },
  {
    title: "Love That Never Leaves",
    language: "English",
    note: "A worship song written to sit quietly in the middle of the room.",
    year: "2025",
  },
  {
    title: "Ein Tidlaus Draum",
    language: "Norwegian (Nynorsk)",
    note: "A timeless dream, carried in the rhythm of the language it was written for.",
    year: "2024",
  },
  {
    title: "Du er her og du meg ser",
    language: "Norwegian",
    note: "You are here, and you see me — a Norwegian worship song of being known.",
    year: "2024",
  },
];

export type Book = {
  title: string;
  language: string;
  note: string;
  status: string;
  cover?: string;
  coverBack?: string;
};

export const books: Book[] = [
  {
    title: "The Most Dangerous Lie Ever Sold",
    language: "English",
    note: "A bold Christian response to modern wellness culture — unmasking the half-truths behind manifestation, positive psychology, and the \"you are enough\" gospel of self, and pointing readers back to the only truth that can truly set them free.",
    status: "Coming soon",
    cover: "/images/the-most-dangerous-lie-front.png",
    coverBack: "/images/the-most-dangerous-lie-back.png",
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
