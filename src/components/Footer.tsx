import { Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-6 bg-[#111111] border-t border-white/[0.05]">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center flex-wrap gap-5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-brand-orange flex items-center justify-center">
            <Terminal size={16} color="white" />
          </div>
          <span className="text-lg font-bold text-content-light tracking-tight">
            dev<span className="text-brand-orange">.</span>folio
          </span>
        </div>
        <p className="text-xs text-content-muted">
          © 2026 dev.folio — Engineered with precision.
        </p>
      </div>
    </footer>
  );
}
