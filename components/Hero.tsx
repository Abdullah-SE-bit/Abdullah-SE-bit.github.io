import { Container } from "./Container";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="border-b border-line">
      <Container>
        <div className="grid grid-cols-12 items-center gap-x-6 gap-y-10 py-16 md:py-24">
          <div className="col-span-12 md:col-span-7 lg:col-span-8">
            <h1 className="text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-balance text-foreground sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-6 text-lg leading-snug md:text-xl">
              <span className="block text-foreground">{profile.role}</span>
              <span className="block text-muted">{profile.tagline}</span>
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
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

          <div className="order-first col-span-12 md:order-none md:col-span-5 lg:col-span-4">
            <figure className="w-full max-w-[220px] border border-line bg-surface p-3 md:ml-auto md:max-w-[340px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profile.photo.src}
                width={profile.photo.width}
                height={profile.photo.height}
                alt={profile.name}
                fetchPriority="high"
                className="aspect-[4/5] h-auto w-full object-cover"
              />
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
}
