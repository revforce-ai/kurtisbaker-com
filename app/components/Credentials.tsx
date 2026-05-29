import { certifications } from "@/app/data/site";
import { ScrollReveal } from "@/app/components/ScrollReveal";

export function Credentials() {
  return (
    <section
      id="credentials"
      aria-label="Professional certifications"
      className="bg-bg border-y border-border/60"
    >
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.28em] text-ink-muted text-center mb-10">
            Held to the highest standard
          </p>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-px bg-border/60 rounded-2xl overflow-hidden border border-border/60">
          {certifications.map((c, i) => (
            <ScrollReveal key={c.mark} delay={0.08 * i}>
              <div className="bg-bg-elevated h-full p-7 md:p-9 flex flex-col">
                <div className="flex items-baseline gap-3 mb-3">
                  <span
                    className="font-serif text-4xl md:text-5xl text-accent leading-none tracking-tight"
                    style={{ fontVariationSettings: '"opsz" 96' }}
                  >
                    {c.mark.replace("®", "")}
                    <sup className="text-[0.38em] -top-5 relative ml-0.5 text-accent/80">
                      ®
                    </sup>
                  </span>
                </div>
                <p className="font-serif text-lg text-ink leading-snug mb-2">
                  {c.full}
                </p>
                <p className="text-xs uppercase tracking-[0.18em] text-ink-muted mb-4">
                  {c.body}
                </p>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {c.blurb}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
