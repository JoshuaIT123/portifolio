type StatusBadgeProps = {
  text: string;
};

/** Small lime status dot (with glow) + uppercase label. */
export function StatusBadge({ text }: StatusBadgeProps) {
  return (
    <p className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.18em] text-muted">
      <span
        aria-hidden="true"
        className="size-2 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]"
      />
      {text}
    </p>
  );
}
