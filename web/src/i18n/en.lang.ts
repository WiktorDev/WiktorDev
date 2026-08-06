export default function() {
  return {
    locales: {
      pl: 'Polish',
      en: 'English'
    },
    links: {
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      stack: 'Stack',
      contact: 'Contact',
    },
    profile: {
      tagline: 'I build backend systems and mobile applications for businesses.',
      intro: 'Fullstack developer focused on backend engineering, APIs and cloud infrastructure. I help companies turn complex requirements into reliable software — from the database and API layer to the mobile app people actually use.',
      stats: {
        years: 'Years building software',
        projects: 'Projects delivered',
        ownership: 'Ownership, end to end'
      },
    },
    projects: {
      'yshop-pl': {
        description: 'A SaaS platform for creating and managing game servers stores',
        highlight: 'Built for scalable growth and reliable daily operations.',
        overview: 'A multi-tenant operations platform where teams manage customers, workflows, permissions and recurring processes in one place, backed by an API that other internal tools consume.',
        problem: 'Operations were spread across spreadsheets and disconnected tools, making permissions unclear and daily reporting manual and error-prone.',
        challenge: 'Model tenant-scoped data and permissions without duplicating logic, while keeping heavy reporting queries away from the request path.',
        solution: 'A single Laravel API with tenant-scoped policies, a queue layer for exports and integrations, and Redis-backed caching for the dashboards that get hit constantly.',
        decisions: [
          "Row-level tenant scoping enforced in one place rather than per controller",
          "Queued jobs for exports, notifications and third-party syncs",
          "Read-optimised projections for dashboards instead of live aggregates",
          "Feature flags to release progressively to selected tenants",
        ],
      }
    },
    sections: {
      hero: {
        projectButton: 'View my work',
        workWithMe: 'Work with me'
      },
      about: {
        eyebrow: 'About',
        title: 'Who I am, and how I work.',
        paragraphs: [
          "I'm a fullstack developer who spends most of the day in the backend: designing APIs, modelling data, and making sure systems keep working when traffic, teams and requirements grow.",
          "I work with businesses that need more than a prototype — internal platforms, customer portals, integrations and mobile applications that have to be maintained for years. I take a project from architecture through implementation to deployment and monitoring.",
          "I care about clear structure, readable code, honest estimates and software that is easy to hand over.",
        ],
        facts: [
          { label: "Focus", value: "Backend, APIs, mobile and web apps" },
          { label: "Works with", value: "Startups, agencies, product teams" },
          { label: "Engagement", value: "Freelance & long-term collaboration" },
        ],
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
      },
      projects: {
        eyebrow: 'featured work',
        title: 'Selected work. Real engineering challenges.',
        intro: 'A selection of projects where architecture, performance, infrastructure, and product experience came together.',

        caseStudy: 'Project',
        challenge: 'the challenge',
        architecture: 'architecture',
        decisions: 'engineering decisions',
        responsibilities: 'responsibilities',
        infrastructure: 'infrastructure & deployment',
        outcome: 'outcome',
        stack: 'technology stack'
      },
      contact: {
        eyebrow: 'contact',
        title: 'Need a backend system or a mobile app for your business?',
        intro: "Tell me what you're building. I'll help you shape the architecture, build the API and the app around it, and get it running reliably in production.",
        description: 'Currently open to selected freelance projects, long-term collaborations, and interesting engineering challenges.',
        buttons: {
          email: 'Email me',
        }
      },
      stack: {
        eyebrow: 'stack',
        title: 'Technologies and tools I work with.',
        intro: 'The toolset I reach for daily — chosen for maintainability, not novelty.',
        categories: {
          backend: {
            title: 'Backend',
            summary: "Domain-driven services, clean boundaries, predictable APIs.",
          },
          frontend: {
            title: "Frontend",
            summary: "Interfaces that stay fast under real production data.",
          },
          databases: {
            title: "Databases",
            summary: "Schemas designed for correctness first, speed always.",
          },
          devops: {
            title: "DevOps & Infrastructure",
            summary: "Repeatable delivery from local commit to production edge.",
          }
        }
      },
      experience: {
        eyebrow: "experience",
        title: "Experience built through real products.",
      },
      footer: {
        description: 'Designing scalable software, reliable APIs, and production-ready infrastructure.',
        backTop: 'Back to top'
      }
    }
  }
}