import Image from "next/image";
import { companies } from "@/app/data/site";

export function LogoMarquee() {
  const logos = companies.filter((c) => c.logo);
  // Duplicate the list so the -50% translate loops seamlessly
  const row = [...logos, ...logos];

  return (
    <section
      aria-label="Kurt Baker's companies and ventures"
      className="bg-bg border-b border-border/60 py-10 overflow-hidden"
    >
      <p className="text-center text-xs uppercase tracking-[0.28em] text-ink-muted mb-8">
        The ventures behind the work
      </p>
      <div className="relative">
        {/* edge fades */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-bg to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-bg to-transparent"
        />
        <div className="flex w-max animate-marquee items-center gap-16 pr-16">
          {row.map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              className="relative h-12 w-[150px] shrink-0 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={c.logo as string}
                alt={`${c.name} logo`}
                fill
                sizes="150px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
