/* ---------------------------------------------------------------------------
 * Site config — Arsene Mucyuneje's portfolio content.
 * All page copy lives here so components stay reusable and content stays
 * editable in one place.
 * ------------------------------------------------------------------------- */

import type { LucideIcon } from "lucide-react";
import { Code2, Handshake, Layers, MapPin } from "lucide-react";

export const siteConfig = {
  /** Canonical brand/entity name — used in titles, OG tags, footer and
   *  JSON-LD so every surface agrees on one identity (helps Sitelinks). */
  name: "Mucyuneje Hirwa Arsene",
  role: "Software Engineer & IT Consultant",
  location: "Rwanda",
  /** Canonical site URL — used by metadata, sitemap and robots. */
  url: "https://mucyuneje.space",
  /** Default <title> for the homepage (page.tsx pins it absolutely). */
  title: "Mucyuneje Hirwa Arsene | Software Developer",
  description:
    "Software developer & IT consultant building full-stack web applications, APIs and AI systems that solve real problems for organizations.",
  githubUrl: "https://github.com/mucyuneje",
  /** Hero pill + contact section — REPLACE with your real profiles */
  linkedinUrl: "https://www.linkedin.com/in/mucyuneje",
  email: "hello@mucyuneje.space",
  /** WhatsApp + Instagram — secondary channels, shown in the contact
   *  section only (the hero keeps GitHub / LinkedIn / Email) */
  whatsappUrl: "https://wa.me/250784222615",
  instagramUrl: "https://instagram.com/mucyuneje",
};

/** Targeted industry terms — emitted as meta keywords and reused as
 *  `knowsAbout` in the Person JSON-LD entity. */
export const seoKeywords = [
  "software developer",
  "full-stack developer",
  "software engineering",
  "web application development",
  "API development",
  "digital solutions",
  "IT consultant",
  "React developer",
  "Next.js developer",
  "Node.js backend",
  "AI systems",
  "machine learning",
  "database design",
  "freelance developer",
  "Rwanda software developer",
  "Kigali tech",
];

/** Profile photo — drop your picture in /public/images and update the path. */
export const profile = {
  avatar: "/images/profile.jpg",
  avatarAlt: "Portrait of Arsene Mucyuneje Hirwa",
};

export type NavItem = {
  label: string;
  href: string;
  /** Manually set the active item for now; wire up scroll-spy later. */
  active?: boolean;
};

/** Shared by desktop sidebar + mobile drawer. Each item maps to a real
 *  route — Google needs distinct URLs to generate Sitelinks. */
export const navItems: NavItem[] = [
  { label: "Intro", href: "/", active: true },
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Achievements", href: "/achievements" },
  { label: "Contact", href: "/contact" },
];

export const heroContent = {
  /** Wordmark shown top-left in the fixed header (below lg) and in the
   *  mobile drawer — the sidebar carries it on large screens */
  identity: "Mucyuneje Hirwa Arsene",
  /** Role + base line, rendered as the accent kicker */
  role: "Software Developer & IT Consultant based in Rwanda",
  headline:
    "I build digital products, web applications & AI systems that solve real problems.",
  /** Shorter variant shown below the md breakpoint */
  headlineShort: "I build web applications, digital products & AI systems.",
};

export type Project = {
  title: string;
  /** Concise card summary — kept to ~2 sentences; clamped to 3 lines in UI */
  description: string;
  /** Wide preview image — swap in real screenshots when available */
  image: string;
  /** Tech names — resolved to icons via lib/tech-icons.ts */
  tech: string[];
  /** Live deployment — rendered as the card's primary "Live Demo" link */
  demoUrl?: string;
  /** Public repository — rendered as a secondary "Source Code" link */
  sourceUrl?: string;
  /** Extra screenshots/GIFs — drop files in /public/images, list paths here.
   *  Rendered as a thumbnail strip under the preview by ProjectGallery. */
  gallery?: string[];
};

/** The Selected Work section renders the first three as a curated preview. */
export const projects: Project[] = [
  {
    title: "Echelon",
    // TODO: add metric here (e.g. screening time saved per hire)
    description:
      "Screening high volumes of applications by hand is slow and inconsistent — Echelon structures hiring with Gemini-powered AI résumé processing and candidate evaluation, so shortlists come together faster and against one consistent bar.",
    image: "/images/Echlon-Work1.png",
    tech: ["AI", "Python", "Web Development"],
    demoUrl: "https://echelon-theta.vercel.app/",
    // TODO: add 2-3 real screenshots (or a short GIF) in /public/images
    // and list their paths here to activate the gallery strip.
  },
  {
    title: "School Asset Management",
    description:
      "A digital system for managing organizational assets, employees, assignments and asset history.",
    image: "/images/RebaBus-Work2.png",
    tech: ["Next.js", "Node.js", "MySQL"],
    // TODO: add repo/demo URL when available
  },
  {
    title: "RebaBus",
    // TODO: add metric here (e.g. vehicles tracked, requests handled)
    description:
      "Riders and operators have no live view of bus movement — RebaBus streams vehicle positions over WebSockets from a Node.js tracking backend, making end-to-end network monitoring possible in real time.",
    image: "/images/work-3.svg",
    tech: ["React", "Node.js", "Real-time Systems"],
    // TODO: add repo/demo URL when available
    // TODO: add 2-3 real screenshots (or a short GIF) in /public/images
  },
  {
    title: "AgriMarketAI",
    description:
      "An AI-powered agricultural technology project focused on using intelligent systems to solve real-world farming challenges.",
    image: "/images/work-1.svg",
    tech: ["Python", "AI", "Machine Learning"],
    // TODO: add repo/demo URL when available
  },
];

