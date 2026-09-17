// Same fixed black-and-white mark as app/icon.svg in both themes. On the dark
// header a black square would vanish, so dark mode adds a hairline outline.
export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" fill="#0a0a0a" />
      <rect
        x="0.5"
        y="0.5"
        width="31"
        height="31"
        fill="none"
        strokeWidth="1"
        className="hidden stroke-line dark:block"
      />
      <path
        d="M8 10l6 6-6 6M17 22h7"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinecap="square"
      />
    </svg>
  );
}
