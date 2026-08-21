import {
  Award,
  GraduationCap,
  Lightbulb,
  Trophy,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import type { AchievementCategory } from "@/lib/achievements";

/** Subtle category indicator used on cards, filters and the timeline. */
export const categoryIcons: Record<AchievementCategory, LucideIcon> = {
  Certifications: Award,
  "Awards & Competitions": Trophy,
  Leadership: Users,
  "Programs & Fellowships": GraduationCap,
  "Projects & Innovation": Lightbulb,
};
