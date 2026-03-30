import Image from "next/image";
import Link from "next/link";

const appStoreUrl = "https://apps.apple.com/app/lunarcast/id0000000000";

const SCREENSHOTS = [
  {
    src: "/screenshots/home-feed.PNG",
    alt: "LunarCast home feed with show artwork and episode list",
  },
  {
    src: "/screenshots/elon-feed.PNG",
    alt: "LunarCast feed focused on Elon Musk interviews and related shows",
  },
  {
    src: "/screenshots/innermost-feed.PNG",
    alt: "LunarCast Innermost Loop feed",
  },
  {
    src: "/screenshots/newsletters.PNG",
    alt: "LunarCast newsletters and reading list",
  },
  {
    src: "/screenshots/player.PNG",
    alt: "LunarCast full-screen episode player",
  },
  {
    src: "/screenshots/player2.PNG",
    alt: "LunarCast player with episode details",
  },
] as const;

const SETTINGS_SCREENSHOTS = [
  {
    src: "/screenshots/settings1.PNG",
    alt: "LunarCast general settings on iPhone",
    caption: "General options and app preferences.",
  },
  {
    src: "/screenshots/settings2.PNG",
    alt: "LunarCast playback speed and skip interval settings",
    caption: "Playback speed and skip intervals.",
  },
] as const;

/** iPhone screenshot asset size from export (1290×2796). */
const SHOT_W = 1290;
const SHOT_H = 2796;

