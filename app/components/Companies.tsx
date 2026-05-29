import Image from "next/image";
import { companies, type Company } from "@/app/data/site";
import { ScrollReveal } from "@/app/components/ScrollReveal";

function CardInner({ c }: { c: Company }) {
  return (
    <>
      <div className="aspect-[16/9] bg-white border-b border-border flex items-center justify-center p-6 relative overflow-hidden">
        {c.logo ? (
          <Image
            src={c.logo}
            alt={`${c.name} logo`}
            fill
            sizes="(max-width: 768px) 100vw, 360px"
            className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <span
            className="font-serif text-3xl text-ink/80 italic tracking-tight text-center px-4"
            style={{ fontVariationSettings: '"opsz" 72' }}
          >
            {c.name}
          </span>
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] uppercase tracking-[0.18em] text-accent font-medium">
            {c.category}
          </span>
          {c.comingSoon ? (
            <span className="text-[10px] uppercase tracking-[0.16em] text-ink-muted border border-border rounded-full px-2 py-0.5">
              Site coming soon
            </span>
          ) : (
            <svg
              className="w-4 h-4 text-ink-muted transition-all duration-300 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M4 12L12 4M12 4H6M12 4V10" strokeLinecap="round" />
            </svg>
          )}
        </div>
        <h3 className="font-serif text-xl text-ink leading-tight mb-1">
          {c.name}
        </h3>
        <p className="text-sm text-ink-muted mb-3 italic">{c.role}</p>
        <p className="text-sm text-ink-muted leading-relaxed">{c.description}</p>
      </div>
    </>
  );
}

export function Companies() {
  return (
    <section id="companies" className="bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <ScrollReveal>
          <div className="max-w-2xl mb-14">
            <p className="text-sm uppercase tracking-[0.22em] text-accent font-medium mb-4">
              The portfolio
            </p>
            <h2
              className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-[-0.02em] text-ink"
              style={{ fontVariationSettings: '"opsz" 72' }}
            >
              Companies & ventures.
            </h2>
            <p className="mt-5 text-lg text-ink-muted leading-relaxed">
              Each one exists to serve a specific kind of person — a business
              owner, a listener, an audience, a student, a family.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {companies.map((c, i) => (
            <ScrollReveal key={c.name} delay={0.06 * i}>
              {c.comingSoon ? (
                <div className="group flex h-full flex-col rounded-2xl border border-border bg-bg-elevated overflow-hidden opacity-90">
                  <CardInner c={c} />
                </div>
              ) : (
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-border bg-bg-elevated overflow-hidden transition-all duration-300 hover:border-accent hover:-translate-y-1 hover:shadow-[0_22px_40px_-20px_rgba(15,26,46,0.30)]"
                >
                  <CardInner c={c} />
                </a>
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
