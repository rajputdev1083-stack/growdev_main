// app/wikipedia-page-creation/page.jsx
import Link from "next/link";
import CityLinks from "@/utlls/CityLinks";

export const metadata = {
  title: "Wikipedia Page Creation | AV Development - Biography, Company, Celebrity Pages India",
  description: "Professional Wikipedia page creation for individuals, brands, and celebrities. Notability assessment, content drafting, citation sourcing, and page approval. Starting from ₹25,000.",
  keywords: "Wikipedia page creation India, Wikipedia writer, Wikipedia consultant, Wikipedia page creator, biography page, company Wikipedia page, celebrity Wikipedia page",
  openGraph: {
    title: "Wikipedia Page Creation - Get Your Page Live on Wikipedia",
    description: "Expert Wikipedia page creation. Notability check, drafting, citations, approval. Starting ₹25,000.",
  },
};

const packages = [
  {
    name: "Individual/Biography",
    price: "₹25,000",
    duration: "One-time",
    features: [
      "Notability assessment",
      "Biography drafting",
      "Citation sourcing",
      "Infobox creation",
      "Photo upload help",
      "Page submission",
      "Follow-up with editors",
      "30-day monitoring"
    ],
    ideal: "Professionals, Artists",
    commitment: "Till approval"
  },
  {
    name: "Company/Brand",
    price: "₹35,000",
    duration: "One-time",
    features: [
      "Everything in Individual",
      "Company history",
      "Products/Services",
      "Leadership section",
      "Awards & recognition",
      "Media coverage",
      "Industry impact",
      "Priority support"
    ],
    popular: true,
    ideal: "Businesses, Startups",
    commitment: "Till approval"
  },
  {
    name: "Celebrity/Public Figure",
    price: "₹50,000",
    duration: "One-time",
    features: [
      "Everything in Company",
      "Career chronology",
      "Personal life section",
      "Philanthropy work",
      "Media features",
      "Controversies (if any)",
      "Discography/Filmography",
      "Dedicated manager"
    ],
    ideal: "Celebrities, Influencers",
    commitment: "Till approval"
  }
];

const services = [
  { icon: "📋", name: "Notability Check", price: "Free", desc: "Eligibility assessment" },
  { icon: "✍️", name: "Content Drafting", price: "Incl.", desc: "Neutral, encyclopedic" },
  { icon: "🔗", name: "Citation Sourcing", price: "Incl.", desc: "Reliable references" },
  { icon: "📊", name: "Infobox Creation", price: "Incl.", desc: "Summary box" },
  { icon: "📸", name: "Photo Upload", price: "₹999", desc: "Copyright compliance" },
  { icon: "📝", name: "Page Submission", price: "Incl.", desc: "AfC process" },
  { icon: "👁️", name: "Editor Follow-up", price: "Incl.", desc: "Query handling" },
  { icon: "🛡️", name: "Monitoring", price: "Incl.", desc: "30 days watch" },
  { icon: "🔄", name: "Updates", price: "₹5,000", desc: "Annual maintenance" },
  { icon: "🌐", name: "Multi-language", price: "₹15,000", desc: "Hindi, regional" }
];

const benefits = [
  { metric: "95%", label: "Approval rate" },
  { metric: "₹25k", label: "Starting price" },
  { metric: "30+", label: "Pages created" },
  { metric: "4-8", label: "weeks timeline" }
];

const process = [
  { step: "01", title: "Consultation" },
  { step: "02", title: "Research" },
  { step: "03", title: "Drafting" },
  { step: "04", title: "Review" },
  { step: "05", title: "Submission" },
  { step: "06", title: "Approval" }
];

const requirements = [
  "Biography/Company details", "Press mentions", "News articles", "Awards proof",
  "Interviews", "Official website", "Social links", "Photos (copyright free)"
];

const notability = [
  { type: "Individual", criteria: "Significant coverage in reliable, independent sources" },
  { type: "Company", criteria: "Multiple news articles, industry recognition, notable achievements" },
  { type: "Celebrity", criteria: "Media features, awards, public recognition, verified achievements" }
];

const faqs = [
  { q: "What is notability and why does it matter?", a: "Notability is Wikipedia's criteria for inclusion. Your subject must have significant coverage in reliable, independent sources." },
  { q: "How long does it take?", a: "Typically 4-8 weeks from start to approval, depending on notability and editor reviews." },
  { q: "Is approval guaranteed?", a: "No one can guarantee Wikipedia approval. We ensure 100% compliance to maximize chances." },
  { q: "What if the page gets rejected?", a: "We revise and resubmit at no extra cost until approved or determined not feasible." },
  { q: "Can I edit my own Wikipedia page?", a: "It's discouraged due to conflict of interest. We handle all edits professionally." },
  { q: "Do I own the page?", a: "Wikipedia content is freely licensed. You don't 'own' it, but we maintain it for you." }
];

const contactNumber = "+919718659236";

