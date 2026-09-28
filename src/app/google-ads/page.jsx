// app/google-ads/page.jsx
import Link from "next/link";
import CityLinks from "@/utlls/CityLinks";

export const metadata = {
  title: "Google Ads Management | AV Development - PPC Campaigns That Convert",
  description: "Professional Google Ads management. Search, Display, Shopping, and Video campaigns. Maximize ROI with data-driven PPC strategies. Starting from ₹15,000/month.",
  keywords: "Google Ads, PPC management, Google AdWords, search ads, display advertising, shopping ads, YouTube ads, pay per click India",
  openGraph: {
    title: "Google Ads - Drive Qualified Traffic",
    description: "ROI-focused Google Ads campaigns that bring paying customers.",
  },
};

const packages = [
  {
    name: "Starter",
    price: "₹15,000",
    setup: "₹5,000 one-time",
    duration: "per month",
    adSpend: "Up to ₹50,000",
    features: [
      "Campaign strategy & setup",
      "Keyword research",
      "Ad copy creation",
      "3 search campaigns",
      "Landing page review",
      "Conversion tracking",
      "Monthly reporting",
      "WhatsApp support"
    ],
    ideal: "Small businesses, Startups",
    commitment: "3 months minimum"
  },
  {
    name: "Growth",
    price: "₹25,000",
    setup: "Free",
    duration: "per month",
    adSpend: "₹50,000 - ₹2,00,000",
    features: [
      "Everything in Starter",
      "Up to 10 campaigns",
      "Search + Display + Shopping",
      "A/B testing",
      "Audience targeting",
      "Remarketing setup",
      "Bi-weekly optimization",
      "Monthly strategy call",
      "Priority support"
    ],
    popular: true,
    ideal: "Growing businesses, E-commerce",
    commitment: "6 months minimum"
  },
  {
    name: "Performance",
    price: "₹40,000",
    setup: "Free",
    duration: "per month",
    adSpend: "₹2,00,000 - ₹5,00,000",
    features: [
      "Everything in Growth",
      "Unlimited campaigns",
      "YouTube video ads",
      "Smart bidding strategies",
      "Custom audience creation",
      "Competitor analysis",
      "Daily optimization",
      "Weekly strategy calls",
      "Dedicated account manager"
    ],
    ideal: "Established brands",
    commitment: "6 months minimum"
  },
  {
    name: "Enterprise",
    price: "Custom",
    setup: "Free",
    duration: "per month",
    adSpend: "₹5,00,000+",
    features: [
      "Custom strategy",
      "Multi-channel integration",
      "Advanced analytics",
      "Custom dashboard",
      "API integrations",
      "Team training",
      "Weekly reviews",
      "24/7 priority support"
    ],
    ideal: "Large enterprises",
    commitment: "12 months"
  }
];

const adTypes = [
  {
    icon: "🔍",
    title: "Search Ads",
    desc: "Text ads on Google search results",
    cpc: "₹10-50 per click"
  },
  {
    icon: "🛍️",
    title: "Shopping Ads",
    desc: "Product listings with images & price",
    cpc: "₹15-60 per click"
  },
  {
    icon: "📺",
    title: "Display Ads",
    desc: "Banner ads across millions of sites",
    cpc: "₹2-10 per click"
  },
  {
    icon: "▶️",
    title: "Video Ads",
    desc: "YouTube & video partner ads",
    cpc: "₹5-20 per view"
  },
  {
    icon: "📱",
    title: "App Ads",
    desc: "Drive app installs & engagement",
    cpc: "₹20-80 per install"
  },
  {
    icon: "📍",
    title: "Local Ads",
    desc: "Target customers near your business",
    cpc: "₹8-30 per click"
  }
];

const benefits = [
  { metric: "2-4x", label: "Average ROAS" },
  { metric: "50%", label: "Lower CPA" },
  { metric: "24/7", label: "Campaign monitoring" },
  { metric: "100+", label: "Campaigns managed" }
];

