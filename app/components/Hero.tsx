import Image from "next/image";
import { MeshBackground } from "@/app/components/MeshBackground";
import { ScrollReveal } from "@/app/components/ScrollReveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <MeshBackground />
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-32 md:pb-32">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16 items-center">
          <ScrollReveal>
            <p className="text-sm uppercase tracking-[0.22em] text-accent font-medium mb-6">
              Private Wealth Manager · Entrepreneur · Speaker
            </p>
            <h1
              className="font-serif text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.95] tracking-[-0.025em] text-ink"
              style={{
                fontVariationSettings: '"opsz" 96, "SOFT" 30',
              }}
            >
              Helping owners build a{" "}
              <span className="italic text-accent">Freedom Ready</span>{" "}
              business.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-ink-muted leading-relaxed max-w-xl">
              I&apos;m Kurt Baker — a private wealth manager, entrepreneur, and
              mental health advocate. I help successful business owners create
              significant value, build companies that run without them, and
              maximize the impact of what they&apos;ve earned.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="https://link.revforce.ai/widget/bookings/meet-with-kurt"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-base font-medium text-bg shadow-[0_4px_14px_rgba(15,26,46,0.18)] transition-all hover:bg-accent hover:shadow-[0_6px_20px_rgba(167,123,58,0.30)] hover:-translate-y-0.5"
              >
                Book a call
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="https://masteryourfinances.us/shows/master-of-finances/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-border bg-bg-elevated/70 backdrop-blur px-6 py-3 text-base font-medium text-ink transition-all hover:border-ink hover:bg-bg-elevated hover:-translate-y-0.5"
              >
                Listen to the show
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_30px_60px_-20px_rgba(15,26,46,0.45)] ring-1 ring-ink/10 relative bg-ink">
                <Image
                  src="/kurt-baker.jpg"
                  alt="Kurtis Baker"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top"
                />
                {/* Soft gold edge glow */}
                <div
                  aria-hidden
                  className="absolute inset-0 ring-1 ring-inset ring-accent/10 rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden md:block bg-bg-elevated border border-border rounded-xl px-5 py-4 shadow-[0_12px_30px_-12px_rgba(15,26,46,0.35)] max-w-[240px]">
                <p className="text-xs uppercase tracking-[0.22em] text-ink-muted mb-2">
                  Certifications
                </p>
                <p className="font-serif text-xl text-ink leading-tight tracking-tight">
                  CFP<sup className="text-[0.55em] -top-2 relative">®</sup>{" "}
                  <span className="text-accent">·</span> CEPA
                  <sup className="text-[0.55em] -top-2 relative">®</sup>{" "}
                  <span className="text-accent">·</span> AIF
                  <sup className="text-[0.55em] -top-2 relative">®</sup>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
