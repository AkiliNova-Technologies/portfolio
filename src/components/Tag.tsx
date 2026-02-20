interface TagProps {
  children: React.ReactNode;
  dark?: boolean;
}

export function Tag({ children, dark = false }: TagProps) {
  return (
    <span
      className={`inline-block px-3.5 py-1 rounded-full text-xs font-medium font-sans border ${
        dark
          ? "bg-white/[0.08] text-white/70 border-white/[0.06]"
          : "bg-brand-orange-tint text-brand-orange border-brand-orange-tint2"
      }`}
    >
      {children}
    </span>
  );
}
