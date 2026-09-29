// app/digital-marketing/page.jsx
import Link from "next/link";
import CityLinks from "@/utlls/CityLinks";

export const metadata = {
  title: "Digital Marketing Services | Grow Development - 360° Marketing Solutions",
  description: "Complete digital marketing services: SEO, Google Ads, Meta Ads, Social Media, Content Marketing, and Email Marketing. Data-driven strategies for growth. Starting from ₹25,000/month.",
  keywords: "digital marketing agency, full service digital marketing, online marketing, internet marketing, 360 degree marketing, integrated marketing",
  openGraph: {
    title: "Digital Marketing - 360° Marketing Solutions",
    description: "Complete marketing solutions that drive traffic, leads, and sales across all channels.",
  },
};

const packages = [
  {
    name: "Essential",
    price: "₹25,000",
    duration: "per month",
    commitment: "3 months",
    features: [
      "SEO (10 keywords)",
      "Google Ads management",
      "Meta Ads management",
      "Social media posting (10 posts)",
      "Monthly reporting",
      "WhatsApp support",
      "Strategy calls"
    ],
    ideal: "Small businesses, Startups",
    channels: ["SEO", "Google", "Meta", "Social"]
  },
  {
    name: "Growth",
    price: "₹45,000",
    duration: "per month",
    commitment: "6 months",
    features: [
      "Everything in Essential",
      "SEO (25 keywords)",
      "Content marketing (4 blogs)",
      "Email marketing",
      "Landing page optimization",
      "A/B testing",
      "Competitor analysis",
      "Bi-weekly strategy",
      "Priority support"
    ],
    popular: true,
    ideal: "Growing businesses",
    channels: ["SEO", "Google", "Meta", "Content", "Email"]
  },
  {
    name: "Performance",
    price: "₹75,000",
    duration: "per month",
    commitment: "6 months",
    features: [
      "Everything in Growth",
      "SEO (50+ keywords)",
      "Influencer collaborations",
      "Video marketing",
      "Reputation management",
      "Marketing automation",
      "Custom dashboard",
      "Weekly strategy calls",
      "Dedicated manager"
    ],
    ideal: "Established brands",
    channels: ["SEO", "Google", "Meta", "Content", "Video", "Influencer"]
  },
  {
    name: "Enterprise",
    price: "Custom",
    duration: "per month",
    commitment: "12 months",
    features: [
      "Custom strategy",
      "Multi-channel",
      "International campaigns",
      "Advanced analytics",
      "API integrations",
      "Team training",
      "Weekly reviews",
      "24/7 priority support"
    ],
    ideal: "Large enterprises",
    channels: ["All channels"]
  }
];

const channels = [
  {
    icon: "🔍",
    title: "SEO",
    desc: "Organic search visibility",
    services: ["Keyword research", "On-page SEO", "Technical SEO", "Link building"]
  },
  {
    icon: "📊",
    title: "Google Ads",
    desc: "Paid search & display",
    services: ["Search ads", "Shopping ads", "Display ads", "YouTube ads"]
  },
  {
    icon: "📱",
    title: "Meta Ads",
    desc: "Facebook & Instagram",
    services: ["Feed ads", "Stories ads", "Reels ads", "Retargeting"]
  },
  {
    icon: "📝",
    title: "Content Marketing",
    desc: "Blogs, articles, guides",
    services: ["Blog writing", "SEO content", "E-books", "Case studies"]
  },
  {
    icon: "📧",
    title: "Email Marketing",
    desc: "Newsletters & campaigns",
    services: ["Email sequences", "Newsletters", "Automation", "Analytics"]
  },
  {
    icon: "📱",
    title: "Social Media",
    desc: "Organic social presence",
    services: ["Content creation", "Scheduling", "Community management", "Analytics"]
  },
  {
    icon: "🎥",
    title: "Video Marketing",
    desc: "YouTube & Reels",
    services: ["Video production", "YouTube SEO", "Short-form content", "Ads"]
  },
  {
    icon: "📈",
    title: "Analytics",
    desc: "Data & insights",
    services: ["Goal tracking", "Conversion tracking", "Reporting", "Insights"]
  }
];

