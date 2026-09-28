// app/custom-ai-assistant/page.jsx
import Link from "next/link";
import CityLinks from "@/utlls/CityLinks";

export const metadata = {
  title: "Custom AI Assistant | GR Development - ChatGPT Clone, Customer Support Bot, AI Automation India",
  description: "Custom AI assistant development for Indian businesses. ChatGPT clone, customer support bot, WhatsApp AI integration, lead generation automation. Starting from ₹25,000.",
  keywords: "custom AI assistant, ChatGPT clone India, AI chatbot development, customer support bot, WhatsApp AI bot, AI automation India",
  openGraph: {
    title: "Custom AI Assistant - Build Your Own ChatGPT Clone",
    description: "Custom AI for your business. Starting at ₹25,000.",
  },
};

const packages = [
  {
    name: "Basic AI Chatbot",
    price: "₹25,000",
    duration: "One-time",
    features: [
      "Custom training on your data",
      "Website integration",
      "Basic Q&A capabilities",
      "Lead capture form",
      "Email notifications",
      "3 months hosting",
      "Basic analytics",
      "Email support"
    ],
    ideal: "Small business FAQ",
    commitment: "One-time payment"
  },
  {
    name: "Advanced AI Assistant",
    price: "₹75,000",
    duration: "One-time",
    features: [
      "Everything in Basic",
      "Multi-language support",
      "WhatsApp integration",
      "Voice input support",
      "Document upload (PDF, Excel)",
      "Appointment booking",
      "CRM integration",
      "12 months hosting",
      "Priority support"
    ],
    popular: true,
    ideal: "Customer support automation",
    commitment: "Complete setup"
  },
  {
    name: "Enterprise AI Suite",
    price: "₹2,50,000",
    duration: "One-time + Annual",
    features: [
      "Everything in Advanced",
      "Custom API development",
      "Multiple business tools integration",
      "Team training",
      "White-label solution",
      "Dedicated server",
      "Unlimited users",
      "24/7 priority support",
      "Annual maintenance"
    ],
    ideal: "Large businesses, Agencies",
    commitment: "Annual renewal"
  }
];

const services = [
  { icon: "🤖", name: "ChatGPT Clone", price: "₹25k+", desc: "Your own AI chatbot" },
  { icon: "💬", name: "WhatsApp AI Bot", price: "₹35k+", desc: "Chat on WhatsApp" },
  { icon: "📞", name: "Voice Assistant", price: "₹45k+", desc: "Call handling AI" },
  { icon: "📄", name: "Document AI", price: "₹25k+", desc: "PDF/Excel analysis" },
  { icon: "🛒", name: "E-commerce Assistant", price: "₹35k+", desc: "Product recommendations" },
  { icon: "🏥", name: "Healthcare AI", price: "₹45k+", desc: "Appointment booking" },
  { icon: "🎓", name: "Education Tutor", price: "₹35k+", desc: "Student assistance" },
  { icon: "🏢", name: "HR Assistant", price: "₹35k+", desc: "Employee support" },
  { icon: "📊", name: "Data Analysis AI", price: "₹50k+", desc: "Business insights" },
  { icon: "📧", name: "Email AI", price: "₹25k+", desc: "Auto responses" }
];

const benefits = [
  { metric: "24/7", label: "Available" },
  { metric: "₹25k", label: "Starting price" },
  { metric: "2-4", label: "weeks delivery" },
  { metric: "100%", label: "Customizable" }
];

const process = [
  { step: "01", title: "Consultation" },
  { step: "02", title: "Data Training" },
  { step: "03", title: "Development" },
  { step: "04", title: "Testing" },
  { step: "05", title: "Integration" },
  { step: "06", title: "Go Live" }
];

const useCases = [
  { icon: "🛍️", title: "E-commerce", desc: "Product recommendations, order status, returns" },
  { icon: "🏨", title: "Hospitality", desc: "Booking, inquiries, local info" },
  { icon: "🏦", title: "Banking/Finance", desc: "Account info, loan queries" },
  { icon: "🏥", title: "Healthcare", desc: "Appointments, prescription refills" },
  { icon: "🎓", title: "Education", desc: "Course info, admissions, fees" },
  { icon: "🏢", title: "Real Estate", desc: "Property listings, site visits" },
  { icon: "🚚", title: "Logistics", desc: "Tracking, delivery updates" },
  { icon: "📞", title: "Call Centers", desc: "First-level support" }
];

const techStack = [
  "OpenAI GPT-4", "Claude API", "Gemini Pro", "Llama 3", "LangChain",
  "Pinecone", "Redis", "WhatsApp API", "Twilio", "React", "Node.js", "Python"
];

