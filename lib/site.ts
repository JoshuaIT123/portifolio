/* ---------------------------------------------------------------------------
 * Site config — Arsene Mucyuneje's portfolio content.
 * All page copy lives here so components stay reusable and content stays
 * editable in one place.
 * ------------------------------------------------------------------------- */

export const siteConfig = {
  /** Wordmark shown top-left + footer. Rendered uppercase via CSS. */
  name: "Arsene Mucyuneje Hirwa",
  role: "Software Engineer & IT Consultant",
  location: "Rwanda",
  /** Canonical site URL — used by metadata, sitemap and robots. */
  url: "https://mucyuneje.space",
  title: "Arsene Mucyuneje Hirwa — Software Engineer & IT Consultant",
  description:
    "I build digital products, web applications & AI systems that solve real problems.",
  githubUrl: "https://github.com/mucyuneje",
};

/** Profile photo — drop your picture in /public/images and update the path. */
export const profile = {
  avatar: "/images/profile-placeholder.svg",
  avatarAlt: "Portrait of Arsene Mucyuneje Hirwa",
};

export type NavItem = {
  label: string;
  href: string;
  /** Manually set the active item for now; wire up scroll-spy later. */
  active?: boolean;
};

/** Shared by desktop sidebar + mobile drawer. Anchors map to section ids. */
export const navItems: NavItem[] = [
  { label: "Intro", href: "#intro", active: true },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  /** Rendered once as the hero brand block (uppercase via CSS). */
  fullName: "Arsene Mucyuneje Hirwa",
  role: "Software Engineer & IT Consultant",
  headline:
    "I build digital products, web applications & AI systems that solve real problems.",
  primaryCta: { label: "View my work", href: "#work" },
  secondaryCta: { label: "Contact me", href: "#contact" },
};

export type Project = {
  title: string;
  description: string;
  /** Tech names — resolved to icons via lib/tech-icons.ts */
  tech: string[];
  /** No live URLs provided yet — projects link to GitHub. */
  href: string;
};

export const projects: Project[] = [
  {
    title: "AI-Powered Talent Screening",
    description:
      "AI-powered software designed to help organizations screen and evaluate candidates more efficiently.",
    tech: ["AI", "Python", "Web Development"],
    href: siteConfig.githubUrl,
  },
  {
    title: "School Asset Management",
    description:
      "A digital system for managing organizational assets, employees, assignments and asset history.",
    tech: ["Next.js", "Node.js", "MySQL"],
    href: siteConfig.githubUrl,
  },
  {
    title: "RebaBus",
    description:
      "A real-time public transportation tracking platform designed to make bus movement easier to monitor.",
    tech: ["React", "Node.js", "Real-time Systems"],
    href: siteConfig.githubUrl,
  },
  {
    title: "AgriMarketAI",
    description:
      "An AI-powered agricultural technology project focused on using intelligent systems to solve real-world farming challenges.",
    tech: ["Python", "AI", "Machine Learning"],
    href: siteConfig.githubUrl,
  },
];

export const aboutContent = {
  intro:
    "I'm Arsene, a software developer from Rwanda focused on building practical digital products. I enjoy turning real-world problems into simple, useful software.",
  facts: [
    { label: "Based in", value: "Rwanda" },
    { label: "Focus", value: "Software · AI · Digital Products" },
  ],
};

export const services = [
  {
    title: "Web Development",
    description: "Modern websites and web applications built around real user needs.",
  },
  {
    title: "Business Systems",
    description: "Custom software for organizations and businesses.",
  },
  {
    title: "AI & Automation",
    description:
      "Intelligent tools that automate repetitive work and solve practical problems.",
  },
];

export const tools = [
  { category: "Frontend", items: ["React", "Next.js", "Vue", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "PHP"] },
  { category: "Data", items: ["MySQL", "MongoDB"] },
  { category: "AI", items: ["Python", "Machine Learning"] },
  { category: "Tools", items: ["Git", "GitHub", "Docker"] },
];

export const experience = [
  {
    org: "UBWAMI TechHouse",
    role: "Software Development",
    description: "Building digital products and software solutions.",
  },
  {
    org: "City of Kigali",
    role: "IT Internship",
    description:
      "Experience working with technology in a professional environment.",
  },
  {
    org: "School Leadership",
    role: "Leadership & Coordination",
    description:
      "Experience in student leadership, coordination and responsibility.",
  },
  {
    org: "iLead Rwanda",
    role: "Leadership Development",
    description: "Leadership development and personal growth program.",
  },
];

export const achievements = [
  { title: "AI Hackathon", result: "National Top 10 Finalist" },
  { title: "AWS", result: "Cloud Computing Certification" },
  { title: "IBM SkillsBuild", result: "Artificial Intelligence" },
  { title: "iLead Rwanda", result: "Leadership Development Program" },
];

export const githubSection = {
  heading: "I build, experiment & learn in public.",
  description: "Explore my projects, experiments and open-source work on GitHub.",
  cta: "View GitHub ↗",
};

export const finalCta = {
  headingLines: ["Have an idea?", "Let's build it."],
  description:
    "Have a project, business problem, or idea that could become software?",
  cta: "Get in touch ↗",
  // No email provided yet — points to GitHub; swap in a mailto: link when ready.
  href: siteConfig.githubUrl,
};

export const socials = [
  { label: "GitHub", href: siteConfig.githubUrl },
  // No URLs provided — placeholders until real profiles are added.
  { label: "LinkedIn", href: "#" },
  { label: "X", href: "#" },
];
