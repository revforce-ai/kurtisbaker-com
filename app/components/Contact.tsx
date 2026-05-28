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
        <div className="grid md:grid-cols-[1fr_1fr] gap-12 md:gap-20">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-accent font-medium mb-4">
              Get in touch
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight text-ink">
              Let&apos;s talk.
            </h2>
            <p className="mt-5 text-lg text-ink-muted leading-relaxed">
              Whether you&apos;re a business owner thinking about an exit, a
              prospective guest for the show, an event organizer, or someone
              who just wants to connect — the door is open.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-8 inline-flex items-center gap-2 font-serif text-2xl md:text-3xl text-ink hover:text-accent transition-colors"
            >
              {site.email}
              <svg
                className="w-5 h-5"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M4 12L12 4M12 4H6M12 4V10" strokeLinecap="round" />
              </svg>
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-ink-muted font-medium mb-5">
              Or find me here
            </p>
            <ul className="divide-y divide-border border-y border-border">
              {socialItems.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-4 hover:text-accent transition-colors"
                  >
                    <span className="font-serif text-lg text-ink group-hover:text-accent transition-colors">
                      {s.name}
                    </span>
                    <span className="text-sm text-ink-muted group-hover:text-accent transition-colors">
                      {s.handle} ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
