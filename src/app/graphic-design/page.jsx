// app/graphic-design/page.jsx
import Link from "next/link";
import CityLinks from "@/utlls/CityLinks";

export const metadata = {
  title: "Graphic Design Services | Grow Development - Logo, Branding, Marketing Collateral India",
  description: "Professional graphic design for Indian businesses. Logo design, branding, marketing materials, social media graphics, print design, and complete brand identity. Starting from ₹499.",
  keywords: "graphic design India, logo design, branding agency, marketing collateral, print design, social media graphics, brand identity, packaging design India",
  openGraph: {
    title: "Graphic Design - Complete Brand Identity Solutions",
    description: "Professional graphic design that builds brand recognition. Starting at ₹499.",
  },
};

const designPackages = [
  {
    name: "Logo Design",
    price: "₹999",
    setup: "One-time",
    duration: "per logo",
    concepts: "3-5 concepts",
    features: [
      "3 unique concepts",
      "Unlimited revisions",
      "Vector files (AI, EPS)",
      "PNG, JPG, SVG formats",
      "Color variations",
      "Black & white version",
      "Source files included",
      "2 business days delivery",
      "Commercial license"
    ],
    ideal: "New businesses, Rebranding",
    commitment: "One-time payment"
  },
  {
    name: "Brand Identity",
    price: "₹4,999",
    setup: "One-time",
    duration: "complete package",
    concepts: "Complete kit",
    features: [
      "Everything in Logo",
      "Brand color palette",
      "Typography selection",
      "Business card design",
      "Letterhead design",
      "Email signature",
      "Social media kit",
      "Brand guidelines PDF",
      "5 days delivery"
    ],
    popular: true,
    ideal: "Startups, Small businesses",
    commitment: "Complete brand kit"
  },
  {
    name: "Marketing Collateral",
    price: "₹7,999",
    setup: "One-time",
    duration: "per set",
    concepts: "10+ items",
    features: [
      "Everything in Identity",
      "Brochure/Flyer design",
      "Poster design (3)",
      "Social media templates",
      "Presentation deck",
      "Roll-up banner",
      "Product packaging",
      "Merchandise mockups",
      "7 days delivery"
    ],
    ideal: "Product launches, Events",
    commitment: "Complete set"
  },
  {
    name: "Monthly Retainer",
    price: "₹9,999",
    setup: "Monthly",
    duration: "per month",
    concepts: "Unlimited requests",
    features: [
      "Priority support",
      "Unlimited revisions",
      "24hr turnaround",
      "All design types",
      "Dedicated designer",
      "Weekly strategy call",
      "Brand guardian",
      "WhatsApp priority",
      "Source files included"
    ],
    ideal: "Agencies, Growing brands",
    commitment: "3 months minimum"
  }
];

const designServices = [
  {
    icon: "🎨",
    title: "Logo Design",
    desc: "Memorable brand marks",
    includes: "3 concepts, vector files",
    price: "₹999"
  },
  {
    icon: "🏢",
    title: "Brand Identity",
    desc: "Complete visual identity",
    includes: "Logo, colors, fonts, guidelines",
    price: "₹4,999"
  },
  {
    icon: "📇",
    title: "Business Cards",
    desc: "Professional networking",
    includes: "Double-sided, premium finish",
    price: "₹499/side"
  },
  {
    icon: "📑",
    title: "Stationery Design",
    desc: "Letterhead, envelopes, invoices",
    includes: "Brand consistency",
    price: "₹999/set"
  },
  {
    icon: "📊",
    title: "Presentation Decks",
    desc: "Investor & sales decks",
    includes: "10-15 slides",
    price: "₹2,499"
  },
  {
    icon: "📱",
    title: "Social Media Kit",
    desc: "All platform graphics",
    includes: "Profile, cover, post templates",
    price: "₹1,999"
  },
  {
    icon: "📦",
    title: "Packaging Design",
    desc: "Product boxes, labels",
    includes: "3D mockups, print ready",
    price: "₹2,999"
  },
  {
    icon: "📰",
    title: "Brochure Design",
    desc: "Tri-fold, bi-fold",
    includes: "Print ready, mockups",
    price: "₹1,499"
  },
  {
    icon: "🎪",
    title: "Roll-up Banners",
    desc: "Event & trade show",
    includes: "Standee design",
    price: "₹999"
  },
  {
    icon: "👕",
    title: "Merchandise Design",
    desc: "T-shirts, mugs, bags",
    includes: "Print ready artwork",
    price: "₹499/item"
  },
  {
    icon: "📧",
    title: "Email Templates",
    desc: "Newsletter design",
    includes: "HTML ready",
    price: "₹1,499"
  },
  {
    icon: "📄",
    title: "Invoice Templates",
    desc: "Professional billing",
    includes: "Editable format",
    price: "₹499"
  }
];

