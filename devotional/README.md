# Holytones devotional emails

A small Cloudflare Worker that runs the devotional email series, separately from the website.

- Readers sign up with the form on holytones.no (`components/DevotionalForm.tsx`), confirm by
  email, and get Day 1 straight away.
- After that, each reader gets the next devotional three times a week (2, 2, then 3 days apart),
  early in the morning, counted from their own start. Everyone starts at Day 1.
- Every email has an unsubscribe link and one-click unsubscribe headers.
- The subscriber list lives in the D1 database `holytones-devotional`. Every Monday it is emailed
  to post@holytones.no as a CSV file (opens in Excel; can be imported into Substack).
- Emails are sent through Resend from andakt@holytones.no.

## Adding a devotional

1. Add a numbered file to `content/`, e.g. `content/004.md`: first line `# Title`, then
   paragraphs separated by blank lines. A paragraph starting with `> ` becomes a quote, and
   `**bold**` / `*italic*` work.
2. Add it to the end of the list in `src/content.ts`. Never reorder or remove entries.
3. Deploy (`npm run deploy`). Readers who had reached the end get it at their next send time.

## Local testing

```
npm install
npm run db:init:local
npm run dev
```

Without `RESEND_API_KEY`, emails are only logged. `http://localhost:8787/preview/1` shows Day 1
as an email and `/preview/confirm` the confirmation email (local only). Trigger the hourly run
with `http://localhost:8787/__scheduled?cron=0+*+*+*+*` and the backup with
`http://localhost:8787/__scheduled?cron=0+6+*+*+1`.

## First-time setup in Cloudflare

1. `npx wrangler login`
2. `npx wrangler d1 create holytones-devotional`, then put the printed `database_id` in
   `wrangler.jsonc`.
3. `npm run db:init`
4. Add the Resend key as a secret named `RESEND_API_KEY` (Cloudflare dashboard → Workers →
   holytones-devotional → Settings → Variables and secrets), or `npx wrangler secret put RESEND_API_KEY`.
5. `npm run deploy` (also sets up andakt.holytones.no and the timers).
6. On the website, set `devotionalSignup: "https://andakt.holytones.no"` in `lib/site-config.ts`.
