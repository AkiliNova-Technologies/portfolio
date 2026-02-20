import Script from "next/script";

export default function StructuredData() {
  return (
    <Script
      id="person-schema"
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
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
            "Platform Engineering"
          ]
        }),
      }}
    />
  );
}
