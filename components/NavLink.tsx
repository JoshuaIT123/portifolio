import Link from "next/link";
import type { NavItem } from "@/lib/site";

type NavLinkProps = {
  item: NavItem;
  onClick?: () => void;
};

export function NavLink({ item, onClick }: NavLinkProps) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      aria-current={item.active ? "page" : undefined}
      className="group relative py-2 text-sm font-medium transition-colors duration-300"
    >
      <span
        className={`transition-colors duration-300 ${
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
