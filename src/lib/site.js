export const SITE_URL =
process.env.NEXT_PUBLIC_SITE_URL || "https://www.avdevelopment.in";

export const SITE_NAME = "GR Development";

export const CONTACT_PHONE = "+918810688975";

export const CONTACT_EMAIL = "info@avdevelopment.in";

export const staticPages = [
{ path: "", priority: 1, changeFrequency: "daily" },
{ path: "service", priority: 0.9, changeFrequency: "weekly" },
{ path: "about", priority: 0.8, changeFrequency: "monthly" },
{ path: "contact", priority: 0.8, changeFrequency: "monthly" },
{ path: "founder", priority: 0.7, changeFrequency: "monthly" },
{ path: "work", priority: 0.7, changeFrequency: "monthly" },
{ path: "blog", priority: 0.8, changeFrequency: "daily" },
];