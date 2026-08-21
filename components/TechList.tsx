import { getTechIcon } from "@/lib/tech-icons";

type TechListProps = {
  items: string[];
  /** "md" for the stack section, "sm" for project cards */
  size?: "sm" | "md";
  className?: string;
};

/** Renders tech names with their brand icons in a wrapping row. */
export function TechList({ items, size = "md", className = "" }: TechListProps) {
  const iconSize = size === "sm" ? "size-3.5" : "size-4";
  const labelSize =
    size === "sm" ? "text-xs uppercase tracking-[0.14em]" : "text-sm";

  return (
    <ul className={`flex flex-wrap gap-x-5 gap-y-2 ${className}`}>
      {items.map((item) => {
        const Icon = getTechIcon(item);
        return (
          <li
            key={item}
            className={`inline-flex items-center gap-2 ${
              size === "sm" ? "text-muted" : "text-primary"
            }`}
          >
            {Icon && <Icon className={iconSize} aria-hidden="true" />}
            <span className={labelSize}>{item}</span>
          </li>
        );
      })}
    </ul>
  );
}
