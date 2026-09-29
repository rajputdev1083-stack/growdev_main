// app/poster-making/page.jsx
import Link from "next/link";
import CityLinks from "@/utlls/CityLinks";

export const metadata = {
  title: "Poster Making & Graphic Design | Grow Development - Social Media Posters, Business Flyers India",
  description: "Professional poster design for Indian businesses. Social media posts, business flyers, event posters, festival greetings, and marketing collateral. Starting from ₹199/poster.",
  keywords: "poster design India, graphic design services, social media posters, business flyers, event posters, festival posters, Diwali poster design, marketing collateral India",
  openGraph: {
    title: "Poster Making - Eye-Catching Designs for Indian Brands",
    description: "Professional poster designs that stop the scroll. Starting at ₹199/poster.",
  },
};

const posterPackages = [
  {
    name: "Basic",
    price: "₹199",
    setup: "Per design",
    duration: "per poster",
    designs: "1 concept",
    features: [
      "Social media post",
      "Instagram/Facebook size",
      "Stock images included",
      "2 rounds of revision",
      "24hr delivery",
      "JPG + PNG format",
      "Basic text editing",
      "Email support"
    ],
    ideal: "Daily social posts",
    commitment: "Pay per design"
  },
  {
    name: "Professional",
    price: "₹499",
    setup: "Per design",
    duration: "per poster",
    designs: "2-3 concepts",
    features: [
      "Everything in Basic",
      "Multiple sizes included",
      "Custom illustrations",
      "Brand colors matched",
      "Print-ready files",
      "Source file (PSD/AI)",
      "4 rounds of revision",
      "12hr delivery",
      "Premium stock images",
      "Priority support"
    ],
    popular: true,
    ideal: "Business flyers, Events",
    commitment: "Bulk discounts available"
  },
  {
    name: "Premium",
    price: "₹999",
    setup: "Per design",
    duration: "per poster",
    designs: "3-5 concepts",
    features: [
      "Everything in Professional",
      "Custom photography",
      "Advanced typography",
      "Motion graphics option",
      "Brand guideline creation",
      "Unlimited revisions",
      "6hr delivery",
      "All file formats",
      "Dedicated designer"
    ],
    ideal: "Festival campaigns, Brand launches",
    commitment: "Priority queue"
  },
  {
    name: "Bulk Package",
    price: "₹4,999",
    setup: "Monthly retainer",
    duration: "per month",
    designs: "20 posters",
    features: [
      "20 custom posters/month",
      "Mix of sizes/formats",
      "Social media optimized",
      "Festive specials included",
      "Same-day delivery",
      "Unlimited revisions",
      "WhatsApp support",
      "Content calendar",
      "Dedicated designer"
    ],
    ideal: "Agencies, Small businesses",
    commitment: "3 months minimum"
  }
];

const posterTypes = [
  {
    icon: "📱",
    title: "Social Media Posts",
    desc: "Instagram, Facebook, LinkedIn",
    formats: "1080x1080, 1080x1350",
    price: "₹199 each"
  },
  {
    icon: "🎉",
    title: "Event Posters",
    desc: "Concerts, Weddings, Parties",
    formats: "A4, A3, Custom",
    price: "₹499 each"
  },
  {
    icon: "🏪",
    title: "Business Flyers",
    desc: "Offers, Promotions, Sales",
    formats: "A5, A4, DL",
    price: "₹399 each"
  },
  {
    icon: "🪔",
    title: "Festival Greetings",
    desc: "Diwali, Holi, Eid, Christmas",
    formats: "Social + Print",
    price: "₹599 each"
  },
  {
    icon: "🍔",
    title: "Restaurant Menus",
    desc: "Food menus, Specials boards",
    formats: "A5, A4, Standing",
    price: "₹799 each"
  },
  {
    icon: "🏷️",
    title: "Product Promos",
    desc: "Launch posters, Offers",
    formats: "Social + Print",
    price: "₹299 each"
  },
  {
    icon: "🎓",
    title: "Educational Posters",
    desc: "Workshops, Courses, Seminars",
    formats: "A4, A3, Roll-ups",
    price: "₹449 each"
  },
  {
    icon: "🏥",
    title: "Healthcare Flyers",
    desc: "Clinic promos, Health camps",
    formats: "A5, A4",
    price: "₹349 each"
  },
  {
    icon: "🏢",
    title: "Corporate Posters",
    desc: "Hiring, Announcements",
    formats: "A4, A3",
    price: "₹499 each"
  },
  {
    icon: "🛍️",
    title: "Retail Offers",
    desc: "Sale posters, Discount cards",
    formats: "A4, A3, Standees",
    price: "₹399 each"
  },
  {
    icon: "🎬",
    title: "Movie/Theatre Posters",
    desc: "Film promos, Play posters",
    formats: "A3, A2, Large",
    price: "₹999 each"
  },
  {
    icon: "📊",
    title: "Infographics",
    desc: "Data visualization",
    formats: "Web + Print",
    price: "₹699 each"
  }
];

