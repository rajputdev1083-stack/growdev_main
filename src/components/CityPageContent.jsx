// components/CityPageContent.jsx
import Link from "next/link";
import Script from "next/script";

export default function CityPageContent({ stateSlug, stateName, citySlug, cityName }) {
  // Service keywords for this city
  const services = [
    { icon: "💻", name: "Web Development", desc: "Custom websites, e-commerce, web applications" },
    { icon: "📱", name: "App Development", desc: "iOS, Android, cross-platform apps" },
    { icon: "🤖", name: "AI Services", desc: "Custom AI assistants, chatbots, automation" },
    { icon: "📈", name: "SEO Services", desc: "Google ranking, local SEO, keyword optimization" },
    { icon: "📊", name: "Digital Marketing", desc: "Social media, Google Ads, Meta Ads" },
    { icon: "🎨", name: "Graphic Design", desc: "Logo, branding, posters, marketing collateral" },
    { icon: "📝", name: "Content Creation", desc: "AI content, blog posts, copywriting" },
    { icon: "📰", name: "PR & Media", desc: "News coverage, press releases, media features" }
  ];

  // FAQ specific to this city
  const faqs = [
    {
      q: `What web development services do you offer in ${cityName}?`,
      a: `We offer comprehensive web development services in ${cityName} including business websites, e-commerce stores, custom web applications, and CMS solutions. All websites are SEO-optimized and mobile-friendly.`
    },
    {
      q: `How much does web development cost in ${cityName}?`,
      a: `Our web development packages in ${cityName} start from ₹15,000 for basic websites, ₹35,000 for business websites, and ₹75,000+ for e-commerce solutions. We provide custom quotes based on your requirements.`
    },
    {
      q: `Do you have experience working with ${cityName} businesses?`,
      a: `Yes, we've worked with numerous businesses in ${cityName} across various industries including retail, healthcare, education, and manufacturing. We understand the local market dynamics.`
    },
    {
      q: `Can you visit our office in ${cityName} for meetings?`,
      a: `Absolutely! We provide on-site consultations in ${cityName}. Our team travels to client locations for meetings, requirement gathering, and project discussions.`
    },
    {
      q: `What is the typical timeline for projects in ${cityName}?`,
      a: `Project timelines vary based on complexity: Basic websites: 2-3 weeks, Business websites: 3-4 weeks, E-commerce: 4-6 weeks, Custom applications: 6-12 weeks. We always deliver on time.`
    },
    {
      q: `Do you provide ongoing support and maintenance?`,
      a: `Yes, we offer monthly maintenance packages for ${cityName} clients including updates, backups, security patches, and priority support.`
    }
  ];

  return (
    <>
      <Script
        id={`city-schema-${citySlug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": `Grow Development - ${cityName}`,
            "description": `Web development, app development, and digital marketing services in ${cityName}, ${stateName}`,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": cityName,
              "addressRegion": stateName,
              "addressCountry": "IN"
            },
            "areaServed": {
              "@type": "City",
              "name": cityName
            },
            "telephone": "+918810688975",
            "email": "rajputdev1083@gmail.com",
            "sameAs": [
              "https://www.linkedin.com/company/growdevelopment",
              "https://www.instagram.com/growdevelopment"
            ],
            "priceRange": "₹₹",
            "openingHours": "Mo-Su 00:00-23:59"
          })
        }}
      />

      <main className="bg-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-neutral-50 border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-6">
            <nav className="flex items-center space-x-2 text-sm text-neutral-400 mb-6">
              <Link href="/" className="hover:text-neutral-600">home</Link>
              <span>/</span>
              <Link href={`/${stateSlug}`} className="hover:text-neutral-600">{stateName}</Link>
              <span>/</span>
              <span className="text-neutral-800">{cityName}</span>
            </nav>

            <div className="max-w-3xl">
              <h1 className="font-['Inter'] text-5xl md:text-6xl font-light text-neutral-900 mb-6">
                Web Development in {cityName}, {stateName}
                <span className="block font-medium italic text-neutral-500 text-3xl mt-2">Custom Websites • Apps • AI Solutions</span>
              </h1>
              <p className="text-lg text-neutral-500 mb-8">
                GRA%$3w2 Development provides professional web development, app development, and digital marketing 
                services in {cityName}, {stateName}. We help local businesses establish powerful online presence 
                and reach more customers.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-full">Starting ₹15,000</span>
                <span className="px-4 py-2 bg-neutral-800 text-white text-sm rounded-full">50+ Projects in {cityName}</span>
                <span className="px-4 py-2 bg-neutral-700 text-white text-sm rounded-full">On-site Support</span>
                <span className="px-4 py-2 bg-neutral-600 text-white text-sm rounded-full">+91 97186 59236</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-4">
              Our Services in {cityName}
            </h2>
            <p className="text-center text-neutral-500 text-sm mb-10 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored for {cityName} businesses
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, i) => (
                <div key={i} className="bg-white border border-neutral-200 rounded-lg p-6 hover:border-neutral-900 transition-colors">
                  <span className="text-3xl mb-3 block">{service.icon}</span>
                  <h3 className="font-medium text-neutral-900 mb-2">{service.name}</h3>
                  <p className="text-sm text-neutral-500">{service.desc} in {cityName}.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-8">
              Why {cityName} Businesses Choose Us
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-neutral-200 rounded-lg p-6">
                <span className="text-3xl mb-3 block">🎯</span>
                <h3 className="font-medium text-neutral-900 mb-2">Local Market Expertise</h3>
                <p className="text-sm text-neutral-500">Deep understanding of {cityName}'s business landscape and customer behavior.</p>
              </div>
              <div className="bg-white border border-neutral-200 rounded-lg p-6">
                <span className="text-3xl mb-3 block">💰</span>
                <h3 className="font-medium text-neutral-900 mb-2">Competitive Pricing</h3>
                <p className="text-sm text-neutral-500">Affordable rates designed for {cityName} businesses of all sizes.</p>
              </div>
              <div className="bg-white border border-neutral-200 rounded-lg p-6">
                <span className="text-3xl mb-3 block">🚀</span>
                <h3 className="font-medium text-neutral-900 mb-2">Fast Delivery</h3>
                <p className="text-sm text-neutral-500">Quick turnaround times with dedicated project managers.</p>
              </div>
              <div className="bg-white border border-neutral-200 rounded-lg p-6">
                <span className="text-3xl mb-3 block">🔧</span>
                <h3 className="font-medium text-neutral-900 mb-2">Ongoing Support</h3>
                <p className="text-sm text-neutral-500">24/7 technical support and maintenance for all clients.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-4">
              Web Development Packages in {cityName}
            </h2>
            <p className="text-center text-neutral-500 text-sm mb-10 max-w-2xl mx-auto">
              Choose the right plan for your {cityName} business
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-neutral-200 rounded-lg p-6">
                <h3 className="text-xl font-medium text-neutral-900 mb-2">Basic Website</h3>
                <div className="mb-4">
                  <span className="text-3xl font-light">₹15,000</span>
                  <span className="text-sm text-neutral-400 ml-1">one-time</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="text-xs text-neutral-600 flex"><span className="text-neutral-400 mr-2">✓</span>5 Pages Website</li>
                  <li className="text-xs text-neutral-600 flex"><span className="text-neutral-400 mr-2">✓</span>Mobile Responsive</li>
                  <li className="text-xs text-neutral-600 flex"><span className="text-neutral-400 mr-2">✓</span>Contact Form</li>
                  <li className="text-xs text-neutral-600 flex"><span className="text-neutral-400 mr-2">✓</span>Basic SEO</li>
                </ul>
                <Link href="/contact" className="block w-full py-2 bg-neutral-900 text-white text-sm text-center rounded hover:bg-neutral-800">
                  Get Quote
                </Link>
              </div>

              <div className="bg-white border border-neutral-900 rounded-lg p-6 relative">
                <div className="absolute top-0 right-0 bg-neutral-900 text-white text-xs px-3 py-1 rounded-tr-lg rounded-bl-lg">Popular</div>
                <h3 className="text-xl font-medium text-neutral-900 mb-2">Business Website</h3>
                <div className="mb-4">
                  <span className="text-3xl font-light">₹35,000</span>
                  <span className="text-sm text-neutral-400 ml-1">one-time</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="text-xs text-neutral-600 flex"><span className="text-neutral-400 mr-2">✓</span>10 Pages Website</li>
                  <li className="text-xs text-neutral-600 flex"><span className="text-neutral-400 mr-2">✓</span>CMS Integration</li>
                  <li className="text-xs text-neutral-600 flex"><span className="text-neutral-400 mr-2">✓</span>Blog Setup</li>
                  <li className="text-xs text-neutral-600 flex"><span className="text-neutral-400 mr-2">✓</span>Advanced SEO</li>
                </ul>
                <Link href="/contact" className="block w-full py-2 bg-neutral-900 text-white text-sm text-center rounded hover:bg-neutral-800">
                  Get Quote
                </Link>
              </div>

              <div className="bg-white border border-neutral-200 rounded-lg p-6">
                <h3 className="text-xl font-medium text-neutral-900 mb-2">E-commerce Store</h3>
                <div className="mb-4">
                  <span className="text-3xl font-light">₹75,000+</span>
                  <span className="text-sm text-neutral-400 ml-1">one-time</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="text-xs text-neutral-600 flex"><span className="text-neutral-400 mr-2">✓</span>Unlimited Products</li>
                  <li className="text-xs text-neutral-600 flex"><span className="text-neutral-400 mr-2">✓</span>Payment Gateway</li>
                  <li className="text-xs text-neutral-600 flex"><span className="text-neutral-400 mr-2">✓</span>Inventory Management</li>
                  <li className="text-xs text-neutral-600 flex"><span className="text-neutral-400 mr-2">✓</span>Marketing Tools</li>
                </ul>
                <Link href="/contact" className="block w-full py-2 bg-neutral-900 text-white text-sm text-center rounded hover:bg-neutral-800">
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-['Inter'] text-3xl font-light text-center text-neutral-900 mb-12">
              Frequently Asked Questions About {cityName} Services
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

        {/* CTA Section */}
        <section className="py-16 bg-neutral-900">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-light text-white mb-2">Ready to Grow Your Business in {cityName}?</h2>
            <p className="text-neutral-300 text-sm mb-6">Get a free consultation and quote for your project.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-3 bg-white text-neutral-900 text-sm rounded hover:bg-neutral-100">
                Contact Us
              </Link>
              <Link href={`/${stateSlug}`} className="px-8 py-3 border border-white text-white text-sm rounded hover:bg-white hover:text-neutral-900">
                View All {stateName} Cities
              </Link>
            </div>
            <p className="text-xs text-neutral-700 mt-4">📞 Call or WhatsApp: +91 97186 59236</p>
          </div>
        </section>
      </main>
    </>
  );
}