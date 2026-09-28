// app/app-development/page.jsx
import Link from "next/link";
import Image from "next/image";
import CityLinks from "@/utlls/CityLinks";

export const metadata = {
  title: "App Development Services | GR Development - iOS, Android, Cross-Platform",
  description: "Professional app development services using React Native, Flutter, Swift, Kotlin. Native iOS, Android, and cross-platform apps starting from ₹15,000.",
  keywords: [
    "app development India",
    "iOS app development",
    "Android app development",
    "React Native developers",
    "Flutter app development",
    "Swift iOS development",
    "Kotlin Android development",
    "cross platform apps",
    "mobile app developers",
    "hybrid app development",
    "native app development",
    "app development cost India",
    "iPhone app developers",
    "Android app developers",
    "mobile application company"
  ].join(", "),
  
  openGraph: {
    title: "App Development - iOS, Android & Cross-Platform Solutions",
    description: "Native and cross-platform mobile apps with React Native, Flutter, Swift, Kotlin. Starting ₹15,000. Free consultation.",
    images: ['/app-dev-og-image.jpg'],
  },
};

// App Development Tech Stack
const appTechStacks = {
  native: [
    { name: "Swift", platform: "iOS", icon: "/tech/swift.svg", proficiency: 92, description: "Native iOS development" },
    { name: "Kotlin", platform: "Android", icon: "/tech/kotlin.svg", proficiency: 90, description: "Native Android development" },
    { name: "Java", platform: "Android", icon: "/tech/java.svg", proficiency: 88, description: "Android app development" },
    { name: "Objective-C", platform: "iOS", icon: "/tech/objc.svg", proficiency: 85, description: "Legacy iOS support" },
  ],
  crossPlatform: [
    { name: "React Native", platform: "iOS/Android", icon: "/tech/react-native.svg", proficiency: 95, description: "Cross-platform apps" },
    { name: "Flutter", platform: "iOS/Android", icon: "/tech/flutter.svg", proficiency: 92, description: "UI-focused framework" },
    { name: "Ionic", platform: "Hybrid", icon: "/tech/ionic.svg", proficiency: 85, description: "Hybrid mobile apps" },
    { name: "Xamarin", platform: ".NET", icon: "/tech/xamarin.svg", proficiency: 80, description: "C# cross-platform" },
  ],
  backend: [
    { name: "Firebase", type: "Backend", icon: "/tech/firebase.svg", proficiency: 94, description: "Real-time database & auth" },
    { name: "Node.js", type: "API", icon: "/tech/node.svg", proficiency: 92, description: "RESTful APIs" },
    { name: "GraphQL", type: "API", icon: "/tech/graphql.svg", proficiency: 88, description: "Query language" },
    { name: "MongoDB", type: "Database", icon: "/tech/mongodb.svg", proficiency: 90, description: "NoSQL database" },
    { name: "PostgreSQL", type: "Database", icon: "/tech/postgres.svg", proficiency: 87, description: "SQL database" },
  ],
  tools: [
    { name: "Xcode", platform: "iOS", icon: "/tech/xcode.svg", description: "iOS development IDE" },
    { name: "Android Studio", platform: "Android", icon: "/tech/android-studio.svg", description: "Android development IDE" },
    { name: "VS Code", platform: "Cross", icon: "/tech/vscode.svg", description: "Code editor" },
    { name: "Figma", platform: "Design", icon: "/tech/figma.svg", description: "UI/UX design" },
    { name: "Postman", platform: "Testing", icon: "/tech/postman.svg", description: "API testing" },
  ]
};

