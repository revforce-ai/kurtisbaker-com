import { site } from "@/app/data/site";
import {
  LinkedInIcon,
  XIcon,
  InstagramIcon,
  YouTubeIcon,
  FacebookIcon,
} from "@/app/components/SocialIcons";

const socials = [
  { name: "LinkedIn", href: site.socials.linkedin, Icon: LinkedInIcon },
  { name: "X", href: site.socials.twitter, Icon: XIcon },
  { name: "Instagram", href: site.socials.instagram, Icon: InstagramIcon },
  { name: "YouTube", href: site.socials.youtube, Icon: YouTubeIcon },
  { name: "Facebook", href: site.socials.facebook, Icon: FacebookIcon },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-10 grid sm:grid-cols-3 gap-6 items-start">
        <div>
          <p className="font-serif text-lg text-ink leading-tight">
            Kurtis Baker, CFP
            <sup className="text-[0.6em] -top-1.5 relative">®</sup>, CEPA
            <sup className="text-[0.6em] -top-1.5 relative">®</sup>, AIF
            <sup className="text-[0.6em] -top-1.5 relative">®</sup>
          </p>
          <p className="text-xs text-ink-muted mt-1">Private Wealth Manager</p>
          <div className="flex items-center gap-3 mt-4">
            {socials.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="text-ink-muted transition-colors hover:text-accent"
              >
                <Icon className="w-[18px] h-[18px]" />
              </a>
            ))}
          </div>
        </div>
        <div className="text-sm text-ink-muted leading-relaxed">
          <p>{site.address.street}</p>
          <p>{site.address.cityState}</p>
          <a
            href={`tel:${site.phoneTel}`}
            className="hover:text-accent transition-colors"
          >
            {site.phone}
          </a>
        </div>
        <p className="text-xs text-ink-muted sm:text-right">
          © {year} Kurtis Baker. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
