import { Container, SectionLabel } from "./Container";
import { profile } from "@/lib/data";

const links = [
  {
    label: "GitHub",
    value: profile.githubHandle,
    href: profile.github,
    icon: (
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    ),
  },
  {
    label: "LinkedIn",
    value: profile.linkedinHandle,
    href: profile.linkedin,
    icon: (
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6.5 0h3.8v1.71h.05a4.17 4.17 0 0 1 3.75-2.06c4.01 0 4.75 2.64 4.75 6.07V21h-4v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-4V9Z" />
    ),
  },
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: (
      <path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5v-13Zm2.2.5 7.8 6 7.8-6H4.2ZM20 8.2l-7.36 5.66a1 1 0 0 1-1.28 0L4 8.2V18h16V8.2Z" />
    ),
  },
];

export function Footer() {
  return (
    <footer id="contact">
      <Container>
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 py-20 md:py-28">
          <div className="col-span-12 md:col-span-2">
            <SectionLabel index="04" title="Contact" />
          </div>
          <div className="col-span-12 md:col-span-10">
            <ul className="grid grid-cols-1 border-t border-line sm:grid-cols-3">
              {links.map((link) => (
                <li key={link.label} className="border-b border-line sm:border-b-0">
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-3 py-5 text-muted hover:text-foreground sm:py-6"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-[18px] w-[18px] shrink-0"
                      aria-hidden="true"
                    >
                      {link.icon}
                    </svg>
                    <span className="flex flex-col">
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                        {link.label}
                      </span>
                      <span className="mt-0.5 text-sm break-all">
                        {link.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-16 font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
              {profile.name}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