// App Development Pricing Packages
const appPricingPackages = [
  {
    name: "Basic App",
    price: "₹15,000",
    priceNote: "starting from",
    duration: "15-20 days",
    type: "basic",
    features: [
      "Single platform (iOS or Android)",
      "Up to 5 screens",
      "Basic UI/UX design",
      "Authentication (email/password)",
      "Push notifications",
      "API integration (up to 3 APIs)",
      "App store submission help",
      "1 month support"
    ],
    tech: ["React Native", "Firebase", "One platform"],
    popular: false,
    ideal: "Startups, MVPs, Simple apps"
  },
  {
    name: "Business App",
    price: "₹45,000",
    priceNote: "starting from",
    duration: "25-35 days",
    type: "business",
    features: [
      "Both iOS & Android platforms",
      "Up to 15 screens",
      "Custom UI/UX design",
      "Social media login",
      "Offline support",
      "In-app purchases",
      "Admin dashboard",
      "Analytics integration",
      "Crash reporting",
      "3 months support"
    ],
    tech: ["React Native/Flutter", "Node.js", "MongoDB", "Both platforms"],
    popular: true,
    ideal: "SMEs, Retail apps, Service platforms"
  },
  {
    name: "E-commerce App",
    price: "₹85,000",
    priceNote: "starting from",
    duration: "35-45 days",
    type: "ecommerce",
    features: [
      "Both iOS & Android",
      "Product catalog",
      "Shopping cart",
      "Payment gateway integration",
      "Order tracking",
      "Customer reviews",
      "Wishlist functionality",
      "Multi-vendor support (optional)",
      "Inventory management",
      "Admin panel",
      "Push marketing",
      "6 months support"
    ],
    tech: ["Flutter/React Native", "Node.js", "PostgreSQL", "Redis", "Both platforms"],
    popular: true,
    ideal: "Retailers, D2C brands, Marketplaces"
  },
  {
    name: "Enterprise App",
    price: "₹1,50,000+",
    priceNote: "custom quote",
    duration: "45-60+ days",
    type: "enterprise",
    features: [
      "Native iOS & Android",
      "Complex business logic",
      "Real-time features",
      "Advanced security",
      "Biometric authentication",
      "Offline sync",
      "Custom animations",
      "Enterprise API integration",
      "Scalable architecture",
      "Performance optimization",
      "Dedicated support",
      "12 months support"
    ],
    tech: ["Swift", "Kotlin", "Node.js/Python", "PostgreSQL", "AWS", "Both platforms"],
    popular: false,
    ideal: "Enterprises, Banks, Healthcare, Logistics"
  }
];

// App Types
const appTypes = [
  {
    title: "Native iOS Apps",
    description: "Swift/Objective-C apps optimized for iPhone and iPad",
    icon: "📱",
    tech: ["Swift", "Xcode", "iOS SDK", "Core Data"],
    price: "₹25,000 - ₹2,00,000",
    features: ["Apple Design Guidelines", "App Store optimization", "iCloud integration", "Apple Pay"]
  },
  {
    title: "Native Android Apps",
    description: "Kotlin/Java apps for all Android devices",
    icon: "🤖",
    tech: ["Kotlin", "Android Studio", "Jetpack", "Material Design"],
    price: "₹25,000 - ₹2,00,000",
    features: ["Material Design", "Google Play Store", "Firebase integration", "Google Pay"]
  },
  {
    title: "Cross-Platform Apps",
    description: "Single codebase for both iOS and Android",
    icon: "🔄",
    tech: ["React Native", "Flutter", "Ionic"],
    price: "₹15,000 - ₹1,50,000",
    features: ["Faster development", "Lower cost", "Consistent UI", "Code reuse (90%)"]
  },
  {
    title: "E-commerce Apps",
    description: "Full-featured shopping apps with payment gateways",
    icon: "🛍️",
    tech: ["React Native", "Node.js", "MongoDB", "Razorpay/Stripe"],
    price: "₹65,000 - ₹2,50,000",
    features: ["Product catalog", "Cart & checkout", "Order tracking", "Reviews & ratings"]
  },
  {
    title: "Food Delivery Apps",
    description: "Restaurant discovery, ordering, and tracking",
    icon: "🍔",
    tech: ["Flutter", "Firebase", "Google Maps API", "Real-time tracking"],
    price: "₹80,000 - ₹2,50,000",
    features: ["Restaurant listings", "Real-time tracking", "Online payment", "Order management"]
  },
  {
    title: "Healthcare Apps",
    description: "Telemedicine, appointment booking, health tracking",
    icon: "🏥",
    tech: ["React Native", "Node.js", "PostgreSQL", "Video SDK"],
    price: "₹90,000 - ₹3,00,000",
    features: ["Video consultations", "Appointment scheduling", "Health records", "Prescriptions"]
  },
  {
    title: "Social Media Apps",
    description: "Content sharing, messaging, and community features",
    icon: "💬",
    tech: ["React Native", "Socket.io", "MongoDB", "Cloud storage"],
    price: "₹85,000 - ₹3,00,000",
    features: ["Real-time chat", "Media sharing", "Push notifications", "User profiles"]
  },
  {
    title: "On-Demand Apps",
    description: "Service booking, ride-hailing, task management",
    icon: "🚀",
    tech: ["Flutter", "Node.js", "MongoDB", "Google Maps"],
    price: "₹75,000 - ₹2,50,000",
    features: ["User/Provider apps", "Real-time tracking", "In-app payments", "Ratings"]
  },
  {
    title: "Educational Apps",
    description: "E-learning, course platforms, quiz apps",
    icon: "📚",
    tech: ["React Native", "Node.js", "MongoDB", "Video player"],
    price: "₹50,000 - ₹2,00,000",
    features: ["Video courses", "Quizzes", "Progress tracking", "Certificates"]
  }
];

