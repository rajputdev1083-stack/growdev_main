// app/gst-services/page.jsx
import Link from "next/link";
import CityLinks from "@/utlls/CityLinks";

export const metadata = {
  title: "GST Services | Grow Development - GST Registration, Filing, Returns India",
  description: "Professional GST services for Indian businesses. GST registration, monthly/quarterly filing, returns, and compliance. Starting from ₹999.",
  keywords: "GST registration, GST filing, GST returns, GST compliance, tax filing India, GST consultant, business registration India",
  openGraph: {
    title: "GST Services - Registration & Filing for Indian Businesses",
    description: "Hassle-free GST services. Starting at ₹999.",
  },
};

const gstPackages = [
  {
    name: "GST Registration",
    price: "₹999",
    setup: "One-time",
    duration: "7-10 days",
    features: [
      "New GST registration",
      "Document preparation",
      "Application filing",
      "ARN generation",
      "GST certificate",
      "Login credentials",
      "Follow up with dept",
      "Email support"
    ],
    ideal: "New businesses",
    commitment: "One-time payment"
  },
  {
    name: "GST Filing",
    price: "₹499",
    setup: "Per month",
    duration: "monthly",
    features: [
      "GSTR-1 filing",
      "GSTR-3B filing",
      "Purchase entry",
      "Sales entry",
      "Tax calculation",
      "Payment reminder",
      "Due date alerts",
      "Email support"
    ],
    popular: true,
    ideal: "Small businesses",
    commitment: "Monthly/Quarterly"
  },
  {
    name: "Annual Combo",
    price: "₹4,999",
    setup: "Per year",
    duration: "12 months",
    features: [
      "GST Registration",
      "12 months filing",
      "Annual return GSTR-9",
      "Reconciliation",
      "ITC matching",
      "Notice handling",
      "Expert consultation",
      "Priority support"
    ],
    ideal: "Save 20%",
    commitment: "Yearly package"
  },
  {
    name: "Business Combo",
    price: "₹2,999",
    setup: "One-time",
    duration: "Complete",
    features: [
      "GST Registration",
      "MSME/Udyam Registration",
      "PAN card (New)",
      "TAN application",
      "Bank account opening help",
      "Digital signature",
      "All government fees",
      "Documentation"
    ],
    ideal: "Startups",
    commitment: "Complete setup"
  }
];

const services = [
  {
    icon: "📝",
    title: "New Registration",
    price: "₹999",
    time: "7-10 days",
    desc: "New GST number"
  },
  {
    icon: "📊",
    title: "Monthly Filing",
    price: "₹499/mo",
    time: "Monthly",
    desc: "GSTR-1, GSTR-3B"
  },
  {
    icon: "📈",
    title: "Quarterly Filing",
    price: "₹399/mo",
    time: "Quarterly",
    desc: "For small taxpayers"
  },
  {
    icon: "📋",
    title: "Annual Return",
    price: "₹1,499",
    time: "Yearly",
    desc: "GSTR-9 filing"
  },
  {
    icon: "🔍",
    title: "Reconciliation",
    price: "₹999",
    time: "2-3 days",
    desc: "GSTR-2A vs books"
  },
  {
    icon: "🛠️",
    title: "Amendment",
    price: "₹299",
    time: "2 days",
    desc: "Details correction"
  },
  {
    icon: "⚡",
    title: "Notice Response",
    price: "₹999",
    time: "Urgent",
    desc: "Dept query reply"
  },
  {
    icon: "📄",
    title: "Cancellation",
    price: "₹499",
    time: "5-7 days",
    desc: "Close GST"
  },
  {
    icon: "📱",
    title: "MSME Registration",
    price: "₹499",
    time: "2-3 days",
    desc: "Udyam certificate"
  },
  {
    icon: "💳",
    title: "Digital Signature",
    price: "₹899",
    time: "1 day",
    desc: "DSC for filing"
  },
  {
    icon: "📑",
    title: "E-way Bill",
    price: "₹199/mo",
    time: "Monthly",
    desc: "Transport generation"
  },
  {
    icon: "📞",
    title: "Consultation",
    price: "₹499",
    time: "30 mins",
    desc: "Expert advice"
  }
];

const benefits = [
  { metric: "500+", label: "Businesses registered" },
  { metric: "24hr", label: "Quick support" },
  { metric: "100%", label: "Online process" },
  { metric: "₹999", label: "Starting price" }
];

const process = [
  { step: "01", title: "Documents", desc: "Share documents" },
  { step: "02", title: "Application", desc: "We file online" },
  { step: "03", title: "ARN", desc: "Get reference no." },
  { step: "04", title: "Approval", desc: "Department review" },
  { step: "05", title: "Certificate", desc: "Download GST" },
  { step: "06", title: "Filing", desc: "Start monthly" }
];

const documents = [
  "PAN Card", "Aadhaar Card", "Photo", "Bank Statement", "Rent Agreement", "Electricity Bill", 
  "Business Proof", "Partnership Deed", "MOA/AOA", "Incorporation Certificate", "Digital Signature"
];

