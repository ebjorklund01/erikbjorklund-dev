import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Erik Bjorklund — Software & AI Engineer",
  description:
    "Full-stack software engineer with a biomedical background, moving into production AI engineering. Flutter, Rails, Python, LLMs.",
  openGraph: {
    title: "Erik Bjorklund — Software & AI Engineer",
    description:
      "Full-stack software engineer with a biomedical background, moving into production AI engineering. Flutter, Rails, Python, LLMs.",
    url: "https://erikbjorklund.dev",
    siteName: "Erik Bjorklund",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Erik Bjorklund — Software & AI Engineer",
    description:
      "Full-stack software engineer with a biomedical background, moving into production AI engineering. Flutter, Rails, Python, LLMs.",
    creator: "@erikbjorklund",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable}`}
    >
      <body className="min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
