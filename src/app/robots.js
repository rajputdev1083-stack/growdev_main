import { SITE_URL } from "@/lib/site";

export default function robots() {
  const base = SITE_URL.replace(/\/$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/dashboard/",
          "/private/",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/", "/dashboard/", "/private/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
