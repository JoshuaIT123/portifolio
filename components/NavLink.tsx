import Link from "next/link";
import type { NavItem } from "@/lib/site";

type NavLinkProps = {
  item: NavItem;
  onClick?: () => void;
  index?: number;
};

export function NavLink({ item, onClick, index }: NavLinkProps) {
  const number = index !== undefined ? `0${index + 1}.` : undefined;

  return (
    <Link
      href={item.href}
      onClick={onClick}
      aria-current={item.active ? "page" : undefined}
      className="group relative flex items-center gap-2 py-2 text-sm transition-colors duration-300"
    >
      {number && (
        <span
          className="font-mono text-xs transition-colors duration-300"
          style={{ color: item.active ? "var(--accent)" : "var(--text-muted)" }}
        >
          {number}
        </span>
      )}
      <span
        className={`font-medium transition-colors duration-300 ${
          item.active ? "text-accent" : "text-muted group-hover:text-primary"
        }`}
      >
        {item.label}
      </span>
      {item.active && (
        <span
          aria-hidden="true"
          className="absolute -bottom-0.5 left-0 h-[2px] w-full rounded-full bg-accent"
          style={{ animation: "scale-in 0.3s ease-out" }}
        />
      )}
    </Link>
  );
}
