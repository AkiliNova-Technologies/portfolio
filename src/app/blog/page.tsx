"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, BookOpen, Clock, Zap } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";
import { FadeIn } from "@/components/FadeIn";
import { SectionLabel } from "@/components/SectionLabel";
import { Tag } from "@/components/Tag";
import { Footer, Navbar } from "@/components";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    "All",
    ...new Set(BLOG_POSTS.map((post) => post.category)),
  ];

  const filteredPosts =
    selectedCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === selectedCategory);

  return (
    <>
      <Navbar />

      {/* ═══════════ Hero Header ═══════════ */}
      <section className="relative pt-36 pb-20 px-6 bg-surface-bg overflow-hidden">
        {/* Background decorations — matching Hero.tsx style */}
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
            <SectionLabel>Insights &amp; Articles</SectionLabel>
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tighter mb-5">
              From My{" "}
              <span className="font-display italic text-brand-orange font-semibold">
                Blog
              </span>
            </h1>
            <p className="text-lg text-content-secondary max-w-2xl leading-relaxed">
              Thoughts, insights, and experiences from my journey in software
              engineering. I write about architecture, platform engineering, and
              building scalable systems.
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

      {/* ═══════════ Featured Post ═══════════ */}
      {filteredPosts.length > 0 && (
        <section className="pt-20 pb-8 px-6 bg-surface-bg">
          <div className="max-w-[1200px] mx-auto">
            <FadeIn>
              <Link
                href={`/blog/${filteredPosts[0].slug}`}
                className="block group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 bg-surface-dark rounded-[24px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
                  {/* Left visual — dark styled like Services accordion active state */}
                  <div className="lg:col-span-2 relative min-h-[280px] lg:min-h-[360px] bg-surface-dark-card overflow-hidden">
                    {/* Decorative orange radial */}
                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(232,81,26,0.12) 0%, transparent 70%)",
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-brand-orange/[0.12] flex items-center justify-center border border-brand-orange/[0.15]">
                          <BookOpen
                            size={32}
                            className="text-brand-orange"
                          />
                        </div>
                        <span className="text-xs font-semibold tracking-[0.1em] uppercase text-brand-orange">
                          Featured Article
                        </span>
                      </div>
                    </div>
                    {/* Corner accents */}
                    <div className="absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2 border-white/[0.06] rounded-tl-lg" />
                    <div className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-white/[0.06] rounded-br-lg" />
                  </div>

                  {/* Right content */}
                  <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-5">
                      <Tag dark>{filteredPosts[0].category}</Tag>
                      <span className="flex items-center gap-1.5 text-sm text-white/40">
                        <Clock size={14} />
                        {filteredPosts[0].readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight text-content-light group-hover:text-brand-orange transition-colors duration-300">
                      {filteredPosts[0].title}
                    </h2>

                    <p className="text-white/[0.5] leading-relaxed mb-8 line-clamp-3 max-w-lg">
                      {filteredPosts[0].excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/30 font-medium">
                        {filteredPosts[0].date}
                      </span>
                      <span className="inline-flex items-center gap-2 text-brand-orange font-semibold text-sm">
                        Read Article{" "}
                        <ArrowUpRight
                          size={16}
                          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ═══════════ Posts Grid ═══════════ */}
      <section className="py-16 px-6 bg-surface-bg">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredPosts.slice(1).map((post, index) => (
              <FadeIn key={post.slug} delay={index * 0.08}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block group h-full"
                >
                  <div className="h-full p-7 rounded-[20px] bg-white border border-black/[0.08] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-lg flex flex-col">
                    {/* Top decorative bar */}
                    <div className="relative h-36 mb-5 rounded-xl bg-surface-bg overflow-hidden">
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(135deg, rgba(232,81,26,0.04) 0%, transparent 60%)`,
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-xl bg-brand-orange-tint flex items-center justify-center border border-brand-orange-tint2">
                          <BookOpen
                            size={20}
                            className="text-brand-orange/60"
                          />
                        </div>
                      </div>
                      {/* Grid pattern */}
                      <div className="absolute inset-0 opacity-[0.03]" style={{
                        backgroundImage: "linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                      }} />
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <Tag>{post.category}</Tag>
                      <span className="flex items-center gap-1 text-xs text-content-muted">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold mb-3 leading-snug group-hover:text-brand-orange transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-sm text-content-secondary leading-relaxed mb-5 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-black/[0.06]">
                      <span className="text-xs text-content-muted font-medium">
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5 text-brand-orange text-sm font-semibold">
                        Read{" "}
                        <ArrowUpRight
                          size={14}
                          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-24">
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-brand-orange-tint flex items-center justify-center">
                <BookOpen size={28} className="text-brand-orange" />
              </div>
              <p className="text-content-muted text-lg font-medium">
                No posts found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════ CTA — matching Contact section dark style ═══════════ */}
      <section className="py-24 px-6 bg-surface-dark">
        <div className="max-w-[800px] mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tighter mb-5 text-content-light">
              Want to discuss{" "}
              <span className="font-display italic text-brand-orange font-semibold">
                scalable systems?
              </span>
            </h2>
            <p className="text-white/[0.5] mb-10 max-w-lg mx-auto leading-relaxed">
              I&apos;m always open to discussing software architecture, platform
              engineering, or potential collaborations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-orange text-white rounded-full text-[15px] font-semibold hover:bg-brand-orange-light transition-all duration-300 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(232,81,26,0.25)] hover:shadow-[0_8px_30px_rgba(232,81,26,0.35)]"
            >
              Let&apos;s Talk <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}