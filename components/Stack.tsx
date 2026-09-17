import { Container, SectionLabel } from "./Container";
import { icons } from "@/lib/icons";
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
            <ul>
              {stack.map((group) => (
                <li
                  key={group.label}
                  className="grid grid-cols-12 gap-x-6 gap-y-5 border-t border-line py-10 first:border-t-0 first:pt-0 last:pb-0"
                >
                  <h3 className="col-span-12 text-base font-medium text-foreground md:col-span-3">
                    {group.label}
                  </h3>
                  <ul className="col-span-12 flex flex-wrap gap-x-8 gap-y-5 md:col-span-9">
                    {group.items.map((name) => (
                      <li key={name} className="flex items-center gap-2.5">
                        <svg
                          viewBox={icons[name].viewBox}
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-5 shrink-0 text-foreground"
                        >
                          <path d={icons[name].path} />
                        </svg>
                        <span className="text-muted">{name}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
