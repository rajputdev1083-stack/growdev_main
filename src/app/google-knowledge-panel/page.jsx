 // app/google-knowledge-panel/page.jsx
import Link from "next/link";
import CityLinks from "@/utlls/CityLinks";

export const metadata = {
  title: "Google Knowledge Panel Setup | Grow Development - Get Knowledge Panel for Person, Brand India",
  description: "Professional Google Knowledge Panel setup for individuals, celebrities, brands. Wikipedia verification, structured data, panel optimization. Starting from ₹15,000.",
  keywords: "Google Knowledge Panel, Knowledge Panel setup, Google Knowledge Graph, Wikipedia panel, celebrity knowledge panel, brand knowledge panel India",
  openGraph: {
    title: "Google Knowledge Panel - Get Featured on Google Search",
    description: "Professional Knowledge Panel setup. Starting at ₹15,000.",
  },
};

const packages = [
  {
    name: "Individual Setup",
    price: "₹15,000",
    duration: "One-time",
    features: [
      "Eligibility check",
      "Wikipedia verification",
      "Structured data",
      "Panel optimization",
      "Social profiles linking",
      "Image optimization",
      "Monitoring 30 days",
      "Email support"
    ],
    ideal: "Professionals, Artists",
    commitment: "Till setup"
  },
  {
    name: "Brand/Company",
    price: "₹25,000",
    duration: "One-time",
    features: [
      "Everything in Individual",
      "Official website verification",
      "Logo optimization",
      "Brand description",
      "Social media linking",
      "Google Business Profile sync",
      "Reviews integration",
      "Priority support"
    ],
    popular: true,
    ideal: "Businesses, Startups",
    commitment: "Till setup"
  },
  {
    name: "Celebrity/Public Figure",
    price: "₹35,000",
    duration: "One-time",
    features: [
      "Everything in Brand",
      "Biography enhancement",
      "Awards & achievements",
      "Filmography/Discography",
      "News section",
      "Social media highlights",
      "Dedicated manager",
      "Quarterly updates"
    ],
    ideal: "Celebrities, Influencers",
    commitment: "Till setup"
  }
];

const services = [
  { icon: "🔍", name: "Eligibility Check", price: "Free", desc: "Panel possible?" },
  { icon: "📋", name: "Wikipedia Sync", price: "Incl.", desc: "Primary source" },
  { icon: "🏷️", name: "Structured Data", price: "Incl.", desc: "Schema markup" },
  { icon: "📸", name: "Image Optimization", price: "Incl.", desc: "Profile photos" },
  { icon: "🔗", name: "Social Linking", price: "Incl.", desc: "All platforms" },
  { icon: "🌐", name: "Website Verification", price: "Incl.", desc: "Google Search Console" },
  { icon: "📊", name: "Panel Optimization", price: "Incl.", desc: "Rich results" },
  { icon: "👁️", name: "Monitoring", price: "Incl.", desc: "30 days" },
  { icon: "🔄", name: "Updates", price: "₹5,000", desc: "Yearly maintenance" },
  { icon: "⚡", name: "Expedited", price: "+50%", desc: "Faster setup" }
];

const benefits = [
  { metric: "90%", label: "Success rate" },
  { metric: "₹15k", label: "Starting price" },
  { metric: "2-4", label: "weeks timeline" },
  { metric: "24/7", label: "Support" }
];

const process = [
  { step: "01", title: "Consultation" },
  { step: "02", title: "Eligibility" },
  { step: "03", title: "Wikipedia" },
  { step: "04", title: "Schema" },
  { step: "05", title: "Submit" },
  { step: "06", title: "Panel Live" }
];

const requirements = [
  "Wikipedia page (or in progress)", "Official website", "Social media profiles",
  "High-quality photos", "Biography/About", "Awards/Recognition", "News coverage",
  "Google Business Profile (for brands)"
];

const panelTypes = [
  { type: "Person", sources: "Wikipedia, Crunchbase, IMDb", time: "2-3 weeks" },
  { type: "Brand/Company", sources: "Wikipedia, Website, GMB", time: "3-4 weeks" },
  { type: "Place/Location", sources: "Google Maps, Website", time: "1-2 weeks" },
  { type: "Organization", sources: "Wikipedia, LinkedIn", time: "3-4 weeks" }
];

