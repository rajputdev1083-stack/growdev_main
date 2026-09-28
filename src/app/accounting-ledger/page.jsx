 // app/accounting-ledger/page.jsx
import Link from "next/link";
import CityLinks from "@/utlls/CityLinks";
import { SITE_URL, SITE_NAME, CONTACT_PHONE, CONTACT_EMAIL } from "@/lib/site";
import Script from "next/script";

export const metadata = {
  title: "Accounting & Ledger Services | GR Development - Bookkeeping, Tally, GST Reconciliation India",
  description: "Professional accounting services for Indian businesses. Bookkeeping, ledger maintenance, Tally management, GST reconciliation, tax planning, financial reporting. Starting from ₹999/month. PAN India service with local experts.",
  keywords: "accounting services India, bookkeeping services, ledger maintenance, Tally management, GST reconciliation, financial statements India, tax planning India, payroll processing India, balance sheet preparation, profit and loss account, chartered accountant India, accounting firms India, online accounting services, virtual accountant India, small business accounting, startup accounting services, ecommerce accounting, GST filing services, income tax return filing, TDS return filing, business accounting software, Tally ERP 9 experts, Tally Prime services, cloud accounting India, outsourced accounting, bookkeeper India, accounts payable, accounts receivable, monthly accounting services, annual accounts closure, audit support services, financial reporting India",
  openGraph: {
    title: "Accounting & Ledger - Professional Bookkeeping for Indian Businesses",
    description: "Expert accounting services across India. Ledger maintenance, Tally management, GST reconciliation, tax planning. Trusted by 200+ businesses. Starting ₹999/month.",
    url: `${SITE_URL}/accounting-ledger`,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/og-images/accounting-ledger.jpg`,
        width: 1200,
        height: 630,
        alt: "Accounting & Ledger Services - GR Development",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Accounting & Ledger Services | GR Development",
    description: "Professional bookkeeping, Tally management & GST reconciliation. Starting ₹999/month.",
    images: [`${SITE_URL}/twitter-images/accounting-ledger.jpg`],
  },
  alternates: {
    canonical: `${SITE_URL}/accounting-ledger`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// City-specific keywords for internal linking
const majorCities = [
  { name: "Mumbai", slug: "mumbai", state: "Maharashtra" },
  { name: "Delhi", slug: "delhi", state: "Delhi" },
  { name: "Bangalore", slug: "bangalore", state: "Karnataka" },
  { name: "Hyderabad", slug: "hyderabad", state: "Telangana" },
  { name: "Ahmedabad", slug: "ahmedabad", state: "Gujarat" },
  { name: "Chennai", slug: "chennai", state: "Tamil Nadu" },
  { name: "Kolkata", slug: "kolkata", state: "West Bengal" },
  { name: "Pune", slug: "pune", state: "Maharashtra" },
  { name: "Jaipur", slug: "jaipur", state: "Rajasthan" },
  { name: "Lucknow", slug: "lucknow", state: "Uttar Pradesh" },
  { name: "Nagpur", slug: "nagpur", state: "Maharashtra" },
  { name: "Indore", slug: "indore", state: "Madhya Pradesh" },
  { name: "Bhopal", slug: "bhopal", state: "Madhya Pradesh" },
  { name: "Visakhapatnam", slug: "visakhapatnam", state: "Andhra Pradesh" },
  { name: "Patna", slug: "patna", state: "Bihar" },
  { name: "Vadodara", slug: "vadodara", state: "Gujarat" },
  { name: "Ludhiana", slug: "ludhiana", state: "Punjab" },
  { name: "Agra", slug: "agra", state: "Uttar Pradesh" },
  { name: "Nashik", slug: "nashik", state: "Maharashtra" },
  { name: "Faridabad", slug: "faridabad", state: "Haryana" },
  { name: "Meerut", slug: "meerut", state: "Uttar Pradesh" },
  { name: "Rajkot", slug: "rajkot", state: "Gujarat" },
  { name: "Varanasi", slug: "varanasi", state: "Uttar Pradesh" },
  { name: "Srinagar", slug: "srinagar", state: "Jammu and Kashmir" },
  { name: "Aurangabad", slug: "aurangabad", state: "Maharashtra" },
  { name: "Dhanbad", slug: "dhanbad", state: "Jharkhand" },
  { name: "Amritsar", slug: "amritsar", state: "Punjab" },
  { name: "Allahabad", slug: "allahabad", state: "Uttar Pradesh" },
  { name: "Ranchi", slug: "ranchi", state: "Jharkhand" },
  { name: "Gwalior", slug: "gwalior", state: "Madhya Pradesh" },
  { name: "Coimbatore", slug: "coimbatore", state: "Tamil Nadu" },
  { name: "Jodhpur", slug: "jodhpur", state: "Rajasthan" },
  { name: "Chandigarh", slug: "chandigarh", state: "Chandigarh" },
  { name: "Guwahati", slug: "guwahati", state: "Assam" },
  { name: "Solapur", slug: "solapur", state: "Maharashtra" },
  { name: "Hubli", slug: "hubli", state: "Karnataka" },
  { name: "Mysore", slug: "mysore", state: "Karnataka" },
  { name: "Tiruchirappalli", slug: "tiruchirappalli", state: "Tamil Nadu" },
  { name: "Bareilly", slug: "bareilly", state: "Uttar Pradesh" },
  { name: "Aligarh", slug: "aligarh", state: "Uttar Pradesh" },
  { name: "Bhubaneswar", slug: "bhubaneswar", state: "Odisha" },
  { name: "Cuttack", slug: "cuttack", state: "Odisha" },
  { name: "Warangal", slug: "warangal", state: "Telangana" },
  { name: "Guntur", slug: "guntur", state: "Andhra Pradesh" },
  { name: "Vijayawada", slug: "vijayawada", state: "Andhra Pradesh" },
  { name: "Udaipur", slug: "udaipur", state: "Rajasthan" },
  { name: "Kota", slug: "kota", state: "Rajasthan" },
  { name: "Thiruvananthapuram", slug: "thiruvananthapuram", state: "Kerala" },
  { name: "Kochi", slug: "kochi", state: "Kerala" },
  { name: "Kozhikode", slug: "kozhikode", state: "Kerala" }
];

const packages = [
  {
    name: "Basic Ledger",
    price: "₹999",
    duration: "per month",
    features: [
      "Daily entries",
      "Ledger maintenance",
      "Bank reconciliation",
      "GST purchase/sales",
      "Monthly reports",
      "Email support"
    ],
    ideal: "Small shops, Freelancers",
    commitment: "Month-to-month"
  },
  {
    name: "Complete Accounting",
    price: "₹2,499",
    duration: "per month",
    features: [
      "Everything in Basic",
      "Tally management",
      "Invoice creation",
      "Expense tracking",
      "GST filing ready",
      "WhatsApp support",
      "Quarterly review"
    ],
    popular: true,
    ideal: "Growing business, Startups",
    commitment: "3 months min"
  },
  {
    name: "Business Combo",
    price: "₹4,999",
    duration: "per month",
    features: [
      "Everything in Complete",
      "Payroll processing",
      "Tax planning",
      "Financial statements",
      "Balance sheet",
      "Profit & Loss",
      "Dedicated accountant"
    ],
    ideal: "Established firms, Enterprises",
    commitment: "6 months min"
  }
];

const services = [
  { icon: "📒", name: "Ledger Maintenance", price: "₹999/mo", desc: "Daily entries, all transactions" },
  { icon: "🏦", name: "Bank Reconciliation", price: "₹499/mo", desc: "Match statements, find errors" },
  { icon: "📊", name: "Tally Management", price: "₹1,499/mo", desc: "Tally Prime & ERP 9 expert" },
  { icon: "💰", name: "Expense Tracking", price: "₹399/mo", desc: "All business expenses" },
  { icon: "📋", name: "Invoice Creation", price: "₹299/mo", desc: "Professional GST invoices" },
  { icon: "📈", name: "Financial Reports", price: "₹999/mo", desc: "P&L, Balance sheet, Cash flow" },
  { icon: "👥", name: "Payroll Processing", price: "₹999/mo", desc: "Salary, PF, ESI, TDS" },
  { icon: "🔄", name: "GST Reconciliation", price: "₹499/mo", desc: "GSTR-2A vs books matching" },
  { icon: "📱", name: "WhatsApp Support", price: "Free", desc: "Quick queries, instant help" },
  { icon: "📅", name: "Yearly Closure", price: "₹2,499", desc: "Annual accounts, audit ready" },
  { icon: "💰", name: "Tax Planning", price: "₹999/mo", desc: "Income tax saving strategies" },
  { icon: "📄", name: "TDS Return Filing", price: "₹399/qtr", desc: "24Q, 26Q, 27Q filing" }
];

const benefits = [
  { metric: "200+", label: "Businesses trust us" },
  { metric: "24hr", label: "Ledger updates" },
  { metric: "Tally", label: "Expert certified" },
  { metric: "₹999", label: "Starting price" },
  { metric: "15+", label: "Years experience" },
  { metric: "100%", label: "Data privacy" }
];

const process = [
  { step: "01", title: "Share data", desc: "Bank statements, invoices, bills" },
  { step: "02", title: "We update", desc: "Daily entries in Tally/Excel" },
  { step: "03", title: "You review", desc: "Check reports anytime" },
  { step: "04", title: "Reports", desc: "Monthly P&L, Balance sheet" }
];

const industries = [
  "Retail", "E-commerce", "Manufacturing", "Healthcare", "Education", 
  "Real Estate", "Construction", "Hospitality", "Transportation", "IT Services",
  "Professional Services", "Non-Profit", "Agriculture", "Pharmaceutical", "FMCG"
];

const faqs = [
  { 
    q: "What documents do I need to share for accounting?", 
    a: "You need to share bank statements, purchase invoices, sales invoices, expense bills, previous year's tax returns, and any loan documents. We'll guide you through the complete list." 
  },
  { 
    q: "Do you use Tally or other accounting software?", 
    a: "Yes, we are Tally certified experts working with Tally Prime, Tally ERP 9, QuickBooks, Zoho Books, and Excel. We use the software that best fits your business needs." 
  },
  { 
    q: "Can I access my financial reports anytime?", 
    a: "Absolutely! You get monthly reports via email and can request updates anytime via WhatsApp. We also provide login access to accounting software for real-time viewing." 
  },
  { 
    q: "Is GST filing included in your packages?", 
    a: "Basic package includes GST data preparation. Complete and Business packages include GST filing ready data. Actual GST filing can be added at ₹499/month extra." 
  },
  { 
    q: "How is your service different from a CA?", 
    a: "We handle daily bookkeeping, ledger maintenance, and monthly reports. Your CA can focus on tax planning, audit, and strategic advice. We work alongside your CA for best results." 
  },
  { 
    q: "Do you serve businesses outside major cities?", 
    a: "Yes! We serve clients across all Indian cities including Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad, Jaipur, Lucknow, and all tier-2/3 cities. Our service is 100% online." 
  }
];

export default function AccountingLedgerPage() {
  return (
    <>
      {/* Structured Data */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "name": "Accounting & Ledger Services",
                "description": "Professional accounting services including bookkeeping, Tally management, GST reconciliation, and financial reporting.",
                "provider": {
                  "@type": "Organization",
                  "name": SITE_NAME,
                  "url": SITE_URL,
                  "telephone": CONTACT_PHONE
                },
                "areaServed": {
                  "@type": "Country",
                  "name": "India"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Accounting Packages",
                  "itemListElement": packages.map((pkg, index) => ({
                    "@type": "Offer",
                    "name": pkg.name,
                    "description": `${pkg.name} - ${pkg.ideal}. Starting at ${pkg.price}`,
                    "price": pkg.price.replace('₹', ''),
                    "priceCurrency": "INR"
                  }))
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                  "@type": "Question",
                  "name": faq.q,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.a
                  }
                }))
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
                  { "@type": "ListItem", "position": 2, "name": "Services", "item": `${SITE_URL}/services` },
                  { "@type": "ListItem", "position": 3, "name": "Accounting & Ledger", "item": `${SITE_URL}/accounting-ledger` }
                ]
              }
            ]
          })
        }}
      />

      <main className="bg-white">
        {/* Hero */}
        <section className="pt-24 pb-16 bg-neutral-50 border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-6">
            <nav className="flex items-center space-x-2 text-sm text-neutral-400 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-neutral-600">home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-neutral-600">services</Link>
              <span>/</span>
              <span className="text-neutral-800">accounting-ledger</span>
            </nav>

            <div className="max-w-3xl">
              <h1 className="font-['Inter'] text-5xl md:text-6xl font-light text-neutral-900 mb-6">
                Accounting & Ledger Services India
                <span className="block font-medium italic text-neutral-500 text-3xl mt-2">Bookkeeping • Tally • GST Reconciliation • Tax Planning</span>
              </h1>
              <p className="text-lg text-neutral-500 mb-8">
                Professional accounting services for Indian businesses across all cities. Daily ledger updates, 
                Tally management, financial reports, and tax planning. Trusted by 200+ businesses nationwide. 
                Starting ₹999/month. 100% online, 24/7 support.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-full">Ledger ₹999/mo</span>
                <span className="px-4 py-2 bg-neutral-800 text-white text-sm rounded-full">Tally Certified</span>
                <span className="px-4 py-2 bg-neutral-700 text-white text-sm rounded-full">24hr Updates</span>
                <span className="px-4 py-2 bg-neutral-600 text-white text-sm rounded-full">PAN India</span>
                <span className="px-4 py-2 bg-neutral-500 text-white text-sm rounded-full">{CONTACT_PHONE}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-white border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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
            <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-4">Accounting Packages for Indian Businesses</h2>
            <p className="text-center text-neutral-500 text-sm mb-10 max-w-2xl mx-auto">
              Choose the right plan for your business. All packages include dedicated accountant and monthly reports.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg, i) => (
                <div key={i} className={`bg-white border ${pkg.popular ? 'border-neutral-900' : 'border-neutral-200'} rounded-lg relative p-6 hover:shadow-lg transition-shadow`}>
                  {pkg.popular && <div className="absolute top-0 right-0 bg-neutral-900 text-white text-xs px-3 py-1 rounded-tr-lg rounded-bl-lg">Most Popular</div>}
                  <h3 className="text-xl font-medium text-neutral-900">{pkg.name}</h3>
                  <p className="text-xs text-neutral-400 mt-1 mb-3">{pkg.ideal}</p>
                  <div className="mb-3">
                    <span className="text-3xl font-light">{pkg.price}</span>
                    <span className="text-sm text-neutral-400 ml-1">{pkg.duration}</span>
                  </div>
                  <p className="text-xs text-neutral-400 mb-4">⏱️ {pkg.commitment}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="text-xs text-neutral-600 flex">
                        <span className="text-neutral-400 mr-2">✓</span>{f}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact" 
                    className="block w-full py-2 bg-neutral-900 text-white text-sm text-center rounded hover:bg-neutral-800 transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Services */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-4">Complete Accounting Services</h2>
            <p className="text-center text-neutral-500 text-sm mb-10 max-w-2xl mx-auto">
              From daily bookkeeping to annual closing - we handle everything
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {services.map((s, i) => (
                <div key={i} className="bg-white border border-neutral-200 rounded-lg p-4 hover:border-neutral-900 transition-colors">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{s.icon}</span>
                    <div>
                      <h3 className="font-medium text-sm text-neutral-900">{s.name}</h3>
                      <p className="text-xs text-neutral-400 mt-1">{s.desc}</p>
                      <p className="text-xs font-medium text-neutral-900 mt-2">{s.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* City Links Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-4">Accounting Services Across India</h2>
            <p className="text-center text-neutral-500 text-sm mb-10 max-w-2xl mx-auto">
              We serve businesses in all major cities. Click on your city for local accounting services.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {majorCities.slice(0, 30).map((city) => (
                <Link
                  key={city.slug}
                  href={`/${city.slug}/accounting-ledger`}
                  className="text-center p-3 bg-neutral-50 border border-neutral-200 rounded-lg hover:border-neutral-900 hover:bg-white transition-colors"
                >
                  <span className="text-sm font-medium text-neutral-900">{city.name}</span>
                  <span className="text-xs text-neutral-400 block mt-1">Accounting Services</span>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <details className="inline-block">
                <summary className="text-sm text-neutral-600 cursor-pointer hover:text-neutral-900">View All Cities</summary>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mt-4">
                  {majorCities.slice(30).map((city) => (
                    <Link
                      key={city.slug}
                      href={`/${city.slug}/accounting-ledger`}
                      className="text-center p-2 bg-neutral-50 border border-neutral-200 rounded-lg hover:border-neutral-900 transition-colors"
                    >
                      <span className="text-xs font-medium text-neutral-900">{city.name}</span>
                    </Link>
                  ))}
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-4">Industries We Serve</h2>
            <p className="text-center text-neutral-500 text-sm mb-10 max-w-2xl mx-auto">
              Specialized accounting solutions for every industry
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((industry, i) => (
                <span key={i} className="px-4 py-2 bg-white border border-neutral-200 rounded-full text-sm text-neutral-700">
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-4">How Our Accounting Process Works</h2>
            <p className="text-center text-neutral-500 text-sm mb-10 max-w-2xl mx-auto">
              Simple 4-step process to get your books in order
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {process.map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-neutral-900 text-white rounded-full flex items-center justify-center font-['Inter'] text-lg">
                    {step.step}
                  </div>
                  <h3 className="font-medium text-neutral-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-neutral-500">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-8">Why 200+ Businesses Trust Us</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-neutral-200 rounded-lg p-6">
                <span className="text-3xl mb-3 block">✅</span>
                <h3 className="font-medium text-neutral-900 mb-2">Tally Certified Experts</h3>
                <p className="text-sm text-neutral-500">Our team is certified in Tally Prime & ERP 9 with 15+ years combined experience.</p>
              </div>
              <div className="bg-white border border-neutral-200 rounded-lg p-6">
                <span className="text-3xl mb-3 block">✅</span>
                <h3 className="font-medium text-neutral-900 mb-2">100% Data Privacy</h3>
                <p className="text-sm text-neutral-500">Your financial data is secure with encrypted storage and strict confidentiality.</p>
              </div>
              <div className="bg-white border border-neutral-200 rounded-lg p-6">
                <span className="text-3xl mb-3 block">✅</span>
                <h3 className="font-medium text-neutral-900 mb-2">PAN India Service</h3>
                <p className="text-sm text-neutral-500">We serve clients across all Indian cities with same quality standards.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-8">
              Frequently Asked Questions About Accounting Services
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
                  <h3 className="font-medium text-neutral-900 mb-2">{faq.q}</h3>
                  <p className="text-sm text-neutral-500">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-neutral-900">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-light text-white mb-3">Ready to Get Your Books in Order?</h2>
            <p className="text-neutral-300 text-lg mb-6">Join 200+ businesses across India. Free consultation available.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-white text-neutral-900 text-base rounded hover:bg-neutral-100 transition-colors font-medium"
              >
                Get Free Quote
              </Link>
              <a 
                href={`tel:${CONTACT_PHONE}`}
                className="px-8 py-3 border border-white text-white text-base rounded hover:bg-white hover:text-neutral-900 transition-colors font-medium"
              >
                Call {CONTACT_PHONE}
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-neutral-500">
              <span>📞 {CONTACT_PHONE}</span>
              <span>✉️ {CONTACT_EMAIL}</span>
              <span>💬 WhatsApp: {CONTACT_PHONE}</span>
            </div>
            <p className="text-xs text-neutral-700 mt-6">*PAN India service • 100% online • 24/7 support</p>
          </div>
        </section>

        <CityLinks />
      </main>
    </>
  );
}