export const site = {
  name: "Kurt Baker",
  fullName: "Kurtis Baker",
  // Rendered with proper trademark symbols in the UI
  credentialSuffix: "CFP®, CEPA®, AIF®",
  tagline: "Wealth advisor, entrepreneur, mental health advocate.",
  phone: "+1 (609) 716-4700",
  phoneTel: "+16097164700",
  address: {
    street: "101 College Rd E, Ste 2",
    cityState: "Princeton, NJ 08540",
    full: "101 College Rd E, Ste 2, Princeton, NJ 08540",
    mapsEmbed:
      "https://www.google.com/maps?q=101%20College%20Rd%20E%2C%20Ste%202%2C%20Princeton%2C%20NJ%2008540&output=embed",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=101%20College%20Rd%20E%2C%20Ste%202%2C%20Princeton%2C%20NJ%2008540",
  },
  ghl: {
    contactFormUrl:
      "https://api.leadconnectorhq.com/widget/form/pvijux6F8kWW1JH53kji",
    bookingUrl: "https://link.revforce.ai/widget/bookings/meet-with-kurt",
  },
  masterYourFinances: {
    home: "https://masteryourfinances.us",
    showUrl: "https://masteryourfinances.us/shows/master-of-finances/",
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/kurtisbaker/",
    twitter: "https://x.com/kurtisbaker",
    instagram: "https://www.instagram.com/thekurtbaker/",
    facebook: "https://www.facebook.com/kurtis.baker/",
    youtube: "https://www.youtube.com/@kurtisbaker",
  },
};

export const pillars = [
  {
    title: "Private Wealth Management",
    body: "Serving successful small and middle-market business owners as a CERTIFIED FINANCIAL PLANNER™ at Certified Wealth Management & Investment LLC.",
  },
  {
    title: "Freedom Ready Business Strategy",
    body: "Helping owners build companies that create significant value, run without them, and give them the freedom to live, lead, and exit on their own terms.",
  },
  {
    title: "Speaking & Storytelling",
    body: "Sharing the stories of entrepreneurs — from startups to billionaires — on the Master Your Finances radio show and live stages.",
  },
  {
    title: "Mental Health Advocacy",
    body: "Co-founder of Attitudes In Reverse®, working to eliminate stigma and bring mental health education into every school.",
  },
];

export type Company = {
  name: string;
  role: string;
  description: string;
  href: string;
  category: "Wealth" | "Media" | "Speaking" | "AI" | "Nonprofit";
  logo?: string;
  comingSoon?: boolean;
};

export const companies: Company[] = [
  {
    name: "Certified Wealth Management & Investment",
    role: "Private Wealth Manager",
    description:
      "Comprehensive financial planning and investment management for successful business owners.",
    href: "https://www.cwmi.us",
    category: "Wealth",
    logo: "/logos/cwmi.jpg",
  },
  {
    name: "Certified Wealth Mortgage & Investment",
    role: "Principal",
    description:
      "Mortgage and lending solutions integrated with broader financial strategy.",
    href: "https://www.cwmi.us",
    category: "Wealth",
    logo: "/logos/cwmi-mortgage.jpg",
  },
  {
    name: "Master Your Finances",
    role: "Host",
    description:
      "Weekly radio show featuring entrepreneurs, advisors, and the financial conversations that shape real lives.",
    href: "https://masteryourfinances.us",
    category: "Media",
    logo: "/logos/master-your-finances.jpg",
  },
  {
    name: "Freedom Ready Business",
    role: "Founder",
    description:
      "The framework and community for owners building companies that give them freedom — to live, lead, scale, and exit on their own terms.",
    href: "https://freedomreadybusiness.com",
    category: "Wealth",
  },
  {
    name: "Kurtis Baker Speaks",
    role: "Speaker",
    description:
      "Keynotes and talks on building a Freedom Ready Business, leadership, and life after loss.",
    href: "https://kurtisbakerspeaks.com",
    category: "Speaking",
    logo: "/logos/kurtis-baker-speaks.webp",
  },
  {
    name: "RevForce",
    role: "Founder",
    description:
      "AI virtual receptionist 'Rachel' — answers calls, books appointments, and never misses a lead.",
    href: "https://revforce.ai",
    category: "AI",
    logo: "/logos/revforce.webp",
  },
  {
    name: "Attitudes In Reverse®",
    role: "Co-Founder",
    description:
      "Nonprofit founded in memory of Kenny Baker — eliminating stigma around mental health through education.",
    href: "https://air.ngo",
    category: "Nonprofit",
    logo: "/logos/air.jpg",
  },
];

