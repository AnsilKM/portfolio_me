"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ShieldCheck, Layers, Globe, Code2, Terminal } from "lucide-react"

const SPECIALIZATIONS = [
    { title: "Native Core", desc: "Kotlin, Jetpack Compose, Android SDK", icon: Code2 },
    { title: "Cross-Platform", desc: "Flutter, KMP, Compose Multiplatform", icon: Globe },
    { title: "Architectural Design", desc: "Clean, MVVM, SOLID, Modularization", icon: Layers },
    { title: "System Stability", desc: "98% Crash-Free, Error Monitoring", icon: ShieldCheck },
]

const KEY_METRICS = [
    { label: "Experience", value: "1.5+ Years" },
    { label: "Education", value: "B.Tech CSE" },
    { label: "Logic Sharing", value: "90% (KMP)" },
    { label: "Performance", value: "Optimized Bundles" },
]

export default function About() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="about" className="py-24 bg-background relative border-t border-foreground/5 overflow-hidden">
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        
        {/* Simple & Professional Header */}
        <div className="mb-20">
            <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-6"
            >
                <Terminal size={12} />
                <span>Executive Summary</span>
            </motion.div>
            <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05]"
            >
                Engineering High-Performance <br />
                <span className="text-secondary/40 italic">Mobile Ecosystems.</span>
            </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-20">
            
            {/* Narrative - Clean Biography */}
            <div className="space-y-8">
                <div className="space-y-6 text-xl text-secondary/80 font-medium leading-relaxed">
                    <p>
                        Professional <span className="text-foreground font-bold">Android & Flutter Developer</span> with a track record of shipping stable, enterprise-grade applications.
                    </p>
                    <p className="text-base text-secondary/60">
                        Over the past 1.5+ years, I have specialized in <span className="text-foreground">Clean Architecture</span> and <span className="text-foreground">MVVM</span> patterns to ensure codebases remain scalable and testable. By leveraging Kotlin Multiplatform (KMP), I enable modular logic sharing that reduces development time without compromising on native quality.
                    </p>
                </div>

                <p className="text-sm text-accent font-black uppercase tracking-widest flex items-center">
                    <span className="w-8 h-px bg-accent mr-4" />
                    Focus: Native Precision & Cross-Platform Scale
                </p>
            </div>

            {/* Specializations - Simple List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {SPECIALIZATIONS.map((spec, i) => (
                    <motion.div 
                        key={spec.title}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="space-y-3"
                    >
                        <div className="text-accent">
                            <spec.icon size={22} strokeWidth={2.5} />
                        </div>
                        <div className="space-y-1">
                            <h4 className="font-bold text-base text-foreground">{spec.title}</h4>
                            <p className="text-sm text-secondary/60 leading-snug">{spec.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Impact Metrics - Minimalist Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-16 border-t border-foreground/5">
            {KEY_METRICS.map((metric, i) => (
                <motion.div 
                    key={metric.label}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="space-y-1"
                >
                    <span className="text-[9px] font-black uppercase tracking-widest text-secondary/40">{metric.label}</span>
                    <div className="text-2xl font-black text-foreground">{metric.value}</div>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  )
}
