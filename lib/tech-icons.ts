import type { ComponentType } from "react";
import {
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiVuedotjs,
} from "react-icons/si";
import { BrainCircuit, Code, Radio, Sparkles } from "lucide-react";

export type TechIcon = ComponentType<{
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
}>;

/**
 * Maps every technology name used across the site to its brand icon.
 * Concepts without an official brand mark (AI, Machine Learning, ...)
 * use a neutral lucide glyph so every item keeps an icon.
 */
export const techIcons: Record<string, TechIcon> = {
  // Frontend
  React: SiReact,
  "Next.js": SiNextdotjs,
  Vue: SiVuedotjs,
  "Tailwind CSS": SiTailwindcss,
  // Backend
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  PHP: SiPhp,
  // Data
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  // AI
  Python: SiPython,
  AI: Sparkles,
  "Machine Learning": BrainCircuit,
  // Tools
  Git: SiGit,
  GitHub: SiGithub,
  Docker: SiDocker,
  // Project-scope concepts
  "Web Development": Code,
  "Real-time Systems": Radio,
};

export function getTechIcon(name: string): TechIcon | undefined {
  return techIcons[name];
}
