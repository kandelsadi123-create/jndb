import { COURSES, FAQS, SITE, type Course } from "./site";

const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;

const postalAddress = {
  "@type": "PostalAddress",
  addressLocality: SITE.address.locality,
  addressRegion: SITE.address.region,
  addressCountry: SITE.address.country,
};

export function siteGraph(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": ORG_ID,
        name: SITE.name,
        alternateName: SITE.alternateName,
        url: SITE.url,
        description: SITE.description,
        logo: {
          "@type": "ImageObject",
          url: `${SITE.url}/icon-512.png`,
          width: 512,
          height: 512,
        },
        image: `${SITE.url}/og-image.jpg`,
        email: SITE.email,
        telephone: SITE.phone.e164,
        address: postalAddress,
        sameAs: [SITE.socials.facebook, SITE.socials.instagram],
        areaServed: {
          "@type": "Country",
          name: SITE.address.countryName,
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "admissions",
          telephone: SITE.phone.e164,
          email: SITE.email,
          availableLanguage: "en",
        },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE.url,
        name: SITE.name,
        description: SITE.description,
        inLanguage: "en",
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}

function courseNode(course: Course): Record<string, unknown> {
  return {
    "@type": "Course",
    "@id": `${SITE.url}/#${course.id}`,
    name: course.title,
    description: course.summary,
    url: `${SITE.url}/#${course.id}`,
    inLanguage: "en",
    educationalLevel: course.level,
    teaches: course.outcomes,
    provider: { "@id": ORG_ID },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Onsite",
      courseWorkload: course.durationIso,
      location: {
        "@type": "Place",
        name: SITE.name,
        address: postalAddress,
      },
    },
  };
}

export function pageGraph(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": [
      ...COURSES.map(courseNode),
      {
        "@type": "FAQPage",
        "@id": `${SITE.url}/#faq`,
        url: `${SITE.url}/#faq`,
        inLanguage: "en",
        isPartOf: { "@id": WEBSITE_ID },
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };
}
