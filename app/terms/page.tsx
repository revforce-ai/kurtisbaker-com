import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/app/data/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms & Conditions for kurtisbaker.com — the rules for using this website.",
  alternates: { canonical: "https://kurtisbaker.com/terms" },
};

const EFFECTIVE_DATE = "May 29, 2026";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="font-serif text-2xl text-ink leading-tight mb-3">
        {title}
      </h2>
      <div className="space-y-3 text-ink-muted leading-relaxed">{children}</div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <main className="flex-1 bg-bg">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Link
          href="/"
          className="text-sm text-ink-muted hover:text-accent transition-colors"
        >
          ← Back to home
        </Link>
        <h1 className="font-serif text-4xl md:text-5xl text-ink leading-tight tracking-tight mt-6 mb-2">
          Terms &amp; Conditions
        </h1>
        <p className="text-sm text-ink-muted mb-12">Effective {EFFECTIVE_DATE}</p>

        <div className="text-[15px]">
          <Section title="Acceptance of Terms">
            <p>
              By accessing or using kurtisbaker.com (the &ldquo;Site&rdquo;), you
              agree to be bound by these Terms &amp; Conditions and our{" "}
              <Link
                href="/privacy"
                className="underline decoration-border underline-offset-2 hover:text-accent transition-colors"
              >
                Privacy Policy
              </Link>
              . If you do not agree, please do not use the Site.
            </p>
          </Section>

          <Section title="No Financial, Investment, or Tax Advice">
            <p>
              The content on this Site is provided for general informational and
              educational purposes only and does not constitute financial,
              investment, tax, legal, or other professional advice. Nothing on
              the Site is a recommendation, solicitation, or offer to buy or sell
              any security or to adopt any investment strategy. Investing
              involves risk, including possible loss of principal. Past
              performance is not indicative of future results.
            </p>
            <p>
              You should consult a qualified professional regarding your specific
              situation before making any financial decision. Engaging Kurt Baker
              or Certified Wealth Management &amp; Investment LLC for services is
              governed by separate written agreements, not by this Site.
            </p>
          </Section>

          <Section title="Communications Consent">
            <p>
              By submitting a form, booking an appointment, or starting a chat,
              you consent to be contacted by phone, email, and SMS text message
              as described in our{" "}
              <Link
                href="/privacy"
                className="underline decoration-border underline-offset-2 hover:text-accent transition-colors"
              >
                Privacy Policy
              </Link>
              . You may opt out of texts at any time by replying STOP.
            </p>
          </Section>

          <Section title="Intellectual Property">
            <p>
              All content on this Site — including text, graphics, logos, and the
              &ldquo;Freedom Ready Business&rdquo; framework — is the property of
              Kurt Baker or his affiliated companies and is protected by
              applicable intellectual-property laws. You may not reproduce,
              distribute, or create derivative works without prior written
              permission.
            </p>
          </Section>

          <Section title="Third-Party Links">
            <p>
              The Site may link to third-party websites (including our affiliated
              companies and credential verification pages). We are not
              responsible for the content, policies, or practices of any
              third-party site.
            </p>
          </Section>

          <Section title="Disclaimer of Warranties">
            <p>
              The Site is provided &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; without warranties of any kind, express or
              implied. We do not warrant that the Site will be uninterrupted,
              error-free, or free of harmful components.
            </p>
          </Section>

          <Section title="Limitation of Liability">
            <p>
              To the fullest extent permitted by law, Kurt Baker and his
              affiliated companies shall not be liable for any indirect,
              incidental, consequential, or punitive damages arising from your
              use of the Site.
            </p>
          </Section>

          <Section title="Changes to These Terms">
            <p>
              We may update these Terms from time to time. The
              &ldquo;Effective&rdquo; date above reflects the most recent
              revision. Continued use of the Site constitutes acceptance of the
              updated Terms.
            </p>
          </Section>

          <Section title="Contact">
            <p className="not-prose">
              Certified Wealth Management &amp; Investment LLC
              <br />
              {site.address.street}
              <br />
              {site.address.cityState}
              <br />
              <a
                href={`tel:${site.phoneTel}`}
                className="hover:text-accent transition-colors"
              >
                {site.phone}
              </a>
            </p>
          </Section>

          <p className="text-xs text-ink-muted/80 border-t border-border pt-6 mt-12">
            These Terms are provided for general informational purposes and
            should be reviewed by qualified legal counsel to confirm they meet
            the requirements applicable to your business, jurisdiction, and
            regulatory obligations (including those applicable to investment
            advisers).
          </p>
        </div>
      </div>
    </main>
  );
}
