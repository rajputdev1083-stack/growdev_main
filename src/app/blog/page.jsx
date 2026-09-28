 "use client";

import Link from "next/link";
import { SITE_URL } from "@/lib/site";
import { getPosts } from "@/data/blogPosts";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CityLinks from "@/utlls/CityLinks";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch posts on client side
    const fetchedPosts = getPosts();
    setPosts(fetchedPosts);
    setIsLoading(false);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  if (isLoading) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-neutral-400">Loading...</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white relative">
      {/* Minimal Grid Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }} />
      
      <div className="relative max-w-4xl mx-auto px-6 py-24 md:py-32">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={headerVariants}
          className="mb-20"
        >
          {/* Breadcrumb */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-2 text-sm text-neutral-400 mb-8"
          >
            <Link href="/" className="hover:text-neutral-600 transition-colors">Home</Link>
            <span className="text-neutral-300">—</span>
            <span className="text-neutral-600">Blog</span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            variants={itemVariants}
            className="font-['Inter'] text-5xl md:text-6xl lg:text-7xl font-light text-neutral-900 mb-6 leading-[1.1]"
          >
            Insights
            <span className="block font-medium text-neutral-600 mt-2">& Stories</span>
          </motion.h1>

          {/* Decorative Line */}
          <motion.div 
            variants={itemVariants}
            className="w-24 h-px bg-neutral-300 mb-8"
          />

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="font-['Georgia'] text-lg text-neutral-500 max-w-2xl leading-relaxed"
          >
            Thoughts on digital marketing, web development, 
            and business growth — shared with clarity and purpose.
          </motion.p>
        </motion.div>

        {/* Posts Grid */}
        {posts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="font-['Georgia'] text-neutral-400 text-lg italic">
              No posts yet. Check back soon.
            </p>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                className="group relative border-b border-neutral-200 pb-12 last:border-0"
              >
                {/* Post Number */}
                <div className="absolute -left-16 top-0 text-6xl font-light text-neutral-100 select-none hidden lg:block">
                  {(index + 1).toString().padStart(2, '0')}
                </div>

                <Link href={`/blog/${post.slug}`} className="block">
                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                    {post.publishedAt && (
                      <time 
                        className="text-neutral-400 font-light tracking-wide"
                        dateTime={post.publishedAt}
                      >
                        {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </time>
                    )}
                    
                    {/* Reading Time (if available) */}
                    {post.readingTime && (
                      <>
                        <span className="text-neutral-300 hidden sm:inline">—</span>
                        <span className="text-neutral-400 font-light">{post.readingTime} min read</span>
                      </>
                    )}
                  </div>

                  {/* Title */}
                  <h2 className="font-['Inter'] text-2xl md:text-3xl font-medium text-neutral-900 mb-4 group-hover:text-neutral-600 transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  {post.excerpt && (
                    <p className="font-['Georgia'] text-neutral-500 text-base leading-relaxed mb-6 max-w-2xl line-clamp-2">
                      {post.excerpt}
                    </p>
                  )}

                  {/* Read More Link */}
                  <div className="flex items-center gap-2 text-sm text-neutral-400 group-hover:text-neutral-600 transition-colors">
                    <span>Read article</span>
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                      className="text-lg inline-block"
                    >
                      →
                    </motion.span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        )}

        {/* Footer Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-24 pt-12 border-t border-neutral-200"
        >
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-6">
              <Link 
                href="/service" 
                className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-2 group"
              >
                <span className="text-lg inline-block transform group-hover:-translate-x-1 transition-transform">←</span>
                <span>Our Services</span>
              </Link>
              <span className="text-neutral-300 hidden sm:inline">|</span>
              <Link 
                href="/contact" 
                className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                Contact Us
              </Link>
            </div>

            {/* Subscribe Link */}
            <Link 
              href="/subscribe" 
              className="text-sm text-neutral-900 border border-neutral-200 px-6 py-3 hover:bg-neutral-50 transition-colors"
            >
              Subscribe for updates
            </Link>
          </div>
<CityLinks/>
          {/* Minimal Stats */}
          {posts.length > 0 && (
            <div className="flex gap-8 mt-8">
              <div>
                <div className="text-xs text-neutral-400 tracking-wider">TOTAL POSTS</div>
                <div className="font-['Inter'] text-xl text-neutral-900 mt-1">{posts.length}</div>
              </div>
              <div>
                <div className="text-xs text-neutral-400 tracking-wider">LATEST</div>
                <div className="font-['Inter'] text-xl text-neutral-900 mt-1">
                  {posts[0]?.publishedAt ? new Date(posts[0].publishedAt).toLocaleDateString("en-IN", {
                    month: "short",
                    year: "numeric"
                  }) : "—"}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </main>
  );
}