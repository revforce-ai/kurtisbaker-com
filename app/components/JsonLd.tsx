import { site, certifications } from "@/app/data/site";

/**
 * JSON-LD structured data for SEO + GEO + AIO + LLMO + AEO.
 *
 * Schema.org Person + ProfessionalService graph. The sameAs array makes Kurt's
 * identity resolvable to AI engines (Perplexity, Google AI Overviews, SearchGPT)
 * via his credential body verification pages and social profiles.
 */
export function JsonLd() {
  const personId = "https://kurtisbaker.com/#kurt";
  const businessId = "https://kurtisbaker.com/#business";

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
        sameAs: [
          site.socials.linkedin,
          site.socials.twitter,
          site.socials.instagram,
          site.socials.youtube,
          site.socials.facebook,
          // Authority signals: person-specific authoritative profiles
          "https://exit-planning-institute.org/member-detail/kurtis-baker",
          "https://www.plannersearch.org/financial-advisor/kurtis-baker",
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
        "@type": "FinancialService",
        "@id": businessId,
        name: "Certified Wealth Management & Investment LLC",
        alternateName: "CWMI",
        url: "https://www.cwmi.us",
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
        areaServed: { "@type": "Country", name: "United States" },
      },
      {
        "@type": "WebSite",
        "@id": "https://kurtisbaker.com/#website",
        url: "https://kurtisbaker.com",
        name: "Kurt Baker",
        description: "The personal hub for Kurt Baker's work, ventures, and writing.",
        publisher: { "@id": personId },
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
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
