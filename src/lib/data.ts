import {
  Globe,
  Server,
  FileCode,
  Layout,
  Gauge,
  ShoppingCart,
  Building2,
  Monitor,
  Workflow,
  GraduationCap,
  Smartphone,
} from "lucide-react";
import { type ReactNode } from "react";

/* ─── Nav Links ─── */
export const NAV_LINKS = [
  { label: "Home", href: "/", sectionId: "home" },
  { label: "Services", href: "/#services", sectionId: "services" },
  { label: "Skills", href: "/#skills", sectionId: "skills" },
  { label: "Projects", href: "/projects", sectionId: "projects" },
  { label: "Philosophy", href: "/#philosophy", sectionId: "philosophy" },
  { label: "Blog", href: "/blog", sectionId: "blog" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];

/* ─── Services ─── */
export interface Service {
  num: string;
  title: string;
  desc: string;
  tags: string[];
  iconName: string;
}

export const SERVICES: Service[] = [
  {
    num: "01",
    title: "Custom Platform Development",
    desc: "End-to-end development of web platforms tailored to operational or business-specific needs.",
    tags: ["Full-Stack", "Next.js", "PostgreSQL", "Prisma"],
    iconName: "Globe",
  },
  {
    num: "02",
    title: "Backend Architecture",
    desc: "Designing robust APIs and database structures to support scalable and secure software systems.",
    tags: ["REST APIs", "Node.js", "Express", "Auth Systems"],
    iconName: "Server",
  },
  {
    num: "03",
    title: "CMS Development",
    desc: "Custom content management systems for managing blogs, portfolios, events, testimonials, and digital assets.",
    tags: ["Headless CMS", "Admin Panels", "CRUD", "Media"],
    iconName: "FileCode",
  },
  {
    num: "04",
    title: "Dashboard & Admin Tools",
    desc: "Internal management platforms for monitoring, analytics, and operational workflows.",
    tags: ["Charts", "Analytics", "Role-Based", "Real-time"],
    iconName: "Layout",
  },
  {
    num: "05",
    title: "Performance & SEO Optimization",
    desc: "Improving web applications for speed, discoverability, and user experience.",
    tags: ["Core Web Vitals", "SSR", "Caching", "Lighthouse"],
    iconName: "Gauge",
  },
];

/* ─── Skills ─── */
export const SKILLS_ENGINEERING = [
  "Full Stack Web Development",
  "Backend API Architecture",
  "Database Design & Optimization",
  "Platform & CMS Development",
  "RESTful Service Engineering",
  "Authentication & Role Systems",
  "State Management Architecture",
  "Performance Optimization",
];

export interface TechSkill {
  name: string;
  level: number;
}

export const SKILLS_TECH: TechSkill[] = [
  { name: "TypeScript", level: 95 },
  { name: "JavaScript", level: 95 },
  { name: "React.js", level: 92 },
  { name: "Next.js", level: 90 },
  { name: "Node.js", level: 90 },
  { name: "Express.js", level: 88 },
  { name: "PostgreSQL", level: 85 },
  { name: "MongoDB", level: 82 },
  { name: "Prisma ORM", level: 88 },
  { name: "Redux Toolkit", level: 80 },
  { name: "TailwindCSS", level: 92 },
  { name: "Git", level: 90 },
];

export const ENGINEERING_PRACTICES = [
  "MVC Architecture",
  "Service-Controller Pattern",
  "Component Driven UI",
  "Clean Code Principles",
  "Scalable Folder Structures",
  "API-First Development",
  "Modular Design",
  "SEO-Focused Web Engineering",
];

/* ─── Project ─── */

export interface Project {
  slug: string;
  title: string;
  desc: string;
  longDescription: string;
  challenge: string;
  solution: string;
  results: string[];
  tags: string[];
  iconName: string;
  category: string;
  year: string;
  client?: string;
  role: string;
  duration: string;
  features: string[];
  techStack: {
    frontend: string[];
    backend: string[];
    database: string[];
    devops: string[];
  };
  links?: {
    live?: string;
    github?: string;
    caseStudy?: string;
  };
  images: {
    main: string;
    gallery?: string[];
  };
  relatedBlogPosts?: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    desc: "Full-stack marketplace with payment integration, inventory management, and real-time order tracking.",
    longDescription:
      "A comprehensive e-commerce solution built for a growing retail chain needing to transition from physical stores to digital presence. The platform handles thousands of products, real-time inventory across multiple warehouses, and processes hundreds of orders daily with 99.9% uptime.",
    challenge:
      "The client operated 15 physical stores with separate inventory systems. They needed a unified platform that could show real-time availability across all locations, handle online payments, and integrate with their existing POS systems. The main challenge was syncing inventory across stores and the website without overselling.",
    solution:
      "We built a microservices-based architecture with a central inventory service that aggregates stock from all stores. The system uses Redis for real-time inventory caching, webhooks for POS integration, and a queue system for order processing to prevent race conditions during high-traffic events like flash sales.",
    results: [
      "300% increase in online revenue within 6 months",
      "Zero overselling incidents since launch",
      "99.9% uptime during Black Friday sales (10,000+ orders)",
      "Reduced inventory reconciliation time from 4 hours to 15 minutes daily",
      "Successfully onboarded 50,000+ active users",
    ],
    tags: [
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Stripe",
      "Redis",
      "Microservices",
    ],
    iconName: "ShoppingCart",
    category: "E-Commerce",
    year: "2024",
    client: "RetailPlus (confidential)",
    role: "Lead Full-Stack Engineer",
    duration: "8 months",
    features: [
      "Real-time inventory across 15+ store locations",
      "Multi-vendor marketplace capabilities",
      "Automated tax calculation based on location",
      "Smart shipping rate calculator",
      "Customer order tracking portal",
      "Admin dashboard with sales analytics",
      "Bulk product import/export via CSV",
      "Automated email notifications at order milestones",
    ],
    techStack: {
      frontend: [
        "Next.js 14",
        "TypeScript",
        "TailwindCSS",
        "Redux Toolkit",
        "React Query",
      ],
      backend: [
        "Node.js",
        "Express",
        "GraphQL",
        "BullMQ (Queue)",
        "Stripe API",
      ],
      database: ["PostgreSQL", "Redis", "Prisma ORM"],
      devops: ["AWS (EC2, RDS, S3)", "Docker", "GitHub Actions", "Nginx"],
    },
    links: {
      live: "https://ecommerce-demo.example.com",
      github: "https://github.com/yourusername/ecommerce-platform",
      caseStudy: "/case-studies/ecommerce-platform",
    },
    images: {
      main: "/projects/ecommerce/main.jpg",
      gallery: [
        "/projects/ecommerce/dashboard.jpg",
        "/projects/ecommerce/product-page.jpg",
        "/projects/ecommerce/checkout.jpg",
        "/projects/ecommerce/admin.jpg",
      ],
    },
    relatedBlogPosts: ["api-first-development", "scalable-database-design"],
  },
  {
    slug: "property-management-system",
    title: "Property Management System",
    desc: "End-to-end platform for property listings, tenant management, and automated lease workflows.",
    longDescription:
      "A comprehensive property management solution for real estate agencies and landlords. The platform streamlines the entire property lifecycle from listing and showing to lease signing and monthly rent collection.",
    challenge:
      "Property managers were juggling Excel spreadsheets, paper leases, and multiple apps for listings, maintenance requests, and accounting. They needed a single source of truth that could handle complex workflows while being intuitive enough for non-technical staff.",
    solution:
      "We developed a modular platform with distinct portals for property managers, tenants, and maintenance staff. The system automates lease reminders, maintenance ticket routing, and rent collection. A document management system stores all leases and agreements with version history and e-signature integration.",
    results: [
      "75% reduction in time spent on administrative tasks",
      "Rent collection rate improved from 92% to 99%",
      "Maintenance request resolution time cut by 60%",
      "Zero missed lease renewals (automated reminders)",
      "Successfully managing 5,000+ residential units",
    ],
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe", "AWS"],
    iconName: "Building2",
    category: "Real Estate",
    year: "2023",
    client: "Citywide Properties",
    role: "Senior Software Engineer",
    duration: "10 months",
    features: [
      "Interactive property listing with virtual tours",
      "Tenant screening and credit check integration",
      "Automated rent collection and receipt generation",
      "Maintenance request portal with photo uploads",
      "Lease generation with e-signature (DocuSign)",
      "Financial reporting and tax preparation exports",
      "Multi-currency support for international properties",
      "Mobile app for tenants and maintenance staff",
    ],
    techStack: {
      frontend: [
        "React 18",
        "TypeScript",
        "Material-UI",
        "Redux Toolkit",
        "Mapbox",
      ],
      backend: ["Node.js", "Express", "REST API", "JWT", "Bull (Queue)"],
      database: ["MongoDB", "Redis", "Mongoose"],
      devops: ["AWS (Elastic Beanstalk)", "MongoDB Atlas", "CloudFront", "S3"],
    },
    links: {
      live: "https://property-demo.example.com",
      github: "https://github.com/yourusername/property-management",
    },
    images: {
      main: "/projects/property/main.jpg",
      gallery: [
        "/projects/property/dashboard.jpg",
        "/projects/property/listings.jpg",
        "/projects/property/tenant-portal.jpg",
      ],
    },
    relatedBlogPosts: ["platform-engineering-essentials", "database-design"],
  },
  {
    slug: "cms-portfolio-platform",
    title: "Portfolio CMS Website",
    desc: "Dynamic content management system enabling non-technical users to manage their digital presence.",
    longDescription:
      "A headless CMS platform designed specifically for creative professionals — photographers, designers, and artists — who need beautiful portfolios without technical complexity.",
    challenge:
      "Creative professionals want full control over their portfolio presentation but lack technical skills. Existing solutions were either too restrictive (Squarespace) or required coding knowledge (WordPress). They needed something in between: customizable but manageable.",
    solution:
      "We built a Next.js frontend with a custom CMS backend that uses visual editing. Users can drag-and-drop sections, update content in real-time, and see changes instantly. The system includes smart image optimization for fast loading while maintaining visual quality.",
    results: [
      "200+ active portfolios launched in first 3 months",
      "Average user spends 15 minutes setting up their site",
      "99% of users never need support to make updates",
      "Sites load in under 1.5 seconds (99th percentile)",
      "Featured in two design publications",
    ],
    tags: ["Next.js", "Prisma", "TailwindCSS", "NextAuth", "PostgreSQL", "AWS"],
    iconName: "Monitor",
    category: "Content Management",
    year: "2024",
    role: "Lead Developer & Architect",
    duration: "6 months",
    features: [
      "Visual drag-and-drop page builder",
      "Real-time content preview",
      "Automatic image optimization and CDN delivery",
      "SEO optimization tools with meta tag editor",
      "Password-protected portfolio sections",
      "Client proofing galleries with feedback tools",
      "Blog engine with markdown support",
      "Custom domain support with SSL automation",
    ],
    techStack: {
      frontend: [
        "Next.js 14",
        "TypeScript",
        "TailwindCSS",
        "Framer Motion",
        "React DnD",
      ],
      backend: ["Next.js API Routes", "NextAuth.js", "Resend (email)"],
      database: ["PostgreSQL", "Prisma", "Neon (Serverless Postgres)"],
      devops: ["Vercel", "AWS S3", "CloudFront", "GitHub Actions"],
    },
    links: {
      live: "https://cms-demo.example.com",
      github: "https://github.com/yourusername/portfolio-cms",
    },
    images: {
      main: "/projects/cms/main.jpg",
      gallery: [
        "/projects/cms/editor.jpg",
        "/projects/cms/templates.jpg",
        "/projects/cms/analytics.jpg",
      ],
    },
    relatedBlogPosts: ["custom-cms-vs-off-shelf", "type-safety-full-stack"],
  },
  {
    slug: "enterprise-workflow-manager",
    title: "Task & Workflow Manager",
    desc: "Enterprise project management tool with role-based access, Kanban boards, and analytics dashboards.",
    longDescription:
      "A comprehensive workflow management system for a logistics company with 500+ employees across multiple locations. The platform replaces disparate spreadsheets and email chains with a centralized task management and approval system.",
    challenge:
      "The client had no visibility into cross-departmental workflows. Approvals took weeks, task ownership was unclear, and bottlenecks went unnoticed until they caused delays. They needed a system that could model their complex approval hierarchies while being simple enough for daily use.",
    solution:
      "We created a flexible workflow engine that lets administrators define custom approval chains. Tasks automatically route based on type, value, and department. Real-time dashboards show bottlenecks, and automated reminders prevent tasks from getting stuck.",
    results: [
      "Average approval time reduced from 5 days to 4 hours",
      "Task completion rate increased by 85%",
      "Department leaders save 10+ hours/week on status meetings",
      "Zero tasks lost in email (all communication in platform)",
      "ROI achieved within 3 months of deployment",
    ],
    tags: [
      "TypeScript",
      "Redux",
      "Express",
      "PostgreSQL",
      "WebSocket",
      "Redis",
    ],
    iconName: "Workflow",
    category: "Enterprise Software",
    year: "2023",
    client: "LogiFreight (confidential)",
    role: "Technical Lead",
    duration: "12 months",
    features: [
      "Custom workflow builder with visual editor",
      "Role-based access control with 10+ permission levels",
      "Real-time task updates via WebSocket",
      "Gantt charts and timeline views",
      "Automated SLA tracking and alerts",
      "Audit logs for compliance requirements",
      "API for integration with existing ERP",
      "Mobile-optimized interface for field workers",
    ],
    techStack: {
      frontend: [
        "React",
        "TypeScript",
        "Redux Toolkit",
        "TailwindCSS",
        "Socket.io-client",
      ],
      backend: ["Node.js", "Express", "Socket.io", "JWT", "Bull (Queue)"],
      database: ["PostgreSQL", "Redis", "Prisma"],
      devops: ["AWS ECS", "RDS", "ElastiCache", "CloudWatch", "Terraform"],
    },
    links: {
      caseStudy: "/case-studies/workflow-manager",
    },
    images: {
      main: "/projects/workflow/main.jpg",
      gallery: [
        "/projects/workflow/board.jpg",
        "/projects/workflow/analytics.jpg",
        "/projects/workflow/workflow-builder.jpg",
      ],
    },
    relatedBlogPosts: [
      "platform-engineering-essentials",
      "scalable-database-design",
    ],
  },
  {
    slug: "student-learning-platform",
    title: "Student Learning Platform",
    desc: "Educational platform with course management, progress tracking, and interactive assessment modules.",
    longDescription:
      "An online learning platform for a vocational training institute transitioning from in-person to hybrid education. The platform hosts 50+ courses, tracks student progress, and provides interactive assessments with automatic grading.",
    challenge:
      "The institute needed to maintain their hands-on teaching approach in a digital format. Students needed practical exercises, instructors needed visibility into student struggles, and administrators needed enrollment and payment management — all in one platform.",
    solution:
      "We built a React-based learning platform with video lessons, downloadable resources, and interactive coding challenges. The system tracks student progress at a granular level, alerting instructors when students fall behind. Discussion forums and live chat enable peer support.",
    results: [
      "Successfully transitioned 3,000+ students to online learning",
      "Course completion rate increased from 65% to 82%",
      "Instructors save 15 hours/week on grading (auto-graded assignments)",
      "Student satisfaction score: 4.8/5",
      "Platform handles 50,000+ concurrent users during peak hours",
    ],
    tags: ["React", "Node.js", "MongoDB", "WebSocket", "Express", "Redux"],
    iconName: "GraduationCap",
    category: "EdTech",
    year: "2023",
    client: "TechSkills Institute",
    role: "Full-Stack Developer",
    duration: "9 months",
    features: [
      "Video streaming with progress tracking",
      "Interactive code playground for programming courses",
      "Automated assignment grading with feedback",
      "Live chat and discussion forums",
      "Certificate generation upon completion",
      "Admin dashboard with cohort analytics",
      "Payment processing for course enrollment",
      "Mobile-responsive design for on-the-go learning",
    ],
    techStack: {
      frontend: [
        "React",
        "TypeScript",
        "Redux Toolkit",
        "TailwindCSS",
        "Video.js",
      ],
      backend: ["Node.js", "Express", "Socket.io", "JWT", "Mux (Video API)"],
      database: ["MongoDB", "Mongoose", "Redis"],
      devops: ["AWS EC2", "MongoDB Atlas", "CloudFront", "Docker", "Nginx"],
    },
    links: {
      live: "https://learning-demo.example.com",
      github: "https://github.com/yourusername/learning-platform",
    },
    images: {
      main: "/projects/learning/main.jpg",
      gallery: [
        "/projects/learning/course-view.jpg",
        "/projects/learning/assessment.jpg",
        "/projects/learning/dashboard.jpg",
      ],
    },
    relatedBlogPosts: ["type-safety-full-stack", "nextjs-folder-structures"],
  },
  {
    slug: "iot-device-control",
    title: "IoT Device-Controlled Application",
    desc: "IoT-integrated web application for monitoring and controlling connected devices remotely.",
    longDescription:
      "A real-time IoT platform for a smart building solutions company. The platform monitors thousands of sensors across commercial buildings, controlling HVAC, lighting, and security systems based on occupancy and time of day.",
    challenge:
      "Building managers had no visibility into energy usage or equipment performance. Issues were reported by tenants (too hot, lights out) rather than detected proactively. The client needed a system that could collect sensor data, analyze patterns, and automate responses.",
    solution:
      "We developed a Next.js dashboard that connects to MQTT brokers receiving sensor data. Real-time updates show building status, and automated rules adjust settings based on occupancy. Historical data helps identify optimization opportunities and predict maintenance needs.",
    results: [
      "Energy costs reduced by 28% through smart automation",
      "Preventive maintenance alerts reduced emergency repairs by 65%",
      "Tenant complaints dropped by 80%",
      "System handles 1M+ messages daily from 5,000+ devices",
      "Payback period: 14 months",
    ],
    tags: ["Next.js", "MQTT", "PostgreSQL", "WebSocket", "D3.js", "InfluxDB"],
    iconName: "Smartphone",
    category: "IoT",
    year: "2024",
    client: "SmartBuild Technologies",
    role: "Lead IoT Engineer",
    duration: "10 months",
    features: [
      "Real-time sensor data visualization",
      "Automated rule engine for device control",
      "Predictive maintenance alerts",
      "Energy consumption analytics",
      "Tenant portal for comfort preferences",
      "Mobile app for facility managers",
      "Historical data export for reporting",
      "Alert system for critical events",
    ],
    techStack: {
      frontend: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "D3.js",
        "Socket.io-client",
      ],
      backend: ["Node.js", "Express", "MQTT.js", "WebSocket", "InfluxDB"],
      database: ["PostgreSQL", "InfluxDB (Time-series)", "Redis"],
      devops: ["AWS IoT Core", "EC2", "RDS", "Docker", "Grafana"],
    },
    links: {
      live: "https://iot-demo.example.com",
      github: "https://github.com/yourusername/iot-platform",
    },
    images: {
      main: "/projects/iot/main.jpg",
      gallery: [
        "/projects/iot/dashboard.jpg",
        "/projects/iot/analytics.jpg",
        "/projects/iot/device-map.jpg",
      ],
    },
    relatedBlogPosts: [
      "scalable-database-design",
      "platform-engineering-essentials",
    ],
  },
];

