import { Container } from "./Container";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="border-b border-line">
      <Container>
        <div className="grid grid-cols-12 gap-x-6 py-24 md:py-36">
          <div className="col-span-12 md:col-span-9">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              {profile.name}
            </p>
            <h1 className="mt-8 max-w-4xl text-3xl font-medium leading-[1.15] tracking-[-0.02em] text-foreground sm:text-4xl md:text-5xl">
              {profile.intro}
            </h1>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#projects"
                className="border border-foreground px-5 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-foreground hover:bg-foreground hover:text-background"
              >
                View Projects
              </a>
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                {profile.availability}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
