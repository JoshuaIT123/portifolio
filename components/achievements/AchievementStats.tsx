import { getAchievementStats } from "@/lib/achievements";

/**
 * Small credibility summary computed from the real data — only non-zero
 * categories are rendered, so numbers can never outrun the evidence.
 */
export function AchievementStats() {
  const stats = getAchievementStats();

  return (
    <dl className="flex flex-wrap gap-x-12 gap-y-6">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col">
          <dt className="order-2 mt-1 text-xs font-medium uppercase tracking-[0.18em] text-muted">
            {stat.label}
          </dt>
          <dd className="order-1 font-heading text-3xl font-bold text-primary">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
