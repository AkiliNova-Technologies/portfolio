"use client";

import { Info, Lightbulb, AlertTriangle } from "lucide-react";
import type { ContentBlock } from "@/lib/data";

const CALLOUT_STYLES = {
  info: {
    bg: "bg-blue-50 border-blue-200",
    icon: <Info size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />,
    text: "text-blue-900",
  },
  tip: {
    bg: "bg-brand-orange-tint border-brand-orange-tint2",
    icon: (
      <Lightbulb
        size={18}
        className="text-brand-orange flex-shrink-0 mt-0.5"
      />
    ),
    text: "text-content-primary",
  },
  warning: {
    bg: "bg-amber-50 border-amber-200",
    icon: (
      <AlertTriangle
        size={18}
        className="text-amber-600 flex-shrink-0 mt-0.5"
      />
    ),
    text: "text-amber-900",
  },
};

function BlockRenderer({ block, index }: { block: ContentBlock; index: number }) {
  switch (block.type) {
    case "heading":
      return (
        <h2
          className={`text-2xl font-bold text-content-primary tracking-tight ${
            index === 0 ? "mt-0" : "mt-12"
          } mb-5`}
        >
          {block.content}
        </h2>
      );

    case "paragraph":
      return (
        <p className="text-content-secondary text-[16px] leading-[1.85] mb-6">
          {block.content}
        </p>
      );

    case "list": {
      const ListTag = block.ordered ? "ol" : "ul";
      return (
        <ListTag
          className={`mb-6 flex flex-col gap-2.5 ${
            block.ordered ? "list-none" : "list-none"
          }`}
        >
          {block.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              {block.ordered ? (
                <span className="text-sm font-bold text-brand-orange min-w-[24px] mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
              ) : (
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
              )}
              <span className="text-content-secondary text-[15px] leading-[1.75]">
                {item}
              </span>
            </li>
          ))}
        </ListTag>
      );
    }

    case "code":
      return (
        <div className="mb-8 rounded-2xl overflow-hidden border border-black/[0.08]">
          {/* Code header */}
          <div className="flex items-center justify-between px-5 py-3 bg-surface-dark border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <span className="w-3 h-3 rounded-full bg-green-400/80" />
              </div>
              {block.language && (
                <span className="ml-3 text-xs font-medium text-white/40 uppercase tracking-wider">
                  {block.language}
                </span>
              )}
            </div>
          </div>
          {/* Code body */}
          <pre className="p-5 bg-[#1E1E1E] overflow-x-auto">
            <code className="text-[13px] leading-[1.7] text-[#D4D4D4] font-mono whitespace-pre">
              {block.content}
            </code>
          </pre>
        </div>
      );

    case "callout": {
      const variant = block.variant || "info";
      const style = CALLOUT_STYLES[variant];
      return (
        <div
          className={`flex gap-3.5 p-5 rounded-xl border mb-6 ${style.bg}`}
        >
          {style.icon}
          <p className={`text-[15px] leading-[1.75] ${style.text}`}>
            {block.content}
          </p>
        </div>
      );
    }

    case "quote":
      return (
        <blockquote className="mb-6 pl-5 border-l-[3px] border-brand-orange py-1">
          <p className="text-content-secondary text-[16px] leading-[1.85] italic">
            {block.content}
          </p>
        </blockquote>
      );

    case "divider":
      return (
        <div className="my-10 flex items-center gap-4">
          <div className="flex-1 h-px bg-black/[0.08]" />
          <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
          <div className="flex-1 h-px bg-black/[0.08]" />
        </div>
      );

    default:
      return null;
  }
}

export function BlogContent({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="max-w-none">
      {blocks.map((block, index) => (
        <BlockRenderer key={index} block={block} index={index} />
      ))}
    </div>
  );
}