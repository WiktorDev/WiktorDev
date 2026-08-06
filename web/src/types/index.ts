export type Project = {
  id: string;
  number: string;
  name: string;
  category: string;
  stack: string[];
  architecture: string[];
  decisions: () => string[];
  responsibilities: () => string[];
  infrastructure: () => string[];
  outcome: () => string[];
  links: Link[];

  status: ProjectStatus
  featured?: boolean
}

export type Link = {
  label: string;
  href: string;
}

export type ProjectStatus = "live" | "developing" | "ended" | "suspended";