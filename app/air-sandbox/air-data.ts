// Content for the AIR website sandbox (/air-sandbox).
// A design + messaging prototype for a best-in-class Attitudes In Reverse® site.
// Facts sourced from air.ngo and public press as of June 2026; verify before launch.

export const air = {
  name: "Attitudes In Reverse",
  short: "AIR",
  tagline: "Start the conversation. Reverse an attitude. Save a life.",
  founded: 2009,
  // Crisis resources — must be present and prominent on a best-in-class
  // mental-health site. These are national, stable hotlines.
  crisis: {
    lifeline: { label: "988 Suicide & Crisis Lifeline", action: "Call or text 988", href: "tel:988" },
    text: { label: "Crisis Text Line", action: "Text HOME to 741741", href: "sms:741741?&body=HOME" },
  },
  cta: {
    // Placeholder destinations — wire to AIR's real donation platform / forms at build.
    donate: "https://www.air.ngo/donate/",
    bringToSchool: "https://www.air.ngo/programs/coming-up-for-air/",
    volunteer: "https://www.air.ngo/get-involved/volunteer/",
    newsletter: "#newsletter",
  },
};

export const stats = [
  { value: "70,000+", label: "Students educated" },
  { value: "8", label: "States reached" },
  { value: "Since 2009", label: "Reversing attitudes" },
  { value: "Research-", label: "validated curriculum", joinNext: true },
];

export const programs = [
  {
    name: "Coming Up for AIR®",
    kicker: "School presentations",
    body: "Age-appropriate mental-health education for elementary through college. Students learn the signs and symptoms of mental-health disorders and — most importantly — how to speak up and ask for help.",
    proof: "Independently validated by a study from Dr. Jean Kirnan, Professor of Psychology at The College of New Jersey.",
  },
  {
    name: "Youth Mental Health First Aid",
    kicker: "Certification training",
    body: "Equips parents, educators, and anyone who works with young people to recognize a mental-health crisis, respond effectively, and connect a young person to the right help.",
    proof: "National evidence-based curriculum, delivered by certified AIR instructors.",
  },
  {
    name: "AIR Dogs: Paws for Minds®",
    kicker: "Therapy & support dogs",
    body: "Displaced shelter dogs are matched with people living with a mental-health condition or developmental disability — breaking down barriers and starting conversations that wouldn't otherwise happen.",
    proof: "Running since 2012, at schools and community events across the region.",
  },
  {
    name: "Community Outreach & Conferences",
    kicker: "Year-round presence",
    body: "AIR co-hosts the annual National Suicide Prevention Day conference with NJAMHAA and shows up where people already gather — turning awareness into action all year long.",
    proof: "Co-hosted with the NJ Association of Mental Health & Addiction Agencies.",
  },
];

export const involve = [
  {
    title: "Bring AIR to your school",
    body: "Book a research-validated presentation for your students, staff, or PTA.",
    cta: "Request a presentation",
    href: air.cta.bringToSchool,
    primary: true,
  },
  {
    title: "Donate",
    body: "Every gift puts mental-health education in front of more young people.",
    cta: "Give today",
    href: air.cta.donate,
    primary: true,
  },
  {
    title: "Volunteer",
    body: "Join an event, train a therapy dog team, or lend your skills.",
    cta: "Get involved",
    href: air.cta.volunteer,
    primary: false,
  },
];

// Answer-first Q&A — doubles as on-page content and FAQPage schema (SEO + AEO/GEO).
export const faqs = [
  {
    q: "What is Attitudes In Reverse (AIR)?",
    a: "Attitudes In Reverse® (AIR) is a nonprofit that educates young people about mental health and suicide prevention. Founded in 2009, AIR teaches students the signs and symptoms of mental-health disorders and how to ask for help, because the best suicide-prevention program is a strong mental-health awareness program.",
  },
  {
    q: "Why was AIR founded?",
    a: "AIR was founded by Tricia and Kurt Baker after their son Kenny died by suicide on May 19, 2009. The name was coined by Kenny's sister, Katelyn, in response to the stigma the family faced. AIR exists so that no other family has to learn these lessons the hard way.",
  },
  {
    q: "How do I bring an AIR presentation to my school?",
    a: "Schools, PTAs, colleges, and community groups can request a Coming Up for AIR® presentation directly through this site. Presentations are age-appropriate for elementary through college-age audiences and are built on a research-validated curriculum.",
  },
  {
    q: "Where does AIR operate?",
    a: "AIR is based in New Jersey and has educated more than 70,000 students across New Jersey and seven additional states, with programming that continues to expand.",
  },
  {
    q: "How can I support AIR?",
    a: "You can donate, volunteer at events, train as a therapy-dog team, sponsor a school presentation, or join the AIR newsletter to stay connected. Every action helps start a conversation that can save a life.",
  },
];
