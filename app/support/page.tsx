import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Contact LunarCast: bugs, ideas, and feedback from Darcy, the app’s builder.",
  alternates: { canonical: "/support" },
};

const supportEmail = "lunarcastapp@gmail.com";

export default function SupportPage() {
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
        Support
      </h1>
      <div className="mt-6 space-y-5 text-[hsl(var(--foreground))]/85">
        <p>
          Hey, I&apos;m Darcy—I built LunarCast because I love these pods but
          hate spam. Drop feedback here:{" "}
          <a
            href={`mailto:${supportEmail}?subject=LunarCast%20feedback`}
            className="break-all text-accent underline-offset-4 hover:underline"
          >
            {supportEmail}
          </a>
        </p>
        <p>
          That inbox is the right place for bug reports and feature requests. I
          read everything I can; I may not reply to every message, but your notes
          shape what ships next.
        </p>
      </div>
    </main>
  );
}
