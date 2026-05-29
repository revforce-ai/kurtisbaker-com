import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-05-29T00:00:00Z");
  return [
    {
      url: "https://kurtisbaker.com",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
