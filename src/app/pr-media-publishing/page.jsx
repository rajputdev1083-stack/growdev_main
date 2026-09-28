// app/pr-media-publishing/page.jsx
import Link from "next/link";
import CityLinks from "@/utlls/CityLinks";

export const metadata = {
  title: "PR & Media Publishing | AV Development - Get Featured on News Websites India",
  description: "Professional PR and media publishing services in India. Get featured on top news websites, business magazines, and industry portals. Starting from ₹6,400 per release.",
  keywords: "PR agency India, media publishing, news website feature, press release distribution, online PR, brand coverage India, startup PR",
  openGraph: {
    title: "PR & Media Publishing - Get Featured on Top News Websites",
    description: "Professional media publishing. Starting at ₹6,400 per release.",
  },
};

const packages = [
  {
    name: "Press Release",
    price: "₹6,400",
    duration: "One-time",
    features: [
      "Professional writing",
      "Editing & proofreading",
      "Distribution to 50+ news sites",
      "Google News inclusion",
      "Social media sharing",
      "Newsletter promotion",
      "Coverage report",
      "48-72 hour turnaround"
    ],
    ideal: "Product launches, Announcements",
    commitment: "Per release"
  },
  {
    name: "Media Campaign",
    price: "₹25,000",
    duration: "Per month",
    features: [
      "2 press releases",
      "Media pitching",
      "Journalist outreach",
      "Interview opportunities",
      "Business magazine features",
      "Industry portal coverage",
      "Monthly report",
      "Dedicated PR manager"
    ],
    popular: true,
    ideal: "Startups, Growing brands",
    commitment: "3 months min"
  },
  {
    name: "Featured Interview",
    price: "₹45,000",
    duration: "One-time",
    features: [
      "In-depth interview",
      "Founder/CEO profile",
      "Photo/video shoot",
      "Multiple news outlets",
      "Social media promotion",
      "Email interview option",
      "Q&A format",
      "Premium placement"
    ],
    ideal: "Thought leaders, Celebrities",
    commitment: "Complete coverage"
  }
];

const services = [
  { icon: "📰", name: "Press Release", price: "₹6,400", desc: "Single release", sites: "50+ news sites" },
  { icon: "📝", name: "PR Writing", price: "₹3,000", desc: "Professional copy", sites: "SEO optimized" },
  { icon: "🎙️", name: "Email Interview", price: "₹45,000", desc: "Q&A format", sites: "Multiple outlets" },
  { icon: "🎥", name: "Vodcast Interview", price: "₹1.25L", desc: "Video + podcast", sites: "75K+ audience" },
  { icon: "📊", name: "Media Pitching", price: "₹15,000", desc: "Journalist outreach", sites: "Targeted lists" },
  { icon: "📋", name: "Press Kit", price: "₹5,000", desc: "Media materials", sites: "PDF + images" },
  { icon: "📈", name: "Coverage Tracking", price: "₹2,000", desc: "Monitoring", sites: "Monthly report" },
  { icon: "🌐", name: "Google News", price: "Incl.", desc: "Automatic distribution", sites: "All releases" },
  { icon: "📱", name: "Social Promotion", price: "Incl.", desc: "Newsletter + social", sites: "75K+ audience" },
  { icon: "🏢", name: "Magazine Feature", price: "₹35,000", desc: "Business magazines", sites: "Print + digital" }
];

const benefits = [
  { metric: "50+", label: "News websites" },
  { metric: "₹6.4k", label: "Starting price" },
  { metric: "48hr", label: "Fast turnaround" },
  { metric: "75K+", label: "Audience reach" }
];

const process = [
  { step: "01", title: "Brief" },
  { step: "02", title: "Writing" },
  { step: "03", title: "Review" },
  { step: "04", title: "Distribution" },
  { step: "05", title: "Coverage" },
  { step: "06", title: "Report" }
];

const mediaOutlets = [
  "NextBigWhat", "YourStory", "Inc42", "Entrepreneur India", "Business Standard",
  "Economic Times", "The Hindu Business Line", "India Today", "NDTV Profit",
  "Bloomberg Quint", "News18", "Zee News", "ANI", "PTI", "Google News"
];

const prValue = [
  { metric: "71%", label: "Trust earned media over ads" },
  { metric: "47%", label: "Increase in referral traffic" },
  { metric: "₹10-40k", label: "Distribution cost range" },
  { metric: "900M+", label: "Internet users in India" }
];

const faqs = [
  { q: "What is a press release?", a: "A professional news announcement about your business sent to media outlets for publication." },
  { q: "Which news sites do you publish on?", a: "50+ sites including Google News, business portals, and industry publications." },
  { q: "Is it guaranteed to get published?", a: "Yes, our distribution network ensures publication on partner sites." },
  { q: "How long does it take?", a: "48-72 hours from approval to publication." },
  { q: "Do I need to provide content?", a: "We write it for you. Just share your key points." },
  { q: "What's the difference between PR and ads?", a: "PR is earned media (more trusted), ads are paid. Both have value." }
];

const contactNumber = "+919718659236";

