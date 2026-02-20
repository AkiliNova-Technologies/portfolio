import { Zap } from "lucide-react";
import { MARQUEE_ITEMS } from "@/lib/data";

export function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="bg-surface-dark py-[18px] overflow-hidden relative">
      <div className="flex gap-12 animate-marquee w-max">
        {items.map((item, i) => (
          <span
            key={i}
            className="text-[15px] font-medium text-content-light whitespace-nowrap flex items-center gap-4"
          >
            {item}
            <Zap size={14} className="text-brand-orange" />
          </span>
        ))}
      </div>
    </div>
  );
}
