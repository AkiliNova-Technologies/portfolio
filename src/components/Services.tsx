"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Globe,
  Server,
  FileCode,
  Layout,
  Gauge,
} from "lucide-react";
import { SERVICES } from "@/lib/data";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";
import { Tag } from "./Tag";

const ICONS: Record<string, React.ReactNode> = {
  Globe: <Globe size={22} />,
  Server: <Server size={22} />,
  FileCode: <FileCode size={22} />,
  Layout: <Layout size={22} />,
  Gauge: <Gauge size={22} />,
};

export function Services() {
  const [active, setActive] = useState(1);

  return (
    <section id="services" className="py-24 px-6 bg-surface-bg">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <SectionLabel>My Specialization</SectionLabel>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tighter mb-3">
            Services I{" "}
            <span className="font-display italic text-brand-orange font-semibold">
              Provide
            </span>
          </h2>
          <p className="text-base text-content-secondary max-w-lg mb-14 leading-relaxed">
            Engineering structured digital systems that transform ideas into
            scalable, maintainable platforms.
          </p>
        </FadeIn>

        <div className="flex flex-col gap-1">
          {SERVICES.map((service, i) => {
            const isActive = active === i;
            return (
              <FadeIn key={i} delay={i * 0.08}>
                <div
                  onClick={() => setActive(isActive ? -1 : i)}
                  className={`cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] mb-1 ${
                    isActive
                      ? "p-7 bg-surface-dark-card rounded-[20px]"
                      : "px-7 py-[22px] bg-transparent rounded-xl border border-black/[0.08] hover:border-black/[0.15]"
                  }`}
                >
                  {/* Header row */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-6">
                      <span
                        className={`text-sm font-bold min-w-[30px] ${
                          isActive
                            ? "text-brand-orange"
                            : "text-content-muted"
                        }`}
                      >
                        {service.num}
                      </span>
                      <span
                        className={`text-lg sm:text-xl font-semibold transition-colors duration-300 ${
                          isActive
                            ? "text-content-light"
                            : "text-content-primary"
                        }`}
                      >
                        {service.title}
                      </span>
                    </div>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-brand-orange rotate-0"
                          : "bg-brand-orange-tint -rotate-45"
                      }`}
                    >
                      <ArrowUpRight
                        size={18}
                        className={isActive ? "text-white" : "text-brand-orange"}
                      />
                    </div>
                  </div>

                  {/* Expanded content */}
                  {isActive && (
                    <div className="mt-5 pl-[54px] animate-slide-in">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.tags.map((tag) => (
                          <Tag key={tag} dark>
                            {tag}
                          </Tag>
                        ))}
                      </div>
                      <p className="text-[15px] text-white/60 leading-relaxed max-w-lg">
                        {service.desc}
                      </p>
                    </div>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
