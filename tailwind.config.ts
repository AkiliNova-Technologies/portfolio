import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#E8511A",
          "orange-light": "#FF6B35",
          "orange-tint": "rgba(232,81,26,0.08)",
          "orange-tint2": "rgba(232,81,26,0.15)",
        },
        surface: {
          bg: "#F7F5F2",
          "bg-alt": "#EDEAE5",
          dark: "#1A1A1A",
          "dark-card": "#242424",
          "dark-card-hover": "#2E2E2E",
        },
        content: {
          primary: "#1A1A1A",
          secondary: "#5A5A5A",
          muted: "#9A9A9A",
          light: "#F7F5F2",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        display: ["var(--font-playfair)", "serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-33.333%)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "bar-fill": {
          "0%": { width: "0%" },
          "100%": { width: "var(--bar-width)" },
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        "fade-in-up": "fade-in-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "slide-in": "slide-in 0.3s ease-out forwards",
        pulse: "pulse 2s infinite",
        "bar-fill": "bar-fill 1.2s cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
