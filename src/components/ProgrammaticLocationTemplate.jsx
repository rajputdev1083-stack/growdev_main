import Link from "next/link";

export default function ProgrammaticLocationTemplate({
  service,
  state,
  location,
  nearbyLocations,
}) {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-gray-900">
          Home
        </Link>{" "}
        /{" "}
        <Link href={`/${service.slug}`} className="hover:text-gray-900">
          {service.name}
        </Link>{" "}
        /{" "}
        <span>{state.name}</span> / <span>{location.name}</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          {service.name} in {location.name}, {state.name}
        </h1>
        <p className="text-lg text-gray-700">
          Get result-focused {service.name.toLowerCase()} services in {location.name}, {state.name}.
          GR Development helps local businesses with strategy, execution, and ongoing support.
        </p>
      </header>

      <section className="grid md:grid-cols-3 gap-6 mb-12">
        <article className="border rounded-xl p-5">
          <h2 className="font-semibold mb-2">Local Expertise</h2>
          <p className="text-sm text-gray-600">
            We build campaigns and delivery plans tailored to {location.name} market behavior.
          </p>
        </article>
        <article className="border rounded-xl p-5">
          <h2 className="font-semibold mb-2">End-to-End Delivery</h2>
          <p className="text-sm text-gray-600">
            From discovery to launch, every step is managed for {service.name.toLowerCase()} success.
          </p>
        </article>
        <article className="border rounded-xl p-5">
          <h2 className="font-semibold mb-2">Growth Reporting</h2>
          <p className="text-sm text-gray-600">
            Transparent updates, measurable outcomes, and clear next steps for your team.
          </p>
        </article>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Why choose GR Development for {service.name} in {location.name}?
        </h2>
        <p className="text-gray-700 leading-7">
          Our team combines domain expertise and operational speed to help businesses in {location.name}{" "}
          and across {state.name} get consistent growth. Whether you are launching, rebranding, or
          scaling, we align technology and marketing execution with your commercial goals.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Nearby locations in {state.name}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {nearbyLocations.map((nearby) => (
            <Link
              key={nearby.slug}
              href={`/${service.slug}/${state.slug}/${nearby.slug}`}
              className="border rounded-lg p-3 text-sm hover:border-black transition-colors"
            >
              {service.name} in {nearby.name}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

