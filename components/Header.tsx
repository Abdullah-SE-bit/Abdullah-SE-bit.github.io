import { Container } from "./Container";
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
          <nav className="flex items-center gap-6">
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
              href="#experience"
              className="hidden font-mono text-xs uppercase tracking-[0.14em] text-muted hover:text-foreground sm:block"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="font-mono text-xs uppercase tracking-[0.14em] text-muted hover:text-foreground"
            >
              Contact
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </Container>
    </header>
  );
}
