import { Cpu, Shield, Zap, Layers } from "lucide-react";
import { PHILOSOPHY_CARDS } from "@/lib/data";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";

const ICONS: Record<string, React.ReactNode> = {
  Cpu: <Cpu size={22} />,
  Shield: <Shield size={22} />,
  Zap: <Zap size={22} />,
  Layers: <Layers size={22} />,
};

export function Philosophy() {
  return (
    <section id="philosophy" className="py-24 px-6 bg-surface-bg-alt">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - text */}
          <FadeIn>
            <div>
              <SectionLabel>My Approach</SectionLabel>
              <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tighter mb-7">
                Work{" "}
                <span className="font-display italic text-brand-orange font-semibold">
                  Philosophy
                </span>
              </h2>
              <p className="text-base leading-7 text-content-secondary mb-6">
                I approach software development as a process of intentional
                system design — where each component plays a defined role within
                a larger operational structure.
              </p>
              <p className="text-base leading-7 text-content-secondary mb-8">
                Every project is treated as infrastructure in progress, built
                with maintainability, scalability, and future adaptability in
                mind.
              </p>
              <p className="text-[15px] leading-7 text-content-muted italic">
                My approach combines system thinking, clean architecture, and
                performance-first engineering to ensure the solutions I build are
                not just functional, but scalable and sustainable.
              </p>
            </div>
          </FadeIn>

          {/* Right - cards */}
          <FadeIn delay={0.2}>
            <div className="flex flex-col gap-4">
              {PHILOSOPHY_CARDS.map((card, i) => (
                <div
                  key={i}
                  className="flex gap-5 items-start p-6 rounded-2xl bg-white border border-black/[0.08] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-[14px] bg-brand-orange-tint flex-shrink-0 flex items-center justify-center text-brand-orange">
                    {ICONS[card.iconName]}
                  </div>
                  <div>
                    <h4 className="text-base font-bold mb-1.5">
                      {card.title}
                    </h4>
                    <p className="text-sm text-content-secondary leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
