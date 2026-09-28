// app/social-media-management/page.jsx
import Link from "next/link";
import CityLinks from "@/utlls/CityLinks";

export const metadata = {
  title: "Social Media Management | AV Development - Facebook, Instagram, LinkedIn",
  description: "Professional social media management services. Content creation, posting, engagement, and growth strategies for Facebook, Instagram, LinkedIn, and more. Starting from ₹12,000/month.",
  keywords: "social media management, social media marketing, Instagram management, Facebook management, LinkedIn marketing, content creation, social media agency",
  openGraph: {
    title: "Social Media Management - Grow Your Online Presence",
    description: "Professional social media management that builds community and drives engagement.",
  },
};

const packages = [
  {
    name: "Starter",
    price: "₹12,000",
    duration: "per month",
    commitment: "3 months",
    platforms: "2 platforms",
    posts: "12 posts/month",
    features: [
      "Profile optimization",
      "Content calendar",
      "12 custom posts",
      "Stories (8/month)",
      "Hashtag research",
      "Community management",
      "Monthly reporting",
      "WhatsApp support"
    ],
    ideal: "Small businesses, Local shops",
    popular: false
  },
  {
    name: "Growth",
    price: "₹18,000",
    duration: "per month",
    commitment: "6 months",
    platforms: "3 platforms",
    posts: "20 posts/month",
    features: [
      "Everything in Starter",
      "20 custom posts",
      "Stories (12/month)",
      "Reels/Short videos (4)",
      "Competitor analysis",
      "Engagement tracking",
      "Influencer outreach",
      "Bi-weekly strategy",
      "Priority support"
    ],
    ideal: "Growing brands, E-commerce",
    popular: true
  },
  {
    name: "Premium",
    price: "₹25,000",
    duration: "per month",
    commitment: "6 months",
    platforms: "4 platforms",
    posts: "30 posts/month",
    features: [
      "Everything in Growth",
      "30 custom posts",
      "Stories (20/month)",
      "Reels/Short videos (8)",
      "Giveaway management",
      "User-generated content",
      "Paid ad guidance",
      "Weekly strategy calls",
      "Dedicated manager"
    ],
    ideal: "Established brands",
    popular: false
  },
  {
    name: "Enterprise",
    price: "Custom",
    duration: "per month",
    commitment: "12 months",
    platforms: "All platforms",
    posts: "Unlimited",
    features: [
      "Custom strategy",
      "Content production",
      "Video series",
      "Influencer campaigns",
      "Crisis management",
      "Advanced analytics",
      "Team training",
      "24/7 priority support"
    ],
    ideal: "Large enterprises",
    popular: false
  }
];

const platforms = [
  {
    name: "Instagram",
    icon: "📷",
    audience: "18-34 age group",
    content: ["Feed posts", "Stories", "Reels", "IGTV"]
  },
  {
    name: "Facebook",
    icon: "📘",
    audience: "25-55 age group",
    content: ["Page posts", "Stories", "Live videos", "Events"]
  },
  {
    name: "LinkedIn",
    icon: "💼",
    audience: "25-55 professionals",
    content: ["Company updates", "Articles", "Thought leadership", "Jobs"]
  },
  {
    name: "Twitter/X",
    icon: "🐦",
    audience: "18-45 news-focused",
    content: ["Tweets", "Threads", "Polls", "Engagement"]
  },
  {
    name: "YouTube",
    icon: "▶️",
    audience: "All ages",
    content: ["Videos", "Shorts", "Live streams", "Community"]
  },
  {
    name: "Pinterest",
    icon: "📌",
    audience: "25-45 female skew",
    content: ["Pins", "Boards", "Idea pins", "Shopping"]
  }
];

const services = [
  {
    icon: "📝",
    title: "Content Creation",
    desc: "Custom graphics, photos, and videos"
  },
  {
    icon: "📅",
    title: "Content Calendar",
    desc: "Strategic posting schedule"
  },
  {
    icon: "💬",
    title: "Community Management",
    desc: "Respond to comments & messages"
  },
  {
    icon: "📈",
    title: "Growth Strategy",
    desc: "Follower growth & engagement"
  },
  {
    icon: "🔍",
    title: "Hashtag Research",
    desc: "Reach new audiences"
  },
  {
    icon: "📊",
    title: "Analytics",
    desc: "Track performance & ROI"
  },
  {
    icon: "🤝",
    title: "Influencer Outreach",
    desc: "Connect with relevant creators"
  },
  {
    icon: "🎁",
    title: "Giveaways",
    desc: "Run contests & promotions"
  }
];

