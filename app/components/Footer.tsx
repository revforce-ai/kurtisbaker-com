import { site } from "@/app/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-10 grid sm:grid-cols-3 gap-6 items-start">
        <div>
          <p className="font-serif text-lg text-ink mb-1">Kurt Baker</p>
          <p className="text-xs text-ink-muted">
            CFP® · CEPA® · AIF® — Private Wealth Manager
          </p>
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
