 "use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const STEPS = [
  {
    phase: "Phase 01", icon: "DISC", side: "left",
    heading: "Discovery & Analysis",
    body: "We conduct a thorough analysis of your business model, market position, and competitor landscape. Every decision we make is grounded in data — never assumption.",
    pills: ["Business Goals", "Competitor Audit", "User Research", "Market Sizing"],
    docs: [],
    dividerBefore: null,
  },
  {
    phase: "Phase 02", icon: "PLAN", side: "right",
    heading: "Strategy & Planning",
    body: "A complete project roadmap is crafted — architecture decisions, technology stack, timelines, and cost structure. You receive a formal Business Proposal before any work begins.",
    pills: [],
    docs: [
      { name: "Business Proposal", ext: "PDF", sub: "Scope · Timeline · Investment estimate", type: "proposal" },
    ],
    dividerBefore: null,
  },
  {
    phase: "Phase 03", icon: "AGRE", side: "left",
    heading: "Agreement & Kickoff",
    body: "Upon approval, a formal Project Proposal is issued with complete deliverables list, NDA if required, and payment terms. A 30% advance secures your slot and we begin immediately.",
    pills: [],
    docs: [
      { name: "Project Proposal", ext: "PDF", sub: "Deliverables · NDA · Sign-off sheet", type: "proposal" },
      { name: "Advance Invoice", ext: "INV", sub: "30% advance · Payment confirmation", type: "invoice", amount: "30%" },
    ],
    dividerBefore: null,
  },
  {
    phase: "Phase 04", icon: "BUILD", side: "right",
    heading: "Full-Team Development",
    body: "Our complete team — frontend, backend, design, and QA — executes with precision. You receive weekly progress reports, live staging access, and direct communication at every step.",
    pills: ["Frontend Engineering", "Backend Systems", "UI / UX Design", "QA & Testing", "Weekly Reports", "Staging Access"],
    docs: [],
    dividerBefore: "Development Sprint",
  },
  {
    phase: "Phase 05", icon: "REVW", side: "left",
    heading: "Review & Iterations",
    body: "Review the full project on a live staging environment. We iterate until every detail is exactly right. All revisions within the agreed scope are complimentary.",
    pills: ["Live Staging", "Revision Rounds", "Mobile Testing", "Performance Audit", "SEO Baseline"],
    docs: [],
    dividerBefore: null,
  },
  {
    phase: "Phase 06", icon: "DLVR", side: "right",
    heading: "Delivery & Handoff",
    body: "Complete delivery of source code, credentials, documentation, and deployment. Final invoice issued alongside an official Work Completion Certificate.",
    pills: [],
    docs: [
      { name: "Final Invoice", ext: "INV", sub: "70% balance · Source code release", type: "invoice", amount: "70%" },
      { name: "Completion Certificate", ext: "PDF", sub: "Official project sign-off", type: "certificate" },
    ],
    dividerBefore: "Final Delivery",
  },
  {
    phase: "Phase 07", icon: "GROW", side: "left",
    heading: "Support & Scale",
    body: "Post-launch support included for 30 days at no cost. Monthly retainers available for ongoing maintenance, SEO management, feature additions, and scaling infrastructure.",
    pills: ["30-day Free Support", "Monthly Retainer", "SEO Management", "Feature Additions", "Infrastructure Scaling"],
    docs: [],
    dividerBefore: null,
  },
];

const TEAM = [
  { code: "FE", role: "Frontend Engineer", stack: "Next.js · React · Tailwind" },
  { code: "BE", role: "Backend Engineer", stack: "Node.js · Express · MongoDB" },
  { code: "UX", role: "UI / UX Designer", stack: "Figma · Framer · Prototyping" },
  { code: "QA", role: "QA Engineer", stack: "Testing · Audits · Security" },
  { code: "MK", role: "Marketing Lead", stack: "Meta Ads · SEO · Analytics" },
  { code: "AI", role: "AI Engineer", stack: "LLM · Custom Assistants · RAG" },
];

