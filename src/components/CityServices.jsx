 "use client";

import Link from "next/link";
import Image from "next/image";
import { services, getServicesByCategory } from "@/data/cityData";
import { useState } from "react";
import ServicesPage from "@/app/service/page";

export default function CityPage({ city }) {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const cityName = city.name;
  const region = city.region?.charAt(0).toUpperCase() + city.region?.slice(1);
  const state = city.state || city.region;

  // Group services by category
  const developmentServices = getServicesByCategory('development');
  const marketingServices = getServicesByCategory('marketing');
  const creativeServices = getServicesByCategory('creative');
  const businessServices = getServicesByCategory('business');

  // Filter services based on active category
  const getFilteredServices = () => {
    switch(activeCategory) {
      case 'development': return developmentServices;
      case 'marketing': return marketingServices;
      case 'creative': return creativeServices;
      case 'business': return businessServices;
      default: return services;
    }
  };

  const filteredServices = getFilteredServices();

  // Service categories for filter buttons
  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'development', name: 'Development', count: developmentServices.length },
    { id: 'marketing', name: 'Marketing', count: marketingServices.length },
    { id: 'creative', name: 'Creative', count: creativeServices.length },
    { id: 'business', name: 'Business', count: businessServices.length },
  ];

  return (
    <>
      {/* SEO Headers */}
      <header className="sr-only">
        <h1>Best Digital Services in {cityName} - AV Development</h1>
        <h2>Professional Web Development, Digital Marketing & Business Solutions in {cityName}</h2>
        <p>AV Development offers premium {services.length}+ digital services in {cityName} including web development, app development, SEO, Google Ads, GST services, and more. Trusted by 1000+ clients across {region} India.</p>
      </header>

      {/* Hero Section with City Image */}
      <section className="relative bg-white">
  {/* Top Wave */}
  <div className="absolute top-0 left-0 right-0 rotate-180">
    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <path 
        d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
        fill="#F5F5F5"
      />
    </svg>
  </div>

  {/* Main Content */}
  <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32 relative z-10">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* Left Content */}
      <div>
        {/* Minimal Badge */}
        <div className="mb-6">
          <span className="text-sm font-medium tracking-wider text-neutral-400 uppercase">
            serving since 2019
          </span>
        </div>

        {/* Main Heading - Clean & Bold */}
        <h1 className="font-['Inter'] text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-neutral-900 mb-8">
          Digital Services
          <br />
          <span className="font-medium italic text-neutral-600">
            {cityName}
          </span>
        </h1>

        {/* Description - Elegant & Simple */}
        <p className="font-['Georgia'] text-lg text-neutral-500 leading-relaxed max-w-xl mb-12">
          Transform your business with comprehensive digital solutions. 
          From development to marketing, we deliver excellence at every step.
        </p>

        {/* Simple Stats - Clean Numbers */}
        <div className="flex flex-wrap gap-12 mb-12">
          <div>
            <div className="font-['Inter'] text-3xl font-light text-neutral-900">{services.length}+</div>
            <div className="text-sm text-neutral-400 mt-1 tracking-wide">services</div>
          </div>
          <div>
            <div className="font-['Inter'] text-3xl font-light text-neutral-900">100+</div>
            <div className="text-sm text-neutral-400 mt-1 tracking-wide">clients</div>
          </div>
          <div>
            <div className="font-['Inter'] text-3xl font-light text-neutral-900">5+</div>
            <div className="text-sm text-neutral-400 mt-1 tracking-wide">years</div>
          </div>
        </div>

        {/* Simple CTA - Clean Buttons */}
        <div className="flex flex-wrap gap-4">
          <Link
            href={`/${city.slug}/contact`}
            className="px-8 py-4 bg-neutral-900 text-white text-sm font-medium tracking-wide hover:bg-neutral-800 transition-colors"
          >
            Get Consultation
          </Link>
          <Link
            href={`tel:+919718659236`}
            className="px-8 py-4 border border-neutral-200 text-neutral-700 text-sm font-medium tracking-wide hover:border-neutral-300 hover:bg-neutral-50 transition-colors"
          >
            Call +91 9718659236
          </Link>
        </div>
      </div>

      {/* Right Content - Minimal Typography Design */}
      <div className="hidden lg:block">
        <div className="relative">
          {/* Large City Name as Design Element */}
          <div className="font-['Inter'] text-[12rem] font-black leading-none text-neutral-100 select-none">
            {city.name[0]}
          </div>
          
          {/* Simple Location Text */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="border-t border-neutral-200 pt-8">
              <div className="font-['Georgia'] text-2xl text-neutral-300 italic">
                {city.region}
              </div>
              <div className="font-['Inter'] text-5xl font-light text-neutral-400 mt-2">
                india
              </div>
            </div>
          </div>

          {/* Simple Rating */}
          <div className="absolute top-0 right-0 text-right">
            <div className="flex items-center gap-1 text-2xl text-neutral-300">
              <span>★★★★★</span>
            </div>
            <div className="text-sm text-neutral-400 mt-1">4.9 (500+ reviews)</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom Wave */}
  <div className="absolute bottom-0 left-0 right-0">
  <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    <path 
      d="M0 96L48 80C96 64 192 32 288 32C384 32 480 64 576 80C672 96 768 96 864 85.3C960 74.7 1056 53.3 1152 48C1248 42.7 1344 53.3 1392 58.7L1440 64V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V96Z" 
      fill="#000000"
    />
  </svg>
</div>
</section>
<ServicesPage/>

      {/* Services Section */}
   
      {/* Why Choose Us Section */}
    
      {/* FAQ Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold mb-3">What services do you offer in {cityName}?</h3>
              <p className="text-gray-400">
                We offer {services.length}+ services including web development, app development, digital marketing, SEO, GST services, and more.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold mb-3">How much do your services cost?</h3>
              <p className="text-gray-400">
                Prices start from ₹5,000 for basic services. Contact us for a free quote tailored to your needs.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold mb-3">Do you have a local office in {cityName}?</h3>
              <p className="text-gray-400">
                Yes, we serve clients in {cityName} through our digital presence and on-site consultations.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold mb-3">How can I get started?</h3>
              <p className="text-gray-400">
                Call us at +91 9718659236 or fill our contact form for a free consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
     
    </>
  );
}

// Helper Functions
function getServiceIcon(slug) {
  const icons = {
    'web-development': '🌐',
    'app-development': '📱',
    'shopify-store-setup': '🛍️',
    'wordpress-development': '⚡',
    'rag-system-integration': '🤖',
    'seo': '📈',
    'google-ads': '🎯',
    'meta-ads': '📊',
    'digital-marketing': '📱',
    'video-editing': '🎬',
    'logo-design': '🎨',
    'ai-content-creation': '✨',
    'poster-making': '🖼️',
    'gst-services': '📋',
    'accounting-ledger': '💰',
    'custom-support': '🛟',
  };
  return icons[slug] || '🔧';
}

function getServiceDescription(serviceName, cityName) {
  const descriptions = {
    'Web Development': `Professional websites and web applications for ${cityName} businesses.`,
    'App Development': `Custom mobile apps for iOS and Android in ${cityName}.`,
    'Shopify Store Setup': `Complete e-commerce stores setup for ${cityName} merchants.`,
    'WordPress Development': `Custom WordPress sites with modern designs for ${cityName}.`,
    'SEO Optimization': `Rank #1 on Google with our proven SEO strategies in ${cityName}.`,
  };
  return descriptions[serviceName] || `Expert ${serviceName.toLowerCase()} services in ${cityName}.`;
}

function getServiceFeatures(slug) {
  const features = {
    'web-development': ['Responsive Design', 'SEO Optimized', 'Fast Loading'],
    'app-development': ['iOS & Android', 'User-friendly', 'Scalable'],
    'seo': ['Keyword Research', 'On-page SEO', 'Link Building'],
    'gst-services': ['Registration', 'Monthly Filing', 'Expert Support'],
  };
  return features[slug] || ['Professional Service', 'Expert Team', 'Affordable Price'];
}

function getServicePrice(slug) {
  const prices = {
    'web-development': '₹15,000',
    'app-development': '₹50,000',
    'seo': '₹10,000/mo',
    'gst-services': '₹5,000',
  };
  return prices[slug] || '₹ Contact Us';
}