const industries = [
  "Technology", "E-commerce", "Healthcare", "Education", "Real Estate", "Hospitality",
  "Fashion", "Beauty", "Fitness", "Food & Beverage", "Retail", "Manufacturing",
  "Finance", "Legal", "Consulting", "Non-profit", "Entertainment", "Sports",
  "Travel", "Automotive", "Architecture", "Interior Design", "Photography", "Wedding"
];

const benefits = [
  { metric: "500+", label: "Brands designed" },
  { metric: "98%", label: "Client retention" },
  { metric: "24hr", label: "Typical turnaround" },
  { metric: "∞", label: "Revisions on premium" }
];

const process = [
  { step: "01", title: "Discovery", desc: "Understand your brand" },
  { step: "02", title: "Research", desc: "Market & competitor analysis" },
  { step: "03", title: "Concepts", desc: "Initial design ideas" },
  { step: "04", title: "Feedback", desc: "Your inputs & revisions" },
  { step: "05", title: "Refine", desc: "Perfect the design" },
  { step: "06", title: "Deliver", desc: "All file formats" }
];

const deliverables = [
  {
    category: "Logo Files",
    items: ["AI (Vector)", "EPS (Vector)", "SVG (Web)", "PNG (Transparent)", "JPG (Print)", "PDF (Document)"]
  },
  {
    category: "Brand Guidelines",
    items: ["Color Codes (CMYK, RGB, HEX)", "Typography Rules", "Logo Usage Guide", "Brand Voice", "Do's & Don'ts"]
  },
  {
    category: "Print Files",
    items: ["CMYK Color Mode", "300 DPI Resolution", "Bleed Marks", "Crop Marks", "Print-Ready PDF"]
  },
  {
    category: "Digital Files",
    items: ["RGB Color Mode", "72 DPI Web Optimized", "Social Media Sizes", "Email Signatures", "Website Assets"]
  }
];

const tools = [
  "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Adobe XD", "Figma",
  "CorelDRAW", "Canva Pro", "Sketch", "Affinity Designer", "Procreate",
  "Cinema 4D", "Blender", "After Effects", "Premiere Pro", "Lightroom"
];

const testimonials = [
  {
    quote: "AV Development created our complete brand identity. The logo and branding guidelines helped us look professional from day one.",
    author: "Priya Sharma",
    company: "The Urban Chai",
    location: "Delhi"
  },
  {
    quote: "Their packaging design for our product line was exceptional. Got us noticed on Amazon and local stores.",
    author: "Rahul Mehta",
    company: "Mehta Spices",
    location: "Mumbai"
  },
  {
    quote: "The monthly retainer works perfectly for our agency. Unlimited designs, quick turnaround, great quality.",
    author: "Amit Kumar",
    company: "Digital Growth Co.",
    location: "Bangalore"
  }
];

