"use client";

import { useEffect, useRef } from "react";
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

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Digital Software & Marketing Agency",
  description:
    "We build high-performance software and scale your business with cutting-edge digital marketing strategies.",
  url: "https://yourwebsite.com",
  telephone: "+918810688975",
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

// ─── Flux Storm animated background ──────────────────────────────────────────

/**
 * Flux Storm — ASCII + lightning canvas background.
 * Parent element ko `relative` hona chahiye. Canvas parent ka poora size le leta hai.
 * Mouse move = lightning thread, click = strike.
 */
function FluxStormBackground({ bg = "#120f17" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const parent = c.parentElement;
    const ctx = c.getContext("2d");

    let W = 0, H = 0, dpr = 1, sp, cw, ch, atlas, scan;
    let rect = c.getBoundingClientRect();
    let raf = 0;
    let visible = true;
    const GL = " .:-=+*#%@";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouse = { x: 0, y: 0, sx: 0, sy: 0, on: false, pres: 0 };
    const swirls = [], glitches = [], strikes = [];
    let ptr = null, ptrAt = 0;
    let t = 0;
    let last = performance.now();
    const start = last;
    let nextAmb = last + 1800;
    const o = [0, 0];

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      rect = c.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      c.width = W * dpr;
      c.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sp = W < 600 ? 11 : 10;
      cw = sp;
      ch = sp * 1.6;
      atlas = document.createElement("canvas");
      atlas.width = cw * 10 * dpr;
      atlas.height = ch * dpr;
      const a = atlas.getContext("2d");
      a.scale(dpr, dpr);
      a.font = "600 " + sp * 1.15 + "px ui-monospace, Menlo, Consolas, monospace";
      a.textAlign = "center";
      a.textBaseline = "middle";
      a.fillStyle = "#fff";
      for (let i = 0; i < 10; i++) a.fillText(GL[i], i * cw + cw / 2, ch / 2);
      scan = document.createElement("canvas");
      scan.width = 2;
      scan.height = 3;
      const s = scan.getContext("2d");
      s.fillStyle = "rgba(0,0,0,.22)";
      s.fillRect(0, 2, 2, 1);
    }

    // ---- events (window pe sun rahe hain taaki buttons ke upar bhi kaam kare) ----
    function inside(e) {
      return (
        e.clientX >= rect.left && e.clientX <= rect.right &&
        e.clientY >= rect.top && e.clientY <= rect.bottom
      );
    }
    function onMove(e) {
      if (!inside(e)) { mouse.on = false; return; }
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      if (!mouse.on) { mouse.sx = mouse.x; mouse.sy = mouse.y; }
      mouse.on = true;
    }
    function onLeave(e) { if (!e.relatedTarget) mouse.on = false; }
    function onDown(e) {
      if (!inside(e)) return;
      const now = performance.now();
      const x = e.clientX - rect.left, y = e.clientY - rect.top;
      swirls.push({ x, y, t0: now }); if (swirls.length > 4) swirls.shift();
      glitches.push({ y: y / H, t0: now }); if (glitches.length > 4) glitches.shift();
      strike(x + (Math.random() - 0.5) * 90, -10, x, y, now);
    }

    // ---- lightning ----
    function seg(ax, ay, bx, by, r, pts) {
      const dx = bx - ax, dy = by - ay, d = Math.hypot(dx, dy);
      if (d < 9) { pts.push([bx, by]); return; }
      const mx = (ax + bx) / 2 - (dy / d) * (Math.random() - 0.5) * d * r;
      const my = (ay + by) / 2 + (dx / d) * (Math.random() - 0.5) * d * r;
      seg(ax, ay, mx, my, r, pts);
      seg(mx, my, bx, by, r, pts);
    }
    function path(x0, y0, x1, y1, r) {
      const p = [[x0, y0]];
      seg(x0, y0, x1, y1, r, p);
      return p;
    }
    function build(x0, y0, x1, y1, branches) {
      const main = path(x0, y0, x1, y1, 0.28), br = [];
      for (let k = 0; k < branches; k++) {
        const p = main[Math.floor(main.length * (0.2 + Math.random() * 0.65))];
        const side = Math.random() < 0.5 ? -1 : 1;
        br.push(path(p[0], p[1], p[0] + side * (40 + Math.random() * 140), p[1] + 60 + Math.random() * 150, 0.35));
      }
      return { main, br };
    }
    function strike(x0, y0, x1, y1, now) {
      const b = build(x0, y0, x1, y1, 5);
      b.t0 = now;
      strikes.push(b);
      if (strikes.length > 5) strikes.shift();
    }
    function stroke(p, w, a) {
      ctx.lineWidth = w;
      ctx.strokeStyle = `rgba(${a[0]},${a[1]},${a[2]},${a[3]})`;
      ctx.beginPath();
      ctx.moveTo(p[0][0], p[0][1]);
      for (let i = 1; i < p.length; i++) ctx.lineTo(p[i][0], p[i][1]);
      ctx.stroke();
    }
    function drawBolt(b, e) {
      if (e <= 0.01) return;
      const all = [b.main].concat(b.br);
      for (let i = 0; i < all.length; i++) {
        const m = i === 0 ? 1 : 0.55;
        stroke(all[i], 10 * m, [150, 130, 255, Math.min(1, e) * 0.1]);
        stroke(all[i], 3.5 * m, [190, 175, 255, Math.min(1, e) * 0.35]);
        stroke(all[i], 1.3 * m, [255, 255, 255, Math.min(1, e)]);
      }
    }
    function envl(age) {
      let e = age < 0.07
        ? (age / 0.07) * 0.6
        : 1.7 * Math.exp(-(age - 0.07) * 5) * (0.85 + 0.2 * Math.sin(age * 70));
      if (age > 0.25) e += 0.8 * Math.exp(-(age - 0.25) * 9);
      return e;
    }

    // ---- displacement ----
    function disp(x, y, now) {
      let dx = 0, dy = 0;
      const r = Math.max(140, Math.min(W, H) * 0.3);
      if (mouse.on) {
        const mx = x - mouse.sx, my = y - mouse.sy, d = Math.hypot(mx, my) + 0.001;
        if (d < r) { const f = Math.pow(1 - d / r, 2) * 42; dx += (mx / d) * f; dy += (my / d) * f; }
      }
      for (let i = 0; i < swirls.length; i++) {
        const s = swirls[i], age = (now - s.t0) / 1000;
        if (age > 3) continue;
        const sx = x - s.x, sy = y - s.y, sd = Math.hypot(sx, sy) + 0.001, sr = r * 1.5;
        if (sd < sr) {
          const a = Math.pow(1 - sd / sr, 2) * 2.2 * Math.exp(-age * 1.3);
          const cs = Math.cos(a), sn = Math.sin(a);
          dx += sx * cs - sy * sn - sx;
          dy += sx * sn + sy * cs - sy;
        }
      }
      o[0] = dx; o[1] = dy;
    }

    function rowShift(row, y, now) {
      let sh = 0;
      for (let i = 0; i < glitches.length; i++) {
        const g = glitches[i], age = (now - g.t0) / 1000;
        if (age > 0.7) continue;
        const tick = Math.floor(age * 30);
        const bands = 12 + 24 * Math.abs(Math.sin(g.t0 * 0.013 + tick));
        const rr = Math.floor((y / H) * bands);
        const hv = Math.abs(Math.sin(rr * 127.1 + tick * 311.7));
        if (hv > 0.42)
          sh += (Math.abs(Math.sin(rr * 53.3 + tick)) - 0.5) * 160 * Math.pow(1 - age / 0.7, 2) * Math.exp(-Math.abs(y / H - g.y) * 2.5);
      }
      const idle = Math.floor(now / 3700), ph = (now % 3700) / 3700;
      if (!reduce && ph < 0.04)
        sh += (Math.abs(Math.sin(row * 91.7 + idle)) - 0.5) * 26 * (Math.abs(Math.sin(row * 7.3 + idle)) > 0.6 ? 1 : 0);
      return sh;
    }

    function drawGlyphs(now, k) {
      const cols = Math.ceil(W / cw) + 1, rows = Math.ceil(H / ch) + 1;
      const cx = W / 2, cy = H / 2, scanY = ((t * 120) % (H + 240)) - 120;
      const flick = reduce ? 1 : 1 - 0.12 * Math.max(0, Math.sin(now * 0.004 + Math.sin(now * 0.0013) * 4) - 0.8) * 5;
      const aw = cw * dpr, ah = ch * dpr;
      for (let j = 0; j < rows; j++) {
        const y = j * ch, shift = rowShift(j, y, now);
        for (let i = 0; i < cols; i++) {
          const x = i * cw + shift;
          disp(x, y, now);
          let px = x + o[0], py = y + o[1];
          const rx = (px - cx) / W, ry = (py - cy) / H, bz = 1 + 0.16 * (rx * rx + ry * ry);
          px = cx + (px - cx) * bz;
          py = cy + (py - cy) * bz;
          const u = px * 0.94 + py * 0.34;
          let h = Math.sin(u * 0.011 + Math.sin(py * 0.007 + t * 0.9) * 2.2 - t * 1.1) * 0.55 +
                  Math.sin(py * 0.016 - px * 0.004 + t * 0.7) * 0.45;
          h = h * 0.5 + 0.5;
          let lvl = Math.min(9, Math.floor(h * h * 10.4));
          if (mouse.on) {
            const md = Math.hypot(px - mouse.sx, py - mouse.sy);
            if (md < 110 && Math.random() < 0.35) lvl = 1 + Math.floor(Math.random() * 9);
          }
          if (!lvl) continue;
          const sc = 1 + 0.8 * Math.exp(-Math.pow((py - scanY) / 38, 2));
          ctx.globalAlpha = Math.min(1, (0.14 + 0.55 * h) * sc * k * flick);
          ctx.drawImage(atlas, lvl * aw, 0, aw, ah, px - cw / 2, py - ch / 2, cw, ch);
        }
      }
      ctx.globalAlpha = 1;
    }

    function drawLines(now, k) {
      const N = W < 600 ? 30 : 60;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < N; i++) {
        const base = ((i + 0.5) / N) * W;
        const pulse = Math.pow(Math.sin(i * 0.33 + t * 0.55) * 0.5 + 0.5, 2);
        const pts = [];
        for (let y = -20; y <= H + 20; y += 16) {
          const x = base + Math.sin(y * 0.0042 + t * 1.3 + i * 0.42) * 64 +
                    Math.sin(y * 0.012 - t * 0.8 - i * 0.21) * 20 + Math.sin(i * 0.9 + y * 0.002) * 18;
          disp(x, y, now);
          pts.push([x + o[0], y + o[1]]);
        }
        stroke(pts, 4.5, [255, 255, 255, (0.04 + 0.05 * pulse) * k]);
        stroke(pts, 1, [255, 255, 255, (0.12 + 0.3 * pulse) * k]);
      }
      ctx.globalCompositeOperation = "source-over";
    }

    function frame(now) {
      raf = requestAnimationFrame(frame);
      if (!visible || !W || !H) { last = now; return; }
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!reduce) t += dt * 0.5;
      mouse.sx += (mouse.x - mouse.sx) * 0.12;
      mouse.sy += (mouse.y - mouse.sy) * 0.12;
      mouse.pres += ((mouse.on ? 1 : 0) - mouse.pres) * (1 - Math.exp(-dt / 0.3));
      let k = Math.min(1, (now - start) / 1800);
      k = k * k * (3 - 2 * k);

      if (!reduce && now > nextAmb) {
        const ax = W * (0.15 + Math.random() * 0.7);
        strike(ax, -10, ax + (Math.random() - 0.5) * 240, H * (0.35 + Math.random() * 0.5), now);
        nextAmb = now + 3500 + Math.random() * 3500;
      }
      if (mouse.on && now - ptrAt > 110) {
        ptr = build(mouse.sx + (Math.random() - 0.5) * 70, -10, mouse.sx, mouse.sy, 2);
        ptrAt = now;
      }

      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);
      drawGlyphs(now, k);
      drawLines(now, k);

      ctx.globalCompositeOperation = "lighter";
      let flash = 0;
      for (let i = strikes.length - 1; i >= 0; i--) {
        const age = (now - strikes[i].t0) / 1000;
        if (age > 1.3) { strikes.splice(i, 1); continue; }
        drawBolt(strikes[i], envl(age) * (1 - Math.max(0, (age - 0.9) / 0.4)));
        flash += 0.09 * Math.exp(-Math.max(0, age - 0.07) * 9);
      }
      if (ptr && mouse.pres > 0.02) drawBolt(ptr, 0.5 * mouse.pres * (0.7 + 0.3 * Math.sin(now * 0.05)));
      ctx.globalCompositeOperation = "source-over";
      if (flash > 0.003) {
        ctx.fillStyle = `rgba(190,175,255,${Math.min(0.16, flash)})`;
        ctx.fillRect(0, 0, W, H);
      }

      // vignette (text readable rakhne ke liye) + scanlines
      const g = ctx.createRadialGradient(W / 2, H / 2, Math.min(W, H) * 0.3, W / 2, H / 2, Math.max(W, H) * 0.72);
      g.addColorStop(0, "rgba(18,15,23,0)");
      g.addColorStop(1, "rgba(18,15,23,1)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = ctx.createPattern(scan, "repeat");
      ctx.fillRect(0, 0, W, H);
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(parent);
    const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting; });
    io.observe(c);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerdown", onDown);
    document.addEventListener("mouseout", onLeave);
    const onScroll = () => { rect = c.getBoundingClientRect(); };
    window.addEventListener("scroll", onScroll, { passive: true });
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      document.removeEventListener("mouseout", onLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, [bg]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export function HeroSection() {
  const phone = "+918810688975";

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
      <section className="relative min-h-screen w-full flex items-center justify-center bg-[#120f17] overflow-hidden">

        {/* ✨ Flux Storm animated background (dot grid + vignette ki jagah) */}
        <FluxStormBackground />

        {/* Content — pointer-events-none taaki mouse animation ko mile; buttons ko auto wapas */}
        <div className="relative z-10 flex flex-col items-center text-center px-5 py-24 w-full max-w-4xl mx-auto pointer-events-none">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 border border-neutral-800 rounded-full px-4 py-1.5 mb-10 bg-white/[0.02] backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
            <span className="text-[10.5px] uppercase tracking-[0.2em] text-neutral-400 font-medium">
              Trusted Digital Partner · Delhi, India
            </span>
          </div>

          {/* H1 */}
          <h1
            className="font-extrabold tracking-tight leading-[1.06] mb-5 text-[clamp(40px,9vw,86px)]"
            style={{
              background: "linear-gradient(180deg,#fff 20%,#8a8a8a 100%)",
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
                WebkitTextFillColor: "#9a9a9a",
              }}
            >
              &amp;
            </span>{" "}
            Marketing
          </h1>

          {/* Subheading */}
          <p className="text-neutral-400 text-base sm:text-[17px] leading-relaxed max-w-[560px] mb-10">
            We build high-performance software and scale your business with
            cutting-edge digital marketing strategies in Delhi and across India.
          </p>

          {/* ── Client Avatars + trust copy ───────────────────────────── */}
          <div className="flex flex-col items-center gap-3 mb-7">
            <div className="flex items-center">
              {CLIENTS.map((client, i) => (
                <div
                  key={client.id}
                  className={`relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#120f17] ${
                    i !== 0 ? "-ml-3" : ""
                  }`}
                  style={{ zIndex: CLIENTS.length - i }}
                >
                  <Image
                    src={client.src}
                    alt={client.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <div className="flex gap-0.5" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-3 h-3 fill-amber-400" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.954L10 0l2.948 5.956 6.564.954-4.756 4.635 1.122 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-neutral-400">
                Trusted by{" "}
                <span className="text-neutral-200 font-semibold">200+ businesses</span>{" "}
                across India
              </p>
            </div>
          </div>

          {/* ── Stat pills ─────────────────────────────────────────────── */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-2 border border-neutral-800 rounded-full px-5 py-2 bg-white/[0.02] backdrop-blur-sm"
              >
                <span className="text-sm font-bold text-white">{s.value}</span>
                <span className="text-xs text-neutral-500">{s.label}</span>
              </div>
            ))}
          </div>

          {/* ── CTA buttons ────────────────────────────────────────────── */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6 pointer-events-auto">
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-neutral-700 text-neutral-300 text-sm font-medium hover:border-neutral-500 hover:text-white hover:bg-white/[0.06] transition-colors"
              aria-label="View our portfolio"
            >
              See Our Work →
            </Link>
          </div>
        </div>
      </section>

      <CityLinks />
    </>
  );
}