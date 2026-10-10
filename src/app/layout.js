 // app/layout.jsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
 import { Footer } from "@/components/Footer";
import Script from "next/script";
import { NavbarDemo } from "@/components/Navbar";
 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Comprehensive SEO metadata
export const metadata = {
  // Primary Meta Tags
  title: {
    default: "Grow Development | Web Development, Digital Marketing & GST Services",
    template: "%s | Grow Development - Digital Agency India"
  },
  description: "Grow Development is India's premier digital agency offering Web Development, App Development, Digital Marketing, SEO, GST Services, Accounting & Creative Solutions. 🚀 1000+ Happy Clients | 5+ Years Experience | 24/7 Support",
  
  // Keywords for SEO
  keywords: [
    // Core Services
    "web development company",
    "app development agency",
    "digital marketing agency",
    "SEO services",
    "GST consultants",
    "accounting services",
    "ecommerce development",
    "shopify experts",
    "wordpress developers",
    "software company",
    
    // Location Based
    "digital agency India",
    "IT company India",
    "web developers India",
    "marketing agency India",
    "tech startup India",
    
    // Specific Services
    "google ads agency",
    "meta ads services",
    "social media marketing",
    "content creation",
    "video editing services",
    "logo design company",
    "ai content creation",
    "poster design",
    "business registration",
    "tax filing services",
    "custom software development",
    "rag system integration",
    
    // Business Related
    "small business solutions",
    "startup tech partner",
    "digital transformation",
    "online business growth",
    "brand development",
    
    // Trust Signals
    "best digital agency",
    "top web development company",
    "affordable marketing services",
    "professional IT services",
    "reliable tech partner"
  ].join(", "),
  
  // Author
  author: "Grow Development Team",
  
  // Generator
  generator: "Next.js",
  
  // Application Name
  applicationName: "Grow Development",
  
  // Viewport and Robots
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Canonical URL (set NEXT_PUBLIC_SITE_URL in production, e.g. https://www.growdevelopment.in)
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.growdevelopment.in'),
  alternates: {
    canonical: '/',
    languages: {
      'en-IN': '/',
      'en-US': '/en-us',
      'hi-IN': '/hi',
    },
  },
  
  // Open Graph for Social Media
  openGraph: {
    title: "Grow Development - India's Leading Digital Agency",
    description: "Transform your business with Grow Development: Web Development, App Development, Digital Marketing, GST & Accounting Services. Free consultation!",
    url: 'https://growdevelopment.com',
    siteName: 'Grow Development',
    images: [
      {
        url: 'https://growdevelopment.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Grow Development - Digital Agency India',
      },
      {
        url: 'https://growdevelopment.com/og-image-square.jpg',
        width: 600,
        height: 600,
        alt: 'Grow Development Services',
      },
    ],
    locale: 'en_IN',
    type: 'website',
    countryName: 'India',
    emails: ['ankitroy5575@gmail.com'],
    phoneNumbers: ['+919718659236'],
  },
  
  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    title: 'Grow Development | Web Development & Digital Marketing',
    description: 'Premium digital services in India: Web Development, App Development, SEO, GST & More. 1000+ happy clients!',
    siteId: '@growdevelopment',
    creator: '@growdevelopment',
    creatorId: '@growdevelopment',
    images: ['https://growdevelopment.com/twitter-image.jpg'],
  },
  
  // Icons with updated paths
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: 'any' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon.png',
      },
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  
  // Manifest for PWA with updated path
  manifest: '/site.webmanifest',
  
  // Theme Color
  themeColor: '#000000',
  
  // Verification for Webmaster Tools
  verification: {
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    bing: 'your-bing-verification-code',
    me: 'ankitroy5575@gmail.com',
  },
  
  // Category
  category: 'technology',
  
  // Classification
  classification: 'Business',
  
  // Referrer
  referrer: 'origin-when-cross-origin',
  
  // Color Scheme
  colorScheme: 'dark light',
  
  // Format Detection
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  
  // Apple Web App
  appleWebApp: {
    capable: true,
    title: 'Grow Development',
    statusBarStyle: 'black-translucent',
    startupImage: [
      {
        url: '/apple-splash-2048-2732.jpg',
        media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)',
      },
    ],
  },
  
  // Other useful meta tags
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Grow Development',
    'application-name': 'Grow Development',
    'msapplication-TileColor': '#000000',
    'msapplication-TileImage': '/ms-icon-144x144.png',
    'msapplication-config': '/browserconfig.xml',
    'format-detection': 'telephone=no',
    'google-site-verification': 'your-google-verification-code',
    'yandex-verification': 'your-yandex-verification-code',
    'p:domain_verify': 'your-pinterest-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className="scroll-smooth">
      <head>
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for faster loading */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.linkedin.com" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/logos.png" as="image" />
        <link rel="preload" href="/favicon-96x96.png" as="image" />
        
        {/* Geo Tags for Local SEO */}
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="geo.position" content="28.6139;77.2090" />
        <meta name="ICBM" content="28.6139, 77.2090" />
        
        {/* Language and Regional Tags */}
        <meta httpEquiv="content-language" content="en-in" />
        <meta name="language" content="English" />
        
        {/* Copyright */}
        <meta name="copyright" content="Grow Development" />
        
        {/* Rating */}
        <meta name="rating" content="General" />
        
        {/* Revisit after */}
        <meta name="revisit-after" content="7 days" />
        
        {/* Distribution */}
        <meta name="distribution" content="global" />
        
        {/* Audience */}
        <meta name="audience" content="all" />
        
        {/* Handheldfriendly */}
        <meta name="HandheldFriendly" content="True" />
        
        {/* Mobileoptimized */}
        <meta name="MobileOptimized" content="320" />
        
        {/* Google Search Console - Favicon for search results */}
        <link rel="icon" type="image/x-icon" href="/favicon-96x96.png" />
        <link rel="shortcut icon" href="/favicon-96x96.png" />
        
        {/* Apple Touch Icons - Updated paths */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Favicon variations */}
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/web-app-manifest-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/web-app-manifest-512x512.png" />
        
        {/* Web Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Windows Tiles */}
        <meta name="msapplication-square70x70logo" content="/smalltile.png" />
        <meta name="msapplication-square150x150logo" content="/mediumtile.png" />
        <meta name="msapplication-wide310x150logo" content="/widetile.png" />
        <meta name="msapplication-square310x310logo" content="/largetile.png" />
        
        {/* Pinterest */}
        <meta name="p:domain_verify" content="your-pinterest-verification-code"/>
        
        {/* Facebook Domain Verification */}
        <meta name="facebook-domain-verification" content="your-facebook-verification-code" />
        
        {/* LinkedIn */}
        <meta name="linkedin:owner" content="urn:li:company:growdevelopment" />
        
        {/* RSS Feed */}
        <link rel="alternate" type="application/rss+xml" title="RSS Feed for Grow Development" href="/feed.xml" />
        
        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* Skip to main content for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black px-4 py-2 z-50 rounded-lg shadow-lg">
          Skip to main content
        </a>
        
        {/* Schema.org structured data for Organization */}
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://growdevelopment.com/#organization",
              "name": "Grow Development",
              "url": "https://growdevelopment.com",
              "logo": "https://growdevelopment.com/apple-touch-icon.png",
              "sameAs": [
                "https://www.facebook.com/growdevelopment",
                "https://www.instagram.com/growdevelopment",
                "https://www.linkedin.com/in/devender-singh20 growdevelopment",
                "https://x.com/GROWDEV_/growdevelopment",
                "https://www.youtube.com/@growdevelopment",
                "https://www.pinterest.com/growdevelopment"
              ],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-8810688975",
                  "contactType": "customer service",
                  "areaServed": "IN",
                  "availableLanguage": ["English", "Hindi"]
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-9718659236",
                  "contactType": "sales",
                  "areaServed": "IN",
                  "availableLanguage": ["English", "Hindi"]
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "foundingDate": "2019",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Dev rajput"
                }
              ],
              "description": "Premier digital agency in India offering web development, app development, digital marketing, and business services.",
              "award": "Best Digital Agency 2023",
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "value": "50+"
              }
            })
          }}
        />

        {/* Schema.org structured data for Website */}
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://growdevelopment.com/#website",
              "url": "https://growdevelopment.com",
              "name": "Grow Development",
              "description": "India's leading digital agency for web development, digital marketing, and business solutions.",
              "publisher": {
                "@id": "https://growdevelopment.com/#organization"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://growdevelopment.com/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Schema.org structured data for LocalBusiness */}
        <Script
          id="schema-localbusiness"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://growdevelopment.com/#localbusiness",
              "name": "Grow Development",
              "image": "https://growdevelopment.com/apple-touch-icon.png",
              "priceRange": "₹₹",
              "telephone": "+91-8810688975",
              "email": "rajputdev1083@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Delhi",
                "addressRegion": "Delhi",
                "addressCountry": "IN"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "09:00",
                  "closes": "19:00"
                }
              ]
            })
          }}
        />

        {/* Google Analytics / Tag Manager (add your tracking ID) */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
              gtag('config', 'AW-XXXXXXXXXX');
            `,
          }}
        />

        {/* Facebook Pixel */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_FACEBOOK_PIXEL_ID');
              fbq('track', 'PageView');
            `,
          }}
        />

       <NavbarDemo/>
         {/* Main Content with ID for skip link */}
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}