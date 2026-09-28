// app/tax-filing/page.jsx
import Link from "next/link";
import CityLinks from "@/utlls/CityLinks";

export const metadata = {
  title: "Tax Filing Services | AV Development - Income Tax, GST, TDS Returns India",
  description: "Professional tax filing for Indian businesses and individuals. Income Tax Returns, GST Returns, TDS Filing. Starting from ₹499.",
  keywords: "tax filing India, income tax return, ITR filing, GST return, TDS filing, tax consultant India",
  openGraph: {
    title: "Tax Filing - Income Tax, GST, TDS Returns",
    description: "Hassle-free tax filing. Starting at ₹499.",
  },
};

const packages = [
  {
    name: "ITR Individual",
    price: "₹499",
    duration: "One-time",
    features: [
      "ITR-1 (Salaried)",
      "Form 16 upload",
      "Basic deductions",
      "80C, 80D claims",
      "Tax calculation",
      "Acknowledgment",
      "24hr delivery"
    ],
    ideal: "Salaried persons",
    commitment: "Per return"
  },
  {
    name: "ITR Business",
    price: "₹1,499",
    duration: "One-time",
    features: [
      "ITR-3, ITR-4",
      "Business income",
      "Profit & Loss",
      "Balance sheet",
      "Audit ready",
      "All schedules",
      "2 days delivery"
    ],
    ideal: "Small business",
    commitment: "Per return"
  },
  {
    name: "GST Filing",
    price: "₹499",
    duration: "per month",
    features: [
      "GSTR-1",
      "GSTR-3B",
      "Purchase entry",
      "Sales entry",
      "Tax payment",
      "Due date alerts",
      "Monthly filing"
    ],
    popular: true,
    ideal: "GST registered",
    commitment: "Monthly"
  },
  {
    name: "TDS Filing",
    price: "₹399",
    duration: "per quarter",
    features: [
      "TDS return",
      "Form 16/16A",
      "Challan matching",
      "Quarterly filing",
      "Corrections",
      "Due date alerts",
      "Quarterly"
    ],
    ideal: "Employers",
    commitment: "Quarterly"
  }
];

const services = [
  { icon: "📄", name: "ITR-1", price: "₹499", desc: "Salaried" },
  { icon: "📑", name: "ITR-2", price: "₹799", desc: "Capital gains" },
  { icon: "📊", name: "ITR-3", price: "₹1,499", desc: "Business" },
  { icon: "📈", name: "ITR-4", price: "₹1,499", desc: "Presumptive" },
  { icon: "🛒", name: "GSTR-1", price: "₹199", desc: "Sales" },
  { icon: "💰", name: "GSTR-3B", price: "₹299", desc: "Monthly return" },
  { icon: "📅", name: "GSTR-9", price: "₹999", desc: "Annual" },
  { icon: "👥", name: "TDS 24Q", price: "₹399", desc: "Salary" },
  { icon: "🏢", name: "TDS 26Q", price: "₹399", desc: "Non-salary" },
  { icon: "📋", name: "Form 16", price: "₹199", desc: "Certificate" },
  { icon: "🔍", name: "Tax Planning", price: "₹999", desc: "Consultation" },
  { icon: "⚡", name: "Late Filing", price: "₹999", desc: "With penalty" }
];

const benefits = [
  { metric: "1000+", label: "Returns filed" },
  { metric: "₹499", label: "Starting price" },
  { metric: "24hr", label: "Fast delivery" },
  { metric: "100%", label: "Online process" }
];

const process = [
  { step: "01", title: "Share docs" },
  { step: "02", title: "We prepare" },
  { step: "03", title: "You review" },
  { step: "04", title: "We file" }
];

const documents = [
  "Form 16", "Bank Statement", "Aadhaar", "PAN", "Salary Slips", "Rent Receipts",
  "Investment Proof", "Home Loan Cert", "Capital Gain", "Business P&L"
];

const dueDates = [
  { type: "ITR (Individual)", due: "31 July" },
  { type: "ITR (Business)", due: "31 Oct" },
  { type: "GST Monthly", due: "20th of next month" },
  { type: "GST Quarterly", due: "20th/22nd/24th" },
  { type: "TDS Quarterly", due: "31st of month after quarter" }
];

