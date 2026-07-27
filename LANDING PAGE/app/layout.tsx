import type { Metadata, Viewport } from "next";
import { Fraunces } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});

const SITE_URL = "https://kloyya.com";
const SITE_NAME = "Kloyya";
const DEFAULT_TITLE =
  "Kloyya — The intelligence behind every decision you make";
const DEFAULT_DESCRIPTION =
  "Kloyya is an autonomous AI Chief of Staff. It aggregates cross-application operational telemetry to synthesize decisions, not just tidy your inbox. Join the waitlist.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s · Kloyya",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Kloyya",
    "AI Chief of Staff",
    "autonomous AI assistant",
    "operational intelligence",
    "decision intelligence",
    "founder productivity",
    "cross-application telemetry",
    "AI for founders",
    "AI for operators",
    "executive AI agent",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  // Homepage canonical; subpages override via their own `alternates.canonical`.
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: DEFAULT_TITLE,
    description:
      "An autonomous AI Chief of Staff for founders, VPs, and cross-border operators. Stop managing notifications. Start executing strategy.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description:
      "An autonomous AI Chief of Staff for founders, VPs, and cross-border operators. Stop managing notifications. Start executing strategy.",
    creator: "@kloyya",
    site: "@kloyya",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // `app/icon.svg` is auto-detected as the favicon via the Next.js file
  // convention; declared here explicitly for clarity.
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1220" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="bg-paper font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