const process = [
  { step: "01", title: "Discovery", desc: "Understand goals & audience" },
  { step: "02", title: "Research", desc: "Keywords & competitor analysis" },
  { step: "03", title: "Setup", desc: "Campaign structure & ad copy" },
  { step: "04", title: "Launch", desc: "Go live with tracking" },
  { step: "05", title: "Optimize", desc: "Daily monitoring & tweaks" },
  { step: "06", title: "Report", desc: "Monthly performance review" }
];

export default function GoogleAdsPage() {
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
            <span className="text-neutral-800">google-ads</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-['Inter'] text-5xl md:text-6xl font-light text-neutral-900 mb-6">
              Google Ads Management
              <span className="block font-medium italic text-neutral-500 text-4xl mt-2">Pay only for results</span>
            </h1>
            <p className="text-lg text-neutral-500 mb-8">
              Drive qualified traffic and sales with professionally managed Google Ads campaigns. 
              From search to shopping, we maximize your ROI.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-full">Management ₹15,000/mo</span>
              <span className="px-4 py-2 bg-neutral-800 text-white text-sm rounded-full">2-4x average ROAS</span>
              <span className="px-4 py-2 bg-neutral-700 text-white text-sm rounded-full">Google Partner</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
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

      {/* Ad Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-12">
            Ad Types We Manage
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adTypes.map((ad, i) => (
              <div key={i} className="border border-neutral-200 rounded-lg p-6">
                <span className="text-3xl mb-3 block">{ad.icon}</span>
                <h3 className="font-medium text-neutral-900 mb-2">{ad.title}</h3>
                <p className="text-sm text-neutral-500 mb-3">{ad.desc}</p>
                <p className="text-xs text-neutral-400">Avg. CPC: {ad.cpc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-['Inter'] text-4xl font-light text-neutral-900">Management Fees</h2>
            <p className="text-neutral-500 mt-2">Plus ad spend • No hidden costs • Month-to-month</p>
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
                  <div className="mb-2">
                    <span className="text-3xl font-light text-neutral-900">{pkg.price}</span>
                    <span className="text-sm text-neutral-400 ml-1">{pkg.duration}</span>
                  </div>
                  <p className="text-xs text-neutral-500 mb-1">Ad spend: {pkg.adSpend}</p>
                  <p className="text-xs text-neutral-500 mb-4">Setup: {pkg.setup}</p>
                  <p className="text-xs text-neutral-400 mb-4">⏱️ {pkg.commitment}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="text-xs text-neutral-600 flex items-start">
                        <span className="text-neutral-400 mr-2">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/contact?service=google-ads-${pkg.name.toLowerCase()}`} 
                        className="block w-full py-2 bg-neutral-900 text-white text-sm text-center rounded hover:bg-neutral-800">
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-neutral-400 text-center mt-6">*Management fee + actual ad spend billed by Google</p>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-12">
            Our Process
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

      {/* Industries */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-2xl font-light text-center text-neutral-900 mb-8">
            Industries We Serve
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "E-commerce", "Real Estate", "Education", "Healthcare", "Travel",
              "Automotive", "Legal", "Home Services", "Fitness", "Beauty",
              "Finance", "Technology", "Restaurants", "Events", "Non-profit"
            ].map((industry, i) => (
              <span key={i} className="px-4 py-2 bg-white border border-neutral-200 text-neutral-700 text-sm rounded-full">
                {industry}
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
              { q: "How much should I spend on ads?", a: "Start with ₹30,000-50,000/month to gather enough data for optimization." },
              { q: "When will I see results?", a: "Most campaigns start showing results within 2-4 weeks of optimization." },
              { q: "Do I need to pay Google separately?", a: "Yes, ad spend is billed directly by Google. We only charge management fees." },
              { q: "Can you guarantee sales?", a: "We guarantee improved traffic and leads, but actual sales depend on your website." }
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
            Ready to grow with Google Ads?
          </h2>
          <p className="text-neutral-300 mb-8">Get a free account audit and strategy proposal</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-white text-neutral-900 text-sm rounded hover:bg-neutral-100">
              Free Audit
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