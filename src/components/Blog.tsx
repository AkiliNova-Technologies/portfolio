import { ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";
import { Tag } from "./Tag";
import Link from "next/link";

export function Blog() {
  return (
    <section id="blog" className="py-24 px-6 bg-surface-bg">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <SectionLabel>Insights</SectionLabel>
          <div className="flex justify-between items-end mb-14 flex-wrap gap-5">
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tighter">
              From My{" "}
              <span className="font-display italic text-brand-orange font-semibold">
                Blog
              </span>
            </h2>
            <Link href="/blog">
              <span className="flex items-center gap-2 text-brand-orange text-[15px] font-semibold cursor-pointer hover:gap-3 transition-all duration-300">
                View All Posts <ArrowRight size={18} />
              </span>
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {BLOG_POSTS.slice(0, 3).map((post, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <Link href={`/blog/${post.slug}`} className="block group h-full">
                <div className="h-full p-7 rounded-[20px] bg-white border border-black/[0.08] cursor-pointer flex flex-col justify-between min-h-[240px] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-lg">
                  <div>
                    <div className="flex justify-between items-center mb-5">
                      <Tag>{post.tag}</Tag>
                      <span className="text-xs text-content-muted font-medium">
                        {post.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 leading-snug line-clamp-2 group-hover:text-brand-orange transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-sm text-content-secondary leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="mt-5 flex items-center gap-1.5 text-brand-orange text-sm font-semibold">
                    Read Article{" "}
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}