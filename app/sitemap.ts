import { MetadataRoute } from "next";
import { services } from "@/lib/data/services";
import { projects } from "@/lib/data/projects";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ephravilla.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const statics: MetadataRoute.Sitemap = [
    { url: SITE,                     lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${SITE}/about`,          lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/services`,       lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/projects`,       lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${SITE}/equipment`,      lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${SITE}/contact`,        lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const svcRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url:             `${SITE}/services/${s.slug}`,
    lastModified:    now,
    changeFrequency: "monthly",
    priority:        0.7,
  }));

  const projRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url:             `${SITE}/projects/${p.slug}`,
    lastModified:    now,
    changeFrequency: "monthly",
    priority:        0.6,
  }));

  return [...statics, ...svcRoutes, ...projRoutes];
}
