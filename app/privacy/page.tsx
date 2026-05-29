import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/app/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for kurtisbaker.com — how Kurt Baker and Certified Wealth Management & Investment collect, use, and protect your information, including SMS/text messaging consent.",
  alternates: { canonical: "https://kurtisbaker.com/privacy" },
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

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-sm text-ink-muted mb-12">
          Effective {EFFECTIVE_DATE}
        </p>

        <div className="text-[15px]">
          <Section title="Overview">
            <p>
              This Privacy Policy explains how Kurtis &ldquo;Kurt&rdquo; Baker
              and Certified Wealth Management &amp; Investment LLC
              (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collect,
              use, and protect information you provide through kurtisbaker.com
              (the &ldquo;Site&rdquo;). By using the Site or submitting your
              information, you agree to the practices described here.
            </p>
          </Section>

          <Section title="Information We Collect">
            <p>
              We collect information you choose to provide — such as your name,
              email address, phone number, and any message details — when you
              complete a contact form, book an appointment, start a chat, or
              otherwise reach out. We may also automatically collect limited
              technical data (such as device type, browser, and pages visited)
              to operate and improve the Site.
            </p>
          </Section>

          <Section title="How We Use Your Information">
            <p>We use the information you provide to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Respond to your inquiries and schedule meetings;</li>
              <li>
                Provide the services and information you request, including
                wealth management and planning communications;
              </li>
              <li>Send appointment reminders and follow-ups;</li>
              <li>Operate, maintain, and improve the Site; and</li>
              <li>Comply with legal and regulatory obligations.</li>
            </ul>
          </Section>

          <Section title="SMS / Text Messaging Consent">
            <p>
              When you provide your phone number and submit a form, book an
              appointment, or opt in, you authorize us to contact you by SMS text
              message at that number, including for scheduling, reminders, and
              follow-up about your inquiry.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Message frequency varies.</li>
              <li>Message and data rates may apply.</li>
              <li>
                Reply <strong>STOP</strong> at any time to opt out of text
                messages. Reply <strong>HELP</strong> for assistance.
              </li>
              <li>Consent to receive texts is not a condition of any purchase.</li>
              <li>
                Mobile information will not be shared with third parties or
                affiliates for marketing or promotional purposes. Text messaging
                originator opt-in data and consent are not shared with any third
                parties.
              </li>
            </ul>
          </Section>

          <Section title="How We Share Information">
            <p>
              We do not sell your personal information. We may share information
              with trusted service providers who help us operate the Site and
              communicate with you (for example, our hosting provider and our
              customer relationship / messaging platform), bound by
              confidentiality obligations and permitted to use the information
              only to provide services to us. We may also disclose information
              when required by law or to protect our rights.
            </p>
          </Section>

          <Section title="Cookies & Analytics">
            <p>
              The Site may use cookies and similar technologies to remember
              preferences and understand how the Site is used. You can control
              cookies through your browser settings. Disabling cookies may affect
              some features of the Site.
            </p>
          </Section>

          <Section title="Data Retention & Security">
            <p>
              We retain personal information for as long as needed to fulfill the
              purposes described in this policy and to meet legal and regulatory
              requirements. We use reasonable administrative, technical, and
              physical safeguards to protect your information; however, no method
              of transmission or storage is completely secure.
            </p>
          </Section>

          <Section title="Your Choices">
            <p>
              You may opt out of marketing emails using the unsubscribe link in
              any message, opt out of texts by replying STOP, or contact us to
              request access to, correction of, or deletion of your personal
              information, subject to applicable law and our recordkeeping
              obligations.
            </p>
          </Section>

          <Section title="Children's Privacy">
            <p>
              The Site is not directed to children under 13, and we do not
              knowingly collect personal information from children.
            </p>
          </Section>

          <Section title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. The
              &ldquo;Effective&rdquo; date above reflects the most recent
              revision.
            </p>
          </Section>

          <Section title="Contact Us">
            <p>
              Questions about this Privacy Policy? Contact us at:
            </p>
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
            This Privacy Policy is provided for general informational purposes
            and should be reviewed by qualified legal counsel to confirm it meets
            the requirements applicable to your business and jurisdiction.
          </p>
        </div>
      </div>
    </main>
  );
}
