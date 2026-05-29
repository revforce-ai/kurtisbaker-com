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
    href: "",
    category: "Wealth",
    comingSoon: true,
  },
  {
    name: "Kurtis Baker Speaks",
    role: "Speaker",
    description:
      "Keynotes and talks on building a Freedom Ready Business, leadership, and life after loss.",
    href: "",
    category: "Speaking",
    logo: "/logos/kurtis-baker-speaks.webp",
    comingSoon: true,
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
