import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How LunarCast treats your data: built in good faith, no ads, minimal collection, optimistic intent.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <p className="mb-8">
        <Link
          href="/"
          className="text-accent underline-offset-4 hover:underline"
        >
          ← Back to LunarCast
        </Link>
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-[hsl(var(--foreground))]">
        Privacy
      </h1>
      <div className="mt-6 space-y-5 text-[hsl(var(--foreground))]/85">
        <p>
          We built LunarCast for ourselves: a calm place to hear stories and
          ideas about where humanity is headed, without the usual noise. Our
          aim is simple—to help this kind of optimistic, forward-looking
          perspective travel further, because we think it deserves a wider
          audience than doom-scrolling usually allows.
        </p>
        <p>
          That intent carries over to how we treat you here. LunarCast does not
          run ads in the product, and we do not sell or rent your listening
          history to marketers. Notifications stay quiet unless you opt into
          them; we are not interested in tricking you into engagement.
        </p>
        <p>
          If we email you about LunarCast—for example, when you write in for
          support or opt into updates—we use your address only for that
          conversation and related LunarCast messages, not unrelated campaigns.
          You can
          unsubscribe from marketing or newsletter mailings when those channels
          allow it. Anything the app needs to function in the future (for
          example, account or playback data) will be collected only for that
          purpose, not to profile you for ads.
        </p>
        <p>
          If you have questions about privacy or this approach, reply to any
          email you get from us about LunarCast—we read those and respond when
          we can.
        </p>
      </div>
    </main>
  );
}
