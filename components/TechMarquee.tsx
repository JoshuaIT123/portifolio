import { getTechIcon } from "@/lib/tech-icons";
import { tools } from "@/lib/site";

export function TechMarquee() {
  const items = Array.from(new Set(tools.flatMap((tool) => tool.items)));

  return (
    <div aria-hidden="true" className="relative overflow-hidden">
      <div className="flex w-max animate-[marquee_40s_linear_infinite] items-center gap-16 py-6 text-muted/60 hover:[animation-play-state:paused]">
        {[...items, ...items].map((name, i) => {
          const Icon = getTechIcon(name);
          if (!Icon) return null;
          return (
            <span
              key={`${name}-${i}`}
              className="flex shrink-0 items-center gap-2.5 text-sm transition-colors duration-300 hover:text-accent"
            >
              <Icon aria-hidden={true} className="size-4" />
              {name}
            </span>
          );
        })}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-bg to-transparent" />
    </div>
  );
}
