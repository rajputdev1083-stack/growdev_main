// app/about/page.jsx
import Link from "next/link";
import Image from "next/image";
import { services, cities } from "@/data/cityData";
import CityLinks from "@/utlls/CityLinks";

export const metadata = {
  title: "About Grow Development | India's Premier Digital Agency",
  description: "Learn about Grow Development - India's trusted digital agency with 5+ years of experience, 1000+ happy clients, and 50+ experts. We deliver web development, marketing, and business solutions.",
  keywords: [
    "about Grow Development",
    "digital agency India",
    "web development company history",
    "best digital agency team",
    "IT company founders",
    "Dev Rajput digital agency",
    "Grow Development team",
    "digital marketing experts India",
    "web development professionals",
    "GST consultants team"
  ].join(", "),
  
  openGraph: {
    title: "About Grow Development - Our Story & Team",
    description: "Meet the team behind India's fastest growing digital agency. 5+ years of excellence in web development, marketing & business solutions.",
    images: ['/about-og-image.jpg'],
  },
};

export default function AboutPage() {
  
  const teamMembers = [
    { name: "Ankit Roy", role: "Founder & CEO", expertise: "Full Stack Development", image: "/team/ankit-roy.jpg" },
    { name: "Priya Sharma", role: "Head of Marketing", expertise: "Digital Strategy", image: "/team/priya-sharma.jpg" },
    { name: "Rahul Verma", role: "Lead Developer", expertise: "Web & App Development", image: "/team/rahul-verma.jpg" },
    { name: "Neha Gupta", role: "Creative Director", expertise: "UI/UX & Branding", image: "/team/neha-gupta.jpg" },
  ];

  const milestones = [
    { year: "2019", title: "The Beginning", description: "Grow Development started with a vision to transform digital landscape in India." },
    { year: "2020", title: "First 100 Clients", description: "Reached 100+ happy clients within first year of operation." },
    { year: "2021", title: "Team Expansion", description: "Grew to 20+ experts and expanded service offerings." },
    { year: "2022", title: "Pan-India Presence", description: "Started serving clients across 50+ cities in India." },
    { year: "2023", title: "1000+ Milestone", description: "Celebrated 1000+ successful projects and 50+ team members." },
    { year: "2024", title: "Innovation Hub", description: "Launched AI-powered solutions and RAG system integration." },
  ];

  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section with Top Wave */}
      <section className="relative bg-white pt-24 pb-32 overflow-hidden">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 right-0 rotate-180">
  <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    <path 
      d="M0 96L48 80C96 64 192 32 288 32C384 32 480 64 576 80C672 96 768 96 864 85.3C960 74.7 1056 53.3 1152 48C1248 42.7 1344 53.3 1392 58.7L1440 64V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V96Z" 
      fill="#000000"
    />
  </svg>
