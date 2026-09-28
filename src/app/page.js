import { BentoGridDemo } from '@/components/BentoGridDeme'
import { FeaturesSectionDemo } from '@/components/FeaturesSectionDemo'
import { HeroSection } from '@/components/Hero'
import TestimonialsSection, { InfiniteMovingCardsDemo } from '@/components/InfiniteMovingCards'
import { TextGenerateEffectDemo } from '@/components/TextGenerateEffect'
import TrustedPartners from '@/components/TrustedPartners'
// import WorldMapSection from '@/components/Worldmap'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
      <HeroSection />
      <TextGenerateEffectDemo />
      <TrustedPartners />
      <FeaturesSectionDemo />
      {/* <WorldMapSection /> */}
      {/* Internal linking: homepage → services & locations (SEO) */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-neutral-200 bg-neutral-50/50">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          <Link href="/service" className="text-neutral-600 hover:text-black font-medium">
            All services
          </Link>
          <span className="text-neutral-300">|</span>
          <span className="text-neutral-500">Locations:</span>
          {['delhi', 'mumbai', 'bangalore', 'hyderabad', 'chennai', 'kolkata', 'pune', 'jaipur'].map((city) => (
            <Link key={city} href={`/${city}`} className="text-neutral-600 hover:text-black">
              {city.charAt(0).toUpperCase() + city.slice(1)}
            </Link>
          ))}
          <Link href="/blog" className="text-neutral-600 hover:text-black">
            Blog
          </Link>
        </div>
      </section>
      <TestimonialsSection />
    </div>
  )
}
 
 export default page
 