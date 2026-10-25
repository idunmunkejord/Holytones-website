# Holytones

The official website for Holytones — the creative home of Idun Munkejord: original music, books,
courses, art, and reflection.

Built with [Next.js](https://nextjs.org) (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. Pages hot-reload as you edit.

## Project structure

- `app/` — one folder per route (`music`, `books`, `courses`, `art`, `skin`, `about`, `contact`),
  plus the shared `layout.tsx` and `globals.css`.
- `components/` — shared UI: `Navbar`, `Footer`, `OceanHero`, `CategoryCard`, `TrackCard`,
  `ContactForm`, `AuthorHero`, `DevotionalSignup`, `ReadMore`, `SocialLinks`, `SectionLabel`.
- `lib/site-config.ts` — all site copy, links, and content lists (tracks, books, courses, category
  cards, nav). Edit this file first for most content changes.

## Things to finish before launch

- **Real links**: swap the placeholder Spotify/Apple Music/YouTube/Instagram/TikTok URLs and the
  contact email in `lib/site-config.ts`.
- **Hero image**: the homepage hero (`components/OceanHero.tsx`) is a code-generated placeholder
  ocean gradient. Swap it for a real photo (e.g. a Next.js `<Image>` sourced from `public/`)
  whenever one is ready.
- **Author photo**: set `authorPhoto` in `lib/site-config.ts` to a portrait in `public/images`.
- **Weekly devotional (Substack)**: the homepage signup (`components/DevotionalSignup.tsx`)
  links to the Substack publication's signup page, so subscribers go straight into Substack.
  Set `links.substack` in `lib/site-config.ts` to the publication URL to switch it on; until then
  it shows "Subscriptions open soon" and no form.
- **Contact form**: `components/ContactForm.tsx` opens the visitor's email client with a
  pre-filled message (no backend required). Replace with a hosted form service if you'd rather
  receive submissions directly.
- **Art / Skin pages**: currently placeholder "coming soon" pages — replace with real content
  when ready.

## Build

```bash
npm run build
npm run start
```

## Deploy

The site is a standard Next.js app and deploys cleanly to [Vercel](https://vercel.com/new) or any
Node hosting that supports Next.js.
