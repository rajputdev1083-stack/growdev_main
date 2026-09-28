export const services = [
  {
    slug: "web-development",
    title: "Web Development",
    description: "We build fast websites",
  },
  {
    slug: "app-development",
    title: "App Development",
    description: "We build mobile apps",
  },
  {
    slug: "seo",
    title: "SEO Optimization",
    description: "Rank your website on Google",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description: "Grow your business with full-funnel digital marketing",
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    description: "Run high-converting paid campaigns on Google",
  },
];

export const getServiceBySlug = (slug) =>
  services.find((s) => s.slug === slug);
