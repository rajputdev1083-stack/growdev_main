// app/custom-support/page.jsx
import Link from "next/link";
import CityLinks from "@/utlls/CityLinks";

export const metadata = {
  title: "Custom Support Services | GR Development - Business Support, Data Entry, Virtual Assistant India",
  description: "Professional custom support for Indian businesses. Data entry, virtual assistant, back office support, lead generation. Starting from ₹199/hour.",
  keywords: "custom support India, virtual assistant, data entry, back office support, lead generation, business support services",
  openGraph: {
    title: "Custom Support - Virtual Assistants for Indian Businesses",
    description: "Professional support staff. Starting at ₹199/hour.",
  },
};

const packages = [
  {
    name: "Hourly Support",
    price: "₹199",
    duration: "per hour",
    features: [
      "Data entry",
      "Internet research",
      "Document formatting",
      "Email support",
      "Basic calling",
      "Same day delivery"
    ],
    ideal: "Small tasks",
    commitment: "Pay per hour"
  },
  {
    name: "Part Time",
    price: "₹4,999",
    duration: "per month",
    features: [
      "20 hours/week",
      "Dedicated assistant",
      "All basic tasks",
      "Lead generation",
      "WhatsApp support",
      "Daily reporting"
    ],
    popular: true,
    ideal: "Growing business",
    commitment: "3 months min"
  },
  {
    name: "Full Time",
    price: "₹9,999",
    duration: "per month",
    features: [
      "40 hours/week",
      "Dedicated manager",
      "All tasks included",
      "Client calling",
      "Email management",
      "Calendar booking",
      "Priority support"
    ],
    ideal: "Busy entrepreneurs",
    commitment: "6 months min"
  }
];

const services = [
  { icon: "⌨️", name: "Data Entry", price: "₹199/hr", desc: "Excel, Word, PDF" },
  { icon: "🔍", name: "Internet Research", price: "₹199/hr", desc: "Find leads, info" },
  { icon: "📞", name: "Calling Support", price: "₹299/hr", desc: "Customer calls" },
  { icon: "📧", name: "Email Management", price: "₹199/hr", desc: "Inbox handling" },
  { icon: "📅", name: "Calendar Booking", price: "₹199/hr", desc: "Appointments" },
  { icon: "👥", name: "Lead Generation", price: "₹4,999/mo", desc: "Find customers" },
  { icon: "📄", name: "Document Prep", price: "₹199/hr", desc: "Formatting" },
  { icon: "📊", name: "Presentation Making", price: "₹299/hr", desc: "PPT, Canva" },
  { icon: "💬", name: "WhatsApp Support", price: "₹199/hr", desc: "Chat handling" },
  { icon: "📋", name: "Form Filling", price: "₹99/hr", desc: "Online forms" },
  { icon: "📱", name: "Social Media Help", price: "₹199/hr", desc: "Basic posting" },
  { icon: "📦", name: "Order Processing", price: "₹199/hr", desc: "E-commerce" }
];

const benefits = [
  { metric: "24/7", label: "Available" },
  { metric: "₹199", label: "Starting/hour" },
  { metric: "2hr", label: "Min booking" },
  { metric: "100+", label: "Happy clients" }
];

const process = [
  { step: "01", title: "Tell task" },
  { step: "02", title: "Get quote" },
  { step: "03", title: "We start" },
  { step: "04", title: "You relax" }
];

const faqs = [
  { q: "What tasks can you do?", a: "Data entry, research, calling, email, docs, lead gen, etc." },
  { q: "Minimum hours?", a: "2 hours minimum for hourly support." },
  { q: "How do I share work?", a: "WhatsApp, email, or Google Drive." },
  { q: "Is there a trial?", a: "Yes! 2 hours trial at ₹199 only." }
];

const contactNumber = "+919718659236";

export default function CustomSupportPage() {
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
            <span className="text-neutral-800">custom-support</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-['Inter'] text-5xl md:text-6xl font-light text-neutral-900 mb-6">
              Custom Support
              <span className="block font-medium italic text-neutral-500 text-3xl mt-2">Virtual Assistant • Data Entry • Calling</span>
            </h1>
            <p className="text-lg text-neutral-500 mb-8">
              Get professional support staff for your business. Hourly or monthly. Data entry, calling, research, and more. Starting ₹199/hour.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-full">₹199/hour</span>
              <span className="px-4 py-2 bg-neutral-800 text-white text-sm rounded-full">24/7 Available</span>
              <span className="px-4 py-2 bg-neutral-700 text-white text-sm rounded-full">2hr Trial</span>
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
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-10">Support Plans</h2>
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
                <Link href="/contact" className="block w-full py-2 bg-neutral-900 text-white text-sm text-center rounded hover:bg-neutral-800">Choose Plan</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-xl font-light text-center text-neutral-900 mb-6">What We Can Do</h2>
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

      {/* Process + FAQ */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-['Inter'] text-xl font-light text-neutral-900 mb-4">Simple Process</h2>
              <div className="grid grid-cols-4 gap-2">
                {process.map((step, i) => (
                  <div key={i} className="text-center">
                    <div className="w-10 h-10 mx-auto mb-1 bg-neutral-100 border border-neutral-200 rounded-full flex items-center justify-center text-xs text-neutral-900">{step.step}</div>
                    <p className="text-xs text-neutral-600">{step.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-['Inter'] text-xl font-light text-neutral-900 mb-4">Quick FAQs</h2>
              <div className="space-y-2">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-neutral-50 border border-neutral-200 rounded-lg p-3">
                    <h3 className="font-medium text-neutral-900 text-sm">{faq.q}</h3>
                    <p className="text-xs text-neutral-500 mt-1">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="py-4 bg-neutral-100 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <span className="text-neutral-700">📞 {contactNumber}</span>
            <span className="text-neutral-300">|</span>
            <span className="text-neutral-700">📧 support@avdevelopment.com</span>
            <span className="text-neutral-300">|</span>
            <span className="text-neutral-700">💬 WhatsApp: {contactNumber}</span>
          </div>
        </div>
      </section>

      {/* CTA - Only /contact */}
      <section className="py-16 bg-neutral-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-light text-white mb-2">Need extra hands?</h2>
          <p className="text-neutral-300 text-sm mb-6">2 hours trial at ₹199 only. No commitment.</p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-white text-neutral-900 text-sm rounded hover:bg-neutral-100">
            Hire Support Now
          </Link>
          <p className="text-xs text-neutral-700 mt-4">📞 Call or WhatsApp: {contactNumber}</p>
        </div>
      </section>

      <CityLinks />
    </main>
  );
}