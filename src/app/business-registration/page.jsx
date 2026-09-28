// app/business-registration/page.jsx
import Link from "next/link";
import CityLinks from "@/utlls/CityLinks";

export const metadata = {
  title: "Business Registration | GR Development - Company Registration, MSME, LLP, Pvt Ltd India",
  description: "Complete business registration services in India. Pvt Ltd, LLP, Partnership, MSME, GST, Trademark. Starting from ₹1,499.",
  keywords: "company registration India, Pvt Ltd registration, LLP registration, MSME registration, partnership firm, trademark registration India",
  openGraph: {
    title: "Business Registration - Start Your Company in India",
    description: "Register your business fast. Starting at ₹1,499.",
  },
};

const packages = [
  {
    name: "MSME/Udyam",
    price: "₹1,499",
    duration: "One-time",
    features: [
      "Udyam registration",
      "Certificate download",
      "Digital copy",
      "Bank loan help",
      "Government benefits",
      "2-3 days delivery"
    ],
    ideal: "Small business",
    commitment: "One-time payment"
  },
  {
    name: "Partnership",
    price: "₹3,999",
    duration: "One-time",
    features: [
      "Partnership deed",
      "PAN application",
      "GST registration",
      "Bank account help",
      "All partner docs",
      "7-10 days delivery"
    ],
    ideal: "Partnership firm",
    commitment: "Complete setup"
  },
  {
    name: "LLP Registration",
    price: "₹7,999",
    duration: "One-time",
    features: [
      "LLP incorporation",
      "DPIN for partners",
      "PAN & TAN",
      "GST registration",
      "Agreement drafting",
      "10-15 days delivery"
    ],
    popular: true,
    ideal: "Professional firms",
    commitment: "Complete setup"
  },
  {
    name: "Pvt Ltd",
    price: "₹14,999",
    duration: "One-time",
    features: [
      "DIN for directors",
      "DSC (Digital Signature)",
      "Name approval",
      "MOA & AOA drafting",
      "PAN & TAN",
      "GST registration",
      "15-20 days delivery"
    ],
    ideal: "Growing business",
    commitment: "Complete setup"
  }
];

const services = [
  { icon: "🏢", name: "Pvt Ltd", price: "₹14,999", time: "15-20 days", desc: "Private Limited" },
  { icon: "🤝", name: "LLP", price: "₹7,999", time: "10-15 days", desc: "Limited Liability" },
  { icon: "👥", name: "Partnership", price: "₹3,999", time: "7-10 days", desc: "Partnership deed" },
  { icon: "🆔", name: "MSME/Udyam", price: "₹1,499", time: "2-3 days", desc: "Small business" },
  { icon: "®️", name: "Trademark", price: "₹5,999", time: "3-4 months", desc: "Brand protection" },
  { icon: "📝", name: "GST", price: "₹999", time: "7-10 days", desc: "Registration" },
  { icon: "💳", name: "DSC", price: "₹899", time: "1 day", desc: "Digital signature" },
  { icon: "📄", name: "PAN Card", price: "₹299", time: "7-10 days", desc: "New PAN" },
  { icon: "📋", name: "TAN", price: "₹499", time: "7-10 days", desc: "Tax deduction" },
  { icon: "🏦", name: "Current Account", price: "Free", time: "2-3 days", desc: "Bank opening help" },
  { icon: "📑", name: "IEC Code", price: "₹1,999", time: "7-10 days", desc: "Import/Export" },
  { icon: "🔄", name: "Name Change", price: "₹2,999", time: "15-20 days", desc: "Company name" }
];

const benefits = [
  { metric: "300+", label: "Companies registered" },
  { metric: "100%", label: "Online process" },
  { metric: "₹1,499", label: "Starting price" },
  { metric: "24/7", label: "Support" }
];

const process = [
  { step: "01", title: "Documents" },
  { step: "02", title: "Application" },
  { step: "03", title: "Govt Processing" },
  { step: "04", title: "Get Certificate" }
];

const documents = [
  "PAN Card", "Aadhaar Card", "Photo", "Bank Statement", "Address Proof", "Rent Agreement",
  "Electricity Bill", "Property Papers", "Passport Size Photo", "Signature Proof"
];

const faqs = [
  { q: "Which registration do I need?", a: "MSME for small, Partnership for 2-20 people, LLP/Pvt Ltd for funding." },
  { q: "How long does it take?", a: "MSME: 2-3 days, Partnership: 7-10 days, LLP: 10-15 days, Pvt Ltd: 15-20 days." },
  { q: "What documents required?", a: "PAN, Aadhaar, photo, address proof, bank statement." },
  { q: "Is it completely online?", a: "Yes, 100% online. No office visit needed." },
  { q: "Can I do it myself?", a: "Yes, but we handle all paperwork and follow-ups for you." },
  { q: "What about GST?", a: "Included in all packages except MSME." }
];

const contactNumber = "+919718659236";

export default function BusinessRegistrationPage() {
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
            <span className="text-neutral-800">business-registration</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-['Inter'] text-5xl md:text-6xl font-light text-neutral-900 mb-6">
              Business Registration
              <span className="block font-medium italic text-neutral-500 text-3xl mt-2">Pvt Ltd • LLP • MSME • Partnership</span>
            </h1>
            <p className="text-lg text-neutral-500 mb-8">
              Start your business the right way. Company registration, MSME, GST, trademark. Complete online process. Starting ₹1,499.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-full">MSME ₹1,499</span>
              <span className="px-4 py-2 bg-neutral-800 text-white text-sm rounded-full">Pvt Ltd ₹14,999</span>
              <span className="px-4 py-2 bg-neutral-700 text-white text-sm rounded-full">100% Online</span>
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
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-10">Registration Packages</h2>
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
                <Link href="/contact" className="block w-full py-2 bg-neutral-900 text-white text-sm text-center rounded hover:bg-neutral-800">Start Registration</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-xl font-light text-center text-neutral-900 mb-6">All Registration Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {services.map((s, i) => (
              <div key={i} className="bg-white border border-neutral-200 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <span className="text-xl">{s.icon}</span>
                  <div>
                    <h3 className="font-medium text-sm text-neutral-900">{s.name}</h3>
                    <p className="text-xs text-neutral-400">{s.desc}</p>
                    <div className="flex justify-between mt-1">
                      <span className="text-xs font-medium text-neutral-900">{s.price}</span>
                      <span className="text-xs text-neutral-400">{s.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-xl font-light text-center text-neutral-900 mb-6">Documents Needed</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {documents.map((doc, i) => (
              <span key={i} className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs rounded-full">{doc}</span>
            ))}
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
            <span className="text-neutral-700">📧 register@avdevelopment.com</span>
            <span className="text-neutral-300">|</span>
            <span className="text-neutral-700">💬 WhatsApp: {contactNumber}</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-light text-white mb-2">Ready to start your business?</h2>
          <p className="text-neutral-300 text-sm mb-6">Get registered today. Free consultation.</p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-white text-neutral-900 text-sm rounded hover:bg-neutral-100">
            Register Now
          </Link>
          <p className="text-xs text-neutral-700 mt-4">Call or WhatsApp: {contactNumber}</p>
        </div>
      </section>

      <CityLinks />
    </main>
  );
}