export default function GraphicDesignPage() {
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
            <span className="text-neutral-800">graphic-design</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-['Inter'] text-5xl md:text-6xl font-light text-neutral-900 mb-6">
              Graphic Design
              <span className="block font-medium italic text-neutral-500 text-4xl mt-2">Logo • Branding • Marketing</span>
            </h1>
            <p className="text-lg text-neutral-500 mb-8">
              Complete graphic design solutions for Indian businesses. From logo design to complete 
              brand identity, we create visuals that build recognition and trust.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-full">Starting ₹499</span>
              <span className="px-4 py-2 bg-neutral-800 text-white text-sm rounded-full">Unlimited Revisions</span>
              <span className="px-4 py-2 bg-neutral-700 text-white text-sm rounded-full">Vector Files Included</span>
              <span className="px-4 py-2 bg-neutral-600 text-white text-sm rounded-full">500+ Brands</span>
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

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-12">
            Design Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {designServices.map((service, i) => (
              <div key={i} className="border border-neutral-200 rounded-lg p-6 hover:border-neutral-400 transition-colors">
                <span className="text-3xl mb-3 block">{service.icon}</span>
                <h3 className="font-medium text-neutral-900 mb-2">{service.title}</h3>
                <p className="text-sm text-neutral-500 mb-2">{service.desc}</p>
                <p className="text-xs text-neutral-400 mb-3">{service.includes}</p>
                <div className="flex justify-end">
                  <span className="text-sm font-medium text-neutral-900">{service.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-['Inter'] text-4xl font-light text-neutral-900">Design Packages</h2>
            <p className="text-neutral-500 mt-2">Choose the right package for your business</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designPackages.map((pkg, i) => (
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
                  <p className="text-xs text-neutral-500 mb-1">{pkg.concepts}</p>
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
                  <Link href={`/contact?service=design-${pkg.name.toLowerCase().replace(' ', '-')}`} 
                        className="block w-full py-2 bg-neutral-900 text-white text-sm text-center rounded hover:bg-neutral-800">
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-2xl font-light text-center text-neutral-900 mb-8">
            Industries We Serve
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
            Our Design Process
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

      {/* Deliverables */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-12">
            What You Get
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverables.map((delivery, i) => (
              <div key={i} className="border border-neutral-200 rounded-lg p-6">
                <h3 className="font-medium text-neutral-900 mb-4">{delivery.category}</h3>
                <ul className="space-y-2">
                  {delivery.items.map((item, j) => (
                    <li key={j} className="text-xs text-neutral-600 flex items-start">
                      <span className="text-neutral-400 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-2xl font-light text-center text-neutral-900 mb-8">
            Design Tools We Use
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

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-12">
            Client Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="border border-neutral-200 rounded-lg p-6">
                <p className="text-sm text-neutral-600 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-medium text-neutral-900">{testimonial.author}</p>
                  <p className="text-xs text-neutral-500">{testimonial.company}</p>
                  <p className="text-xs text-neutral-400">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Pricing Table */}
      <section className="py-16 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-['Inter'] text-2xl font-light text-center text-neutral-900 mb-8">
            Individual Design Pricing
          </h2>
          <div className="bg-white rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-neutral-100">
                <tr>
                  <th className="px-6 py-3 text-left text-neutral-600">Service</th>
                  <th className="px-6 py-3 text-left text-neutral-600">Includes</th>
                  <th className="px-6 py-3 text-left text-neutral-600">Price</th>
                  <th className="px-6 py-3 text-left text-neutral-600">Delivery</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="px-6 py-3 text-neutral-900">Logo Design</td>
                  <td className="px-6 py-3 text-neutral-500">3 concepts, vector files</td>
                  <td className="px-6 py-3 text-neutral-900">₹999</td>
                  <td className="px-6 py-3 text-neutral-500">2 days</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-neutral-900">Business Card</td>
                  <td className="px-6 py-3 text-neutral-500">Double-sided, print ready</td>
                  <td className="px-6 py-3 text-neutral-900">₹499</td>
                  <td className="px-6 py-3 text-neutral-500">1 day</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-neutral-900">Brochure</td>
                  <td className="px-6 py-3 text-neutral-500">Tri-fold, print ready</td>
                  <td className="px-6 py-3 text-neutral-900">₹1,499</td>
                  <td className="px-6 py-3 text-neutral-500">3 days</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-neutral-900">Social Media Kit</td>
                  <td className="px-6 py-3 text-neutral-500">10+ templates</td>
                  <td className="px-6 py-3 text-neutral-900">₹1,999</td>
                  <td className="px-6 py-3 text-neutral-500">2 days</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-neutral-900">Packaging Design</td>
                  <td className="px-6 py-3 text-neutral-500">With 3D mockups</td>
                  <td className="px-6 py-3 text-neutral-900">₹2,999</td>
                  <td className="px-6 py-3 text-neutral-500">4 days</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-neutral-400 text-center mt-4">
            *Bulk orders get 15-25% discount • Custom quotes for large projects
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
              <h3 className="font-medium text-neutral-900 mb-1">How many logo concepts do I get?</h3>
              <p className="text-sm text-neutral-500">3-5 unique concepts based on your brief. You can mix elements from different concepts.</p>
            </div>
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
              <h3 className="font-medium text-neutral-900 mb-1">What file formats will I receive?</h3>
              <p className="text-sm text-neutral-500">Vector (AI, EPS), Web (SVG, PNG), Print (PDF, JPG). Source files included.</p>
            </div>
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
              <h3 className="font-medium text-neutral-900 mb-1">Do you provide branding guidelines?</h3>
              <p className="text-sm text-neutral-500">Yes! Our brand identity package includes complete guidelines for consistent usage.</p>
            </div>
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
              <h3 className="font-medium text-neutral-900 mb-1">Can you work with my existing brand?</h3>
              <p className="text-sm text-neutral-500">Absolutely. We can refresh your existing brand or create new materials matching your style.</p>
            </div>
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
              <h3 className="font-medium text-neutral-900 mb-1">What about print design?</h3>
              <p className="text-sm text-neutral-500">All print designs come with CMYK colors, 300 DPI, bleeds, and crop marks.</p>
            </div>
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
              <h3 className="font-medium text-neutral-900 mb-1">Do you offer rush delivery?</h3>
              <p className="text-sm text-neutral-500">Yes! 24hr rush delivery available at 50% extra charge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-['Inter'] text-3xl font-light text-white mb-4">
            Ready to build your brand?
          </h2>
          <p className="text-neutral-300 mb-8">Get 2 free logo concepts • No commitment required</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-white text-neutral-900 text-sm rounded hover:bg-neutral-100">
              Start Your Project
            </Link>
             
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-neutral-500">
            <span>📞 Call: +91 97186 59236</span>
            <span>📧 design@growdevelopment.com</span>
            <span>💬 WhatsApp: +91 97186 59236</span>
          </div>
          <p className="text-xs text-neutral-700 mt-4">*2 free concepts valid for first-time clients • No obligation to purchase</p>
        </div>
      </section>

      <CityLinks />
    </main>
  );
}