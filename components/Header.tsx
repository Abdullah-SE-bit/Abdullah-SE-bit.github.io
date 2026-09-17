import { Container } from "./Container";
import { DownloadIcon } from "./DownloadIcon";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "@/lib/data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="#top" aria-label={`${profile.name}, back to top`}>
            <Logo className="h-7 w-7" />
          </a>
          <nav className="flex items-center gap-3 sm:gap-6">
            <a
              href="#projects"
              className="font-mono text-xs uppercase tracking-[0.14em] text-muted hover:text-foreground"
            >
              Projects
            </a>
            <a
              href="#stack"
              className="hidden font-mono text-xs uppercase tracking-[0.14em] text-muted hover:text-foreground sm:block"
            >
              Stack
            </a>
            <a
              href="#education"
              className="hidden font-mono text-xs uppercase tracking-[0.14em] text-muted hover:text-foreground sm:block"
            >
              Education
            </a>
            <a
              href="#contact"
              className="font-mono text-xs uppercase tracking-[0.14em] text-muted hover:text-foreground"
            >
              Contact
            </a>
            <a
              href={profile.cv.src}
              download={profile.cv.fileName}
              className="flex h-8 w-8 items-center justify-center gap-2 border border-line font-mono text-xs uppercase tracking-[0.14em] text-muted hover:border-foreground hover:text-foreground md:w-auto md:px-3"
            >
              <DownloadIcon className="h-3.5 w-3.5 shrink-0" />
              <span className="sr-only md:not-sr-only">Download CV</span>
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </Container>
    </header>
  );
}
