# LunarCast landing

Marketing site for **LunarCast**, a calm native iOS podcast app (no ads, no discovery pressure, RSS for any show).

## Develop

Install dependencies, then start the dev server:

```bash
pnpm install
pnpm dev
```

Or with npm:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

This site needs no environment variables; see `.env.example`.

## Build

```bash
pnpm build
pnpm start
```

If you see **Cannot find module './735.js'** (or another numbered chunk) under `.next/server`, the build cache is out of date. Clean and rebuild:

```bash
pnpm clean && pnpm build
```

(`npm run clean && npm run build` works the same.)

### Dev server 500s: `/_app`, `735.js`, or missing manifest

If `next dev` returns **500** with **`Cannot read properties of undefined (reading '/_app')`**, **`Cannot find module './735.js'`**, or **ENOENT** for `.next/server/next-font-manifest.json`, the output cache is broken or was partially deleted while the dev server was running.

1. Stop **every** Node process for this project (all terminals and anything on port 3000).
2. Run: `npm run clean` (or delete the `.next` folder).
3. Start again with **`npm run dev`** — or **`npm run dev:fresh`** to clean and dev in one step.

Do not run **`next dev`** and **`next start`** at the same time on the same folder, and avoid deleting `.next` while the dev server is still running.

**`GET /mockServiceWorker.js` 404** is harmless: it usually comes from a browser extension (e.g. MSW) or an old service worker looking for that file; this project does not ship it.

## Deploy (Vercel)

1. Push this repo to GitHub (or connect your folder in the Vercel dashboard).
2. Import the project in [Vercel](https://vercel.com): framework preset **Next.js**, root directory the repo root.
3. After the first deploy, set **Settings → Domains** to your production host.
4. In `app/layout.tsx`, update `metadataBase` and `alternates.canonical` to match your real URL (currently `https://lunarcast.app` as a placeholder).

Keep `appStoreUrl` and `APP_STORE_LIVE` in `app/page.tsx` aligned with your App Store listing.

## Stack

- Next.js (App Router), TypeScript, Tailwind CSS
