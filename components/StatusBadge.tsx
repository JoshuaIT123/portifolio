type StatusBadgeProps = {
  text: string;
};

export function StatusBadge({ text }: StatusBadgeProps) {
  return (
    <p className="inline-flex items-center gap-2.5 rounded-pill border border-card-border bg-card/50 px-4 py-2 text-sm font-medium tracking-wide text-muted">
      <span aria-hidden="true" className="relative flex size-2">
        <span
          className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
          style={{ backgroundColor: "var(--accent)" }}
        />
        <span
          className="relative inline-flex size-2 rounded-full"
          style={{ backgroundColor: "var(--accent)" }}
        />
      </span>
      {text}
    </p>
  );
}
