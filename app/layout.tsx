import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = new URL("https://lunarcast.app");

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "LunarCast — Calm podcast listening for iOS",
    template: "%s · LunarCast",
  },
  description:
    "LunarCast is a simple iOS podcast app: curated long-form interviews and tech signal, news separate from playback, RSS for any show, and no ads or discovery pressure.",
  applicationName: "LunarCast",
  alternates: { canonical: "/" },
  manifest: "/favicon/site.webmanifest",
  appleWebApp: { title: "LunarCast" },
  icons: {
    icon: [
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "LunarCast",
    title: "LunarCast — Calm podcast listening for iOS",
    description:
      "Long interviews, clear newsfeeds, your library via RSS. No ads, no algorithmic queues, no growth tricks.",
    images: [
      {
        url: "/lunarcast-icon.png",
        width: 1024,
        height: 1024,
        alt: "LunarCast app icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LunarCast — Calm podcast listening for iOS",
    description:
      "Long interviews, clear newsfeeds, your library via RSS. No ads, no algorithmic queues, no growth tricks.",
    images: ["/lunarcast-icon.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f6f8" },
    { media: "(prefers-color-scheme: dark)", color: "#12161c" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-dvh font-sans text-base leading-relaxed">
        {children}
      </body>
    </html>
  );
}
