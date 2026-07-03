"use client";

import React from "react";
import SectionWrapper from "../ui/SectionWrapper";
import SkillTag from "../ui/SkillTag";
import { Terminal, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const EXPERIENCE_DATA = [
  {
    role: "Junior Android Developer",
    company: "Bnkhub Finserv Pvt Ltd",
    period: "APR 2025 — JUN 2026",
    summary: "Spearheading the evolution of native mobile experiences with a focus on performance optimization, architecture scaling, and staged production rollouts.",
    bullets: [
      "Designed and implemented 6+ production-ready features utilizing Kotlin, Jetpack Compose, MVVM, and Clean Architecture patterns.",
      "Integrated 10+ RESTful APIs with structured error handling pipelines, achieving a 35% reduction in API-related application bugs.",
      "Engineered a real-time messaging/chat feature powered by Firebase Cloud Messaging (FCM) supporting secure media attachments.",
      "Managed full end-to-end Google Play Store deployment activities including app signing, bundle optimization, and staged rollouts."
    ]
  },
  {
    role: "Flutter Developer Intern",
    company: "Right Soft Solutions",
    period: "AUG 2024 — JAN 2025",
    summary: "Pivotal role in building cross-platform solutions, structuring state management patterns, and writing native channels.",
    bullets: [
      "Created highly responsive cross-platform application builds for Android and iOS using Flutter & Dart.",
      "Maintained state logic with Riverpod and managed server communications using modularized Dio network calls.",
      "Implemented channel bridging to invoke native Android services (written in Kotlin) where cross-platform integrations fell short."
    ]
  }
];

const CORE_STACK = ["Kotlin", "Flutter", "Dart", "Firebase"];

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      {/* Editorial Header */}
      <div className="w-full mb-16 md:mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold font-display text-[var(--text-primary)] leading-[1.15] max-w-3xl">
          A journey defined by <span className="italic font-normal">mobile excellence</span> and architectural integrity.
        </h2>
      </div>

      {/* Main split grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Summary and Core Stack */}
        <div className="lg:col-span-4 flex flex-col items-start text-left">
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6">
            Focused on building high-performance applications with clean, maintainable codebases. My experience spans from native Android development to cross-platform mastery.
          </p>

          {/* Separator line */}
          <div className="w-full h-[1px] bg-[var(--border)]/60 my-6" />

          {/* Core stack header */}
          <div className="flex items-center gap-2 text-[var(--text-secondary)] mb-4">
            <Terminal size={16} className="text-[var(--accent)]" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider">Core Stack</span>
          </div>

          {/* Core stack tags */}
          <div className="flex flex-wrap gap-2">
            {CORE_STACK.map((tech) => (
              <SkillTag key={tech} label={tech} />
            ))}
          </div>
        </div>

        {/* Right Column: Timeline & Cards */}
        <div className="lg:col-span-8 relative pl-6 md:pl-8 space-y-12">
          {/* Glowing Animated Scroll Timeline Trace */}
          <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-[var(--border)]/40 pointer-events-none">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full bg-[var(--accent)] origin-top shadow-[0_0_8px_rgba(130,201,30,0.4)]"
            />
          </div>

          {EXPERIENCE_DATA.map((job, idx) => (
            <div key={idx} className="relative group">
              {/* Status node dot */}
              <motion.span 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: idx * 0.15 + 0.2 }}
                className="absolute left-[-25px] md:left-[-33px] top-1.5 block w-[10px] h-[10px] rounded-full bg-[var(--bg-primary)] border-2 border-[var(--border)] group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] transition-colors duration-300 z-10"
              >
                {/* Active pulse on first item */}
                {idx === 0 && (
                  <span className="absolute -inset-1 rounded-full border border-[var(--accent)] animate-ping opacity-70" />
                )}
              </motion.span>

              {/* Title & Metadata */}
              <motion.div 
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2"
              >
                <h3 className="text-lg md:text-xl font-bold font-display text-[var(--text-primary)]">
                  {job.role}
                </h3>
                <span className="text-[10px] font-mono text-[var(--text-secondary)] tracking-wider">
                  {job.period}
                </span>
              </motion.div>

              {/* Company */}
              <motion.h4 
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 + 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm font-semibold text-[var(--accent)] mb-4"
              >
                {job.company}
              </motion.h4>

              {/* Rounded card block */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 + 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-5 sm:p-6 shadow-sm hover:border-[var(--accent)]/30 hover:shadow-[0_8px_30px_rgba(130,201,30,0.02)] transition-all duration-300"
              >
                {/* Summary (italic) */}
                <p className="text-xs sm:text-sm italic text-[var(--text-secondary)] leading-relaxed mb-4 border-b border-[var(--border)]/40 pb-3">
                  {job.summary}
                </p>

                {/* Bullets with custom icons */}
                <ul className="space-y-3.5 text-xs sm:text-sm text-[var(--text-secondary)] list-none pl-0">
                  {job.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 leading-relaxed group/bullet">
                      <ArrowRight size={14} className="text-[var(--accent)] shrink-0 mt-0.5 group-hover/bullet:translate-x-0.5 transition-transform" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
}