const faqs = [
  { q: "Who needs to file ITR?", a: "Income above ₹2.5L (₹3L for senior citizens, ₹5L for very senior)." },
  { q: "What if I miss the deadline?", a: "Late fee up to ₹5,000. We can still file with penalty." },
  { q: "Documents for ITR?", a: "Form 16, bank statements, investment proofs, Aadhaar, PAN." },
  { q: "GST filing due date?", a: "Monthly: 20th, Quarterly: 20th/22nd/24th depending on state." },
  { q: "Can I file old returns?", a: "Yes, belated returns with interest/penalty." },
  { q: "Is my data safe?", a: "100% secure. We never share your information." }
];

const contactNumber = "+919718659236";

export default function TaxFilingPage() {
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
            <span className="text-neutral-800">tax-filing</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-['Inter'] text-5xl md:text-6xl font-light text-neutral-900 mb-6">
              Tax Filing
              <span className="block font-medium italic text-neutral-500 text-3xl mt-2">ITR • GST • TDS</span>
            </h1>
            <p className="text-lg text-neutral-500 mb-8">
              Professional tax filing for individuals and businesses. Income Tax, GST, TDS returns. Fast, accurate, 100% online. Starting ₹499.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-full">ITR ₹499</span>
              <span className="px-4 py-2 bg-neutral-800 text-white text-sm rounded-full">GST ₹499/mo</span>
              <span className="px-4 py-2 bg-neutral-700 text-white text-sm rounded-full">TDS ₹399/qtr</span>
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
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-10">Filing Packages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <Link href="/contact" className="block w-full py-2 bg-neutral-900 text-white text-sm text-center rounded hover:bg-neutral-800">File Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-xl font-light text-center text-neutral-900 mb-6">All Tax Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {services.map((s, i) => (
              <div key={i} className="bg-white border border-neutral-200 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <span className="text-xl">{s.icon}</span>
                  <div>
                    <h3 className="font-medium text-sm text-neutral-900">{s.name}</h3>
                    <p className="text-xs text-neutral-400">{s.desc}</p>
                    <p className="text-xs font-medium text-neutral-900 mt-1">{s.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents + Due Dates */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-['Inter'] text-xl font-light text-neutral-900 mb-4">Documents Needed</h2>
              <div className="flex flex-wrap gap-2">
                {documents.map((doc, i) => (
                  <span key={i} className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs rounded-full">{doc}</span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-['Inter'] text-xl font-light text-neutral-900 mb-4">Due Dates</h2>
              <div className="space-y-2">
                {dueDates.map((d, i) => (
                  <div key={i} className="flex justify-between bg-neutral-50 border border-neutral-200 rounded-lg p-2">
                    <span className="text-xs text-neutral-700">{d.type}</span>
                    <span className="text-xs font-medium text-neutral-900">{d.due}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process + FAQ */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-['Inter'] text-xl font-light text-neutral-900 mb-4">Simple Process</h2>
              <div className="grid grid-cols-4 gap-2">
                {process.map((step, i) => (
                  <div key={i} className="text-center">
                    <div className="w-10 h-10 mx-auto mb-1 bg-white border border-neutral-200 rounded-full flex items-center justify-center text-xs text-neutral-900">{step.step}</div>
                    <p className="text-xs text-neutral-600">{step.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-['Inter'] text-xl font-light text-neutral-900 mb-4">Quick FAQs</h2>
              <div className="space-y-2">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-white border border-neutral-200 rounded-lg p-3">
                    <h3 className="font-medium text-neutral-900 text-sm">{faq.q}</h3>
                    <p className="text-xs text-neutral-500 mt-1">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Bar */}
      <section className="py-3 bg-neutral-100 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <span className="text-neutral-700">📞 {contactNumber}</span>
            <span className="text-neutral-300">|</span>
            <span className="text-neutral-700">📧 tax@avdevelopment.com</span>
            <span className="text-neutral-300">|</span>
            <span className="text-neutral-700">💬 WhatsApp: {contactNumber}</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-light text-white mb-2">Don't miss the deadline</h2>
          <p className="text-neutral-300 text-sm mb-6">File your taxes today. Late fees up to ₹5,000.</p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-white text-neutral-900 text-sm rounded hover:bg-neutral-100">
            File Taxes Now
          </Link>
          <p className="text-xs text-neutral-700 mt-4">Call or WhatsApp: {contactNumber}</p>
        </div>
      </section>

      <CityLinks />
    </main>
  );
}