// app/ai-content-creation/page.jsx
import Link from "next/link";
import CityLinks from "@/utlls/CityLinks";

export const metadata = {
  title: "AI Content Creation Services | Grow Development - Blog Writing, Copy, SEO Content India",
  description: "Professional AI-powered content creation for Indian businesses. Blog posts, website copy, social media content, product descriptions, and SEO articles. Starting from ₹999/month.",
  keywords: "AI content writing, content creation India, blog writing service, SEO content writer, copywriting agency, AI copywriting, content marketing India, Hindi content writing",
  openGraph: {
    title: "AI Content Creation - Smart Content for Indian Businesses",
    description: "High-quality, AI-powered content that ranks and converts. Starting at ₹999/month.",
  },
};

const contentPackages = [
  {
    name: "Starter",
    price: "₹999",
    setup: "No setup fee",
    duration: "per month",
    words: "5,000 words",
    articles: "2-3 blog posts",
    features: [
      "SEO-optimized blogs",
      "Basic keyword research",
      "English content only",
      "2 rounds of revision",
      "3 business day delivery",
      "Plagiarism check",
      "Basic images included",
      "Email support"
    ],
    ideal: "Startups, Small blogs",
    commitment: "Month-to-month"
  },
  {
    name: "Growth",
    price: "₹2,499",
    setup: "Free",
    duration: "per month",
    words: "15,000 words",
    articles: "8-10 blog posts",
    features: [
      "Everything in Starter",
      "Advanced SEO strategy",
      "Content calendar",
      "Hindi/Regional content*",
      "Social media captions",
      "Email newsletters",
      "4 rounds of revision",
      "2 day delivery",
      "Premium stock images",
      "WhatsApp priority support"
    ],
    popular: true,
    ideal: "Growing businesses, E-commerce",
    commitment: "3 months minimum",
    note: "*Regional languages: Hindi, Marathi, Gujarati, Tamil, Telugu, Bengali"
  },
  {
    name: "Professional",
    price: "₹4,999",
    setup: "Free",
    duration: "per month",
    words: "35,000 words",
    articles: "18-20 blog posts",
    features: [
      "Everything in Growth",
      "Website copywriting",
      "Product descriptions",
      "Landing page copy",
      "Video scripts",
      "Ad copy (Google/Meta)",
      "WhatsApp broadcast copy",
      "Unlimited revisions",
      "24hr delivery",
      "Dedicated content manager",
      "Weekly strategy calls"
    ],
    ideal: "Agencies, Media houses",
    commitment: "6 months minimum"
  },
  {
    name: "Enterprise",
    price: "Custom",
    setup: "Free consultation",
    duration: "per month",
    words: "100,000+ words",
    articles: "Unlimited",
    features: [
      "Custom content strategy",
      "Multi-language support",
      "Voice & tone guide",
      "Brand guideline integration",
      "API access",
      "Team training",
      "Daily content delivery",
      "24/7 priority support",
      "Dedicated account manager"
    ],
    ideal: "Large enterprises, E-commerce giants",
    commitment: "12 months"
  }
];

const contentTypes = [
  {
    icon: "📝",
    title: "Blog Posts",
    desc: "SEO-optimized articles that rank",
    length: "800-2500 words",
    price: "₹299 per post"
  },
  {
    icon: "🌐",
    title: "Website Copy",
    desc: "Homepage, about, service pages",
    length: "300-1000 words per page",
    price: "₹499 per page"
  },
  {
    icon: "📱",
    title: "Social Media Content",
    desc: "Captions, posts, threads",
    length: "50-300 words",
    price: "₹49 per post"
  },
  {
    icon: "🛍️",
    title: "Product Descriptions",
    desc: "E-commerce product copy",
    length: "100-500 words",
    price: "₹99 per product"
  },
  {
    icon: "📧",
    title: "Email Newsletters",
    desc: "Engaging email campaigns",
    length: "300-800 words",
    price: "₹399 per email"
  },
  {
    icon: "🎥",
    title: "Video Scripts",
    desc: "YouTube, Reels, Ads scripts",
    length: "60-180 seconds",
    price: "₹599 per script"
  },
  {
    icon: "💼",
    title: "Business Proposals",
    desc: "Professional pitch decks",
    length: "1000-3000 words",
    price: "₹1,999 per proposal"
  },
  {
    icon: "📄",
    title: "Whitepapers",
    desc: "In-depth industry reports",
    length: "3000-8000 words",
    price: "₹4,999 per paper"
  },
  {
    icon: "🔍",
    title: "SEO Meta Data",
    desc: "Title tags, meta descriptions",
    length: "50-160 characters",
    price: "₹49 per page"
  },
  {
    icon: "📢",
    title: "Ad Copy",
    desc: "Google & Meta ads copy",
    length: "30-90 words",
    price: "₹199 per ad"
  },
  {
    icon: "💬",
    title: "WhatsApp Broadcasts",
    desc: "Marketing & broadcast messages",
    length: "100-300 words",
    price: "₹99 per message"
  },
  {
    icon: "📚",
    title: "E-books",
    desc: "Lead magnet content",
    length: "5000-15000 words",
    price: "₹7,999 per book"
  }
];

