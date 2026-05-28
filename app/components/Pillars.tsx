import { pillars } from "@/app/data/site";

export function Pillars() {
  return (
    <section id="what-i-do" className="border-y border-border bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl mb-14">
          <p className="text-sm uppercase tracking-[0.18em] text-accent font-medium mb-4">
            What I do
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight text-ink">
            Four pursuits. One throughline.
          </h2>
          <p className="mt-5 text-lg text-ink-muted leading-relaxed">
            Help good people — business owners, families, communities — protect
            what they&apos;ve built and put it to work for what matters most.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12">
          {pillars.map((p, i) => (
            <div key={p.title} className="flex gap-5">
              <span className="font-serif text-3xl text-accent/80 leading-none pt-1 w-10 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-serif text-2xl text-ink leading-tight mb-2">
                  {p.title}
                </h3>
                <p className="text-base text-ink-muted leading-relaxed">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
