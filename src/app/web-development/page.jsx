// app/web-development/page.jsx
import Link from "next/link";
import Image from "next/image";
 import CityLinks from "@/utlls/CityLinks";
 
export const metadata = {
  title: "Web Development Services | Grow Development - React, Node.js, PHP, Python",
  description: "Professional web development services using React, Next.js, Node.js, PHP Laravel, Python Django, and more. Custom websites, e-commerce, web applications starting from ₹15,000.",
  keywords: [
    "web development India",
    "React js development",
    "Next js developers",
    "Node js development company",
    "PHP Laravel development",
    "Python Django experts",
    "MongoDB database",
    "MySQL developers",
    "ecommerce website development",
    "portfolio website cost",
    "web application development",
    "VPS hosting India",
    "Vercel deployment",
    "custom web application",
    "backend development services",
    "full stack developers India"
  ].join(", "),
  
  openGraph: {
    title: "Web Development Services - Modern Tech Stack Solutions",
    description: "Custom web development with React, Next.js, Node.js, PHP, Python. E-commerce, portfolios, web apps. Starting ₹15,000. Free consultation.",
    images: ['/web-dev-og-image.jpg'],
  },
};

// Tech stack data
const techStacks = {
  frontend: [
    { name: "React.js", icon: "/tech/react.svg", proficiency: 95, description: "Dynamic SPAs & complex UIs" },
    { name: "Next.js", icon: "/tech/next.svg", proficiency: 90, description: "SSR, SSG, optimal SEO" },
    { name: "Vue.js", icon: "/tech/vue.svg", proficiency: 85, description: "Progressive frameworks" },
    { name: "JavaScript", icon: "/tech/js.svg", proficiency: 98, description: "Core language expertise" },
  ],
  backend: [
    { name: "Node.js", icon: "/tech/node.svg", proficiency: 92, description: "Scalable server solutions" },
    { name: "Express.js", icon: "/tech/express.svg", proficiency: 90, description: "REST APIs & middleware" },
    { name: "PHP Laravel", icon: "/tech/laravel.svg", proficiency: 88, description: "Robust MVC applications" },
    { name: "Python Django", icon: "/tech/django.svg", proficiency: 87, description: "High-level framework" },
    { name: "Python (Flask)", icon: "/tech/flask.svg", proficiency: 85, description: "Lightweight APIs" },
  ],
  databases: [
    { name: "MongoDB", icon: "/tech/mongodb.svg", proficiency: 90, description: "NoSQL, document-based" },
    { name: "MySQL", icon: "/tech/mysql.svg", proficiency: 95, description: "Relational databases" },
    { name: "PostgreSQL", icon: "/tech/postgres.svg", proficiency: 88, description: "Advanced RDBMS" },
    { name: "SQLite", icon: "/tech/sqlite.svg", proficiency: 85, description: "Embedded databases" },
  ],
  hosting: [
    { name: "Vercel", icon: "/tech/vercel.svg", type: "Premium", description: "Frontend optimization" },
    { name: "VPS", icon: "/tech/vps.svg", type: "Premium", description: "Full control & scaling" },
    { name: "Shared Hosting", icon: "/tech/shared.svg", type: "Standard", description: "Budget-friendly" },
    { name: "AWS", icon: "/tech/aws.svg", type: "Premium", description: "Enterprise solutions" },
    { name: "Netlify", icon: "/tech/netlify.svg", type: "Standard", description: "Static sites" },
  ]
};

