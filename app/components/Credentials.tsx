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
              <article
                itemScope
                itemType="https://schema.org/EducationalOccupationalCredential"
                className="bg-bg-elevated h-full p-7 md:p-9 flex flex-col"
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <span
                    className="font-serif text-4xl md:text-5xl text-accent leading-none tracking-tight"
                    style={{ fontVariationSettings: '"opsz" 96' }}
                    itemProp="name"
                  >
                    {c.mark.replace("®", "")}
                    <sup className="text-[0.38em] -top-5 relative ml-0.5 text-accent/80">
                      ®
                    </sup>
                  </span>
                </div>
                <p
                  className="font-serif text-lg text-ink leading-snug mb-2"
                  itemProp="description"
                >
                  {c.full}
                </p>
                <a
                  href={c.bodyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-[0.18em] text-ink-muted mb-4 hover:text-accent transition-colors w-fit"
                  itemProp="recognizedBy"
                >
                  {c.body} ↗
                </a>
                <p className="text-sm text-ink-muted leading-relaxed mb-5 flex-1">
                  {c.blurb}
                </p>
                <a
                  href={c.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent w-fit"
                  itemProp="url"
                >
                  {c.verifyLabel}
                  <svg
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path d="M4 12L12 4M12 4H6M12 4V10" strokeLinecap="round" />
                  </svg>
                </a>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
