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
- `components/` — shared UI: `Navbar`, `Footer`, `OceanHero`, `CategoryCard`, `ReleaseCards`,
  `ContactForm`, `AuthorHero`, `DevotionalSignup`, `ReadMore`, `SocialLinks`, `SectionLabel`.
- `lib/site-config.ts` — all site copy, links, and content lists (books, courses, category
  cards, nav). Edit this file first for most content changes.
- `lib/music-catalogue.json` — the albums, singles and songs on the Music page, newest first,
  with their Spotify links. Add new releases here by hand; then `npm run sync:apple-music` fills in
  the matching Apple Music links.

## Things to finish before launch

- **Real links**: swap the placeholder Spotify/Apple Music/YouTube/Instagram/TikTok URLs and the
  contact email in `lib/site-config.ts`.
- **Hero image**: the homepage hero (`components/OceanHero.tsx`) is a code-generated placeholder
  ocean gradient. Swap it for a real photo (e.g. a Next.js `<Image>` sourced from `public/`)
  whenever one is ready.
- **Author photo**: set `authorPhoto` in `lib/site-config.ts` to a portrait in `public/images`.
- **Weekly devotional (Simplero)**: the homepage signup (`components/DevotionalSignup.tsx`)
  opens the Simplero popup form set in `links.simpleroDevotional` (`lib/site-config.ts`), so
  subscribers go straight into Simplero. Simplero's script is only loaded when a visitor clicks
  the button. With that setting empty the button falls back to the Substack page in
  `links.substack`, and with both empty it shows "Subscriptions open soon".
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
