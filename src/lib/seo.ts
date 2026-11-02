import { siteConfig } from "@/config/site";
import { contact } from "@/content/contact";

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function serializeJsonLd(data: Record<string, unknown>) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/** Data terstruktur `Restaurant` untuk halaman kontak, diturunkan dari `contact` dan `siteConfig`. */
export function restaurantJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${siteConfig.url}/#restaurant`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: absoluteUrl("/opengraph-image.png"),
    telephone: contact.phone,
    email: contact.email,
    servesCuisine: ["Ayam goreng", "Burger", "Pizza", "Pasta"],
    areaServed: contact.location.city,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.location.street,
      addressLocality: contact.location.city,
      addressRegion: contact.location.region,
      postalCode: contact.location.postalCode,
      addressCountry: contact.location.country,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: contact.opens,
      closes: contact.closes,
    },
    parentOrganization: { "@id": `${siteConfig.url}/#organization` },
  };
}