// Helper function to get project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

// Helper function to get related projects (by category or tags)
export function getRelatedProjects(
  currentSlug: string,
  limit: number = 3,
): Project[] {
  const current = getProjectBySlug(currentSlug);
  if (!current) return [];

  return PROJECTS.filter((p) => p.slug !== currentSlug)
    .filter(
      (p) =>
        p.category === current.category ||
        p.tags.some((tag) => current.tags.includes(tag)),
    )
    .slice(0, limit);
}

/* ─── Blog ─── */

export interface ContentBlock {
  type:
    | "heading"
    | "paragraph"
    | "list"
    | "code"
    | "callout"
    | "quote"
    | "divider";
  content: string;
  language?: string; // for code blocks
  items?: string[]; // for lists
  variant?: "info" | "warning" | "tip"; // for callouts
  ordered?: boolean; // for lists
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  blocks: ContentBlock[];
  date: string;
  readTime: string;
  category: string;
  tag: string;
  tags: string[];
  image: string;
  author: {
    name: string;
    role: string;
  };
  relatedProjects?: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "api-first-development",
    title: "Why API-First Development Changes Everything",
    excerpt:
      "Exploring how designing your API before your UI leads to more scalable, maintainable systems that teams actually love to work with.",
    blocks: [
      {
        type: "heading",
        content: "The Traditional Approach vs API-First",
      },
      {
        type: "paragraph",
        content:
          "In traditional development, APIs often become an afterthought — something you build because the frontend needs data. This approach leads to inconsistent endpoints, poor documentation, and APIs that don't serve mobile apps, third-party developers, or your own future needs well.",
      },
      {
        type: "paragraph",
        content:
          "The result is a fragile system where every new feature requires renegotiating contracts between teams, and every mobile release depends on a backend deploy. It doesn't have to be this way.",
      },
      {
        type: "heading",
        content: "What API-First Actually Means",
      },
      {
        type: "paragraph",
        content:
          "API-first development means treating your API as a first-class product. Before writing a single line of frontend code, you design, document, and prototype your API. You think deliberately about consumers, contracts, and evolution.",
      },
      {
        type: "callout",
        content:
          "API-first is not just about writing specs before code. It's a mindset shift: your API is the product, and everything else — web apps, mobile apps, third-party integrations — are consumers of that product.",
        variant: "tip",
      },
      {
        type: "paragraph",
        content: "The key questions that drive API-first design:",
      },
      {
        type: "list",
        content: "",
        items: [
          "Who will consume this API — internal teams, mobile apps, external partners?",
          "What problems are consumers trying to solve with each endpoint?",
          "How should error states, pagination, and versioning be handled consistently?",
          "What does the developer experience feel like for someone reading this documentation cold?",
        ],
      },
      {
        type: "paragraph",
        content:
          "This shift in perspective transforms how you build software. The API becomes a shared language that every team speaks fluently.",
      },
      {
        type: "heading",
        content: "The Benefits Are Real",
      },
      {
        type: "paragraph",
        content:
          "Companies that adopt API-first practices report measurable improvements across their engineering organizations. These aren't marginal gains — they fundamentally change how quickly and reliably teams can ship.",
      },
      {
        type: "list",
        content: "",
        items: [
          "40% faster development of new features due to parallel frontend/backend work",
          "Significantly fewer integration bugs because contracts are agreed upon before implementation",
          "Better developer experience for both internal and external teams consuming the API",
          "Naturally documented systems that don't require separate, always-out-of-date documentation efforts",
        ],
      },
      {
        type: "heading",
        content: "How to Start",
      },
      {
        type: "paragraph",
        content:
          "Begin with OpenAPI (formerly Swagger) specifications. Design your endpoints, request/response structures, and error handling before writing any implementation code. This feels slow at first, but it eliminates the rework cycles that eat weeks later.",
      },
      {
        type: "code",
        language: "yaml",
        content: `# openapi.yaml — design your contract first
openapi: 3.0.3
info:
  title: Products API
  version: 1.0.0

paths:
  /products:
    get:
      summary: List all products
      parameters:
        - name: page
          in: query
          schema:
            type: integer
            default: 1
        - name: limit
          in: query
          schema:
            type: integer
            default: 20
      responses:
        '200':
          description: Paginated product list
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ProductList'`,
      },
      {
        type: "paragraph",
        content:
          "Tools like Postman, Stoplight, and Redocly make this collaborative and version-controlled. Frontend teams can generate mock servers from the spec and build against them immediately — no waiting for the backend to be ready.",
      },
      {
        type: "heading",
        content: "Real-World Impact",
      },
      {
        type: "paragraph",
        content:
          "When I led the migration of a legacy e-commerce platform to an API-first architecture, the transformation was dramatic. We went from 3-week feature cycles to shipping daily. Mobile and web teams could work in parallel for the first time, and our third-party integrators finally had documentation they could trust.",
      },
      {
        type: "callout",
        content:
          "The biggest win wasn't speed — it was confidence. Teams stopped being afraid to change things because contracts were explicit and tested. Breaking changes became impossible to accidentally ship.",
        variant: "info",
      },
      {
        type: "paragraph",
        content:
          "API-first isn't a silver bullet, and it does add upfront design time. But for any system that will have more than one consumer — and most systems eventually do — the investment pays for itself within the first quarter.",
      },
    ],
    date: "Jan 2025",
    readTime: "8 min read",
    category: "Architecture",
    tag: "Architecture",
    tags: ["API Design", "Architecture", "Best Practices"],
    image: "/blog/api-first.jpg",
    author: {
      name: "Albert Watbin",
      role: "Senior Software Engineer",
    },
    relatedProjects: ["scalable-ecommerce", "payment-gateway"],
  },
  {
    slug: "nextjs-folder-structures",
    title: "Building Scalable Folder Structures in Next.js",
    excerpt:
      "A practical guide to organizing large Next.js projects for team collaboration and long-term growth without the chaos.",
    blocks: [
      {
        type: "heading",
        content: "The Problem with Default Structures",
      },
      {
        type: "paragraph",
        content:
          "Every Next.js project starts clean. A few components, a couple of pages, maybe a utility file. Then features grow, pages multiply, and suddenly your components folder is a dumping ground with 87 files and no discernible organization. Sound familiar?",
      },
      {
        type: "paragraph",
        content:
          "The default Next.js starter gives you almost no opinion about project structure beyond the app/ directory. That's great for flexibility, terrible for teams that need consistency.",
      },
      {
        type: "heading",
        content: "The Feature-First Approach",
      },
      {
        type: "paragraph",
        content:
          "Instead of organizing by file type (components/, utils/, hooks/), organize by feature. Each major feature gets its own folder containing everything it needs to function. This is the single biggest structural change you can make for maintainability.",
      },
      {
        type: "code",
        language: "plaintext",
        content: `src/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   │   ├── LoginForm.tsx
│   │   │   ├── SignupForm.tsx
│   │   │   └── AuthGuard.tsx
│   │   ├── hooks/
│   │   │   └── useAuth.ts
│   │   ├── utils/
│   │   │   └── tokens.ts
│   │   ├── types/
│   │   │   └── auth.types.ts
│   │   └── index.ts
│   │
│   ├── products/
│   │   ├── components/
│   │   ├── api/
│   │   ├── hooks/
│   │   └── index.ts
│   │
│   └── dashboard/
│       ├── components/
│       ├── hooks/
│       └── index.ts`,
      },
      {
        type: "callout",
        content:
          "The key test: can you delete a feature folder and have everything related to that feature disappear cleanly? If yes, your structure is working. If deleting a folder causes cascading breakage across the codebase, your boundaries are wrong.",
        variant: "tip",
      },
      {
        type: "paragraph",
        content:
          "This approach makes features portable, testable, and — crucially — easier to delete when requirements change. No more archaeology expeditions to find every file related to a feature scattered across 8 directories.",
      },
      {
        type: "heading",
        content: "Shared Code Still Has a Home",
      },
      {
        type: "paragraph",
        content:
          "Not everything belongs to a single feature. Buttons, inputs, API clients, and generic hooks are used everywhere. These live in a shared directory with clear categories:",
      },
      {
        type: "code",
        language: "plaintext",
        content: `src/
├── shared/
│   ├── ui/          → Buttons, inputs, cards, modals
│   ├── lib/         → API clients, utilities, helpers
│   ├── hooks/       → useWindowSize, useDebounce, useInView
│   └── types/       → Global TypeScript types and interfaces`,
      },
      {
        type: "paragraph",
        content:
          "The rule of thumb: if a piece of code is used by 3+ features, it belongs in shared. If it's used by 1-2 features, keep it local to the primary feature and import where needed.",
      },
      {
        type: "heading",
        content: "The App Router Changes Everything",
      },
      {
        type: "paragraph",
        content:
          "With Next.js 13+ and the App Router, the app/ directory encourages route-based organization. Each route gets its own folder with layout.tsx, page.tsx, loading.tsx, and error.tsx. This is powerful — but it introduces a temptation.",
      },
      {
        type: "callout",
        content:
          "Don't put business logic in page files. Keep pages thin — they should compose components and pass data, nothing more. Move business logic to lib/ or hooks/, and UI to feature components.",
        variant: "warning",
      },
      {
        type: "heading",
        content: "What Works at Scale",
      },
      {
        type: "paragraph",
        content:
          "For a recent platform handling 50,000+ lines of code across 10 developers, this structure saved us measurable time and frustration:",
      },
      {
        type: "list",
        content: "",
        items: [
          '~3 hours/week previously spent on "where does this go?" discussions — eliminated',
          "New developer onboarding dropped from 2 weeks to 3 days",
          "Git history became dramatically cleaner with feature-based commits",
          "Code reviews got faster because reviewers could understand context from folder structure alone",
        ],
      },
      {
        type: "heading",
        content: "Pro Tips for the Long Haul",
      },
      {
        type: "list",
        content: "",
        ordered: true,
        items: [
          "Use barrel exports (index.ts) to clean up imports — consumers import from the feature, not from deep paths",
          "Keep file names consistent across the project. Pick a convention (ProductCard.tsx, not product-card.tsx) and enforce it",
          "Add README.md files to complex feature folders explaining the architecture decisions",
          "Resist the urge to prematurely abstract. Let patterns emerge from 3+ duplications before creating shared utilities",
          "Consider Nx or Turborepo if your project grows into a genuine monorepo with multiple packages",
        ],
      },
      {
        type: "paragraph",
        content:
          "Folder structure isn't glamorous, but it's the foundation everything else is built on. Get it right early and your future self — and every developer who joins after you — will be grateful.",
      },
    ],
    date: "Dec 2024",
    readTime: "7 min read",
    category: "Engineering",
    tag: "Engineering",
    tags: ["Next.js", "React", "Project Structure", "Scalability"],
    image: "/blog/nextjs-structure.jpg",
    author: {
      name: "Albert Watbin",
      role: "Senior Software Engineer",
    },
    relatedProjects: ["admin-dashboard", "cms-platform"],
  },
  {
    slug: "custom-cms-vs-off-shelf",
    title: "The Case for Custom CMS Over Off-the-Shelf",
    excerpt:
      "When and why building your own content management system pays off in the long run, with real metrics from actual projects.",
    blocks: [
      {
        type: "heading",
        content: "The Easy Path Isn't Always Better",
      },
      {
        type: "paragraph",
        content:
          "WordPress, Contentful, Sanity, Strapi — the CMS market is saturated with options. For many projects, these are perfect. A marketing site, a simple blog, a startup MVP — pick one and move on. But for others, off-the-shelf solutions become constraints dressed as solutions.",
      },
      {
        type: "paragraph",
        content:
          "The question isn't whether custom CMS is better. It's when custom CMS is worth the investment. And the answer is more nuanced than most teams realize.",
      },
      {
        type: "heading",
        content: "When Custom Makes Sense",
      },
      {
        type: "paragraph",
        content:
          "There are four scenarios where custom CMS development consistently proves its value. If your project matches two or more of these, it's worth serious consideration.",
      },
      {
        type: "callout",
        content:
          "Your content model is unique — Off-the-shelf platforms force your content into their mental model. If you're managing complex relationships, versioned content with approval workflows, or domain-specific structures, you'll fight the tool every single day.",
        variant: "info",
      },
      {
        type: "list",
        content: "",
        items: [
          "Deep integration needs — when content must trigger business workflows, update inventories, or interact with legacy systems, custom APIs beat generic webhooks every time",
          "Scale changes the equation — at 10,000 pages, every CMS slows down. At 100,000 pages, most break entirely. Custom solutions can be optimized for your specific data access patterns",
          "Editorial workflow complexity — when content goes through multi-stage approval, localization, A/B testing, and scheduled publishing, generic tools create more friction than they eliminate",
        ],
      },
      {
        type: "heading",
        content: "The Hidden Costs of Off-the-Shelf",
      },
      {
        type: "paragraph",
        content:
          "Beyond licensing fees (which can be substantial at scale), the real costs of off-the-shelf CMS platforms are insidious because they're invisible in quarterly budget reviews:",
      },
      {
        type: "list",
        content: "",
        items: [
          "Developer frustration with platform limitations leads to attrition — your best engineers don't want to fight tools",
          "Workarounds that solve today's problem become tomorrow's technical debt",
          "Performance tuning within black-box systems is an expensive guessing game",
          "Migration costs when you outgrow the platform can dwarf the original investment",
          "Vendor lock-in means your content, your most valuable asset, lives in someone else's data model",
        ],
      },
      {
        type: "heading",
        content: "A Real-World Example",
      },
      {
        type: "paragraph",
        content:
          "For a publishing client generating 500+ articles monthly with complex editorial workflows, we replaced their WordPress installation with a custom Node.js and React CMS. The results after 12 months were striking:",
      },
      {
        type: "list",
        content: "",
        items: [
          "Page load time dropped from 3.2s to 0.8s — a 75% improvement",
          "Editorial team saved 15 hours/week previously spent on formatting workarounds",
          "Developer velocity increased 3x for content-related features",
          "Total cost of ownership decreased 40% despite the custom build investment",
        ],
      },
      {
        type: "heading",
        content: "The Decision Framework",
      },
      {
        type: "paragraph",
        content:
          "Rather than debating build vs. buy in the abstract, use this framework to guide the decision for your specific situation.",
      },
      {
        type: "callout",
        content:
          "Build custom when content is your core product (not just marketing), you have unique editorial workflows, scale is measured in millions of views, you need real-time content updates, or integration complexity is high.",
        variant: "tip",
      },
      {
        type: "paragraph",
        content:
          "Buy off-the-shelf when you have a marketing site with standard content needs, a small team with limited engineering resources, a standard blog or portfolio, or when time-to-market matters more than long-term optimization.",
      },
      {
        type: "heading",
        content: "The Hybrid Approach",
      },
      {
        type: "paragraph",
        content:
          "Sometimes the best answer is both. Use a headless CMS like Contentful for marketing content that changes frequently and doesn't need complex logic. Build custom for product content that drives your core business and requires deep integration.",
      },
      {
        type: "paragraph",
        content:
          "Let each tool do what it does best. The key is drawing the boundary clearly and ensuring data flows between systems through well-defined APIs. This is where API-first thinking pays dividends once again.",
      },
    ],
    date: "Nov 2024",
    readTime: "10 min read",
    category: "Platforms",
    tag: "Platforms",
    tags: ["CMS", "Architecture", "Platform Engineering", "Decision Making"],
    image: "/blog/custom-cms.jpg",
    author: {
      name: "Albert Watbin",
      role: "Senior Software Engineer",
    },
    relatedProjects: ["cms-platform", "enterprise-portal"],
  },
  {
    slug: "platform-engineering-essentials",
    title:
      "Platform Engineering: Building Internal Developer Platforms That Teams Actually Use",
    excerpt:
      "The difference between a platform that accelerates development and one that becomes just another thing to work around.",
    blocks: [
      {
        type: "heading",
        content: "The Platform Trap",
      },
      {
        type: "paragraph",
        content:
          "Many organizations build internal platforms that no one uses. They invest months — sometimes years — creating beautiful dashboards and abstractions, only to find developers still provisioning resources manually and deploying through SSH.",
      },
      {
        type: "paragraph",
        content:
          "Why? Because they built what they thought developers wanted, not what developers actually needed. The gap between those two things is where platform initiatives go to die.",
      },
      {
        type: "heading",
        content: "Start With Pain Points",
      },
      {
        type: "paragraph",
        content:
          "Before writing a single line of platform code, interview 10-15 developers across different teams. Not managers — developers. The people who feel the friction daily.",
      },
      {
        type: "paragraph",
        content: "Ask three questions:",
      },
      {
        type: "list",
        content: "",
        ordered: true,
        items: [
          "What slows you down most in your day-to-day work?",
          "What do you dread setting up every time you start a new service or feature?",
          "If you could automate exactly one thing in your workflow, what would it be?",
        ],
      },
      {
        type: "callout",
        content:
          'The answers will surprise you. It\'s rarely "I need a self-service portal with a beautiful UI." It\'s usually "I hate configuring CI/CD pipelines for every new service" or "Setting up monitoring takes an entire day."',
        variant: "info",
      },
      {
        type: "heading",
        content: "Golden Paths, Not Straightjackets",
      },
      {
        type: "paragraph",
        content:
          "The best internal platforms provide golden paths — well-documented, well-supported, opinionated ways of doing things — while allowing escape hatches for legitimate edge cases. The key word is opinionated, not mandated.",
      },
      {
        type: "paragraph",
        content:
          "A golden path for spinning up a new microservice might include:",
      },
      {
        type: "list",
        content: "",
        items: [
          "Standardized Docker base images with security patches baked in",
          "CI/CD pipeline templates that just work out of the box",
          "Monitoring, logging, and alerting pre-configured with sane defaults",
          "Service mesh integration for inter-service communication",
          "Database provisioning with backup policies already in place",
        ],
      },
      {
        type: "paragraph",
        content:
          "Teams can customize when they have legitimate needs, but 80% of the time, the golden path is faster, safer, and better than anything they'd build themselves.",
      },
      {
        type: "heading",
        content: "APIs First, UI Second",
      },
      {
        type: "paragraph",
        content:
          "Before building that beautiful React dashboard, build the API. Every feature in your platform UI should be accessible via API first. This isn't just good practice — it fundamentally changes adoption patterns.",
      },
      {
        type: "list",
        content: "",
        items: [
          "Power users will automate against your platform's API, becoming your strongest advocates",
          "You can build multiple interfaces — CLI tools, web dashboards, IDE plugins — all backed by the same API",
          "Your platform becomes embeddable in other teams' tools and workflows",
          "Testing becomes dramatically easier when everything is API-driven",
        ],
      },
      {
        type: "heading",
        content: "Measure What Matters",
      },
      {
        type: "paragraph",
        content:
          "Platform success is not measured by how many features you ship. It's measured by how much friction you eliminate. Track these metrics relentlessly:",
      },
      {
        type: "list",
        content: "",
        items: [
          'Time from "I need a new service" to "it\'s running in production with monitoring"',
          "Percentage of services using platform defaults vs. custom configurations",
          "Developer satisfaction scores (quarterly surveys with specific, actionable questions)",
          "Hours spent on undifferentiated heavy lifting per sprint",
        ],
      },
      {
        type: "heading",
        content: "Real Impact",
      },
      {
        type: "paragraph",
        content:
          "At a fintech client, we built an internal developer platform laser-focused on reducing friction in the service creation and deployment lifecycle. The results after 6 months:",
      },
      {
        type: "list",
        content: "",
        items: [
          "Service creation time: 3 days → 45 minutes",
          "Security compliance: manual ticket requests → fully automatic",
          "On-call incidents: dropped 60% due to consistent observability patterns",
          "Developer NPS: -12 → +48",
        ],
      },
      {
        type: "heading",
        content: "The Human Element",
      },
      {
        type: "paragraph",
        content:
          "Platforms succeed or fail based on adoption, and adoption is a human problem, not a technical one. The best platform in the world is worthless if developers route around it.",
      },
      {
        type: "callout",
        content:
          "Appoint platform evangelists on every team. Celebrate teams that contribute back to the platform. Make using the platform feel like joining an exclusive club, not following a mandate from management.",
        variant: "tip",
      },
      {
        type: "heading",
        content: "Getting Started Today",
      },
      {
        type: "paragraph",
        content:
          "Don't boil the ocean. Pick the single most painful process in your engineering organization and automate it beautifully. Prove the value. Build trust. Then expand.",
      },
      {
        type: "paragraph",
        content:
          "A platform that solves one problem perfectly will earn you the credibility to solve the next ten. A platform that tries to solve ten problems simultaneously will solve none of them well enough to earn adoption.",
      },
    ],
    date: "Oct 2024",
    readTime: "9 min read",
    category: "Platform Engineering",
    tag: "Platforms",
    tags: [
      "Platform Engineering",
      "DevOps",
      "Developer Experience",
      "Internal Tools",
    ],
    image: "/blog/platform-engineering.jpg",
    author: {
      name: "Albert Watbin",
      role: "Senior Software Engineer",
    },
    relatedProjects: ["platform-dashboard", "devops-toolkit"],
  },
  {
    slug: "scalable-database-design",
    title:
      "Database Design for Scale: Lessons From Processing 1M+ Requests Daily",
    excerpt:
      "What breaks when you scale, and how to design your database to handle growth without collapsing under its own weight.",
    blocks: [
      {
        type: "heading",
        content: "The Scaling Myth",
      },
      {
        type: "paragraph",
        content:
          "Everyone thinks scaling is about bigger servers. More CPU, more RAM, larger instances. It's not. Scaling is about design choices that let your system grow without constant rewrites and emergency migrations.",
      },
      {
        type: "paragraph",
        content:
          "The difference between a database that handles 10,000 users and one that handles 10 million is rarely hardware. It's architecture. And the best time to make those architectural decisions is before you need them.",
      },
      {
        type: "heading",
        content: "Choose Based on Access Patterns",
      },
      {
        type: "paragraph",
        content:
          'Don\'t start with "what database should I use?" — start with "how will my data be accessed?" The answers to these questions determine your entire data layer:',
      },
      {
        type: "list",
        content: "",
        items: [
          "Read-heavy or write-heavy? (Read replicas vs. write-optimized storage)",
          "Complex joins or simple key-value lookups? (Relational vs. document store)",
          "Time-series data or mutable records? (TimescaleDB vs. PostgreSQL)",
          "Strong consistency or eventual consistency? (Single-leader vs. multi-leader replication)",
        ],
      },
      {
        type: "paragraph",
        content:
          "The answers determine whether you need PostgreSQL, MongoDB, Cassandra, Redis, or — more likely — a thoughtful combination of two or three.",
      },
      {
        type: "heading",
        content: "The Indexing Mistake Everyone Makes",
      },
      {
        type: "paragraph",
        content:
          'Indexes make reads fast. They also make writes slower, consume disk space, and add complexity to query planning. The mistake that plagues nearly every growing system? Indexing everything "just in case."',
      },
      {
        type: "callout",
        content:
          "Never add an index because you think you might need it. Add indexes based on actual query patterns from production. Use EXPLAIN ANALYZE religiously. Remove indexes that aren't being used — they're pure overhead.",
        variant: "warning",
      },
      {
        type: "paragraph",
        content: "A better indexing strategy:",
      },
      {
        type: "list",
        content: "",
        ordered: true,
        items: [
          "Index based on actual queries observed in production, not guessed future needs",
          "Use partial indexes for conditional queries (WHERE status = 'active')",
          "Monitor index usage weekly and remove any index with zero reads",
          "Consider covering indexes for critical query paths to avoid table lookups entirely",
          "Be especially cautious with compound indexes — column order matters enormously",
        ],
      },
      {
        type: "heading",
        content: "Sharding: Design for It Early or Pay Later",
      },
      {
        type: "paragraph",
        content:
          "Sharding — distributing data across multiple database instances — is terrifying to retrofit into an existing system. If you know you'll eventually need it (and if you're reading this article, you probably will), design for it from day one.",
      },
      {
        type: "code",
        language: "typescript",
        content: `// Application-level shard routing
function getShardForTenant(tenantId: string): DatabaseConnection {
  // Consistent hashing distributes tenants evenly
  const shardIndex = consistentHash(tenantId, SHARD_COUNT);
  return shardConnections[shardIndex];
}

// Every query is shard-aware from the start
async function getOrders(tenantId: string) {
  const db = getShardForTenant(tenantId);
  return db.query('SELECT * FROM orders WHERE tenant_id = $1', [tenantId]);
}`,
      },
      {
        type: "list",
        content: "",
        items: [
          "Choose a shard key that distributes data evenly and aligns with query patterns",
          "Ensure queries can be routed to specific shards without cross-shard joins",
          "Build application-level shard awareness into your data access layer from the start",
          "Plan for resharding — your initial distribution will eventually become uneven",
        ],
      },
      {
        type: "heading",
        content: "Real Numbers From Production",
      },
      {
        type: "paragraph",
        content:
          "A property management platform I worked on grew from 10,000 to 2 million listings over 18 months. Here's what kept us alive and performing well through that 200x growth:",
      },
      {
        type: "list",
        content: "",
        items: [
          "Read replicas for all reporting and analytics queries — separated read from write load entirely",
          "Materialized views refreshed every 15 minutes for complex aggregation dashboards",
          "Table partitioning by date for audit logs (keeping the active partition fast)",
          "Redis caching layer for hot data with write-through invalidation",
          "Async processing via message queues for all non-critical writes",
        ],
      },
      {
        type: "heading",
        content: "The Cache Trap",
      },
      {
        type: "paragraph",
        content:
          "Caching is the most common scaling band-aid, and it works — until it doesn't. Stale data, cache invalidation storms, thundering herds, and memory pressure all emerge at scale and can cause cascading failures.",
      },
      {
        type: "callout",
        content:
          "Cache at multiple levels (application, database query cache, CDN) with appropriate TTLs at each layer. Use write-through caches for data that must be consistent. And always have a graceful fallback when the cache fails — because it will.",
        variant: "tip",
      },
      {
        type: "heading",
        content: "Monitoring What Actually Matters",
      },
      {
        type: "paragraph",
        content:
          "At scale, database monitoring isn't optional — it's survival. These are the metrics that predicted every outage we've ever had, usually 2-3 days before it happened:",
      },
      {
        type: "list",
        content: "",
        items: [
          "Query performance trends — enable slow query logging and review daily, not weekly",
          "Connection pool saturation — when you hit 80%, you're already in trouble",
          "Disk I/O latency and memory pressure — hardware matters when software is optimized",
          "Replication lag — anything above 1 second should trigger an alert",
          "Deadlock frequency — even one per hour indicates a design problem",
        ],
      },
      {
        type: "paragraph",
        content:
          "The theme across all of these lessons: scaling databases is about making good decisions early, monitoring relentlessly, and treating your data layer as the critical infrastructure it is — not an afterthought beneath your application code.",
      },
    ],
    date: "Sep 2024",
    readTime: "11 min read",
    category: "Database",
    tag: "Architecture",
    tags: ["Databases", "PostgreSQL", "MongoDB", "Scaling", "Performance"],
    image: "/blog/database-design.jpg",
    author: {
      name: "Albert Watbin",
      role: "Senior Software Engineer",
    },
    relatedProjects: ["analytics-dashboard", "inventory-system"],
  },
  {
    slug: "type-safety-full-stack",
    title: "End-to-End Type Safety: From Database to UI",
    excerpt:
      "How to eliminate an entire class of bugs by sharing types between your backend, frontend, and everything in between.",
    blocks: [
      {
        type: "heading",
        content: "The Type Safety Gap",
      },
      {
        type: "paragraph",
        content:
          'You write TypeScript on the frontend. Maybe on the backend too. But between them? A dark void where runtime errors hide and any refactoring becomes a game of "I hope nothing breaks."',
      },
      {
        type: "paragraph",
        content:
          "The core problem: your API returns data that doesn't match what your components expect. TypeScript can't help because it has no idea what your API actually returns at runtime. You end up with type assertions, `any` casts, and a false sense of safety.",
      },
      {
        type: "heading",
        content: "Closing the Gap",
      },
      {
        type: "paragraph",
        content:
          "End-to-end type safety means your types travel from the database schema all the way to your UI components. When you change a column name in your database, TypeScript immediately tells you exactly which API routes, service functions, and React components will break.",
      },
      {
        type: "paragraph",
        content:
          "There are three proven approaches, each with different tradeoffs:",
      },
      {
        type: "heading",
        content: "Approach 1: Shared Types Package",
      },
      {
        type: "paragraph",
        content:
          "Create a types package that both your frontend and backend import. This is the simplest approach and works exceptionally well in monorepo setups.",
      },
      {
        type: "code",
        language: "typescript",
        content: `// packages/shared-types/src/product.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  currency: "USD" | "EUR" | "GBP";
  status: "draft" | "active" | "archived";
  createdAt: string; // ISO 8601
  updatedAt: string;
}

export interface CreateProductInput {
  name: string;
  price: number;
  currency: Product["currency"];
}

export type ProductListResponse = {
  data: Product[];
  pagination: {
    page: number;
    totalPages: number;
    totalItems: number;
  };
};`,
      },
      {
        type: "paragraph",
        content:
          "Simple, explicit, no magic. Both sides import from the same source of truth. The tradeoff: you have to keep it updated manually when schemas change.",
      },
      {
        type: "heading",
        content: "Approach 2: Code Generation from OpenAPI",
      },
      {
        type: "paragraph",
        content:
          "Write your OpenAPI specification, then generate typed client code automatically. Your frontend gets types that exactly match your API, and changes to the API spec automatically update the generated types.",
      },
      {
        type: "code",
        language: "bash",
        content: `# Generate a fully typed API client from your OpenAPI spec
npx openapi-typescript-codegen \\
  --input ./api-spec.yaml \\
  --output ./src/generated/api \\
  --client fetch`,
      },
      {
        type: "paragraph",
        content:
          "This approach shines in organizations where backend and frontend teams are separate and the API spec serves as the formal contract between them.",
      },
      {
        type: "heading",
        content: "Approach 3: tRPC for Maximum Safety",
      },
      {
        type: "paragraph",
        content:
          "tRPC eliminates the API layer as a source of type errors entirely. Your frontend imports types directly from your backend router — no code generation, no manual syncing, no drift.",
      },
      {
        type: "code",
        language: "typescript",
        content: `// server/routers/product.ts
export const productRouter = router({
  list: publicProcedure
    .input(z.object({
      page: z.number().default(1),
      limit: z.number().default(20),
    }))
    .query(async ({ input }) => {
      const products = await db.product.findMany({
        skip: (input.page - 1) * input.limit,
        take: input.limit,
      });
      return products; // Return type is inferred automatically
    }),
});

// client component — fully typed, zero configuration
const ProductList = () => {
  const { data, isLoading } = trpc.product.list.useQuery({
    page: 1,
    limit: 20,
  });
  // data is fully typed as Product[] — no assertions needed
};`,
      },
      {
        type: "heading",
        content: "What You Actually Gain",
      },
      {
        type: "paragraph",
        content:
          "On a recent marketplace project, implementing end-to-end type safety produced measurable improvements that compounded over time:",
      },
      {
        type: "list",
        content: "",
        items: [
          "67% reduction in API integration bugs — the most common category of production errors",
          '~3 hours/week saved from "what does this API return?" Slack conversations',
          "40% less frontend error handling code — most error states became structurally impossible",
          "Refactoring confidence: major schema changes completed safely in hours instead of weeks",
        ],
      },
      {
        type: "callout",
        content:
          "The biggest win wasn't fewer bugs — it was confidence. Refactoring became safe. Breaking changes surfaced instantly at build time. Developers stopped being afraid to improve things because the type system had their back.",
        variant: "info",
      },
      {
        type: "heading",
        content: "Beyond API Types: The Full Chain",
      },
      {
        type: "paragraph",
        content:
          "True end-to-end type safety extends beyond just API responses. The full chain connects your database schema to your form validation to your API responses to your UI components:",
      },
      {
        type: "code",
        language: "typescript",
        content: `// 1. Database schema defines the source of truth
// Prisma generates types from your schema automatically

// 2. Zod schemas for runtime validation + type inference
const ProductSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).max(200),
  price: z.number().positive(),
  status: z.enum(["draft", "active", "archived"]),
});

// 3. Infer TypeScript types from Zod — single source of truth
type Product = z.infer<typeof ProductSchema>;

// 4. Form schemas derived from the same base
const CreateProductForm = ProductSchema.omit({ id: true });
type CreateProductInput = z.infer<typeof CreateProductForm>;

// 5. API response wrapper
type ApiResponse<T> =
  | { success: true; data: T }
  | { success: false; error: { code: string; message: string } };`,
      },
      {
        type: "heading",
        content: "The Investment Pays Off",
      },
      {
        type: "paragraph",
        content:
          "Setting up end-to-end type safety requires upfront investment in tooling and team education. But every team I've worked with that adopted it says the same thing: they would never go back.",
      },
      {
        type: "paragraph",
        content:
          "The cost of finding and fixing type mismatches in production — debugging unclear errors, coordinating between teams, deploying hotfixes — vastly exceeds the cost of setting up proper typing from the start. Your future self, and every teammate who inherits your code, will thank you.",
      },
    ],
    date: "Aug 2024",
    readTime: "8 min read",
    category: "TypeScript",
    tag: "Engineering",
    tags: [
      "TypeScript",
      "API Design",
      "Developer Experience",
      "Best Practices",
    ],
    image: "/blog/type-safety.jpg",
    author: {
      name: "Albert Watbin",
      role: "Senior Software Engineer",
    },
    relatedProjects: ["real-time-chat", "task-manager"],
  },
];

/* ─── Marquee ─── */
export const MARQUEE_ITEMS = [
  "Platform Engineering",
  "Backend Architecture",
  "CMS Development",
  "Dashboard Design",
  "API Engineering",
  "Database Design",
  "Full-Stack Systems",
];

/* ─── Philosophy ─── */
export interface PhilosophyCard {
  iconName: string;
  title: string;
  desc: string;
}

export const PHILOSOPHY_CARDS: PhilosophyCard[] = [
  {
    iconName: "Cpu",
    title: "System Thinking",
    desc: "Every component serves a defined purpose within the broader architecture.",
  },
  {
    iconName: "Shield",
    title: "Clean Architecture",
    desc: "Structured, modular code that teams can maintain and extend confidently.",
  },
  {
    iconName: "Zap",
    title: "Performance-First",
    desc: "Optimized from the foundation — not patched as an afterthought.",
  },
  {
    iconName: "Layers",
    title: "Scalable by Design",
    desc: "Built to handle growth in users, data, and complexity.",
  },
];