const faqs = [
  { q: "Who needs GST registration?", a: "Business with turnover > ₹20 lakh (₹10 lakh for NE states)." },
  { q: "What is the fee?", a: "Registration ₹999 only. Government fees extra if applicable." },
  { q: "How long does it take?", a: "7-10 working days after document submission." },
  { q: "Is it completely online?", a: "Yes, 100% online. No office visit needed." },
  { q: "What about late filing?", a: "Penalty ₹50-100 per day. We send reminders." },
  { q: "Can I file myself?", a: "Yes, but we make it easier and error-free." }
];

export default function GSTServicesPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center space-x-2 text-sm text-neutral-400 mb-6">
            <Link href="/" className="hover:text-neutral-600">home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-neutral-600">services</Link>
            <span>/</span>
            <span className="text-neutral-800">gst-services</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-['Inter'] text-5xl md:text-6xl font-light text-neutral-900 mb-6">
              GST Services
              <span className="block font-medium italic text-neutral-500 text-4xl mt-2">Registration • Filing • Returns</span>
            </h1>
            <p className="text-lg text-neutral-500 mb-8">
              Complete GST solutions for Indian businesses. Registration, monthly filing, annual returns. 
              Starting from ₹999. 100% online process.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-full">Registration ₹999</span>
              <span className="px-4 py-2 bg-neutral-800 text-white text-sm rounded-full">Filing ₹499/month</span>
              <span className="px-4 py-2 bg-neutral-700 text-white text-sm rounded-full">100% Online</span>
              <span className="px-4 py-2 bg-neutral-600 text-white text-sm rounded-full">500+ Clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Stats */}
      <section className="py-12 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((item, i) => (
              <div key={i} className="text-center">
                <div className="font-['Inter'] text-3xl text-neutral-900">{item.metric}</div>
                <div className="text-xs text-neutral-400 mt-2 tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-['Inter'] text-4xl font-light text-neutral-900">Popular Packages</h2>
            <p className="text-neutral-500 mt-2">Choose what works for you</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gstPackages.map((pkg, i) => (
              <div key={i} className={`bg-white border ${pkg.popular ? 'border-neutral-900' : 'border-neutral-200'} rounded-lg relative`}>
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-neutral-900 text-white text-xs px-3 py-1 rounded-tr-lg rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="font-['Inter'] text-xl font-medium text-neutral-900">{pkg.name}</h3>
                  <p className="text-xs text-neutral-400 mt-1 mb-4">{pkg.ideal}</p>
                  <div className="mb-2">
                    <span className="text-3xl font-light text-neutral-900">{pkg.price}</span>
                    <span className="text-sm text-neutral-400 ml-1">{pkg.setup}</span>
                  </div>
                  <p className="text-xs text-neutral-500 mb-4">⏱️ {pkg.duration}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="text-xs text-neutral-600 flex items-start">
                        <span className="text-neutral-400 mr-2">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/contact?service=gst-${pkg.name.toLowerCase().replace(' ', '-')}`} 
                        className="block w-full py-2 bg-neutral-900 text-white text-sm text-center rounded hover:bg-neutral-800">
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services - Quick Grid */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-2xl font-light text-center text-neutral-900 mb-8">
            All GST Services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {services.map((service, i) => (
              <div key={i} className="bg-white border border-neutral-200 rounded-lg p-4">
                <span className="text-xl mb-1 block">{service.icon}</span>
                <h3 className="font-medium text-neutral-900 text-sm">{service.title}</h3>
                <p className="text-xs text-neutral-400 mt-1">{service.desc}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs font-medium text-neutral-900">{service.price}</span>
                  <span className="text-xs text-neutral-400">{service.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-2xl font-light text-center text-neutral-900 mb-8">
            Documents Needed
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {documents.map((doc, i) => (
              <span key={i} className="px-4 py-2 bg-neutral-100 text-neutral-700 text-sm rounded-full">
                {doc}
              </span>
            ))}
          </div>
          <p className="text-xs text-neutral-400 text-center mt-4">*List varies by business type</p>
        </div>
      </section>

      {/* Process - Short */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-2xl font-light text-center text-neutral-900 mb-8">
            Simple Process
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {process.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-white border border-neutral-200 rounded-full flex items-center justify-center font-['Inter'] text-sm text-neutral-900">
                  {step.step}
                </div>
                <p className="text-xs text-neutral-600">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Short */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-['Inter'] text-2xl font-light text-center text-neutral-900 mb-8">
            Quick FAQs
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-neutral-50 border border-neutral-200 rounded-lg p-3">
                <h3 className="font-medium text-neutral-900 text-sm">{faq.q}</h3>
                <p className="text-xs text-neutral-500 mt-1">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Short */}
      <section className="py-16 bg-neutral-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-['Inter'] text-2xl font-light text-white mb-2">
            Need GST help?
          </h2>
          <p className="text-neutral-300 text-sm mb-6">Registration in 7 days • Filing in 24 hours</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="px-6 py-2 bg-white text-neutral-900 text-sm rounded hover:bg-neutral-100">
              Start Now
            </Link>
            <Link href="tel:+919718659236" className="px-6 py-2 border border-white text-white text-sm rounded hover:bg-white hover:text-neutral-900">
              Call Us
            </Link>
          </div>
          <p className="text-xs text-neutral-700 mt-4">📞 +91 97186 59236 • 📧 gst@growdevelopment.com</p>
        </div>
      </section>

      <CityLinks />
    </main>
  );
}