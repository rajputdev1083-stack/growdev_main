// app/contact/page.jsx
import Link from "next/link";
import { services } from "@/data/cityData";
import CityLinks from "@/utlls/CityLinks";

export const metadata = {
  title: "Contact GR Development | Get Free Digital Consultation",
  description: "Contact GR Development for web development, digital marketing, GST services & more. Call +91 8810688975, email rajputdev@gmail.com, or connect on WhatsApp for instant support.",
  keywords: [
    "contact digital agency",
    "web development inquiry",
    "digital marketing consultation",
    "GST services contact",
    "WhatsApp digital services",
    "IT company contact India",
    "GR Development contact",
    "website development quote",
    "SEO services inquiry"
  ].join(", "),
  
  openGraph: {
    title: "Contact GR Development - Let's Discuss Your Project",
    description: "Ready to transform your digital presence? Contact us for a free consultation.",
    images: ['/contact-og-image.jpg'],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section with Waves */}
      <section className="relative bg-white pt-24 pb-32 overflow-hidden">
        {/* Top Black Wave */}
        <div className="absolute top-0 left-0 right-0 rotate-180">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 96L48 80C96 64 192 32 288 32C384 32 480 64 576 80C672 96 768 96 864 85.3C960 74.7 1056 53.3 1152 48C1248 42.7 1344 53.3 1392 58.7L1440 64V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V96Z" fill="#000000" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-neutral-400 mb-6">
              <Link href="/" className="hover:text-neutral-600 transition">home</Link>
              <span>/</span>
              <span className="text-neutral-800">contact</span>
            </nav>

            {/* Heading */}
            <h1 className="font-['Inter'] text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-neutral-900 mb-8">
              Let's talk about
              <br />
              <span className="font-medium italic text-neutral-500">
                your digital journey
              </span>
            </h1>

            {/* Description */}
            <p className="font-['Georgia'] text-lg text-neutral-500 leading-relaxed max-w-2xl">
              Whether you need a website, want to grow your business with digital marketing, 
              or require GST services — we're here to help. Reach out and let's create something amazing together.
            </p>
          </div>
        </div>

        {/* Bottom Black Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 96L48 80C96 64 192 32 288 32C384 32 480 64 576 80C672 96 768 96 864 85.3C960 74.7 1056 53.3 1152 48C1248 42.7 1344 53.3 1392 58.7L1440 64V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V96Z" fill="#000000" />
          </svg>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Left Side - Contact Info & WhatsApp */}
            <div>
              <span className="text-sm font-medium tracking-wider text-neutral-400 uppercase mb-4 block">
                get in touch
              </span>
              <h2 className="font-['Inter'] text-4xl font-light text-neutral-900 mb-8">
                We're just a message away
              </h2>

              {/* Quick Contact Cards */}
              <div className="space-y-6 mb-12">
                {/* Phone */}
                <div className="flex items-start gap-6 p-6 border border-neutral-200 hover:border-neutral-300 transition">
                  <div className="text-3xl">📞</div>
                  <div>
                    <h3 className="font-medium text-neutral-900 mb-1">Call Us</h3>
                    <a href="tel:+918810688975" className="text-neutral-500 hover:text-neutral-800 text-lg">
                      +91 8810688975
                    </a>
                    <br/>
                    <a href="tel:+919220750915" className="text-neutral-500 hover:text-neutral-800 text-lg">
                      +91 9220750915
                    </a>
                    <p className="text-sm text-neutral-400 mt-1">Mon-Sat, 9AM-7PM</p>
                      <p>MSME Registered ✔</p>

                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-6 p-6 border border-neutral-200 hover:border-neutral-300 transition">
                  <div className="text-3xl">✉️</div>
                  <div>
                    <h3 className="font-medium text-neutral-900 mb-1">Email Us</h3>
                    <a href="mailto:contact@avdevelopment.in" className="text-neutral-500 hover:text-neutral-800">
                      contact@avdevelopment.in


                    </a>
                    <br/>
                    <a href="mailto:sales@avdevelopment.in" className="text-neutral-500 hover:text-neutral-800">
                      sales@avdevelopment.in

                    </a>
                                        <br/>

                    <a href="mailto:support@avdevelopment.in" className="text-neutral-500 hover:text-neutral-800">
                      support@avdevelopment.in
                    </a>
                                        <br/>

                    <p className="text-sm text-neutral-400 mt-1">24/7 support via email</p>
                  </div>
                </div>

                {/* WhatsApp - Highlighted */}
                <div className="flex items-start gap-6 p-6 border-2 border-[#25D366] bg-[#25D366]/5 hover:bg-[#25D366]/10 transition">
                  <div className="text-4xl">💬</div>
                  <div className="flex-1">
                    <h3 className="font-medium text-neutral-900 mb-1">WhatsApp</h3>
                    <p className="text-neutral-500 mb-3">Instant replies on WhatsApp</p>
                    <a 
                      href="https://wa.me/918810688975?text=Hi%20AV%20Development%2C%20I'm%20interested%20in%20your%20digital%20services.%20Can%20we%20discuss%3F" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 font-medium hover:bg-[#20B859] transition"
                    >
                      <span>Chat on WhatsApp</span>
                      <span>↗</span>
                      
                    </a>
                      <p>MSME Registered ✔</p>

                  </div>
                </div>
              </div>

              {/* Quick Service Links */}
              <div className="border-t border-neutral-200 pt-8">
                <h3 className="font-medium text-neutral-900 mb-4">Quick inquiry for:</h3>
                <div className="flex flex-wrap gap-3">
                  <Link href="/web-development" className="text-sm text-neutral-500 hover:text-neutral-900 border border-neutral-200 px-4 py-2">
                    Web Development
                  </Link>
                  <Link href="/digital-marketing" className="text-sm text-neutral-500 hover:text-neutral-900 border border-neutral-200 px-4 py-2">
                    Digital Marketing
                  </Link>
                  <Link href="/services/gst-services" className="text-sm text-neutral-500 hover:text-neutral-900 border border-neutral-200 px-4 py-2">
                    GST Services
                  </Link>
                  <Link href="/seo" className="text-sm text-neutral-500 hover:text-neutral-900 border border-neutral-200 px-4 py-2">
                    SEO
                  </Link>
                  <Link href="/app-development" className="text-sm text-neutral-500 hover:text-neutral-900 border border-neutral-200 px-4 py-2">
                    App Development
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <div className="bg-neutral-50 p-8 lg:p-12 border border-neutral-200">
                <h3 className="font-['Inter'] text-2xl font-light text-neutral-900 mb-6">
                  Send us a message
                </h3>
                
                <form className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm text-neutral-600 mb-2">
                      Your Name *
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 bg-white border border-neutral-200 focus:border-neutral-400 outline-none transition"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm text-neutral-600 mb-2">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 bg-white border border-neutral-200 focus:border-neutral-400 outline-none transition"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm text-neutral-600 mb-2">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 bg-white border border-neutral-200 focus:border-neutral-400 outline-none transition"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  {/* Service Interest */}
                  <div>
                    <label htmlFor="service" className="block text-sm text-neutral-600 mb-2">
                      I'm interested in *
                    </label>
                    <select 
                      id="service" 
                      className="w-full px-4 py-3 bg-white border border-neutral-200 focus:border-neutral-400 outline-none transition"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="app-development">App Development</option>
                      <option value="shopify">Shopify Store Setup</option>
                      <option value="wordpress">WordPress Development</option>
                      <option value="seo">SEO Optimization</option>
                      <option value="google-ads">Google Ads</option>
                      <option value="meta-ads">Meta Ads</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="video-editing">Video Editing</option>
                      <option value="logo-design">Logo Design</option>
                      <option value="ai-content">AI Content Creation</option>
                      <option value="poster">Poster Making</option>
                      <option value="gst">GST Services</option>
                      <option value="accounting">Accounting & Ledger</option>
                      <option value="custom">Custom Support</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm text-neutral-600 mb-2">
                      Your Message *
                    </label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full px-4 py-3 bg-white border border-neutral-200 focus:border-neutral-400 outline-none transition resize-none"
                      placeholder="Tell us about your project..."
                      required
                    ></textarea>
                  </div>

                  {/* Budget (Optional) */}
                  <div>
                    <label htmlFor="budget" className="block text-sm text-neutral-600 mb-2">
                      Estimated Budget (Optional)
                    </label>
                    <select id="budget" className="w-full px-4 py-3 bg-white border border-neutral-200 focus:border-neutral-400 outline-none transition">
                      <option value="">Select range</option>
                     <option value="2k-5k">₹2,000 - ₹5,000</option>
<option value="5k-10k">₹5,000 - ₹10,000</option>
<option value="10k-20k">₹10,000 - ₹20,000</option>
<option value="20k-30k">₹20,000 - ₹30,000</option>
<option value="30k-50k">₹30,000 - ₹50,000</option>
<option value="50k-75k">₹50,000 - ₹75,000</option>
<option value="75k-100k">₹75,000 - ₹1,00,000</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    className="w-full px-8 py-4 bg-neutral-900 text-white font-medium tracking-wide hover:bg-neutral-800 transition"
                  >
                    Send Message
                  </button>

                  {/* Note */}
                  <p className="text-xs text-neutral-400 text-center">
                    We will get back to you within 24 hours
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights Section */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wider text-neutral-400 uppercase">
              why choose us
            </span>
            <h2 className="font-['Inter'] text-4xl md:text-5xl font-light text-neutral-900 mt-4">
              Your digital transformation partner
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <span className="text-4xl mb-4 block">🚀</span>
              <h3 className="font-medium text-neutral-900 mb-2">Web Development</h3>
              <p className="text-sm text-neutral-500">Custom websites, e-commerce, and web applications</p>
            </div>
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <span className="text-4xl mb-4 block">📱</span>
              <h3 className="font-medium text-neutral-900 mb-2">App Development</h3>
              <p className="text-sm text-neutral-500">iOS & Android apps for your business</p>
            </div>
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <span className="text-4xl mb-4 block">📈</span>
              <h3 className="font-medium text-neutral-900 mb-2">Digital Marketing</h3>
              <p className="text-sm text-neutral-500">SEO, Google Ads, Meta Ads & more</p>
            </div>
            <div className="bg-white p-8 border border-neutral-200 text-center">
              <span className="text-4xl mb-4 block">📋</span>
              <h3 className="font-medium text-neutral-900 mb-2">GST & Accounting</h3>
              <p className="text-sm text-neutral-500">Complete business compliance solutions</p>
            </div>
          </div>

          {/* WhatsApp Business CTA */}
          <div className="mt-12 text-center">
            <a 
              href="https://wa.me/919718986671?text=Hi%20AV%20Development%2C%20I'm%20interested%20in%20your%20digital%20services.%20Can%20we%20discuss%3F" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 font-medium hover:bg-[#20B859] transition"
            >
              <span className="text-2xl">💬</span>
              <span>Connect on WhatsApp for Instant Support</span>
            </a>
          </div>
        </div>
      </section>

<CityLinks/>
      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wider text-neutral-400 uppercase">
              quick answers
            </span>
            <h2 className="font-['Inter'] text-4xl md:text-5xl font-light text-neutral-900 mt-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="border border-neutral-200 p-6">
              <h3 className="font-medium text-neutral-900 mb-2">How quickly do you respond?</h3>
              <p className="text-neutral-500">We respond within 2-3 hours on WhatsApp and within 24 hours via email.</p>
            </div>
            <div className="border border-neutral-200 p-6">
              <h3 className="font-medium text-neutral-900 mb-2">Do you offer free consultation?</h3>
              <p className="text-neutral-500">Yes, we offer a free 30-minute consultation to discuss your project.</p>
            </div>
            <div className="border border-neutral-200 p-6">
              <h3 className="font-medium text-neutral-900 mb-2">What services do you provide?</h3>
              <p className="text-neutral-500">Web development, app development, digital marketing, GST services, and more.</p>
            </div>
            <div className="border border-neutral-200 p-6">
              <h3 className="font-medium text-neutral-900 mb-2">Do you work with startups?</h3>
              <p className="text-neutral-500">Absolutely! We love working with startups and offer flexible packages.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section className="relative bg-white py-24 overflow-hidden">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 right-0 rotate-180">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 96L48 80C96 64 192 32 288 32C384 32 480 64 576 80C672 96 768 96 864 85.3C960 74.7 1056 53.3 1152 48C1248 42.7 1344 53.3 1392 58.7L1440 64V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V96Z" fill="#000000" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-['Inter'] text-4xl md:text-5xl font-light text-neutral-900 mb-6">
            Ready to start your project?
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto mb-10">
            Click the WhatsApp button below and get an instant response
          </p>
          <a 
            href="https://wa.me/919718986671?text=Hi%20AV%20Development%2C%20I'm%20interested%20in%20your%20digital%20services.%20Can%20we%20discuss%3F" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-4 font-medium hover:bg-[#20B859] transition text-lg"
          >
            <span>💬</span>
            <span>Start WhatsApp Chat</span>
          </a>
          <p className="text-sm text-neutral-400 mt-4">
            or call us directly: <a href="tel:+919718659236" className="text-neutral-600 hover:text-neutral-900">+91 9718659236</a>
          </p>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 96L48 80C96 64 192 32 288 32C384 32 480 64 576 80C672 96 768 96 864 85.3C960 74.7 1056 53.3 1152 48C1248 42.7 1344 53.3 1392 58.7L1440 64V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V96Z" fill="#000000" />
          </svg>
        </div>
      </section>

      {/* Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact GR Development",
          "description": "Contact page for GR Development digital agency",
          "mainEntity": {
            "@type": "Organization",
            "name": "GR Development",
            "telephone": "+919718659236",
            "email": "rajputdev1083@gmail.com",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+918810688975",
              "contactType": "customer service",
              "availableLanguage": ["English", "Hindi"]
            }
          }
        })
      }} />
    </main>
  );
}