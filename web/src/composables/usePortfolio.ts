export function usePortfolio() {
  return {
    profile: {
      name: 'Wiktor Wilk',
      monogram: 'WW',
      role: "Fullstack Developer & Backend Engineer",
      location: 'Rzeszów, Poland',
      availability: "Available for selected projects",
      tagline: "I build backend systems and mobile applications for businesses.",
      intro: "Fullstack developer focused on backend engineering, APIs and cloud infrastructure. I help companies turn complex requirements into reliable software — from the database and API layer to the mobile app people actually use.",
      email: 'hello@wilkwiktor.code',
      linkedin: "[YOUR LINKEDIN URL]",
      github: "[YOUR GITHUB URL]",
      whatsapp: "[YOUR WHATSAPP URL]",
      heroBadges: ["Laravel", "NestJS", "Node.js", "Vue", "Nuxt", "PostgreSQL"],
      stats: [
        { value: "4+", label: "Years building software" },
        { value: "20+", label: "Projects delivered" },
        { value: "100%", label: "Ownership, end to end" },
      ],
    },
    about: {
      paragraphs: [
        "I'm a fullstack developer who spends most of the day in the backend: designing APIs, modelling data, and making sure systems keep working when traffic, teams and requirements grow.",
        "I work with businesses that need more than a prototype — internal platforms, customer portals, integrations and mobile applications that have to be maintained for years. I take a project from architecture through implementation to deployment and monitoring.",
        "I care about clear structure, readable code, honest estimates and software that is easy to hand over.",
      ],
      facts: [
        { label: "Focus", value: "Backend, APIs, mobile apps" },
        { label: "Works with", value: "Startups, agencies, product teams" },
        { label: "Engagement", value: "Freelance & long-term collaboration" },
      ],
    },
    focusAreas: [
      {
        id: "backend",
        title: "Backend & API development",
        body: "Secure, well-structured services with clean domain boundaries, authentication, integrations and background processing.",
        points: ["REST APIs", "Auth & permissions", "Integrations", "Background jobs"],
      },
      {
        id: "mobile",
        title: "Mobile applications",
        body: "Business-facing mobile apps connected to solid APIs — from offline-friendly data flows to release pipelines on both stores.",
        points: ["Cross-platform apps", "API-driven UX", "Push & offline sync", "Store releases"],
      },
      {
        id: "cloud",
        title: "Cloud & delivery",
        body: "Infrastructure and pipelines that make releases boring: containerised environments, automated deploys and monitoring.",
        points: ["Docker & Linux", "CI/CD", "Cloudflare & Nginx", "Monitoring"],
      },
    ],
    projects: [
      {
        image: 'https://doth.pl/img/realizacje/kpbat/1.webp',
        id: "yshop-pl",
        number: "01",
        name: "yshop.pl",
        category: "Fullstack · Backend Architecture · Payments · E-commerce",
        description: "A SaaS platform for creating and managing game servers stores",
        stack: ["NestJs", "TypeScript", "MariaDB", "Laravel", "NuxtJs", "TailwindCss", "Redis", "Docker", "Nginx", "Cloudflare"],
        highlight: "Built for scalable growth and reliable daily operations.",
        overview:
            "A multi-tenant operations platform where teams manage customers, workflows, permissions and recurring processes in one place, backed by an API that other internal tools consume.",
        problem:
            "Operations were spread across spreadsheets and disconnected tools, making permissions unclear and daily reporting manual and error-prone.",
        challenge:
            "Model tenant-scoped data and permissions without duplicating logic, while keeping heavy reporting queries away from the request path.",
        architecture: ["Vue SPA", "Cloudflare", "Nginx", "Laravel API", "Redis + Queue", "PostgreSQL"],
        solution:
            "A single Laravel API with tenant-scoped policies, a queue layer for exports and integrations, and Redis-backed caching for the dashboards that get hit constantly.",
        decisions: [
          "Row-level tenant scoping enforced in one place rather than per controller",
          "Queued jobs for exports, notifications and third-party syncs",
          "Read-optimised projections for dashboards instead of live aggregates",
          "Feature flags to release progressively to selected tenants",
        ],
        responsibilities: [
          "API and domain architecture",
          "Database schema and migrations",
          "Vue frontend integration",
          "Deployment pipeline and environments",
        ],
        infrastructure: [
          "Dockerised app, worker and scheduler containers",
          "Nginx reverse proxy with TLS termination",
          "Cloudflare for caching, WAF and DNS",
          "GitHub Actions for tests, build and zero-downtime deploy",
        ],
        outcome: [
          "Dashboard load time reduced from seconds to sub-second",
          "Manual reporting work replaced by scheduled exports",
          "Predictable releases with rollback in a single step",
        ],
        links: [
          { label: "GitHub", href: "[YOUR GITHUB URL]" },
          { label: "Live project", href: "#" },
        ],
      },
      {
        id: "gdziebusik",
        number: "02",
        name: "GdzieBusik",
        category: "Backend · APIs · Infrastructure",
        description:
            "A modular backend platform connecting multiple external services through secure and maintainable APIs.",
        stack: ["NestJS", "Node.js", "PostgreSQL", "Docker", "GitHub Actions"],
        highlight: "Automated integrations and reduced operational complexity.",
        overview:
            "An integration layer that normalises data from several external providers and exposes one consistent, versioned API to internal products.",
        problem:
            "Each product implemented its own integration code, so provider changes broke multiple systems at once and debugging meant reading four codebases.",
        challenge:
            "Handle unreliable third-party APIs, rate limits and inconsistent payloads without leaking that complexity to consumers.",
        architecture: ["Internal clients", "API Gateway", "NestJS modules", "Job runner", "PostgreSQL"],
        solution:
            "A modular NestJS service with one adapter per provider, a shared retry/backoff layer, idempotent webhook handling, and a normalised persistence model.",
        decisions: [
          "Adapter pattern per provider with a shared contract",
          "Idempotency keys on every inbound webhook",
          "Exponential backoff with dead-letter handling",
          "Contract tests running against recorded provider fixtures",
        ],
        responsibilities: [
          "Integration architecture and module design",
          "Webhook and retry infrastructure",
          "PostgreSQL data modelling",
          "CI pipeline and release process",
        ],
        infrastructure: [
          "Docker images built and versioned per commit",
          "Separate worker container for scheduled syncs",
          "Structured logging and error alerting",
          "Environment-scoped secrets management",
        ],
        outcome: [
          "Provider changes now touch a single adapter",
          "Failed syncs recover automatically instead of manually",
          "New integrations ship in days rather than weeks",
        ],
        links: [
          { label: "GitHub", href: "[YOUR GITHUB URL]" },
          { label: "Live project", href: "#" },
        ],
      },
      {
        id: "high-performance-web",
        number: "03",
        name: "LoyaltyHub",
        category: "Frontend · SSR · Performance",
        description:
            "A fast, SEO-friendly web application with modern server-side rendering and optimized user experience.",
        stack: ["Nuxt", "Vue", "Node.js", "Cloudflare"],
        highlight: "Optimized for speed, discoverability, and scalability.",
        overview:
            "A content-heavy public platform where organic search traffic and first-paint speed directly drive the business.",
        problem:
            "The previous client-rendered app was invisible to crawlers and slow on mobile networks, capping acquisition.",
        challenge:
            "Serve rendered HTML fast and globally while keeping content editable and cache invalidation correct.",
        architecture: ["Browser", "Cloudflare edge", "Nuxt SSR", "Node API", "PostgreSQL"],
        solution:
            "Nuxt server-side rendering with route-level caching at the edge, tag-based invalidation on publish, and an image and font strategy tuned for mobile.",
        decisions: [
          "SSR with stale-while-revalidate at the edge",
          "Tag-based purge triggered by content publishes",
          "Critical CSS and font preloading on first paint",
          "Structured data for every content template",
        ],
        responsibilities: [
          "SSR architecture and caching strategy",
          "Performance budget and measurement",
          "Edge configuration",
          "API integration layer",
        ],
        infrastructure: [
          "Cloudflare edge caching and security rules",
          "Nginx in front of the Node SSR process",
          "Automated Lighthouse checks in CI",
          "Uptime and error monitoring",
        ],
        outcome: [
          "Sub-1.5s LCP on mid-range mobile devices",
          "Full crawlability and richer search results",
          "Traffic spikes absorbed at the edge, not the origin",
        ],
        links: [
          { label: "GitHub", href: "[YOUR GITHUB URL]" },
          { label: "Live project", href: "#" },
        ],
      },
    ],
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
    techCategories:[
      {
        id: "backend",
        title: "Backend",
        summary: "Domain-driven services, clean boundaries, predictable APIs.",
        items: [
          "Laravel",
          "NestJS",
          "Node.js",
          "REST APIs",
          "API architecture",
          "Authentication",
          "Background jobs",
          "Queues",
          "Integrations",
        ],
      },
      {
        id: "frontend",
        title: "Frontend",
        summary: "Interfaces that stay fast under real production data.",
        items: [
          "Vue.js",
          "Nuxt",
          "Responsive interfaces",
          "SSR",
          "Performance optimization",
        ],
      },
      {
        id: "databases",
        title: "Databases",
        summary: "Schemas designed for correctness first, speed always.",
        items: [
          "PostgreSQL",
          "Relational design",
          "Query optimization",
          "Migrations",
          "Indexing",
        ],
      },
      {
        id: "devops",
        title: "DevOps & Infrastructure",
        summary: "Repeatable delivery from local commit to production edge.",
        items: [
          "CI/CD",
          "GitHub Actions",
          "Cloudflare",
          "Nginx",
          "Linux",
          "Docker",
          "Deployment automation",
          "Monitoring",
          "Production environments",
        ],
      },
    ]
  }
}