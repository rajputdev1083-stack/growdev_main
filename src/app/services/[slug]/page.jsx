import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/data/serviceData";

export default async function Page({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return notFound();

  return (
    <div style={{ padding: "40px" }}>
      <h1>{service.title}</h1>
      <p>{service.description}</p>
    </div>
  );
}

// 🔥 IMPORTANT (Next.js needs this sometimes)
export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}
