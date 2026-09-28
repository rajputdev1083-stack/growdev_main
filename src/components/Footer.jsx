 // components/Footer.jsx
"use client";

import React from "react";
import Link from "next/link";
import { cities } from "@/data/cityData";

export function Footer() {
  // Group cities by region
  const northIndia = cities.filter(city => city.region === 'north');
  const westIndia = cities.filter(city => city.region === 'west');
  const southIndia = cities.filter(city => city.region === 'south');
  const eastIndia = cities.filter(city => city.region === 'east');
  const centralIndia = cities.filter(city => city.region === 'central');

  return (
    <footer className="bg-black text-neutral-400 border-t border-neutral-800">
      
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-white text-xl font-bold">AV Development</h2>
          <p className="mt-4 text-sm">
            We build high-performance software and scale businesses with digital marketing & accounting solutions.
          </p>

          {/* Contact */}
          <div className="mt-4 text-sm space-y-2">
            <p className="flex items-center gap-2">
              <span>📞</span>
              <a href="tel:+918810688975" className="hover:text-white">+91 8810688975</a>
            </p>
            
            <div className="space-y-2">
  <p className="flex items-center gap-2">
    <span>📧</span>
    <a href="mailto:contact@avdevelopment.in" className="hover:text-white">
      contact@avdevelopment.in
    </a>
  </p>

  <p className="flex items-center gap-2">
    <span>💼</span>
    <a href="mailto:sales@avdevelopment.in" className="hover:text-white">
      sales@avdevelopment.in
    </a>
  </p>

  <p className="flex items-center gap-2">
    <span>🛠️</span>
    <a href="mailto:support@avdevelopment.in" className="hover:text-white">
      support@avdevelopment.in
    </a>
  </p>
</div>
          </div>
        </div>

        {/* Services - Organized by Category */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          
          <div className="space-y-4">
            {/* Development */}
            <div>
              <h4 className="text-xs uppercase text-neutral-500 mb-2">Development</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/web-development" className="hover:text-white">Web Development</Link></li>
                <li><Link href="/app-development" className="hover:text-white">App Development</Link></li>
                <li><Link href="/shopify-store-setup" className="hover:text-white">Shopify Store Setup</Link></li>
                <li><Link href="/wordpress-development" className="hover:text-white">WordPress Development</Link></li>
                <li><Link href="/rag-system-integration" className="hover:text-white">RAG System Integration</Link></li>
                <li><Link href="/wikipedia-page-creation" className="hover:text-white">Wikipedia Page Creation</Link></li>
                <li><Link href="/pr-media-publishing" className="hover:text-white">PR & Media Publishing</Link></li>
                <li><Link href="/custom-ai-assistant" className="hover:text-white">Custom AI Assistant</Link></li>
                <li><Link href="/custom-software" className="hover:text-white">Custom Software</Link></li>
              </ul>
            </div>
            
            {/* Marketing */}
            <div>
              <h4 className="text-xs uppercase text-neutral-500 mb-2">Digital Marketing</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/seo" className="hover:text-white">SEO Optimization</Link></li>
                <li><Link href="/google-ads" className="hover:text-white">Google Ads</Link></li>
                <li><Link href="/meta-ads" className="hover:text-white">Meta Ads</Link></li>
                <li><Link href="/digital-marketing" className="hover:text-white">Digital Marketing</Link></li>
                <li><Link href="/social-media-management" className="hover:text-white">Social Media Management</Link></li>
              </ul>
            </div>
            
            {/* Creative */}
            <div>
              <h4 className="text-xs uppercase text-neutral-500 mb-2">Creative</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/video-editing" className="hover:text-white">Video Editing</Link></li>
                <li><Link href="/logo-design" className="hover:text-white">Logo Design</Link></li>
                <li><Link href="/ai-content-creation" className="hover:text-white">AI Content Creation</Link></li>
                <li><Link href="/poster-making" className="hover:text-white">Poster Making</Link></li>
                <li><Link href="/graphic-design" className="hover:text-white">Graphic Design</Link></li>
              </ul>
            </div>
            
            {/* Business */}
            <div>
              <h4 className="text-xs uppercase text-neutral-500 mb-2">Business</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/gst-services" className="hover:text-white">GST Services</Link></li>
                <li><Link href="/accounting-ledger" className="hover:text-white">Accounting & Ledger</Link></li>
                <li><Link href="/custom-support" className="hover:text-white">Custom Support</Link></li>
                <li><Link href="/business-registration" className="hover:text-white">Business Registration</Link></li>
                <li><Link href="/tax-filing" className="hover:text-white">Tax Filing</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Locations - All Cities by Region */}
        <div>
          <h3 className="text-white font-semibold mb-4">Our Presence Across India</h3>
          
          <div className="space-y-4">
            {/* North India */}
            {northIndia.length > 0 && (
              <div>
                <h4 className="text-xs uppercase text-neutral-500 mb-2">North India</h4>
                <ul className="grid grid-cols-2 gap-1 text-sm">
                  {northIndia.map((city) => (
                    <li key={city.slug}>
                      <Link href={`/${city.slug}`} className="hoveffr:text-white block py-0.5">
                        {city.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* West India */}
            {westIndia.length > 0 && (
              <div className="mt-3">
                <h4 className="text-xs uppercase text-neutral-500 mb-2">West India</h4>
                <ul className="grid grid-cols-2 gap-1 text-sm">
                  {westIndia.map((city) => (
                    <li key={city.slug}>
                      <Link href={`/${city.slug}`} className="hover:text-white block py-0.5">
                        {city.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* South India */}
            {southIndia.length > 0 && (
              <div className="mt-3">
                <h4 className="text-xs uppercase text-neutral-500 mb-2">South India</h4>
                <ul className="grid grid-cols-2 gap-1 text-sm">
                  {southIndia.map((city) => (
                    <li key={city.slug}>
                      <Link href={`/${city.slug}`} className="hover:text-white block py-0.5">
                        {city.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* East India */}
            {eastIndia.length > 0 && (
              <div className="mt-3">
                <h4 className="text-xs uppercase text-neutral-500 mb-2">East India</h4>
                <ul className="grid grid-cols-2 gap-1 text-sm">
                  {eastIndia.map((city) => (
                    <li key={city.slug}>
                      <Link href={`/${city.slug}`} className="hover:text-white block py-0.5">
                        {city.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Central India */}
            {centralIndia.length > 0 && (
              <div className="mt-3">
                <h4 className="text-xs uppercase text-neutral-500 mb-2">Central India</h4>
                <ul className="grid grid-cols-2 gap-1 text-sm">
                  {centralIndia.map((city) => (
                    <li key={city.slug}>
                      <Link href={`/${city.slug}`} className="hover:text-white block py-0.5">
                        {city.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          {/* Stats */}
          <div className="mt-4 pt-4 border-t border-neutral-800">
            <p className="text-xs text-neutral-500">
              Serving {cities.length} cities across India
            </p>
          </div>
        </div>

        {/* Newsletter & Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
          <p className="text-sm mb-4">
            Get updates on latest tech, marketing & accounting trends.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-l-md text-white outline-none focus:border-neutral-600"
            />
            <button className="px-4 py-2 bg-white text-black rounded-r-md hover:bg-neutral-200 transition-colors">
              Subscribe
            </button>
          </div>

          {/* Popular Cities */}
          <div className="mt-6">
            <h4 className="text-white text-sm font-semibold mb-2">Popular Locations</h4>
            <ul className="flex flex-wrap gap-2">
              {["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Pune", "Jaipur", "Hyderabad"].map(cityName => {
                const city = cities.find(c => c.name === cityName);
                return city ? (
                  <li key={city.slug}>
                    <Link href={`/${city.slug}`} className="text-xs hover:text-white bg-neutral-900 px-2 py-1 rounded">
                      {city.name}
                    </Link>
                  </li>
                ) : null;
              })}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="mt-6">
            <h4 className="text-white text-sm font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-xs">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link></li>
              <li><a href="/sitemap.xml" className="hover:text-white">Sitemap</a></li>
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800 py-6 text-center text-sm text-neutral-500">
        <div className="max-w-7xl mx-auto px-6">
  <div>
    © {new Date().getFullYear()} AV Development. All rights reserved. | 
    <Link href="/gst-services" className="hover:text-white ml-1">GST Services</Link> | 
    <Link href="/accounting-ledger" className="hover:text-white ml-1">Accounting</Link> | 
    <Link href="/digital-marketing" className="hover:text-white ml-1">Digital Marketing</Link> | 
    <Link href="/web-development" className="hover:text-white ml-1">Web Development</Link> | 
    <br/>
    <span className="ml-1">MSME Registered ✔</span>
  </div>
</div>
      </div>
    </footer>
  );
}