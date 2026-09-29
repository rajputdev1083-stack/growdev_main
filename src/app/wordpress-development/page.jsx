// app/wordpress-development/page.jsx
import Link from "next/link";
import CityLinks from "@/utlls/CityLinks";

export const metadata = {
  title: "WordPress Development | Grow Development - Custom Themes & Plugins",
  description: "Professional WordPress development services. Custom themes, plugins, WooCommerce stores, and website optimization. Starting from ₹4,000.",
  keywords: "WordPress development, custom WordPress themes, WordPress plugins, WooCommerce development, WordPress website India, WordPress developer",
  openGraph: {
    title: "WordPress Development - Custom Themes & Plugins",
    description: "Custom WordPress solutions with premium themes, plugins, and WooCommerce. Starting ₹4,000.",
  },
};

const packages = [
  {
    name: "Basic Website",
    price: "₹4,000",
    duration: "3-5 days",
    features: [
      "Free theme installation",
      "Up to 5 pages",
      "Contact form",
      "Basic SEO setup",
      "Responsive design",
      "1 month support"
    ],
    ideal: "Blogs, Small business"
  },
  {
    name: "Business Website",
    price: "₹12,000",
    duration: "7-10 days",
    features: [
      "Premium theme customization",
      "Up to 15 pages",
      "Custom homepage design",
      "Blog setup",
      "SEO optimization",
      "Speed optimization",
      "Social media integration",
      "3 months support"
    ],
    popular: true,
    ideal: "SMEs, Startups"
  },
  {
    name: "WooCommerce Store",
    price: "₹25,000",
    duration: "10-15 days",
    features: [
      "WooCommerce setup",
      "Up to 100 products",
      "Payment gateway integration",
      "Shipping setup",
      "Inventory management",
      "Product filters",
      "Review system",
      "6 months support"
    ],
    ideal: "E-commerce businesses"
  },
  {
    name: "Custom Development",
    price: "₹45,000+",
    duration: "15-25 days",
    features: [
      "Custom theme development",
      "Custom plugin development",
      "Advanced functionality",
      "Custom post types",
      "API integrations",
      "Multisite setup",
      "Membership system",
      "12 months support"
    ],
    ideal: "Enterprise, Complex sites"
  }
];

const themes = [
  { name: "Astra", use: "Fast & lightweight" },
  { name: "GeneratePress", use: "Highly customizable" },
  { name: "Divi", use: "Visual builder" },
  { name: "Elementor", use: "Drag & drop" },
  { name: "OceanWP", use: "Multi-purpose" },
  { name: "Kadence", use: "Modern design" }
];

const plugins = [
  "Elementor", "Yoast SEO", "WooCommerce", "WPForms", "Rank Math",
  "Wordfence Security", "WPRocket", "UpdraftPlus", "Contact Form 7",
  "Advanced Custom Fields", "Smush", "MonsterInsights"
];

const features = [
  { icon: "🎨", title: "Custom Themes", desc: "Unique design tailored to your brand" },
  { icon: "⚡", title: "Speed Optimized", desc: "Fast loading & Core Web Vitals" },
  { icon: "🔒", title: "Security", desc: "Malware protection & backups" },
  { icon: "📱", title: "Mobile Ready", desc: "Perfect on all devices" },
  { icon: "📈", title: "SEO Friendly", desc: "Rank higher on Google" },
  { icon: "🛒", title: "WooCommerce", desc: "Full e-commerce solution" }
];

