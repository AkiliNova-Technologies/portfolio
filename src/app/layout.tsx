import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import StructuredData from "./seo/structured-data";

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
  metadataBase: new URL("https://albertwatbin.vercel.app"),

  title: {
    default:
      "Software Engineer | Full Stack Developer | Scalable Web Platforms",
    template: "%s | Software Engineer Portfolio",
  },

  description:
    "Full Stack Software Engineer specializing in scalable web platforms, backend API architecture, custom CMS development, admin dashboards, and business workflow systems using Next.js, React, Node.js, PostgreSQL, MongoDB, and Prisma.",

  keywords: [
    "Full Stack Developer",
    "Software Engineer Portfolio",
    "Next.js Developer",
    "React Developer",
    "Backend API Developer",
    "Custom CMS Developer",
    "Dashboard Developer",
    "Admin Panel Developer",
    "E-commerce Platform Developer",
    "Web Application Developer",
    "Business Website Developer",
    "Platform Engineering",
    "Node.js Developer",
    "MongoDB Developer",
    "PostgreSQL Developer",
    "Prisma ORM Developer",
    "REST API Developer",
    "Workflow System Developer",
    "Enterprise Software Developer",
    "Custom Web Platform Developer"
  ],

  authors: [{ name: "Albert Watbin" }],
  creator: "Albert Watbin",
  publisher: "Albert Watbin",

  openGraph: {
    title:
      "Full Stack Software Engineer | Scalable Web Platforms & Backend Architecture",
    description:
      "I design and develop scalable web applications, business platforms, custom CMS systems, and backend APIs for startups and organizations.",
    url: "https://albertwatbin.vercel.app",
    siteName: "Albert Watbin Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Albert Watbin Software Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Software Engineer | Full Stack Developer",
    description:
      "Scalable Web Applications, Backend APIs, CMS Platforms & Business Systems Development.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://albertwatbin.vercel.app",
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
        
        <StructuredData />
        
        <div className="grain-overlay" />
        {children}

      </body>
    </html>
  );
}

