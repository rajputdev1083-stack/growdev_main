 "use client";

import CityLinks from "@/utlls/CityLinks";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function ServicesPage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const serviceCategories = [
    {
      id: "development",
      title: "Development",
      subtitle: "Engineering excellence",
      services: [
        { name: "Web Development", description: "Custom websites & web applications", price: "Starting at ₹2999K", slug: "web-development" },
        { name: "App Development", description: "iOS & Android mobile solutions", price: "Starting at ₹15K", slug: "app-development" },
        { name: "Shopify Store Setup", description: "E-commerce stores that convert", price: "Starting at ₹5K", slug: "shopify-store-setup" },
        { name: "WordPress Development", description: "Custom themes & plugins", price: "Starting at 4K", slug: "wordpress-development" },
        { name: "RAG System Integration", description: "AI-powered knowledge systems", price: "Custom quote", slug: "rag-system-integration" },
        { name: "Custom Software", description: "Tailored business solutions", price: "Custom quote", slug: "custom-software" },
      ],
    },
    {
      id: "marketing",
      title: "Digital Marketing",
      subtitle: "Data-driven growth",
      services: [
        { name: "SEO Optimization", description: "Rank #1 on Google searches", price: "Starting at ₹10K/mo", slug: "seo" },
        { name: "Google Ads", description: "PPC campaigns that convert", price: "Starting at ₹15K/mo", slug: "google-ads" },
        { name: "Meta Ads", description: "Facebook & Instagram advertising", price: "Starting at ₹15K/mo", slug: "meta-ads" },
        { name: "Digital Marketing", description: "Complete marketing strategy", price: "Starting at ₹25K/mo", slug: "digital-marketing" },
        { name: "Social Media Management", description: "Content & community management", price: "Starting at ₹12K/mo", slug: "social-media-management" },
      ],
    },
    {
      id: "creative",
      title: "Creative",
      subtitle: "Visual storytelling",
      services: [
        { name: "Video Editing", description: "Professional video production", price: "Starting at ₹5K", slug: "video-editing" },
        { name: "Logo Design", description: "Memorable brand identities", price: "Starting at ₹3K", slug: "logo-design" },
        { name: "AI Content Creation", description: "Generated content at scale", price: "Starting at ₹2K", slug: "ai-content-creation" },
        { name: "Poster Making", description: "Print & digital designs", price: "Starting at ₹1.5K", slug: "poster-making" },
        { name: "Graphic Design", description: "All your design needs", price: "Starting at ₹2K", slug: "graphic-design" },
      ],
    },
    {
      id: "business",
      title: "Business",
      subtitle: "Simplify compliance",
      services: [
        { name: "GST Services", description: "Registration & monthly filing", price: "Starting at ₹5K", slug: "gst-services" },
        { name: "Accounting & Ledger", description: "Bookkeeping & financial records", price: "Starting at ₹3K/mo", slug: "accounting-ledger" },
        { name: "Custom Support", description: "Dedicated business assistance", price: "Starting at ₹2K/mo", slug: "custom-support" },
        { name: "Business Registration", description: "Company incorporation help", price: "Starting at ₹8K", slug: "business-registration" },
        { name: "Tax Filing", description: "Income tax & compliance", price: "Starting at ₹3K", slug: "tax-filing" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Function to generate URL for each service
  const getServiceUrl = (slug) => {
    // All services now have direct URLs without /services/ prefix
    return `/${slug}`;
  };

  return (
    <main className="bg-white">
      {/* Hero Section - Minimal */}
      <section className="relative border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-32 md:py-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-light tracking-[0.3em] text-neutral-400 uppercase">
              GR Development
            </span>
            <h1 className="font-['Inter'] text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-neutral-900 mt-8 leading-[1.1]">
              Services
              <span className="block font-medium text-neutral-600 mt-2">we provide</span>
            </h1>
            <p className="font-['Georgia'] text-lg text-neutral-500 leading-relaxed max-w-xl mt-12">
              From code to creative, from marketing to management — 
              everything your business needs under one roof.
            </p>
            
            {/* Minimal Stats */}
            <div className="flex gap-16 mt-16 pt-16 border-t border-neutral-200">
              <div>
                <div className="font-['Inter'] text-3xl text-neutral-900">25+</div>
                <div className="text-xs text-neutral-400 mt-2 tracking-wider">SERVICES</div>
              </div>
              <div>
                <div className="font-['Inter'] text-3xl text-neutral-900">4.9</div>
                <div className="text-xs text-neutral-400 mt-2 tracking-wider">RATING</div>
              </div>
              <div>
                <div className="font-['Inter'] text-3xl text-neutral-900">500+</div>
                <div className="text-xs text-neutral-400 mt-2 tracking-wider">CLIENTS</div>
              </div>
            </div>
          </motion.div>
        </div>
        <CityLinks/>
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-px h-16 bg-neutral-300" />
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        {serviceCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-32 last:mb-0"
          >
            {/* Category Header */}
            <motion.div variants={itemVariants} className="mb-16">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm font-light text-neutral-400 tracking-wider">
                  {(categoryIndex + 1).toString().padStart(2, '0')}
                </span>
                <div className="w-12 h-px bg-neutral-300" />
              </div>
              <h2 className="font-['Inter'] text-4xl md:text-5xl font-light text-neutral-900">
                {category.title}
              </h2>
              <p className="font-['Georgia'] text-lg text-neutral-500 italic mt-2">
                {category.subtitle}
              </p>
            </motion.div>

            {/* Services List */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200">
              {category.services.map((service, index) => (
                <motion.div
                  key={service.slug}
                  variants={itemVariants}
                  onHoverStart={() => setHoveredCard(`${category.id}-${index}`)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="relative bg-white p-8 group"
                >
                  {/* Hover Background */}
                  <motion.div 
                    className="absolute inset-0 bg-neutral-50"
                    initial={false}
                    animate={{ 
                      opacity: hoveredCard === `${category.id}-${index}` ? 1 : 0 
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Service Number */}
                    <span className="text-3xl font-light text-neutral-200 mb-4 block">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    
                    {/* Service Name */}
                    <h3 className="font-['Inter'] text-2xl font-medium text-neutral-900 mb-3 group-hover:translate-x-1 transition-transform duration-300">
                      {service.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="font-['Georgia'] text-sm text-neutral-500 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-neutral-400 font-light">
                        {service.price}
                      </span>
                      
                      {/* Learn More Link - Direct URLs for all services */}
                      <Link 
                        href={getServiceUrl(service.slug)}
                        className="text-sm text-neutral-900 hover:text-neutral-600 transition-colors flex items-center gap-2 group/link"
                      >
                        <span className="font-light">Learn more</span>
                        <motion.span
                          animate={{ x: hoveredCard === `${category.id}-${index}` ? 3 : 0 }}
                          className="text-lg"
                        >
                          →
                        </motion.span>
                      </Link>
                    </div>
                  </div>

                  {/* Bottom Border Animation */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-px bg-neutral-900"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredCard === `${category.id}-${index}` ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      {/* Process Section - Minimal */}
      <section className="border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-32"
          >
            {/* Left */}
            <div>
              <span className="text-sm font-light tracking-[0.3em] text-neutral-400 uppercase">
                How we work
              </span>
              <h2 className="font-['Inter'] text-5xl font-light text-neutral-900 mt-8">
                Simple
                <br />
                <span className="font-medium">process</span>
              </h2>
            </div>

            {/* Right - Process Steps */}
            <div className="space-y-16">
              {[
                { number: "01", title: "Consultation", description: "We discuss your needs, goals, and timeline." },
                { number: "02", title: "Proposal", description: "You receive a detailed plan and quote." },
                { number: "03", title: "Execution", description: "We build, test, and refine until perfect." },
                { number: "04", title: "Delivery", description: "You get a finished product with ongoing support." },
              ].map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex gap-8"
                >
                  <span className="font-['Inter'] text-4xl font-light text-neutral-200">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-['Inter'] text-xl font-medium text-neutral-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="font-['Georgia'] text-neutral-500">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Minimal */}
      <section className="bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-light tracking-[0.3em] text-neutral-500 uppercase">
              Let's work together
            </span>
            <h2 className="font-['Inter'] text-4xl md:text-5xl font-light text-white mt-8 mb-12">
              Have a project in mind?
            </h2>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 px-12 py-5 bg-white text-neutral-900 text-sm font-medium tracking-wide hover:bg-neutral-100 transition-colors group"
            >
              <span>Start a conversation</span>
              <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            
            <p className="text-neutral-500 text-sm mt-12 font-light">
              Or call us directly: +91 97186 59236
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}