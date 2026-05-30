import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/content/site";
import type { Role } from "@/content/careers";

// JobPosting schema for Google Jobs (Careers §14).
export function JobPostingSchema({ role }: { role: Role }) {
  const remote = role.location.toLowerCase().includes("remote");
  const data = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: role.title,
    description: role.summary,
    datePosted: "2026-05-29",
    validThrough: "2026-07-30",
    employmentType: role.type.toLowerCase().includes("intern") ? "INTERN" : "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: site.name,
      sameAs: site.url,
      logo: `${site.url}/assets/logo.png`,
    },
    jobLocationType: remote ? "TELECOMMUTE" : undefined,
    jobLocation: {
      "@type": "Place",
      address: { "@type": "PostalAddress", addressCountry: "GM" },
    },
    applicantLocationRequirements: { "@type": "Country", name: "West Africa" },
    applicationContact: { "@type": "ContactPoint", email: site.email },
  };
  return <JsonLd data={data} />;
}
