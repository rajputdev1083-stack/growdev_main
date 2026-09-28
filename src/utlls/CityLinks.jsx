 "use client";

import Link from "next/link";
import { cities } from "@/data/cityData";
import { motion } from "framer-motion";

export default function CityLinks() {
  return (
    <section className="relative bg-white py-12 md:py-16 overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0 rotate-180">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 25C840 30 960 40 1080 45C1200 50 1320 50 1380 50L1440 50V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
        backgroundSize: '30px 30px'
      }} />

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Simple Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-8"
        >
          <span className="text-[10px] font-light tracking-[0.2em] text-neutral-400 uppercase">
            Service Locations
          </span>
        </motion.div>

        {/* City Grid - Ultra Compact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.02 }}
          className="flex flex-wrap justify-center gap-1.5"
        >
          {cities.map((city, index) => (
            <motion.div
              key={city.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: index * 0.01 }}
              whileHover={{ y: -1 }}
            >
              <Link
                href={`/${city.slug}`}
                className="block text-[9px] md:text-[10px] font-light text-neutral-500 px-2 py-1 border border-neutral-200 hover:border-neutral-400 hover:text-neutral-900 transition-colors whitespace-nowrap"
              >
                {city.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* City Count */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-[8px] text-neutral-300 mt-4 tracking-wider"
        >
          {cities.length} CITIES • PAN INDIA
        </motion.p>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 64L48 53.3C96 42.7 192 21.3 288 21.3C384 21.3 480 42.7 576 53.3C672 64 768 64 864 56.9C960 49.8 1056 35.6 1152 32C1248 28.4 1344 35.6 1392 39.1L1440 42.7V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0V64Z" fill="#FFFFFF" />
        </svg>
      </div>
    </section>
  );
}