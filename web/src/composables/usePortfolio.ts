import {useI18n} from "vue-i18n";
import type {Project} from "../types";

export function usePortfolio() {
  const { t, tm } = useI18n()

  const projects: Project[] = [
    {
      featured: true,
      status: "live",
      id: "yshop-pl",
      number: "01",
      name: "yshop.pl",
      category: "Fullstack · Backend Architecture · Payments · E-commerce",
      stack: ["NestJS", "TypeScript", "Nuxt", "Vue", "Vite", "TailwindCSS", "Laravel", "TypeORM", "MariaDB", "Redis", "Docker", "Nginx", "Cloudflare", "REST API"],
      architecture: ["Microservices", "GitHub Ci/CD", "Docker", "Nginx", "CloudFlare"],
      decisions: () => tm(`projects.yshop-pl.decisions`) as string[],
      responsibilities: () => tm(`projects.yshop-pl.responsibilities`) as string[],
      infrastructure: () => tm(`projects.yshop-pl.infrastructure`) as string[],
      outcome: () => tm(`projects.yshop-pl.outcome`) as string[],
      links: [
        { label: "GitHub", href: "https://github.com/yshop-pl/" },
        { label: "Live project", href: "https://yshop.pl" },
      ],
    },
    {
      id: "gdziebusik",
      status: 'suspended',
      number: "02",
      name: "GdzieBusik",
      category: "Backend · APIs · Infrastructure",
      stack: ["Kotlin", "Ktor", "PostgreSQL", "Rust", "Nuxt", "TailwindCSS", "Flutter", "Laravel", "PHP", "REST API", "GTFS", "Docker", "GitHub Actions"],
      architecture: [
        "Web/Mobile app (Nuxt/Flutter)",
        "Web API (Kotlin Ktor)",
        "Routing engine (Rust)",
        "GTFS datasets",
        "SIP Proxy API (Realtime vehicle positions)",
      ],
      decisions: () => tm(`projects.gdziebusik.decisions`) as string[],
      responsibilities: () => tm(`projects.gdziebusik.responsibilities`) as string[],
      infrastructure: () => tm(`projects.gdziebusik.infrastructure`) as string[],
      outcome: () => tm(`projects.gdziebusik.outcome`) as string[],
      links: [
        { label: "GitHub", href: "https://github.com/gdziebusik-pl" }
      ],
    },
    {
      id: "loyaltyhub",
      number: "03",
      status: 'developing',
      name: "LoyaltyHub",
      category: "Frontend · SSR · Performance",
      stack: ["Nuxt", "Vue", "Laravel", "PostgreSQL", "PWA", "REST API", "TypeScript", "Node.js", "TailwindCSS"],
      architecture: ["Mobile App", "API", "PostgreSQL Database", "Admin Dashboard (NuxtJS)", "POS App (Vue PWA)"],
      decisions: () => tm(`projects.loyaltyhub.decisions`) as string[],
      responsibilities: () => tm(`projects.loyaltyhub.responsibilities`) as string[],
      infrastructure: () => tm(`projects.loyaltyhub.infrastructure`) as string[],
      outcome: () => tm(`projects.loyaltyhub.outcome`) as string[],
      links: [
        { label: "GitHub", href: "[YOUR GITHUB URL]" },
        { label: "Live project", href: "https://loyaltyhub.pl" },
      ],
    },
    {
      id: "hookscope",
      number: "04",
      status: 'live',
      name: "HookScope",
      category: "Frontend · SSR · Performance",
      stack: ["React", "NestJs", "TailwindCSS", "Prisma", "PostgreSQL", "Docker", "Nginx", "TypeScript"],
      architecture: [
        "Webhook Client",
        "Webhook Endpoint",
        "NestJS API",
        "Webhook Processing Engine",
        "PostgreSQL Database",
        "Frontend Dashboard",
      ],
      decisions: () => tm(`projects.hookscope.decisions`) as string[],
      responsibilities: () => tm(`projects.hookscope.responsibilities`) as string[],
      infrastructure: () => tm(`projects.hookscope.infrastructure`) as string[],
      outcome: () => tm(`projects.hookscope.outcome`) as string[],
      links: [
        { label: "GitHub", href: "https://github.com/WiktorDev/hookscope" },
        { label: "Live version", href: "https://hookscope.ycode.pl" },
      ],
    },
    {
      id: "kpbat",
      number: "05",
      status: 'live',
      name: "kpbat.com",
      category: "Frontend · SSR · Performance",
      stack: ["NuxtJs", "TailwindCSS", "Go", "SQLite"],
      architecture: [],
      decisions: () => tm(`projects.kpbat.decisions`) as string[],
      responsibilities: () => tm(`projects.kpbat.responsibilities`) as string[],
      infrastructure: () => tm(`projects.kpbat.infrastructure`) as string[],
      outcome: () => tm(`projects.kpbat.outcome`) as string[],
      links: [
        { label: "Live version", href: "https://kpbat.com/" },
      ],
    },
    {
      id: "peknieta-szprycha",
      number: "06",
      status: 'live',
      name: "Pęknięta szprycha",
      category: "Frontend · SSR · Performance",
      stack: ["VueJs", "TailwindCSS", "Vite"],
      architecture: [],
      decisions: () => [],
      responsibilities: () => [],
      infrastructure: () => [],
      outcome: () => [],
      links: [
        { label: "Live version", href: "https://peknieta-szprycha.ycode.pl/" },
      ],
    },
  ]

  return {
    navLinks: [
      { key: 'about', href: "#about" },
      { key: 'projects', href: "#projects" },
      { key: 'stack', href: "#stack" },
      { key: 'contact', href: "#contact" },
    ],
    profile: {
      name: 'Wiktor Wilk',
      monogram: 'WW',
      role: "Fullstack Developer & Backend Engineer",
      location: 'Rzeszów, Poland',
      availability: "Available for selected projects",
      tagline: t('profile.tagline'),
      intro: t('profile.intro'),
      email: 'wiktor_wilk@icloud.com',
      linkedin: "https://www.linkedin.com/in/wiktor-wilk/",
      github: "https://github.com/WiktorDev",
      whatsapp: "",
      heroBadges: ["Laravel", "NestJS", "Node.js", "Vue", "Nuxt", "PostgreSQL"],
      stats: [
        { value: "4+", key: 'years' },
        { value: "20+", key: 'projects' },
        { value: "100%", key: 'ownership' },
      ],
    },
    about: {
      paragraphs: tm('sections.about.paragraphs'),
      facts: tm('sections.about.facts'),
    },
    focusAreas: tm('sections.about.focusAreas') as {
      id: string,
      title: string,
      body: string,
      points: string[]
    }[],
    projects,
    experience: [
      {
        period: "2024 — Present",
        role: "Fullstack Developer",
        company: "[Company Name]",
        description:
            "Developing and maintaining production web applications with a strong focus on backend architecture, APIs, PostgreSQL, and deployment automation.",
        achievement:
            "Owns the release pipeline and core API layer for the company's main product.",
        tech: ["Laravel", "Vue", "PostgreSQL", "Docker", "GitHub Actions"],
      },
      {
        period: "2023 — 2024",
        role: "Backend / Fullstack Developer",
        company: "[Company Name]",
        description:
            "Built backend services, integrated external systems, improved application performance, and contributed to scalable product architecture.",
        achievement:
            "Reduced critical endpoint response times through query and caching work.",
        tech: ["NestJS", "Node.js", "Vue", "PostgreSQL"],
      },
      {
        period: "2022 — 2023",
        role: "Software Development Intern",
        company: "[Company Name]",
        description:
            "Gained hands-on experience building web applications, working with databases, collaborating through Git, and delivering production features.",
        achievement: "Shipped first production features within the first months.",
        tech: ["Laravel", "JavaScript", "SQL", "Git"],
      },
    ],
    stack: {
      backend: [
        "Laravel",
        "PHP",
        "OOP",
        "NestJS",
        "Node.js",
        "TypeScript",
        "REST APIs",
        "API architecture",
        "Authentication",
        "Background jobs",
        "Queues",
        "Integrations",
      ],
      frontend: [
        "Vue.js",
        "Nuxt",
        "React",
        "NextJs",
        "TailwindCSS",
        "Flutter",
        "IOS/Android",
        "Swift",
        "Java/Kotlin",
        "SSR",
        "Performance optimization"
      ],
      databases: [
        "PostgreSQL",
        "Relational design",
        "Query optimization",
        "Migrations",
        "Indexing",
      ],
      devops: [
        "CI/CD",
        "GitHub Actions",
        "Cloudflare",
        "Nginx",
        "Linux",
        "Docker",
        "Deployment automation",
        "Monitoring",
        "Production environments",
      ]
    } as Record<string, string[]>,
  }
}