function PDFCard({ doc }) {
  const isInvoice = doc.type === "invoice";
  const isCert = doc.type === "certificate";

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="group flex items-stretch gap-0 border border-white/10 rounded-xl overflow-hidden mt-3 cursor-pointer hover:border-white/30 transition-all duration-300"
    >
      <div className={`w-14 flex flex-col items-center justify-center flex-shrink-0 py-4 gap-1
        ${isInvoice ? "bg-white/5" : isCert ? "bg-white/[0.03]" : "bg-white/[0.03]"}
        border-r border-white/10`}>
        {isInvoice ? (
          <>
            <span className="text-white font-mono text-[18px] font-bold leading-none">{doc.amount}</span>
            <span className="text-white/30 text-[8px] tracking-widest uppercase">ADV</span>
          </>
        ) : (
          <>
            <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
              <rect width="22" height="26" rx="3" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.15" strokeWidth="0.8"/>
              <path d="M4 6h9l5 5v9a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" fill="none" stroke="white" strokeOpacity="0.3" strokeWidth="0.8"/>
              <path d="M13 6v5h5" fill="none" stroke="white" strokeOpacity="0.2" strokeWidth="0.8"/>
              <line x1="4" y1="14" x2="18" y2="14" stroke="white" strokeOpacity="0.15" strokeWidth="0.6"/>
              <line x1="4" y1="17" x2="14" y2="17" stroke="white" strokeOpacity="0.1" strokeWidth="0.6"/>
              <line x1="4" y1="20" x2="10" y2="20" stroke="white" strokeOpacity="0.1" strokeWidth="0.6"/>
            </svg>
            <span className="text-white/25 text-[8px] tracking-widest mt-0.5">{doc.ext}</span>
          </>
        )}
      </div>

      <div className="flex-1 px-4 py-3 bg-white/[0.02] group-hover:bg-white/[0.04] transition-colors">
        <span className="block text-white/90 text-[12px] font-medium tracking-wide">{doc.name}</span>
        <span className="block text-white/30 text-[10px] mt-1 font-light">{doc.sub}</span>
      </div>

      <div className="w-10 flex items-center justify-center bg-white/[0.02] border-l border-white/5 group-hover:bg-white/5 transition-colors flex-shrink-0">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 10L10 2M10 2H4M10 2V8" stroke="white" strokeOpacity="0.3" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      </div>
    </motion.div>
  );
}

function StepCard({ step, index }) {
  const isLeft = step.side === "left";

  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-60px" }}
      className="group relative bg-[#0a0a0a] border border-white/[0.07] rounded-2xl p-6
        hover:border-white/20 transition-all duration-500 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "radial-gradient(circle at 100% 0%, rgba(255,255,255,0.03) 0%, transparent 70%)" }} />

      <div className="flex items-center justify-between mb-4">
        <span className="text-[9px] tracking-[0.35em] uppercase text-white/25 font-light">{step.phase}</span>
        <span className="font-mono text-[10px] text-white/15 tracking-widest">{step.icon}</span>
      </div>

      <h3 className="font-['Syne'] text-[17px] font-700 text-white leading-snug mb-3 tracking-tight">
        {step.heading}
      </h3>

      <div className="w-8 h-px bg-white/15 mb-3" />

      <p className="text-[13px] text-white/35 leading-[1.75] font-light">{step.body}</p>

      {step.pills.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-4">
          {step.pills.map(p => (
            <span key={p} className="text-[10px] text-white/30 border border-white/[0.08]
              rounded-full px-2.5 py-0.5 font-light tracking-wide">{p}</span>
          ))}
        </div>
      )}

      {step.docs.length > 0 && (
        <div className="mt-1">
          {step.docs.map(d => <PDFCard key={d.name} doc={d} />)}
        </div>
      )}
    </motion.div>
  );

  return (
    <>
      {step.dividerBefore && (
        <div className="col-span-3 flex items-center gap-4 my-4 px-1">
          <div className="flex-1 h-px bg-white/[0.06]" />
          <span className="text-[9px] tracking-[0.35em] uppercase text-white/20 font-light whitespace-nowrap px-2">
            {step.dividerBefore}
          </span>
          <div className="flex-1 h-px bg-white/[0.06]" />
        </div>
      )}

      <div className="grid grid-cols-[1fr_64px_1fr] items-start gap-0 mb-16">
        {isLeft ? cardContent : <div />}

        <div className="flex flex-col items-center pt-6 gap-3">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-8 h-8 rounded-full border border-white/20 bg-[#0a0a0a] flex items-center
              justify-center font-mono text-[11px] text-white/40 z-10 relative"
          >
            {String(index + 1).padStart(2, "0")}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-1.5 h-1.5 rounded-full bg-white/40"
          />
        </div>

        {!isLeft ? cardContent : <div />}
      </div>
    </>
  );
}

