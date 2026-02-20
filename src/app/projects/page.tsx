"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  ShoppingCart,
  Monitor,
  Workflow,
  GraduationCap,
  Smartphone,
  Layers,
} from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { FadeIn } from "@/components/FadeIn";
import { SectionLabel } from "@/components/SectionLabel";
import { Tag } from "@/components/Tag";
import { Footer, Navbar } from "@/components";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  ShoppingCart,
  Building2,
  Monitor,
  Workflow,
  GraduationCap,
  Smartphone,
};

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const categories = ["All", ...new Set(PROJECTS.map((p) => p.category))];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Navbar />

      {/* ═══════════ Hero Header ═══════════ */}
      <section className="relative pt-36 pb-20 px-6 bg-surface-bg overflow-hidden">
        {/* Background decorations */}
        <div
          className="absolute -top-48 -right-48 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(232,81,26,0.12) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-[350px] h-[350px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(232,81,26,0.06) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="max-w-[1200px] mx-auto relative z-10">
          <FadeIn>
            <SectionLabel>Portfolio</SectionLabel>
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tighter mb-5">
              Featured{" "}
              <span className="font-display italic text-brand-orange font-semibold">
                Projects
              </span>
            </h1>
            <p className="text-lg text-content-secondary max-w-2xl leading-relaxed">
              Real-world applications I&apos;ve built — from e-commerce
              platforms to IoT systems. Each project solved specific problems and
              delivered measurable results.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════ Category Filter ═══════════ */}
      <section className="py-5 px-6 bg-surface-bg border-y border-black/[0.08] sticky top-[68px] z-[900] backdrop-blur-xl bg-surface-bg/[0.92]">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <div className="flex flex-wrap gap-2.5">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer border ${
                    selectedCategory === category
                      ? "bg-brand-orange text-white border-brand-orange shadow-[0_4px_16px_rgba(232,81,26,0.25)]"
                      : "bg-white text-content-secondary border-black/[0.08] hover:border-brand-orange/30 hover:text-brand-orange"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════ Projects Grid ═══════════ */}
      <section className="py-20 px-6 bg-surface-bg">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((project, index) => {
              const Icon = iconMap[project.iconName] || Building2;
              const isHovered = hoveredProject === index;

              return (
                <FadeIn key={project.slug} delay={index * 0.08}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="block group h-full"
                  >
                    <div
                      onMouseEnter={() => setHoveredProject(index)}
                      onMouseLeave={() => setHoveredProject(null)}
                      className={`h-full p-7 rounded-[20px] cursor-pointer min-h-[320px] flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 ${
                        isHovered
                          ? "bg-surface-dark border border-transparent shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
                          : "bg-white border border-black/[0.08]"
                      }`}
                    >
                      <div>
                        {/* Icon + Year row */}
                        <div className="flex justify-between items-start mb-5">
                          <div
                            className={`w-12 h-12 rounded-[14px] flex items-center justify-center transition-all duration-300 ${
                              isHovered
                                ? "bg-brand-orange/[0.15]"
                                : "bg-brand-orange-tint"
                            }`}
                          >
                            <Icon
                              size={22}
                              className="text-brand-orange"
                            />
                          </div>
                          <span
                            className={`text-sm font-medium transition-colors duration-300 ${
                              isHovered
                                ? "text-white/40"
                                : "text-content-muted"
                            }`}
                          >
                            {project.year}
                          </span>
                        </div>

                        {/* Title */}
                        <h3
                          className={`text-xl font-bold mb-2.5 transition-colors duration-300 ${
                            isHovered
                              ? "text-content-light"
                              : "text-content-primary"
                          }`}
                        >
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p
                          className={`text-sm leading-relaxed mb-5 line-clamp-2 transition-colors duration-300 ${
                            isHovered
                              ? "text-white/[0.5]"
                              : "text-content-secondary"
                          }`}
                        >
                          {project.desc}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {project.tags.slice(0, 3).map((tag) => (
                            <Tag key={tag} dark={isHovered}>
                              {tag}
                            </Tag>
                          ))}
                          {project.tags.length > 3 && (
                            <span
                              className={`text-xs font-medium px-2 py-0.5 transition-colors ${
                                isHovered
                                  ? "text-white/30"
                                  : "text-content-muted"
                              }`}
                            >
                              +{project.tags.length - 3}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Bottom section */}
                      <div>
                        {/* Key result highlight */}
                        {project.results && (
                          <div
                            className={`pt-4 mb-4 border-t transition-colors duration-300 ${
                              isHovered
                                ? "border-white/[0.08]"
                                : "border-black/[0.06]"
                            }`}
                          >
                            <p
                              className={`text-xs mb-1 transition-colors ${
                                isHovered
                                  ? "text-brand-orange"
                                  : "text-content-muted"
                              }`}
                            >
                              Key Result
                            </p>
                            <p
                              className={`text-sm font-medium line-clamp-1 transition-colors duration-300 ${
                                isHovered
                                  ? "text-white/70"
                                  : "text-content-primary"
                              }`}
                            >
                              {project.results[0]}
                            </p>
                          </div>
                        )}

                        {/* View link */}
                        <div className="flex items-center gap-1.5 text-brand-orange text-sm font-semibold">
                          View Case Study{" "}
                          <ArrowUpRight
                            size={16}
                            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-24">
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-brand-orange-tint flex items-center justify-center">
                <Layers size={28} className="text-brand-orange" />
              </div>
              <p className="text-content-muted text-lg font-medium">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="py-24 px-6 bg-surface-dark">
        <div className="max-w-[800px] mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tighter mb-5 text-content-light">
              Have a{" "}
              <span className="font-display italic text-brand-orange font-semibold">
                project
              </span>{" "}
              in mind?
            </h2>
            <p className="text-white/[0.5] mb-10 max-w-lg mx-auto leading-relaxed">
              I&apos;m always interested in hearing about new challenges and
              opportunities to build scalable software solutions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-orange text-white rounded-full text-[15px] font-semibold hover:bg-brand-orange-light transition-all duration-300 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(232,81,26,0.25)] hover:shadow-[0_8px_30px_rgba(232,81,26,0.35)]"
            >
              Let&apos;s Work Together <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}