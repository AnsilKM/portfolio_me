"use client"

import React from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Smartphone, Globe } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-24 px-4 bg-background border-t border-white/5">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-black tracking-tighter">
              MUHAMMED ANSIL<span className="premium-gradient">.</span>
            </h2>
            <p className="text-secondary/60 max-w-xs text-base font-medium">
              Android & Flutter Developer focused on high-performance mobile architectures and scalable systems.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 md:gap-12">
            <a href="#about" className="text-xs font-black uppercase tracking-widest text-secondary/40 hover:text-accent transition-colors">About</a>
            <a href="#skills" className="text-xs font-black uppercase tracking-widest text-secondary/40 hover:text-accent transition-colors">Skills</a>
            <a href="#projects" className="text-xs font-black uppercase tracking-widest text-secondary/40 hover:text-accent transition-colors">Projects</a>
            <a href="#experience" className="text-xs font-black uppercase tracking-widest text-secondary/40 hover:text-accent transition-colors">Experience</a>
            <a href="#contact" className="text-xs font-black uppercase tracking-widest text-secondary/40 hover:text-accent transition-colors">Contact</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-foreground/5 text-[10px] font-black uppercase tracking-[0.2em] text-secondary/60">
          <div>© {currentYear} Muhammed Ansil. Built with Precision.</div>
          <div className="flex items-center space-x-3 bg-muted/50 dark:bg-white/5 px-4 py-2 rounded-full border border-foreground/10">
            <Globe size={14} className="text-accent" />
            <span className="text-foreground/70">Ernakulam, Kerala, India</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
