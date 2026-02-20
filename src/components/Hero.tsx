"use client";

import { ArrowUpRight, ChevronRight } from "lucide-react";
import { FadeIn } from "./FadeIn";
import Image from "next/image";

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative pt-24 pb-16 overflow-hidden"
    >
      {/* Background decorations */}
      <div
        className="absolute -top-48 -right-48 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(232,81,26,0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(232,81,26,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute -bottom-48 -left-48 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(232,81,26,0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(232,81,26,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Decorative elements - subtle additions */}

      {/* Bottom left dots grid */}
      <div className="absolute bottom-20 left-10 opacity-10 pointer-events-none">
        <div className="grid grid-cols-4 gap-3">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-brand-orange" />
          ))}
        </div>
      </div>

      {/* Right side vertical line decoration */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 h-64 w-px opacity-20 pointer-events-none">
        <div className="h-full w-full bg-gradient-to-b from-transparent via-brand-orange to-transparent" />
      </div>

      {/* Left side floating plus signs */}
      <div className="absolute left-10 top-40 space-y-6 opacity-10 pointer-events-none">
        <span className="block text-brand-orange text-2xl">+</span>
        <span className="block text-brand-orange text-xl ml-4">+</span>
        <span className="block text-brand-orange text-2xl">+</span>
      </div>

      {/* Subtle wave pattern at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-12 opacity-5 pointer-events-none">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1200 24"
          fill="none"
        >
          <path
            d="M0 24L60 12L120 20L180 8L240 16L300 4L360 12L420 8L480 16L540 10L600 18L660 8L720 14L780 6L840 12L900 8L960 16L1020 4L1080 12L1140 8L1200 16V24H0Z"
            fill="#E8511A"
            fillOpacity="0.2"
          />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10">
        {/* Main container with two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="w-full">
            {/* Greeting */}
            <FadeIn delay={0.1}>
              <p className="text-lg text-content-secondary font-display italic mb-3">
                Hello, I&apos;m — Albert Watbin
              </p>
            </FadeIn>

            {/* Main heading */}
            <FadeIn delay={0.15}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tighter mb-7 max-w-3xl">
                I Build{" "}
                <span className="text-brand-orange relative inline-block">
                  Scalable
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    height="8"
                    viewBox="0 0 200 8"
                  >
                    <path
                      d="M0 6 Q50 0 100 4 Q150 8 200 2"
                      stroke="#E8511A"
                      strokeWidth="2.5"
                      fill="none"
                      opacity="0.4"
                    />
                  </svg>
                </span>{" "}
                Software Systems
              </h1>
            </FadeIn>

            {/* Subheading */}
            <FadeIn delay={0.25}>
              <p className="text-lg leading-relaxed text-content-secondary max-w-xl mb-5">
                Software Engineer focused on backend architecture, platform
                engineering, and intelligent user-centric web systems.
              </p>
            </FadeIn>

            {/* Short intro */}
            <FadeIn delay={0.3}>
              <p className="text-[15px] leading-7 text-content-muted max-w-[580px] mb-10">
                I specialize in designing and developing full-stack platforms
                that solve real operational problems — from e-commerce
                ecosystems to administrative dashboards, CMS platforms, and
                device-integrated applications.
              </p>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <button
                  onClick={() => scrollTo("projects")}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-orange text-white rounded-full text-[15px] font-semibold cursor-pointer transition-all duration-300 hover:bg-brand-orange-light hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(232,81,26,0.25)] hover:shadow-[0_8px_30px_rgba(232,81,26,0.35)]"
                >
                  View Projects <ArrowUpRight size={18} />
                </button>
                <button
                  onClick={() => scrollTo("contact")}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent text-content-primary border-2 border-surface-dark rounded-full text-[15px] font-semibold cursor-pointer transition-all duration-300 hover:bg-surface-dark hover:text-white hover:-translate-y-0.5"
                >
                  Get In Touch <ChevronRight size={18} />
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Right column - Image container */}
          <div className="hidden lg:block relative">
            <FadeIn delay={0.2}>
              <div className="relative w-full max-w-[500px] h-[700px] ml-auto">
                {/* Image container with decorative frame */}
                <div className="relative w-full h-full group">
                  {/* Animated gradient background */}
                  <div className="absolute -inset-0.5 bg-gradient-145 from-brand-orange/30 via-brand-orange/20 to-transparent rounded-3xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Main container with glass morphism effect */}
                  <div className="relative w-full h-full rounded-3xl bg-surface-dark/10 backdrop-blur-[2px] p-3">
                    {/* Inner container for image */}
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      {/* Image with proper Next.js optimization */}
                      <Image
                        src="/profile-image.png"
                        alt="Albert Watbin - Software Engineer"
                        fill
                        sizes="(max-width: 768px) 100vw, 500px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                        quality={90}
                        loading="eager"
                      />

                      {/* Subtle overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/20 via-transparent to-transparent" />
                    </div>
                  </div>

                  {/* Decorative elements */}

                  {/* Top right floating orb */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-brand-orange/10 blur-2xl animate-pulse-slow" />

                  {/* Bottom left floating orb */}
                  <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full bg-brand-orange/10 blur-3xl animate-pulse-slower" />

                  {/* Corner accents - Top left */}
                  <div className="absolute top-4 left-4 w-16 h-16">
                    <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-brand-orange rounded-tl-xl" />
                    <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-brand-orange rounded-tl-lg" />
                  </div>

                  {/* Corner accents - Bottom right */}
                  <div className="absolute bottom-4 right-4 w-16 h-16">
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-brand-orange rounded-br-xl" />
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-brand-orange rounded-br-lg" />
                  </div>

                  {/* Dots pattern - Top right area */}
                  <div className="absolute top-12 right-12">
                    <div className="grid grid-cols-3 gap-2">
                      {[...Array(9)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 h-1 rounded-full bg-brand-orange"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Dots pattern - Bottom left area */}
                  <div className="absolute bottom-12 left-12">
                    <div className="grid grid-cols-3 gap-2">
                      {[...Array(9)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 h-1 rounded-full bg-brand-orange"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Diagonal line decoration */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    style={{ mixBlendMode: "overlay" }}
                  >
                    <line
                      x1="20%"
                      y1="80%"
                      x2="80%"
                      y2="20%"
                      stroke="#E8511A"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      opacity="0.15"
                    />
                  </svg>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
