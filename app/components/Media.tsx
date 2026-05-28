export function Media() {
  return (
    <section id="media" className="bg-bg-elevated border-y border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-20 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-accent font-medium mb-4">
              On the air
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight text-ink">
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
                className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-base font-medium text-bg hover:bg-accent transition-colors"
              >
                Listen now
              </a>
              <a
                href="https://www.youtube.com/@kurtisbaker"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-border bg-bg px-6 py-3 text-base font-medium text-ink hover:border-ink transition-colors"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
          <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-accent/15 via-bg to-bg-elevated border border-border flex items-center justify-center p-10">
            <svg
              className="w-24 h-24 text-accent"
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
        </div>
      </div>
    </section>
  );
}
