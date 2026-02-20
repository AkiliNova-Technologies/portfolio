# dev.folio — Portfolio Website

A modern, responsive portfolio website built with **Next.js 15**, **TailwindCSS**, **TypeScript**, and **Lucide Icons**.

## Features

- 🎨 Vibrant orange accent design system with dark/light sections
- ✨ Scroll-triggered fade-in animations
- 📱 Fully responsive (mobile, tablet, desktop)
- 🚀 Marquee banner with smooth infinite scroll
- 🎯 Accordion-style services section
- 📊 Animated skill progress bars
- 🖼️ Hover-to-dark project cards
- 📝 Blog section
- 📬 Contact form with styled inputs
- 🌾 Subtle grain texture overlay
- ⚡ Built with Next.js App Router & Server Components

## Quick Start

### Prerequisites
- **Node.js 18.17+** (recommended: 20+)
- **npm** or **yarn** or **pnpm**

### Setup

```bash
# 1. Navigate to the project folder
cd portfolio-site

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio-site/
├── src/
│   ├── app/
│   │   ├── globals.css       # Tailwind + custom styles
│   │   ├── layout.tsx        # Root layout with fonts & metadata
│   │   └── page.tsx          # Main page (assembles all sections)
│   ├── components/
│   │   ├── Navbar.tsx        # Fixed navigation bar
│   │   ├── Hero.tsx          # Hero section with CTAs
│   │   ├── Marquee.tsx       # Scrolling text banner
│   │   ├── Services.tsx      # Accordion services list
│   │   ├── Skills.tsx        # Skills with progress bars
│   │   ├── Projects.tsx      # Project cards with hover effects
│   │   ├── Philosophy.tsx    # Work philosophy section
│   │   ├── Blog.tsx          # Blog posts grid
│   │   ├── Contact.tsx       # Contact form & info
│   │   ├── Footer.tsx        # Footer
│   │   ├── FadeIn.tsx        # Scroll animation wrapper
│   │   ├── SectionLabel.tsx  # Section header label
│   │   ├── Tag.tsx           # Tag/pill component
│   │   └── index.ts          # Barrel exports
│   └── lib/
│       ├── data.ts           # All content data & types
│       └── hooks.ts          # Custom hooks (useInView)
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── next.config.ts
└── package.json
```

## Customization

- **Content**: Edit `src/lib/data.ts` to update all text, services, skills, projects, and blog posts
- **Colors**: Modify `tailwind.config.ts` under `theme.extend.colors`
- **Fonts**: Change fonts in `src/app/layout.tsx`
- **Sections**: Each section is a standalone component in `src/components/`

## Tech Stack

- [Next.js 15](https://nextjs.org/) — React framework
- [TailwindCSS 3](https://tailwindcss.com/) — Utility-first CSS
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Lucide React](https://lucide.dev/) — Icon library
