// app/custom-software/page.jsx
import Link from "next/link";
import CityLinks from "@/utlls/CityLinks";

export const metadata = {
  title: "Custom Software Development | Grow Development - Tailored Business Solutions",
  description: "Bespoke software solutions for your unique business needs. CRM, ERP, inventory systems, dashboards, and automation tools. Custom quote based on requirements.",
  keywords: "custom software development, business software, CRM development, ERP system, inventory management, custom dashboard, workflow automation, enterprise software",
  openGraph: {
    title: "Custom Software - Built for Your Business",
    description: "Tailored software solutions that streamline operations and boost productivity.",
  },
};

const services = [
  {
    icon: "📊",
    title: "CRM Systems",
    description: "Manage customers, track sales, and automate follow-ups",
    features: ["Contact management", "Lead tracking", "Sales pipeline", "Email integration", "Analytics dashboard"]
  },
  {
    icon: "🏭",
    title: "ERP Software",
    description: "Integrate all business processes in one platform",
    features: ["Inventory", "Purchasing", "HR management", "Finance", "Reporting"]
  },
  {
    icon: "📦",
    title: "Inventory Management",
    description: "Track stock, orders, and suppliers in real-time",
    features: ["Stock tracking", "Low stock alerts", "Order management", "Supplier portal", "Barcode scanning"]
  },
  {
    icon: "📈",
    title: "Business Dashboards",
    description: "Visualize key metrics and make data-driven decisions",
    features: ["KPI tracking", "Real-time data", "Custom reports", "Charts & graphs", "Export options"]
  },
  {
    icon: "⚙️",
    title: "Workflow Automation",
    description: "Automate repetitive tasks and processes",
    features: ["Task automation", "Approval flows", "Email triggers", "Document generation", "Integration"]
  },
  {
    icon: "📱",
    title: "Mobile Business Apps",
    description: "Take your business on the go with custom mobile apps",
    features: ["Field service", "Sales app", "Inspection tools", "Offline mode", "Sync capability"]
  }
];

const industries = [
  "Retail & E-commerce",
  "Manufacturing",
  "Healthcare",
  "Logistics & Transportation",
  "Real Estate",
  "Education",
  "Finance & Banking",
  "Hospitality",
  "Construction",
  "Professional Services"
];

const process = [
  { step: "01", title: "Requirements", desc: "Understand your business needs and goals" },
  { step: "02", title: "Design", desc: "Create wireframes and system architecture" },
  { step: "03", title: "Development", desc: "Build your software with regular updates" },
  { step: "04", title: "Testing", desc: "Rigorous QA and user acceptance testing" },
  { step: "05", title: "Deployment", desc: "Launch and train your team" },
  { step: "06", title: "Support", desc: "Ongoing maintenance and improvements" }
];

const techStack = [
  { category: "Frontend", technologies: ["React", "Next.js", "Vue.js", "Angular"] },
  { category: "Backend", technologies: ["Node.js", "Python", "Java", ".NET Core", "PHP"] },
  { category: "Database", technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
  { category: "Cloud", technologies: ["AWS", "Azure", "Google Cloud", "DigitalOcean"] }
];

export default function CustomSoftwarePage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center space-x-2 text-sm text-neutral-400 mb-6">
            <Link href="/" className="hover:text-neutral-600">home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-neutral-600">services</Link>
            <span>/</span>
            <span className="text-neutral-800">custom-software</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-['Inter'] text-5xl md:text-6xl font-light text-neutral-900 mb-6">
              Custom Software
              <span className="block font-medium italic text-neutral-500 text-4xl mt-2">Built for your business</span>
            </h1>
            <p className="text-lg text-neutral-500 mb-8">
              Stop adapting your business to off-the-shelf software. Get exactly what you need with custom solutions 
              that streamline operations, automate workflows, and drive growth.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-full">Tailored Solutions</span>
              <span className="px-4 py-2 bg-neutral-800 text-white text-sm rounded-full">Free Consultation</span>
              <span className="px-4 py-2 bg-neutral-700 text-white text-sm rounded-full">Fixed Price or Hourly</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-4">
            What We Build
          </h2>
          <p className="text-center text-neutral-500 max-w-2xl mx-auto mb-12">
            Custom software solutions for every business need
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="border border-neutral-200 rounded-lg p-6 hover:border-neutral-400 transition">
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="font-medium text-neutral-900 text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-neutral-500 mb-4">{service.description}</p>
                <ul className="space-y-1">
                  {service.features.map((f, j) => (
                    <li key={j} className="text-xs text-neutral-600 flex items-start">
                      <span className="text-neutral-400 mr-2">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-12">
            Development Process
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {process.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-white border-2 border-neutral-300 rounded-full flex items-center justify-center font-['Inter'] text-neutral-900">
                  {step.step}
                </div>
                <h3 className="font-medium text-neutral-900 text-sm mb-1">{step.title}</h3>
                <p className="text-xs text-neutral-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-8">
            Industries We Serve
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {industries.map((industry, i) => (
              <span key={i} className="px-4 py-2 bg-neutral-100 text-neutral-700 text-sm rounded-full">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-12">
            Technologies We Use
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, i) => (
              <div key={i} className="bg-white p-6 border border-neutral-200 rounded-lg">
                <h3 className="font-medium text-neutral-900 mb-3">{tech.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.technologies.map((t, j) => (
                    <span key={j} className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-8">
            <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-8">
              Flexible Engagement Models
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <span className="text-3xl mb-2 block">💰</span>
                <h3 className="font-medium text-neutral-900">Fixed Price</h3>
                <p className="text-xs text-neutral-500 mt-2">Best for well-defined projects with clear requirements</p>
              </div>
              <div className="text-center">
                <span className="text-3xl mb-2 block">⏱️</span>
                <h3 className="font-medium text-neutral-900">Hourly Rate</h3>
                <p className="text-xs text-neutral-500 mt-2">Ideal for ongoing development and maintenance</p>
              </div>
              <div className="text-center">
                <span className="text-3xl mb-2 block">📅</span>
                <h3 className="font-medium text-neutral-900">Dedicated Team</h3>
                <p className="text-xs text-neutral-500 mt-2">Monthly retainer for long-term projects</p>
              </div>
            </div>
            <p className="text-center text-sm text-neutral-500 mt-8">
              Get a custom quote based on your specific requirements
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-12">
            Why Choose Custom Software?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Exactly What You Need", desc: "No unnecessary features, no compromises" },
              { title: "Scalable", desc: "Grows and evolves with your business" },
              { title: "Competitive Advantage", desc: "Unique solutions your competitors don't have" },
              { title: "Integrate Everything", desc: "Connect with your existing tools and systems" },
              { title: "Own Your Data", desc: "Full control and ownership of your information" },
              { title: "Long-term Cost", desc: "No recurring license fees, pay once" }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-2xl text-neutral-400">✓</span>
                <div>
                  <h3 className="font-medium text-neutral-900">{item.title}</h3>
                  <p className="text-sm text-neutral-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-['Inter'] text-3xl font-light text-white mb-4">
            Ready to build your software?
          </h2>
          <p className="text-neutral-300 mb-8">Tell us about your requirements for a free consultation</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-white text-neutral-900 text-sm rounded hover:bg-neutral-100">
              Discuss Your Project
            </Link>
            <Link href="/portfolio" className="px-8 py-3 border border-white text-white text-sm rounded hover:bg-white hover:text-neutral-900">
              See Case Studies
            </Link>
          </div>
          <p className="text-neutral-500 text-sm mt-6">📞 Call: +91 97186 59236</p>
        </div>
      </section>

      <CityLinks />
    </main>
  );
}