export const aboutContent = {
  intro:
    "I'm Arsene, a software developer from Rwanda who builds web applications, business systems and AI-powered solutions. I work across frontend, backend and databases, turning real-world problems into practical software.",
  facts: [
    { icon: MapPin, label: "Based in", value: "Rwanda" },
    { icon: Layers, label: "Focus", value: "Software · Web · AI" },
    { icon: Code2, label: "Role", value: "Developer · Consultant" },
    {
      icon: Handshake,
      label: "Available for",
      value: "Projects · Freelance · Collaboration",
    },
  ] satisfies { icon: LucideIcon; label: string; value: string }[],
};

export const tools = [
  { category: "Frontend", items: ["React", "Next.js", "Vue", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "PHP"] },
  { category: "Database", items: ["MySQL", "MongoDB"] },
  { category: "AI", items: ["Python", "Machine Learning"] },
  { category: "Tools", items: ["Git", "GitHub", "Docker"] },
];

/** The four technologies highlighted in the hero strip (mobile). Single
 *  curated subset — edit here, not in the page markup. The full marquee
 *  and the Tools section both derive from `tools` above. */
export const highlightedTech = ["React", "Next.js", "Node.js", "Python"];

export type ExperienceEntry = {
  org: string;
  role: string;
  description: string;
  /** Period label, e.g. "2024 — Present" (optional) */
  date?: string;
  /** Small pill badges above the title */
  tags?: string[];
  /** Key achievements rendered as a bulleted list */
  responsibilities?: string[];
  /** Company logo path under /public (initials fallback when omitted) */
  logo?: string;
};

/** Main professional timeline — roles with dates and concrete achievements.
 *  Lighter leadership/program entries live in `leadershipPrograms` so the
 *  visual weight of each entry matches its actual content depth. */
export const experience: ExperienceEntry[] = [
  {
    org: "UBWAMI TechHouse",
    role: "Founder & Lead Developer",
    date: "2024 — Present",
    tags: ["Founder", "Full-Stack"],
    logo: "/images/ubwamitechhouse.png",
    description:
      "Leading software engineering initiatives, architecture and deployment for digital products and full-stack client solutions.",
    responsibilities: [
      "Designed and deployed scalable web applications using React, Next.js and Node.js.",
      "Integrated Gemini AI APIs for automated talent screening and résumé processing.",
      "Engineered real-time tracking backends with WebSockets and Node.js.",
    ],
  },
  {
    org: "City of Kigali",
    role: "IT & Systems Intern",
    date: "2024",
    tags: ["Internship", "IT Support"],
    logo: "/images/cityofkigali.jpg",
    description:
      "Managed technical infrastructure and provided hands-on system troubleshooting in a professional environment.",
    responsibilities: [
      "Maintained internal network systems, hardware infrastructure and software deployments.",
      "Assisted administrative teams with IT workflow optimizations and system diagnostics.",
    ],
  },
];

/** Leadership & programs — rendered as a compact sub-list under the main
 *  timeline (no dates/bullets yet; promote entries by moving them up and
 *  adding `date` + `responsibilities`). */
export const leadershipPrograms: ExperienceEntry[] = [
  {
    org: "School Leadership",
    role: "Leadership & Coordination",
    tags: ["Leadership"],
    logo: "/images/msgrmubiligileadership.jpeg",
    description:
      "Experience in student leadership, coordination and responsibility.",
  },
  {
    org: "iLead Rwanda",
    role: "Leadership Development",
    tags: ["Program"],
    logo: "/images/ileadprogram.jpg",
    description: "Leadership development and personal growth program.",
  },
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
  // Direct line — the mailto: link uses the real address from siteConfig.
  href: `mailto:${siteConfig.email}`,
};

export const socials = [
  { label: "GitHub", href: siteConfig.githubUrl },
  // No URLs provided — filtered out of the footer until real profiles exist.
  { label: "LinkedIn", href: "#" },
  { label: "X", href: "#" },
].filter((social) => social.href !== "#");
