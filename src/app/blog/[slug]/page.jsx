import { notFound } from "next/navigation";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";
import { getPostBySlug, getAllPostSlugs } from "@/data/blogPosts";
import CityLinks from "@/utlls/CityLinks";

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const canonical = `${SITE_URL}/blog/${slug}`;
  const description = post.excerpt || post.description || "Read our latest insights on digital marketing, web development, and business growth.";
  const title = `${post.title} | AV Development Blog`;

  return {
    title,
    description,
    keywords: post.keywords || "digital marketing, web development, SEO, business growth, technology insights",
    openGraph: {
      title: post.title,
      description,
      url: canonical,
      siteName: "AV Development",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: ["AV Development Team"],
      locale: "en_IN",
      images: post.ogImage ? [
        {
          url: post.ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : [
        {
          url: `${SITE_URL}/og-default.jpg`,
          width: 1200,
          height: 630,
          alt: "AV Development",
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: post.ogImage ? [post.ogImage] : [`${SITE_URL}/og-default.jpg`],
    },
    alternates: {
      canonical,
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
    category: post.category || "Technology",
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  const canonical = `${SITE_URL}/blog/${slug}`;
  
  // Enhanced Article Schema with more details
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt || post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author || "AV Development Team",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "AV Development",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
        width: 600,
        height: 60,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    keywords: post.keywords || "digital marketing, web development",
    articleSection: post.category || "Technology",
    wordCount: post.content ? post.content.split(/\s+/).length : 0,
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_URL
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${SITE_URL}/blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": canonical
      }
    ]
  };

  // Calculate reading time
  const wordsPerMinute = 200;
  const wordCount = post.content ? post.content.split(/\s+/).length : 0;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return (
    <main className="min-h-screen bg-white relative">
      {/* Minimal Grid Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Schema Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="relative max-w-3xl mx-auto px-6 py-24 md:py-32">
        {/* Back Link */}
        <div className="mb-12">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-neutral-600 transition-colors group"
          >
            <span className="text-lg transform group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to all articles</span>
          </Link>
        </div>

        {/* Header */}
        <header className="mb-16">
          {/* Category & Meta */}
          <div className="flex items-center gap-4 mb-6 text-sm">
            {post.category && (
              <>
                <span className="text-neutral-400 font-light tracking-wide uppercase">
                  {post.category}
                </span>
                <span className="w-px h-4 bg-neutral-300" />
              </>
            )}
            {post.publishedAt && (
              <time 
                className="text-neutral-400 font-light"
                dateTime={post.publishedAt}
              >
                {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            )}
            <span className="w-px h-4 bg-neutral-300" />
            <span className="text-neutral-400 font-light">{readingTime} min read</span>
          </div>

          {/* Title */}
          <h1 className="font-['Inter'] text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 mb-6 leading-[1.1]">
            {post.title}
          </h1>

          {/* Author */}
          {post.author && (
            <div className="flex items-center gap-3 mt-8">
              <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center">
                <span className="text-neutral-600 font-medium text-sm">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <div className="text-sm font-medium text-neutral-900">{post.author}</div>
                <div className="text-xs text-neutral-400">Author</div>
              </div>
            </div>
          )}

          {/* Decorative Line */}
          <div className="w-24 h-px bg-neutral-300 mt-12" />
        </header>

        {/* Featured Image (if exists) */}
        {post.image && (
          <div className="relative h-[400px] w-full mb-16 overflow-hidden bg-neutral-100">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div 
          className="prose prose-neutral prose-lg max-w-none
            prose-headings:font-['Inter'] prose-headings:font-light prose-headings:text-neutral-900
            prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
            prose-p:font-['Georgia'] prose-p:text-neutral-600 prose-p:leading-relaxed
            prose-a:text-neutral-900 prose-a:no-underline prose-a:border-b prose-a:border-neutral-300 hover:prose-a:border-neutral-900 prose-a:transition-colors
            prose-strong:text-neutral-900 prose-strong:font-medium
            prose-ul:list-none prose-ul:pl-0
            prose-li:font-['Georgia'] prose-li:text-neutral-600 prose-li:mb-2
            prose-li:before:content-['—'] prose-li:before:mr-2 prose-li:before:text-neutral-400
            prose-blockquote:border-l-2 prose-blockquote:border-neutral-300 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-neutral-500 prose-blockquote:font-['Georgia']
            prose-img:rounded-none prose-img:border prose-img:border-neutral-200
            prose-hr:border-neutral-200"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-neutral-500 bg-neutral-100 px-3 py-1.5"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <span className="text-sm text-neutral-400 tracking-wide">SHARE THIS ARTICLE</span>
            <div className="flex gap-6">
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(canonical)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                Twitter
              </a>
              <a 
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonical)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`Check out this article: ${canonical}`)}`}
                className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
<CityLinks/>
        {/* Footer Navigation */}
        <footer className="mt-16 pt-8 border-t border-neutral-200">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-6">
              <Link 
                href="/blog" 
                className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-2 group"
              >
                <span className="text-lg transform group-hover:-translate-x-1 transition-transform">←</span>
                <span>All articles</span>
              </Link>
              <span className="text-neutral-300 hidden sm:inline">|</span>
              <Link 
                href="/service" 
                className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                Our services
              </Link>
              <span className="text-neutral-300 hidden sm:inline">|</span>
              <Link 
                href="/contact" 
                className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                Contact us
              </Link>
            </div>

            {/* Next/Prev Navigation (if available) */}
            <div className="flex gap-4">
              {post.prevPost && (
                <Link 
                  href={`/blog/${post.prevPost.slug}`}
                  className="text-sm text-neutral-400 hover:text-neutral-600 transition-colors flex items-center gap-1 group"
                >
                  <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
                  <span>Previous</span>
                </Link>
              )}
              {post.nextPost && (
                <Link 
                  href={`/blog/${post.nextPost.slug}`}
                  className="text-sm text-neutral-400 hover:text-neutral-600 transition-colors flex items-center gap-1 group"
                >
                  <span>Next</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              )}
            </div>
          </div>
        </footer>
      </article>
    </main>
  );
}