</div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-neutral-400 mb-6">
              <Link href="/" className="hover:text-neutral-600 transition">home</Link>
              <span>/</span>
              <span className="text-neutral-800">about</span>
            </nav>

            {/* Heading */}
            <h1 className="font-['Inter'] text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-neutral-900 mb-8">
              We're on a mission to
              <br />
              <span className="font-medium italic text-neutral-500">
                transform digital India
              </span>
            </h1>

            {/* Description */}
            <p className="font-['Georgia'] text-lg text-neutral-500 leading-relaxed max-w-2xl">
              Grow Development is more than just a digital agency. We're a team of passionate 
              creators, developers, and strategists dedicated to helping businesses thrive 
              in the digital age.
            </p>
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

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Left - Story Content */}
            <div>
              <span className="text-sm font-medium tracking-wider text-neutral-400 uppercase mb-4 block">
                our story
              </span>
              <h2 className="font-['Inter'] text-4xl md:text-5xl font-light text-neutral-900 mb-8">
                From a vision to
                <br />
                <span className="font-medium italic text-neutral-500">India's trusted partner</span>
              </h2>
              <div className="space-y-6 text-neutral-500 font-['Georgia'] leading-relaxed">
                <p>
                  Founded in 2024 by Dev  , Grow Development started as a small team of 
                  passionate developers with a simple vision: to make premium digital services 
                  accessible to businesses across India.
                </p>
                <p>
                  Today, we've grown into a full-service digital agency with 50+ experts serving 
                  100+ clients across {cities.length}+ cities. From web development to digital 
                  marketing and GST services, we offer comprehensive solutions under one roof.
                </p>
                <p>
                  What sets us apart is our commitment to quality, transparency, and results. 
                  We don't just build websites or run ads — we build long-term partnerships 
                  and help businesses achieve their digital goals.
                </p>
              </div>
            </div>

            {/* Right - Stats Block */}
            <div className="grid grid-cols-2 gap-6">
              <div className="border border-neutral-200 p-8 text-center">
                <div className="font-['Inter'] text-5xl font-light text-neutral-900 mb-2">5+</div>
                <div className="text-sm text-neutral-400 uppercase tracking-wide">years</div>
              </div>
              <div className="border border-neutral-200 p-8 text-center">
                <div className="font-['Inter'] text-5xl font-light text-neutral-900 mb-2">100+</div>
                <div className="text-sm text-neutral-400 uppercase tracking-wide">clients</div>
              </div>
              <div className="border border-neutral-200 p-8 text-center">
                <div className="font-['Inter'] text-5xl font-light text-neutral-900 mb-2">50+</div>
                <div className="text-sm text-neutral-400 uppercase tracking-wide">experts</div>
              </div>
              <div className="border border-neutral-200 p-8 text-center">
                <div className="font-['Inter'] text-5xl font-light text-neutral-900 mb-2">{cities.length}+</div>
                <div className="text-sm text-neutral-400 uppercase tracking-wide">cities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Mission */}
            <div className="bg-white p-12 border border-neutral-200">
              <span className="text-6xl mb-6 block text-neutral-300">🎯</span>
              <h3 className="font-['Inter'] text-3xl font-light text-neutral-900 mb-4">Our Mission</h3>
              <p className="text-neutral-500 font-['Georgia'] leading-relaxed">
                To empower businesses of all sizes with cutting-edge digital solutions that drive 
                growth, efficiency, and success in the digital era.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-12 border border-neutral-200">
              <span className="text-6xl mb-6 block text-neutral-300">✨</span>
              <h3 className="font-['Inter'] text-3xl font-light text-neutral-900 mb-4">Our Vision</h3>
              <p className="text-neutral-500 font-['Georgia'] leading-relaxed">
                To become India's most trusted digital partner, known for innovation, excellence, 
                and measurable results across every service we offer.
              </p>
            </div>
          </div>
        </div>
      </section>
