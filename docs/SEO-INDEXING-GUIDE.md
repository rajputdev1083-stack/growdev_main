# SEO & Indexing Guide – Fix "URL unknown to Google"

## 1. Why pages show "URL unknown to Google"

| Cause | What it means |
|-------|----------------|
| **Crawling** | Google hasn’t visited the URL yet (new site, few links, or blocked). |
| **Indexing** | URL was crawled but not chosen for the index (quality, signals, or crawl budget). |
| **Authority** | New or low-authority domains get crawled and indexed more slowly. |
| **Content quality** | Thin or duplicate content reduces the chance of indexing. |

**Most likely for you:** New or low-authority domain + wrong/missing discovery signals (robots.txt, sitemap, internal links).

---

## 2. Checklist to fix "URL unknown to Google"

- [ ] **Set production URL**  
  In production, set `NEXT_PUBLIC_SITE_URL` (e.g. `https://www.avdevelopment.in`). Used in sitemap, robots, canonicals, OG.

- [ ] **Verify robots.txt**  
  Open `https://yourdomain.com/robots.txt`. It must allow `/` and show `Sitemap: https://yourdomain.com/sitemap.xml`. No typos in domain.

- [ ] **Verify sitemap**  
  Open `https://yourdomain.com/sitemap.xml`. All important URLs (home, /service, /services/*, /[city], /[city]/[service], /blog) should be listed with correct absolute URLs.

- [ ] **Submit in Google Search Console**  
  Add property for the exact domain (with/without www). Submit sitemap URL. Use “URL inspection” → “Request indexing” for key URLs (home, main services, a few city/service pages).

- [ ] **Fix internal links**  
  Every important page should be linked from at least one other page (home → services → cities; services → location pages; blog → services). No broken links (e.g. old `/service-in-city` → use `/[city]/[service]`).

- [ ] **Canonical & metadata**  
  Every page has a canonical URL (same as the URL you want indexed). Title and description are unique and relevant.

- [ ] **No blocking**  
  In GSC “Coverage” or “Pages”, check for “Crawled – currently not indexed”. If many URLs are in that state, improve content and internal links; avoid creating large numbers of low-value pages at once.

- [ ] **Site verification**  
  Add the correct meta tag or file in `layout.js` (verification object) and confirm in GSC.

---

## 3. Internal linking architecture (implemented)

- **Homepage** → `/service`, `/blog`, and city links (e.g. Delhi, Mumbai, Bangalore).
- **Services listing** (`/service`) → `/services/[service]` for each service.
- **Service landing** (`/services/[service]`) → `/[city]/[service]` for cities (location pages).
- **City page** (`/[city]`) → `/[city]/[service]` for each service and `/contact`.
- **Location page** (`/[city]/[service]`) → same city’s other services, contact, service landing.
- **Blog** → `/blog`, `/blog/[slug]`; from blog posts link to relevant `/services/[service]` and key city pages.

**URL pattern:**

- Home: `/`
- Services index: `/service`
- Service landing: `/services/[service]` (e.g. `/services/web-development`)
- City: `/[city]` (e.g. `/delhi`)
- City + service: `/[city]/[service]` (e.g. `/delhi/web-development`)
- Blog: `/blog`, `/blog/[slug]`

---

## 4. Blog strategy to improve indexing speed

- **Publish regularly** (e.g. 1–2 posts/week). Fresh content gets recrawled more often.
- **Target keywords** that match your services and cities (e.g. “web development in Delhi”, “SEO tips for small business”).
- **Link from each post** to 1–2 relevant service pages and 1–2 city/location pages. Use descriptive anchor text.
- **Add new posts to sitemap** – already supported in `app/sitemap.js` via `getBlogSlugs()`; plug in your CMS/API.
- **Submit new posts** in GSC (URL inspection → Request indexing) for important articles.
- **Internal links from homepage** – e.g. “Latest from blog” with 3–5 recent posts.

---

## 5. Backlink strategies for a new domain

- **Business listings**  
  Google Business Profile, JustDial, Sulekha, IndiaMART, Clutch, GoodFirms, etc. Use the exact domain and consistent NAP.

- **Directories**  
  Submit to relevant Indian business and tech directories. Prefer dofollow where possible.

- **Guest posts**  
  Publish on niche-relevant blogs with a byline link to your site or a key service/city page.

- **Local and partnerships**  
  Get links from local chambers, industry associations, and partner sites.

- **Content and tools**  
  Create useful content (guides, tools, templates) that others naturally link to.

- **Social and profiles**  
  LinkedIn, Twitter, Facebook, Instagram – link to site and key pages. Helps discovery and brand, not direct SEO weight.

Avoid buying links or link schemes; focus on relevance and quality.

---

## 6. Folder structure (SEO-oriented)

```
app/
  page.js                    # Home (internal links to /service, cities, /blog)
  layout.js                  # metadataBase, default metadata
  sitemap.js                 # Dynamic sitemap (static + services + cities + city/service + blog)
  robots.js                  # Allow /, disallow /api, _next, admin; sitemap URL
  service/page.jsx           # Services listing → links to /services/[service]
  services/[service]/page.jsx # Service landing → metadata, links to /[city]/[service]
  [slug]/page.jsx            # City page /[city] → metadata, links to /[city]/[service]
  [...slug]/page.jsx         # /[city]/[service] → generateMetadata, CityPage/ServicePage
  blog/page.jsx              # Blog index
  blog/[slug]/page.jsx       # Blog post (wire to CMS when ready)
  about/, contact/, founder/, work/  # Static pages
```

---

## 7. Metadata pattern (every page)

Each page should have:

- **title** – Unique, includes main keyword (e.g. service + city).
- **description** – Unique, 150–160 chars, call to action.
- **keywords** – Optional; use for main terms.
- **openGraph** – title, description, url, siteName, type, locale (and image if you have one).
- **twitter** – card, title, description (and image if needed).
- **alternates.canonical** – Exact URL you want indexed (use `SITE_URL` from `lib/site.js`).
- **robots** – index, follow (unless page is intentionally noindex).

Implemented in: `layout.js`, `[slug]/page.jsx`, `[...slug]/page.jsx`, `services/[service]/page.jsx`, `blog/page.jsx`, `blog/[slug]/page.jsx`.

---

## 8. Next.js 15 App Router notes

- **Sitemap/robots** – Use `app/sitemap.js` and `app/robots.js`; do not rely on static `sitemap.xml`/`robots.txt` in `app/` so the correct domain and URLs are always used.
- **generateMetadata** – Use in every dynamic route for title, description, OG, canonical.
- **generateStaticParams** – Used for city, service, and blog slugs so important pages are pre-rendered and fast for crawlers.
- **Canonical** – Use `metadataBase` in layout and `alternates.canonical` per page; base URL from `NEXT_PUBLIC_SITE_URL` or `lib/site.js`.

---

## 9. Quick wins

1. Set `NEXT_PUBLIC_SITE_URL` in production.
2. Confirm `/robots.txt` and `/sitemap.xml` live and correct.
3. Add and verify property in Google Search Console; submit sitemap.
4. Request indexing for homepage, `/service`, and 5–10 important city/service URLs.
5. Add 5–10 quality blog posts and link them to service and city pages; submit those URLs for indexing.
