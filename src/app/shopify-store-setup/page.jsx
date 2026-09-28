// app/shopify-store-setup/page.jsx
import Link from "next/link";
import CityLinks from "@/utlls/CityLinks";

export const metadata = {
  title: "Shopify Store Setup | GR Development - E-commerce Solutions",
  description: "Professional Shopify store setup, customization, and optimization. Start your e-commerce journey with custom themes, apps, and marketing integration from ₹5,000.",
  keywords: "Shopify store setup, Shopify development, e-commerce store, Shopify themes, Shopify apps, dropshipping store, Shopify pricing India",
  openGraph: {
    title: "Shopify Store Setup - Launch Your E-commerce Store",
    description: "Custom Shopify stores with premium themes, apps, and marketing tools. Starting ₹5,000.",
  },
};

const packages = [
  {
    name: "Basic Store",
    price: "₹5,000",
    duration: "3-5 days",
    features: [
      "Shopify store setup",
      "Free theme installation",
      "Up to 10 products",
      "Basic customization",
      "Payment gateway setup",
      "Shipping settings",
      "1 month support"
    ],
    ideal: "Startups, Small businesses"
  },
  {
    name: "Business Store",
    price: "₹15,000",
    duration: "7-10 days",
    features: [
      "Premium theme purchase & setup",
      "Up to 50 products",
      "Custom branding",
      "SEO optimization",
      "Blog setup",
      "Email marketing integration",
      "Social media integration",
      "3 months support"
    ],
    popular: true,
    ideal: "Growing brands"
  },
  {
    name: "Dropshipping Store",
    price: "₹25,000",
    duration: "10-14 days",
    features: [
      "Oberlo/Dropshipping setup",
      "Product import (100+)",
      "Supplier integration",
      "Automated fulfillment",
      "Profit calculator",
      "Review app integration",
      "Facebook Pixel setup",
      "6 months support"
    ],
    ideal: "Dropshipping businesses"
  },
  {
    name: "Premium Store",
    price: "₹45,000",
    duration: "14-21 days",
    features: [
      "Custom theme development",
      "Unlimited products",
      "Custom functionality",
      "Advanced SEO",
      "Multi-channel selling",
      "Abandoned cart recovery",
      "Subscription setup",
      "Analytics dashboard",
      "12 months support"
    ],
    ideal: "Enterprise, High-volume"
  }
];

const features = [
  { icon: "🎨", title: "Custom Themes", desc: "Unique design that matches your brand" },
  { icon: "📱", title: "Mobile Optimized", desc: "Perfect shopping on all devices" },
  { icon: "💳", title: "Payment Gateways", desc: "Razorpay, Paytm, Credit Cards" },
  { icon: "🚚", title: "Shipping Setup", desc: "India Post, Delhivery, Shiprocket" },
  { icon: "📈", title: "SEO Ready", desc: "Rank higher on Google" },
  { icon: "📊", title: "Analytics", desc: "Track sales & customer behavior" }
];

const apps = [
  "Oberlo/Dropshipping", "PageFly", "Privy", "Klaviyo", "Yotpo Reviews",
  "Smile.io Loyalty", "Growave", "PushOwl", "Zipify", "Back in Stock"
];

export default function ShopifyStoreSetupPage() {
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
            <span className="text-neutral-800">shopify-store-setup</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-['Inter'] text-5xl md:text-6xl font-light text-neutral-900 mb-6">
              Shopify Store Setup
              <span className="block font-medium italic text-neutral-500 text-4xl mt-2">Launch in 3 days</span>
            </h1>
            <p className="text-lg text-neutral-500 mb-8">
              Professional Shopify stores with custom themes, apps, and marketing tools. Start selling online today.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-full">Starting ₹5,000</span>
              <span className="px-4 py-2 bg-neutral-800 text-white text-sm rounded-full">3-21 days delivery</span>
              <span className="px-4 py-2 bg-neutral-700 text-white text-sm rounded-full">50+ stores launched</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-12">
            Everything you need to start selling
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
            <h2 className="font-['Inter'] text-4xl font-light text-neutral-900">Simple pricing</h2>
            <p className="text-neutral-500 mt-2">Choose the package that fits your business</p>
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
                  <Link href={`/contact?service=shopify-${pkg.name.toLowerCase()}`} 
                        className="block w-full py-2 bg-neutral-900 text-white text-sm text-center rounded hover:bg-neutral-800">
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Apps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-8">
            Popular Shopify Apps We Integrate
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {apps.map((app, i) => (
              <span key={i} className="px-4 py-2 bg-neutral-100 text-neutral-700 text-sm rounded-full">
                {app}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="py-16 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-['Inter'] text-3xl font-light text-white mb-4">
            Ready to launch your store?
          </h2>
          <p className="text-neutral-300 mb-8">Get a free consultation and store demo</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-white text-neutral-900 text-sm rounded hover:bg-neutral-100">
              Start Your Store
            </Link>
            <Link href="/portfolio" className="px-8 py-3 border border-white text-white text-sm rounded hover:bg-white hover:text-neutral-900">
              View Examples
            </Link>
          </div>
          <p className="text-neutral-500 text-sm mt-6">📞 Call us: +91 97186 59236</p>
        </div>
      </section>

      <CityLinks />
    </main>
  );
}