const industries = [
  "E-commerce", "Real Estate", "Education", "Healthcare", "Travel", "Hospitality",
  "Fintech", "SaaS", "Manufacturing", "Retail", "Food & Beverage", "Fashion",
  "Fitness", "Beauty", "Automotive", "Legal", "Consulting", "Non-profit",
  "Technology", "Entertainment", "Sports", "Events", "Interior Design", "Wellness"
];

const languages = [
  { name: "English", regions: "Pan India" },
  { name: "Hindi", regions: "North India" },
  { name: "Marathi", regions: "Maharashtra" },
  { name: "Gujarati", regions: "Gujarat" },
  { name: "Tamil", regions: "Tamil Nadu" },
  { name: "Telugu", regions: "Andhra Pradesh, Telangana" },
  { name: "Kannada", regions: "Karnataka" },
  { name: "Malayalam", regions: "Kerala" },
  { name: "Bengali", regions: "West Bengal" },
  { name: "Punjabi", regions: "Punjab" },
  { name: "Odia", regions: "Odisha" },
  { name: "Assamese", regions: "Assam" },
  { name: "Urdu", regions: "North India" }
];

const benefits = [
  { metric: "10x", label: "Faster content production" },
  { metric: "60%", label: "Lower costs vs human writers" },
  { metric: "24/7", label: "Content generation" },
  { metric: "15+", label: "Indian languages supported" }
];

const process = [
  { step: "01", title: "Brief", desc: "Share requirements & keywords" },
  { step: "02", title: "Research", desc: "AI + human research" },
  { step: "03", title: "Create", desc: "AI generates draft" },
  { step: "04", title: "Edit", desc: "Human refinement" },
  { step: "05", title: "Review", desc: "Client feedback" },
  { step: "06", title: "Deliver", desc: "Final content" }
];

const faqs = [
  { 
    q: "Is the content original or copied?", 
    a: "100% original. We use AI combined with human editing and run every piece through plagiarism checkers before delivery." 
  },
  { 
    q: "Can you write in Hindi and other Indian languages?", 
    a: "Yes! We support 15+ Indian languages including Hindi, Marathi, Tamil, Telugu, Gujarati, Bengali, and more." 
  },
  { 
    q: "How is AI content different from human writers?", 
    a: "AI is faster and more cost-effective for bulk content. We combine AI efficiency with human creativity for the best results." 
  },
  { 
    q: "Do you optimize for SEO?", 
    a: "Absolutely. All content comes with SEO optimization, keyword placement, and meta descriptions." 
  },
  { 
    q: "What's the turnaround time?", 
    a: "Standard delivery is 2-3 business days. Express delivery available at 20% extra." 
  },
  { 
    q: "Can I request revisions?", 
    a: "Yes, revisions are included in all packages. Number of revisions depends on your plan." 
  }
];

const tools = [
  "GPT-4", "Claude", "Jasper", "Copy.ai", "Surfer SEO", "Grammarly",
  "Copyscape", "Semrush", "Ahrefs", "Canva", "ChatGPT", "Midjourney"
];

