export default function() {
  return {
    navLinks: [
      { label: "About", href: "#about" },
      { label: "Work", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Stack", href: "#stack" },
      { label: "Contact", href: "#contact" },
    ],
    profile: {
      tagline: 'I build backend systems and mobile applications for businesses.',
      intro: 'Fullstack developer focused on backend engineering, APIs and cloud infrastructure. I help companies turn complex requirements into reliable software — from the database and API layer to the mobile app people actually use.',
      stats: [
        { value: "4+", label: "Years building software" },
        { value: "20+", label: "Projects delivered" },
        { value: "100%", label: "Ownership, end to end" },
      ],
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
        intro: 'A selection of projects where architecture, performance, infrastructure, and product experience came together.'
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
        intro: 'The toolset I reach for daily — chosen for maintainability, not novelty.'
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