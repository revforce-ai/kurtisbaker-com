export const site = {
  name: "Kurt Baker",
  tagline: "Wealth advisor, entrepreneur, mental health advocate.",
  email: "kurt@revforce.ai",
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
    title: "Exit-Ready Business Strategy",
    body: "Helping owners build companies that create significant value, run without them, and are positioned for a meaningful exit on their own terms.",
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
};

export const companies: Company[] = [
  {
    name: "Certified Wealth Management & Investment",
    role: "Private Wealth Manager",
    description:
      "Comprehensive financial planning and investment management for successful business owners.",
    href: "https://www.cwmi.us",
    category: "Wealth",
  },
  {
    name: "Certified Wealth Mortgage & Investment",
    role: "Principal",
    description:
      "Mortgage and lending solutions integrated with broader financial strategy.",
    href: "https://www.cwmi.us",
    category: "Wealth",
  },
  {
    name: "Master Your Finances",
    role: "Host",
    description:
      "Weekly radio show featuring entrepreneurs, advisors, and the financial conversations that shape real lives.",
    href: "https://masteryourfinances.com",
    category: "Media",
  },
  {
    name: "Kurtis Baker Speaks",
    role: "Speaker",
    description:
      "Keynotes and talks on building Exit Ready businesses, leadership, and life after loss.",
    href: "https://kurtisbakerspeaks.com",
    category: "Speaking",
  },
  {
    name: "RevForce",
    role: "Founder",
    description:
      "AI virtual receptionist 'Rachel' — answers calls, books appointments, and never misses a lead.",
    href: "https://revforce.ai",
    category: "AI",
  },
  {
    name: "Attitudes In Reverse®",
    role: "Co-Founder",
    description:
      "Nonprofit founded in memory of Kenny Baker — eliminating stigma around mental health through education.",
    href: "https://attitudesinreverse.org",
    category: "Nonprofit",
  },
];

export const credentials = [
  "CERTIFIED FINANCIAL PLANNER™",
  "Certified Youth Mental Health First Aider & Instructor",
  "Champion for Business Award",
  "Platinum Dad Award",
  "People's Choice Award",
];