const faqs = [
  { q: "What is a Knowledge Panel?", a: "The information box that appears on Google when you search for a person, brand, or place." },
  { q: "Who gets a Knowledge Panel?", a: "Notable individuals, brands, organizations with significant online presence and Wikipedia page." },
  { q: "Do I need Wikipedia first?", a: "Yes, Wikipedia is the primary source for person/brand Knowledge Panels." },
  { q: "How long does it take?", a: "2-4 weeks after Wikipedia is live and verified." },
  { q: "Can Google remove it?", a: "If information becomes outdated or incorrect. We monitor for 30 days." },
  { q: "Is it guaranteed?", a: "Google decides, but we follow all guidelines to maximize chances." }
];

const contactNumber = "+918810688975";

export default function GoogleKnowledgePanelPage() {
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
            <span className="text-neutral-800">google-knowledge-panel</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-['Inter'] text-5xl md:text-6xl font-light text-neutral-900 mb-6">
              Google Knowledge Panel
              <span className="block font-medium italic text-neutral-500 text-3xl mt-2">Get Featured on Google Search</span>
            </h1>
            <p className="text-lg text-neutral-500 mb-8">
              Get the official information box on Google. For individuals, brands, and celebrities. Wikipedia verification, schema markup, panel optimization. Starting ₹15,000.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-full">Individual ₹15k</span>
              <span className="px-4 py-2 bg-neutral-800 text-white text-sm rounded-full">Brand ₹25k</span>
              <span className="px-4 py-2 bg-neutral-700 text-white text-sm rounded-full">90% Success</span>
              <span className="px-4 py-2 bg-neutral-600 text-white text-sm rounded-full">{contactNumber}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((item, i) => (
              <div key={i} className="text-center">
                <div className="font-['Inter'] text-2xl text-neutral-900">{item.metric}</div>
                <div className="text-xs text-neutral-400 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-4">Knowledge Panel Packages</h2>
          <p className="text-center text-neutral-500 text-sm mb-10 max-w-2xl mx-auto">Free eligibility check first. Wikipedia page required or we can create it.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div key={i} className={`bg-white border ${pkg.popular ? 'border-neutral-900' : 'border-neutral-200'} rounded-lg relative p-6`}>
                {pkg.popular && <div className="absolute top-0 right-0 bg-neutral-900 text-white text-xs px-3 py-1 rounded-tr-lg rounded-bl-lg">Popular</div>}
                <h3 className="text-xl font-medium text-neutral-900">{pkg.name}</h3>
                <p className="text-xs text-neutral-400 mt-1 mb-3">{pkg.ideal}</p>
                <div className="mb-3"><span className="text-3xl font-light">{pkg.price}</span><span className="text-sm text-neutral-400 ml-1">{pkg.duration}</span></div>
                <p className="text-xs text-neutral-400 mb-4">⏱️ {pkg.commitment}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="text-xs text-neutral-600 flex"><span className="text-neutral-400 mr-2">✓</span>{f}</li>
                  ))}
                </ul>
                <Link href="/contact" className="block w-full py-2 bg-neutral-900 text-white text-sm text-center rounded hover:bg-neutral-800">Check Eligibility</Link>
              </div>
            ))}
          </div>
          <p className="text-xs text-neutral-400 text-center mt-6">*Combo: Wikipedia + Knowledge Panel: 15% discount</p>
        </div>
      </section>

      {/* Panel Types */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-xl font-light text-center text-neutral-900 mb-6">Panel Types & Timeline</h2>
          <div className="grid md:grid-cols-4 gap-3">
            {panelTypes.map((item, i) => (
              <div key={i} className="bg-white border border-neutral-200 rounded-lg p-4">
                <h3 className="font-medium text-neutral-900 mb-1">{item.type}</h3>
                <p className="text-xs text-neutral-400 mb-1">Sources: {item.sources}</p>
                <p className="text-xs font-medium text-neutral-900">⏱️ {item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-xl font-light text-center text-neutral-900 mb-6">What's Included</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {services.map((s, i) => (
              <div key={i} className="bg-neutral-50 border border-neutral-200 rounded-lg p-3">
                <span className="text-xl block mb-1">{s.icon}</span>
                <h3 className="font-medium text-sm text-neutral-900">{s.name}</h3>
                <p className="text-xs text-neutral-400">{s.desc}</p>
                <p className="text-xs font-medium text-neutral-900 mt-1">{s.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-xl font-light text-center text-neutral-900 mb-6">What You Need</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {requirements.map((req, i) => (
              <span key={i} className="px-3 py-1 bg-white border border-neutral-200 text-neutral-700 text-xs rounded-full">{req}</span>
            ))}
          </div>
          <p className="text-xs text-neutral-400 text-center mt-4">*Wikipedia page required. We can create it first.</p>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-xl font-light text-center text-neutral-900 mb-6">Our Process</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {process.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-10 h-10 mx-auto mb-1 bg-neutral-100 border border-neutral-200 rounded-full flex items-center justify-center text-xs text-neutral-900">{step.step}</div>
                <p className="text-xs text-neutral-600">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Knowledge Panel */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-xl font-light text-center text-neutral-900 mb-6">Why Get a Knowledge Panel?</h2>
          <div className="grid md:grid-cols-4 gap-3">
            <div className="bg-white border border-neutral-200 rounded-lg p-3 text-center">
              <span className="text-2xl mb-1 block">⭐</span>
              <p className="text-xs text-neutral-700">Instant credibility</p>
            </div>
            <div className="bg-white border border-neutral-200 rounded-lg p-3 text-center">
              <span className="text-2xl mb-1 block">🔍</span>
              <p className="text-xs text-neutral-700">Top search position</p>
            </div>
            <div className="bg-white border border-neutral-200 rounded-lg p-3 text-center">
              <span className="text-2xl mb-1 block">📊</span>
              <p className="text-xs text-neutral-700">Controls your narrative</p>
            </div>
            <div className="bg-white border border-neutral-200 rounded-lg p-3 text-center">
              <span className="text-2xl mb-1 block">📱</span>
              <p className="text-xs text-neutral-700">Mobile & voice search</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wikipedia + Panel Combo */}
      <section className="py-12 bg-white border-y border-neutral-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-['Inter'] text-xl font-light text-neutral-900 mb-3">Need Both? Wikipedia + Knowledge Panel</h2>
          <p className="text-sm text-neutral-500 mb-4">Get your Wikipedia page created and Knowledge Panel setup together. Save 15%.</p>
          <div className="flex justify-center gap-4 text-xs">
            <span className="px-3 py-1 bg-neutral-100 rounded-full">Wikipedia: ₹25,000</span>
            <span className="px-3 py-1 bg-neutral-100 rounded-full">Panel: ₹15,000</span>
            <span className="px-3 py-1 bg-neutral-900 text-white rounded-full">Combo: ₹34,000</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-['Inter'] text-xl font-light text-center text-neutral-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-neutral-50 border border-neutral-200 rounded-lg p-3">
                <h3 className="font-medium text-neutral-900 text-sm">{faq.q}</h3>
                <p className="text-xs text-neutral-500 mt-1">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Bar */}
      <section className="py-3 bg-neutral-100 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <span className="text-neutral-700">📞 {contactNumber}</span>
            <span className="text-neutral-300">|</span>
            <span className="text-neutral-700">📧 panel@growdevelopment.com</span>
            <span className="text-neutral-300">|</span>
            <span className="text-neutral-700">💬 WhatsApp: {contactNumber}</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-light text-white mb-2">Ready to get your Knowledge Panel?</h2>
          <p className="text-neutral-300 text-sm mb-6">Free eligibility check • Wikipedia + Panel combo available</p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-white text-neutral-900 text-sm rounded hover:bg-neutral-100">
            Check Eligibility
          </Link>
          <p className="text-xs text-neutral-700 mt-4">Call or WhatsApp: {contactNumber}</p>
        </div>
      </section>

      <CityLinks />
    </main>
  );
}