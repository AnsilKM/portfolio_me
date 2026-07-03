"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Terminal, Cpu, Info } from "lucide-react";
import profileImg from "@/assets/profile.png";

const DIAGNOSTIC_LOGS = [
  "[SYS] BOOTING PORTFOLIO ENGINE v1.2.0",
  "[SYS] LOADING SHARED KMP MODULES... OK",
  "[NET] STACK: KTOR / RETROFIT / DIO PROTOCOLS",
  "[DB] ROOM PERSISTENCE & SQLITE: ONLINE",
  "[UI] COMPOSE & FLUTTER RENDERERS: ACTIVE",
  "[SYS] CRASH_FREE_RATE: 98% (NOMINAL)",
  "[SYS] STATUS: OPEN_TO_COLLABORATE"
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"overview" | "skills" | "logs">("overview");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="top"
      className="min-h-screen w-full flex flex-col justify-between pt-28 md:pt-32 pb-10 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center my-auto w-full">
        {/* Left Side Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="col-span-1 lg:col-span-7 flex flex-col justify-center items-start text-left"
        >

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-[54px] font-bold font-display text-[var(--text-primary)] leading-[1.08] mb-3"
          >
            Muhammed Ansil
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-[10px] font-mono tracking-widest text-[var(--accent)] font-bold uppercase mb-6"
          >
            Mobile Application Developer &middot; Android &middot; Flutter &middot; KMP
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-[var(--text-secondary)] max-w-lg mb-8 leading-relaxed font-body"
          >
            Architecting seamless digital experiences through modern mobile frameworks with a focus on performance, scalability, and editorial-grade UI.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => handleScrollTo("#projects")}
              className="flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded bg-[var(--accent)] text-[var(--bg-primary)] hover:opacity-95 transition-opacity cursor-pointer group shadow-sm font-body"
            >
              <span>View Projects</span>
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => handleScrollTo("#contact")}
              className="flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded border border-[var(--border)] bg-transparent text-[var(--text-primary)] hover:bg-[var(--bg-surface)] transition-all cursor-pointer font-body"
            >
              <span>Contact Me</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side Column: Holographic Terminal Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-1 lg:col-span-5 flex justify-center items-center relative w-full py-10 lg:py-0 select-none"
        >
          {/* Glass dashboard background card */}
          <div className="relative w-full max-w-[360px] aspect-square flex flex-col justify-between items-center bg-[var(--bg-surface)]/30 border border-[var(--border)]/70 rounded-2xl p-6 shadow-2xl backdrop-blur-sm overflow-hidden">
            {/* Fine Technical Grid in background */}
            <div className="absolute inset-0 border border-[var(--border)]/30 rounded-2xl pointer-events-none overflow-hidden opacity-40">
              <div className="absolute top-1/4 left-0 right-0 h-[1px] border-b border-dashed border-[var(--border)]/20" />
              <div className="absolute top-2/4 left-0 right-0 h-[1px] border-b border-dashed border-[var(--border)]/20" />
              <div className="absolute top-3/4 left-0 right-0 h-[1px] border-b border-dashed border-[var(--border)]/20" />
              <div className="absolute left-1/4 top-0 bottom-0 w-[1px] border-l border-dashed border-[var(--border)]/20" />
              <div className="absolute left-2/4 top-0 bottom-0 w-[1px] border-l border-dashed border-[var(--border)]/20" />
              <div className="absolute left-3/4 top-0 bottom-0 w-[1px] border-l border-dashed border-[var(--border)]/20" />
            </div>

            {/* Glowing corner brackets */}
            <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-[var(--accent)]/60 rounded-tl" />
            <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[var(--accent)]/60 rounded-tr" />
            <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-[var(--accent)]/60 rounded-bl" />
            <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-[var(--accent)]/60 rounded-br" />

            {/* Interactive Hologram Screen */}
            <div className="flex-1 w-full flex items-center justify-center relative">
              {/* Rotating Orbital Circles (Holographic lens) */}
              <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                {/* Outer Ring */}
                <svg
                  className="absolute w-[260px] h-[260px] opacity-75 group-hover:scale-105 group-hover:opacity-90 transition-all duration-700 ease-[0.16,1,0.3,1]"
                  viewBox="0 0 100 100"
                  style={{ animation: "spin 25s linear infinite" }}
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="46"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="0.4"
                    strokeDasharray="4 8 12 8"
                    opacity="0.35"
                  />
                </svg>
                {/* Inner Ring */}
                <svg
                  className="absolute w-[220px] h-[220px] opacity-50 group-hover:scale-95 group-hover:opacity-75 transition-all duration-700 ease-[0.16,1,0.3,1]"
                  viewBox="0 0 100 100"
                  style={{ animation: "spin 15s linear infinite reverse" }}
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="46"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="0.6"
                    strokeDasharray="20 10 5 10"
                    opacity="0.5"
                  />
                </svg>
              </div>

              {/* Profile Image - central circular avatar */}
              <div 
                className={`relative w-[130px] h-[130px] rounded-full overflow-hidden border-2 border-[var(--border)] z-20 bg-[var(--bg-dark)] shadow-xl transition-all duration-500 ${
                  activeTab === "logs" ? "opacity-20 blur-[1.5px]" : "opacity-100"
                }`}
              >
                <Image
                  src={profileImg}
                  alt="Muhammed Ansil"
                  fill
                  priority
                  sizes="130px"
                  className="object-cover"
                  style={{ objectPosition: "50% 35%" }}
                />
                {/* High-tech laser sweep line */}
                {activeTab !== "logs" && (
                  <motion.div
                    className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-85 shadow-[0_0_8px_var(--accent)] pointer-events-none z-30"
                    animate={{ y: ["0px", "130px"] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                )}
              </div>

              {/* Holographic Status indicator pill overlay on Avatar */}
              {activeTab !== "logs" && (
                <span className="absolute bottom-10 right-20 z-20 bg-[var(--bg-primary)]/90 border border-[var(--border)] px-1.5 py-0.5 rounded text-[8px] font-mono text-[var(--accent)] flex items-center gap-1 shadow-md">
                  <span className="h-1 w-1 rounded-full bg-[var(--accent)] animate-pulse" />
                  <span>ONLINE</span>
                </span>
              )}

              {/* Mode-Specific Overlays */}

              {/* TAB 1: OVERVIEW (Floating orbiting tech tags) */}
              {activeTab === "overview" && (
                <div className="absolute inset-0 w-full h-full z-20 pointer-events-none">
                  {/* tag 1 */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute top-2 left-6 bg-[var(--bg-surface)]/90 border border-[var(--border)]/80 px-2 py-0.5 rounded text-[9px] font-mono text-[var(--text-primary)] flex items-center gap-1.5 shadow-md"
                  >
                    <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
                    <span>Kotlin</span>
                  </motion.div>

                  {/* tag 2 */}
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 4, delay: 1, ease: "easeInOut" }}
                    className="absolute top-8 right-6 bg-[var(--bg-surface)]/90 border border-[var(--border)]/80 px-2 py-0.5 rounded text-[9px] font-mono text-[var(--text-primary)] flex items-center gap-1.5 shadow-md"
                  >
                    <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
                    <span>Flutter</span>
                  </motion.div>

                  {/* tag 3 */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 4, delay: 2, ease: "easeInOut" }}
                    className="absolute bottom-6 left-6 bg-[var(--bg-surface)]/90 border border-[var(--border)]/80 px-2 py-0.5 rounded text-[9px] font-mono text-[var(--text-primary)] flex items-center gap-1.5 shadow-md"
                  >
                    <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
                    <span>KMP</span>
                  </motion.div>

                  {/* tag 4 */}
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 4, delay: 3, ease: "easeInOut" }}
                    className="absolute bottom-8 right-6 bg-[var(--bg-surface)]/90 border border-[var(--border)]/80 px-2 py-0.5 rounded text-[9px] font-mono text-[var(--text-primary)] flex items-center gap-1.5 shadow-md"
                  >
                    <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
                    <span>Compose</span>
                  </motion.div>
                </div>
              )}

              {/* TAB 2: SKILL MATRIX (Glowing Radar Chart surrounding profile) */}
              {activeTab === "skills" && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full z-10 flex items-center justify-center pointer-events-none"
                >
                  <svg className="w-[280px] h-[280px]" viewBox="0 0 100 100">
                    {/* Inner Radar Hexagon Grid lines */}
                    <polygon points="50,22 74,36 74,64 50,78 26,64 26,36" fill="none" stroke="var(--border)" strokeWidth="0.4" opacity="0.4" />
                    <polygon points="50,32 67,41 67,59 50,68 33,59 33,41" fill="none" stroke="var(--border)" strokeWidth="0.4" opacity="0.4" />
                    <polygon points="50,41 59,46 59,54 50,59 41,54 41,46" fill="none" stroke="var(--border)" strokeWidth="0.4" opacity="0.4" />

                    {/* Radar Axes */}
                    <line x1="50" y1="50" x2="50" y2="12" stroke="var(--border)" strokeWidth="0.4" opacity="0.5" />
                    <line x1="50" y1="50" x2="83" y2="31" stroke="var(--border)" strokeWidth="0.4" opacity="0.5" />
                    <line x1="50" y1="50" x2="83" y2="69" stroke="var(--border)" strokeWidth="0.4" opacity="0.5" />
                    <line x1="50" y1="50" x2="50" y2="88" stroke="var(--border)" strokeWidth="0.4" opacity="0.5" />
                    <line x1="50" y1="50" x2="17" y2="69" stroke="var(--border)" strokeWidth="0.4" opacity="0.5" />
                    <line x1="50" y1="50" x2="17" y2="31" stroke="var(--border)" strokeWidth="0.4" opacity="0.5" />

                    {/* Skill Matrix Polygon (Value Area) */}
                    <polygon 
                      points="50,16 77,34 75,64 50,81 22,66 22,34" 
                      fill="rgba(130,201,30,0.18)" 
                      stroke="var(--accent)" 
                      strokeWidth="1.2" 
                      strokeLinejoin="round"
                    />

                    {/* Vertex Dots */}
                    <circle cx="50" cy="16" r="1.5" fill="var(--accent)" />
                    <circle cx="77" cy="34" r="1.5" fill="var(--accent)" />
                    <circle cx="75" cy="64" r="1.5" fill="var(--accent)" />
                    <circle cx="50" cy="81" r="1.5" fill="var(--accent)" />
                    <circle cx="22" cy="66" r="1.5" fill="var(--accent)" />
                    <circle cx="22" cy="34" r="1.5" fill="var(--accent)" />

                    {/* Labels */}
                    <text x="50" y="8" textAnchor="middle" fill="var(--text-primary)" fontSize="4.5" fontFamily="monospace" fontWeight="bold">ANDROID</text>
                    <text x="89" y="32" textAnchor="start" fill="var(--text-primary)" fontSize="4.5" fontFamily="monospace" fontWeight="bold">FLUTTER</text>
                    <text x="89" y="71" textAnchor="start" fill="var(--text-primary)" fontSize="4.5" fontFamily="monospace" fontWeight="bold">KMP</text>
                    <text x="50" y="94" textAnchor="middle" fill="var(--text-primary)" fontSize="4.5" fontFamily="monospace" fontWeight="bold">ARCHITECTURE</text>
                    <text x="11" y="71" textAnchor="end" fill="var(--text-primary)" fontSize="4.5" fontFamily="monospace" fontWeight="bold">BACKEND</text>
                    <text x="11" y="32" textAnchor="end" fill="var(--text-primary)" fontSize="4.5" fontFamily="monospace" fontWeight="bold">COMPOSE</text>
                  </svg>
                </motion.div>
              )}

              {/* TAB 3: DIAGNOSTICS (Scrolling overlay terminal) */}
              {activeTab === "logs" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 z-30 flex flex-col justify-center p-3"
                >
                  <div className="w-full bg-[var(--bg-dark)]/90 border border-[var(--border)] rounded-lg p-3 font-mono text-[8px] text-[var(--accent)] text-left shadow-2xl h-[170px] overflow-hidden flex flex-col justify-between">
                    <div className="flex items-center justify-between border-b border-[var(--border)]/40 pb-1.5 mb-1.5">
                      <span className="text-[7px] text-[var(--text-secondary)]">console_diagnostics.sh</span>
                      <div className="flex gap-1">
                        <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
                        <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col gap-1 overflow-y-auto">
                      {DIAGNOSTIC_LOGS.map((log, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.25 }}
                        >
                          {log}
                        </motion.div>
                      ))}
                    </div>
                    <div className="border-t border-[var(--border)]/40 pt-1.5 mt-1.5 flex justify-between text-[7px] text-[var(--text-secondary)]">
                      <span>SYS_NOMINAL</span>
                      <span className="animate-pulse">_</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Interactive Mode Control Panel (3 Tab Buttons) */}
            <div className="w-full grid grid-cols-3 gap-2 border-t border-[var(--border)]/40 pt-4 mt-2 z-30">
              <button
                onClick={() => setActiveTab("overview")}
                className={`py-1.5 px-1 rounded border text-[9px] font-mono font-bold tracking-tight transition-all duration-300 cursor-pointer ${
                  activeTab === "overview"
                    ? "bg-[var(--accent)] text-[var(--bg-primary)] border-[var(--accent)] shadow-sm"
                    : "bg-[var(--bg-primary)]/40 text-[var(--text-secondary)] border-[var(--border)] hover:bg-[var(--bg-surface)] hover:text-[var(--text-primary)]"
                }`}
              >
                01 // OVERVIEW
              </button>
              <button
                onClick={() => setActiveTab("skills")}
                className={`py-1.5 px-1 rounded border text-[9px] font-mono font-bold tracking-tight transition-all duration-300 cursor-pointer ${
                  activeTab === "skills"
                    ? "bg-[var(--accent)] text-[var(--bg-primary)] border-[var(--accent)] shadow-sm"
                    : "bg-[var(--bg-primary)]/40 text-[var(--text-secondary)] border-[var(--border)] hover:bg-[var(--bg-surface)] hover:text-[var(--text-primary)]"
                }`}
              >
                02 // SKILLS
              </button>
              <button
                onClick={() => setActiveTab("logs")}
                className={`py-1.5 px-1 rounded border text-[9px] font-mono font-bold tracking-tight transition-all duration-300 cursor-pointer ${
                  activeTab === "logs"
                    ? "bg-[var(--accent)] text-[var(--bg-primary)] border-[var(--accent)] shadow-sm"
                    : "bg-[var(--bg-primary)]/40 text-[var(--text-secondary)] border-[var(--border)] hover:bg-[var(--bg-surface)] hover:text-[var(--text-primary)]"
                }`}
              >
                03 // STATUS
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Editorial stats row below */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-[var(--border)]/40 mt-10"
      >
        <div className="flex flex-col items-start justify-center">
          <div className="text-2xl md:text-3xl font-bold font-display text-[var(--text-primary)]">6+</div>
          <div className="text-[10px] font-mono text-[var(--text-secondary)] uppercase tracking-wider mt-1">Production Features</div>
        </div>
        <div className="flex flex-col items-start justify-center">
          <div className="text-2xl md:text-3xl font-bold font-display text-[var(--text-primary)]">3+</div>
          <div className="text-[10px] font-mono text-[var(--text-secondary)] uppercase tracking-wider mt-1">White-label Apps</div>
        </div>
        <div className="flex flex-col items-start justify-center">
          <div className="text-2xl md:text-3xl font-bold font-display text-[var(--text-primary)]">98%</div>
          <div className="text-[10px] font-mono text-[var(--text-secondary)] uppercase tracking-wider mt-1">Crash-free</div>
        </div>
        <div className="flex flex-col items-start justify-center">
          <div className="text-2xl md:text-3xl font-bold font-display text-[var(--text-primary)]">1.5 Yrs</div>
          <div className="text-[10px] font-mono text-[var(--text-secondary)] uppercase tracking-wider mt-1">Experience</div>
        </div>
      </motion.div>
    </section>
  );
}
