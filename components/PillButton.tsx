import Link from "next/link";
import type { ReactNode } from "react";

type PillButtonProps = {
  variant: "primary" | "secondary";
  href: string;
  children: ReactNode;
  className?: string;
};

const baseStyles =
  "inline-flex items-center justify-center rounded-pill px-7 py-3.5 text-sm font-medium transition-all duration-200";

const variantStyles = {
  /** Solid lime with a soft glow */
  primary:
    "bg-accent text-bg shadow-[0_0_24px_color-mix(in_srgb,var(--accent)_25%,transparent)] hover:shadow-[0_0_36px_color-mix(in_srgb,var(--accent)_40%,transparent)] hover:brightness-110",
  /** Outlined lime */
  secondary:
    "border border-accent bg-transparent text-accent hover:bg-accent/10",
} as const;

/** Pill-shaped CTA rendered as a real link. */
export function PillButton({
  variant,
  href,
  children,
  className = "",
}: PillButtonProps) {
  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
