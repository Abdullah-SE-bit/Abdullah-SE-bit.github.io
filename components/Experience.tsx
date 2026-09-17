import { Container, SectionLabel } from "./Container";
import { education } from "@/lib/data";

// Year label is 20px tall; its dot and the connecting line centre on 10px.
export function Experience() {
  const { timeline } = education;

  return (
    <section id="experience" className="border-b border-line">
      <Container>
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 py-20 md:py-28">
          <div className="col-span-12 md:col-span-2">
            <SectionLabel index="03" title="Experience" />
          </div>
          <div className="col-span-12 md:col-span-10">
            <h3 className="text-2xl font-medium tracking-[-0.01em] text-foreground md:text-3xl">
              {education.degree}
            </h3>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-muted">
              {education.institution}
              <span aria-hidden="true" className="mx-3 text-faint">
                |
              </span>
              {education.status}
            </p>

            <ol className="mt-12">
              {timeline.map((entry, i) => {
                const onLeft = i % 2 === 0;
                return (
                  <li
                    key={entry.year}
                    className="relative grid grid-cols-[1.5rem_1fr] gap-x-4 pb-10 last:pb-0 md:grid-cols-[1fr_2.5rem_1fr] md:gap-x-8"
                  >
                    {i < timeline.length - 1 ? (
                      <span
                        aria-hidden="true"
                        className="absolute top-[10px] bottom-[-10px] left-[0.75rem] w-px -translate-x-1/2 bg-line md:left-1/2"
                      />
                    ) : null}

                    <span
                      aria-hidden="true"
                      className="relative col-start-1 row-start-1 mt-[5px] h-2.5 w-2.5 justify-self-center rounded-full bg-foreground md:col-start-2"
                    />

                    <p
                      className={`col-start-2 row-start-1 self-start font-mono text-sm leading-5 font-semibold text-foreground tabular-nums ${
                        onLeft ? "md:col-start-3" : "md:col-start-1 md:text-right"
                      }`}
                    >
                      {entry.year}
                    </p>

                    <div
                      className={`col-start-2 row-start-2 mt-3 border border-line bg-surface p-5 md:row-start-1 md:mt-0 ${
                        onLeft ? "md:col-start-1" : "md:col-start-3"
                      }`}
                    >
                      <h4 className="text-lg font-medium text-foreground">
                        {entry.title}
                      </h4>
                      <p className="mt-2 leading-relaxed text-muted">
                        {entry.courses.join(", ")}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
