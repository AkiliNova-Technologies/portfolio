export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Albert Watbin",
          url: "https://albertwatbin.com",
          jobTitle: "Full Stack Software Engineer",
          image: "https://albertwatbin.com/profile-image.png",
          sameAs: [
            "https://github.com/albert2Moon",
            "https://www.linkedin.com/in/albert-watbin-968282272",
          ],
          knowsAbout: [
            "Next.js",
            "React",
            "Node.js",
            "Backend Development",
            "API Architecture",
            "PostgreSQL",
            "MongoDB",
            "Platform Engineering",
            "CMS Development",
            "Dashboard Development",
            "E-commerce Development"
          ],
        }),
      }}
    />
  );
}
