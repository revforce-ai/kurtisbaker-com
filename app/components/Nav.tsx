import Link from "next/link";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-bg/75 border-b border-border/60">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-serif text-xl tracking-tight text-ink hover:text-accent transition-colors"
        >
          Kurt Baker
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-ink-muted">
          <a href="#what-i-do" className="hover:text-ink transition-colors">
            What I Do
          </a>
          <a href="#companies" className="hover:text-ink transition-colors">
            Companies
          </a>
          <a href="#about" className="hover:text-ink transition-colors">
            About
          </a>
          <a href="#media" className="hover:text-ink transition-colors">
            Media
          </a>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center rounded-full bg-ink px-4 py-2 text-sm font-medium text-bg hover:bg-accent transition-colors"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