function DevChar() {
  return (
    <svg width="48" height="68" viewBox="0 0 48 68" fill="none"
      style={{ filter: "drop-shadow(0 0 16px rgba(255,255,255,0.12))" }}>
      <ellipse cx="24" cy="65" rx="12" ry="3" fill="white" opacity="0.06"/>
      <rect x="15" y="46" width="7" height="16" rx="3.5" fill="#141414" stroke="white" strokeOpacity="0.2" strokeWidth="0.8">
        <animateTransform attributeName="transform" type="rotate" values="-12,18,46; 12,18,46; -12,18,46" dur="0.8s" repeatCount="indefinite"/>
      </rect>
      <rect x="26" y="46" width="7" height="16" rx="3.5" fill="#141414" stroke="white" strokeOpacity="0.1" strokeWidth="0.8">
        <animateTransform attributeName="transform" type="rotate" values="12,29,46; -12,29,46; 12,29,46" dur="0.8s" repeatCount="indefinite"/>
      </rect>
      <rect x="11" y="24" width="26" height="24" rx="7" fill="#111" stroke="white" strokeOpacity="0.18" strokeWidth="0.8"/>
      <rect x="15" y="29" width="18" height="12" rx="3" fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.1" strokeWidth="0.5"/>
      <text x="24" y="38.5" textAnchor="middle" fontSize="7.5" fill="white" fillOpacity="0.5" fontFamily="monospace">{"</>"}</text>
      <rect x="3" y="26" width="8" height="5" rx="2.5" fill="#141414" stroke="white" strokeOpacity="0.1" strokeWidth="0.8"/>
      <rect x="37" y="26" width="8" height="5" rx="2.5" fill="#141414" stroke="white" strokeOpacity="0.2" strokeWidth="0.8"/>
      <rect x="38" y="21" width="10" height="7" rx="2" fill="#1a1a1a" stroke="white" strokeOpacity="0.2" strokeWidth="0.7"/>
      <rect x="39" y="22" width="8" height="5" rx="1" fill="#0d0d0d"/>
      <line x1="40" y1="24" x2="46" y2="24" stroke="white" strokeOpacity="0.2" strokeWidth="0.5"/>
      <line x1="40" y1="25.5" x2="44" y2="25.5" stroke="white" strokeOpacity="0.1" strokeWidth="0.5"/>
      <rect x="13" y="5" width="22" height="20" rx="9" fill="#161616" stroke="white" strokeOpacity="0.2" strokeWidth="0.8"/>
      <ellipse cx="20" cy="13" rx="2.2" ry="2.2" fill="white" fillOpacity="0.7"/>
      <ellipse cx="28" cy="13" rx="2.2" ry="2.2" fill="white" fillOpacity="0.7"/>
      <ellipse cx="20" cy="13" rx="0.9" ry="0.9" fill="#000"/>
      <ellipse cx="28" cy="13" rx="0.9" ry="0.9" fill="#000"/>
      <path d="M19 18.5 Q24 22.5 29 18.5" stroke="white" strokeOpacity="0.4" strokeWidth="1" fill="none" strokeLinecap="round"/>
      <path d="M13 11 Q24 2 35 11" stroke="white" strokeOpacity="0.15" strokeWidth="1.2" fill="none"/>
    </svg>
  );
}

