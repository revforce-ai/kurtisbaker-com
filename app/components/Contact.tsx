import { site } from "@/app/data/site";

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
        <div className="max-w-2xl mb-14">
          <p className="text-sm uppercase tracking-[0.18em] text-accent font-medium mb-4">
            Get in touch
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight text-ink">
            Let&apos;s talk.
          </h2>
          <p className="mt-5 text-lg text-ink-muted leading-relaxed">
            Whether you&apos;re a business owner thinking about an exit, a
            prospective guest for the show, an event organizer, or someone who
            just wants to connect — the door is open.
          </p>
        </div>
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-start">
          <div className="rounded-2xl border border-border bg-bg-elevated overflow-hidden shadow-sm">
            <iframe
              src={site.ghl.contactFormUrl}
              title="Contact Kurt Baker"
              className="w-full block"
              style={{ minHeight: "720px", border: 0 }}
              loading="lazy"
            />
          </div>
          <div className="space-y-8">
            <div className="rounded-2xl border border-border bg-ink text-bg p-7">
              <p className="text-xs uppercase tracking-[0.18em] text-accent font-medium mb-3">
                Prefer to book directly?
              </p>
              <p className="font-serif text-2xl leading-snug mb-5">
                Schedule a call on my calendar.
              </p>
              <a
                href={site.ghl.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg hover:bg-bg hover:text-ink transition-colors"
              >
                Book a call →
              </a>
            </div>
            <div className="rounded-2xl border border-border bg-bg-elevated p-7 space-y-5">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-ink-muted font-medium mb-2">
                  Office
                </p>
                <p className="font-serif text-lg text-ink leading-snug">
                  {site.address.street}
                  <br />
                  {site.address.cityState}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-ink-muted font-medium mb-2">
                  Phone
                </p>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="font-serif text-lg text-ink hover:text-accent transition-colors"
                >
                  {site.phone}
                </a>
              </div>
              <div className="pt-5 border-t border-border">
                <p className="text-xs uppercase tracking-[0.18em] text-ink-muted font-medium mb-3">
                  Find me online
                </p>
                <ul className="space-y-1">
                  {socialItems.map((s) => (
                    <li key={s.name}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between py-1.5 hover:text-accent transition-colors"
                      >
                        <span className="text-sm text-ink group-hover:text-accent transition-colors">
                          {s.name}
                        </span>
                        <span className="text-xs text-ink-muted group-hover:text-accent transition-colors">
                          {s.handle} ↗
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
