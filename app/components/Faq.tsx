import { faqs } from "@/app/data/site";
import { ScrollReveal } from "@/app/components/ScrollReveal";

/**
 * FAQ section. Native <details> accordion — accessible and keyboard-operable
 * with zero client JS. The same `faqs` data feeds FAQPage JSON-LD (see JsonLd),
 * so on-page content and structured data stay in sync.
 */
export function Faq() {
  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="bg-bg border-t border-border/60"
    >
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.28em] text-ink-muted text-center mb-3">
            Questions
          </p>
          <h2
            className="font-serif text-3xl md:text-4xl text-ink text-center mb-10 md:mb-12"
            style={{ fontVariationSettings: '"opsz" 96' }}
          >
            Frequently asked
          </h2>
        </ScrollReveal>
        <div className="border-y border-border/60 divide-y divide-border/60">
          {faqs.map((f, i) => (
            <ScrollReveal key={f.q} delay={0.05 * i}>
              <details className="group py-5">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none marker:content-none [&::-webkit-details-marker]:hidden font-serif text-lg md:text-xl text-ink">
                  <span>{f.q}</span>
                  <svg
                    className="w-5 h-5 shrink-0 text-accent transition-transform duration-200 group-open:rotate-45"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    aria-hidden="true"
                  >
                    <path d="M10 4v12M4 10h12" strokeLinecap="round" />
                  </svg>
                </summary>
                <p className="mt-3 text-ink-muted leading-relaxed">{f.a}</p>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