export default function PRMediaPublishingPage() {
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
            <span className="text-neutral-800">pr-media-publishing</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-['Inter'] text-5xl md:text-6xl font-light text-neutral-900 mb-6">
              PR & Media Publishing
              <span className="block font-medium italic text-neutral-500 text-3xl mt-2">Get Featured on News Websites</span>
            </h1>
            <p className="text-lg text-neutral-500 mb-8">
              Get your brand featured on top news websites, business magazines, and industry portals. Professional press release writing and distribution. Starting ₹6,400.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-full">Press Release ₹6.4k</span>
              <span className="px-4 py-2 bg-neutral-800 text-white text-sm rounded-full">Media Campaign ₹25k</span>
              <span className="px-4 py-2 bg-neutral-700 text-white text-sm rounded-full">50+ News Sites</span>
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

      {/* PR Value Stats */}
      <section className="py-6 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {prValue.map((item, i) => (
              <div key={i} className="text-center">
                <div className="font-['Inter'] text-lg text-neutral-900">{item.metric}</div>
                <div className="text-xs text-neutral-500 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-4">PR Packages</h2>
          <p className="text-center text-neutral-500 text-sm mb-10 max-w-2xl mx-auto">Choose the right package for your visibility needs.</p>
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
                <Link href="/contact" className="block w-full py-2 bg-neutral-900 text-white text-sm text-center rounded hover:bg-neutral-800">Get Featured</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Outlets */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-xl font-light text-center text-neutral-900 mb-6">Media Outlets We Work With</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {mediaOutlets.map((outlet, i) => (
              <span key={i} className="px-3 py-1 bg-white border border-neutral-200 text-neutral-700 text-xs rounded-full">{outlet}</span>
            ))}
          </div>
          <p className="text-xs text-neutral-400 text-center mt-4">*Plus 50+ regional and industry-specific publications</p>
        </div>
      </section>

      {/* All Services */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-xl font-light text-center text-neutral-900 mb-6">All PR Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {services.map((s, i) => (
              <div key={i} className="bg-neutral-50 border border-neutral-200 rounded-lg p-3">
                <span className="text-xl block mb-1">{s.icon}</span>
                <h3 className="font-medium text-sm text-neutral-900">{s.name}</h3>
                <p className="text-xs text-neutral-400">{s.desc}</p>
                <p className="text-xs font-medium text-neutral-900 mt-1">{s.price}</p>
                {s.sites && <p className="text-xs text-neutral-400">{s.sites}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interview Options */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-xl font-light text-center text-neutral-900 mb-6">Interview Formats</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-neutral-200 rounded-lg p-4">
              <span className="text-2xl mb-2 block">📧</span>
              <h3 className="font-medium text-neutral-900">Email Interview</h3>
              <p className="text-xs text-neutral-500 mt-1">We research and share questions. You answer over email/Google docs. Published with your photos.</p>
              <p className="text-xs font-medium text-neutral-900 mt-2">₹45,000 • 75K+ audience</p>
            </div>
            <div className="bg-white border border-neutral-200 rounded-lg p-4">
              <span className="text-2xl mb-2 block">🎥</span>
              <h3 className="font-medium text-neutral-900">Vodcast Interview</h3>
              <p className="text-xs text-neutral-500 mt-1">30-45 min video interview over Zoom. Questions shared beforehand. Social media promotion included.</p>
              <p className="text-xs font-medium text-neutral-900 mt-2">₹1.25L • Founder-led</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-xl font-light text-center text-neutral-900 mb-6">How It Works</h2>
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

      {/* Why PR */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-xl font-light text-center text-neutral-900 mb-6">Why PR Matters</h2>
          <div className="grid md:grid-cols-4 gap-3">
            <div className="bg-white border border-neutral-200 rounded-lg p-3 text-center">
              <span className="text-2xl mb-1 block">⭐</span>
              <p className="text-xs text-neutral-700">Builds credibility & trust</p>
            </div>
            <div className="bg-white border border-neutral-200 rounded-lg p-3 text-center">
              <span className="text-2xl mb-1 block">🔍</span>
              <p className="text-xs text-neutral-700">Google News visibility</p>
            </div>
            <div className="bg-white border border-neutral-200 rounded-lg p-3 text-center">
              <span className="text-2xl mb-1 block">📈</span>
              <p className="text-xs text-neutral-700">Investor attention</p>
            </div>
            <div className="bg-white border border-neutral-200 rounded-lg p-3 text-center">
              <span className="text-2xl mb-1 block">🔄</span>
              <p className="text-xs text-neutral-700">Referral traffic boost</p>
            </div>
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
            <span className="text-neutral-700">📧 pr@avdevelopment.com</span>
            <span className="text-neutral-300">|</span>
            <span className="text-neutral-700">💬 WhatsApp: {contactNumber}</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-light text-white mb-2">Ready to get featured?</h2>
          <p className="text-neutral-300 text-sm mb-6">Press release in 48 hours • Google News included</p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-white text-neutral-900 text-sm rounded hover:bg-neutral-100">
            Get Media Coverage
          </Link>
          <p className="text-xs text-neutral-700 mt-4">Call or WhatsApp: {contactNumber}</p>
        </div>
      </section>

      <CityLinks />
    </main>
  );
}