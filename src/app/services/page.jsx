import Link from "next/link";
import { services } from "@/data/serviceData";

export default function ServicesPage() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>All Services</h1>

      {services.map((s) => (
        <div key={s.slug}>
          <Link href={`/services/${s.slug}`}>
            {s.title}
          </Link>
        </div>
      ))}
    </div>
  );
}