export default function WordPressDevelopmentPage() {
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
            <span className="text-neutral-800">wordpress-development</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-['Inter'] text-5xl md:text-6xl font-light text-neutral-900 mb-6">
              WordPress Development
              <span className="block font-medium italic text-neutral-500 text-4xl mt-2">Custom themes & plugins</span>
            </h1>
            <p className="text-lg text-neutral-500 mb-8">
              Professional WordPress solutions with premium themes, custom plugins, and WooCommerce integration. From blogs to enterprise sites.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-full">Starting ₹4,000</span>
              <span className="px-4 py-2 bg-neutral-800 text-white text-sm rounded-full">3-25 days delivery</span>
              <span className="px-4 py-2 bg-neutral-700 text-white text-sm rounded-full">100+ sites launched</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-12">
            Why choose WordPress?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {features.map((f, i) => (
              <div key={i} className="text-center p-4 border border-neutral-200 rounded-lg">
                <span className="text-3xl mb-2 block">{f.icon}</span>
                <h3 className="font-medium text-sm text-neutral-900">{f.title}</h3>
                <p className="text-xs text-neutral-400 mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-['Inter'] text-4xl font-light text-neutral-900">Packages</h2>
            <p className="text-neutral-500 mt-2">Choose what works for you</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, i) => (
              <div key={i} className={`bg-white border ${pkg.popular ? 'border-neutral-900' : 'border-neutral-200'} rounded-lg relative`}>
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-neutral-900 text-white text-xs px-3 py-1 rounded-tr-lg rounded-bl-lg">
                    Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="font-['Inter'] text-xl font-medium text-neutral-900">{pkg.name}</h3>
                  <p className="text-xs text-neutral-400 mt-1 mb-4">{pkg.ideal}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-light text-neutral-900">{pkg.price}</span>
                    <span className="text-xs text-neutral-400 block">{pkg.duration}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="text-xs text-neutral-600 flex items-start">
                        <span className="text-neutral-400 mr-2">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/contact?service=wordpress-${pkg.name.toLowerCase().replace(/\s+/g, '-')}`} 
                        className="block w-full py-2 bg-neutral-900 text-white text-sm text-center rounded hover:bg-neutral-800">
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Themes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-2xl font-light text-center text-neutral-900 mb-8">
            Popular Themes We Use
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {themes.map((theme, i) => (
              <div key={i} className="border border-neutral-200 rounded-lg p-4 text-center">
                <h3 className="font-medium text-neutral-900">{theme.name}</h3>
                <p className="text-xs text-neutral-400 mt-1">{theme.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Plugins */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-2xl font-light text-center text-neutral-900 mb-8">
            Essential WordPress Plugins
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {plugins.map((plugin, i) => (
              <span key={i} className="px-4 py-2 bg-white border border-neutral-200 text-neutral-700 text-sm rounded-full">
                {plugin}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WooCommerce Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-5xl mb-4 block">🛒</span>
              <h2 className="font-['Inter'] text-3xl font-light text-neutral-900 mb-4">
                WooCommerce Development
              </h2>
              <p className="text-neutral-500 mb-6">
                Full-featured e-commerce stores with product management, payments, shipping, and inventory.
              </p>
              <ul className="space-y-2">
                {["Product catalog", "Payment gateways", "Shipping integration", "Inventory management", "Order tracking", "Customer accounts"].map((item, i) => (
                  <li key={i} className="text-sm text-neutral-600 flex items-center">
                    <span className="text-neutral-400 mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-neutral-50 p-8 border border-neutral-200 rounded-lg">
              <h3 className="font-medium text-neutral-900 mb-4">WooCommerce Compatible</h3>
              <p className="text-sm text-neutral-500 mb-4">Payment gateways we integrate:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white border border-neutral-200 text-xs rounded">Razorpay</span>
                <span className="px-3 py-1 bg-white border border-neutral-200 text-xs rounded">Paytm</span>
                <span className="px-3 py-1 bg-white border border-neutral-200 text-xs rounded">Stripe</span>
                <span className="px-3 py-1 bg-white border border-neutral-200 text-xs rounded">Cashfree</span>
                <span className="px-3 py-1 bg-white border border-neutral-200 text-xs rounded">PhonePe</span>
                <span className="px-3 py-1 bg-white border border-neutral-200 text-xs rounded">COD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="py-16 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-['Inter'] text-3xl font-light text-white mb-4">
            Start Your WordPress Project
          </h2>
          <p className="text-neutral-300 mb-8">Get a free consultation and quote within 24 hours</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-white text-neutral-900 text-sm rounded hover:bg-neutral-100">
              Discuss Your Project
            </Link>
            <Link href="/portfolio" className="px-8 py-3 border border-white text-white text-sm rounded hover:bg-white hover:text-neutral-900">
              View Portfolio
            </Link>
          </div>
          <p className="text-neutral-500 text-sm mt-6">📞 Call: +91 97186 59236</p>
        </div>
      </section>

      <CityLinks />
    </main>
  );
}