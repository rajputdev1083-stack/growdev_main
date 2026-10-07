 "use client";

import React from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function TestimonialsSection() {
  return (
    <section className="relative bg-white" id="testimonials">
      {/* Top Wave Curve */}
      <div className="absolute top-0 left-0 right-0 rotate-180 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative bg-black pt-32 pb-48">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block text-sm font-light tracking-[0.3em] text-neutral-500 uppercase mb-6"
            >
              Testimonials
            </motion.span>

            <h2 className="font-['Inter'] text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-[1.1]">
              What our
              <span className="block font-medium text-neutral-300 mt-2">clients say</span>
            </h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-24 h-px bg-neutral-700 mx-auto mt-8"
            />

            {/* Google Rating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center gap-3 mt-8"
            >
              {/* Google Icon */}
              <svg width="20" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                <path fill="none" d="M0 0h48v48H0z"/>
              </svg>
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FBBC05">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <span className="text-neutral-400 text-sm font-light">4.9 · Verified Google Reviews</span>
            </motion.div>

            <p className="font-['Georgia'] text-lg text-neutral-500 max-w-2xl mx-auto mt-6 italic">
              Real words from real people — our clients share their experiences working with us.
            </p>
          </motion.div>

          {/* Row 1 — Right direction */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative mb-4"
          >
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />
            <InfiniteMovingCards items={testimonialsRow1} direction="right" speed="slow" className="py-4" />
          </motion.div>

          {/* Row 2 — Left direction */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />
            <InfiniteMovingCards items={testimonialsRow2} direction="left" speed="slow" className="py-4" />
          </motion.div>

          {/* Stats Counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center gap-16 mt-24"
          >
            {[
              { num: "200+", label: "CLIENTS" },
              { num: "4.9", label: "RATING" },
              { num: "30+", label: "PROJECTS" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-['Inter'] text-3xl text-white font-light">{s.num}</div>
                <div className="text-xs text-neutral-600 mt-2 tracking-wider">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="relative bg-black">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 96L48 80C96 64 192 32 288 32C384 32 480 64 576 80C672 96 768 96 864 85.3C960 74.7 1056 53.3 1152 48C1248 42.7 1344 53.3 1392 58.7L1440 64V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V96Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
}

// ─── Testimonial Data ────────────────────────────────────────────────

/*
  HOW TO ADD REAL CLIENT PHOTOS:
  Option 1 → Put photos in /public/testimonials/rajesh.jpg
             and set photo: "/testimonials/rajesh.jpg"
  Option 2 → Use Google Drive / Cloudinary link directly
  Option 3 → Keep initials fallback (works if photo is null/undefined)
*/

const testimonialsRow1 = [
  {
    quote: "Grow Development ne hamare business ka poora digital presence badal diya. Website launch ke baad 3x zyada inquiries aane lagi. Bahut professional team hai.",
    name: "Rajesh Kumar",
    title: "Founder, JMart Delhi",
    rating: 5,
    location: "Delhi",
    photo: null,          // 👈 Replace with: "/testimonials/rajesh.jpg"
    initials: "RK",
    accent: "#E07B2B",
    verified: true,
  },
  {
    quote: "The website they built for our tech firm is fast, clean and gets us leads daily. Their Next.js work is top-notch. Delivery was on time and within budget.",
    name: "Priya Sharma",
    title: "CEO, MX Infotech",
    rating: 5,
    location: "Delhi",
    photo: null,
    initials: "PS",
    accent: "#0F6E56",
    verified: true,
  },
  {
    quote: "Meta Ads campaign ke baad hamare leads double ho gaye pehle 2 mahine mein. ROI ekdum solid raha.  pment ki digital marketing team best hai.",
    name: "Naveen Kapoor",
    title: "Director, NK Construction",
    rating: 5,
    location: "Noida",
    photo: null,
    initials: "NK",
    accent: "#534AB7",
    verified: true,
  },
  {
    quote: "Our Shopify store was live in just 10 days. Beautiful design, fast loading, and the team handled everything from setup to payment integration.",
    name: "Anjali Mehta",
    title: "Founder, Ethnic Finds",
    rating: 5,
    location: "Ahmedabad",
    photo: null,
    initials: "AM",
    accent: "#993556",
    verified: true,
  },
];

const testimonialsRow2 = [
  {
    quote: "Custom accounting software jo unhone banaya usne hamara 4 ghante ka kaam 20 minute mein kar diya. Genuinely life-changing for our CA firm.",
    name: "Deepak Tiwari",
    title: "CA, Tiwari & Associates",
    rating: 5,
    location: "Lucknow",
    photo: null,
    initials: "DT",
    accent: "#0F6E56",
    verified: true,
  },
  {
    quote: "The Android app for our food delivery startup was delivered in 3 weeks. Clean UI, zero crashes, and the team was available 24/7 for support.",
    name: "Suresh Reddy",
    title: "Founder, QuickBite",
    rating: 5,
    location: "Hyderabad",
    photo: null,
    initials: "SR",
    accent: "#E07B2B",
    verified: true,
  },
  {
    quote: "SEO results ne hamare organic traffic ko 2x kar diya 4 mahine mein. Ab hum apne competitors se aage hain Google pe. Shukriya GR Development!",
    name: "Vikram Singh",
    title: "Owner, VS Traders",
    rating: 5,
    location: "Jaipur",
    photo: null,
    initials: "VS",
    accent: "#185FA5",
    verified: true,
  },
  {
    quote: "From branding to complete website redesign, their team nailed our vision. Customer response has been amazing since relaunch. Highly recommended!",
    name: "Neha Gupta",
    title: "Director, Gupta Enterprises",
    rating: 5,
    location: "Pune",
    photo: null,
    initials: "NG",
    accent: "#3B6D11",
    verified: true,
  },
];