const faqs = [
  { q: "What is a custom AI assistant?", a: "An AI chatbot trained specifically on your business data to answer customer queries, automate support, and generate leads." },
  { q: "How is it different from ChatGPT?", a: "ChatGPT has general knowledge. Your AI knows YOUR products, policies, and processes." },
  { q: "Do I need coding knowledge?", a: "No. We build everything. You just provide your data and we train it." },
  { q: "Can it work on WhatsApp?", a: "Yes! We can integrate with WhatsApp, website, Facebook, and Instagram." },
  { q: "What data can I train it on?", a: "PDFs, Excel files, website content, FAQs, product catalogs, videos, etc." },
  { q: "How much does hosting cost?", a: "Included in first year. Renewal from ₹12,000/year for basic." }
];

const contactNumber = "+918810688975";

export default function CustomAIAssistantPage() {
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
            <span className="text-neutral-800">custom-ai-assistant</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-['Inter'] text-5xl md:text-6xl font-light text-neutral-900 mb-6">
              Custom AI Assistant
              <span className="block font-medium italic text-neutral-500 text-3xl mt-2">Build Your Own ChatGPT Clone</span>
            </h1>
            <p className="text-lg text-neutral-500 mb-8">
              Train AI on your business data. Automate customer support, generate leads, and save hours. Website, WhatsApp, voice integration. Starting ₹25,000.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-full">Basic ₹25k</span>
              <span className="px-4 py-2 bg-neutral-800 text-white text-sm rounded-full">Advanced ₹75k</span>
              <span className="px-4 py-2 bg-neutral-700 text-white text-sm rounded-full">2-4 weeks</span>
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
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-4">AI Packages</h2>
          <p className="text-center text-neutral-500 text-sm mb-10 max-w-2xl mx-auto">Custom AI trained on YOUR data. Not a generic chatbot.</p>
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
                <Link href="/contact" className="block w-full py-2 bg-neutral-900 text-white text-sm text-center rounded hover:bg-neutral-800">Build Your AI</Link>
              </div>
            ))}
          </div>
          <p className="text-xs text-neutral-400 text-center mt-6">*Annual hosting renewal: ₹12,000/year for Basic, ₹24,000/year for Advanced</p>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-xl font-light text-center text-neutral-900 mb-6">Perfect For</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {useCases.map((use, i) => (
              <div key={i} className="bg-white border border-neutral-200 rounded-lg p-3">
                <span className="text-2xl block mb-1">{use.icon}</span>
                <h3 className="font-medium text-sm text-neutral-900">{use.title}</h3>
                <p className="text-xs text-neutral-500">{use.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-xl font-light text-center text-neutral-900 mb-6">AI Solutions</h2>
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

      {/* Tech Stack */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-xl font-light text-center text-neutral-900 mb-6">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech, i) => (
              <span key={i} className="px-3 py-1 bg-white border border-neutral-200 text-neutral-700 text-xs rounded-full">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Options */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-xl font-light text-center text-neutral-900 mb-6">Where It Works</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-3 text-center">
              <span className="text-2xl mb-1 block">🌐</span>
              <p className="text-xs font-medium text-neutral-900">Website</p>
              <p className="text-xs text-neutral-500">Chat widget</p>
            </div>
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-3 text-center">
              <span className="text-2xl mb-1 block">💬</span>
              <p className="text-xs font-medium text-neutral-900">WhatsApp</p>
              <p className="text-xs text-neutral-500">Business API</p>
            </div>
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-3 text-center">
              <span className="text-2xl mb-1 block">📘</span>
              <p className="text-xs font-medium text-neutral-900">Facebook</p>
              <p className="text-xs text-neutral-500">Messenger</p>
            </div>
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-3 text-center">
              <span className="text-2xl mb-1 block">📞</span>
              <p className="text-xs font-medium text-neutral-900">Voice</p>
              <p className="text-xs text-neutral-500">Call handling</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-xl font-light text-center text-neutral-900 mb-6">Development Process</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {process.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-10 h-10 mx-auto mb-1 bg-white border border-neutral-200 rounded-full flex items-center justify-center text-xs text-neutral-900">{step.step}</div>
                <p className="text-xs text-neutral-600">{step.title}</p>
              </div>
            ))}
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
            <span className="text-neutral-700">📧 ai@avdevelopment.com</span>
            <span className="text-neutral-300">|</span>
            <span className="text-neutral-700">💬 WhatsApp: {contactNumber}</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-light text-white mb-2">Ready to automate with AI?</h2>
          <p className="text-neutral-300 text-sm mb-6">Free consultation • Trained on YOUR data • 2-4 weeks delivery</p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-white text-neutral-900 text-sm rounded hover:bg-neutral-100">
            Build Your AI Assistant
          </Link>
          <p className="text-xs text-neutral-700 mt-4">Call or WhatsApp: {contactNumber}</p>
        </div>
      </section>

      <CityLinks />
    </main>
  );
}