import Link from "next/link";
import type { NavItem } from "@/lib/site";

type NavLinkProps = {
  item: NavItem;
  /** e.g. the mobile drawer closes itself when a link is clicked */
  onClick?: () => void;
};

/**
 * Single nav link shared by the desktop sidebar and the mobile drawer.
 * Active state is driven purely by props (wire up scroll-spy later).
 */
export function NavLink({ item, onClick }: NavLinkProps) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      aria-current={item.active ? "page" : undefined}
      className={`
        group flex items-center gap-3 border-l-2 py-1 pl-4 text-sm transition-colors duration-200
        ${
          item.active
            ? "border-accent text-primary"
            : "border-transparent text-muted hover:text-primary"
        }
      `}
    >
      {/* Small dash indicator shown only on the active item */}
      <span
        aria-hidden="true"
        className={`h-px w-4 bg-accent transition-opacity duration-200 ${
          item.active ? "opacity-100" : "opacity-0"
        }`}
      />
      {item.label}
    </Link>
  );
}
