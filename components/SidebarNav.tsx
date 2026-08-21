import type { NavItem } from "@/lib/site";
import { NavLink } from "@/components/NavLink";

type SidebarNavProps = {
  items: NavItem[];
};

/**
 * Desktop vertical sidebar navigation (hidden below the `md` breakpoint,
 * where MobileNav takes over). Fixed to the left edge, starting ~25% from
 * the top, 160px wide with 32px gaps between items.
 */
export function SidebarNav({ items }: SidebarNavProps) {
  return (
    <nav
      aria-label="Primary"
      className="fixed left-0 top-[25vh] z-30 hidden w-40 flex-col gap-8 md:flex"
    >
      <ul className="flex flex-col gap-8">
        {items.map((item) => (
          <li key={item.label}>
            <NavLink item={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
