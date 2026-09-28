// app/video-editing/page.jsx
import Link from "next/link";
import CityLinks from "@/utlls/CityLinks";

export const metadata = {
  title: "Video Editing | GR Development - Professional Video Production",
  description: "Professional video editing services. YouTube videos, Reels, ads, testimonials, and social media content. Starting from ₹5,000.",
  keywords: "video editing, video production, YouTube editing, Reels editing, ad editing",
};

const packages = [
  {
    name: "Short Form",
    price: "₹5,000",
    duration: "per video",
    includes: "60-90 sec Reels/Shorts",
    features: [
      "Basic color grading",
      "Background music",
      "Text overlays",
      "Transitions",
      "2 revisions"
    ],
    ideal: "Reels, TikTok, Shorts"
  },
  {
    name: "Standard",
    price: "₹10,000",
    duration: "per video",
    includes: "3-5 min YouTube/Ads",
    features: [
      "Advanced color grading",
      "Sound design",
      "Motion graphics",
      "Captions",
      "3 revisions"
    ],
    popular: true,
    ideal: "YouTube, Ads, Testimonials"
  },
  {
    name: "Premium",
    price: "₹20,000",
    duration: "per video",
    includes: "5-10 min Corporate",
    features: [
      "Custom animations",
      "Voice-over sync",
      "Multi-layer editing",
      "Unlimited revisions",
      "Source files"
    ],
    ideal: "Corporate, Documentaries"
  }
];

const deliverables = [
  "YouTube Videos", "Instagram Reels", "TikTok Videos", "Facebook Ads",
  "Testimonials", "Product Demos", "Corporate Videos", "Event Highlights",
  "Music Videos", "Explainer Videos", "Tutorials", "Podcast Editing"
];

export default function VideoEditingPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="pt-24 pb-12 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center space-x-2 text-sm text-neutral-400 mb-6">
            <Link href="/" className="hover:text-neutral-600">home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-neutral-600">services</Link>
            <span>/</span>
            <span className="text-neutral-800">video-editing</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-['Inter'] text-5xl md:text-6xl font-light text-neutral-900 mb-4">
              Video Editing
              <span className="block font-medium italic text-neutral-500 text-3xl mt-1">Professional edits starting ₹5,000</span>
            </h1>
            <p className="text-neutral-500 mb-6">
              High-quality video editing for YouTube, Reels, Ads, and more.
            </p>
            <span className="px-4 py-2 bg-neutral-900 text-white text-sm rounded-full inline-block">2-4 day delivery</span>
          </div>
        </div>
      </section>

      {/* Quick Packages */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-4">
            {packages.map((pkg, i) => (
              <div key={i} className={`border ${pkg.popular ? 'border-neutral-900' : 'border-neutral-200'} rounded-lg p-5 relative`}>
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-neutral-900 text-white text-xs px-2 py-0.5 rounded-tr-lg rounded-bl-lg">Popular</div>
                )}
                <h3 className="font-medium text-lg">{pkg.name}</h3>
                <p className="text-xs text-neutral-400 mb-2">{pkg.ideal}</p>
                <div className="mb-3">
                  <span className="text-2xl font-light">{pkg.price}</span>
                  <span className="text-xs text-neutral-400 ml-1">{pkg.duration}</span>
                </div>
                <p className="text-xs bg-neutral-100 p-2 rounded mb-3">{pkg.includes}</p>
                <ul className="space-y-1 mb-4">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="text-xs flex items-start">
                      <span className="text-neutral-400 mr-1">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={`/contact?service=video-${pkg.name}`} className="block w-full py-1.5 bg-neutral-900 text-white text-xs text-center rounded">
                  Order Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Inter'] text-2xl font-light text-center mb-6">What We Edit</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {deliverables.map((item, i) => (
              <span key={i} className="px-3 py-1.5 bg-white border border-neutral-200 text-xs rounded-full">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-['Inter'] text-2xl font-light text-white mb-3">Need a video edited?</h2>
          <p className="text-neutral-300 text-sm mb-5">Get a quote within 24 hours</p>
          <Link href="/contact" className="px-6 py-2 bg-white text-neutral-900 text-sm rounded inline-block">
            Send Your Video
          </Link>
          <p className="text-neutral-500 text-xs mt-4">📞 Call: +91 97186 59236</p>
        </div>
      </section>

      <CityLinks />
    </main>
  );
}