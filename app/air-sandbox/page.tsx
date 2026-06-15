import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/app/components/ScrollReveal";
import { air, stats, programs, involve, faqs } from "./air-data";

export const metadata: Metadata = {
  title: "Attitudes In Reverse® — Youth Mental Health & Suicide Prevention",
  description:
    "A design sandbox for Attitudes In Reverse® (AIR) — a nonprofit educating young people about mental health and suicide prevention since 2009. Start the conversation. Reverse an attitude. Save a life.",
  robots: { index: false, follow: false }, // sandbox: keep out of search
  alternates: { canonical: "https://kurtisbaker.com/air-sandbox" },
};

/* ---------------------------------------------------------------- helpers */

function CoralButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold text-white shadow-[0_6px_20px_-6px_rgba(239,111,83,0.6)] transition-all hover:-translate-y-0.5 ${className}`}
      style={{ background: "var(--air-coral)" }}
    >
      {children}
    </a>
  );
}

function AirMesh() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-bg" />
      <div
        className="absolute -right-32 -top-40 h-[640px] w-[640px] rounded-full opacity-[0.30] blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(14,125,120,0.55), transparent 70%)",
        }}
      />
      <div
        className="absolute -left-40 top-1/4 h-[520px] w-[520px] rounded-full opacity-[0.22] blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(239,111,83,0.40), transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-40 right-12 h-[560px] w-[560px] rounded-full opacity-[0.18] blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(47,143,157,0.5), transparent 70%)",
        }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------- page */

export default function AirSandboxPage() {
  return (
    <div className="air-theme min-h-screen bg-bg text-ink">
      {/* Crisis bar — always-visible help. Hallmark of a responsible MH site. */}
      <div
        className="w-full text-center text-sm text-white"
        style={{ background: "var(--ink)" }}
      >
        <div className="mx-auto max-w-6xl px-6 py-2">
          In crisis or worried about someone?{" "}
          <a href={air.crisis.lifeline.href} className="font-semibold underline underline-offset-2">
            {air.crisis.lifeline.action}
          </a>{" "}
          — free, confidential, 24/7.
        </div>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/70 backdrop-blur supports-[backdrop-filter]:bg-bg/80">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-baseline gap-2">
            <span
              className="font-serif text-2xl tracking-tight text-accent"
              style={{ fontVariationSettings: '"opsz" 36' }}
            >
              AIR
            </span>
            <span className="hidden text-sm text-ink-muted sm:inline">
              Attitudes In Reverse®
            </span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-ink-muted md:flex">
            {["Programs", "Our Story", "Get Involved", "FAQ"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase().replace(/\s+/g, "-")}`}
                className="group relative py-1 transition-colors hover:text-ink"
              >
                {label}
                <span
                  aria-hidden
                  className="absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100"
                />
              </a>
            ))}
          </div>
          <CoralButton href={air.cta.donate} className="px-5 py-2 text-sm">
            Donate
          </CoralButton>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <AirMesh />
          <div className="mx-auto max-w-5xl px-6 pt-20 pb-20 text-center md:pt-28 md:pb-24">
            <ScrollReveal>
              <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-accent">
                Youth Mental Health · Suicide Prevention
              </p>
              <h1
                className="mx-auto max-w-4xl font-serif text-[2.6rem] leading-[1.02] tracking-[-0.025em] text-ink sm:text-6xl md:text-7xl"
                style={{ fontVariationSettings: '"opsz" 96, "SOFT" 40' }}
              >
                Start the conversation.{" "}
                <span className="italic" style={{ color: "var(--air-coral)" }}>
                  Save a life.
                </span>
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
                Attitudes In Reverse® teaches young people about mental health
                and suicide prevention — the signs to watch for, and the courage
                to ask for help. Because the best suicide-prevention program is a
                strong mental-health education.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={air.cta.bringToSchool}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-base font-semibold text-white shadow-[0_6px_20px_-6px_rgba(14,125,120,0.6)] transition-all hover:-translate-y-0.5 hover:bg-accent-hover"
                >
                  Bring AIR to your school
                  <span aria-hidden>→</span>
                </a>
                <CoralButton href={air.cta.donate}>Donate</CoralButton>
              </div>
              <p className="mt-6 text-sm text-ink-muted">
                A nonprofit founded in 2009 in memory of Kenny Baker.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Impact stats */}
        <section className="border-y border-border bg-bg-elevated/60">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-6 py-10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="px-2 text-center">
                <div className="font-serif text-3xl text-accent md:text-4xl">
                  {s.joinNext ? (
                    <span className="text-2xl md:text-3xl">{s.value}{s.label}</span>
                  ) : (
                    s.value
                  )}
                </div>
                {!s.joinNext && (
                  <div className="mt-1 text-sm text-ink-muted">{s.label}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Our Story */}
        <section id="our-story" className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <ScrollReveal>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-accent">
              Our Story
            </p>
            <h2 className="font-serif text-3xl leading-tight text-ink md:text-5xl">
              Born from loss. Built for hope.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-muted">
              <p>
                On May 19, 2009, the Baker family lost their son Kenny to
                suicide. In the silence and stigma that followed, his sister
                Katelyn named a new mission: <em>Attitudes In Reverse</em>.
              </p>
              <p>
                Since then, AIR has educated more than 70,000 students across
                eight states — turning grief into a movement that helps young
                people recognize what they&apos;re feeling, support a friend,
                and reach for help without shame.
              </p>
              <p className="font-serif text-xl italic text-ink">
                “{air.tagline}”
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Programs */}
        <section id="programs" className="bg-bg-elevated/50 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <ScrollReveal>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-accent">
                What We Do
              </p>
              <h2 className="max-w-2xl font-serif text-3xl leading-tight text-ink md:text-5xl">
                Four programs, one goal: a generation that talks about mental
                health.
              </h2>
            </ScrollReveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {programs.map((p, i) => (
                <ScrollReveal key={p.name} delay={i * 0.08}>
                  <article className="flex h-full flex-col rounded-2xl border border-border bg-bg-elevated p-7 shadow-[0_12px_30px_-18px_rgba(17,39,43,0.35)] transition-all hover:-translate-y-1 hover:border-accent/50">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      {p.kicker}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl text-ink">{p.name}</h3>
                    <p className="mt-3 flex-1 leading-relaxed text-ink-muted">
                      {p.body}
                    </p>
                    <p
                      className="mt-5 border-l-2 pl-3 text-sm text-ink-muted"
                      style={{ borderColor: "var(--air-coral)" }}
                    >
                      {p.proof}
                    </p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section id="get-involved" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <ScrollReveal>
            <div className="text-center">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-accent">
                Get Involved
              </p>
              <h2 className="mx-auto max-w-2xl font-serif text-3xl leading-tight text-ink md:text-5xl">
                Three ways to start a conversation today.
              </h2>
            </div>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {involve.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-bg-elevated p-7">
                  <h3 className="font-serif text-xl text-ink">{item.title}</h3>
                  <p className="mt-2 flex-1 text-ink-muted">{item.body}</p>
                  <a
                    href={item.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
                    style={item.primary ? { color: "var(--air-coral)" } : undefined}
                  >
                    {item.cta}
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Newsletter — nurture hook */}
        <section
          id="newsletter"
          className="mx-auto max-w-6xl px-6 pb-20 md:pb-28"
        >
          <div
            className="overflow-hidden rounded-3xl px-8 py-12 text-center md:px-16 md:py-16"
            style={{ background: "var(--ink)" }}
          >
            <ScrollReveal>
              <h2 className="mx-auto max-w-xl font-serif text-3xl leading-tight text-white md:text-4xl">
                Join the conversation.
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-white/70">
                Get stories, events, and ways to help — straight to your inbox.
                No spam, ever.
              </p>
              {/* Prototype only — wire to AIR's email platform / CRM at build. */}
              <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  placeholder="you@email.com"
                  aria-label="Email address"
                  className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white placeholder:text-white/50 focus:border-white/50 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-full px-6 py-3 font-semibold text-white transition-all hover:-translate-y-0.5"
                  style={{ background: "var(--air-coral)" }}
                >
                  Subscribe
                </button>
              </form>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-bg-elevated/50 py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-6">
            <ScrollReveal>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-accent">
                Questions
              </p>
              <h2 className="font-serif text-3xl leading-tight text-ink md:text-5xl">
                Frequently asked
              </h2>
            </ScrollReveal>
            <div className="mt-10 divide-y divide-border">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg text-ink">
                    {f.q}
                    <span
                      aria-hidden
                      className="text-accent transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-ink-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer with crisis resources repeated */}
      <footer className="border-t border-border" style={{ background: "var(--air-sand)" }}>
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <div className="font-serif text-2xl text-accent">Attitudes In Reverse®</div>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
                Educating young people about mental health and suicide
                prevention since 2009. {air.tagline}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
                Get help now
              </p>
              <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                <li>
                  <a href={air.crisis.lifeline.href} className="hover:text-accent">
                    {air.crisis.lifeline.label} — {air.crisis.lifeline.action}
                  </a>
                </li>
                <li>
                  <a href={air.crisis.text.href} className="hover:text-accent">
                    {air.crisis.text.label} — {air.crisis.text.action}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
                Explore
              </p>
              <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                <li><a href="#programs" className="hover:text-accent">Programs</a></li>
                <li><a href="#get-involved" className="hover:text-accent">Get Involved</a></li>
                <li><a href={air.cta.donate} className="hover:text-accent">Donate</a></li>
                <li><a href="#faq" className="hover:text-accent">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-ink-muted sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} Attitudes In Reverse®. A 501(c)(3) nonprofit.</p>
            <p className="text-ink-muted/70">
              Design sandbox ·{" "}
              <Link href="/" className="underline hover:text-accent">
                kurtisbaker.com
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