<CityLinks/>
      {/* Timeline / Milestones */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wider text-neutral-400 uppercase">
              our journey
            </span>
            <h2 className="font-['Inter'] text-4xl md:text-5xl font-light text-neutral-900 mt-4">
              Key milestones
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 right-0 h-px bg-neutral-200 top-1/2 transform -translate-y-1/2 hidden md:block"></div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 relative">
              {milestones.map((item, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-12 h-12 bg-white border-2 border-neutral-300 rounded-full mx-auto mb-4 flex items-center justify-center text-neutral-500 font-medium relative z-10">
                    {item.year.slice(-2)}
                  </div>
                  <h3 className="font-medium text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wider text-neutral-400 uppercase">
              the minds behind
            </span>
            <h2 className="font-['Inter'] text-4xl md:text-5xl font-light text-neutral-900 mt-4">
              Meet our experts
            </h2>
            <p className="text-neutral-500 max-w-2xl mx-auto mt-4">
              Passionate professionals dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-neutral-200 overflow-hidden">
                  {/* Placeholder for team photos */}
                  <div className="w-full h-full bg-gradient-to-b from-neutral-300 to-neutral-400"></div>
                </div>
                <h3 className="font-medium text-neutral-900 text-lg">{member.name}</h3>
                <p className="text-sm text-neutral-500 mb-2">{member.role}</p>
                <p className="text-xs text-neutral-400">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div>
              <span className="text-sm font-medium tracking-wider text-neutral-400 uppercase mb-4 block">
                what we do
              </span>
              <h2 className="font-['Inter'] text-4xl md:text-5xl font-light text-neutral-900 mb-8">
                Complete digital
                <br />
                <span className="font-medium italic text-neutral-500">solutions under one roof</span>
              </h2>
              <p className="text-neutral-500 font-['Georgia'] leading-relaxed mb-8">
                From web development to digital marketing, GST services to creative design — 
                we offer {services.length}+ professional services tailored to your business needs.
              </p>
              <Link 
                href="/services"
                className="inline-block px-8 py-3 bg-neutral-900 text-white text-sm font-medium tracking-wide hover:bg-neutral-800 transition-colors"
              >
                Explore All Services
              </Link>
            </div>

            {/* Right - Service Categories Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-neutral-200 p-6">
                <span className="text-2xl mb-2 block">🌐</span>
                <h3 className="font-medium text-neutral-900">Development</h3>
                <p className="text-xs text-neutral-400 mt-1">Web & App</p>
              </div>
              <div className="border border-neutral-200 p-6">
                <span className="text-2xl mb-2 block">📈</span>
                <h3 className="font-medium text-neutral-900">Marketing</h3>
                <p className="text-xs text-neutral-400 mt-1">SEO & Ads</p>
              </div>
              <div className="border border-neutral-200 p-6">
                <span className="text-2xl mb-2 block">🎨</span>
                <h3 className="font-medium text-neutral-900">Creative</h3>
                <p className="text-xs text-neutral-400 mt-1">Design & Content</p>
              </div>
              <div className="border border-neutral-200 p-6">
                <span className="text-2xl mb-2 block">📋</span>
                <h3 className="font-medium text-neutral-900">Business</h3>
                <p className="text-xs text-neutral-400 mt-1">GST & Accounting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wider text-neutral-400 uppercase">
              client love
            </span>
            <h2 className="font-['Inter'] text-4xl md:text-5xl font-light text-neutral-900 mt-4">
              What they say about us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-neutral-200">
              <div className="flex text-yellow-400 mb-4">★★★★★</div>
              <p className="text-neutral-600 mb-6 italic">
                "Grow Development transformed our online presence completely. Professional, timely, and results-driven."
              </p>
              <div>
                <p className="font-medium text-neutral-900">Rajesh Kumar</p>
                <p className="text-sm text-neutral-400">Delhi</p>
              </div>
            </div>

            <div className="bg-white p-8 border border-neutral-200">
              <div className="flex text-yellow-400 mb-4">★★★★★</div>
              <p className="text-neutral-600 mb-6 italic">
                "Best decision we made for our business. Their marketing strategies doubled our revenue in 6 months."
              </p>
              <div>
                <p className="font-medium text-neutral-900">Priya Singh</p>
                <p className="text-sm text-neutral-400">Mumbai</p>
              </div>
            </div>

            <div className="bg-white p-8 border border-neutral-200">
              <div className="flex text-yellow-400 mb-4">★★★★★</div>
              <p className="text-neutral-600 mb-6 italic">
                "From GST filing to website development, they handle everything. True partners in our growth."
              </p>
              <div>
                <p className="font-medium text-neutral-900">Amit Shah</p>
                <p className="text-sm text-neutral-400">Bangalore</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Waves */}
      <section className="relative bg-white py-24 overflow-hidden">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 right-0 rotate-180">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 96L48 80C96 64 192 32 288 32C384 32 480 64 576 80C672 96 768 96 864 85.3C960 74.7 1056 53.3 1152 48C1248 42.7 1344 53.3 1392 58.7L1440 64V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V96Z" fill="#F5F5F5" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-['Inter'] text-4xl md:text-5xl font-light text-neutral-900 mb-6">
            Ready to work with us?
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto mb-10">
            Join 100+ happy clients who've transformed their businesses with Grow Development
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-neutral-900 text-white text-sm font-medium tracking-wide hover:bg-neutral-800 transition-colors"
          >
            Start Your Journey
          </Link>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 96L48 80C96 64 192 32 288 32C384 32 480 64 576 80C672 96 768 96 864 85.3C960 74.7 1056 53.3 1152 48C1248 42.7 1344 53.3 1392 58.7L1440 64V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V96Z" fill="#F5F5F5" />
          </svg>
        </div>
      </section>

      {/* Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Grow Development",
          "description": "Learn about Grow Development - India's premier digital agency",
          "mainEntity": {
            "@type": "Organization",
            "name": "Grow Development",
            "foundingDate": "2019",
            "founder": {
              "@type": "Person",
              "name": "Dev rajput"
            },
            "numberOfEmployees": "50+",
            "areaServed": "India",
            "description": "Digital agency offering web development, marketing, and business solutions"
          }
        })
      }} />
    </main>
  );
}