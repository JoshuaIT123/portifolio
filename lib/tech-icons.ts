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
  SiPython,
  SiReact,
  SiTailwindcss,
  SiVuedotjs,
} from "react-icons/si";
import {
  FaBrain,
  FaCode,
  FaDiagramProject,
  FaLink,
  FaRadio,
  FaWandMagicSparkles,
} from "react-icons/fa6";

export type TechIcon = ComponentType<{
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
}>;

export const techIcons: Record<string, TechIcon> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  Vue: SiVuedotjs,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  Python: SiPython,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Git: SiGit,
  GitHub: SiGithub,
  Docker: SiDocker,
  AI: FaWandMagicSparkles,
  "Machine Learning": FaBrain,
  Bitcoin: SiNodedotjs,
  Blockchain: FaLink,
  "Blockchain Basics": FaLink,
  "API Integration": FaDiagramProject,
  "Web Development": FaCode,
  "Real-time Systems": FaRadio,
};

export function getTechIcon(name: string): TechIcon | undefined {
  return techIcons[name];
}
