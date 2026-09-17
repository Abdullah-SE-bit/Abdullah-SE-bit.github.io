import { Container, SectionLabel } from "./Container";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="border-b border-line">
      <Container>
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 py-20 md:py-28">
          <div className="col-span-12 md:col-span-2">
            <SectionLabel index="01" title="Projects" />
          </div>
          <div className="col-span-12 md:col-span-10">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                index={String(i + 1).padStart(2, "0")}
                title={project.title}
                context={project.context}
                problemStatement={project.problemStatement}
                solution={project.solution}
                techStack={project.techStack}
                demoMedia={project.demoMedia}
                githubLink={project.githubLink}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
