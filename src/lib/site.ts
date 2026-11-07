export const SITE = {
  name: "J and B Barista Academy",
  alternateName: "J & B Barista Academy",
  url: "https://www.jandbbaristaacademy.edu.np",
  email: "Jbaristaacademy@gmail.com",
  phone: {
    display: "9855018029",
    e164: "+9779855018029",
  },
  address: {
    locality: "Hetauda",
    region: "Bagmati Province",
    country: "NP",
    countryName: "Nepal",
  },
  socials: {
    facebook: "https://www.facebook.com/jandbbaristaacademy",
    instagram: "https://www.instagram.com/jandb.barista.academy",
  },
  description:
    "Specialty coffee school in Hetauda, Nepal offering four to eight week barista, latte art and cafe management courses on a working training bar.",
} as const;

export type Course = {
  id: string;
  title: string;
  duration: string;
  durationIso: string;
  level: string;
  summary: string;
  image: { src: string; alt: string };
  outcomes: string[];
  featured: boolean;
};

export const COURSES: Course[] = [
  {
    id: "barista-foundation",
    title: "Barista Foundation",
    duration: "4 weeks",
    durationIso: "P4W",
    level: "Beginner",
    summary:
      "Espresso extraction, milk texturing, and the science behind a balanced shot.",
    image: {
      src: "/images/course-foundation.jpg",
      alt: "Espresso machine pulling a shot into a cup",
    },
    outcomes: [
      "Dial in a grinder and hold a recipe",
      "Steam milk to a stable microfoam",
      "Run a clean, fast espresso bar",
    ],
    featured: false,
  },
  {
    id: "latte-art-mastery",
    title: "Latte Art Mastery",
    duration: "6 weeks",
    durationIso: "P6W",
    level: "Intermediate",
    summary:
      "Build a steady pour and a repeatable pattern, from a clean heart to a full rosetta.",
    image: {
      src: "/images/course-latte-art.jpg",
      alt: "Latte art pattern in a white coffee cup",
    },
    outcomes: [
      "Control flow rate and pitcher height",
      "Pour hearts, tulips, and rosettas",
      "Keep symmetry under service pressure",
    ],
    featured: true,
  },
  {
    id: "coffee-shop-management",
    title: "Coffee Shop Management",
    duration: "8 weeks",
    durationIso: "P8W",
    level: "Advanced",
    summary:
      "Costing, supply, menu design, and the operating rhythm of a small cafe.",
    image: {
      src: "/images/course-management.jpg",
      alt: "Cafe interior with tables and seating",
    },
    outcomes: [
      "Build a menu with real margins",
      "Plan stock and supplier terms",
      "Write a launch plan you can fund",
    ],
    featured: false,
  },
];

export const STATS = [
  { value: "10k+", label: "Graduates" },
  { value: "12", label: "Instructors" },
  { value: "98%", label: "Placement" },
  { value: "5 yrs", label: "In Hetauda" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I arrived able to make a decent coffee at home. I left able to run a bar on my own. The difference was the repetition and the honesty of the feedback.",
    name: "Srijana Thapa",
    role: "Owner, Kathmandu cafe",
  },
  {
    quote:
      "The latte art block is taught properly. Every pour is filmed and reviewed, so you can see exactly what your hand did wrong.",
    name: "Bikash Rai",
    role: "Head barista, Pokhara",
  },
  {
    quote:
      "I took the management track as a hobby learner and came out with a costed menu and a plan. That was more than I expected.",
    name: "Anita Shrestha",
    role: "Coffee enthusiast",
  },
];

export type Faq = {
  question: string;
  answer: string;
};

/**
 * Answers are written as standalone, quotable statements so they can be lifted
 * intact by search snippets and answer engines, and they match the FAQPage
 * structured data exactly.
 */
export const FAQS: Faq[] = [
  {
    question: "Where is J and B Barista Academy located?",
    answer:
      "J and B Barista Academy is in Hetauda, Bagmati Province, Nepal. Classes run inside a working cafe on a dedicated training bar, so students train on production equipment rather than a simulator.",
  },
  {
    question: "What barista courses does the academy offer?",
    answer:
      "The academy runs three tracks: Barista Foundation, a four week beginner course; Latte Art Mastery, a six week intermediate course; and Coffee Shop Management, an eight week advanced course. Every track uses the same training bar and the same equipment.",
  },
  {
    question: "Do I need experience to join the Barista Foundation course?",
    answer:
      "No. Barista Foundation starts from zero and covers grinder setup, espresso recipes, and milk texturing before moving to service speed. The only requirement is a willingness to repeat a motion until it is consistent.",
  },
  {
    question: "How long does barista training take?",
    answer:
      "Barista Foundation takes four weeks, Latte Art Mastery takes six weeks, and Coffee Shop Management takes eight weeks. Morning sessions are practical blocks held before cafe service, and evening sessions cover cupping and theory.",
  },
  {
    question: "Is the latte art course suitable for working baristas?",
    answer:
      "Yes. Latte Art Mastery is built for people already behind a bar who want repeatable pours. Flow rate, pitcher height, and pattern symmetry are drilled under service pressure, and pours are filmed and reviewed.",
  },
  {
    question: "How large are the classes?",
    answer:
      "Classes are capped at eight students so that each bar station stays hands-on and an instructor can watch and correct every pour on the spot.",
  },
  {
    question: "How do I enrol or book a visit to the academy?",
    answer:
      "Call 9855018029 or email Jbaristaacademy@gmail.com to ask about upcoming cohort dates and to arrange a visit to the training bar in Hetauda. The academy also answers enquiries through its Facebook and Instagram pages.",
  },
];
