import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

// Real content dates — a lastmod that equals build time teaches crawlers to
// ignore the signal. Bump these when the page content actually changes.
const HOME_UPDATED = new Date("2026-08-20");
const CHANGELOG_UPDATED = new Date("2026-08-20");
const PRIVACY_UPDATED = new Date("2026-03-01");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: HOME_UPDATED,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/changelog`,
      lastModified: CHANGELOG_UPDATED,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${siteConfig.url}/privacy`,
      lastModified: PRIVACY_UPDATED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
