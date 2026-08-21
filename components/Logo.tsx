import Link from "next/link";
import { siteConfig } from "@/lib/site";

/** Fixed top-left wordmark. Uppercase, wide tracking, muted by default. */
export function Logo() {
  return (
    <Link
      href="/"
      className="text-xs font-medium uppercase tracking-[2px] text-muted transition-colors duration-200 hover:text-primary"
    >
      {siteConfig.name}
    </Link>
  );
}
