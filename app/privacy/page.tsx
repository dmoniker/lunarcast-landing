import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Privacy overview for LunarCast: no ads, minimal data, and no dark patterns.",
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
      <p className="mt-6 text-[hsl(var(--foreground))]/85">
        This page is a stub. Replace it with your final policy before launch. The
        product direction for LunarCast is straightforward: no ads, no sale of
        listening history for marketing, and no noisy notifications by default.
        Contact and data practices will live here in full legal form when you
        ship.
      </p>
    </main>
  );
}
