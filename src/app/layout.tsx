import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "dev.folio | Software Engineer — Scalable Systems Architect",
  description:
    "I engineer structured digital systems that transform ideas into scalable, maintainable platforms. Full-stack development, backend architecture, and platform engineering.",
  keywords: [
    "software engineer",
    "full stack developer",
    "backend architecture",
    "platform engineering",
    "next.js developer",
    "react developer",
  ],
  openGraph: {
    title: "dev.folio | Software Engineer",
    description: "I Build Scalable Software Systems",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans bg-surface-bg text-content-primary antialiased">
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
