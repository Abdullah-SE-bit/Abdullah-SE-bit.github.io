// Same mark as app/icon.svg; theme colours come from the design tokens here.
export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" className="fill-foreground" />
      <path
        d="M8 10l6 6-6 6M17 22h7"
        fill="none"
        strokeWidth="2.5"
        strokeLinecap="square"
        className="stroke-background"
      />
    </svg>
  );
}
