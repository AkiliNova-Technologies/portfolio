"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Github,
  Clock,
  Briefcase,
  User,
  Calendar,
  CheckCircle2,
  Layers,
  BookOpen,
} from "lucide-react";
import { getProjectBySlug, getRelatedProjects, BLOG_POSTS } from "@/lib/data";
import { FadeIn } from "@/components/FadeIn";
import { SectionLabel } from "@/components/SectionLabel";
import { Tag } from "@/components/Tag";
import { Footer, Navbar } from "@/components";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug as string);

  if (!project) {
    return (
      <>
        <Navbar />
        <section className="min-h-screen flex items-center justify-center px-6 bg-surface-bg">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-brand-orange-tint flex items-center justify-center">
              <Layers size={32} className="text-brand-orange" />
            </div>
            <h1 className="text-4xl font-extrabold tracking-tighter mb-4">
              Project Not Found
            </h1>
            <p className="text-content-secondary mb-8 max-w-md mx-auto">
              The project you&apos;re looking for doesn&apos;t exist or may have
              been moved.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-orange text-white rounded-full text-[15px] font-semibold hover:bg-brand-orange-light transition-all duration-300 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(232,81,26,0.25)]"
            >
              <ArrowLeft size={18} /> Back to Projects
            </Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  const relatedProjects = getRelatedProjects(project.slug, 2);
  const relatedBlogPosts = BLOG_POSTS.filter((post) =>
    project.relatedBlogPosts?.includes(post.slug)
  );

  return (
    <>
      <Navbar />

      {/* ═══════════ Hero Header ═══════════ */}
      <section className="relative pt-36 pb-16 px-6 bg-surface-bg overflow-hidden">
        {/* Background decorations */}
        <div
          className="absolute -top-48 -right-48 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(232,81,26,0.1) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        <div className="max-w-[1000px] mx-auto relative z-10">
          <FadeIn>
            {/* Back link */}
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-content-secondary hover:text-brand-orange transition-colors mb-10 group text-sm font-medium"
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Back to Projects
            </Link>

            {/* Meta badges */}
            <div className="flex items-center gap-3 mb-5">
              <Tag>{project.category}</Tag>
              <span className="text-sm text-content-muted font-medium">
                {project.year}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tighter mb-8 leading-[1.1]">
              {project.title}
            </h1>

            {/* Info bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-y border-black/[0.08]">
              {project.client && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange-tint flex items-center justify-center">
                    <Briefcase size={18} className="text-brand-orange" />
                  </div>
                  <div>
                    <div className="text-xs text-content-muted uppercase tracking-wider font-medium">
                      Client
                    </div>
                    <div className="font-semibold text-sm">
                      {project.client}
                    </div>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-orange-tint flex items-center justify-center">
                  <User size={18} className="text-brand-orange" />
                </div>
                <div>
                  <div className="text-xs text-content-muted uppercase tracking-wider font-medium">
                    My Role
                  </div>
                  <div className="font-semibold text-sm">{project.role}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-orange-tint flex items-center justify-center">
                  <Calendar size={18} className="text-brand-orange" />
                </div>
                <div>
                  <div className="text-xs text-content-muted uppercase tracking-wider font-medium">
                    Duration
                  </div>
                  <div className="font-semibold text-sm">
                    {project.duration}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════ Project Image Placeholder ═══════════ */}
      <section className="px-6 -mt-2">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn delay={0.1}>
            <div className="relative h-[380px] rounded-[24px] bg-surface-dark overflow-hidden border border-black/[0.08]">
              {/* Radial glow */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(232,81,26,0.1) 0%, transparent 70%)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-brand-orange/[0.12] flex items-center justify-center border border-brand-orange/[0.15]">
                    <Layers size={32} className="text-brand-orange" />
                  </div>
                  <p className="text-white/30 text-sm font-medium">
                    Project Preview
                  </p>
                  <p className="text-white/20 text-xs mt-1">
                    {project.title}
                  </p>
                </div>
              </div>
              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              {/* Corner accents */}
              <div className="absolute top-8 left-8 w-10 h-10 border-l-2 border-t-2 border-white/[0.06] rounded-tl-lg" />
              <div className="absolute bottom-8 right-8 w-10 h-10 border-r-2 border-b-2 border-white/[0.06] rounded-br-lg" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════ Overview ═══════════ */}
      <section className="py-20 px-6">
        <div className="max-w-[800px] mx-auto">
          <FadeIn>
            <SectionLabel>Overview</SectionLabel>
            <p className="text-lg text-content-secondary leading-[1.85] mb-12">
              {project.longDescription}
            </p>

            {/* Challenge & Solution — styled like Philosophy cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
              <div className="p-7 bg-surface-bg rounded-[20px] border border-black/[0.08] transition-all duration-400 hover:-translate-y-1 hover:shadow-lg">
                <div className="w-10 h-10 rounded-xl bg-brand-orange-tint flex items-center justify-center mb-4">
                  <span className="text-brand-orange font-bold text-sm">?</span>
                </div>
                <h3 className="text-lg font-bold mb-3">The Challenge</h3>
                <p className="text-content-secondary text-[15px] leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="p-7 bg-surface-dark rounded-[20px] transition-all duration-400 hover:-translate-y-1 hover:shadow-lg">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/[0.12] flex items-center justify-center mb-4">
                  <CheckCircle2 size={18} className="text-brand-orange" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-content-light">
                  The Solution
                </h3>
                <p className="text-white/[0.55] text-[15px] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features — styled like Skills engineering capabilities */}
            <div className="mb-16">
              <h3 className="text-2xl font-extrabold tracking-tight mb-6">
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-5 py-3.5 rounded-xl bg-surface-bg border border-black/[0.06] transition-all duration-300 hover:border-brand-orange/20"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-brand-orange flex-shrink-0"
                    />
                    <span className="text-sm text-content-secondary font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Results — styled like Services accordion items */}
            <div className="mb-16">
              <h3 className="text-2xl font-extrabold tracking-tight mb-6">
                Key Results
              </h3>
              <div className="flex flex-col gap-2">
                {project.results.map((result, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-5 p-5 bg-surface-bg rounded-xl border border-black/[0.08] transition-all duration-300 hover:border-brand-orange/20"
                  >
                    <span className="text-sm font-bold text-brand-orange min-w-[28px]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-content-secondary text-[15px] leading-relaxed">
                      {result}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack — grouped with Tags */}
            <div className="mb-16">
              <h3 className="text-2xl font-extrabold tracking-tight mb-8">
                Tech Stack
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { label: "Frontend", items: project.techStack.frontend },
                  { label: "Backend", items: project.techStack.backend },
                  { label: "Database", items: project.techStack.database },
                  {
                    label: "DevOps & Infrastructure",
                    items: project.techStack.devops,
                  },
                ].map((group) => (
                  <div key={group.label}>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-5 h-0.5 bg-brand-orange rounded-sm" />
                      <span className="text-xs font-semibold text-content-muted uppercase tracking-wider">
                        {group.label}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((tech) => (
                        <Tag key={tech}>{tech}</Tag>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Links */}
            {/* {project.links &&
              Object.keys(project.links).length > 0 && (
                <div className="flex flex-wrap gap-4 pt-8 border-t border-black/[0.08]">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-orange text-white rounded-full text-[15px] font-semibold hover:bg-brand-orange-light transition-all duration-300 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(232,81,26,0.25)] hover:shadow-[0_8px_30px_rgba(232,81,26,0.35)]"
                    >
                      Live Demo <ExternalLink size={16} />
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-3.5 bg-surface-dark text-white rounded-full text-[15px] font-semibold hover:bg-black transition-all duration-300 hover:-translate-y-0.5"
                    >
                      View Code <Github size={16} />
                    </a>
                  )}
                  {project.links.caseStudy && (
                    <Link
                      href={project.links.caseStudy}
                      className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent border-2 border-surface-dark text-content-primary rounded-full text-[15px] font-semibold hover:bg-surface-dark hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                    >
                      Full Case Study <ArrowRight size={16} />
                    </Link>
                  )}
                </div>
              )} */}
          </FadeIn>
        </div>
      </section>

      {/* ═══════════ Related Projects ═══════════ */}
      {relatedProjects.length > 0 && (
        <section className="py-20 px-6 bg-surface-bg-alt">
          <div className="max-w-[1200px] mx-auto">
            <FadeIn>
              <SectionLabel>Explore More</SectionLabel>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tighter mb-10">
                Similar{" "}
                <span className="font-display italic text-brand-orange font-semibold">
                  Projects
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {relatedProjects.map((relatedProject) => (
                  <Link
                    key={relatedProject.slug}
                    href={`/projects/${relatedProject.slug}`}
                    className="block group"
                  >
                    <div className="p-7 rounded-[20px] bg-white border border-black/[0.08] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-lg">
                      <h3 className="text-xl font-bold mb-2.5 group-hover:text-brand-orange transition-colors duration-300">
                        {relatedProject.title}
                      </h3>
                      <p className="text-content-secondary mb-5 line-clamp-2 text-sm leading-relaxed">
                        {relatedProject.desc}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {relatedProject.tags.slice(0, 3).map((tag) => (
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

      {/* ═══════════ Related Blog Posts ═══════════ */}
      {relatedBlogPosts.length > 0 && (
        <section className="py-20 px-6 bg-surface-bg">
          <div className="max-w-[1200px] mx-auto">
            <FadeIn>
              <SectionLabel>Read More</SectionLabel>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tighter mb-10">
                Related{" "}
                <span className="font-display italic text-brand-orange font-semibold">
                  Articles
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {relatedBlogPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="block group"
                  >
                    <div className="p-7 rounded-[20px] bg-white border border-black/[0.08] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <Tag>{post.category}</Tag>
                        <span className="flex items-center gap-1 text-xs text-content-muted">
                          <Clock size={12} />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-brand-orange transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-sm text-content-secondary mb-4 line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <span className="flex items-center gap-1.5 text-brand-orange text-sm font-semibold">
                        Read Article{" "}
                        <ArrowUpRight
                          size={14}
                          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                        />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ═══════════ CTA ═══════════ */}
      <section className="py-24 px-6 bg-surface-dark">
        <div className="max-w-[800px] mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tighter mb-5 text-content-light">
              Interested in a{" "}
              <span className="font-display italic text-brand-orange font-semibold">
                similar project?
              </span>
            </h2>
            <p className="text-white/[0.5] mb-10 max-w-lg mx-auto leading-relaxed">
              Let&apos;s discuss how we can build something great together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-orange text-white rounded-full text-[15px] font-semibold hover:bg-brand-orange-light transition-all duration-300 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(232,81,26,0.25)] hover:shadow-[0_8px_30px_rgba(232,81,26,0.35)]"
            >
              Start a Conversation <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}