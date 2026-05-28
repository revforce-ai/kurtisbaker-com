export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-32 md:pb-32">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-accent font-medium mb-6">
              CFP® · Entrepreneur · Speaker
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight text-ink">
              Helping owners build an{" "}
              <span className="italic text-accent">Exit Ready</span> business.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-ink-muted leading-relaxed max-w-xl">
              I&apos;m Kurt Baker — a private wealth manager, entrepreneur, and
              mental health advocate. I help successful business owners create
              significant value, build companies that run without them, and
              maximize the impact of what they&apos;ve earned.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-base font-medium text-bg hover:bg-accent transition-colors"
              >
                Work with me
              </a>
              <a
                href="#media"
                className="inline-flex items-center justify-center rounded-full border border-border bg-bg-elevated px-6 py-3 text-base font-medium text-ink hover:border-ink transition-colors"
              >
                Listen to the show
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-ink to-[#1e3258] shadow-2xl overflow-hidden flex items-center justify-center">
              <span className="font-serif text-9xl text-accent/30 select-none">
                KB
              </span>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-bg-elevated border border-border rounded-xl px-5 py-4 shadow-lg max-w-[220px]">
              <p className="text-xs uppercase tracking-wider text-ink-muted mb-1">
                Trusted advisor
              </p>
              <p className="font-serif text-lg text-ink leading-tight">
                CERTIFIED FINANCIAL PLANNER™
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
