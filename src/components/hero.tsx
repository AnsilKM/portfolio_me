"use client"

import React from "react"
import { motion } from "framer-motion"
import { Briefcase, Code2, Zap, MapPin } from "lucide-react"
import BackgroundScene from "./background-scene"
import Magnetic from "./magnetic"

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  } as const

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  } as const

  const stats = [
    { icon: Briefcase, label: "Experience", value: "1.5+ Year" },
    { icon: Zap, label: "Stability", value: "98% Crash-Free" },
  ]

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <BackgroundScene />

      <div className="container mx-auto px-4 z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-5xl mx-auto flex flex-col items-center text-center"
        >

          {/* Main Title */}
          <motion.div variants={item} className="mb-10 text-center">
            <h1 className="text-[clamp(3rem,8vw,6rem)] md:text-[clamp(4rem,10vw,8rem)] font-black tracking-tight leading-[0.9] text-foreground">
              <span className="opacity-40 font-extralight block text-xl md:text-3xl tracking-[0.5em] mb-4 uppercase">
                Android & Flutter Developer
              </span>
              MUHAMMED<br />
              <span className="premium-gradient text-glow">ANSIL</span>
            </h1>
          </motion.div>

          {/* Value Proposition */}
          <motion.div variants={item} className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-lg md:text-2xl font-medium text-foreground/80 leading-relaxed tracking-tight">
              I build scalable, high-performance mobile applications using <span className="text-foreground font-bold italic">Kotlin</span>,
              <span className="text-foreground font-bold italic"> Jetpack Compose</span>,
              <span className="text-foreground font-bold italic"> Flutter</span> &
              <span className="text-foreground font-bold italic"> KMP</span> — focused on performance, clean architecture, and real-world impact.
            </h2>

            <div className="flex flex-wrap justify-center gap-3 text-[10px] md:text-xs text-secondary font-bold tracking-widest uppercase opacity-60">
              <span className="px-3 py-1 border border-border rounded-lg">Kotlin</span>
              <span className="px-3 py-1 border border-border rounded-lg">Compose</span>
              <span className="px-3 py-1 border border-border rounded-lg">Flutter</span>
              <span className="px-3 py-1 border border-border rounded-lg">KMP</span>
              <span className="px-4 py-1.5 bg-accent/10 text-accent border border-accent/20 rounded-full font-black">Top Talent</span>
            </div>
          </motion.div>

          {/* Impact Stats */}
          <motion.div
            variants={item}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-xl mt-16 mb-20 px-4"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center justify-center space-x-4 group">
                <div className="p-3 rounded-2xl glass border border-white/5 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-5 h-5 text-accent" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-black text-foreground">{stat.value}</div>
                  <div className="text-[10px] font-bold tracking-widest uppercase text-secondary/60">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Fixed Location Marker */}
          <motion.div
            variants={item}
            className="flex items-center space-x-3 text-secondary/40 font-black tracking-[0.2em] uppercase text-[10px]"
          >
            <MapPin size={14} className="text-accent" />
            <span>Ernakulam, Kerala, India</span>
          </motion.div>

        </motion.div>
      </div>

    </div>
  )
}
