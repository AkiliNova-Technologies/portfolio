import Script from "next/script";

export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Albert Watbin",
    url: "https://albertwatbin.vercel.app",
    image: "https://albertwatbin.vercel.app/og-image.png",
    jobTitle: "Full Stack Software Engineer",
    sameAs: [
      "https://github.com/albert2Moon",
      "https://www.linkedin.com/in/albert-watbin-968282272",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "Prisma ORM",
      "Backend API Development",
      "CMS Development",
      "Dashboard Systems",
      "Platform Engineering",
    ],
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Albert Watbin — Software Engineer Portfolio",
    url: "https://albertwatbin.vercel.app",
    description:
      "Full Stack Software Engineer specializing in scalable web platforms, backend API architecture, custom CMS development, and business workflow systems.",
    author: {
      "@type": "Person",
      name: "Albert Watbin",
    },
  };

  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteSchema),
        }}
      />
    </>
  );
}
