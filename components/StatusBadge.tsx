type StatusBadgeProps = {
  text: string;
};

/**
 * Subtle pill badge with a green pulsing dot — signals availability and
 * builds immediate professional trust above the hero headline.
 * The ping layer is disabled for reduced-motion users.
 */
export function StatusBadge({ text }: StatusBadgeProps) {
  return (
    <p className="inline-flex items-center gap-2.5 rounded-pill border border-card-border bg-card px-3.5 py-1.5 text-xs font-medium tracking-wide text-muted">
      <span aria-hidden="true" className="relative flex size-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:hidden" />
        <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
      </span>
      {text}
    </p>
  );
}