// Pricing packages
const pricingPackages = [
  {
    name: "Portfolio Website",
    price: "₹15,000",
    priceNote: "starting from",
    duration: "5-7 days",
    type: "personal",
    features: [
      "Custom design (React/Next.js)",
      "Up to 5 pages",
      "Responsive mobile design",
      "Contact form integration",
      "Basic SEO optimization",
      "Social media integration",
      "Shared hosting setup",
      "1 month support"
    ],
    tech: ["React", "Next.js", "CSS3", "Vercel"],
    popular: false,
    ideal: "Freelancers, Artists, Professionals"
  },
  {
    name: "Business Website",
    price: "₹35,000",
    priceNote: "starting from",
    duration: "10-15 days",
    type: "business",
    features: [
      "Custom React/Next.js development",
      "Up to 15 pages",
      "CMS integration (Contentful/Sanity)",
      "Blog/News section",
      "Advanced SEO setup",
      "Google Analytics integration",
      "Newsletter integration",
      "Premium VPS hosting",
      "3 months support",
      "Performance optimization"
    ],
    tech: ["React", "Next.js", "Node.js", "MongoDB/MySQL", "VPS"],
    popular: true,
    ideal: "SMEs, Startups, Local businesses"
  },
  {
    name: "E-commerce Website",
    price: "₹65,000",
    priceNote: "starting from",
    duration: "20-30 days",
    type: "ecommerce",
    features: [
      "Full-stack e-commerce solution",
      "Product management system",
      "Shopping cart functionality",
      "Payment gateway integration",
      "Order management",
      "Customer accounts",
      "Inventory management",
      "Admin dashboard",
      "SSL certificate",
      "Premium VPS hosting",
      "6 months support",
      "Marketing tools integration"
    ],
    tech: ["Next.js/Node.js", "Express", "MongoDB", "Payment APIs", "VPS"],
    popular: true,
    ideal: "Retailers, D2C brands, Wholesalers"
  },
  {
    name: "Custom Web Application",
    price: "₹1,20,000",
    priceNote: "starting from",
    duration: "30-45 days",
    type: "custom",
    features: [
      "Custom full-stack development",
      "Complex business logic",
      "Real-time features (Socket.io)",
      "Third-party API integrations",
      "Advanced database design",
      "Role-based access control",
      "File upload/processing",
      "Analytics dashboard",
      "Scalable architecture",
      "Premium VPS/AWS hosting",
      "12 months support",
      "Code documentation"
    ],
    tech: ["React/Vue", "Node.js/Python", "Express/Django", "MongoDB/PostgreSQL", "AWS/VPS"],
    popular: false,
    ideal: "Enterprises, SaaS platforms, Complex systems"
  }
];

// Project types
const projectTypes = [
  {
    title: "Portfolio Websites",
    description: "Personal portfolios, agency showcases, creative professional sites",
    icon: "🎨",
    tech: ["React", "Next.js", "Vercel"],
    price: "₹15,000 - ₹35,000"
  },
  {
    title: "E-commerce Platforms",
    description: "Online stores, marketplace integrations, inventory management",
    icon: "🛒",
    tech: ["Next.js", "Node.js", "MongoDB", "Payment Gateway"],
    price: "₹65,000 - ₹1,50,000"
  },
  {
    title: "Business Websites",
    description: "Corporate sites, service showcases, lead generation platforms",
    icon: "🏢",
    tech: ["React", "PHP Laravel", "MySQL"],
    price: "₹35,000 - ₹65,000"
  },
  {
    title: "Web Applications",
    description: "Custom CRMs, dashboards, booking systems, SaaS platforms",
    icon: "⚙️",
    tech: ["MERN/MEAN", "Python Django", "PostgreSQL"],
    price: "₹1,20,000 - ₹5,00,000"
  },
  {
    title: "Real-time Applications",
    description: "Chat apps, live tracking, collaborative platforms",
    icon: "⚡",
    tech: ["Node.js", "Socket.io", "React", "MongoDB"],
    price: "₹1,50,000 - ₹4,00,000"
  },
  {
    title: "API Development",
    description: "RESTful APIs, microservices, third-party integrations",
    icon: "🔌",
    tech: ["Express", "Django REST", "FastAPI"],
    price: "₹50,000 - ₹2,00,000"
  }
];

