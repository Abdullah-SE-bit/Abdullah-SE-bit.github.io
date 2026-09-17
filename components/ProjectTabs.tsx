"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import type { Project } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";

// Vertical tabs per the WAI-ARIA pattern: roving tabindex, arrow/Home/End keys.
// Every panel is rendered and inactive ones are `hidden`, so the static export
// still carries all project content for crawlers and no-JS visitors.
export function ProjectTabs({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, i: number) {
    const last = projects.length - 1;
    const targets: Record<string, number> = {
      ArrowDown: i === last ? 0 : i + 1,
      ArrowUp: i === 0 ? last : i - 1,
      Home: 0,
      End: last,
    };
    const next = targets[event.key];
    if (next === undefined) return;
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className="grid grid-cols-12 gap-x-6 gap-y-10">
      <div
        role="tablist"
        aria-label="Projects"
        aria-orientation="vertical"
        className="col-span-12 flex flex-col self-start border-t border-line lg:col-span-4"
      >
        {projects.map((project, i) => {
          const selected = i === active;
          return (
            <button
              key={project.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              id={`project-tab-${project.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`project-panel-${project.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(event) => onKeyDown(event, i)}
              className={`flex w-full items-baseline gap-4 border-b border-l-2 border-b-line px-4 py-4 text-left ${
                selected
                  ? "border-l-foreground bg-surface text-foreground"
                  : "border-l-transparent text-muted hover:text-foreground"
              }`}
            >
              <span className="font-mono text-xs text-faint tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-medium">{project.title}</span>
            </button>
          );
        })}
      </div>

      {projects.map((project, i) => (
        <div
          key={project.id}
          id={`project-panel-${project.id}`}
          role="tabpanel"
          aria-labelledby={`project-tab-${project.id}`}
          hidden={i !== active}
          className="col-span-12 lg:col-span-8"
        >
          <ProjectCard
            title={project.title}
            context={project.context}
            problemStatement={project.problemStatement}
            solution={project.solution}
            techStack={project.techStack}
            demoMedia={project.demoMedia}
            githubLink={project.githubLink}
          />
        </div>
      ))}
    </div>
  );
}
