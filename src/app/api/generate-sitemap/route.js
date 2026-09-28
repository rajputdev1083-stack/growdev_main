import { NextResponse } from 'next/server';
import { states, cities, locations, getAllCombinations } from '@/lib/db';
import fs from 'fs';
import path from 'path';

export async function GET() {
   try {
       const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://www.avdevelopment.in';

       let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

       const staticPages = [
         '',
         '/about',
         '/contact',
         '/services',
         '/blog',
         '/work',
         '/founder',
         '/custom-software',
         '/seo',
         '/web-development',
         '/digital-marketing',
         '/tax-filing',
         '/shopify-store-setup',
         '/wordpress-development'
       ];

       const now = new Date().toISOString();
       let totalGenerated = 0;

       // 1. Static Pages
       for (const route of staticPages) {
          xml += `\n  <url>\n    <loc>${BASE_URL}${route}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${route === '' ? '1.0' : '0.9'}</priority>\n  </url>`;
          totalGenerated++;
       }

       // 2. State Pages (e.g., /maharashtra)
       for (const state of states) {
           xml += `\n  <url>\n    <loc>${BASE_URL}/${state.id}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`;
           totalGenerated++;
       }

       // 3. City Pages (e.g., /maharashtra/mumbai)
       for (const city of cities) {
           xml += `\n  <url>\n    <loc>${BASE_URL}/${city.stateId}/${city.id}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`;
           totalGenerated++;
       }

       // 4. Location Pages (e.g., /maharashtra/mumbai/andheri)
       for (const loc of locations) {
           const city = cities.find(c => c.id === loc.cityId);
           if (city) {
               xml += `\n  <url>\n    <loc>${BASE_URL}/${city.stateId}/${city.id}/${loc.id}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`;
               totalGenerated++;
           }
       }

       // 5. Deep Service Combinations (e.g., /maharashtra/mumbai/andheri/web-development)
       const allPaths = getAllCombinations();
       for (const pathObj of allPaths) {
          xml += `\n  <url>\n    <loc>${BASE_URL}/${pathObj.state}/${pathObj.city}/${pathObj.location}/${pathObj.service}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.6</priority>\n  </url>`;
          totalGenerated++;
       }

       xml += `\n</urlset>`;

       const filePath = path.join(process.cwd(), 'public', 'sitemap.xml');
       fs.writeFileSync(filePath, xml);

       return NextResponse.json({ 
           success: true, 
           message: "Sitemap created successfully in public/sitemap.xml",
           totalUrls: totalGenerated 
       });
   } catch (error) {
       console.error("Sitemap generation error:", error);
       return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
   }
}
