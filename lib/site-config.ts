// Central place for site content and links.
// Swap the placeholder URLs and copy below with the real ones whenever you have them.

export const siteConfig = {
  name: "Holytones",
  tagline: "Words, music, and work made for the deep and the honest.",
  description:
    "Holytones is the creative home of Idun Munkejord — original music, books, courses, art, and reflection, written across English, Norwegian, and Spanish.",
  url: "https://holytones.no",
};

export const links = {
  spotify: "https://open.spotify.com/artist/REPLACE_WITH_SPOTIFY_ID",
  appleMusic: "https://music.apple.com/artist/REPLACE_WITH_APPLE_ID",
  youtube: "https://www.youtube.com/@holytones",
  instagram: "https://www.instagram.com/holytonesmusic",
  tiktok: "https://www.tiktok.com/@holytonesmusic",
  email: "post@holytones.no",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/music", label: "Music" },
  { href: "/books", label: "Books" },
  { href: "/courses", label: "Courses" },
  { href: "/art", label: "Art" },
  { href: "/skin", label: "Skin" },
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

// The five category cards shown on the homepage.
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
  {
    slug: "art",
    label: "Art",
    blurb: "Beauty with meaning.",
    tone: "peach",
  },
  {
    slug: "skin",
    label: "Skin",
    blurb: "Care for the body you live in.",
    tone: "green",
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
};

export const books: Book[] = [
  {
    title: "La mentira más vendida",
    language: "Spanish",
    note: "A book examining the most popular lie of our age, written for readers ready to trade easy comfort for honest truth. Written with an introduction addressed to the next generation of readers.",
    status: "Available",
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