export default function HowWeWork() {
  const stageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start 60%", "end 60%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const charTop = useTransform(scrollYProgress, [0, 1], ["0%", "94%"]);
  const springTop = useSpring(charTop, { stiffness: 60, damping: 18 });

  return (
    <section className="bg-black text-white overflow-hidden">

      <div className="relative text-center px-6 pt-28 pb-16">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16
          bg-gradient-to-b from-white/10 to-transparent" />
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true }}>
          <span className="block text-[9px] tracking-[0.45em] uppercase text-white/20 mb-5 font-light">
            Our Process
          </span>
          <h2 className="font-['Syne'] text-[clamp(40px,6vw,72px)] font-800 leading-[1.0] tracking-tight mb-4">
            How We Work
          </h2>
          <div className="w-12 h-px bg-white/15 mx-auto mb-5" />
          <p className="text-white/30 text-[14px] font-light max-w-[360px] mx-auto leading-relaxed">
            A transparent, structured process — from first conversation to final handoff.
          </p>
        </motion.div>
      </div>

      <div ref={stageRef} className="relative max-w-5xl mx-auto px-6 py-12 pb-24">

        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-white/[0.05]" />

        <motion.div className="absolute left-1/2 top-0 w-px -translate-x-1/2 bg-white/40 origin-top"
          style={{ height: lineHeight }} />

        <motion.div className="absolute left-1/2 -translate-x-1/2 z-30 pointer-events-none"
          style={{ top: springTop }}>
          <DevChar />
        </motion.div>

        <div className="relative z-10">
          {STEPS.map((step, i) => (
            <StepCard key={step.phase} step={step} index={i} />
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border border-white/[0.07] rounded-2xl overflow-hidden"
        >
          <div className="px-8 py-6 border-b border-white/[0.06] flex items-center justify-between">
            <div>
              <span className="block text-[9px] tracking-[0.35em] uppercase text-white/20 mb-1.5">The Team</span>
              <h3 className="font-['Syne'] text-xl font-bold text-white">Passionate engineers, not just coders.</h3>
            </div>
            <div className="hidden md:flex items-center gap-2 text-white/20 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-white/20 animate-pulse" />
              Active Team
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/[0.04]">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.code}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="bg-black px-6 py-5 hover:bg-white/[0.02] transition-colors group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08]
                    flex items-center justify-center font-mono text-[11px] text-white/40 group-hover:border-white/15 transition-colors">
                    {member.code}
                  </div>
                  <span className="text-white/70 text-[13px] font-medium">{member.role}</span>
                </div>
                <p className="text-white/25 text-[11px] font-light pl-11">{member.stack}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="relative text-center px-6 pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(255,255,255,0.03) 0%, transparent 70%)" }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 border border-white/10 rounded-full
            px-5 py-1.5 mb-6 bg-white/[0.02]">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse" />
            <span className="text-[10px] text-white/30 tracking-[0.25em] uppercase font-light">
              Accepting New Projects
            </span>
          </div>

          <h3 className="font-['Syne'] text-[clamp(28px,4vw,48px)] font-bold leading-tight mb-3 tracking-tight">
            Ready to start building?
          </h3>
          <p className="text-white/25 text-[14px] font-light mb-8 max-w-[340px] mx-auto leading-relaxed">
            Book a free discovery call. No commitment — just clarity on what you need.
          </p>

          <div className="flex items-center justify-center gap-3">
            <a href="/contact"
              className="inline-block bg-white text-black font-['Syne'] text-[13px] font-bold
              px-8 py-3 rounded-lg hover:bg-white/90 transition-colors tracking-wide">
              Start Your Project
            </a>
            <a href="/work"
              className="inline-block border border-white/15 text-white/50 font-['DM Sans'] text-[13px]
              font-light px-6 py-3 rounded-lg hover:border-white/30 hover:text-white/70 transition-all">
              View Our Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
// mmgmdgmd
// kkvkldmvkl