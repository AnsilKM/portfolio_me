"use client";

import React from "react";
import { Mail, ArrowRight, Linkedin, Github } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Contact() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <footer id="contact" className="bg-[var(--bg-dark)] text-[var(--text-primary)] py-20 md:py-28 px-4 sm:px-6 md:px-8 border-t border-[var(--border)]/60 relative overflow-hidden select-none">
      {/* Subtle bottom accent glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-[radial-gradient(circle,rgba(130,201,30,0.06)_0%,rgba(130,201,30,0)_70%)] blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column - Copy details */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          <motion.span 
            variants={itemVariants}
            className="text-xs font-mono tracking-widest text-[var(--accent)] uppercase mb-3"
          >
            Get in Touch
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-display leading-[1.15] text-[var(--text-primary)] mb-6"
          >
            Let&apos;s discuss your<br />next project.
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-8 max-w-lg"
          >
            Whether you have a specific mobile app idea in mind or just want to explore the possibilities of modern technical architecture, I&apos;m here to translate your vision into warm, competent engineering.
          </motion.p>

          {/* CTA Group */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="mailto:muhammedansil094@gmail.com"
              className="flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded bg-[var(--accent)] text-[var(--bg-primary)] hover:opacity-90 transition-opacity cursor-pointer group shadow-sm"
            >
              <Mail size={16} />
              <span>Email Me</span>
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            
            <a
              href="https://linkedin.com/in/muhammed-ansil-810212269"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-colors cursor-pointer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="https://github.com/AnsilKM"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-colors cursor-pointer"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column - Contact Channels Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 w-full"
        >
          <div className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-6 sm:p-8 shadow-md">
            <h3 className="text-lg font-bold font-display text-[var(--text-primary)] mb-6">
              Contact Channels
            </h3>

            {/* List */}
            <div className="space-y-5 mb-6">
              {/* Item 1: Email */}
              <div className="flex items-center gap-4 group/item">
                <div className="w-10 h-10 rounded bg-[var(--bg-primary)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)] group-hover/item:border-[var(--accent)]/40 transition-colors duration-300">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-[var(--text-secondary)] uppercase">Email</span>
                  <a href="mailto:muhammedansil094@gmail.com" className="text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">
                    Send an Email
                  </a>
                </div>
              </div>

              {/* Item 2: LinkedIn */}
              <div className="flex items-center gap-4 group/item">
                <div className="w-10 h-10 rounded bg-[var(--bg-primary)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)] group-hover/item:border-[var(--accent)]/40 transition-colors duration-300">
                  <Linkedin size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-[var(--text-secondary)] uppercase">LinkedIn</span>
                  <a href="https://linkedin.com/in/muhammed-ansil-810212269" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">
                    Connect on LinkedIn
                  </a>
                </div>
              </div>

              {/* Item 3: GitHub */}
              <div className="flex items-center gap-4 group/item">
                <div className="w-10 h-10 rounded bg-[var(--bg-primary)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)] group-hover/item:border-[var(--accent)]/40 transition-colors duration-300">
                  <Github size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-[var(--text-secondary)] uppercase">GitHub</span>
                  <a href="https://github.com/AnsilKM" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">
                    View GitHub Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="w-full h-[1px] bg-[var(--border)] mb-5" />

            {/* Response time quote */}
            <p className="text-xs italic text-[var(--text-secondary)] leading-relaxed">
              &ldquo;I typically respond within 24 business hours. Based in Kerala, working globally.&rdquo;
            </p>
          </div>
        </motion.div>

      </div>

      {/* Footer copyright section */}
      <div className="max-w-5xl mx-auto mt-16 pt-8 border-t border-[var(--border)]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-secondary)]/50">
        <span>Designed & Built by Muhammed Ansil</span>
        <span>© 2026 • Kerala, India</span>
      </div>
    </footer>
  );
}
