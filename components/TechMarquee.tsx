import { getTechIcon } from "@/lib/tech-icons";
import { tools } from "@/lib/site";

/**
 * Auto-scrolling tech marquee directly under the hero. Muted, low-opacity
 * brand icons that dissolve into the background at both edges via overlay
 * gradients (plus a mask-image where compositing supports it). The overlays
 * are separate from the animated track so edge fade never breaks.
 * Purely decorative.
 */
export function TechMarquee() {
  const items = Array.from(new Set(tools.flatMap((tool) => tool.items)));

  return (
    <div aria-hidden="true" className="relative mb-24 overflow-hidden">
      {/* Very subtle float — no pills/borders, soft edge fade via overlays
          plus mask-image where compositing supports it */}
      <div className="flex w-max animate-[marquee_36s_linear_infinite] items-center gap-14 py-5 text-primary/80 opacity-40 hover:[animation-play-state:paused]">
        {[...items, ...items].map((name, i) => {
          const Icon = getTechIcon(name);
          if (!Icon) return null;
          return (
            <span
              key={`${name}-${i}`}
                className="flex shrink-0 items-center gap-2 text-sm"
            >
              <Icon aria-hidden={true} className="size-4" />
              {name}
            </span>
          );
        })}
      </div>

      {/* Edge dissolve: solid bg-color gradients pinned over both ends */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />
    </div>
  );
}
