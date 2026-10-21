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
  `ContactForm`, `AuthorHero`, `GuideSignup`, `SocialLinks`, `SectionLabel`.
- `lib/site-config.ts` — all site copy, links, and content lists (tracks, books, courses, category
  cards, nav). Edit this file first for most content changes.

## Things to finish before launch

- **Real links**: swap the placeholder Spotify/Apple Music/YouTube/Instagram/TikTok URLs and the
  contact email in `lib/site-config.ts`.
- **Hero image**: the homepage hero (`components/OceanHero.tsx`) is a code-generated placeholder
  ocean gradient. Swap it for a real photo (e.g. a Next.js `<Image>` sourced from `public/`)
  whenever one is ready.
- **Author photo**: set `authorPhoto` in `lib/site-config.ts` to a portrait in `public/images`.
- **Email signup (MailerLite)**: the homepage form (`components/GuideSignup.tsx`) posts to
  `app/api/subscribe/route.ts`, which adds subscribers to MailerLite. Until it is set up, the form
  shows an error instead of pretending to subscribe anyone. To switch it on:
  1. In MailerLite, create a group (e.g. "5 Lies guide") and note its ID.
  2. Turn on double opt-in: Account settings → Subscribe settings → "Double opt-in for API and
     integrations".
  3. Create an automation triggered by "joins group" that sends the welcome email with a link to
     the *5 Lies That Keep You Striving* PDF (upload it to MailerLite's file manager or to
     `public/`). It runs only after the subscriber confirms.
  4. Add `MAILERLITE_API_KEY` (Integrations → API) and `MAILERLITE_GROUP_ID` as secrets in
     Cloudflare. The form uses the same optional Turnstile spam check as the contact form.
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
