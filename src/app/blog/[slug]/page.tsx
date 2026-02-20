"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Clock,
  Calendar,
  User,
  Hash,
} from "lucide-react";
import { BLOG_POSTS, PROJECTS } from "@/lib/data";
import { FadeIn } from "@/components/FadeIn";
import { SectionLabel } from "@/components/SectionLabel";
import { Tag } from "@/components/Tag";
import { BlogContent } from "@/components/BlogContent";
import { Footer, Navbar } from "@/components";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <Navbar />
        <section className="min-h-screen flex items-center justify-center px-6 bg-surface-bg">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-brand-orange-tint flex items-center justify-center">
              <BookOpen size={32} className="text-brand-orange" />
            </div>
            <h1 className="text-4xl font-extrabold tracking-tighter mb-4">
              Post Not Found
            </h1>
            <p className="text-content-secondary mb-8 max-w-md mx-auto">
              The blog post you&apos;re looking for doesn&apos;t exist or may
              have been moved.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-orange text-white rounded-full text-[15px] font-semibold hover:bg-brand-orange-light transition-all duration-300 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(232,81,26,0.25)]"
            >
              <ArrowLeft size={18} /> Back to Blog
            </Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.slug !== slug && p.category === post.category
  ).slice(0, 2);

  const relatedProjects = PROJECTS.filter((p) =>
    post.relatedProjects?.includes(p.slug)
  );

  return (
    <>
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-16 px-6 bg-surface-bg overflow-hidden">
        <div
          className="absolute -top-48 -right-48 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(232,81,26,0.1) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div className="max-w-[800px] mx-auto relative z-10">
          <FadeIn>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-content-secondary hover:text-brand-orange transition-colors mb-10 group text-sm font-medium"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-3 mb-5">
              <Tag>{post.category}</Tag>
              <span className="flex items-center gap-1.5 text-sm text-content-muted">
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tighter mb-8 leading-[1.1]">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 py-5 border-y border-black/[0.08]">
              <div className="w-12 h-12 rounded-full bg-brand-orange-tint flex items-center justify-center border border-brand-orange-tint2">
                <User size={20} className="text-brand-orange" />
              </div>
              <div>
                <div className="font-semibold text-content-primary text-[15px]">
                  {post.author.name}
                </div>
                <div className="flex items-center gap-1.5 text-sm text-content-muted">
                  <Calendar size={12} />
                  {post.date}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 -mt-2">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn delay={0.1}>
            <div className="relative h-[380px] rounded-[24px] bg-surface-dark overflow-hidden border border-black/[0.08]">
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(232,81,26,0.1) 0%, transparent 70%)" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-brand-orange/[0.12] flex items-center justify-center border border-brand-orange/[0.15]">
                    <BookOpen size={32} className="text-brand-orange" />
                  </div>
                  <p className="text-white/30 text-sm font-medium">Featured Image</p>
                </div>
              </div>
              <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }} />
              <div className="absolute top-8 left-8 w-10 h-10 border-l-2 border-t-2 border-white/[0.06] rounded-tl-lg" />
              <div className="absolute bottom-8 right-8 w-10 h-10 border-r-2 border-b-2 border-white/[0.06] rounded-br-lg" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content — uses the new block renderer */}
      <section className="py-20 px-6">
        <div className="max-w-[800px] mx-auto">
          <FadeIn>
            <BlogContent blocks={post.blocks} />
          </FadeIn>

          {/* Tags */}
          <div className="mt-14 pt-6 border-t border-black/[0.08]">
            <div className="flex items-center gap-2 mb-3">
              <Hash size={14} className="text-content-muted" />
              <span className="text-xs font-semibold tracking-[0.1em] uppercase text-content-muted">
                Topics
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 bg-surface-bg rounded-full text-xs font-medium text-content-secondary border border-black/[0.06] hover:border-brand-orange/20 hover:text-brand-orange transition-colors cursor-default"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 px-6 bg-surface-bg-alt">
          <div className="max-w-[1200px] mx-auto">
            <FadeIn>
              <SectionLabel>Related Projects</SectionLabel>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tighter mb-10">
                Projects{" "}
                <span className="font-display italic text-brand-orange font-semibold">Mentioned</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {relatedProjects.map((project) => (
                  <Link key={project.slug} href={`/projects/${project.slug}`} className="block group">
                    <div className="p-7 bg-white rounded-[20px] border border-black/[0.08] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-lg">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-brand-orange transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-content-secondary text-sm mb-4">{project.category}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 3).map((tag) => (
                          <Tag key={tag}>{tag}</Tag>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 px-6 bg-surface-bg">
          <div className="max-w-[1200px] mx-auto">
            <FadeIn>
              <SectionLabel>Continue Reading</SectionLabel>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tighter mb-10">
                More from{" "}
                <span className="font-display italic text-brand-orange font-semibold">{post.category}</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="block group">
                    <div className="p-7 rounded-[20px] bg-white border border-black/[0.08] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <Tag>{relatedPost.category}</Tag>
                        <span className="flex items-center gap-1 text-xs text-content-muted">
                          <Clock size={12} />
                          {relatedPost.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-brand-orange transition-colors duration-300">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-content-secondary mb-5 line-clamp-2 leading-relaxed">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-black/[0.06]">
                        <span className="text-xs text-content-muted font-medium">{relatedPost.date}</span>
                        <span className="flex items-center gap-1.5 text-brand-orange text-sm font-semibold">
                          Read <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 px-6 bg-surface-dark">
        <div className="max-w-[800px] mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tighter mb-5 text-content-light">
              Want to discuss{" "}
              <span className="font-display italic text-brand-orange font-semibold">scalable systems?</span>
            </h2>
            <p className="text-white/[0.5] mb-10 max-w-lg mx-auto leading-relaxed">
              I&apos;m always open to discussing software architecture, platform engineering, or potential collaborations.
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