const benefits = [
  { metric: "3x", label: "Higher engagement" },
  { metric: "24/7", label: "Community monitoring" },
  { metric: "50+", label: "Brands managed" },
  { metric: "10K+", label: "Posts created" }
];

const process = [
  { step: "01", title: "Audit", desc: "Review current presence" },
  { step: "02", title: "Strategy", desc: "Define voice & content" },
  { step: "03", title: "Create", desc: "Design & write content" },
  { step: "04", title: "Schedule", desc: "Plan posting calendar" },
  { step: "05", title: "Engage", desc: "Respond & interact" },
  { step: "06", title: "Report", desc: "Monthly performance" }
];

export default function SocialMediaManagementPage() {
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
            <span className="text-neutral-800">social-media-management</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-['Inter'] text-5xl md:text-6xl font-light text-neutral-900 mb-6">
              Social Media Management
              <span className="block font-medium italic text-neutral-500 text-4xl mt-2">Build your community</span>
            </h1>
            <p className="text-lg text-neutral-500 mb-8">
              Consistent, engaging social media presence across all platforms. 
              Content creation, posting, community management, and growth strategies.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-full">Starting ₹12,000/mo</span>
              <span className="px-4 py-2 bg-neutral-800 text-white text-sm rounded-full">3x higher engagement</span>
              <span className="px-4 py-2 bg-neutral-700 text-white text-sm rounded-full">All platforms</span>
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

      {/* Platforms */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-4">
            Platforms We Manage
          </h2>
          <p className="text-center text-neutral-500 max-w-2xl mx-auto mb-12">
            We handle all major social platforms
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, i) => (
              <div key={i} className="border border-neutral-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{platform.icon}</span>
                  <h3 className="font-medium text-neutral-900 text-lg">{platform.name}</h3>
                </div>
                <p className="text-xs text-neutral-400 mb-3">Audience: {platform.audience}</p>
                <div className="flex flex-wrap gap-2">
                  {platform.content.map((item, j) => (
                    <span key={j} className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-12">
            What's Included
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-white border border-neutral-200 rounded-lg p-6">
                <span className="text-3xl mb-3 block">{service.icon}</span>
                <h3 className="font-medium text-neutral-900 mb-2">{service.title}</h3>
                <p className="text-sm text-neutral-500">{service.desc}</p>
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
            <p className="text-neutral-500 mt-2">Month-to-month • Cancel anytime</p>
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
                  <div className="flex justify-between mb-4 text-sm">
                    <span className="text-neutral-600">{pkg.platforms}</span>
                    <span className="text-neutral-600">{pkg.posts}</span>
                  </div>
                  <p className="text-xs text-neutral-500 mb-4">⏱️ {pkg.commitment} minimum</p>
                  
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="text-xs text-neutral-600 flex items-start">
                        <span className="text-neutral-400 mr-2">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/contact?service=social-${pkg.name.toLowerCase()}`} 
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

      {/* Content Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-2xl font-light text-center text-neutral-900 mb-8">
            Content We Create
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Photos", "Graphics", "Videos", "Reels", "Stories", "Carousels",
              "Infographics", "Quotes", "Polls", "Questions", "Contests",
              "Behind the scenes", "User generated", "Testimonials", "Product shots",
              "Tutorials", "Announcements", "Events", "Blog links", "Memes"
            ].map((type, i) => (
              <span key={i} className="px-4 py-2 bg-neutral-100 text-neutral-700 text-sm rounded-full">
                {type}
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
              { q: "Which platforms should I be on?", a: "We recommend based on your audience. Instagram for B2C, LinkedIn for B2B, Facebook for local business." },
              { q: "Do you create the content?", a: "Yes! We create all graphics, write captions, and produce videos as part of the package." },
              { q: "How many posts should I post?", a: "Consistency matters more than frequency. Our packages offer 12-30 posts/month based on your needs." },
              { q: "Will I see follower growth?", a: "Yes, consistent posting and engagement typically grows followers 10-20% monthly." }
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
            Ready to grow on social?
          </h2>
          <p className="text-neutral-300 mb-8">Get a free social media audit and content strategy</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-white text-neutral-900 text-sm rounded hover:bg-neutral-100">
              Free Audit
            </Link>
            <Link href="/portfolio" className="px-8 py-3 border border-white text-white text-sm rounded hover:bg-white hover:text-neutral-900">
              View Examples
            </Link>
          </div>
          <p className="text-neutral-500 text-sm mt-6">📞 Call: +91 97186 59236</p>
        </div>
      </section>

      <CityLinks />
    </main>
  );
}