"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const routeLabels: Record<string, string> = {
  about: "About",
  projects: "Projects",
  experience: "Experience",
  achievements: "Achievements",
  contact: "Contact",
};

export function Breadcrumbs() {
  const pathname = usePathname();
  const segment = pathname.split("/").filter(Boolean)[0];

  if (!segment) return null;

  const label = routeLabels[segment] ?? segment;

  return (
    <nav aria-label="Breadcrumb" className="px-6 pt-8 pb-2 md:px-10 lg:px-20">
      <ol className="flex items-center gap-2 text-sm text-muted">
        <li>
          <Link
            href="/"
            className="transition-colors duration-200 hover:text-primary"
          >
            Home
          </Link>
        </li>
        <li aria-hidden="true" className="select-none">/</li>
        <li aria-current="page" className="font-medium text-primary">
          {label}
        </li>
      </ol>
    </nav>
  );
}
