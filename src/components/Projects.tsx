"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  ShoppingCart,
  Building2,
  Monitor,
  Workflow,
  GraduationCap,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";
import { Tag } from "./Tag";
import Link from "next/link";

const ICONS: Record<string, React.ReactNode> = {
  ShoppingCart: <ShoppingCart size={20} />,
  Building2: <Building2 size={20} />,
  Monitor: <Monitor size={20} />,
  Workflow: <Workflow size={20} />,
  GraduationCap: <GraduationCap size={20} />,
  Smartphone: <Smartphone size={20} />,
};

export function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-6 bg-surface-bg">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <SectionLabel>Selected Work</SectionLabel>
          <div className="flex justify-between items-end mb-14 flex-wrap gap-5">
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tighter">
              Projects I&apos;ve{" "}
              <span className="font-display italic text-brand-orange font-semibold">
                Built
              </span>
            </h2>
            <Link href="/projects">
              <span className="flex items-center gap-2 text-brand-orange text-[15px] font-semibold cursor-pointer hover:gap-3 transition-all duration-300">
                View All Projects <ArrowRight size={18} />
              </span>
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.slice(0, 3).map((project, i) => {
            const isHovered = hovered === i;
            return (
              <FadeIn key={i} delay={i * 0.08}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="block group h-full"
                >
                  <div
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    className={`h-full p-7 rounded-[20px] cursor-pointer min-h-[280px] flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 ${
                      isHovered
                        ? "bg-surface-dark border border-transparent"
                        : "bg-white border border-black/[0.08]"
                    }`}
                  >
                    <div>
                      <div
                        className={`w-12 h-12 rounded-[14px] flex items-center justify-center mb-5 transition-all duration-300 ${
                          isHovered
                            ? "bg-brand-orange/[0.15]"
                            : "bg-brand-orange-tint"
                        }`}
                      >
                        <span className="text-brand-orange">
                          {ICONS[project.iconName]}
                        </span>
                      </div>

                      <h3
                        className={`text-[19px] font-bold mb-2.5 transition-colors duration-300 ${
                          isHovered
                            ? "text-content-light"
                            : "text-content-primary"
                        }`}
                      >
                        {project.title}
                      </h3>

                      <p
                        className={`text-sm leading-relaxed mb-5 transition-colors duration-300 line-clamp-2 ${
                          isHovered
                            ? "text-white/[0.55]"
                            : "text-content-secondary"
                        }`}
                      >
                        {project.desc}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.map((tag) => (
                          <Tag key={tag} dark={isHovered}>
                            {tag}
                          </Tag>
                        ))}
                      </div>

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
      </div>
    </section>
  );
}