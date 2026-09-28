// app/meta-ads/page.jsx
import Link from "next/link";
import CityLinks from "@/utlls/CityLinks";

export const metadata = {
  title: "Meta Ads Management | AV Development - Facebook & Instagram Advertising",
  description: "Professional Meta Ads management for Facebook and Instagram. Drive sales, leads, and brand awareness with targeted social media campaigns. Starting from ₹15,000/month.",
  keywords: "Facebook Ads, Instagram Ads, Meta advertising, social media ads, Facebook marketing, Instagram promotion, PPC social media",
  openGraph: {
    title: "Meta Ads - Facebook & Instagram Advertising",
    description: "Targeted social media campaigns that drive real business results.",
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
      "Campaign strategy",
      "Audience research",
      "Ad creative guidance",
      "3 ad sets",
      "9 ad variations",
      "Pixel installation",
      "Conversion tracking",
      "Monthly reporting",
      "WhatsApp support"
    ],
    ideal: "Small businesses, Local shops",
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
      "Unlimited ad sets",
      "A/B testing",
      "Custom audiences",
      "Lookalike audiences",
      "Retargeting campaigns",
      "Creative strategy",
      "Bi-weekly optimization",
      "Monthly strategy call",
      "Priority support"
    ],
    popular: true,
    ideal: "E-commerce, D2C brands",
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
      "Dynamic product ads",
      "Catalog setup",
      "Instagram shopping",
      "Creator collaborations",
      "Video ad production",
      "Daily optimization",
      "Weekly strategy calls",
      "Dedicated manager"
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
      "Multi-platform",
      "Advanced analytics",
      "Custom dashboard",
      "API access",
      "Team training",
      "Weekly reviews",
      "24/7 priority support"
    ],
    ideal: "Large enterprises",
    commitment: "12 months"
  }
];

const adFormats = [
  {
    icon: "📷",
    title: "Image Ads",
    desc: "Single image with text & CTA",
    platforms: "Facebook & Instagram"
  },
  {
    icon: "🎥",
    title: "Video Ads",
    desc: "Engaging video content",
    platforms: "Facebook & Instagram"
  },
  {
    icon: "🔄",
    title: "Carousel Ads",
    desc: "Multiple images in one ad",
    platforms: "Facebook & Instagram"
  },
  {
    icon: "🛍️",
    title: "Collection Ads",
    desc: "Shop directly from ad",
    platforms: "Facebook & Instagram"
  },
  {
    icon: "📱",
    title: "Stories Ads",
    desc: "Full-screen vertical format",
    platforms: "Instagram & Facebook Stories"
  },
  {
    icon: "💬",
    title: "Messenger Ads",
    desc: "Ads in Messenger inbox",
    platforms: "Facebook Messenger"
  },
  {
    icon: "🎬",
    title: "Reels Ads",
    desc: "Short-form video ads",
    platforms: "Instagram Reels"
  },
  {
    icon: "🔍",
    title: "Explore Ads",
    desc: "Ads in Instagram Explore",
    platforms: "Instagram"
  }
];

const objectives = [
  { icon: "📈", name: "Brand Awareness", cpc: "₹1-5 per 1000 impressions" },
  { icon: "🎯", name: "Traffic", cpc: "₹3-15 per click" },
  { icon: "💬", name: "Engagement", cpc: "₹2-10 per engagement" },
  { icon: "📱", name: "App Installs", cpc: "₹20-80 per install" },
  { icon: "🎥", name: "Video Views", cpc: "₹1-5 per view" },
  { icon: "💬", name: "Lead Generation", cpc: "₹50-200 per lead" },
  { icon: "🛒", name: "Conversions", cpc: "₹100-500 per sale" },
  { icon: "📞", name: "Messages", cpc: "₹20-60 per conversation" }
];

const benefits = [
  { metric: "2.5B+", label: "Monthly active users" },
  { metric: "3x", label: "Higher engagement" },
  { metric: "35%", label: "Lower CPA vs search" },
  { metric: "200+", label: "Campaigns managed" }
];

