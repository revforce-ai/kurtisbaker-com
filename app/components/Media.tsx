import { ScrollReveal } from "@/app/components/ScrollReveal";

export function Media() {
  return (
    <section id="media" className="bg-bg-elevated border-y border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-20 items-center">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.22em] text-accent font-medium mb-4">
              On the air
            </p>
            <h2
              className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-[-0.02em] text-ink"
              style={{ fontVariationSettings: '"opsz" 72' }}
            >
              Master Your Finances.
            </h2>
            <p className="mt-5 text-lg text-ink-muted leading-relaxed">
              A weekly radio show where I sit down with entrepreneurs, advisors,
              and operators — from first-time founders to billionaires — and ask
              the questions about money, work, and meaning that don&apos;t fit
              in a soundbite.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://masteryourfinances.us/shows/master-of-finances/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-base font-medium text-bg shadow-[0_4px_14px_rgba(15,26,46,0.18)] transition-all hover:bg-accent hover:shadow-[0_6px_20px_rgba(167,123,58,0.30)] hover:-translate-y-0.5"
              >
                Listen now
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="https://www.youtube.com/@kurtisbaker"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-border bg-bg px-6 py-3 text-base font-medium text-ink transition-all hover:border-ink hover:-translate-y-0.5"
              >
                Watch on YouTube
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-accent/20 via-bg to-bg-elevated border border-border flex items-center justify-center p-10 overflow-hidden">
              <div
                aria-hidden
                className="absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-30 blur-3xl"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(167,123,58,0.55), transparent 70%)",
                }}
              />
              <svg
                className="relative w-24 h-24 text-accent"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                />
              </svg>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
