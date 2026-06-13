import { Phone, MessageSquareText, Heart } from "lucide-react";
import { air, crisis } from "@/app/air-sandbox/data";

const navItems = [
  { href: "#mission", label: "Our Mission" },
  { href: "#programs", label: "Programs" },
  { href: "#story", label: "Our Story" },
  { href: "#involved", label: "Get Involved" },
];

export function CrisisBar() {
  return (
    <div className="bg-slate-900 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-1 px-6 py-2 text-center text-sm sm:flex-row sm:gap-6">
        <span className="font-medium text-amber-300">In crisis or worried about someone?</span>
        <a href={crisis.lifeline.href} className="inline-flex items-center gap-1.5 hover:text-amber-200">
          <Phone className="h-3.5 w-3.5" aria-hidden /> {crisis.lifeline.label}
        </a>
        <a href={crisis.text.href} className="inline-flex items-center gap-1.5 hover:text-amber-200">
          <MessageSquareText className="h-3.5 w-3.5" aria-hidden /> {crisis.text.label}
        </a>
      </div>
    </div>
  );
}

export function AirNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 backdrop-blur supports-[backdrop-filter]:bg-slate-50/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-semibold tracking-tight text-slate-900">
            AIR
          </span>
          <span className="hidden text-sm leading-tight text-slate-500 sm:block">
            Attitudes
            <br />
            In Reverse<sup className="text-[0.6em]">®</sup>
          </span>
        </a>
        <div className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="group relative py-1 transition-colors hover:text-slate-900">
              {item.label}
              <span
                aria-hidden
                className="absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-teal-600 transition-transform duration-300 ease-out group-hover:scale-x-100"
              />
            </a>
          ))}
        </div>
        <a
          href={air.links.donate}
          className="inline-flex items-center gap-1.5 rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-slate-900 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-amber-400"
        >
          <Heart className="h-4 w-4" aria-hidden /> Donate
        </a>
      </nav>
    </header>
  );
}

export function AirFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="font-serif text-2xl font-semibold text-white">Attitudes In Reverse®</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">{air.tagline}</p>
          <p className="mt-4 text-sm text-slate-400">{air.location}</p>
          <p className="mt-1 text-xs text-slate-500">A registered 501(c)(3) nonprofit · EIN 27-2372917</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-white">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Get help now</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href={crisis.lifeline.href} className="hover:text-white">988 — Suicide & Crisis Lifeline</a></li>
            <li><a href={crisis.text.href} className="hover:text-white">Text HOME to 741741</a></li>
            <li><a href={air.links.donate} className="font-medium text-amber-300 hover:text-amber-200">Donate to AIR</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <p className="mx-auto max-w-6xl px-6 py-5 text-xs text-slate-500">
          Design prototype for board review — not the live site. © {new Date().getFullYear()} Attitudes In Reverse®.
        </p>
      </div>
    </footer>
  );
}
