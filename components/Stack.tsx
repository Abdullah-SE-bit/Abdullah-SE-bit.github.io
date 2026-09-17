import { Container, SectionLabel } from "./Container";
import { stack } from "@/lib/data";

export function Stack() {
  return (
    <section id="stack" className="border-b border-line">
      <Container>
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 py-20 md:py-28">
          <div className="col-span-12 md:col-span-2">
            <SectionLabel index="02" title="Stack" />
          </div>
          <div className="col-span-12 md:col-span-10">
            <dl className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2">
              {stack.map((group) => (
                <div key={group.label}>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                    {group.label}
                  </dt>
                  <dd className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                    {group.items.map((item) => (
                      <span key={item} className="text-muted">
                        {item}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