const process = [
  { step: "01", title: "Audit", desc: "Review current presence" },
  { step: "02", title: "Strategy", desc: "Define goals & audience" },
  { step: "03", title: "Creative", desc: "Design ads & copy" },
  { step: "04", title: "Launch", desc: "Set up & go live" },
  { step: "05", title: "Optimize", desc: "Daily monitoring" },
  { step: "06", title: "Report", desc: "Performance review" }
];

export default function MetaAdsPage() {
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
            <span className="text-neutral-800">meta-ads</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-['Inter'] text-5xl md:text-6xl font-light text-neutral-900 mb-6">
              Meta Ads
              <span className="block font-medium italic text-neutral-500 text-4xl mt-2">Facebook & Instagram</span>
            </h1>
            <p className="text-lg text-neutral-500 mb-8">
              Reach 2.5B+ monthly active users with targeted Facebook and Instagram campaigns. 
              From brand awareness to conversions, we deliver results.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-full">Management ₹15,000/mo</span>
              <span className="px-4 py-2 bg-neutral-800 text-white text-sm rounded-full">Meta Partner</span>
              <span className="px-4 py-2 bg-neutral-700 text-white text-sm rounded-full">35% lower CPA</span>
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

      {/* Ad Formats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-12">
            Ad Formats We Create
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {adFormats.map((ad, i) => (
              <div key={i} className="border border-neutral-200 rounded-lg p-6">
                <span className="text-3xl mb-3 block">{ad.icon}</span>
                <h3 className="font-medium text-neutral-900 mb-2">{ad.title}</h3>
                <p className="text-sm text-neutral-500 mb-3">{ad.desc}</p>
                <p className="text-xs text-neutral-400">{ad.platforms}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Objectives */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-12">
            Campaign Objectives & Costs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {objectives.map((obj, i) => (
              <div key={i} className="bg-white border border-neutral-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{obj.icon}</span>
                  <h3 className="font-medium text-neutral-900">{obj.name}</h3>
                </div>
                <p className="text-xs text-neutral-500">{obj.cpc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-['Inter'] text-4xl font-light text-neutral-900">Management Packages</h2>
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
                  <Link href={`/contact?service=meta-ads-${pkg.name.toLowerCase()}`} 
                        className="block w-full py-2 bg-neutral-900 text-white text-sm text-center rounded hover:bg-neutral-800">
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {process.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-white border border-neutral-200 rounded-full flex items-center justify-center font-['Inter'] text-neutral-900">
                  {step.step}
                </div>
                <h3 className="font-medium text-neutral-900 text-sm mb-1">{step.title}</h3>
                <p className="text-xs text-neutral-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Targeting Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-2xl font-light text-center text-neutral-900 mb-8">
            Advanced Targeting
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Demographics", "Interests", "Behaviors", "Location", "Age", "Gender",
              "Language", "Education", "Employment", "Relationship", "Life Events",
              "Device Usage", "Connection Type", "Custom Audiences", "Lookalikes",
              "Retargeting", "Engaged Shoppers", "Video Viewers"
            ].map((target, i) => (
              <span key={i} className="px-4 py-2 bg-neutral-100 text-neutral-700 text-sm rounded-full">
                {target}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-12">
            Common Questions
          </h2>
          <div className="space-y-4">
            {[
              { q: "Which platform is better for my business?", a: "Both! We typically run campaigns on both Facebook and Instagram for maximum reach." },
              { q: "How much should I budget for Meta Ads?", a: "Start with ₹30,000-50,000/month to test different audiences and creatives." },
              { q: "Do you create the ad images and videos?", a: "Yes! We provide creative guidance and can connect you with designers/video editors." },
              { q: "How long until I see results?", a: "Most campaigns show initial results within 1-2 weeks of optimization." }
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-neutral-200 rounded-lg p-4">
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
            Ready to scale with Meta Ads?
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