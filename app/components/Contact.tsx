import { site } from "@/app/data/site";
import { ScrollReveal } from "@/app/components/ScrollReveal";

const socialItems = [
  { name: "LinkedIn", href: site.socials.linkedin, handle: "in/kurtisbaker" },
  { name: "X / Twitter", href: site.socials.twitter, handle: "@kurtisbaker" },
  { name: "Instagram", href: site.socials.instagram, handle: "@thekurtbaker" },
  { name: "YouTube", href: site.socials.youtube, handle: "@kurtisbaker" },
  { name: "Facebook", href: site.socials.facebook, handle: "kurtis.baker" },
];

export function Contact() {
  return (
    <section id="contact" className="bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <ScrollReveal>
          <div className="max-w-2xl mb-14">
            <p className="text-sm uppercase tracking-[0.22em] text-accent font-medium mb-4">
              Get in touch
            </p>
            <h2
              className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-[-0.02em] text-ink"
              style={{ fontVariationSettings: '"opsz" 72' }}
            >
              Let&apos;s talk.
            </h2>
            <p className="mt-5 text-lg text-ink-muted leading-relaxed">
              Whether you&apos;re a business owner thinking about an exit, a
              prospective guest for the show, an event organizer, or someone who
              just wants to connect — the door is open.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-start">
          <ScrollReveal>
            <div className="rounded-2xl border border-border bg-bg-elevated overflow-hidden shadow-[0_18px_40px_-24px_rgba(15,26,46,0.28)]">
              <iframe
                src={site.ghl.contactFormUrl}
                title="Contact Kurt Baker"
                className="w-full block"
                style={{ minHeight: "720px", border: 0 }}
                loading="lazy"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="space-y-8">
              <div className="rounded-2xl border border-ink/20 bg-ink text-bg p-7 relative overflow-hidden">
                <div
                  aria-hidden
                  className="absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-40 blur-3xl"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgba(167,123,58,0.6), transparent 70%)",
                  }}
                />
                <p className="relative text-xs uppercase tracking-[0.22em] text-accent font-medium mb-3">
                  Prefer to book directly?
                </p>
                <p className="relative font-serif text-2xl leading-snug mb-5">
                  Schedule a call on my calendar.
                </p>
                <a
                  href={site.ghl.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-all hover:bg-bg hover:text-ink hover:-translate-y-0.5"
                >
                  Book a call
                  <span aria-hidden>→</span>
                </a>
              </div>
              <div className="rounded-2xl border border-border bg-bg-elevated p-7 space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-ink-muted font-medium mb-2">
                    Office
                  </p>
                  <p className="font-serif text-lg text-ink leading-snug">
                    {site.address.street}
                    <br />
                    {site.address.cityState}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-ink-muted font-medium mb-2">
                    Phone
                  </p>
                  <a
                    href={`tel:${site.phoneTel}`}
                    className="font-serif text-lg text-ink transition-colors hover:text-accent"
                  >
                    {site.phone}
                  </a>
                </div>
                <div className="pt-5 border-t border-border">
                  <p className="text-xs uppercase tracking-[0.22em] text-ink-muted font-medium mb-3">
                    Find me online
                  </p>
                  <ul className="space-y-1">
                    {socialItems.map((s) => (
                      <li key={s.name}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between py-1.5 transition-colors hover:text-accent"
                        >
                          <span className="text-sm text-ink transition-colors group-hover:text-accent">
                            {s.name}
                          </span>
                          <span className="text-xs text-ink-muted transition-colors group-hover:text-accent">
                            {s.handle} ↗
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