export default function AIContentCreationPage() {
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
            <span className="text-neutral-800">ai-content-creation</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-['Inter'] text-5xl md:text-6xl font-light text-neutral-900 mb-6">
              AI Content Creation
              <span className="block font-medium italic text-neutral-500 text-4xl mt-2">Blogs • Copy • SEO</span>
            </h1>
            <p className="text-lg text-neutral-500 mb-8">
              High-quality, AI-powered content that ranks on Google and converts readers into customers. 
              Perfect for Indian businesses targeting local audiences.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-full">Starting ₹999/month</span>
              <span className="px-4 py-2 bg-neutral-800 text-white text-sm rounded-full">15+ Indian Languages</span>
              <span className="px-4 py-2 bg-neutral-700 text-white text-sm rounded-full">SEO Optimized</span>
              <span className="px-4 py-2 bg-neutral-600 text-white text-sm rounded-full">60% Faster</span>
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

      {/* Content Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-12">
            Content We Create
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {contentTypes.map((type, i) => (
              <div key={i} className="border border-neutral-200 rounded-lg p-6 hover:border-neutral-400 transition-colors">
                <span className="text-3xl mb-3 block">{type.icon}</span>
                <h3 className="font-medium text-neutral-900 mb-2">{type.title}</h3>
                <p className="text-sm text-neutral-500 mb-3">{type.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-neutral-400">{type.length}</span>
                  <span className="text-xs font-medium text-neutral-900">{type.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Supported */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-4">
            Indian Languages Supported
          </h2>
          <p className="text-center text-neutral-500 mb-12 max-w-2xl mx-auto">
            Reach your audience in their native language. We create content in 15+ Indian languages with cultural context.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {languages.map((lang, i) => (
              <div key={i} className="bg-white border border-neutral-200 rounded-lg p-4">
                <h3 className="font-medium text-neutral-900 mb-1">{lang.name}</h3>
                <p className="text-xs text-neutral-500">{lang.regions}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-neutral-400 text-center mt-6">
            *Additional languages available on request
          </p>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-['Inter'] text-4xl font-light text-neutral-900">Content Packages</h2>
            <p className="text-neutral-500 mt-2">Choose the plan that fits your content needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentPackages.map((pkg, i) => (
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
                  <p className="text-xs text-neutral-500 mb-1">{pkg.words} / month</p>
                  <p className="text-xs text-neutral-500 mb-1">{pkg.articles}</p>
                  <p className="text-xs text-neutral-500 mb-4">Setup: {pkg.setup}</p>
                  <p className="text-xs text-neutral-400 mb-4">⏱️ {pkg.commitment}</p>
                  {pkg.note && (
                    <p className="text-xs text-neutral-500 mb-4 italic">{pkg.note}</p>
                  )}
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="text-xs text-neutral-600 flex items-start">
                        <span className="text-neutral-400 mr-2">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/contact?service=ai-content-${pkg.name.toLowerCase()}`} 
                        className="block w-full py-2 bg-neutral-900 text-white text-sm text-center rounded hover:bg-neutral-800">
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-2xl font-light text-center text-neutral-900 mb-8">
            Industries We Create Content For
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {industries.map((industry, i) => (
              <span key={i} className="px-4 py-2 bg-white text-neutral-700 text-sm rounded-full border border-neutral-200">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
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

      {/* Tools We Use */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-2xl font-light text-center text-neutral-900 mb-8">
            AI Tools & Platforms
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {tools.map((tool, i) => (
              <span key={i} className="px-4 py-2 bg-white text-neutral-700 text-sm rounded-full border border-neutral-200">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Pricing Table */}
      <section className="py-16 bg-white border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Inter'] text-2xl font-light text-center text-neutral-900 mb-8">
            Individual Content Pricing
          </h2>
          <div className="bg-neutral-50 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-neutral-100">
                <tr>
                  <th className="px-6 py-3 text-left text-neutral-600">Content Type</th>
                  <th className="px-6 py-3 text-left text-neutral-600">Word Count</th>
                  <th className="px-6 py-3 text-left text-neutral-600">Price</th>
                  <th className="px-6 py-3 text-left text-neutral-600">Delivery</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="px-6 py-3 text-neutral-900">Blog Post</td>
                  <td className="px-6 py-3 text-neutral-500">1000 words</td>
                  <td className="px-6 py-3 text-neutral-900">₹399</td>
                  <td className="px-6 py-3 text-neutral-500">2 days</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-neutral-900">Website Page</td>
                  <td className="px-6 py-3 text-neutral-500">500 words</td>
                  <td className="px-6 py-3 text-neutral-900">₹499</td>
                  <td className="px-6 py-3 text-neutral-500">2 days</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-neutral-900">Product Description</td>
                  <td className="px-6 py-3 text-neutral-500">150 words</td>
                  <td className="px-6 py-3 text-neutral-900">₹99</td>
                  <td className="px-6 py-3 text-neutral-500">1 day</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-neutral-900">Social Media Post</td>
                  <td className="px-6 py-3 text-neutral-500">100 words</td>
                  <td className="px-6 py-3 text-neutral-900">₹49</td>
                  <td className="px-6 py-3 text-neutral-500">12 hours</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-neutral-900">Email Newsletter</td>
                  <td className="px-6 py-3 text-neutral-500">500 words</td>
                  <td className="px-6 py-3 text-neutral-900">₹399</td>
                  <td className="px-6 py-3 text-neutral-500">1 day</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-neutral-400 text-center mt-4">
            *Bulk orders get 10-30% discount • 15+ Indian languages available
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-12">
            Common Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
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
            Ready to scale your content?
          </h2>
          <p className="text-neutral-300 mb-8">Get 500 words free trial • No credit card required</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-white text-neutral-900 text-sm rounded hover:bg-neutral-100">
              Claim Free Trial
            </Link>
            {/* <Link href="/portfolio" className="px-8 py-3 border border-white text-white text-sm rounded hover:bg-white hover:text-neutral-900">
              View Content Samples
            </Link> */}
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-neutral-500">
            <span>📞 Call: +91 8810688975</span>
            <span>📧 rajputdev1083@gmail.com</span>
          </div>
        </div>
      </section>

      <CityLinks />
    </main>
  );
}