export const certifications = [
  {
    mark: "CFP®",
    full: "CERTIFIED FINANCIAL PLANNER™",
    body: "CFP Board",
    bodyUrl: "https://www.cfp.net",
    blurb:
      "Held to the highest fiduciary standard in financial planning — competency, ethics, and ongoing education.",
    verifyUrl: "https://www.cfp.net/verify-a-cfp-professional",
    verifyLabel: "Verify on cfp.net",
  },
  {
    mark: "CEPA®",
    full: "Certified Exit Planning Advisor®",
    body: "Exit Planning Institute",
    bodyUrl: "https://exit-planning-institute.org",
    blurb:
      "Trained to help owners build companies that create value, run without them, and are ready for any future.",
    verifyUrl:
      "https://exit-planning-institute.org/member-detail/kurtis-baker",
    verifyLabel: "Verify on EPI",
  },
  {
    mark: "AIF®",
    full: "Accredited Investment Fiduciary®",
    body: "Fi360 (Broadridge)",
    bodyUrl: "https://www.fi360.com",
    blurb:
      "Disciplined fiduciary process for prudent investment decision-making on behalf of clients.",
    verifyUrl: "https://www.fi360.com/app/designee/search",
    verifyLabel: "Verify on Fi360",
  },
];

export const credentials = [
  "CERTIFIED FINANCIAL PLANNER™ (CFP®)",
  "Certified Exit Planning Advisor® (CEPA®)",
  "Accredited Investment Fiduciary® (AIF®)",
  "Certified Youth Mental Health First Aider & Instructor",
  "Champion for Business Award",
  "Platinum Dad Award",
  "People's Choice Award",
];

// Answer-first Q&A — doubles as on-page content and FAQPage schema (SEO + AEO).
export const faqs = [
  {
    q: "Who is Kurt Baker?",
    a: "Kurtis “Kurt” Baker is a private wealth manager (CFP®, CEPA®, AIF®) based in Princeton, NJ. He serves successful small and middle-market business owners through Certified Wealth Management & Investment LLC, hosts the Master Your Finances radio show, and co-founded the nonprofit Attitudes In Reverse®.",
  },
  {
    q: "What does a Certified Exit Planning Advisor (CEPA) do?",
    a: "A CEPA helps business owners increase the value of their company, build a business that can run without them, and prepare for a successful sale or transition on their own terms — aligning the business with the owner’s personal and financial goals.",
  },
  {
    q: "What is a fiduciary financial advisor?",
    a: "A fiduciary is required to act in the client’s best interest at all times. As a CFP® and Accredited Investment Fiduciary (AIF®), Kurt Baker follows a disciplined fiduciary process for financial planning and investment decisions.",
  },
  {
    q: "What is a Freedom Ready Business?",
    a: "A Freedom Ready Business creates significant value, runs without the owner, and gives the owner the freedom to live, lead, scale, and exit on their own terms. It is the framework Kurt Baker uses with the business owners he serves.",
  },
  {
    q: "Who does Kurt Baker work with?",
    a: "He works primarily with successful small and middle-market business owners and their families who want comprehensive financial planning, investment management, and a clear exit or transition strategy.",
  },
  {
    q: "Where is Kurt Baker located and how do I get in touch?",
    a: "His office is at 101 College Rd E, Ste 2, Princeton, NJ 08540. You can call (609) 716-4700 or book an introductory call directly through this site.",
  },
];