export default function WikipediaPageCreationPage() {
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
            <span className="text-neutral-800">wikipedia-page-creation</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-['Inter'] text-5xl md:text-6xl font-light text-neutral-900 mb-6">
              Wikipedia Page Creation
              <span className="block font-medium italic text-neutral-500 text-3xl mt-2">Biography • Company • Celebrity</span>
            </h1>
            <p className="text-lg text-neutral-500 mb-8">
              Get a credible, professionally written Wikipedia page. Notability assessment, content drafting, citation sourcing, and approval handling. Starting ₹25,000.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-full">Biography ₹25k</span>
              <span className="px-4 py-2 bg-neutral-800 text-white text-sm rounded-full">Company ₹35k</span>
              <span className="px-4 py-2 bg-neutral-700 text-white text-sm rounded-full">95% Approval</span>
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
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-4">Wikipedia Packages</h2>
          <p className="text-center text-neutral-500 text-sm mb-10 max-w-2xl mx-auto">Price depends on notability and source availability. Free notability check first.</p>
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
                <Link href="/contact" className="block w-full py-2 bg-neutral-900 text-white text-sm text-center rounded hover:bg-neutral-800">Get Free Notability Check</Link>
              </div>
            ))}
          </div>
          <p className="text-xs text-neutral-400 text-center mt-6">*Price range: ₹25,000 to ₹3,00,000 depending on profile complexity and source availability [citation:4]</p>
        </div>
      </section>

      {/* Notability Criteria */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-xl font-light text-center text-neutral-900 mb-6">Notability Requirements</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {notability.map((item, i) => (
              <div key={i} className="bg-white border border-neutral-200 rounded-lg p-4">
                <h3 className="font-medium text-neutral-900 mb-2">{item.type}</h3>
                <p className="text-xs text-neutral-500">{item.criteria}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-neutral-400 text-center mt-4">Free assessment: We check if your profile qualifies before starting</p>
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
          <h2 className="font-['Inter'] text-xl font-light text-center text-neutral-900 mb-6">Documents & References Needed</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {requirements.map((req, i) => (
              <span key={i} className="px-3 py-1 bg-white border border-neutral-200 text-neutral-700 text-xs rounded-full">{req}</span>
            ))}
          </div>
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

      {/* Why Wikipedia */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-xl font-light text-center text-neutral-900 mb-6">Why a Wikipedia Page?</h2>
          <div className="grid md:grid-cols-4 gap-3">
            <div className="bg-white border border-neutral-200 rounded-lg p-3 text-center">
              <span className="text-2xl mb-1 block">⭐</span>
              <p className="text-xs text-neutral-700">Boosts credibility & trust [citation:4][citation:8]</p>
            </div>
            <div className="bg-white border border-neutral-200 rounded-lg p-3 text-center">
              <span className="text-2xl mb-1 block">🔍</span>
              <p className="text-xs text-neutral-700">High Google ranking [citation:8]</p>
            </div>
            <div className="bg-white border border-neutral-200 rounded-lg p-3 text-center">
              <span className="text-2xl mb-1 block">📊</span>
              <p className="text-xs text-neutral-700">Knowledge panel generation [citation:4]</p>
            </div>
            <div className="bg-white border border-neutral-200 rounded-lg p-3 text-center">
              <span className="text-2xl mb-1 block">🕒</span>
              <p className="text-xs text-neutral-700">Long-term digital presence [citation:8]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Explanation */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Inter'] text-xl font-light text-center text-neutral-900 mb-6">How We Work</h2>
          <ol className="space-y-3">
            <li className="flex gap-3 bg-neutral-50 border border-neutral-200 rounded-lg p-3">
              <span className="font-medium text-neutral-900">1.</span>
              <span className="text-xs text-neutral-600">Client submits details and available references [citation:4]</span>
            </li>
            <li className="flex gap-3 bg-neutral-50 border border-neutral-200 rounded-lg p-3">
              <span className="font-medium text-neutral-900">2.</span>
              <span className="text-xs text-neutral-600">We analyze notability chances. If low, we advise [citation:4]</span>
            </li>
            <li className="flex gap-3 bg-neutral-50 border border-neutral-200 rounded-lg p-3">
              <span className="font-medium text-neutral-900">3.</span>
              <span className="text-xs text-neutral-600">50% advance payment to start drafting [citation:4]</span>
            </li>
            <li className="flex gap-3 bg-neutral-50 border border-neutral-200 rounded-lg p-3">
              <span className="font-medium text-neutral-900">4.</span>
              <span className="text-xs text-neutral-600">Draft created and client approved [citation:4]</span>
            </li>
            <li className="flex gap-3 bg-neutral-50 border border-neutral-200 rounded-lg p-3">
              <span className="font-medium text-neutral-900">5.</span>
              <span className="text-xs text-neutral-600">Page submitted, wait for admin approval [citation:4]</span>
            </li>
            <li className="flex gap-3 bg-neutral-50 border border-neutral-200 rounded-lg p-3">
              <span className="font-medium text-neutral-900">6.</span>
              <span className="text-xs text-neutral-600">After 30 days survival, remaining 50% payment [citation:4]</span>
            </li>
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-['Inter'] text-xl font-light text-center text-neutral-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-neutral-200 rounded-lg p-3">
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
            <span className="text-neutral-700">📧 wiki@avdevelopment.com</span>
            <span className="text-neutral-300">|</span>
            <span className="text-neutral-700">💬 WhatsApp: {contactNumber}</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-light text-white mb-2">Ready to get on Wikipedia?</h2>
          <p className="text-neutral-300 text-sm mb-6">Free notability assessment • No obligation</p>
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