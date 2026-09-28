"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function SeeWork() {
  const [activeTab, setActiveTab] = useState("websites");
  const [hoveredId, setHoveredId] = useState(null);

  const projects = {
    websites: [
      {
        id: 1,
        title: "Shree Ledger Accounting & Compliance",
        category: "website",
        description: "Simplify Your Accounting & Compliance Without the Hassle",
        image: "/project/shere.png",
        tech: ["Next.js", "Node.js", "MongoDB", "Redis", "Aws"],
        link: "https://www.shreeledger.in/",
        stats: { value: "1000+", label: "Sales", metric: "users" },
        year: "2025",
      },
      {
        id: 10,
        title: "J_MART",
        category: "website",
        description: "Where Elegance Meets Innovation",
        image: "/project/jm.png",
        tech: ["Next.js", "Node.js", "MongoDB", "Redis", "Aws"],
        link: "https://www.jmartworld.in/",
        stats: { value: "1000+", label: "Sales", metric: "users" },
        year: "2025",
      },
      {
        id: 3,
        title: "ARC Computer Institute",
        category: "website",
        description: "Innovate - Code - Succeed",
        image: "/project/anialsir.png",
        tech: ["Next.js", "Framer Motion", "Tailwind"],
        link: "https://www.arcinstitute.in/",
        stats: { value: "50k+", label: "Views", metric: "views" },
        year: "2025",
      },
      {
        id: 5,
        title: "RK PORTA CABIN",
        category: "website",
        description: "Premium Porta Cabins",
        image: "/project/rk.png",
        tech: ["Next.js", "Tailwind", "FramerMotion", "Aws"],
        link: "https://rkportacabin.in/",
        stats: { value: "100k+", label: "Articles", metric: "articles" },
        year: "2024",
      },
      {
        id: 8,
        title: "Royal Boom",
        category: "website",
        description: "Royal Fragrances Crafted For Everyday Elegance",
        image: "/project/royal.png",
        tech: ["Shopify"],
        link: "https://royalboom.in/",
        stats: { value: "100k+", label: "Articles", metric: "articles" },
        year: "2024",
      },
      {
        id: 9,
        title: "Max Infotech",
        category: "website",
        description:
          "Explore our wide range of computer courses designed to make you job-ready in today's digital world.",
        image: "/project/mx.png",
        tech: ["Shopify"],
        link: "https://www.maxinfotech.in/",
        stats: { value: "100k+", label: "Articles", metric: "articles" },
        year: "2024",
      },
      {
        id: 11,
        title: "Blast",
        category: "website",
        description: "Relaxing, Reducing Anxiety, Fun drinks. Innovative and Zero Calorie Options",
        image: "/project/blast.png",
        tech: ["Next.js", "Node.js", "MongoDB", "Redis", "Aws"],
        link: "https://www.letblastbevaragesandcompany.in/",
        stats: { value: "1000+", label: "Sales", metric: "users" },
        year: "2025",
      },
      {
        id: 12,
        title: "Ujjwal Welfare Trust",
        category: "website",
        description: "Building a brighter future through education, support, and community initiatives.",
        image: "/project/ngo.png",
        tech: ["Next.js", "Node.js", "MongoDB", "Redis", "Aws"],
        link: "https://ujjwalwelfaretrust.org/",
        stats: { value: "1000+", label: "Sales", metric: "users" },
        year: "2025",
      },
      {
        id: 13,
        title: "Crack IQ",
        category: "website",
        description: "India's Premier Education Platform",
        image: "/project/cr.png",
        tech: ["Next.js", "Node.js", "MongoDB", "Redis", "Aws"],
        link: "https://www.crackiq.in/",
        stats: { value: "1000+", label: "Sales", metric: "users" },
        year: "2025",
      },
      {
        id: 14,
        title: "Goldn Enterprise",
        category: "website",
        description:
          "Golden enterprise is a leading provider of high-quality products and services, dedicated to delivering excellence and innovation in every aspect of our business.",
        image: "/image.png",
        tech: ["Html", "Tailwind"],
        link: "https://www.goldnenterprises.shop/",
        stats: { value: "1000+", label: "Sales", metric: "users" },
        year: "2025",
      },
    ],
    android: [
      {
        id: 2,
        title: "Food Delivery App",
        category: "android",
        description: "Android app for real-time food ordering & tracking",
        image: "/image.png",
        tech: ["Kotlin", "Firebase", "Google Maps"],
        link: "https://play.google.com/app1",
        stats: { value: "50k+", label: "Downloads", metric: "downloads" },
        year: "2025",
      },
      {
        id: 4,
        title: "Fitness Tracker App",
        category: "android",
        description: "Android app for workout tracking & health analytics",
        image: "/project/rk.png",
        tech: ["Java", "Room DB", "MPAndroidChart"],
        link: "https://play.google.com/app2",
        stats: { value: "500k+", label: "Workouts", metric: "workouts" },
        year: "2024",
      },
      {
        id: 6,
        title: "Weather App",
        category: "android",
        description: "Beautiful weather app with real-time updates",
        image: "/project/royal.png",
        tech: ["Kotlin", "Retrofit", "OpenWeather"],
        link: "https://play.google.com/app3",
        stats: { value: "1000+", label: "Cities", metric: "cities" },
        year: "2024",
      },
    ],
  };

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

  return (
    <section className="relative bg-white py-32" id="portfolio">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-light uppercase tracking-[0.3em] text-neutral-400"
          >
            Portfolio
          </motion.span>

          <h2 className="mt-8 font-['Inter'] text-6xl font-light leading-[1.1] text-neutral-900 md:text-7xl">
            Selected
            <span className="mt-2 block font-medium text-neutral-600">Work</span>
          </h2>

          <p className="mt-8 max-w-xl font-['Georgia'] text-lg leading-relaxed text-neutral-500">
            A curation of websites and mobile applications - each project crafted with precision and
            purpose.
          </p>

          <div className="mt-12 h-px w-20 bg-neutral-300" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-16 flex gap-12 border-b border-neutral-200"
        >
          {[
            { id: "websites", label: "Websites", count: projects.websites.length },
            { id: "android", label: "Mobile Apps", count: projects.android.length },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="group relative pb-4"
              type="button"
            >
              <span
                className={`text-sm font-medium tracking-wide transition-colors ${
                  activeTab === tab.id ? "text-neutral-900" : "text-neutral-400 hover:text-neutral-600"
                }`}
              >
                {tab.label}
                <span className="ml-2 text-xs text-neutral-400">({tab.count})</span>
              </span>

              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTabLine"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-px bg-neutral-200 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects[activeTab].map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative bg-white"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  initial={false}
                >
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: hoveredId === project.id ? 0 : 20,
                      opacity: hoveredId === project.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="bg-white px-8 py-4 text-sm font-medium tracking-wide text-neutral-900 transition-colors hover:bg-neutral-100"
                  >
                    {"View Project ->"}
                  </motion.a>
                </motion.div>

                <div className="absolute left-6 top-6">
                  <span className="border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-light text-white/60">
                    {project.year}
                  </span>
                </div>

                <div className="absolute right-6 top-6">
                  <span className="border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-light text-white/60">
                    {project.category === "android" ? "Mobile" : "Web"}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="mb-3 font-['Inter'] text-2xl font-medium text-neutral-900">
                  {project.title}
                </h3>

                <p className="mb-6 font-['Georgia'] text-sm leading-relaxed text-neutral-500">
                  {project.description}
                </p>

                <div className="mb-8 flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span key={tech} className="text-xs font-light text-neutral-400">
                      {tech}
                      {index < project.tech.length - 1 && <span className="ml-2 text-neutral-300">/</span>}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-neutral-200 pt-4">
                  <div className="text-sm">
                    <span className="font-medium text-neutral-900">{project.stats.value}</span>
                    <span className="ml-2 font-light text-neutral-400">{project.stats.label}</span>
                  </div>

                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-neutral-900"
                    whileHover={{ x: 3 }}
                  >
                    <span>Details</span>
                    <span>{"->"}</span>
                  </motion.a>
                </div>
              </div>

              <motion.div
                className="absolute bottom-0 left-0 right-0 h-px bg-neutral-900"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredId === project.id ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 flex items-center justify-between border-t border-neutral-200 pt-12"
        >
          <div>
            <p className="text-sm font-light tracking-wide text-neutral-400">NEXT PROJECT</p>
            <p className="mt-2 font-['Inter'] text-2xl text-neutral-900">Could be yours</p>
          </div>

          <Link href="/contact" className="group flex items-center gap-4">
            <span className="text-sm font-medium tracking-wide text-neutral-900">Start a project</span>
            <span className="text-xl transition-transform group-hover:translate-x-2">{"->"}</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