function WaitlistForm() {
  const convertKitAction =
    process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ACTION?.trim() || null;
  const googleEmbedUrl =
    process.env.NEXT_PUBLIC_WAITLIST_FORM_EMBED_URL?.trim() || null;

  const fieldClass =
    "w-full max-w-md rounded-xl border border-[hsl(var(--foreground))]/20 bg-[hsl(var(--surface))] px-4 py-3 text-[hsl(var(--foreground))] shadow-sm outline-none transition-[box-shadow,border-color] focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent";

  if (convertKitAction) {
    return (
      <form
        method="post"
        action={convertKitAction}
        className="mt-10 max-w-md space-y-5"
      >
        <div>
          <label
            htmlFor="waitlist-email"
            className="mb-2 block text-sm font-medium text-[hsl(var(--foreground))]/90"
          >
            Email
          </label>
          <input
            id="waitlist-email"
            type="email"
            name="email_address"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={fieldClass}
          />
        </div>
        <p className="text-xs text-[hsl(var(--foreground))]/55">
          By joining, you agree to hear from us about the beta, TestFlight, and
          App Store launch. Unsubscribe anytime from ConvertKit emails.
        </p>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 sm:w-auto"
        >
          Join the iOS list
        </button>
      </form>
    );
  }

  if (googleEmbedUrl) {
    return (
      <div className="mt-10 overflow-hidden rounded-2xl border border-[hsl(var(--foreground))]/12 bg-[hsl(var(--foreground))]/[0.02] shadow-[0_8px_24px_-8px_rgb(0_0_0_/0.1)]">
        <iframe
          title="LunarCast beta and launch signup"
          src={googleEmbedUrl}
          className="h-[min(75vh,760px)] w-full border-0"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className="mt-10 rounded-2xl border border-dashed border-[hsl(var(--foreground))]/25 bg-[hsl(var(--foreground))]/[0.03] px-6 py-8"
      role="status"
    >
      <p className="text-sm leading-6 text-[hsl(var(--foreground))]/80">
        <strong className="font-medium text-[hsl(var(--foreground))]">
          Waitlist not connected yet.
        </strong>{" "}
        Add one public env var, then redeploy:&nbsp;
        <code className="rounded bg-[hsl(var(--foreground))]/10 px-1.5 py-0.5 text-[0.85rem]">
          NEXT_PUBLIC_CONVERTKIT_FORM_ACTION
        </code>{" "}
        (ConvertKit form POST URL) or{" "}
        <code className="rounded bg-[hsl(var(--foreground))]/10 px-1.5 py-0.5 text-[0.85rem]">
          NEXT_PUBLIC_WAITLIST_FORM_EMBED_URL
        </code>{" "}
        (Google Forms embed URL with{" "}
        <code className="rounded bg-[hsl(var(--foreground))]/10 px-1 py-0.5 text-[0.8rem]">
          embedded=true
        </code>
        ). See README.
      </p>
    </div>
  );
}

function SectionHeading({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="scroll-mt-24 text-xl font-semibold tracking-tight text-[hsl(var(--foreground))] sm:text-2xl"
    >
      {children}
    </h2>
  );
}

export default function HomePage() {
  return (
    <>
      <a href="#main" className="skip-link sr-only">
        Skip to main content
      </a>
      <div className="relative min-h-dvh">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-gradient-to-b from-[hsl(215_25%_94%/0.45)] to-transparent dark:from-[hsl(215_22%_18%/0.35)]"
          aria-hidden
        />

        <header className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-8">
          <span className="flex items-center gap-3">
            <Image
              src="/lunarcast-icon.png"
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 shrink-0 rounded-[22%] shadow-sm ring-1 ring-[hsl(var(--foreground))]/10"
              priority
            />
            <span className="text-sm font-semibold tracking-wide text-[hsl(var(--foreground))]">
              LunarCast
            </span>
          </span>
          <nav aria-label="Site">
            <Link
              href="/privacy"
              className="text-sm text-[hsl(var(--foreground))]/70 underline-offset-4 transition-colors hover:text-[hsl(var(--foreground))] hover:underline"
            >
              Privacy
            </Link>
          </nav>
        </header>

        <main id="main" className="relative mx-auto max-w-6xl px-6 pb-24 pt-4 sm:pt-8">
          <section
            className="border-b border-[hsl(var(--foreground))]/10 pb-16 sm:pb-20"
            aria-labelledby="hero-heading"
          >
            <div className="lg:grid lg:grid-cols-[1fr_minmax(0,17.5rem)] lg:items-start lg:gap-12 xl:grid-cols-[1fr_minmax(0,19rem)] xl:gap-16">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[hsl(var(--foreground))]/55">
                  Native iOS · podcasts
                </p>
                <h1
                  id="hero-heading"
                  className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-[hsl(var(--foreground))] sm:text-4xl sm:leading-tight"
                >
                  Listen deep. Stay informed. Nothing extra.
                </h1>
                <p className="mt-5 max-w-xl text-[1.05rem] leading-7 text-[hsl(var(--foreground))]/80">
                  LunarCast is for long interviews and the tech stories behind
                  them. Out of the box you get a curated lens—think{" "}
                  <span className="text-[hsl(var(--foreground))]/95">
                    Moonshots
                  </span>
                  ,{" "}
                  <span className="text-[hsl(var(--foreground))]/95">
                    Lex Fridman
                  </span>
                  , conversations with Elon when they ship as podcasts, and{" "}
                  <span className="text-[hsl(var(--foreground))]/95">
                    Innermost Loop
                  </span>
                  —without turning your queue into an endless suggestions rail.
                </p>
                <p className="mt-4 max-w-xl text-[1.05rem] leading-7 text-[hsl(var(--foreground))]/80">
                  Prefer your own lineup? Add any show by RSS. Your library,
                  your rules.
                </p>
                <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-3">
                  <a
                    href={appStoreUrl}
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
                  >
                    Download on the App Store
                  </a>
                  <a
                    href="#waitlist"
                    className="w-fit text-sm text-[hsl(var(--foreground))]/70 underline-offset-4 hover:underline"
                  >
                    Beta &amp; App Store alert
                  </a>
                  <a
                    href="#how-its-different"
                    className="w-fit text-sm text-[hsl(var(--foreground))]/70 underline-offset-4 hover:underline"
                  >
                    How it’s different
                  </a>
                </div>
                <p className="mt-6 max-w-xl text-sm text-[hsl(var(--foreground))]/55">
                  Built for people who re-listen to long interviews and want a
                  calm player—not a billboard.
                </p>
              </div>
              <div className="relative mt-12 max-w-[17.5rem] sm:mx-auto lg:mx-0 lg:mt-2 lg:max-w-none xl:justify-self-end">
                <figure className="overflow-hidden rounded-[2rem] border border-[hsl(var(--foreground))]/12 bg-[hsl(var(--foreground))]/[0.03] shadow-[0_24px_48px_-12px_rgb(0_0_0_/0.18)] dark:shadow-[0_24px_48px_-12px_rgb(0_0_0_/0.45)]">
                  <Image
                    src={SCREENSHOTS[0].src}
                    alt={SCREENSHOTS[0].alt}
                    width={SHOT_W}
                    height={SHOT_H}
                    className="h-auto w-full"
                    sizes="(min-width: 1024px) 280px, (min-width: 640px) 320px, 100vw"
                    priority
                  />
                </figure>
              </div>
            </div>
          </section>

          <section
            className="border-b border-[hsl(var(--foreground))]/10 py-16 sm:py-20"
            aria-labelledby="screenshots-heading"
          >
            <SectionHeading id="screenshots-heading">
              In the app
            </SectionHeading>
            <p className="mt-4 max-w-xl text-[hsl(var(--foreground))]/80">
              A few real screens—no mockups, no decoration beyond the phone
              frame.
            </p>
            <ul className="mt-12 grid list-none gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
              {SCREENSHOTS.slice(1).map(({ src, alt }) => (
                <li key={src} className="mx-auto w-full max-w-[14.5rem]">
                  <figure className="overflow-hidden rounded-[1.75rem] border border-[hsl(var(--foreground))]/10 bg-[hsl(var(--foreground))]/[0.02] shadow-[0_16px_32px_-8px_rgb(0_0_0_/0.12)] dark:shadow-[0_16px_32px_-8px_rgb(0_0_0_/0.35)]">
                    <Image
                      src={src}
                      alt={alt}
                      width={SHOT_W}
                      height={SHOT_H}
                      className="h-auto w-full"
                      sizes="(min-width: 1024px) 240px, (min-width: 640px) 45vw, 232px"
                    />
                  </figure>
                </li>
              ))}
            </ul>
          </section>

          <section
            className="border-b border-[hsl(var(--foreground))]/10 py-16 sm:py-20"
            aria-labelledby="what-it-is-heading"
          >
            <SectionHeading id="what-it-is-heading">What it is</SectionHeading>
            <p className="mt-4 max-w-xl text-[hsl(var(--foreground))]/80">
              A curated lens on quality audio, not an infinite firehose. You open
              the app to listen on purpose. News and updates live in their own
              space—read the signal now, hit play when you have the time.
            </p>
          </section>

          <section
            id="how-its-different"
            className="border-b border-[hsl(var(--foreground))]/10 py-16 sm:py-20"
            aria-labelledby="what-it-isnt-heading"
          >
            <SectionHeading id="what-it-isnt-heading">
              What it isn’t
            </SectionHeading>
            <ul className="mt-6 max-w-xl list-disc space-y-3 pl-5 text-[hsl(var(--foreground))]/80 marker:text-[hsl(var(--foreground))]/40">
              <li>No ads in the player or between episodes.</li>
              <li>
                No “discover” pressure—nothing gets slipped into your queue
                because an algorithm wants growth.
              </li>
              <li>
                No spammy notifications. The app does not need to shout to feel
                useful.
              </li>
              <li>No dark patterns. Premium is restraint, not tricks.</li>
            </ul>
            <h3
              id="comparison"
              className="mt-14 text-lg font-semibold tracking-tight text-[hsl(var(--foreground))] sm:text-xl"
            >
              This app vs typical podcast apps
            </h3>
            <p className="mt-3 max-w-xl text-[hsl(var(--foreground))]/80">
              A straight comparison. No scorecard, no smug chart.
            </p>
            <div className="mt-8 overflow-x-auto rounded-lg border border-[hsl(var(--foreground))]/12">
              <table className="w-full min-w-[20rem] border-collapse text-left text-sm">
                <caption className="sr-only">
                  Differences between LunarCast and typical podcast apps
                </caption>
                <thead>
                  <tr className="border-b border-[hsl(var(--foreground))]/12 bg-[hsl(var(--foreground))]/[0.04]">
                    <th scope="col" className="px-4 py-3 font-medium">
                      Topic
                    </th>
                    <th scope="col" className="px-4 py-3 font-medium">
                      LunarCast
                    </th>
                    <th scope="col" className="px-4 py-3 font-medium">
                      Many others
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[hsl(var(--foreground))]/85">
                  <tr className="border-b border-[hsl(var(--foreground))]/10">
                    <th scope="row" className="px-4 py-3 font-normal">
                      Ads
                    </th>
                    <td className="px-4 py-3">None in the experience we ship.</td>
                    <td className="px-4 py-3">
                      Often interleaved or in the UI.
                    </td>
                  </tr>
                  <tr className="border-b border-[hsl(var(--foreground))]/10">
                    <th scope="row" className="px-4 py-3 font-normal">
                      Suggestions
                    </th>
                    <td className="px-4 py-3">
                      No feed of recommendations you did not ask for.
                    </td>
                    <td className="px-4 py-3">
                      Rows of promoted or “you might like” shows.
                    </td>
                  </tr>
                  <tr className="border-b border-[hsl(var(--foreground))]/10">
                    <th scope="row" className="px-4 py-3 font-normal">
                      Queue
                    </th>
                    <td className="px-4 py-3">Yours. Autoplay stays predictable.</td>
                    <td className="px-4 py-3">
                      Easy for extra episodes to appear without a clear ask.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="px-4 py-3 font-normal">
                      News vs play
                    </th>
                    <td className="px-4 py-3">
                      Separate surfaces: read when skimming, listen when settled.
                    </td>
                    <td className="px-4 py-3">
                      Often one busy screen trying to do everything.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section
            className="border-b border-[hsl(var(--foreground))]/10 py-16 sm:py-20"
            aria-labelledby="listening-news-heading"
          >
            <SectionHeading id="listening-news-heading">
              Listening and news, kept apart
            </SectionHeading>
            <p className="mt-4 max-w-xl text-[hsl(var(--foreground))]/80">
              Playback stays quiet and focused. When you want headlines and
              context, you read them in a dedicated newsfeed. Two modes, one
              idea: stay current without breaking the rhythm of a two-hour
              conversation.
            </p>
          </section>

          <section
            className="border-b border-[hsl(var(--foreground))]/10 py-16 sm:py-20"
            aria-labelledby="shows-controls-heading"
          >
            <SectionHeading id="shows-controls-heading">
              Your shows, under your controls
            </SectionHeading>
            <p className="mt-4 max-w-xl text-[hsl(var(--foreground))]/80">
              Add podcasts with an RSS URL. Keep the catalog you already trust.
            </p>
            <p className="mt-4 max-w-xl text-[hsl(var(--foreground))]/80">
              The player respects how you actually listen: change playback speed,
              set skip forward and back to the intervals you like, and let the
              next episode start when you are ready—without surprise insertions.
            </p>
          </section>

          <section
            className="border-b border-[hsl(var(--foreground))]/10 py-16 sm:py-20"
            aria-labelledby="customization-heading"
          >
            <SectionHeading id="customization-heading">
              Tuned the way you listen
            </SectionHeading>
            <p className="mt-4 max-w-2xl text-[hsl(var(--foreground))]/80">
              Customization is not buried behind marketing screens. Set skip
              lengths for dense interviews vs. lighter shows, pick a default
              playback speed, and control autoplay so your queue stays yours.
              Bring your own podcasts via RSS; the defaults are optional, not
              mandatory.
            </p>
            <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-8 lg:gap-12">
              {SETTINGS_SCREENSHOTS.map(({ src, alt, caption }) => (
                <figure
                  key={src}
                  className="mx-auto w-full max-w-[14.5rem] sm:max-w-none"
                >
                  <div className="overflow-hidden rounded-[1.75rem] border border-[hsl(var(--foreground))]/10 bg-[hsl(var(--foreground))]/[0.02] shadow-[0_16px_32px_-8px_rgb(0_0_0_/0.12)] dark:shadow-[0_16px_32px_-8px_rgb(0_0_0_/0.35)]">
                    <Image
                      src={src}
                      alt={alt}
                      width={SHOT_W}
                      height={SHOT_H}
                      className="h-auto w-full"
                      sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 232px"
                    />
                  </div>
                  <figcaption className="mt-4 max-w-sm text-center text-sm text-[hsl(var(--foreground))]/60 sm:text-left">
                    {caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section
            id="waitlist"
            className="border-b border-[hsl(var(--foreground))]/10 py-16 sm:py-20"
            aria-labelledby="waitlist-heading"
          >
            <SectionHeading id="waitlist-heading">
              Beta access &amp; App Store launch (iOS)
            </SectionHeading>
            <p className="mt-4 max-w-2xl text-[hsl(var(--foreground))]/80">
              LunarCast is for{" "}
              <span className="text-[hsl(var(--foreground))]/95">
                iPhone and iPad only
              </span>
              . Leave your email to get a beta link when invites open, and a
              single heads-up when the app is live on the App Store—no drip
              campaign, no unrelated promos.
            </p>
            <WaitlistForm />
            <p className="mt-6 max-w-2xl text-xs leading-relaxed text-[hsl(var(--foreground))]/50">
              Your address is only used for LunarCast beta and launch mail. See
              the{" "}
              <Link
                href="/privacy"
                className="text-accent underline-offset-4 hover:underline"
              >
                privacy page
              </Link>{" "}
              as policies are finalized.
            </p>
          </section>

          <section className="py-16 sm:py-20" aria-labelledby="privacy-heading">
            <SectionHeading id="privacy-heading">
              Privacy and no-ad promise
            </SectionHeading>
            <p className="mt-4 max-w-xl text-[hsl(var(--foreground))]/80">
              LunarCast is shaped around a simple deal: your attention is not
              for sale to advertisers on this product. Detailed policy language
              will live on the{" "}
              <Link
                href="/privacy"
                className="text-accent underline-offset-4 hover:underline"
              >
                privacy page
              </Link>{" "}
              as you finalize legal copy for the store.
            </p>
            <p className="mt-8">
              <a
                href={appStoreUrl}
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[hsl(var(--foreground))]/20 px-6 py-3 text-sm font-medium text-[hsl(var(--foreground))] transition-colors hover:border-[hsl(var(--foreground))]/35 hover:bg-[hsl(var(--foreground))]/[0.04]"
              >
                Get LunarCast on the App Store
              </a>
            </p>
          </section>
        </main>

        <footer className="relative mx-auto max-w-6xl border-t border-[hsl(var(--foreground))]/10 px-6 py-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[hsl(var(--foreground))]/55">
              © {new Date().getFullYear()} LunarCast
            </p>
            <Link
              href="/privacy"
              className="text-sm text-[hsl(var(--foreground))]/70 underline-offset-4 hover:underline"
            >
              Privacy
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
