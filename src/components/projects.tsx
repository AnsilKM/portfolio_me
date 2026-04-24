"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Layers, Cpu, Database, Smartphone, Zap, ChevronRight, LucideIcon, ArrowUpRight } from "lucide-react"

interface ProjectStat {
  logic: string
  stability: string
  latency: string
  [key: string]: string
}

interface ProjectData {
  title: string
  category: string
  desc: string
  longDesc: string
  features: string[]
  architecture: string
  stateManagement: string
  tags: string[]
  metrics: ProjectStat
  icon: LucideIcon
  color: string
}

const projects: ProjectData[] = [
  {
    title: "Extraa – FinTech",
    category: "FINTECH CORE",
    desc: "A high-security FinTech utility engineered for maximum code sharing using KMP.",
    longDesc: "Extraa is a high-stakes financial utility focused on transaction security and UI performance. The project centered on creating a shared KMP codebase that handles complex JWT-based auth flows with auto-refresh tokens and secure biometric integration. I implemented a custom, IME-aware Layout system to handle dense financial forms without disruptive keyboard behavior, achieving a 90% reduction in platform-specific logic while maintaining 60FPS performance across both Android and iOS.",
    features: ["Biometric Secure-Store Integration", "JWT/OTP Multi-Factor Auth Flow", "IME-aware Declarative UI Layouts", "Shared Ktor Network Layer"],
    architecture: "Clean Architecture + MVVM",
    stateManagement: "StateFlow & SharedFlow",
    tags: ["KMP", "Compose", "Ktor", "Koin"],
    metrics: { logic: "Shared 90%", stability: "High", latency: "< 100ms" },
    icon: Zap,
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "Support App",
    category: "ENTERPRISE",
    desc: "Real-time enterprise support ecosystem with high-speed message delivery.",
    longDesc: "Engineered specifically for high-concurrency support environments, this platform utilizes a custom WebSocket implementation over KMP to ensure sub-200ms message propagation across desktop and mobile. Designed a robust Role-Based Access Control (RBAC) system for managing hierarchy in large support teams, coupled with a reactive state-management pattern that handles real-time ticket updates without UI stuttering.",
    features: ["Sub-200ms WebSocket Messaging", "Enterprise-grade RBAC System", "Reactive Ticket State Management", "Cross-platform Core Logic"],
    architecture: "Modular UI + Repository Pattern",
    stateManagement: "KSP Reactive State",
    tags: ["KMP", "Compose", "Firebase"],
    metrics: { logic: "Shared 85%", stability: "99.9%", latency: "< 200ms" },
    icon: Layers,
    color: "from-blue-500/20 to-indigo-500/20"
  },
  {
    title: "BNKHUB Ecosystem",
    category: "BANKING CORE",
    desc: "Optimized banking platform achieving 98% crash-free sessions in low-connectivity.",
    longDesc: "A comprehensive banking solution built with a strict offline-first philosophy. By leveraging Room DB and a custom reactive repository pattern, the app maintains full transactional capability even in zero-connectivity environments. I optimized heavy database operations to run on background coroutines, ensuring the main thread remains responsive during complex ledger reconciliations. Achieved a steady 98% crash-free session rate through rigorous error handling and state persistence.",
    features: ["Offline-first Repository Pattern", "Complex Ledger Reconciliations", "Background Coroutine Syncing", "State Persistence Engine"],
    architecture: "MVVM + Clean Architecture",
    stateManagement: "LiveData & Flow",
    tags: ["Kotlin", "MVVM", "Retrofit", "Room"],
    metrics: { logic: "Native", stability: "98% High", latency: "Fast" },
    icon: Smartphone,
    color: "from-amber-500/20 to-orange-500/20"
  },
  {
    title: "Trade App",
    category: "FINTECH KMP",
    desc: "High-frequency trading interface leveraging shared KMP business logic.",
    longDesc: "This project focused on reducing time-to-market by sharing the entire business logic layer between Android and iOS using KMP. The app processes high-frequency market data streams and utilizes complex state machines for real-time portfolio evaluations. I implemented an optimized Flow-based data pipeline that filters and aggregates market signals before they hit the UI, ensuring smooth rendering even during peak market volatility.",
    features: ["High-frequency Data Pipelines", "Shared State-Machine Logic", "Real-time Portfolio Tracking", "Reactive UI Binding"],
    architecture: "Unidirectional Data Flow (UDF)",
    stateManagement: "KMP Shared State Machines",
    tags: ["KMP", "Coroutines", "Compose"],
    metrics: { logic: "Shared 90%", stability: "91%", latency: "< 50ms" },
    icon: Cpu,
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Gym Flow",
    category: "FULL STACK",
    desc: "End-to-end management system with powerful administrative analytics.",
    longDesc: "A full-stack ecosystem bridging mobile convenience with administrative power. I developed a comprehensive backend using NestJS and PostgreSQL to handle complex membership lifecycle tracking and automated billing cycles. The mobile client, built with Flutter, provides members with a seamless workout tracking and payment experience, while the web dashboard gives gym owners real-time business intelligence and revenue analytics.",
    features: ["Automated Subscription Billing", "RESTful API Architecture", "Real-time Business Dashboard", "Membership Lifecycle Tracking"],
    architecture: "Backend: Microservices | Frontend: BLoC",
    stateManagement: "BLoC (Business Logic Component)",
    tags: ["Next.js", "PostgreSQL", "NestJS", "Flutter"],
    metrics: { logic: "Full Stack", stability: "High", latency: "Stable" },
    icon: Database,
    color: "from-indigo-500/20 to-blue-500/20"
  },
  {
    title: "Smart Track",
    category: "IOT / MOBILE",
    desc: "Geofence-based attendance tracking with biometric face verification.",
    longDesc: "A security-first attendance solution designed for remote workforce management. I integrated precise GPS geofencing with on-device face verification to eliminate 'buddy punching' and fraudulent check-ins. The system features a real-time sync engine that handles intermittent connectivity by batching attendance logs locally and synchronizing them once a stable connection is established. This project highlights the intersection of mobile mobility and strict security requirements.",
    features: ["GPS Geofencing Algorithms", "On-device Biometric Verification", "Batch Sync Engine", "Remote Workforce Analytics"],
    architecture: "Layered Architecture",
    stateManagement: "Provider + ChangeNotifier",
    tags: ["Flutter", "Node.js", "MongoDB", "GPS"],
    metrics: { logic: "Geofence", stability: "Stable", latency: "Realtime" },
    icon: Smartphone,
    color: "from-orange-500/20 to-red-500/20"
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectData>(projects[0])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="projects" className="py-24 bg-background overflow-hidden border-t border-foreground/5">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-left mb-20 max-w-2xl space-y-4">
          <div className="inline-block px-4 py-1 bg-accent/10 border border-accent/20 rounded-full text-[10px] font-black tracking-[0.3em] uppercase text-accent mb-4">
            Masterpiece Archive
          </div>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter"
          >
            Project <span className="premium-gradient">Ecosystem.</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Master List */}
          <div className="w-full lg:w-[45%] flex flex-col gap-4">
            {projects.map((project) => (
              <React.Fragment key={project.title}>
                <ProjectListItem 
                  project={project} 
                  isActive={selectedProject.title === project.title}
                  onClick={() => setSelectedProject(project)} 
                />
                <AnimatePresence>
                  {selectedProject.title === project.title && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="lg:hidden overflow-hidden"
                    >
                      <div className="pb-4">
                        <ProjectArtifact project={project} isMobile />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </React.Fragment>
            ))}
          </div>

          {/* Desktop Detail Side-Car */}
          <div className="hidden lg:block w-full lg:w-[55%] lg:sticky lg:top-32 h-fit">
            <AnimatePresence mode="wait">
                <ProjectArtifact 
                  key={selectedProject.title}
                  project={selectedProject} 
                />
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  )
}

