// app/seo/page.jsx
import Link from "next/link";
import CityLinks from "@/utlls/CityLinks";

export const metadata = {
  title: "SEO Optimization | GR Development - Rank #1 on Google",
  description: "Professional SEO services to improve your Google rankings. On-page SEO, technical SEO, local SEO, and link building. Starting from ₹10,000/month.",
  keywords: "SEO services India, Google ranking, on-page SEO, technical SEO, local SEO, link building, SEO agency, search engine optimization",
  openGraph: {
    title: "SEO Optimization - Rank Higher on Google",
    description: "Data-driven SEO strategies that drive organic traffic and grow your business.",
  },
};

const packages = [
  {
    name: "Local SEO",
    price: "₹10,000",
    duration: "per month",
    features: [
      "Google Business Profile optimization",
      "Local keyword research",
      "50+ local citations",
      "Review management",
      "Local content creation",
      "Monthly performance report",
      "Google Maps ranking",
      "WhatsApp support"
    ],
    ideal: "Local businesses, Restaurants, Salons",
    commitment: "3 months minimum"
  },
  {
    name: "National SEO",
    price: "₹20,000",
    duration: "per month",
    features: [
      "Comprehensive keyword research",
      "On-page optimization",
      "Technical SEO audit",
      "Content strategy",
      "200+ backlinks",
      "Competitor analysis",
      "Monthly reporting",
      "Dedicated SEO manager",
      "Priority support"
    ],
    popular: true,
    ideal: "E-commerce, Agencies, Nationwide brands",
    commitment: "6 months minimum"
  },
  {
    name: "E-commerce SEO",
    price: "₹30,000",
    duration: "per month",
    features: [
      "Product page optimization",
      "Category page SEO",
      "Schema markup",
      "Reviews optimization",
      "Site structure audit",
      "Image optimization",
      "Blog content strategy",
      "Competitor monitoring",
      "Conversion tracking",
      "Monthly reporting"
    ],
    ideal: "Online stores, Marketplaces",
    commitment: "6 months minimum"
  },
  {
    name: "Enterprise SEO",
    price: "Custom",
    duration: "per month",
    features: [
      "Custom strategy development",
      "International SEO",
      "Multi-language support",
      "Advanced analytics",
      "API integrations",
      "Dedicated team",
      "Weekly strategy calls",
      "Custom reporting",
      "24/7 priority support"
    ],
    ideal: "Large enterprises, Chains",
    commitment: "12 months"
  }
];

const services = [
  {
    icon: "🔍",
    title: "Keyword Research",
    desc: "Find what your customers are actually searching for"
  },
  {
    icon: "📄",
    title: "On-Page SEO",
    desc: "Optimize titles, meta, headers, and content"
  },
  {
    icon: "⚙️",
    title: "Technical SEO",
    desc: "Site speed, mobile-friendliness, crawlability"
  },
  {
    icon: "📍",
    title: "Local SEO",
    desc: "Google My Business, local citations, maps"
  },
  {
    icon: "🔗",
    title: "Link Building",
    desc: "Quality backlinks from authoritative sites"
  },
  {
    icon: "📊",
    title: "Content Strategy",
    desc: "Blog posts, guides, and optimized content"
  },
  {
    icon: "📱",
    title: "Mobile SEO",
    desc: "Optimize for mobile-first indexing"
  },
  {
    icon: "🛍️",
    title: "E-commerce SEO",
    desc: "Product and category page optimization"
  }
];

const process = [
  { step: "01", title: "Audit", desc: "Analyze current performance" },
  { step: "02", title: "Research", desc: "Find keywords & opportunities" },
  { step: "03", title: "Strategy", desc: "Plan optimization roadmap" },
  { step: "04", title: "Implement", desc: "Execute on-page & off-page" },
  { step: "05", title: "Monitor", desc: "Track rankings & traffic" },
  { step: "06", title: "Report", desc: "Monthly performance updates" }
];

const guarantees = [
  { metric: "30-90 days", label: "First results" },
  { metric: "200+", label: "Quality backlinks" },
  { metric: "15+", label: "Keywords/page" },
  { metric: "95%", label: "Client retention" }
];

