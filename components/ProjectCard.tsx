import type { DemoMedia } from "@/lib/data";

export interface ProjectCardProps {
  title: string;
  context: string;
  problemStatement: string;
  solution: string;
  techStack: string[];
  demoMedia: DemoMedia | null;
  githubLink: string | null;
}

export function ProjectCard({
  title,
  context,
  problemStatement,
  solution,
  techStack,
  demoMedia,
  githubLink,
}: ProjectCardProps) {
  return (
    <article>
      <h3 className="text-2xl font-medium tracking-[-0.01em] text-foreground md:text-3xl">
        {title}
      </h3>
      <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-muted">
        {context}
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
        <ul className="flex flex-wrap gap-x-3 gap-y-2">
          {techStack.map((tech) => (
            <li
              key={tech}
              className="border border-line px-2 py-1 font-mono text-[11px] text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        {githubLink ? (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-line pb-0.5 font-mono text-xs uppercase tracking-[0.14em] text-accent hover:border-accent"
          >
            Source
          </a>
        ) : null}
      </div>

      <div className="mt-8">
        <DemoMediaSlot media={demoMedia} title={title} />

        <dl className="mt-8 space-y-6">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
              Problem
            </dt>
            <dd className="mt-2 max-w-2xl leading-relaxed text-muted">
              {problemStatement}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
              Solution
            </dt>
            <dd className="mt-2 max-w-2xl leading-relaxed text-foreground">
              {solution}
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

function DemoMediaSlot({
  media,
  title,
}: {
  media: DemoMedia | null;
  title: string;
}) {
  if (!media) {
    return (
      <div className="flex aspect-[16/9] w-full items-center justify-center border border-dashed border-muted/40 bg-surface">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          No capture
        </span>
      </div>
    );
  }

  if (media.type === "video") {
    return (
      <video
        src={media.src}
        muted
        loop
        playsInline
        controls
        aria-label={media.alt}
        className="aspect-[16/9] w-full border border-line bg-surface object-cover"
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={media.src}
      alt={media.alt || `${title} screenshot`}
      loading="lazy"
      className="aspect-[16/9] w-full border border-line bg-surface object-cover"
    />
  );
}
