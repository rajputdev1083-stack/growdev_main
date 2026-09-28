 "use client";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import CityLinks from "@/utlls/CityLinks";

// ─── Data ────────────────────────────────────────────────────────────────────

const CLIENTS = [
  { id: 1, src: "/Anil_sir.jpeg", initials: "AK", name: "Arvind Kumar" },
  { id: 2, src: "/mukesh_sir.jpeg", initials: "PR", name: "Priya Rao" },
  { id: 3, src: "/sonusir.jpeg", initials: "MS", name: "Mohit Sharma" },
  { id: 4, src: "/max.png", initials: "SD", name: "Sneha Das" },
  { id: 5, src: "/sonusir.jpeg", initials: "RV", name: "Rahul Verma" },
];

const STATS = [
  { value: "200+", label: "Happy Clients" },
  { value: "98%",  label: "Retention Rate" },
  { value: "5★",   label: "Avg. Rating" },
];

const AVATAR_COLORS = [
  "bg-violet-950 text-violet-300",
  "bg-emerald-950 text-emerald-400",
  "bg-rose-950 text-rose-400",
  "bg-sky-950 text-sky-400",
  "bg-amber-950 text-amber-400",
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Digital Software & Marketing Agency",
  description:
    "We build high-performance software and scale your business with cutting-edge digital marketing strategies.",
  url: "https://yourwebsite.com",
  telephone: "+919718659236",
  email: "contact@yourwebsite.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi",
    addressCountry: "IN",
  },
  sameAs: ["https://www.linkedin.com/in/devender-singh20//"],
  priceRange: "$$",
  openingHours: "Mo-Su 00:00-00:00",
  areaServed: [
    { "@type": "City", name: "Delhi" },
    { "@type": "Country", name: "India" },
  ],
};

// ─── Icons ───────────────────────────────────────────────────────────────────

function PhoneIcon() {
  return (
    <svg
      className="w-4 h-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export function HeroSection() {
  const phone = "+918810688975";
  const waLink = "https://wa.me/918810688975";

  return (
    <>
      {/* SEO */}
      <Head>
        <title>
          Digital Software &amp; Marketing Agency Delhi | Web Development, SEO,
          Digital Marketing India
        </title>
        <meta
          name="description"
          content="We build high-performance software and scale your business with cutting-edge digital marketing strategies. Web Development, App Development, SEO, Google Ads, Meta Ads, GST Services in Delhi India."
        />
        <meta
          name="keywords"
          content="web development, app development, software development, Shopify, WordPress, RAG system, custom software, digital marketing, SEO, Google Ads, Meta Ads, social media, video editing, logo design, AI content, graphic design, GST services, business registration, tax filing, Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Noida, Gurugram, India"
        />
        <meta property="og:title"       content="Digital Software & Marketing Agency Delhi" />
        <meta property="og:description" content="High-performance software & digital marketing in Delhi, India." />
        <meta property="og:type"        content="website" />
        <meta property="og:url"         content="https://yourwebsite.com" />
        <meta property="og:image"       content="https://yourwebsite.com/og-image.jpg" />
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content="Digital Software & Marketing Agency Delhi" />
        <meta name="twitter:description" content="High-performance software & digital marketing in Delhi, India." />
        <meta name="twitter:image"       content="https://yourwebsite.com/twitter-image.jpg" />
        <meta name="geo.region"    content="IN-DL" />
        <meta name="geo.placename" content="Delhi" />
        <meta name="geo.position"  content="28.6139;77.2090" />
        <meta name="ICBM"          content="28.6139, 77.2090" />
        <meta name="author"        content="Dev" />
        <link rel="me" href="https://www.linkedin.com/in/devender-singh20/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
        />
      </Head>

      {/* Hero */}
      <section className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden">

        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#252525 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, transparent 28%, #000 78%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-5 py-24 w-full max-w-4xl mx-auto">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 border border-neutral-800 rounded-full px-4 py-1.5 mb-10 bg-white/[0.02]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
            <span className="text-[10.5px] uppercase tracking-[0.2em] text-neutral-500 font-medium">
              Trusted Digital Partner · Delhi, India
            </span>
          </div>

          {/* H1 */}
          <h1
            className="font-extrabold tracking-tight leading-[1.06] mb-5 text-[clamp(40px,9vw,86px)]"
            style={{
              background: "linear-gradient(180deg,#fff 20%,#454545 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Digital Software
            <br />
            <span
              style={{
                fontWeight: 200,
                fontStyle: "italic",
                WebkitTextFillColor: "#606060",
              }}
            >
              &amp;
            </span>{" "}
            Marketing
          </h1>

          {/* Subheading */}
          <p className="text-neutral-500 text-base sm:text-[17px] leading-relaxed max-w-[560px] mb-10">
            We build high-performance software and scale your business with
            cutting-edge digital marketing strategies in Delhi and across India.
          </p>

          {/* ── Client Avatars ─────────────────────────────────────────── */}
          <div className="flex flex-col items-center gap-3 mb-7">

            {/* Avatar stack */}
  <div className="text-white">
  {/* Text */}
   

  {/* Avatars + Rating */}
  <div className="flex items-center gap-4 mt-4">
    
    {/* Avatars */}
    <div className="flex items-center">
      {CLIENTS.map((client, i) => (
        <div
          key={client.id}
          className={`relative w-12 h-12 rounded-full overflow-hidden border-2 border-black ${
            i !== 0 ? "-ml-3" : ""
          }`}
          style={{ zIndex: CLIENTS.length - i }}
        >
          <Image
            src={client.src}
            alt={client.name}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>

    {/* Stars */}
    
  </div>
</div>

            {/* Stars + trust copy */}
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5" aria-label="5 star rating">
                {Array.from({ length: 5 }).map(function(_, i) {
                  return (
                    <svg key={i} className="w-3 h-3 fill-amber-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.954L10 0l2.948 5.956 6.564.954-4.756 4.635 1.122 6.545z" />
                    </svg>
                  );
                })}
              </div>
              <p className="text-xs text-neutral-500">
                Trusted by{" "}
                <span className="text-neutral-300 font-semibold">200+ businesses</span>{" "}
                across India
              </p>
            </div>
          </div>

          {/* ── Stat pills ─────────────────────────────────────────────── */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            {STATS.map(function(s) {
              return (
                <div
                  key={s.label}
                  className="flex items-center gap-2 border border-neutral-800 rounded-full px-5 py-2 bg-white/[0.02]"
                >
                  <span className="text-sm font-bold text-white">{s.value}</span>
                  <span className="text-xs text-neutral-600">{s.label}</span>
                </div>
              );
            })}
          </div>

          {/* ── CTA buttons ────────────────────────────────────────────── */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">

            <a
              href={"tel:" + phone}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-100 transition-colors"
              aria-label="Call us for a free consultation"
            >
              <PhoneIcon />
              Call Now · Free Consult
            </a>

            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-neutral-800 text-neutral-400 text-sm font-medium hover:border-neutral-600 hover:text-white hover:bg-white/[0.04] transition-colors"
              aria-label="View our portfolio"
            >
              See Our Work →
            </Link>
          </div>

          {/* WhatsApp text link */}
           
        </div>
      </section>

      {/* Floating WhatsApp FAB */}
       
      <CityLinks />
    </>
  );
}