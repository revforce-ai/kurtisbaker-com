import { site, certifications, faqs } from "@/app/data/site";

/**
 * JSON-LD structured data for SEO + GEO + AIO + LLMO + AEO.
 *
 * Schema.org @graph: Person + FinancialService/LocalBusiness + Organization +
 * WebSite + RadioSeries + NGO + FAQPage. The sameAs array + cross-linked @ids
 * make Kurt's identity resolvable to AI engines (Perplexity, Google AI
 * Overviews, ChatGPT/Claude search) via credential bodies and social profiles.
 */
export function JsonLd() {
  const personId = "https://kurtisbaker.com/#kurt";
  const businessId = "https://kurtisbaker.com/#business";
  const orgId = "https://kurtisbaker.com/#org";

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: "Kurtis 'Kurt' Baker",
        givenName: "Kurtis",
        familyName: "Baker",
        alternateName: ["Kurt Baker", "Kurtis Baker"],
        url: "https://kurtisbaker.com",
        image: "https://kurtisbaker.com/kurt-baker.jpg",
        jobTitle: "Private Wealth Manager",
        description:
          "Private wealth manager (CFP® · CEPA® · AIF®) who helps small and middle-market business owners build a Freedom Ready Business. Host of Master Your Finances radio show and co-founder of Attitudes In Reverse®.",
        worksFor: { "@id": businessId },
        address: {
          "@type": "PostalAddress",
          streetAddress: "101 College Rd E, Ste 2",
          addressLocality: "Princeton",
          addressRegion: "NJ",
          postalCode: "08540",
          addressCountry: "US",
        },
        telephone: "+16097164700",
        hasCredential: certifications.map((c) => ({
          "@type": "EducationalOccupationalCredential",
          name: c.full,
          credentialCategory: c.mark,
          recognizedBy: {
            "@type": "Organization",
            name: c.body,
            url: c.bodyUrl,
          },
          url: c.verifyUrl,
        })),
        award: [
          "Champion for Business Award",
          "Platinum Dad Award",
          "People's Choice Award",
        ],
        sameAs: [
          site.socials.linkedin,
          site.socials.twitter,
          site.socials.instagram,
          site.socials.youtube,
          site.socials.facebook,
          // Authority signals: person-specific authoritative profiles.
          // These are the third-party pages that currently outrank
          // kurtisbaker.com for his own name — claiming them as the same
          // entity helps engines consolidate the knowledge panel here.
          "https://exit-planning-institute.org/member-detail/kurtis-baker",
          "https://www.plannersearch.org/financial-advisor/kurtis-baker",
          "https://money.usnews.com/financial-advisors/advisor/kurtis-baker-2868097",
          "https://cwmi.us/team/kurt-baker/",
          "https://masteryourfinances.us/",
          "https://www.air.ngo/dt_team/kurtis-baker/",
          "https://brokercheck.finra.org/individual/summary/4433438",
          // TODO: add Wikidata URL (https://www.wikidata.org/wiki/Q…) once the
          // entity is created — see P1.5 of the 2026-06-08 improvement plan.
        ],
        knowsAbout: [
          "Wealth Management",
          "Financial Planning",
          "Exit Planning",
          "Freedom Ready Business",
          "Fiduciary Investment Advice",
          "Mental Health Advocacy",
          "Entrepreneurship",
        ],
      },
      {
        // Typed as LocalBusiness (not just FinancialService) for local-pack
        // eligibility. NOTE: precise geo coordinates and openingHours are
        // intentionally omitted until verified from the Google Business Profile
        // — fabricated local data hurts more than it helps.
        "@type": ["FinancialService", "LocalBusiness"],
        "@id": businessId,
        name: "Certified Wealth Management & Investment LLC",
        alternateName: "CWMI",
        url: "https://www.cwmi.us",
        image: "https://kurtisbaker.com/kurt-baker.jpg",
        priceRange: "$$$",
        description:
          "Private wealth management for successful small and middle-market business owners — comprehensive financial planning, investment management, and Freedom Ready Business strategy.",
        founder: { "@id": personId },
        employee: { "@id": personId },
        address: {
          "@type": "PostalAddress",
          streetAddress: "101 College Rd E, Ste 2",
          addressLocality: "Princeton",
          addressRegion: "NJ",
          postalCode: "08540",
          addressCountry: "US",
        },
        telephone: "+16097164700",
        hasMap: site.address.directions,
        areaServed: [
          { "@type": "City", name: "Princeton" },
          { "@type": "AdministrativeArea", name: "Mercer County, NJ" },
          { "@type": "Country", name: "United States" },
        ],
      },
      {
        // Publisher org carries the logo (powers logo rich results / knowledge panel)
        "@type": "Organization",
        "@id": orgId,
        name: "Kurt Baker",
        url: "https://kurtisbaker.com",
        logo: "https://kurtisbaker.com/kurt-baker.jpg",
        founder: { "@id": personId },
        sameAs: [
          site.socials.linkedin,
          site.socials.youtube,
          site.socials.twitter,
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://kurtisbaker.com/#website",
        url: "https://kurtisbaker.com",
        name: "Kurt Baker",
        description:
          "The personal hub for Kurt Baker's work, ventures, and writing.",
        publisher: { "@id": orgId },
      },
      {
        "@type": "RadioSeries",
        name: "Master Your Finances",
        url: "https://masteryourfinances.us",
        host: { "@id": personId },
        description:
          "Weekly radio show featuring entrepreneurs, advisors, and operators discussing money, work, and meaning.",
      },
      {
        "@type": "NGO",
        name: "Attitudes In Reverse®",
        url: "https://air.ngo",
        founder: { "@id": personId },
        description:
          "Nonprofit working to eliminate the stigma surrounding mental health by bringing education into schools, founded after the loss of Kenny Baker in 2010.",
      },
      {
        "@type": "FAQPage",
        "@id": "https://kurtisbaker.com/#faq",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
