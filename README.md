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

## Deploy (Vercel)

1. Push this repo to GitHub (or connect your folder in the Vercel dashboard).
2. Import the project in [Vercel](https://vercel.com): framework preset **Next.js**, root directory the repo root.
3. No environment variables are required for this static marketing content.
4. After the first deploy, set **Settings → Domains** to your production host.
5. In `app/layout.tsx`, update `metadataBase` and `alternates.canonical` to match your real URL (currently `https://lunarcast.app` as a placeholder).

Replace the App Store URL in `app/page.tsx` (`appStoreUrl`) with your live listing when it exists.

## Stack

- Next.js (App Router), TypeScript, Tailwind CSS