export default function SEOPage() {
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
            <span className="text-neutral-800">seo-optimization</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-['Inter'] text-5xl md:text-6xl font-light text-neutral-900 mb-6">
              SEO Optimization
              <span className="block font-medium italic text-neutral-500 text-4xl mt-2">Rank #1 on Google</span>
            </h1>
            <p className="text-lg text-neutral-500 mb-8">
              Drive organic traffic and grow your business with data-driven SEO strategies. 
              From local SEO to enterprise-level optimization.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-full">Starting ₹10,000/mo</span>
              <span className="px-4 py-2 bg-neutral-800 text-white text-sm rounded-full">30-90 days results</span>
              <span className="px-4 py-2 bg-neutral-700 text-white text-sm rounded-full">Money-back guarantee*</span>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-12 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {guarantees.map((item, i) => (
              <div key={i} className="text-center">
                <div className="font-['Inter'] text-3xl text-neutral-900">{item.metric}</div>
                <div className="text-xs text-neutral-400 mt-2 tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-12">
            What's Included
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div key={i} className="border border-neutral-200 rounded-lg p-6">
                <span className="text-3xl mb-3 block">{service.icon}</span>
                <h3 className="font-medium text-neutral-900 mb-2">{service.title}</h3>
                <p className="text-sm text-neutral-500">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-['Inter'] text-4xl font-light text-neutral-900">SEO Packages</h2>
            <p className="text-neutral-500 mt-2">Month-to-month • No setup fees • Cancel anytime</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, i) => (
              <div key={i} className={`bg-white border ${pkg.popular ? 'border-neutral-900' : 'border-neutral-200'} rounded-lg relative`}>
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-neutral-900 text-white text-xs px-3 py-1 rounded-tr-lg rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="font-['Inter'] text-xl font-medium text-neutral-900">{pkg.name}</h3>
                  <p className="text-xs text-neutral-400 mt-1 mb-4">{pkg.ideal}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-light text-neutral-900">{pkg.price}</span>
                    <span className="text-sm text-neutral-400 ml-1">{pkg.duration}</span>
                  </div>
                  <p className="text-xs text-neutral-500 mb-4">⏱️ {pkg.commitment}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="text-xs text-neutral-600 flex items-start">
                        <span className="text-neutral-400 mr-2">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/contact?service=seo-${pkg.name.toLowerCase().replace(/\s+/g, '-')}`} 
                        className="block w-full py-2 bg-neutral-900 text-white text-sm text-center rounded hover:bg-neutral-800">
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-neutral-400 text-center mt-6">*100% money-back guarantee if no improvement in 90 days</p>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {process.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-neutral-100 border border-neutral-200 rounded-full flex items-center justify-center font-['Inter'] text-neutral-900">
                  {step.step}
                </div>
                <h3 className="font-medium text-neutral-900 text-sm mb-1">{step.title}</h3>
                <p className="text-xs text-neutral-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools We Use */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-2xl font-light text-center text-neutral-900 mb-8">
            Tools & Platforms
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Google Search Console", "Google Analytics", "SEMrush", "Ahrefs", "Moz",
              "Screaming Frog", "Yoast SEO", "Rank Math", "GTmetrix", "PageSpeed Insights",
              "Majestic", "SpyFu", "BuzzSumo", "AnswerThePublic", "Ubersuggest"
            ].map((tool, i) => (
              <span key={i} className="px-4 py-2 bg-white border border-neutral-200 text-neutral-700 text-sm rounded-full">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-12">
            Common Questions
          </h2>
          <div className="space-y-4">
            {[
              { q: "How long until I see results?", a: "Most clients see improvement in 30-90 days. SEO is a long-term strategy." },
              { q: "Do you guarantee #1 ranking?", a: "We guarantee improvement, but no one can guarantee #1 due to Google's algorithm." },
              { q: "What's included in the monthly fee?", a: "Everything listed in your package - no hidden costs or setup fees." },
              { q: "Can I cancel anytime?", a: "Yes, month-to-month with no cancellation fees." }
            ].map((faq, i) => (
              <div key={i} className="border border-neutral-200 rounded-lg p-4">
                <h3 className="font-medium text-neutral-900 mb-1">{faq.q}</h3>
                <p className="text-sm text-neutral-500">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-['Inter'] text-3xl font-light text-white mb-4">
            Ready to rank higher?
          </h2>
          <p className="text-neutral-300 mb-8">Get a free SEO audit and consultation</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-white text-neutral-900 text-sm rounded hover:bg-neutral-100">
              Get Free Audit
            </Link>
            <Link href="/portfolio" className="px-8 py-3 border border-white text-white text-sm rounded hover:bg-white hover:text-neutral-900">
              View Case Studies
            </Link>
          </div>
          <p className="text-neutral-500 text-sm mt-6">📞 Call: +91 97186 59236</p>
        </div>
      </section>

      <CityLinks />
    </main>
  );
}