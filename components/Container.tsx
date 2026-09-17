export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[1180px] px-6 md:px-10">{children}</div>
  );
}

export function SectionLabel({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="flex items-baseline gap-3 md:flex-col md:gap-1">
      <span className="font-mono text-xs text-faint tabular-nums">{index}</span>
      <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
        {title}
      </h2>
    </div>
  );
}
