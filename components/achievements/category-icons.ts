import {
  FaAward,
  FaGraduationCap,
  FaLightbulb,
  FaTrophy,
  FaUsers,
} from "react-icons/fa6";
import type { ComponentType } from "react";

import type { AchievementCategory } from "@/lib/achievements";

export type IconComponent = ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;

export const categoryIcons: Record<AchievementCategory, IconComponent> = {
  Certifications: FaAward,
  "Awards & Competitions": FaTrophy,
  Leadership: FaUsers,
  "Programs & Fellowships": FaGraduationCap,
  "Projects & Innovation": FaLightbulb,
};
