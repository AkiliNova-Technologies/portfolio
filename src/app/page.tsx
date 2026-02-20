import {
  Navbar,
  Hero,
  Marquee,
  Services,
  Skills,
  Projects,
  Philosophy,
  Blog,
  Contact,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Skills />
      <Projects />
      <Philosophy />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
