"use client";

import { Code2, Shield, Layers, CheckCircle2 } from "lucide-react";
import {
  SKILLS_ENGINEERING,
  SKILLS_TECH,
  ENGINEERING_PRACTICES,
} from "@/lib/data";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";
import { Tag } from "./Tag";
import { useInView } from "@/lib/hooks";

function SkillBar({ name, level }: { name: string; level: number }) {
  const { ref, visible } = useInView(0.1);

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium text-white/75">{name}</span>
        <span className="text-xs font-semibold text-brand-orange">
          {level}%
        </span>
      </div>
      <div className="skill-bar-track">
        <div
          className={`skill-bar-fill ${visible ? "animate" : ""}`}
          style={{ "--bar-width": `${level}%` } as React.CSSProperties}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-surface-dark">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <SectionLabel>Technical Arsenal</SectionLabel>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tighter mb-14 text-content-light">
            Skills &{" "}
            <span className="font-display italic text-brand-orange font-semibold">
              Technologies
            </span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left column - engineering capabilities */}
          <FadeIn delay={0.1}>
            <div>
              <h3 className="text-lg font-bold text-content-light mb-7 flex items-center gap-2.5">
                <Code2 size={20} className="text-brand-orange" />
                Engineering Capabilities
              </h3>
              <div className="flex flex-col gap-3">
                {SKILLS_ENGINEERING.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-5 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.06] transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.1]"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-brand-orange flex-shrink-0"
                    />
                    <span className="text-sm text-white/75 font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-bold text-content-light mt-10 mb-7 flex items-center gap-2.5">
                <Shield size={20} className="text-brand-orange" />
                Engineering Practices
              </h3>
              <div className="flex flex-wrap gap-2">
                {ENGINEERING_PRACTICES.map((p) => (
                  <Tag key={p} dark>
                    {p}
                  </Tag>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right column - tech stack with bars */}
          <FadeIn delay={0.2}>
            <div>
              <h3 className="text-lg font-bold text-content-light mb-7 flex items-center gap-2.5">
                <Layers size={20} className="text-brand-orange" />
                Technology Stack
              </h3>
              <div className="flex flex-col gap-[18px]">
                {SKILLS_TECH.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
