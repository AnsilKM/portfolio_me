"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Smartphone, Zap, Database, Cpu, Server, ChevronRight, Activity } from "lucide-react"

const SYSTEM_NODES = [
  {
    id: "ui",
    title: "Presentation Interface",
    icon: Smartphone,
    color: "#4285F4",
    x: "10%",
    y: "50%",
    skills: ["Jetpack Compose", "Flutter", "Compose Multiplatform", "XML", "Material Design", "ExoPlayer", "Camera API"]
  },
  {
    id: "logic",
    title: "Business Orchestration",
    icon: Cpu,
    color: "#7F52FF",
    x: "40%",
    y: "25%",
    skills: ["Clean Architecture", "MVVM", "Coroutines", "Flow", "Hilt", "Koin", "KMP Common Logic"]
  },
  {
    id: "state",
    title: "State Persistence",
    icon: Zap,
    color: "#FBBC05",
    x: "40%",
    y: "75%",
    skills: ["StateFlow", "SharedFlow", "Riverpod", "LiveData", "DataStore", "Navigation"]
  },
  {
    id: "data",
    title: "Data Repositories",
    icon: Database,
    color: "#10b981",
    x: "65%",
    y: "50%",
    skills: ["Room DB", "SQLite", "Retrofit", "Ktor", "Dio", "REST APIs"]
  },
  {
    id: "infra",
    title: "Infrastructure Core",
    icon: Server,
    color: "#E0234E",
    x: "90%",
    y: "50%",
    skills: ["Firebase", "MongoDB", "Node.js", "Express.js", "Git/GitHub", "Gradle", "ADB"]
  }
]

const CONNECTORS = [
  { from: "ui", to: "logic" },
  { from: "ui", to: "state" },
  { from: "logic", to: "data" },
  { from: "state", to: "data" },
  { from: "data", to: "infra" }
]

