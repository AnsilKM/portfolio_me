"use client"

import React from "react"
import { motion } from "framer-motion"
import { MapPin, ChevronRight, Zap } from "lucide-react"

const experiences = [
  {
    role: "Junior Android Developer",
    company: "Bnkhub Finserv Pvt Ltd",
    period: "Apr 2025 - Present",
    location: "Ernakulam, Kerala",
    impact: [
       "Built 6+ production features using Kotlin & Jetpack Compose.",
       "Reduced UI code duplication by 50% via reusable components.",
       "Integrated 10+ APIs using Retrofit with robust error handling.",
       "Achieved 98% crash-free sessions across high-frequency apps.",
       "Delivered 3+ white-label apps with rapid modular branding.",
       "Fixed 40+ critical bugs, improving overall system stability by 25%."
    ],
    skills: ["Kotlin", "Compose", "MVVM", "Retrofit", "REST APIs"],
    current: true,
  },
  {
    role: "Flutter Developer Intern",
    company: "Right Soft Solutions",
    period: "Aug 2024 - Jan 2025",
    location: "Ernakulam, Kerala",
    impact: [
       "Developed high-velocity cross-platform apps using Flutter (Android & iOS).",
       "Built pixel-perfect responsive UIs adhering to Material Design.",
       "Explored native Android bridges using Kotlin and Java for modular features.",
       "Optimized persistent state management and API synchronization."
    ],
    skills: ["Flutter", "Dart", "Kotlin", "Java", "Material Design"],
    current: false,
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
           <div className="space-y-6 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1 glass border border-accent/20 rounded-full text-[10px] font-black tracking-[0.4em] uppercase text-accent mb-4"
              >
                Career Strategy
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85]"
              >
                PROFESSIONAL <br /><span className="premium-gradient">CONTINUUM.</span>
              </motion.h2>
           </div>
           <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-secondary/60 text-lg font-medium max-w-sm leading-relaxed border-l-2 border-accent/10 pl-8 pb-4"
           >
              A strategic journey from foundational mobile engineering to architecting high-frequency fintech ecosystems.
           </motion.p>
        </div>

        {/* Experience Log */}
        <div className="space-y-16 relative">
          {/* Subtle Vertical Track */}
          <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-px bg-white/5 md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
              className={`relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start ${index % 2 !== 0 ? "md:rtl" : ""}`}
            >
              {/* Timeline Indicator Hub */}
              <div className="absolute left-[20px] md:left-1/2 top-1 w-6 h-6 rounded-full glass border-2 border-accent -translate-x-1/2 z-10 flex items-center justify-center">
                 <div className={`w-2 h-2 rounded-full ${exp.current ? "bg-accent animate-pulse" : "bg-accent/40"}`} />
              </div>

              {/* Side 1: Header Info */}
              <div className={`pl-16 md:pl-0 space-y-4 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"} text-left`}>
                 <div className={`flex items-center space-x-4 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                    <span className="text-[10px] font-black uppercase tracking-widest text-accent mb-1 border border-accent/20 px-3 py-1 rounded-full">{exp.period}</span>
                 </div>
                 <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-foreground leading-none">{exp.company}</h3>
                 <div className={`flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-secondary/40 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                    <MapPin size={12} className="text-accent" />
                    <span>{exp.location}</span>
                 </div>
                 <div className={`flex flex-wrap gap-2 pt-4 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                    {exp.skills.map(skill => (
                        <span key={skill} className="px-3 py-1 bg-white/5 text-[9px] font-black uppercase tracking-widest border border-white/5 rounded-lg text-secondary/40">
                            {skill}
                        </span>
                    ))}
                 </div>
              </div>

              {/* Side 2: Impact Log */}
              <div className={`pl-16 md:pl-0 space-y-6 ${index % 2 !== 0 ? "md:text-left md:pr-0 md:pl-12" : "md:text-left md:pl-12 text-left"}`}>
                 <div className="p-8 md:p-12 glass rounded-[32px] border border-white/5 group hover:border-accent/10 transition-all shadow-2xl relative overflow-hidden text-left rtl:ltr">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 blur-3xl rounded-full opacity-20 pointer-events-none" />
                    <h4 className="text-xl font-black tracking-tight mb-8 flex items-center space-x-3">
                        <Zap size={18} className="text-accent" />
                        <span>{exp.role}</span>
                    </h4>
                    <ul className="space-y-4">
                        {exp.impact.map((point, i) => (
                            <li key={i} className="flex items-start space-x-4 group/item">
                                <ChevronRight size={14} className="mt-1 text-accent/40 group-hover/item:text-accent group-hover/item:translate-x-1 transition-all" />
                                <p className="text-sm font-medium text-secondary/70 leading-relaxed group-hover/item:text-foreground transition-all">
                                    {point}
                                </p>
                            </li>
                        ))}
                    </ul>
                 </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
