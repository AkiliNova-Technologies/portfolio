interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-2.5 mb-2">
      <div className="w-7 h-0.5 bg-brand-orange rounded-sm" />
      <span className="text-xs font-semibold tracking-[0.1em] uppercase text-brand-orange font-sans">
        {children}
      </span>
    </div>
  );
}