function ProjectListItem({ project, isActive, onClick }: { project: ProjectData; isActive: boolean; onClick: () => void }) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ x: 10 }}
      className={`group relative p-6 rounded-3xl border cursor-pointer transition-all duration-300 overflow-hidden ${
        isActive 
          ? "glass-heavy border-accent/50 bg-accent/5 shadow-2xl" 
          : "glass border-white/5 hover:border-white/10"
      }`}
    >
      <div className="flex items-center space-x-6 relative z-20">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
            isActive ? "bg-accent text-background scale-110 shadow-lg shadow-accent/20" : "glass bg-accent/5 text-accent"
        }`}>
            <project.icon size={26} />
        </div>
        <div className="flex-1 space-y-1">
            <div className="flex justify-between items-center">
                <span className={`text-[9px] font-black uppercase tracking-widest transition-colors ${
                    isActive ? "text-accent" : "text-secondary/40"
                }`}>
                    {project.category}
                </span>
                {isActive && <motion.div layoutId="active-indicator" className="w-1.5 h-1.5 rounded-full bg-accent" />}
            </div>
            <h3 className={`text-xl font-black tracking-tight transition-colors ${
                isActive ? "text-foreground" : "text-secondary group-hover:text-foreground"
            }`}>
                {project.title}
            </h3>
        </div>
      </div>
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-accent/5 to-transparent pointer-events-none ${
        isActive ? "opacity-100" : ""
      }`} />
    </motion.div>
  )
}

