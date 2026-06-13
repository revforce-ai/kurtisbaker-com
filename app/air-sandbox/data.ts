// Content model for the AIR (Attitudes In Reverse®) redesign sandbox.
// This is a design prototype built for an AIR board review — copy is drawn from
// public air.ngo content and should be confirmed by the AIR team before launch.

export const air = {
  name: "Attitudes In Reverse",
  shortName: "AIR",
  tagline: "Start the conversation. Reverse an attitude. Save a life.",
  mission:
    "We educate young people and the adults who care for them about mental health, mental illness, and suicide prevention — so no family has to learn these lessons the way ours did.",
  founded: "2010",
  location: "Princeton, New Jersey",
  // Real public destinations on the current site, reused so links resolve.
  links: {
    donate: "https://www.air.ngo/donate/",
    volunteer: "https://www.air.ngo/get-involved/volunteer/",
    bringToSchool: "https://www.air.ngo/contact-us-air-programs/",
    contact: "https://www.air.ngo/contact-us-air-programs/",
    newsletter: "https://www.air.ngo/",
  },
  socials: {
    facebook: "https://www.facebook.com/AttitudesInReverse/",
    instagram: "https://www.instagram.com/attitudesinreverse/",
    youtube: "https://www.youtube.com/",
    linkedin: "https://www.linkedin.com/company/attitudes-in-reverse/",
  },
};

export const crisis = {
  lifeline: { label: "Call or text 988", sub: "Suicide & Crisis Lifeline", href: "tel:988" },
  text: { label: "Text HOME to 741741", sub: "Crisis Text Line", href: "sms:741741" },
};

export const stats = [
  { value: "250,000+", label: "Students reached since 2011" },
  { value: "75+", label: "Certified therapy dog & handler teams" },
  { value: "6", label: "States with AIR programs" },
  { value: "100%", label: "Programs delivered free to youth" },
];

export type Program = {
  name: string;
  trademark?: string;
  audience: string;
  summary: string;
  outcome: string;
};

export const programs: Program[] = [
  {
    name: "Coming Up for AIR",
    trademark: "®",
    audience: "Middle school – College",
    summary:
      "Our flagship classroom presentation. Real stories, real science, and a clear message: mental health is health, and asking for help is strength.",
    outcome: "Students leave knowing the warning signs and exactly where to turn.",
  },
  {
    name: "AIR Dogs: Paws for Minds",
    trademark: "™",
    audience: "Schools & community events",
    summary:
      "Certified therapy-dog and handler teams embedded in school days. The dogs open the door; the conversations about mental health walk through it.",
    outcome: "For many students, the first time they feel safe asking for help.",
  },
  {
    name: "Mental Health is in the AIR",
    trademark: "®",
    audience: "Youth toolkit",
    summary:
      "A toolkit that puts age-appropriate language, coping skills, and resources directly into the hands of young people.",
    outcome: "Everyday tools students can use long after the assembly ends.",
  },
  {
    name: "In Their Shoes",
    trademark: "®",
    audience: "Schools & conferences",
    summary:
      "An interactive exhibit that builds empathy by letting visitors experience what living with a mental health condition can feel like.",
    outcome: "Stigma replaced with understanding — one pair of shoes at a time.",
  },
  {
    name: "Miki & Friends",
    audience: "Elementary age",
    summary:
      "Exploring emotions through the eyes of dogs — an early-childhood program that gives the youngest students the words for big feelings.",
    outcome: "Emotional literacy that starts before the struggles do.",
  },
  {
    name: "Start THE Conversation",
    audience: "All ages",
    summary:
      "A T-shirt design contest that turns students into messengers — making mental health something their peers want to talk about.",
    outcome: "Youth-led awareness that spreads through the hallways.",
  },
];

export const involve = [
  {
    title: "Donate",
    body: "Every dollar keeps AIR programs free for the students who need them most.",
    cta: "Give today",
    href: air.links.donate,
    featured: true,
  },
  {
    title: "Bring AIR to your school",
    body: "Schedule Coming Up for AIR® or an AIR Dogs® visit for your students.",
    cta: "Request a program",
    href: air.links.bringToSchool,
  },
  {
    title: "Volunteer",
    body: "Share your time, your story, or your certified therapy dog with AIR.",
    cta: "Get involved",
    href: air.links.volunteer,
  },
  {
    title: "Sponsor",
    body: "Partner with AIR as a corporate sponsor and become a Champion of Hope.",
    cta: "Become a partner",
    href: air.links.contact,
  },
];

export const events = [
  {
    name: "Miki & Friends Walk & Run for AIR",
    blurb: "Our signature community day — therapy dogs, families, and one shared mission.",
  },
  {
    name: "Taste of Hope",
    blurb: "An evening of food, friends, and fundraising for youth mental health.",
  },
  {
    name: "Champion of Hope Awards",
    blurb: "Honoring the leaders moving our culture from awareness to action.",
  },
];
