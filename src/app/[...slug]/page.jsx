import { notFound } from "next/navigation";
import CityPage from "@/components/LocationPage";
import ServicePage from "@/components/CityServices";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { cities, getCityBySlug, services, getServiceBySlug } from "@/data/cityData";
import SEOPage from "@/components/seo/SEOPage";
import { getAllCombinations, unslugify } from "@/lib/db";
import { generatePageContent } from "@/lib/seoEngine";
import ProgrammaticLocationTemplate from "@/components/ProgrammaticLocationTemplate";
import {
  getAllProgrammaticParams,
  getProgrammaticPageData,
} from "@/data/programmaticSeoData";

export const dynamicParams = true;
export const revalidate = 86400;

export async function generateStaticParams() {
  const cityPages = cities.map((city) => ({ slug: [city.slug] }));
  const cityServicePages = cities.flatMap((city) =>
    services.map((service) => ({ slug: [city.slug, service.slug] }))
  );
  
  // Add exactly 100 programmatic paths at build time to prevent timeout
  const allSeoPaths = getAllCombinations();
  const seoPages = allSeoPaths.slice(0, 100).map((path) => ({
    slug: [path.state, path.city, path.location, path.service]
  }));

  const programmaticPages = getAllProgrammaticParams().map((item) => ({
    slug: [item.slug, item.state, item.location],
  }));

  return [...cityPages, ...cityServicePages, ...programmaticPages, ...seoPages];
}

export async function generateMetadata({ params }) {
  const { slug = [] } = await params;

  if (slug.length === 4) {
    const [state, city, location, service] = slug;
    const content = generatePageContent(city, location, service);
    return {
      title: `${unslugify(service)} in ${unslugify(location)}, ${unslugify(city)} | Best Local Experts`,
      description: content.introText.substring(0, 160),
      keywords: [
        `${unslugify(service)} in ${unslugify(location)}`,
        `${unslugify(service)} in ${unslugify(city)}`,
        `${unslugify(service)} in ${unslugify(state)}`,
        `Best ${unslugify(service)} ${unslugify(location)}`,
        `Top ${unslugify(service)} ${unslugify(state)}`
      ],
      openGraph: {
        title: content.h1,
        description: content.introText.substring(0, 160),
        url: `/${state}/${city}/${location}/${service}`,
        type: 'website',
      }
    };
  }

  if (slug.length === 3) {
    const [serviceSlug, stateSlug, locationSlug] = slug;
    const pageData = getProgrammaticPageData({
      serviceSlug,
      stateSlug,
      locationSlug,
    });

    if (!pageData) return {};

    const { service, state, location } = pageData;
    const canonical = `${SITE_URL}/${service.slug}/${state.slug}/${location.slug}`;
    const title = `${service.name} in ${location.name}, ${state.name} | ${SITE_NAME}`;
    const description = `Need ${service.name.toLowerCase()} in ${location.name}, ${state.name}? ${SITE_NAME} delivers strategy, execution, and support for local business growth.`;

    return {
      title,
      description,
      alternates: { canonical },
      keywords: [
        `${service.name} in ${location.name}`,
        `${service.name} in ${state.name}`,
        `${service.name} agency ${location.name}`,
        `${service.name.toLowerCase()} company ${location.name}`,
      ],
      openGraph: {
        title,
        description,
        url: canonical,
        siteName: SITE_NAME,
        type: "website",
        locale: "en_IN",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
      },
      robots: {
        index: true,
        follow: true,
      },
    };
  }

  if (slug.length === 2) {
    const [citySlug, serviceSlug] = slug;
    const city = getCityBySlug(citySlug);
    const service = getServiceBySlug(serviceSlug);
    if (!city || !service) return {};

    const title = `${service.name} in ${city.name} | AV Development`;
    const description = `Get ${service.name} in ${city.name}. AV Development offers premium ${service.name} and digital solutions in ${city.name}. Free consultation.`;
    const canonical = `${SITE_URL}/${citySlug}/${serviceSlug}`;

    return {
      title,
      description,
      keywords: [
        `${service.name} ${city.name}`,
        `${service.name} in ${city.name}`,
        `best ${service.name} ${city.name}`,
      ],
      openGraph: {
        title: `${service.name} in ${city.name} - AV Development`,
        description,
        url: canonical,
        siteName: SITE_NAME,
        type: "website",
        locale: "en_IN",
      },
      twitter: { card: "summary_large_image", title, description },
      alternates: { canonical },
      robots: { index: true, follow: true },
    };
  }

  return {};
}

export default async function CatchAllPage({ params }) {
  const { slug = [] } = await params;

  if (slug.length === 1) {
    const city = getCityBySlug(slug[0]);
    if (!city) return notFound();
    return <CityPage city={city} services={services} />;
  }

  if (slug.length === 2) {
    const city = getCityBySlug(slug[0]);
    const service = getServiceBySlug(slug[1]);
    if (!city || !service) return notFound();
    return <ServicePage city={city} service={service} />;
  }

  if (slug.length === 4) {
    const [state, city, location, service] = slug;
    return <SEOPage state={state} city={city} location={location} service={service} />;
  }

  if (slug.length === 3) {
    const [serviceSlug, stateSlug, locationSlug] = slug;
    const pageData = getProgrammaticPageData({
      serviceSlug,
      stateSlug,
      locationSlug,
    });

    if (!pageData) return notFound();

    const { service, state, location, nearbyLocations } = pageData;
    const canonical = `${SITE_URL}/${service.slug}/${state.slug}/${location.slug}`;

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          name: `${service.name} in ${location.name}`,
          serviceType: service.name,
          areaServed: [
            { "@type": "City", name: location.name },
            { "@type": "State", name: state.name },
          ],
          provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
          url: canonical,
          description: `Professional ${service.name.toLowerCase()} solutions in ${location.name}, ${state.name}.`,
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            {
              "@type": "ListItem",
              position: 2,
              name: service.name,
              item: `${SITE_URL}/${service.slug}`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: state.name,
              item: `${SITE_URL}/${service.slug}/${state.slug}`,
            },
            { "@type": "ListItem", position: 4, name: location.name, item: canonical },
          ],
        },
      ],
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <ProgrammaticLocationTemplate
          service={service}
          state={state}
          location={location}
          nearbyLocations={nearbyLocations}
        />
      </>
    );
  }

  return notFound();
}
