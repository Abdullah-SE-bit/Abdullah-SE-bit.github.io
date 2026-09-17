import { Container } from "./Container";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "@/lib/data";

export function Header() {
  return (
    <header className="border-b border-line">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a
            href="#top"
            className="font-mono text-sm tracking-tight text-foreground"
          >
            {profile.mark}
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
