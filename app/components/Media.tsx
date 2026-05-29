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
            <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-ink to-[#1e3258] border border-ink/20 flex flex-col justify-between p-8 overflow-hidden shadow-[0_30px_60px_-25px_rgba(15,26,46,0.55)]">
              {/* Ambient gold bloom */}
              <div
                aria-hidden
                className="absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-40 blur-3xl"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(167,123,58,0.7), transparent 70%)",
                }}
              />
              {/* Top row: on-air pill + mic */}
              <div className="relative flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-bg/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-bg/80 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse" />
                  On Air
                </span>
                <svg
                  className="w-7 h-7 text-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                  />
                </svg>
              </div>

              {/* Center: animated waveform */}
              <div
                className="relative flex items-end justify-center gap-1.5 h-24"
                aria-hidden
              >
                {[
                  38, 64, 30, 82, 52, 96, 44, 70, 34, 88, 56, 76, 40, 60, 28,
                ].map((h, idx) => (
                  <span
                    key={idx}
                    className="w-1.5 rounded-full bg-gradient-to-t from-accent/40 to-accent animate-myf-wave"
                    style={{
                      height: `${h}%`,
                      animationDelay: `${idx * 0.09}s`,
                      animationDuration: `${1.1 + (idx % 4) * 0.18}s`,
                    }}
                  />
                ))}
              </div>

              {/* Bottom: show identity */}
              <div className="relative">
                <p className="text-[11px] uppercase tracking-[0.22em] text-accent/90 mb-1">
                  The Radio Show
                </p>
                <p
                  className="font-serif text-2xl text-bg leading-tight"
                  style={{ fontVariationSettings: '"opsz" 48' }}
                >
                  Master Your Finances
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
