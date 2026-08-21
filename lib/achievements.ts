/* ---------------------------------------------------------------------------
 * Achievements & Recognition — centralized data model.
 *
 * Add new certificates/awards here; the UI (homepage preview + /achievements)
 * derives everything — stats, filters, timeline, featured picks — from this
 * list. Fields marked optional stay empty until real information exists;
 * nothing is invented or exaggerated.
 *
 * Source documents live in /public/certificates (linked via credentialUrl).
 * ------------------------------------------------------------------------- */

export const ACHIEVEMENT_CATEGORIES = [
  "Certifications",
  "Awards & Competitions",
  "Leadership",
  "Programs & Fellowships",
  "Projects & Innovation",
] as const;

export type AchievementCategory = (typeof ACHIEVEMENT_CATEGORIES)[number];

/** 1 = major recognition (prominent), 2 = strong credential, 3 = supporting. */
export type AchievementTier = 1 | 2 | 3;

export type Achievement = {
  title: string;
  /** Issuing organization, competition host or program name. */
  organization?: string;
  category: AchievementCategory;
  /** Year of completion/result — omitted until confirmed. */
  year?: string;
  description: string;
  /** Ranking or outcome, e.g. "National Top 10 Finalist". */
  result?: string;
  /** Short skill tags rendered as pills. */
  skills?: string[];
  /** External verification / credential URL or local certificate PDF. */
  credentialUrl?: string;
  /** Certificate preview image under /public — opens in the lightbox. */
  certificateImage?: string;
  /** Highlighted on the homepage and pinned first on /achievements. */
  featured?: boolean;
  tier: AchievementTier;
};

export const achievementsData: Achievement[] = [
  /* --- Tier 1: major recognition ------------------------------------- */
  {
    title: "AI Hackathon",
    category: "Awards & Competitions",
    description:
      "Competed against teams from across the country and earned a place among the national top 10 with an AI-powered solution.",
    result: "National Top 10 Finalist",
    skills: ["AI", "Software Development"],
    featured: true,
    tier: 1,
  },

  /* --- Tier 2: strong credentials ------------------------------------ */
  {
    title: "AI & Machine Learning — Advanced",
    organization: "DTP",
    category: "Certifications",
    description:
      "Advanced-level certificate in artificial intelligence and machine learning.",
    skills: ["AI", "Machine Learning"],
    credentialUrl: "/certificates/ai-ml-advanced-dtp.pdf",
    featured: true,
    tier: 2,
  },
  {
    title: "Cloud Computing Job Simulation",
    organization: "Amazon Web Services · Forage",
    category: "Programs & Fellowships",
    description:
      "Virtual work-experience program simulating real cloud computing tasks at Amazon Web Services.",
    result: "Job Simulation",
    skills: ["Cloud", "AWS"],
    credentialUrl: "/certificates/aws-forage.pdf",
    featured: true,
    tier: 2,
  },
  {
    title: "Leadership Development Program",
    organization: "iLead Rwanda",
    category: "Leadership",
    description:
      "Leadership development program focused on personal growth, responsibility and leading teams.",
    skills: ["Leadership"],
    credentialUrl: "/certificates/ilead-rwanda.pdf",
    featured: true,
    tier: 2,
  },
  {
    title: "AI Literacy",
    organization: "IBM SkillsBuild",
    category: "Certifications",
    description:
      "Artificial intelligence literacy certification from IBM SkillsBuild.",
    skills: ["AI"],
    credentialUrl: "/certificates/ai-literacy-ibm-skillsbuild.pdf",
    tier: 2,
  },
  {
    title: "Software Engineering Job Simulation",
    organization: "Electronic Arts · Forage",
    category: "Programs & Fellowships",
    description:
      "Virtual work-experience program simulating software engineering work at Electronic Arts.",
    result: "Job Simulation",
    skills: ["Software Engineering"],
    credentialUrl: "/certificates/ea-forage.pdf",
    tier: 2,
  },
  {
    title: "Digital Marketing Job Simulation",
    organization: "DACOM Digital · Forage",
    category: "Programs & Fellowships",
    description:
      "Virtual work-experience program completed through DACOM's simulation on the Forage platform.",
    result: "Job Simulation",
    credentialUrl: "/certificates/dacom-forage.pdf",
    tier: 2,
  },
  {
    title: "Play Store Listing",
    organization: "Google Play",
    category: "Certifications",
    description:
      "Certification covering how to design effective Google Play Store listings for Android apps.",
    skills: ["Google Play", "App Listings"],
    credentialUrl: "/certificates/google-play-store-listing.pdf",
    tier: 2,
  },

  /* --- Tier 3: supporting credentials (kept compact) ------------------ */
  {
    title: "AI & Machine Learning — Intermediate",
    organization: "DTP",
    category: "Certifications",
    description:
      "Intermediate-level certificate in artificial intelligence and machine learning.",
    skills: ["AI", "Machine Learning"],
    credentialUrl: "/certificates/ai-ml-intermediate-dtp.pdf",
    tier: 3,
  },
  {
    title: "AI & Machine Learning — Beginner",
    organization: "DTP",
    category: "Certifications",
    description:
      "Beginner-level certificate in artificial intelligence and machine learning.",
    skills: ["AI", "Machine Learning"],
    credentialUrl: "/certificates/ai-ml-beginner-dtp.pdf",
    tier: 3,
  },
  {
    title: "Understand How AI Impacts You and Your Government",
    organization: "Apolitical",
    category: "Certifications",
    description:
      "Course certificate exploring how artificial intelligence is shaping government and public services.",
    skills: ["AI", "Public Sector"],
    credentialUrl: "/certificates/apolitical-ai-government.pdf",
    tier: 3,
  },
  {
    title: "Introduction to Artificial Intelligence",
    organization: "Great Learning",
    category: "Certifications",
    description:
      "Introductory course certificate covering the fundamentals of artificial intelligence.",
    skills: ["AI"],
    credentialUrl: "/certificates/great-learning-intro-ai.pdf",
    tier: 3,
  },
];

/**
 * Display order everywhere: featured/tier first, supporting credentials last.
 */
export const orderedAchievements = [...achievementsData].sort(
  (a, b) =>
    Number(Boolean(b.featured)) - Number(Boolean(a.featured)) ||
    a.tier - b.tier,
);

/** Featured picks for the homepage preview (tier order preserved). */
export const featuredAchievements = achievementsData.filter(
  (achievement) => achievement.featured,
);

/** Homepage keeps a tight edit — strongest six after the lead feature. */
export const homepageAchievements = orderedAchievements
  .filter((achievement) => achievement !== featuredAchievements[0])
  .slice(0, 6);

/**
 * Homepage credibility summary — computed from the data above so the
 * numbers always reflect reality (no inflated counts).
 */
export function getAchievementStats() {
  const count = (category: AchievementCategory) =>
    achievementsData.filter((achievement) => achievement.category === category)
      .length;

  return [
    { value: count("Certifications"), label: "Certifications" },
    { value: count("Awards & Competitions"), label: "Awards & Competitions" },
    {
      value: count("Leadership") + count("Programs & Fellowships"),
      label: "Programs & Leadership",
    },
    { value: count("Projects & Innovation"), label: "Projects & Innovation" },
  ].filter((stat) => stat.value > 0);
}
