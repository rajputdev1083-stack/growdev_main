import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Services | Web Development, Digital Marketing & GST - GR Development",
  description:
    "Web development, app development, SEO, Google Ads, GST, accounting & creative services across India. 25+ services. Get a quote.",
  openGraph: {
    title: "Services - GR Development",
    description: "Web development, digital marketing, GST & creative services. 40+ cities.",
    url: `${SITE_URL}/service`,
    siteName: "GR Development",
    type: "website",
    locale: "en_IN",
  },
  alternates: { canonical: `${SITE_URL}/service` },
  robots: { index: true, follow: true },
};

export default function ServiceLayout({ children }) {
  return children;
}
