 "use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { name: "Ayurveda", src: "/logo/ayurveda.png" },
  { name: "Blast", src: "/logo/blast.png" },
  { name: "Wellness", src: "/logo/rk.jpeg" },
  { name: "TechCorp", src: "/logo/max.jpeg" },
  { name: "GreenLife", src: "/logo/ngo.jpeg" },
  { name: "Urban", src: "/logo/om.jpeg" },
  { name: "Nature", src: "/logo/royal.jpeg" },
  { name: "Global", src: "/logo/sonu.jpeg" },
  { name: "Prime", src: "/logo/jmat.jpeg" },
  { name: "Elite", src: "/logo/ar.jpeg" },
];

export default function TrustedPartners() {
  return (
    <section className="bg-black py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent mb-16"
        >
          Trusted Partners
        </motion.h2>

        {/* Rows */}
        <div className="space-y-8">
          <Marquee logos={logos.slice(0, 5)} speed={20} />
          
        </div>

      </div>
    </section>
  );
}

// 🔥 Marquee Component
function Marquee({ logos, speed = 30, reverse = false }) {
  return (
    <div className="relative overflow-hidden">

      {/* Fade */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10" />

      <motion.div
        className="flex gap-8 w-max"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"]
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {[...logos, ...logos, ...logos].map((logo, i) => (

          <div
            key={i}
            className="group w-[100px] h-[100px] rounded-full overflow-hidden border border-neutral-800 bg-neutral-900 hover:scale-110 transition"
          >
            <div className="relative w-full h-full">
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-cover transition duration-500 grayscale group-hover:grayscale-0"
              />
            </div>
          </div>

        ))}
      </motion.div>
    </div>
  );
}