# LunarCast landing

Public marketing site for [LunarCast](https://lunarcast.app), a native iOS podcast app. This repository is the web presence; the app itself is a separate codebase shipped through the App Store.

**Live site:** [lunarcast.app](https://lunarcast.app)  
**App Store:** [LunarCast on the App Store](https://apps.apple.com/app/lunarcast/id6761336207)  
**iOS source:** [dmoniker/moonlex](https://github.com/dmoniker/moonlex) (MIT, open source)

## What LunarCast is

LunarCast is a calm podcast player built for long-form interviews and tech signal—not an infinite discovery feed. Out of the box it offers a curated lens on shows like Moonshots, Lex Fridman, Elon Musk interview pods, and Innermost Loop, while still letting you add any podcast by RSS.

Core ideas in the product:

- **No ads** in the player or between episodes
- **No algorithmic suggestions** slipped into your queue
- **News separate from playback** — read headlines in a dedicated feed, listen when you have time
- **Your library, your rules** — RSS import, predictable autoplay, playback speed and skip controls

## What this site is

A lightweight Next.js site that explains the app, shows real iPhone screenshots, and gives people a place to download, get support, or read the privacy stance. It does not run the app, sync subscriptions, or talk to a backend. Everything here is static content plus outbound links.

| Route | Purpose |
|-------|---------|
| `/` | Hero, feature sections, comparison table, App Store CTAs |
| `/support` | Contact for bugs, ideas, and feedback (`lunarcastapp@gmail.com`) |
| `/privacy` | Privacy and no-ad promise (also linked from the home page footer) |

Assets under `public/` include the app icon, favicons, and screenshots exported from the real iOS build (`public/screenshots/`).

## How this site connects to the app

The landing page and the iOS app are **independent deployments** that share branding and URLs, not a monorepo or shared API.

```
┌─────────────────────┐         App Store link          ┌──────────────────────┐
│  lunarcast.app      │  ─────────────────────────────► │  LunarCast (iOS)     │
│  (this repo)        │                                 │  native podcast app  │
│                     │  ◄── screenshots, copy, icon ── │                      │
│  /support, /privacy │                                 │  playback, RSS, feeds│
└─────────────────────┘                                 └──────────────────────┘
```

**Touchpoints between them:**

1. **Download** — Home page CTAs point to `appStoreUrl` in `app/page.tsx`. Set `APP_STORE_LIVE` to `false` before the listing is public to show a disabled button with a waitlist tooltip instead.
2. **Canonical domain** — `metadataBase` in `app/layout.tsx` is `https://lunarcast.app` for Open Graph, Twitter cards, and SEO. App Store and social links should use the same host.
3. **Support** — The app’s human contact path is the support page and `lunarcastapp@gmail.com`, not an in-site form or API.
4. **Privacy** — The web privacy page states the same no-ads, minimal-collection intent described in the product; useful for App Store review and for users who land on the site first.
5. **Visuals** — Screenshot PNGs are manual exports from the app. When the UI changes, replace files in `public/screenshots/` and update alt text in `app/page.tsx` if needed.

There is no environment variable wiring to the app. Updating marketing copy or screenshots here does not require an app release, and vice versa.

## Project layout

```
app/
  layout.tsx      # Site metadata, fonts, theme
  page.tsx        # Home / marketing page
  support/        # Support page
  privacy/        # Privacy page
  globals.css     # Tailwind + theme tokens
public/
  lunarcast-icon.png
  favicon/
  screenshots/    # iPhone (and iPad) exports from the app
```

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

No environment variables are required; see `.env.example`.

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
3. After the first deploy, set **Settings → Domains** to `lunarcast.app` (or your production host).
4. Keep `metadataBase` in `app/layout.tsx` aligned with that domain.
5. Keep `appStoreUrl` and `APP_STORE_LIVE` in `app/page.tsx` aligned with the live App Store listing.

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
