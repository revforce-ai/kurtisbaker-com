import Link from "next/link";

const navItems = [
  { href: "#what-i-do", label: "What I Do" },
  { href: "#companies", label: "Companies" },
  { href: "#about", label: "About" },
  { href: "#media", label: "Media" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-bg/75 border-b border-border/60">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-serif text-xl tracking-tight text-ink hover:text-accent transition-colors"
          style={{ fontVariationSettings: '"opsz" 36' }}
        >
          Kurt Baker
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-ink-muted">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative py-1 transition-colors hover:text-ink"
            >
              {item.label}
              <span
                aria-hidden
                className="absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100"
              />
            </a>
          ))}
        </div>
        <a
          href="https://link.revforce.ai/widget/bookings/meet-with-kurt"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-ink px-4 py-2 text-sm font-medium text-bg transition-all hover:bg-accent hover:-translate-y-0.5"
        >
          Book a call
        </a>
      </nav>
    </header>
  );
}
