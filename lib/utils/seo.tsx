const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ephravilla.com";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: "Ephravilla Construction Limited",
    description:
      "Residential and commercial construction services including architectural design, structural detailing, renovation, survey works, plumbing, electrical installations, and construction equipment leasing.",
    url: SITE_URL,
    logo: `${SITE_URL}/icons/logo.svg`,
    image: `${SITE_URL}/og-image.jpg`,
    telephone: "+254798900032",
    email: "accounts@ephravilla.com",
    foundingDate: "2024",
    areaServed: [
      { "@type": "City", name: "Nairobi" },
      { "@type": "AdministrativeArea", name: "Kiambu" },
      { "@type": "AdministrativeArea", name: "Murang'a" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kiambu",
      addressCountry: "KE",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Ephravilla Construction Limited",
    url: SITE_URL,
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "Ephravilla Construction Limited",
    },
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
