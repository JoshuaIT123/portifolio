import Link from "next/link";
import type { ReactNode } from "react";

type PillButtonProps = {
  variant: "primary" | "secondary";
  href: string;
  children: ReactNode;
  className?: string;
};

const baseStyles =
  "inline-flex items-center justify-center rounded-pill px-8 py-3.5 text-sm font-semibold transition-all duration-300 active:scale-[0.97]";

const variantStyles = {
  primary:
    "bg-accent/10 text-accent border border-accent/50 hover:bg-accent/20 hover:border-accent hover:shadow-[0_0_20px_-4px_var(--accent)]",
  secondary:
    "border border-muted/30 bg-transparent text-primary hover:border-accent hover:text-accent hover:shadow-[0_0_20px_-4px_var(--accent)]",
} as const;

export function PillButton({
  variant,
  href,
  children,
  className = "",
}: PillButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  /* Use plain <a> for mailto/tel so the browser handles them directly
   * without any client-side routing interference. */
  if (href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
