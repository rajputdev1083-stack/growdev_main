"use client";
import React from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Development Services",
      description:
        "We build powerful digital products including Web Development, App Development, Shopify Stores, WordPress websites, RAG systems, and custom software tailored to your business.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Marketing & Growth",
      description:
        "Grow your business with SEO optimization, Google Ads, Meta Ads, and complete digital marketing strategies designed to increase reach and conversions.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Creative & Branding",
      description:
        "Enhance your brand with video editing, logo design, AI content creation, posters, and professional graphic design services.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: "Business & Accounting",
      description:
        "Manage your business efficiently with GST services, accounting & ledger management, business registration, tax filing, and custom support.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];
  return (
    <div className="relative z-20 mx-auto max-w-7xl py-10 lg:py-40">
      <div className="px-8">
      <h4 className="mx-auto max-w-5xl text-center text-3xl font-medium tracking-tight text-black lg:text-5xl lg:leading-tight dark:text-white">
          Complete Digital Solutions for Your Business
        </h4>

        <p className="mx-auto my-4 max-w-2xl text-center text-sm font-normal text-neutral-500 lg:text-base dark:text-neutral-300">
          We provide end-to-end digital services — from development to marketing and accounting — everything your business needs to grow in the digital era.
        </p>
      </div>
      <div className="relative">
        <div
          className="mt-12 grid grid-cols-1 rounded-md lg:grid-cols-6 xl:border dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className
}) => {
  return (
    <div className={cn(`relative overflow-hidden p-4 sm:p-8`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({
  children
}) => {
  return (
    <p
      className="mx-auto max-w-5xl text-left text-xl tracking-tight text-black md:text-2xl md:leading-snug dark:text-white">
      {children}
    </p>
  );
};

const FeatureDescription = ({
  children
}) => {
  return (
    <p
      className={cn(
        "mx-auto max-w-4xl text-left text-sm md:text-base",
        "text-center font-normal text-neutral-500 dark:text-neutral-300",
        "mx-0 my-2 max-w-sm text-left md:text-sm"
      )}>
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex h-full gap-10 px-2 py-8">
      <div
        className="group mx-auto h-full w-full bg-white p-5 shadow-2xl dark:bg-neutral-900">
        <div className="flex h-full w-full flex-1 flex-col space-y-2">
          {/* TODO */}
          <img
            src="/india.jpg"
            alt="header"
            width={800}
            height={800}
            className="aspect-square h-full w-full rounded-sm object-cover object-left-top" />
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-60 w-full bg-gradient-to-t from-white via-white to-transparent dark:from-black dark:via-black" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-40 h-60 w-full bg-gradient-to-b from-white via-transparent to-transparent dark:from-black" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <a
      // href="https://www.youtube.com/watch?v=RPa3_AD1_Vs"
      // href="https://static.vecteezy.com/system/resources/previews/071/303/955/non_2x/black-india-map-with-provinces-territories-borders-map-of-india-black-and-white-vector.jpg"
      href="https://youtu.be/NWfIrmIgaCU?si=YqmkaNtlH6UKkUXT"
      target="__blank"
      className="group/image relative flex h-full gap-10">
      <div
        className="group mx-auto h-full w-full bg-transparent dark:bg-transparent">
        <div className="relative flex h-full w-full flex-1 flex-col space-y-2">
          {/* TODO */}
          <IconBrandYoutubeFilled className="absolute inset-0 z-10 m-auto h-20 w-20 text-red-500" />
          <img
            // src="https://assets.aceternity.com/fireship.jpg"
            src="/logos.png"
            alt="header"
            width={800}
            height={800}
            className="aspect-square h-full w-full rounded-sm object-cover object-center blur-none transition-all duration-200 group-hover/image:blur-md" />
        </div>
      </div>
    </a>
  );
};

export const SkeletonTwo = () => {
  const images = [
    // "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "/india.jpg",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    <div
      className="relative flex h-full flex-col items-start gap-10 overflow-hidden p-8">
      {/* TODO */}
      <div className="-ml-20 flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="mt-4 -mr-4 shrink-0 overflow-hidden rounded-xl border border-neutral-100 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800">
            <img
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="h-20 w-20 shrink-0 rounded-lg object-cover md:h-40 md:w-40" />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="mt-4 -mr-4 shrink-0 overflow-hidden rounded-xl border border-neutral-100 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800">
            <img
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="h-20 w-20 shrink-0 rounded-lg object-cover md:h-40 md:w-40" />
          </motion.div>
        ))}
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-[100] h-full w-20 bg-gradient-to-r from-white to-transparent dark:from-black" />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-[100] h-full w-20 bg-gradient-to-l from-white to-transparent dark:from-black" />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="relative mt-10 flex w-full flex-col items-center bg-transparent dark:bg-transparent">
      <GlobeTopography />
    </div>
  );
};

/* ================= Globe + Topography ================= */

const ACCENT = [77, 166, 255];
const rgba = (a) => `rgba(${ACCENT[0]},${ACCENT[1]},${ACCENT[2]},${a})`;

const MARKERS = [
  ["New Delhi", 28.6139, 77.209],
  ["Mumbai", 19.076, 72.8777],
  ["Dubai", 25.2048, 55.2708],
  ["London", 51.5074, -0.1278],
  ["New York", 40.7128, -74.006],
  ["Singapore", 1.3521, 103.8198],
  ["Tokyo", 35.6762, 139.6503],
  ["Sydney", -33.8688, 151.2093],
  ["Paris", 48.8566, 2.3522],
  ["Moscow", 55.7558, 37.6173],
  ["Rio de Janeiro", -22.9068, -43.1729],
  ["Shanghai", 31.2304, 121.4737],
  ["Seoul", 37.5665, 126.978],
].map(([label, lat, lng]) => ({ label, lat, lng }));

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const fade = (t) => t * t * (3 - 2 * t);
const lerp = (a, b, t) => a + (b - a) * t;

const h2 = (x, y) => {
  let h = (Math.imul(x, 374761393) + Math.imul(y, 668265263)) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
};
const h3 = (x, y, z) => {
  let h = (Math.imul(x, 374761393) + Math.imul(y, 668265263) + Math.imul(z, 1013904223)) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
};
const n2 = (x, y) => {
  const ix = Math.floor(x), iy = Math.floor(y), u = fade(x - ix), v = fade(y - iy);
  return lerp(lerp(h2(ix, iy), h2(ix + 1, iy), u), lerp(h2(ix, iy + 1), h2(ix + 1, iy + 1), u), v);
};
const fbm2 = (x, y) =>
  n2(x, y) * 0.6 + n2(x * 2.1 + 5.2, y * 2.1 + 1.3) * 0.28 + n2(x * 4.3 + 9.1, y * 4.3 + 3.7) * 0.12;
const n3 = (x, y, z) => {
  const ix = Math.floor(x), iy = Math.floor(y), iz = Math.floor(z);
  const u = fade(x - ix), v = fade(y - iy), w = fade(z - iz);
  const f = (k) =>
    lerp(
      lerp(h3(ix, iy, iz + k), h3(ix + 1, iy, iz + k), u),
      lerp(h3(ix, iy + 1, iz + k), h3(ix + 1, iy + 1, iz + k), u),
      v
    );
  return lerp(f(0), f(1), w);
};
const fbm3 = (x, y, z) =>
  n3(x, y, z) * 0.6 + n3(x * 2.2 + 3.1, y * 2.2 + 7.7, z * 2.2 + 1.9) * 0.3 + n3(x * 4.6, y * 4.6 + 2.2, z * 4.6 + 8.4) * 0.1;

export function GlobeTopography({ className }) {
  const hostRef = useRef(null);
  const topoRef = useRef(null);
  const globeRef = useRef(null);
  const pillRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    const topoCv = topoRef.current;
    const globeCv = globeRef.current;
    const pill = pillRef.current;
    if (!host || !topoCv || !globeCv) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups = [];

    /* ---------- topography ---------- */
    (function topo() {
      const ctx = topoCv.getContext("2d");
      const LEVELS = Array.from({ length: 14 }, (_, i) => 0.24 + i * 0.045);
      const CASES = {
        1: [3, 2], 2: [2, 1], 3: [3, 1], 4: [0, 1], 5: [0, 1, 3, 2], 6: [0, 2], 7: [0, 3],
        8: [0, 3], 9: [0, 2], 10: [0, 3, 2, 1], 11: [0, 1], 12: [3, 1], 13: [2, 1], 14: [3, 2],
      };
      let w, h, dpr, cell, C, R, F, EX, EY, presence = 0, raf;
      const ptr = { x: 0, y: 0, on: false };
      const pulses = [];

      const resize = () => {
        w = host.clientWidth;
        h = host.clientHeight;
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        topoCv.width = w * dpr;
        topoCv.height = h * dpr;
        cell = clamp(w / 70, 9, 16);
        C = Math.ceil(w / cell) + 2;
        R = Math.ceil(h / cell) + 2;
        F = new Float32Array(C * R);
      };
      const edge = (e, i, j, l) => {
        const A = [
          [i, j, i + 1, j],
          [i + 1, j, i + 1, j + 1],
          [i, j + 1, i + 1, j + 1],
          [i, j, i, j + 1],
        ][e];
        const v0 = F[A[1] * C + A[0]], v1 = F[A[3] * C + A[2]];
        const t = (l - v0) / (v1 - v0 || 1e-6);
        EX = lerp(A[0], A[2], t) * cell;
        EY = lerp(A[1], A[3], t) * cell;
      };
      const frame = (now) => {
        raf = requestAnimationFrame(frame);
        for (let i = pulses.length - 1; i >= 0; i--) {
          pulses[i].age += 1 / 60;
          if (pulses[i].age > 4) pulses.splice(i, 1);
        }
        const t = reduce ? 0 : now / 1000, px = ptr.x / cell, py = ptr.y / cell;
        presence += ((ptr.on ? 1 : 0) - presence) * 0.08;
        for (let j = 0; j < R; j++)
          for (let i = 0; i < C; i++) {
            let v = fbm2(i * 0.075 + t * 0.045, j * 0.075 - t * 0.025);
            if (presence > 0.003) v += 0.24 * presence * Math.exp(-((i - px) ** 2 + (j - py) ** 2) / 40);
            for (const p of pulses) {
              const q = (Math.hypot(i - p.x, j - p.y) - p.age * 20) / 2.4;
              v += 0.2 * Math.exp(-p.age * 0.9) * Math.exp(-q * q);
            }
            F[j * C + i] = v;
          }
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, w, h);
        LEVELS.forEach((l, li) => {
          const major = li % 4 === 0;
          ctx.beginPath();
          for (let j = 0; j < R - 1; j++)
            for (let i = 0; i < C - 1; i++) {
              const k =
                (F[j * C + i] > l ? 8 : 0) +
                (F[j * C + i + 1] > l ? 4 : 0) +
                (F[(j + 1) * C + i + 1] > l ? 2 : 0) +
                (F[(j + 1) * C + i] > l ? 1 : 0);
              const s = CASES[k];
              if (!s) continue;
              for (let q = 0; q < s.length; q += 2) {
                edge(s[q], i, j, l); ctx.moveTo(EX, EY);
                edge(s[q + 1], i, j, l); ctx.lineTo(EX, EY);
              }
            }
          ctx.strokeStyle = rgba(major ? 0.6 : 0.26);
          ctx.lineWidth = major ? 1.3 : 0.8;
          ctx.stroke();
        });
      };
      const loc = (e) => {
        const r = host.getBoundingClientRect();
        const x = e.clientX - r.left, y = e.clientY - r.top;
        return { x, y, in: x >= 0 && y >= 0 && x <= r.width && y <= r.height };
      };
      const onMove = (e) => {
        const p = loc(e);
        ptr.on = p.in;
        if (p.in) { ptr.x = p.x; ptr.y = p.y; }
      };
      const onDown = (e) => {
        const p = loc(e);
        if (!p.in) return;
        if (pulses.length >= 4) pulses.shift();
        pulses.push({ x: p.x / cell, y: p.y / cell, age: 0 });
      };
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerdown", onDown, { passive: true });
      const ro = new ResizeObserver(resize);
      ro.observe(host);
      resize();
      raf = requestAnimationFrame(frame);
      cleanups.push(() => {
        cancelAnimationFrame(raf);
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerdown", onDown);
        ro.disconnect();
      });
    })();

    /* ---------- globe ---------- */
    (function globe() {
      const ctx = globeCv.getContext("2d");
      const land = [];
      const N = 3600;
      for (let i = 0; i < N; i++) {
        const y = 1 - (2 * (i + 0.5)) / N, r = Math.sqrt(1 - y * y), th = i * 2.399963;
        const x = Math.cos(th) * r, z = Math.sin(th) * r;
        if (fbm3(x * 1.7 + 4, y * 1.7 + 2, z * 1.7 + 9) > 0.52) land.push(x, y, z);
      }
      const pins = MARKERS.map((m) => {
        const p = (m.lat * Math.PI) / 180, l = (m.lng * Math.PI) / 180;
        return { ...m, phi: p, lam: l, x: Math.cos(p) * Math.sin(l), y: Math.sin(p), z: Math.cos(p) * Math.cos(l) };
      });
      const st = {
        yaw: -pins[0].lam, pitch: 0.3, tYaw: null, tPitch: 0, drag: false, idle: 0,
        hover: -1, sel: -1, px: -999, py: -999, sx: 0, sy: 0, moved: 0,
      };
      let size = 400, dpr = 1, last = 0, raf;

      const resize = () => {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        size = Math.max(200, Math.min(host.clientWidth, host.clientHeight));
        globeCv.style.width = host.clientWidth + "px";
        globeCv.style.height = host.clientHeight + "px";
        globeCv.width = host.clientWidth * dpr;
        globeCv.height = host.clientHeight * dpr;
      };
      const rot = (x, y, z) => {
        const cy = Math.cos(st.yaw), sy = Math.sin(st.yaw), cp = Math.cos(st.pitch), sp = Math.sin(st.pitch);
        const x1 = x * cy + z * sy, z1 = -x * sy + z * cy;
        return [x1, y * cp - z1 * sp, y * sp + z1 * cp];
      };
      const frame = (now) => {
        raf = requestAnimationFrame(frame);
        const dt = Math.min(0.05, (now - (last || now)) / 1000);
        last = now;
        if (!st.drag) {
          if (st.tYaw !== null) {
            let d = st.tYaw - st.yaw;
            d = Math.atan2(Math.sin(d), Math.cos(d));
            const k = 1 - Math.exp(-dt * 4);
            st.yaw += d * k;
            st.pitch += (st.tPitch - st.pitch) * k;
            if (Math.abs(d) < 0.003 && Math.abs(st.tPitch - st.pitch) < 0.003) {
              st.tYaw = null;
              st.idle = now + 5000;
            }
          } else if (now > st.idle && !reduce) st.yaw += dt * 0.12;
        }
        const W = host.clientWidth, H = host.clientHeight, cx = W / 2, cy = H / 2, Rg = size * 0.4;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, W, H);

        let g = ctx.createRadialGradient(cx, cy, Rg * 0.94, cx, cy, Rg * 1.42);
        g.addColorStop(0, rgba(0.38)); g.addColorStop(0.35, rgba(0.1)); g.addColorStop(1, rgba(0));
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, Rg * 1.42, 0, 7); ctx.fill();

        g = ctx.createRadialGradient(cx - Rg * 0.35, cy - Rg * 0.4, Rg * 0.1, cx, cy, Rg);
        g.addColorStop(0, "rgba(16,30,52,.92)"); g.addColorStop(1, "rgba(5,10,20,.96)");
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, Rg, 0, 7); ctx.fill();

        ctx.lineWidth = 0.6;
        ctx.strokeStyle = rgba(0.14);
        const poly = (pts) => {
          ctx.beginPath();
          let pen = false;
          for (const p of pts) {
            const [x, y, z] = rot(...p);
            if (z > 0) {
              const sx = cx + x * Rg, sy = cy - y * Rg;
              pen ? ctx.lineTo(sx, sy) : ctx.moveTo(sx, sy);
              pen = true;
            } else pen = false;
          }
          ctx.stroke();
        };
        const sph = (p, l) => [Math.cos(p) * Math.sin(l), Math.sin(p), Math.cos(p) * Math.cos(l)];
        const D = Math.PI / 180;
        for (let lat = -60; lat <= 60; lat += 30) {
          const a = [];
          for (let lg = -180; lg <= 180; lg += 6) a.push(sph(lat * D, lg * D));
          poly(a);
        }
        for (let lg = -180; lg < 180; lg += 30) {
          const a = [];
          for (let lat = -90; lat <= 90; lat += 6) a.push(sph(lat * D, lg * D));
          poly(a);
        }
        for (let i = 0; i < land.length; i += 3) {
          const [x, y, z] = rot(land[i], land[i + 1], land[i + 2]);
          if (z <= 0) continue;
          const s = 1.2 + z * 0.9;
          ctx.fillStyle = rgba(0.22 + 0.7 * z);
          ctx.fillRect(cx + x * Rg - s / 2, cy - y * Rg - s / 2, s, s);
        }
        ctx.strokeStyle = rgba(0.5); ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.arc(cx, cy, Rg, 0, 7); ctx.stroke();

        const vis = [];
        pins.forEach((m, i) => {
          const [x, y, z] = rot(m.x, m.y, m.z);
          if (z > 0.06) vis.push({ i, m, sx: cx + x * Rg, sy: cy - y * Rg, z });
        });
        let hov = -1, best = 22;
        vis.forEach((v) => {
          const d = Math.hypot(v.sx - st.px, v.sy - st.py);
          if (d < best) { best = d; hov = v.i; }
        });
        st.hover = st.drag ? -1 : hov;
        globeCv.style.cursor = st.drag ? "grabbing" : st.hover >= 0 ? "pointer" : "grab";

        vis.sort((a, b) => a.z - b.z).forEach(({ i, m, sx, sy, z }) => {
          const on = i === st.hover || i === st.sel;
          const rr = (on ? 15 : 10) + z * 3;
          const p = (now / 1600 + i * 0.13) % 1;
          ctx.strokeStyle = rgba((1 - p) * 0.55 * z); ctx.lineWidth = 1.5;
          ctx.beginPath(); ctx.arc(sx, sy, rr + p * 16, 0, 7); ctx.stroke();
          ctx.fillStyle = rgba(0.85);
          ctx.beginPath(); ctx.arc(sx, sy, rr, 0, 7); ctx.fill();
          ctx.fillStyle = "#05080f";
          ctx.font = "700 11px system-ui,sans-serif";
          ctx.textAlign = "center"; ctx.textBaseline = "middle";
          ctx.fillText(m.label[0], sx, sy + 0.5);
          ctx.strokeStyle = on ? "#fff" : rgba(0.95);
          ctx.lineWidth = on ? 2.4 : 1.6;
          ctx.beginPath(); ctx.arc(sx, sy, rr, 0, 7); ctx.stroke();
          if (on) {
            ctx.font = "600 13px system-ui,sans-serif";
            const tw = ctx.measureText(m.label).width + 18;
            const bx = sx - tw / 2, by = sy - rr - 34;
            ctx.fillStyle = "rgba(5,8,15,.88)"; ctx.strokeStyle = rgba(0.7); ctx.lineWidth = 1;
            ctx.beginPath(); ctx.roundRect(bx, by, tw, 24, 12); ctx.fill(); ctx.stroke();
            ctx.fillStyle = "#fff";
            ctx.fillText(m.label, sx, by + 12.5);
          }
        });
      };
      const select = (i) => {
        const m = pins[i];
        st.sel = i;
        st.tYaw = -m.lam;
        st.tPitch = clamp(m.phi, -1.1, 1.1);
        if (pill) pill.textContent = `${m.label} · ${m.lat.toFixed(2)}°, ${m.lng.toFixed(2)}°`;
      };
      const pos = (e) => {
        const r = globeCv.getBoundingClientRect();
        st.px = e.clientX - r.left;
        st.py = e.clientY - r.top;
      };
      const onDown = (e) => {
        pos(e);
        st.drag = true; st.moved = 0; st.sx = e.clientX; st.sy = e.clientY; st.tYaw = null;
        globeCv.setPointerCapture(e.pointerId);
      };
      const onMove = (e) => {
        pos(e);
        if (!st.drag) return;
        const dx = e.clientX - st.sx, dy = e.clientY - st.sy;
        st.sx = e.clientX; st.sy = e.clientY;
        st.moved += Math.abs(dx) + Math.abs(dy);
        st.yaw += dx * 0.006;
        st.pitch = clamp(st.pitch - dy * 0.006, -1.2, 1.2);
      };
      const up = () => {
        const click = st.drag && st.moved < 5;
        st.drag = false;
        st.idle = performance.now() + 3000;
        if (click && st.hover >= 0) select(st.hover);
      };
      const leave = () => { st.px = st.py = -999; };

      globeCv.addEventListener("pointerdown", onDown);
      globeCv.addEventListener("pointermove", onMove);
      globeCv.addEventListener("pointerup", up);
      globeCv.addEventListener("pointercancel", up);
      globeCv.addEventListener("pointerleave", leave);
      const ro = new ResizeObserver(resize);
      ro.observe(host);
      resize();
      raf = requestAnimationFrame(frame);
      cleanups.push(() => {
        cancelAnimationFrame(raf);
        globeCv.removeEventListener("pointerdown", onDown);
        globeCv.removeEventListener("pointermove", onMove);
        globeCv.removeEventListener("pointerup", up);
        globeCv.removeEventListener("pointercancel", up);
        globeCv.removeEventListener("pointerleave", leave);
        ro.disconnect();
      });
    })();

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <div
      ref={hostRef}
      className={cn(
        "relative h-72 w-full overflow-hidden rounded-xl bg-[#05080f] md:h-96",
        className
      )}
    >
      <canvas ref={topoRef} aria-hidden="true" className="absolute inset-0 h-full w-full" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(5,8,15,.55) 0, rgba(5,8,15,0) 35%, rgba(5,8,15,.8) 100%)",
        }}
      />
      <canvas
        ref={globeRef}
        role="img"
        aria-label="Interactive globe with city markers"
        className="absolute inset-0 h-full w-full"
        style={{ touchAction: "pan-y" }}
      />
      <div
        ref={pillRef}
        className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/15 bg-black/50 px-4 py-1.5 text-xs text-white"
      >
        Click a marker to select a city
      </div>
    </div>
  );
}