const benefits = [
  { metric: "360°", label: "Complete solution" },
  { metric: "3-6x", label: "Average ROAS" },
  { metric: "50+", label: "Happy clients" },
  { metric: "24/7", label: "Campaign monitoring" }
];

const process = [
  { step: "01", title: "Audit", desc: "Review current marketing" },
  { step: "02", title: "Strategy", desc: "Define goals & channels" },
  { step: "03", title: "Setup", desc: "Campaign configuration" },
  { step: "04", title: "Launch", desc: "Go live across channels" },
  { step: "05", title: "Optimize", desc: "Continuous improvement" },
  { step: "06", title: "Report", desc: "Monthly performance" }
];

export default function DigitalMarketingPage() {
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
            <span className="text-neutral-800">digital-marketing</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-['Inter'] text-5xl md:text-6xl font-light text-neutral-900 mb-6">
              Digital Marketing
              <span className="block font-medium italic text-neutral-500 text-4xl mt-2">360° marketing solutions</span>
            </h1>
            <p className="text-lg text-neutral-500 mb-8">
              Integrated marketing across all channels. From SEO to social media, 
              we create data-driven strategies that drive real business growth.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-full">Starting ₹25,000/mo</span>
              <span className="px-4 py-2 bg-neutral-800 text-white text-sm rounded-full">3-6x average ROAS</span>
              <span className="px-4 py-2 bg-neutral-700 text-white text-sm rounded-full">All channels included</span>
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

      {/* Channels */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-4">
            Marketing Channels
          </h2>
          <p className="text-center text-neutral-500 max-w-2xl mx-auto mb-12">
            Integrated approach across all digital channels
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {channels.map((channel, i) => (
              <div key={i} className="border border-neutral-200 rounded-lg p-6">
                <span className="text-3xl mb-3 block">{channel.icon}</span>
                <h3 className="font-medium text-neutral-900 mb-2">{channel.title}</h3>
                <p className="text-sm text-neutral-500 mb-4">{channel.desc}</p>
                <ul className="space-y-1">
                  {channel.services.map((s, j) => (
                    <li key={j} className="text-xs text-neutral-400">• {s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-['Inter'] text-4xl font-light text-neutral-900">Marketing Packages</h2>
            <p className="text-neutral-500 mt-2">All-in-one marketing solutions • Month-to-month</p>
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
                  <div className="mb-4">
                    <span className="text-3xl font-light text-neutral-900">{pkg.price}</span>
                    <span className="text-sm text-neutral-400 ml-1">{pkg.duration}</span>
                  </div>
                  <p className="text-xs text-neutral-500 mb-4">⏱️ {pkg.commitment} minimum</p>
                  
                  {/* Channel badges */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {pkg.channels.map((ch, j) => (
                      <span key={j} className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded">
                        {ch}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="text-xs text-neutral-600 flex items-start">
                        <span className="text-neutral-400 mr-2">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/contact?service=digital-${pkg.name.toLowerCase()}`} 
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

      {/* Integration */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-['Inter'] text-2xl font-light text-neutral-900 mb-4">
            Integrated Marketing Approach
          </h2>
          <p className="text-neutral-500 mb-8">
            All channels work together for maximum impact
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "SEO drives organic traffic",
              "Ads capture immediate demand",
              "Social builds community",
              "Content educates & nurtures",
              "Email retains customers",
              "Video engages & converts",
              "Analytics measures everything",
              "All channels optimized together"
            ].map((item, i) => (
              <div key={i} className="bg-white border border-neutral-200 rounded-lg p-3 text-sm text-neutral-600">
                {item}
              </div>
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
              { q: "Why choose integrated marketing?", a: "Channels work better together. SEO + Ads + Social + Email create a complete customer journey." },
              { q: "Can I start with just one channel?", a: "Yes! We can start with specific channels and expand as you see results." },
              { q: "How soon will I see results?", a: "Paid channels show immediate results. SEO takes 3-6 months for full impact." },
              { q: "Do you provide content creation?", a: "Yes! We create content for all channels - blogs, social posts, ad copy, and videos." }
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
            Ready to grow your business?
          </h2>
          <p className="text-neutral-300 mb-8">Get a complete marketing audit and custom strategy</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-white text-neutral-900 text-sm rounded hover:bg-neutral-100">
              Free Marketing Audit
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