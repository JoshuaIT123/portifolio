/* ---------------------------------------------------------------------------
 * Site config — Joshua NDAMAGE's portfolio content.
 * Pure data only — NO imports from lucide-react or any client component
 * packages. This file is imported by server components (layout, sidebar,
 * sitemap) so it must stay free of client-side module side-effects.
 * ------------------------------------------------------------------------- */

export const siteConfig = {
  name: "Joshua NDAMAGE",
  role: "Software Developer & Fintech Enthusiast",
  location: "Rwanda",
  url: "https://joshuandamage.dev",
  title: "Joshua NDAMAGE | Software Developer",
  description:
    "Software developer specializing in full-stack web applications, fintech solutions and digital platforms. Building technology that drives financial innovation.",
  githubUrl: "https://github.com/JoshuaIT123",
  linkedinUrl: "https://www.linkedin.com/in/joshuandamage",
  email: "ndamagejoshua@gmail.com",
  phone: "0794032272",
  whatsappUrl: "https://wa.me/250794032272",
  instagramUrl: "",
};

export const seoKeywords = [
  "software developer",
  "full-stack developer",
  "fintech developer",
  "web application development",
  "API development",
  "digital solutions",
  "React developer",
  "Next.js developer",
  "Node.js backend",
  "blockchain",
  "bitcoin",
  "cryptocurrency",
  "database design",
  "Rwanda software developer",
  "Kigali tech",
  "banking technology",
];

export const profile = {
  avatar: "/images/profile.png",
  avatarAlt: "Portrait of Joshua NDAMAGE",
};

export type NavItem = {
  label: string;
  href: string;
  active?: boolean;
};

export const navItems: NavItem[] = [
  { label: "Intro", href: "/", active: true },
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Achievements", href: "/achievements" },
  { label: "Contact", href: "/contact" },
];

export const heroContent = {
  identity: "Joshua NDAMAGE",
  role: "Software Developer & Fintech Enthusiast based in Rwanda",
  headline:
    "I build scalable web applications, fintech platforms & digital systems that solve real problems.",
  headlineShort:
    "I build web applications, fintech platforms & digital systems.",
};

export type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  demoUrl?: string;
  sourceUrl?: string;
  gallery?: string[];
};

export const projects: Project[] = [
  {
    title: "StreamVue — TV Platform",
    description:
      "A modern streaming platform delivering live TV channels and on-demand content with a seamless, responsive user interface. Built with real-time streaming protocols and adaptive bitrate delivery for optimal playback across devices.",
    image: "/images/work-1.svg",
    tech: ["React", "Next.js", "Node.js", "Real-time Systems"],
  },
  {
    title: "AutoReserve — Car Booking System",
    description:
      "A full-stack car reservation platform that lets users browse available vehicles, book rides and manage reservations in real time. Features secure authentication, payment integration and an admin dashboard for fleet management.",
    image: "/images/work-2.svg",
    tech: ["Next.js", "Node.js", "MySQL", "Tailwind CSS"],
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive developer portfolio built with Next.js, Tailwind CSS and Framer Motion. Features dark/light themes, SEO optimization, structured data and smooth animations for a professional online presence.",
    image: "/images/work-3.svg",
    tech: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    title: "CryptoTrack — Bitcoin Portfolio Tracker",
    description:
      "A cryptocurrency portfolio tracking dashboard that monitors Bitcoin and altcoin holdings, displays real-time price charts and provides portfolio analytics. Integrates with public APIs to fetch live market data and compute gains.",
    image: "/images/Echlon-Work1.png",
    tech: ["React", "Python", "API Integration"],
  },
  {
    title: "SmartFleet — Vehicle Tracking",
    description:
      "A real-time vehicle tracking system that streams GPS positions over WebSockets from a Node.js backend. Enables end-to-end network monitoring for fleet operators with live map visualization.",
    image: "/images/ubwamitechhouse.png",
    tech: ["React", "Node.js", "Real-time Systems"],
  },
];

export const aboutFacts = [
  { iconName: "MapPin" as const, label: "Based in", value: "Rwanda" },
  { iconName: "Layers" as const, label: "Focus", value: "Software · Fintech · Web" },
  { iconName: "Code2" as const, label: "Role", value: "Developer · Innovator" },
  {
    iconName: "Handshake" as const,
    label: "Available for",
    value: "Internships · Projects · Collaboration",
  },
];

export const aboutIntro =
  "I'm Joshua, a software developer from Rwanda with a passion for building full-stack web applications and exploring fintech solutions. I work across frontend, backend and databases, turning real-world problems into practical software — especially in the financial technology space.";

export const tools = [
  { category: "Frontend", items: ["React", "Next.js", "Vue", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "Python"] },
  { category: "Database", items: ["MySQL", "MongoDB"] },
  { category: "Fintech & Crypto", items: ["Bitcoin", "Blockchain Basics", "API Integration"] },
  { category: "Tools", items: ["Git", "GitHub", "Docker"] },
];

export const highlightedTech = ["React", "Next.js", "Node.js", "Bitcoin"];

export type ExperienceEntry = {
  org: string;
  role: string;
  description: string;
  date?: string;
  tags?: string[];
  responsibilities?: string[];
  logo?: string;
};

export const experience: ExperienceEntry[] = [
  {
    org: "Freelance Developer",
    role: "Full-Stack Developer",
    date: "2023 — Present",
    tags: ["Freelance", "Full-Stack"],
    description:
      "Building custom web applications, fintech prototypes and digital solutions for clients and personal projects.",
    responsibilities: [
      "Developed responsive web applications using React, Next.js and Node.js.",
      "Built a cryptocurrency portfolio tracker integrating live Bitcoin market data via public APIs.",
      "Designed and deployed a car booking system with secure authentication and real-time availability.",
      "Created a modern streaming TV platform with adaptive video delivery.",
    ],
  },
  {
    org: "Bitcoin & Blockchain",
    role: "Self-Taught Crypto Enthusiast",
    date: "2022 — Present",
    tags: ["Bitcoin", "Blockchain", "Fintech"],
    description:
      "Self-driven exploration of Bitcoin fundamentals, blockchain technology and their applications in financial systems.",
    responsibilities: [
      "Studied Bitcoin whitepaper, transaction models and UTXO-based systems.",
      "Built a crypto portfolio tracking dashboard to understand market data APIs.",
      "Explored smart contract basics and decentralized application (dApp) architecture.",
      "Researched how blockchain can improve banking, payments and remittances in Africa.",
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
  href: `mailto:${siteConfig.email}`,
};

export const socials = [
  { label: "GitHub", href: siteConfig.githubUrl },
  { label: "LinkedIn", href: siteConfig.linkedinUrl },
].filter((social) => social.href !== "#");
