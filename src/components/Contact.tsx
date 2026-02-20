"use client";

import { Mail, Globe, Send, Github, Linkedin, Twitter } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-surface-dark">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - info */}
          <FadeIn>
            <div>
              <SectionLabel>Get In Touch</SectionLabel>
              <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tighter text-content-light mb-6">
                Have a system you want to{" "}
                <span className="font-display italic text-brand-orange font-semibold">
                  build?
                </span>
              </h2>
              <p className="text-base leading-7 text-white/[0.55] mb-10">
                Let&apos;s engineer a solution that works — and scales. Whether
                it&apos;s a new platform, a backend overhaul, or a custom CMS,
                I&apos;m ready to collaborate.
              </p>

              {/* Contact details */}
              <div className="flex flex-col gap-5 mb-10">
                {[
                  {
                    icon: <Mail size={20} />,
                    label: "albertwatbin@gmail.com",
                  },
                  {
                    icon: <Globe size={20} />,
                    label: "akilinovatech.com",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-brand-orange/[0.12] flex items-center justify-center text-brand-orange">
                      {item.icon}
                    </div>
                    <span className="text-[15px] text-white/70 font-medium">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Social icons */}
              <div className="flex gap-3">
                {[Github, Linkedin, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-brand-orange hover:border-brand-orange/30 transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right - form */}
          <FadeIn delay={0.2}>
            <div className="p-6 sm:p-6 md:p-7 lg:p-8 rounded-3xl bg-surface-dark-card-hover border border-white/[0.06] ">
              <h3 className="text-xl font-bold text-content-light mb-7">
                Send a message
              </h3>
              <form
                className="flex flex-col gap-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-input"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="form-input"
                />
                <input
                  type="text"
                  placeholder="Project Type (e.g. E-Commerce Platform)"
                  className="form-input"
                />
                <textarea
                  placeholder="Tell me about your project..."
                  rows={4}
                  className="form-input resize-y"
                />
                <button
                  type="submit"
                  className="mt-2 w-full flex items-center justify-center gap-2 px-8 py-4 bg-brand-orange text-white rounded-full text-[15px] font-semibold cursor-pointer transition-all duration-300 hover:bg-brand-orange-light hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(232,81,26,0.25)] hover:shadow-[0_8px_30px_rgba(232,81,26,0.35)]"
                >
                  Let&apos;s Build Together <Send size={18} />
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