// Development Process
const appProcess = [
  { step: "01", title: "Discovery", description: "Requirements gathering, market research, competitor analysis" },
  { step: "02", title: "UX Design", description: "User flows, wireframes, interactive prototypes" },
  { step: "03", title: "UI Design", description: "Visual design, branding, asset creation" },
  { step: "04", title: "Development", description: "Frontend coding, backend APIs, database setup" },
  { step: "05", title: "Testing", description: "QA testing, device compatibility, performance testing" },
  { step: "06", title: "Deployment", description: "App store submission, Play Store launch" },
  { step: "07", title: "Maintenance", description: "Updates, bug fixes, feature additions" },
];

// Features by platform
const platformFeatures = {
  ios: [
    "Swift/SwiftUI development",
    "iOS 14+ compatibility",
    "iPhone & iPad support",
    "App Store guidelines",
    "Apple Push Notifications",
    "iCloud integration",
    "Apple Pay",
    "Face ID/Touch ID",
    "Core Data",
    "TestFlight testing"
  ],
  android: [
    "Kotlin/Java development",
    "Material Design",
    "Android 8+ support",
    "Google Play Store",
    "Firebase Cloud Messaging",
    "Google Drive integration",
    "Google Pay",
    "Biometric authentication",
    "Room database",
    "Internal testing tracks"
  ],
  cross: [
    "Single codebase",
    "Native performance",
    "Platform-specific UI",
    "Shared business logic",
    "Hot reload",
    "Third-party plugins",
    "Code push updates",
    "Consistent experience"
  ]
};

