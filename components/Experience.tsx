import { Container, SectionLabel } from "./Container";
import { experience } from "@/lib/data";

// Scaffolded but not mounted in app/page.tsx: the source portfolio carries no
// experience or leadership data. Renders nothing while `experience` is empty,
// so an accidental mount cannot ship placeholder copy.
export function Experience({ index = "03" }: { index?: string }) {
  if (experience.length === 0) return null;

  return (
    <section id="experience" className="border-b border-line">
      <Container>
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 py-20 md:py-28">
          <div className="col-span-12 md:col-span-2">
            <SectionLabel index={index} title="Experience" />
          </div>
          <div className="col-span-12 md:col-span-10">
            <ol>
              {experience.map((entry) => (
                <li
                  key={`${entry.organisation}-${entry.period}`}
                  className="grid grid-cols-12 gap-x-6 gap-y-2 border-t border-line py-8 first:border-t-0 first:pt-0"
                >
                  <div className="col-span-12 md:col-span-3">
                    <span className="font-mono text-xs text-faint tabular-nums">
                      {entry.period}
                    </span>
                  </div>
                  <div className="col-span-12 md:col-span-9">
                    <h3 className="text-lg font-medium text-foreground">
                      {entry.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-muted">
                      {entry.organisation}
                    </p>
                    <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                      {entry.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