function ProjectArtifact({ project, isMobile }: { project: ProjectData; isMobile?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: isMobile ? -10 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: isMobile ? -10 : -20, position: isMobile ? "relative" : "absolute" }}
      transition={{ duration: 0.2 }}
      className={`glass-heavy overflow-hidden shadow-3xl relative ${
        isMobile ? "rounded-[32px] p-6 space-y-8 mt-2" : "rounded-[48px] p-10 md:p-14 space-y-10"
      }`}
    >
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="space-y-6 relative z-10">
        <div className="space-y-2">
            <div className="text-xs font-black uppercase tracking-[0.3em] text-accent">{project.category}</div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">{project.title}</h2>
        </div>
        
        <div className="space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-secondary/40">Strategic Narrative</h4>
            <p className="text-xl text-secondary/80 font-medium leading-relaxed max-w-xl">
                {project.longDesc}
            </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(project.metrics).map(([key, val]) => (
            <div key={key} className="p-6 glass rounded-3xl border border-white/5 space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-secondary/40 whitespace-nowrap">{key}</span>
                <p className="text-lg font-black text-foreground">{val as string}</p>
            </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border-t border-white/5 pt-10">
        <div className="space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-secondary/40 flex items-center">
                <Layers size={14} className="mr-2 text-accent" />
                Architecture
            </h4>
            <p className="text-sm font-black text-foreground/90">{project.architecture}</p>
        </div>

        <div className="space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-secondary/40 flex items-center">
                <Zap size={14} className="mr-2 text-accent" />
                State Management
            </h4>
            <p className="text-sm font-black text-foreground/90">{project.stateManagement}</p>
        </div>

        <div className="space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-secondary/40 flex items-center">
                <Cpu size={14} className="mr-2 text-accent" />
                Technical Stack
            </h4>
            <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 glass text-[9px] font-black uppercase tracking-widest border border-white/5 rounded-lg text-accent/80">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
      </div>

      <div className="space-y-6 pt-4">
        <h4 className="text-[10px] font-black uppercase tracking-widest text-secondary/40 flex items-center">
            <ChevronRight size={14} className="mr-2 text-accent" />
            Core Innovations
        </h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
            {project.features.map((feature) => (
                <li key={feature} className="text-sm font-medium text-secondary/70 flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/40 mr-3 shrink-0" />
                    {feature}
                </li>
            ))}
        </ul>
      </div>
    </motion.div>
  )
}