export default function Skills() {
  const [activeNode, setActiveNode] = useState<string | null>(SYSTEM_NODES[1].id)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const activeData = SYSTEM_NODES.find(n => n.id === activeNode)

  if (!mounted) return null

  return (
    <section id="skills" className="py-24 bg-background overflow-hidden relative">
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        
        {/* Header Block */}
        <div className="mb-20 space-y-6 max-w-2xl">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1 glass border border-accent/20 rounded-full text-[10px] font-black tracking-[0.4em] uppercase text-accent mb-4"
            >
                System Intelligence
            </motion.div>
            <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] text-foreground"
            >
                ARCHITECTURAL <span className="premium-gradient">MAP.</span>
            </motion.h2>
            <p className="text-secondary/60 text-lg font-medium max-w-md leading-relaxed border-l-2 border-accent/10 pl-8 pt-2">
                Mapping technical competencies as high-fidelity nodes within a production-grade system architecture.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 h-fit">
            
            {/* Interactive System Diagram - DESKTOP */}
            <div className="hidden lg:block lg:col-span-8 relative aspect-[16/9] bg-muted/20 dark:bg-black/40 rounded-[48px] border border-foreground/10 overflow-hidden group p-8 shadow-2xl dark:shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                {/* High-Tech Grid Background */}
                <div className="absolute inset-0 opacity-[0.07] dark:opacity-10" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                
                {/* Scanning HUD Overlay */}
                <div className="absolute top-8 left-8 flex items-center space-x-3 z-30">
                    <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent/80">System_Radar_Live</span>
                </div>

                {/* Connection Lines & Flow Animations (Behind Nodes) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    <defs>
                        <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                            <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
                            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    {CONNECTORS.map((conn, i) => {
                        const from = SYSTEM_NODES.find(n => n.id === conn.from)!
                        const to = SYSTEM_NODES.find(n => n.id === conn.to)!
                        const isActive = activeNode === from.id || activeNode === to.id
                        
                        return (
                            <g key={i}>
                                {/* Base Static Line */}
                                <line
                                    x1={from.x}
                                    y1={from.y}
                                    x2={to.x}
                                    y2={to.y}
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    className={`transition-all duration-500 opacity-20 ${isActive ? "text-accent" : "text-foreground"}`}
                                />
                                
                                {/* Marching Dashes Effect */}
                                <motion.line
                                    x1={from.x}
                                    y1={from.y}
                                    x2={to.x}
                                    y2={to.y}
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeDasharray="4, 12"
                                    className="text-accent"
                                    initial={{ strokeDashoffset: 0 }}
                                    animate={{ strokeDashoffset: -100 }}
                                    transition={{ 
                                        duration: 20, 
                                        repeat: Infinity, 
                                        ease: "linear" 
                                    }}
                                />

                                {/* High-Intensity Comet Spark */}
                                <motion.line
                                    x1={from.x}
                                    y1={from.y}
                                    x2={to.x}
                                    y2={to.y}
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeDasharray="20, 200"
                                    strokeLinecap="round"
                                    className="text-accent blur-[2px]"
                                    initial={{ strokeDashoffset: 220 }}
                                    animate={{ strokeDashoffset: -220 }}
                                    transition={{ 
                                        duration: 6 + Math.random() * 2, 
                                        repeat: Infinity, 
                                        ease: "easeInOut",
                                        delay: i * 0.4
                                    }}
                                />
                                
                                {isActive && (
                                    <motion.line
                                        x1={from.x}
                                        y1={from.y}
                                        x2={to.x}
                                        y2={to.y}
                                        stroke="currentColor"
                                        strokeWidth="6"
                                        className="text-accent/20 dark:text-accent/10 blur-xl"
                                    />
                                )}
                            </g>
                        )
                    })}
                </svg>

                {/* Nodes - Desktop */}
                {SYSTEM_NODES.map((node) => (
                    <motion.div
                        key={node.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        onClick={() => setActiveNode(node.id)}
                        style={{ left: node.x, top: node.y }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-30 group/node"
                    >
                         <div className={`relative p-4 md:p-5 rounded-[28px] glass-heavy border transition-all duration-700 flex flex-col items-center gap-2 bg-background/95 backdrop-blur-xl ${
                            activeNode === node.id 
                                ? "border-accent bg-accent/20 scale-110 shadow-[0_0_60px_rgba(16,185,129,0.3)]" 
                                : "border-foreground/10 bg-muted/10 dark:bg-white/5 hover:border-accent/40 hover:scale-105"
                         }`}>
                             <div className={`w-10 h-10 md:w-14 md:h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                                activeNode === node.id ? "bg-accent text-background shadow-lg shadow-accent/50" : "bg-muted dark:bg-white/5 text-accent/60"
                             }`}>
                                <node.icon size={activeNode === node.id ? 28 : 22} />
                             </div>
                             <span className={`text-[9px] font-black uppercase tracking-widest text-center max-w-[100px] transition-colors ${
                                activeNode === node.id ? "text-foreground" : "text-secondary/40 group-hover/node:text-accent/80"
                             }`}>
                                {node.title}
                             </span>
                         </div>
                    </motion.div>
                ))}
            </div>

            {/* RESPONSIVE MOBILE VIEW (VERTICAL FLOW) */}
            <div className="lg:hidden col-span-1 space-y-6">
                {SYSTEM_NODES.map((node, i) => (
                    <div key={node.id} className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            onClick={() => setActiveNode(node.id)}
                            className={`p-6 rounded-[32px] glass-heavy border flex items-center space-x-6 transition-all ${
                                activeNode === node.id ? "border-accent bg-accent/10" : "border-foreground/10 bg-background/95"
                            }`}
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${activeNode === node.id ? "bg-accent text-background" : "bg-muted dark:bg-white/5 text-accent/60"}`}>
                                <node.icon size={28} />
                            </div>
                            <div className="flex-1">
                                <span className="text-[8px] font-black uppercase tracking-widest text-accent/60">Node_{i+1}</span>
                                <h3 className="text-xl font-black tracking-tight text-foreground">{node.title}</h3>
                            </div>
                        </motion.div>
                        
                        {/* Mobile Connector Pulse */}
                        {i < SYSTEM_NODES.length - 1 && (
                            <div className="flex justify-center h-8 relative">
                                <div className="w-px h-full bg-foreground/10" />
                                <div 
                                    className="absolute w-2 h-2 rounded-full bg-accent -left-1 opacity-0 animate-pulse shadow-[0_0_8px_#10b981]" 
                                    style={{ 
                                        transform: 'translateX(50%)',
                                        animation: 'mobile-pulse 3s linear infinite'
                                    }}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Node Intel Panel - HUD Enhanced */}
            <div className="lg:col-span-4 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                    {activeData && (
                        <motion.div
                            key={activeData.id}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            className="p-10 glass-heavy rounded-[48px] border border-accent/30 shadow-3xl space-y-8 relative overflow-hidden bg-background/95 backdrop-blur-xl"
                        >
                            <div className="absolute top-0 right-0 p-8 text-8xl font-black text-accent/5 select-none">{activeData.id}</div>
                            
                            {/* Scanning HUD Header */}
                            <div className="space-y-4 relative z-10">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Active_Node_Linked</span>
                                    <span className="text-[9px] font-black text-accent/40 tracking-widest uppercase">Stability: 100%</span>
                                </div>
                                <h3 className="text-4xl font-black tracking-tighter leading-tight bg-gradient-to-r from-foreground to-foreground/40 bg-clip-text text-transparent italic">{activeData.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2 relative z-10">
                                {activeData.skills.map((skill) => (
                                    <span 
                                        key={skill} 
                                        className="px-4 py-2 glass-heavy text-[10px] font-black uppercase tracking-widest border border-foreground/10 rounded-2xl text-secondary/90 flex items-center hover:bg-accent/10 hover:border-accent/40 hover:text-accent transition-all cursor-default"
                                    >
                                        <ChevronRight size={12} className="mr-2 text-accent/60" />
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="pt-8 border-t border-foreground/10 space-y-4 relative z-10">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3 text-accent">
                                        <Activity size={18} className="animate-pulse" />
                                        <span className="text-[10px] font-black uppercase tracking-widest leading-none">Logical Flow: Optimal</span>
                                    </div>
                                    <div className="w-12 h-1 flex rounded-full bg-foreground/10 overflow-hidden">
                                        <motion.div 
                                            initial={{ x: "-100%" }}
                                            animate={{ x: "100%" }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                            className="w-full h-full bg-accent"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

        </div>
      </div>
    </section>
  )
}