export default function AppDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Hero Section */}
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
              <span className="text-neutral-800">app-development</span>
            </nav>

            {/* Heading */}
            <h1 className="font-['Inter'] text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-neutral-900 mb-8">
              App Development
              <br />
              <span className="font-medium italic text-neutral-500">
                iOS • Android • Cross-Platform
              </span>
            </h1>

            {/* Description */}
            <p className="font-['Georgia'] text-lg text-neutral-500 leading-relaxed max-w-3xl mb-8">
              Native and cross-platform mobile apps built with Swift, Kotlin, React Native, and Flutter. 
              From MVPs to enterprise solutions, we deliver exceptional mobile experiences.
            </p>

            {/* Platform Badges */}
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-full">iOS (Swift/Objective-C)</span>
              <span className="px-4 py-2 bg-neutral-800 text-white text-sm rounded-full">Android (Kotlin/Java)</span>
              <span className="px-4 py-2 bg-neutral-700 text-white text-sm rounded-full">React Native</span>
              <span className="px-4 py-2 bg-neutral-600 text-white text-sm rounded-full">Flutter</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 96L48 80C96 64 192 32 288 32C384 32 480 64 576 80C672 96 768 96 864 85.3C960 74.7 1056 53.3 1152 48C1248 42.7 1344 53.3 1392 58.7L1440 64V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V96Z" fill="#F5F5F5" />
          </svg>
        </div>
      </section>

      {/* Platform Comparison */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wider text-neutral-400 uppercase">
              choose your platform
            </span>
            <h2 className="font-['Inter'] text-4xl md:text-5xl font-light text-neutral-900 mt-4">
              Native vs Cross-Platform
            </h2>
            <p className="text-neutral-500 max-w-2xl mx-auto mt-4">
              We help you choose the right approach based on your budget, timeline, and requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* iOS Native */}
            <div className="bg-white p-8 border border-neutral-200">
              <span className="text-4xl mb-4 block">🍎</span>
              <h3 className="font-['Inter'] text-2xl font-medium text-neutral-900 mb-4">Native iOS</h3>
              <p className="text-sm text-neutral-500 mb-6">Perfect for Apple ecosystem, premium experience</p>
              <ul className="space-y-3 mb-8">
                {platformFeatures.ios.map((feature, idx) => (
                  <li key={idx} className="text-sm text-neutral-600 flex items-start">
                    <span className="text-neutral-400 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-sm font-medium text-neutral-900">Ideal for: Apple-focused products</p>
            </div>

            {/* Android Native */}
            <div className="bg-white p-8 border border-neutral-200">
              <span className="text-4xl mb-4 block">🤖</span>
              <h3 className="font-['Inter'] text-2xl font-medium text-neutral-900 mb-4">Native Android</h3>
              <p className="text-sm text-neutral-500 mb-6">Maximum reach, Google ecosystem integration</p>
              <ul className="space-y-3 mb-8">
                {platformFeatures.android.map((feature, idx) => (
                  <li key={idx} className="text-sm text-neutral-600 flex items-start">
                    <span className="text-neutral-400 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-sm font-medium text-neutral-900">Ideal for: Mass market, India focus</p>
            </div>

            {/* Cross-Platform */}
            <div className="bg-white p-8 border border-neutral-900 relative">
              <div className="absolute top-0 right-0 bg-neutral-900 text-white text-xs px-3 py-1">
                Most Popular
              </div>
              <span className="text-4xl mb-4 block">🔄</span>
              <h3 className="font-['Inter'] text-2xl font-medium text-neutral-900 mb-4">Cross-Platform</h3>
              <p className="text-sm text-neutral-500 mb-6">Best value, faster time to market</p>
              <ul className="space-y-3 mb-8">
                {platformFeatures.cross.map((feature, idx) => (
                  <li key={idx} className="text-sm text-neutral-600 flex items-start">
                    <span className="text-neutral-400 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-sm font-medium text-neutral-900">Ideal for: Startups, MVPs, Budget-conscious</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wider text-neutral-400 uppercase">
              our expertise
            </span>
            <h2 className="font-['Inter'] text-4xl md:text-5xl font-light text-neutral-900 mt-4">
              App Development Stack
            </h2>
          </div>

          {/* Native */}
          <div className="mb-16">
            <h3 className="font-['Inter'] text-2xl font-light text-neutral-900 mb-8">Native Development</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {appTechStacks.native.map((tech) => (
                <div key={tech.name} className="border border-neutral-200 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-medium text-neutral-900">{tech.name}</h4>
                      <p className="text-xs text-neutral-400">{tech.platform}</p>
                    </div>
                    <span className="text-sm font-medium text-neutral-500">{tech.proficiency}%</span>
                  </div>
                  <p className="text-sm text-neutral-500">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cross Platform */}
          <div className="mb-16">
            <h3 className="font-['Inter'] text-2xl font-light text-neutral-900 mb-8">Cross-Platform Frameworks</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {appTechStacks.crossPlatform.map((tech) => (
                <div key={tech.name} className="border border-neutral-200 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-medium text-neutral-900">{tech.name}</h4>
                      <p className="text-xs text-neutral-400">{tech.platform}</p>
                    </div>
                    <span className="text-sm font-medium text-neutral-500">{tech.proficiency}%</span>
                  </div>
                  <p className="text-sm text-neutral-500">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Backend & Tools */}
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="font-['Inter'] text-2xl font-light text-neutral-900 mb-8">Backend & APIs</h3>
              <div className="grid gap-4">
                {appTechStacks.backend.map((tech) => (
                  <div key={tech.name} className="border border-neutral-200 p-4 flex items-start justify-between">
                    <div>
                      <h4 className="font-medium text-neutral-900">{tech.name}</h4>
                      <p className="text-xs text-neutral-400">{tech.type}</p>
                      <p className="text-sm text-neutral-500 mt-1">{tech.description}</p>
                    </div>
                    <span className="text-sm font-medium text-neutral-500">{tech.proficiency}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-['Inter'] text-2xl font-light text-neutral-900 mb-8">Development Tools</h3>
              <div className="grid gap-4">
                {appTechStacks.tools.map((tech) => (
                  <div key={tech.name} className="border border-neutral-200 p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium text-neutral-900">{tech.name}</h4>
                        <p className="text-xs text-neutral-400">{tech.platform}</p>
                      </div>
                    </div>
                    <p className="text-sm text-neutral-500 mt-2">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wider text-neutral-400 uppercase">
              transparent pricing
            </span>
            <h2 className="font-['Inter'] text-4xl md:text-5xl font-light text-neutral-900 mt-4">
              App Development Packages
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {appPricingPackages.map((pkg, index) => (
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
                  <h3 className="font-['Inter'] text-2xl font-light text-neutral-900 mb-2">{pkg.name}</h3>
                  <p className="text-xs text-neutral-400 mb-4">{pkg.ideal}</p>
                  <div className="mb-6">
                    <span className="font-['Inter'] text-4xl font-light text-neutral-900">{pkg.price}</span>
                    <span className="text-sm text-neutral-400 block">{pkg.priceNote}</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-sm font-medium text-neutral-900">Timeline:</span>
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
                    href={`/contact?service=${pkg.name.toLowerCase().replace(/\s+/g, '-')}-app`}
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

      {/* App Types Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wider text-neutral-400 uppercase">
              what we build
            </span>
            <h2 className="font-['Inter'] text-4xl md:text-5xl font-light text-neutral-900 mt-4">
              Types of Apps We Develop
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appTypes.map((app, index) => (
              <div key={index} className="border border-neutral-200 p-8 hover:border-neutral-400 transition group">
                <span className="text-4xl mb-4 block">{app.icon}</span>
                <h3 className="font-['Inter'] text-xl font-light text-neutral-900 mb-2">{app.title}</h3>
                <p className="text-sm text-neutral-500 mb-4">{app.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {app.tech.slice(0, 3).map((t) => (
                    <span key={t} className="text-xs bg-neutral-100 px-2 py-1 text-neutral-600">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-sm font-medium text-neutral-900 mb-3">{app.price}</p>
                <ul className="space-y-2">
                  {app.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="text-xs text-neutral-500 flex items-start">
                      <span className="text-neutral-400 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
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
              our process
            </span>
            <h2 className="font-['Inter'] text-4xl md:text-5xl font-light text-neutral-900 mt-4">
              How We Build Apps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-7 gap-4">
            {appProcess.map((step, index) => (
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

      {/* App Store Deployment */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-medium tracking-wider text-neutral-400 uppercase mb-4 block">
                launch & deploy
              </span>
              <h2 className="font-['Inter'] text-4xl md:text-5xl font-light text-neutral-900 mb-8">
                App Store
                <br />
                <span className="font-medium italic text-neutral-500">submission & management</span>
              </h2>
              <p className="text-neutral-500 mb-8">
                We handle the entire app store submission process for both Apple App Store and Google Play Store, including:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-neutral-900">📱</span>
                  <span className="text-sm text-neutral-600">Apple Developer Account setup & management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neutral-900">🤖</span>
                  <span className="text-sm text-neutral-600">Google Play Console configuration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neutral-900">📸</span>
                  <span className="text-sm text-neutral-600">Screenshots & preview videos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neutral-900">📝</span>
                  <span className="text-sm text-neutral-600">App description & ASO optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neutral-900">✅</span>
                  <span className="text-sm text-neutral-600">Review process handling & updates</span>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-50 p-12 border border-neutral-200">
              <span className="text-6xl mb-6 block">🚀</span>
              <h3 className="font-['Inter'] text-3xl font-light text-neutral-900 mb-4">Included in all packages</h3>
              <p className="text-neutral-500 mb-6">
                Every app package includes basic app store submission. Enterprise packages include ASO optimization and marketing materials.
              </p>
              <div className="flex gap-4">
                <div className="text-center flex-1">
                  <div className="text-2xl font-light text-neutral-900">7-14</div>
                  <div className="text-xs text-neutral-400">Days for review</div>
                </div>
                <div className="text-center flex-1">
                  <div className="text-2xl font-light text-neutral-900">95%</div>
                  <div className="text-xs text-neutral-400">First-time approval</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium tracking-wider text-neutral-400 uppercase">
              faq
            </span>
            <h2 className="font-['Inter'] text-4xl md:text-5xl font-light text-neutral-900 mt-4">
              Common Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Should I choose native or cross-platform?",
                a: "Cross-platform (React Native/Flutter) is great for MVPs, startups, and when you need both platforms quickly. Native (Swift/Kotlin) is best for complex apps, maximum performance, and platform-specific features."
              },
              {
                q: "How much does it cost to maintain an app?",
                a: "Maintenance typically costs 15-20% of development cost annually. This includes OS updates, bug fixes, server costs, and app store fees. We offer maintenance packages starting at ₹5,000/month."
              },
              {
                q: "How long does app store approval take?",
                a: "Apple App Store: 24-48 hours initial review, 7-14 days full review. Google Play Store: 2-3 hours to 2 days. We help ensure first-time approval by following all guidelines."
              },
              {
                q: "Do you help with app store optimization (ASO)?",
                a: "Yes! All packages include basic ASO. Premium packages include keyword research, competitor analysis, and ongoing ASO strategy to improve app store rankings."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white border border-neutral-200 p-6">
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
            Ready to build your app?
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto mb-10">
            Get a free consultation and detailed quote for your app idea within 24 hours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-neutral-900 text-sm font-medium tracking-wide hover:bg-neutral-100 transition"
            >
              Discuss Your App Idea
            </Link>
            <Link
              href="/portfolio"
              className="inline-block px-10 py-4 border border-white text-white text-sm font-medium tracking-wide hover:bg-white hover:text-neutral-900 transition"
            >
              View App Portfolio
            </Link>
          </div>
          <p className="text-neutral-500 text-sm mt-8">
            📱 50+ apps delivered • ⭐ 4.9 rating • 🚀 95% client satisfaction
          </p>
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
          "serviceType": "App Development",
          "provider": {
            "@type": "Organization",
            "name": "GR Development",
            "url": "https://avdevelopment.com"
          },
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "15000",
            "highPrice": "500000",
            "priceCurrency": "INR",
            "offerCount": appPricingPackages.length
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