const festivals = [
  { name: "Diwali", season: "Oct-Nov", popular: "Lakshmi Pujan, Greetings" },
  { name: "Holi", season: "March", popular: "Holi offers, Party invites" },
  { name: "Dussehra", season: "Oct", popular: "Festival sales" },
  { name: "Eid", season: "Varies", popular: "Eid Mubarak, Offers" },
  { name: "Christmas", season: "Dec", popular: "New Year, Xmas sales" },
  { name: "Pongal", season: "Jan", popular: "Harvest festival promos" },
  { name: "Ganesh Chaturthi", season: "Aug-Sep", popular: "Festival greetings" },
  { name: "Navratri/Durga Puja", season: "Sep-Oct", popular: "Pandal invites, Offers" },
  { name: "Raksha Bandhan", season: "Aug", popular: "Gifting promos" },
  { name: "Independence Day", season: "Aug 15", popular: "Patriotic campaigns" },
  { name: "Republic Day", season: "Jan 26", popular: "Sales & offers" },
  { name: "New Year", season: "Jan 1", popular: "Party invites, Resolutions" }
];

const benefits = [
  { metric: "24hr", label: "Typical turnaround" },
  { metric: "1000+", label: "Posters designed" },
  { metric: "12+", label: "Industries served" },
  { metric: "Unlimited", label: "Revisions on premium" }
];

const process = [
  { step: "01", title: "Brief", desc: "Share your idea/reference" },
  { step: "02", title: "Draft", desc: "Initial concepts" },
  { step: "03", title: "Feedback", desc: "Your inputs" },
  { step: "04", title: "Revisions", desc: "Fine-tuning" },
  { step: "05", title: "Finalize", desc: "Approve design" },
  { step: "06", title: "Delivery", desc: "All formats" }
];

const industries = [
  "Restaurants", "Retail", "Education", "Healthcare", "Real Estate", "Events",
  "Fashion", "Beauty", "Fitness", "Tech", "Entertainment", "Non-profit",
  "Hotels", "Travel", "Automotive", "Finance", "Legal", "Consulting",
  "Photography", "Wedding Planning", "Cafes", "Boutiques", "Gyms", "Salons"
];

const formats = [
  { name: "Instagram Post", size: "1080x1080 px", use: "Social media" },
  { name: "Instagram Story", size: "1080x1920 px", use: "Stories, Reels covers" },
  { name: "Facebook Cover", size: "851x315 px", use: "Profile covers" },
  { name: "A4 Flyer", size: "210x297 mm", use: "Print handouts" },
  { name: "A3 Poster", size: "297x420 mm", use: "Wall posters" },
  { name: "Roll-up Banner", size: "850x2000 mm", use: "Events, Trade shows" },
  { name: "Business Card", size: "90x50 mm", use: "Networking" },
  { name: "Brochure (Tri-fold)", size: "A4 folded", use: "Service catalogs" }
];

const software = [
  "Adobe Photoshop", "Adobe Illustrator", "Canva", "Figma", "CorelDRAW",
  "Procreate", "Affinity Designer", "InDesign", "After Effects", "Premiere Pro"
];

