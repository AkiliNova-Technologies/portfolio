"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Terminal, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = useCallback(
    (link: (typeof NAV_LINKS)[number]) => {
      setMenuOpen(false);

      // If we're on the homepage and the link has a section, smooth‑scroll
      if (isHomePage && link.sectionId) {
        const el = document.getElementById(link.sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }

      // Otherwise use Next.js navigation
      router.push(link.href);
    },
    [isHomePage, router]
  );

  const handleContactClick = useCallback(() => {
    setMenuOpen(false);

    if (isHomePage) {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    router.push("/#contact");
  }, [isHomePage, router]);

  const handleLogoClick = useCallback(() => {
    setMenuOpen(false);

    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    router.push("/");
  }, [isHomePage, router]);

  /** Determine if a nav link is "active" */
  const isActive = (link: (typeof NAV_LINKS)[number]) => {
    // Exact match for standalone pages
    if (link.href === "/projects" && pathname.startsWith("/projects"))
      return true;
    if (link.href === "/blog" && pathname.startsWith("/blog")) return true;
    if (link.href === "/" && pathname === "/") return true;
    return false;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-400 ${
        scrolled
          ? "py-3.5 bg-surface-bg/[0.92] backdrop-blur-xl border-b border-black/[0.08]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
        {/* ── Logo ── */}
        <div
          className="flex items-center gap-2.5 cursor-pointer"
          onClick={handleLogoClick}
        >
          <div className="w-9 h-9 rounded-[10px] bg-brand-orange flex items-center justify-center">
            <Terminal size={18} color="white" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            dev<span className="text-brand-orange">.</span>folio
          </span>
        </div>

        {/* ── Desktop Links ── */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link)}
              className={`text-sm font-medium transition-colors duration-300 bg-transparent border-none cursor-pointer relative ${
                isActive(link)
                  ? "text-brand-orange"
                  : "text-content-secondary hover:text-brand-orange"
              }`}
            >
              {link.label}
              {/* Active indicator dot */}
              {isActive(link) && (
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-1 rounded-full bg-brand-orange" />
              )}
            </button>
          ))}

          <button
            onClick={handleContactClick}
            className="px-6 py-2.5 bg-brand-orange text-white rounded-full text-sm font-semibold hover:bg-brand-orange-light transition-all duration-300 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(232,81,26,0.25)] hover:shadow-[0_8px_30px_rgba(232,81,26,0.35)]"
          >
            Contact Me
          </button>
        </div>

        {/* ── Mobile Toggle ── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden bg-transparent border-none cursor-pointer text-content-primary"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-[68px] bg-black/20 backdrop-blur-sm lg:hidden z-[-1]"
            onClick={() => setMenuOpen(false)}
          />

          <div className="lg:hidden px-6 pt-5 pb-6 flex flex-col gap-1 bg-surface-bg border-t border-black/[0.06] animate-slide-in">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                className={`text-left text-base font-medium transition-all duration-300 bg-transparent border-none cursor-pointer rounded-xl px-4 py-3 ${
                  isActive(link)
                    ? "text-brand-orange bg-brand-orange-tint"
                    : "text-content-secondary hover:text-brand-orange hover:bg-black/[0.03]"
                }`}
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={handleContactClick}
              className="mt-3 px-6 py-3 bg-brand-orange text-white rounded-full text-sm font-semibold w-full hover:bg-brand-orange-light transition-colors shadow-[0_4px_20px_rgba(232,81,26,0.25)]"
            >
              Contact Me
            </button>
          </div>
        </>
      )}
    </nav>
  );
}