import Link from "next/link";
import type { NavItem } from "@/lib/site";

type NavLinkProps = {
  item: NavItem;
  onClick?: () => void;
};

/**
 * Single nav link — works in both horizontal (top bar) and vertical (drawer)
 * layouts. Active state uses an accent underline instead of a sidebar dash.
 */
export function NavLink({ item, onClick }: NavLinkProps) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      aria-current={item.active ? "page" : undefined}
      className={`
        relative py-1 text-sm font-medium transition-colors duration-200
        ${
          item.active
            ? "text-accent"
            : "text-muted hover:text-primary"
        }
      `}
    >
      {item.label}
      {item.active && (
        <span
          aria-hidden="true"
          className="absolute -bottom-[1px] left-0 h-[2px] w-full rounded-full bg-accent"
        />
      )}
    </Link>
  );
}