export default function PosterMakingPage() {
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
            <span className="text-neutral-800">poster-making</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-['Inter'] text-5xl md:text-6xl font-light text-neutral-900 mb-6">
              Poster Making
              <span className="block font-medium italic text-neutral-500 text-4xl mt-2">Designs That Stop The Scroll</span>
            </h1>
            <p className="text-lg text-neutral-500 mb-8">
              Eye-catching posters for social media, events, and print. From festive greetings to 
              business flyers, we create designs that grab attention and drive action.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-full">Starting ₹199/poster</span>
              <span className="px-4 py-2 bg-neutral-800 text-white text-sm rounded-full">24hr Delivery</span>
              <span className="px-4 py-2 bg-neutral-700 text-white text-sm rounded-full">Unlimited Revisions*</span>
              <span className="px-4 py-2 bg-neutral-600 text-white text-sm rounded-full">Festival Specialists</span>
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

      {/* Poster Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-12">
            What We Design
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {posterTypes.map((type, i) => (
              <div key={i} className="border border-neutral-200 rounded-lg p-6 hover:border-neutral-400 transition-colors">
                <span className="text-3xl mb-3 block">{type.icon}</span>
                <h3 className="font-medium text-neutral-900 mb-2">{type.title}</h3>
                <p className="text-sm text-neutral-500 mb-3">{type.desc}</p>
                <p className="text-xs text-neutral-400 mb-2">{type.formats}</p>
                <div className="flex justify-end">
                  <span className="text-xs font-medium text-neutral-900">{type.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Festival Special */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-4">
            Indian Festival Specialists
          </h2>
          <p className="text-center text-neutral-500 mb-12 max-w-2xl mx-auto">
            From Diwali to Eid, Pongal to Durga Puja - we create culturally relevant designs that resonate with Indian audiences.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {festivals.map((festival, i) => (
              <div key={i} className="bg-white border border-neutral-200 rounded-lg p-4">
                <h3 className="font-medium text-neutral-900 mb-1">{festival.name}</h3>
                <p className="text-xs text-neutral-400 mb-2">{festival.season}</p>
                <p className="text-xs text-neutral-500">{festival.popular}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-neutral-400 text-center mt-6">
            *Festive season bookings recommended 2 weeks in advance
          </p>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-['Inter'] text-4xl font-light text-neutral-900">Design Packages</h2>
            <p className="text-neutral-500 mt-2">Pay per design or save with bulk packages</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {posterPackages.map((pkg, i) => (
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
                  <p className="text-xs text-neutral-500 mb-1">{pkg.designs}</p>
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
                  <Link href={`/contact?service=poster-${pkg.name.toLowerCase().replace(' ', '-')}`} 
                        className="block w-full py-2 bg-neutral-900 text-white text-sm text-center rounded hover:bg-neutral-800">
                    Order Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats & Sizes */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-12">
            Available Formats
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {formats.map((format, i) => (
              <div key={i} className="bg-white border border-neutral-200 rounded-lg p-4">
                <h3 className="font-medium text-neutral-900 mb-1">{format.name}</h3>
                <p className="text-xs text-neutral-500 mb-1">{format.size}</p>
                <p className="text-xs text-neutral-400">{format.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-2xl font-light text-center text-neutral-900 mb-8">
            Industries We Design For
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {industries.map((industry, i) => (
              <span key={i} className="px-4 py-2 bg-neutral-100 text-neutral-700 text-sm rounded-full">
                {industry}
              </span>
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

      {/* Tools We Use */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-2xl font-light text-center text-neutral-900 mb-8">
            Design Tools
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {software.map((tool, i) => (
              <span key={i} className="px-4 py-2 bg-neutral-100 text-neutral-700 text-sm rounded-full">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Pricing Table */}
      <section className="py-16 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Inter'] text-2xl font-light text-center text-neutral-900 mb-8">
            Quick Price Guide
          </h2>
          <div className="bg-white rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-neutral-100">
                <tr>
                  <th className="px-6 py-3 text-left text-neutral-600">Poster Type</th>
                  <th className="px-6 py-3 text-left text-neutral-600">Typical Uses</th>
                  <th className="px-6 py-3 text-left text-neutral-600">Starting Price</th>
                  <th className="px-6 py-3 text-left text-neutral-600">Delivery</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="px-6 py-3 text-neutral-900">Social Media Post</td>
                  <td className="px-6 py-3 text-neutral-500">Daily content</td>
                  <td className="px-6 py-3 text-neutral-900">₹199</td>
                  <td className="px-6 py-3 text-neutral-500">24 hrs</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-neutral-900">Business Flyer</td>
                  <td className="px-6 py-3 text-neutral-500">Print distribution</td>
                  <td className="px-6 py-3 text-neutral-900">₹399</td>
                  <td className="px-6 py-3 text-neutral-500">2 days</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-neutral-900">Event Poster</td>
                  <td className="px-6 py-3 text-neutral-500">Weddings, Parties</td>
                  <td className="px-6 py-3 text-neutral-900">₹499</td>
                  <td className="px-6 py-3 text-neutral-500">2 days</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-neutral-900">Festival Greeting</td>
                  <td className="px-6 py-3 text-neutral-500">Diwali, Holi, Eid</td>
                  <td className="px-6 py-3 text-neutral-900">₹599</td>
                  <td className="px-6 py-3 text-neutral-500">2 days</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-neutral-900">Restaurant Menu</td>
                  <td className="px-6 py-3 text-neutral-500">Food & beverage</td>
                  <td className="px-6 py-3 text-neutral-900">₹799</td>
                  <td className="px-6 py-3 text-neutral-500">3 days</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-neutral-400 text-center mt-4">
            *Bulk orders (5+ designs) get 15% discount • Custom sizes available
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-12">
            Common Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
              <h3 className="font-medium text-neutral-900 mb-1">What do I need to provide?</h3>
              <p className="text-sm text-neutral-500">Just your idea, text content, and any brand colors/logos. We handle the rest.</p>
            </div>
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
              <h3 className="font-medium text-neutral-900 mb-1">How many revisions do I get?</h3>
              <p className="text-sm text-neutral-500">Basic: 2 rounds, Professional: 4 rounds, Premium: Unlimited revisions.</p>
            </div>
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
              <h3 className="font-medium text-neutral-900 mb-1">Do you design for print?</h3>
              <p className="text-sm text-neutral-500">Yes! We provide print-ready files with CMYK colors, bleeds, and proper resolution.</p>
            </div>
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
              <h3 className="font-medium text-neutral-900 mb-1">What about festival special designs?</h3>
              <p className="text-sm text-neutral-500">We specialize in Indian festivals. Book at least 2 weeks before major festivals.</p>
            </div>
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
              <h3 className="font-medium text-neutral-900 mb-1">Can you match my brand style?</h3>
              <p className="text-sm text-neutral-500">Absolutely. Share your brand guidelines or existing materials, and we'll match perfectly.</p>
            </div>
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
              <h3 className="font-medium text-neutral-900 mb-1">What file formats do I get?</h3>
              <p className="text-sm text-neutral-500">JPG, PNG for web. PDF, AI, PSD for print. Source files included in Premium package.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-['Inter'] text-3xl font-light text-white mb-4">
            Need a stunning poster?
          </h2>
          <p className="text-neutral-300 mb-8">Get 20% off on your first order • Free concept sketch</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-white text-neutral-900 text-sm rounded hover:bg-neutral-100">
              Get Free Quote
            </Link>
            
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-neutral-500">
            <span>📞 Call: +91 97186 59236</span>
            <span>📧 design@avdevelopment.com</span>
            <span>💬 WhatsApp: +91 97186 59236</span>
          </div>
          <p className="text-xs text-neutral-700 mt-4">*Festival bookings: Diwali, Holi, Eid, Pongal, Christmas, New Year</p>
        </div>
      </section>

      <CityLinks />
    </main>
  );
}