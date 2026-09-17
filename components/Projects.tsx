import { Container, SectionLabel } from "./Container";
import { ProjectTabs } from "./ProjectTabs";
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
            <ProjectTabs projects={projects} />
          </div>
        </div>
      </Container>
    </section>
  );
}