// Hosting options
const hostingOptions = [
  {
    name: "Shared Hosting",
    price: "₹2,999/year",
    features: ["Basic performance", "10GB storage", "50GB bandwidth", "cPanel", "Free SSL"],
    ideal: "Portfolio, Small business sites"
  },
  {
    name: "VPS Hosting (Premium)",
    price: "₹9,999/year",
    features: ["Dedicated resources", "50GB NVMe SSD", "Unlimited bandwidth", "Root access", "24/7 support"],
    ideal: "E-commerce, High-traffic sites"
  },
  {
    name: "Vercel/Netlify",
    price: "₹4,999/year",
    features: ["Automatic deployments", "Global CDN", "Serverless functions", "SSL included", "Analytics"],
    ideal: "React/Next.js projects"
  },
  {
    name: "AWS/Azure (Premium)",
    price: "Custom quote",
    features: ["Enterprise scaling", "Load balancing", "Auto-scaling", "Managed services", "SLA support"],
    ideal: "Enterprise applications"
  }
];

// Process steps
const processSteps = [
  { step: "01", title: "Discovery", description: "Understanding your requirements, target audience, and business goals" },
  { step: "02", title: "Planning", description: "Tech stack selection, architecture design, timeline planning" },
  { step: "03", title: "Design", description: "UI/UX design, wireframes, interactive prototypes" },
  { step: "04", title: "Development", description: "Frontend & backend coding, database setup, API integration" },
  { step: "05", title: "Testing", description: "Functionality testing, performance optimization, security checks" },
  { step: "06", title: "Deployment", description: "Server setup, domain connection, launch preparation" },
  { step: "07", title: "Support", description: "Maintenance, updates, 24/7 technical support" },
];

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section with Wave */}
      <section className="relative bg-white pt-24 pb-32 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 rotate-180">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 96L48 80C96 64 192 32 288 32C384 32 480 64 576 80C672 96 768 96 864 85.3C960 74.7 1056 53.3 1152 48C1248 42.7 1344 53.3 1392 58.7L1440 64V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V96Z" fill="#000000" fillOpacity="0.05" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-neutral-400 mb-6">
              <Link href="/" className="hover:text-neutral-600 transition">home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-neutral-600 transition">services</Link>
              <span>/</span>
              <span className="text-neutral-800">web-development</span>
            </nav>

            {/* Heading */}
            <h1 className="font-['Inter'] text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-neutral-900 mb-8">
              Web Development
              <br />
              <span className="font-medium italic text-neutral-500">
                with modern tech stack
              </span>
            </h1>

            {/* Description */}
            <p className="font-['Georgia'] text-lg text-neutral-500 leading-relaxed max-w-3xl">
              From simple portfolios to complex web applications, we build high-performance 
              solutions using React, Next.js, Node.js, Python, and PHP. Starting at just ₹15,000.
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-3 mt-8">
              {['React.js', 'Next.js', 'Vue.js', 'Node.js', 'Python', 'PHP', 'MongoDB', 'MySQL'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-neutral-100 text-neutral-700 text-sm rounded-full border border-neutral-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 96L48 80C96 64 192 32 288 32C384 32 480 64 576 80C672 96 768 96 864 85.3C960 74.7 1056 53.3 1152 48C1248 42.7 1344 53.3 1392 58.7L1440 64V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V96Z" fill="#F5F5F5" />
          </svg>
        </div>
      </section>

      {/* Tech Stack Showcase */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wider text-neutral-400 uppercase">
              our expertise
            </span>
            <h2 className="font-['Inter'] text-4xl md:text-5xl font-light text-neutral-900 mt-4">
              Modern tech stack
            </h2>
            <p className="text-neutral-500 max-w-2xl mx-auto mt-4">
              We use cutting-edge technologies to build fast, scalable, and secure web solutions
            </p>
          </div>

          {/* Frontend */}
          <div className="mb-16">
            <h3 className="font-['Inter'] text-2xl font-light text-neutral-900 mb-8 flex items-center">
              <span className="w-8 h-8 bg-neutral-900 text-white rounded-full flex items-center justify-center text-sm mr-3">01</span>
              Frontend Development
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techStacks.frontend.map((tech) => (
                <div key={tech.name} className="bg-white p-6 border border-neutral-200 hover:border-neutral-400 transition group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center text-2xl">
                      {tech.name[0]}
                    </div>
                    <span className="text-sm font-medium text-neutral-500">{tech.proficiency}%</span>
                  </div>
                  <h4 className="font-medium text-neutral-900 mb-2">{tech.name}</h4>
                  <p className="text-sm text-neutral-500">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="mb-16">
            <h3 className="font-['Inter'] text-2xl font-light text-neutral-900 mb-8 flex items-center">
              <span className="w-8 h-8 bg-neutral-900 text-white rounded-full flex items-center justify-center text-sm mr-3">02</span>
              Backend & APIs
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {techStacks.backend.map((tech) => (
                <div key={tech.name} className="bg-white p-6 border border-neutral-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center text-2xl">
                      {tech.name[0]}
                    </div>
                    <span className="text-sm font-medium text-neutral-500">{tech.proficiency}%</span>
                  </div>
                  <h4 className="font-medium text-neutral-900 mb-2">{tech.name}</h4>
                  <p className="text-sm text-neutral-500">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className="mb-16">
            <h3 className="font-['Inter'] text-2xl font-light text-neutral-900 mb-8 flex items-center">
              <span className="w-8 h-8 bg-neutral-900 text-white rounded-full flex items-center justify-center text-sm mr-3">03</span>
              Databases
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techStacks.databases.map((tech) => (
                <div key={tech.name} className="bg-white p-6 border border-neutral-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center text-2xl">
                      {tech.name[0]}
                    </div>
                    <span className="text-sm font-medium text-neutral-500">{tech.proficiency}%</span>
                  </div>
                  <h4 className="font-medium text-neutral-900 mb-2">{tech.name}</h4>
                  <p className="text-sm text-neutral-500">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wider text-neutral-400 uppercase">
              transparent pricing
            </span>
            <h2 className="font-['Inter'] text-4xl md:text-5xl font-light text-neutral-900 mt-4">
              Development packages
            </h2>
            <p className="text-neutral-500 max-w-2xl mx-auto mt-4">
              Fixed-price packages with no hidden costs. Custom requirements? We'll create a tailored quote.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPackages.map((pkg, index) => (
              <div 
                key={index} 
                className={`border ${pkg.popular ? 'border-neutral-900' : 'border-neutral-200'} bg-white relative`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-neutral-900 text-white text-xs px-3 py-1 font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <span className="text-4xl mb-4 block">{pkg.icon || '💻'}</span>
                  <h3 className="font-['Inter'] text-2xl font-light text-neutral-900 mb-2">{pkg.name}</h3>
                  <p className="text-xs text-neutral-400 mb-4">{pkg.ideal}</p>
                  <div className="mb-6">
                    <span className="font-['Inter'] text-4xl font-light text-neutral-900">{pkg.price}</span>
                    <span className="text-sm text-neutral-400 block">{pkg.priceNote}</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-sm font-medium text-neutral-900">Duration:</span>
                    <span className="text-sm text-neutral-500 ml-2">{pkg.duration}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-neutral-600 flex items-start">
                        <span className="text-neutral-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {pkg.tech.map((t) => (
                      <span key={t} className="text-xs bg-neutral-100 px-2 py-1 text-neutral-600">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/contact?service=${pkg.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block w-full py-3 bg-neutral-900 text-white text-sm font-medium text-center hover:bg-neutral-800 transition"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types Grid */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wider text-neutral-400 uppercase">
              what we build
            </span>
            <h2 className="font-['Inter'] text-4xl md:text-5xl font-light text-neutral-900 mt-4">
              Project types
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectTypes.map((project, index) => (
              <div key={index} className="bg-white p-8 border border-neutral-200 hover:border-neutral-400 transition group">
                <span className="text-4xl mb-4 block">{project.icon}</span>
                <h3 className="font-['Inter'] text-xl font-light text-neutral-900 mb-2">{project.title}</h3>
                <p className="text-sm text-neutral-500 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs bg-neutral-100 px-2 py-1 text-neutral-600">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-sm font-medium text-neutral-900">{project.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hosting Options */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wider text-neutral-400 uppercase">
              deployment & hosting
            </span>
            <h2 className="font-['Inter'] text-4xl md:text-5xl font-light text-neutral-900 mt-4">
              Choose your hosting
            </h2>
            <p className="text-neutral-500 max-w-2xl mx-auto mt-4">
              From budget-friendly shared hosting to premium VPS and enterprise solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hostingOptions.map((hosting, index) => (
              <div key={index} className="border border-neutral-200 p-6">
                <h3 className="font-['Inter'] text-xl font-light text-neutral-900 mb-2">{hosting.name}</h3>
                <p className="text-2xl font-light text-neutral-900 mb-4">{hosting.price}</p>
                <ul className="space-y-2 mb-6">
                  {hosting.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-neutral-600 flex items-start">
                      <span className="text-neutral-400 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-neutral-400 italic">{hosting.ideal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wider text-neutral-400 uppercase">
              how we work
            </span>
            <h2 className="font-['Inter'] text-4xl md:text-5xl font-light text-neutral-900 mt-4">
              Development process
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-7 gap-4">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white border-2 border-neutral-300 rounded-full flex items-center justify-center font-['Inter'] text-neutral-900">
                  {step.step}
                </div>
                <h3 className="font-medium text-neutral-900 text-sm mb-2">{step.title}</h3>
                <p className="text-xs text-neutral-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wider text-neutral-400 uppercase">
              got questions?
            </span>
            <h2 className="font-['Inter'] text-4xl md:text-5xl font-light text-neutral-900 mt-4">
              Frequently asked
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Which tech stack is best for my project?",
                a: "We recommend based on your needs: React/Next.js for dynamic frontend, Node.js/Python for scalable backend, and MongoDB/MySQL based on data structure. We'll consult with you to choose the perfect stack."
              },
              {
                q: "Do you provide hosting and maintenance?",
                a: "Yes! We offer various hosting options from shared to VPS, plus monthly maintenance packages including updates, backups, and security patches."
              },
              {
                q: "How long does development take?",
                a: "Portfolio sites: 5-7 days, Business sites: 10-15 days, E-commerce: 20-30 days, Custom applications: 30-45+ days depending on complexity."
              },
              {
                q: "What about payment and milestones?",
                a: "We work on a milestone-based payment structure: 30% advance, 40% on development, 30% on delivery. Custom payment plans available for large projects."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-neutral-200 p-6">
                <h3 className="font-medium text-neutral-900 mb-2">{faq.q}</h3>
                <p className="text-neutral-500 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-neutral-900 py-24 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 rotate-180">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 96L48 80C96 64 192 32 288 32C384 32 480 64 576 80C672 96 768 96 864 85.3C960 74.7 1056 53.3 1152 48C1248 42.7 1344 53.3 1392 58.7L1440 64V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V96Z" fill="#000000" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-['Inter'] text-4xl md:text-5xl font-light text-white mb-6">
            Ready to start your project?
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto mb-10">
            Get a free consultation and detailed quote within 24 hours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-neutral-900 text-sm font-medium tracking-wide hover:bg-neutral-100 transition"
            >
              Get Free Quote
            </Link>
            <Link
              href="/portfolio"
              className="inline-block px-10 py-4 border border-white text-white text-sm font-medium tracking-wide hover:bg-white hover:text-neutral-900 transition"
            >
              View Portfolio
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 96L48 80C96 64 192 32 288 32C384 32 480 64 576 80C672 96 768 96 864 85.3C960 74.7 1056 53.3 1152 48C1248 42.7 1344 53.3 1392 58.7L1440 64V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V96Z" fill="#000000" />
          </svg>
        </div>
      </section>

      <CityLinks />

      {/* Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Web Development",
          "provider": {
            "@type": "Organization",
            "name": "GR Development",
            "url": "https://growdevelopment.com"
          },
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "15000",
            "highPrice": "500000",
            "priceCurrency": "INR",
            "offerCount": pricingPackages.length
          },
          "areaServed": {
            "@type": "Country",
            "name": "India"
          }
        })
      }} />
    </main>
  );
}