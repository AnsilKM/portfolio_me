"use client"

import React from "react"
import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Phone, ArrowUpRight } from "lucide-react"
import Magnetic from "./magnetic"

export default function Contact() {
  const actions = [
    {
      href: "mailto:muhammedansil094@gmail.com",
      icon: Mail,
      label: "Email",
      accent: "emerald"
    },
    {
      href: "tel:+918086743223",
      icon: Phone,
      label: "Phone",
      accent: "blue"
    },
    {
      href: "https://linkedin.com/in/muhammed-ansil-810212269",
      icon: Linkedin,
      label: "LinkedIn",
      accent: "indigo",
      external: true
    },
    {
      href: "https://github.com/AnsilKrm",
      icon: Github,
      label: "GitHub",
      accent: "purple",
      external: true
    }
  ]

  return (
    <section id="contact" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4">
        
        {/* Header Block */}
        <div className="text-center space-y-8 mb-20">
           <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 glass border border-accent/20 rounded-full text-[10px] font-black tracking-[0.4em] uppercase text-accent"
            >
              Secure Channel
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-black tracking-tighter leading-none"
            >
              LET&apos;S <span className="premium-gradient">CONNECT.</span>
            </motion.h2>
        </div>

        {/* Action Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
           {actions.map((action, index) => (
             <motion.div
               key={action.label}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
             >
               <Magnetic>
                 <a 
                   href={action.href}
                   target={action.external ? "_blank" : undefined}
                   className="group flex flex-col items-center justify-center p-8 md:p-12 glass rounded-[32px] md:rounded-[48px] border border-white/5 hover:border-accent/30 transition-all hover:bg-white/5 shadow-2xl relative overflow-hidden text-center aspect-square"
                 >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    
                    <div className="space-y-6 relative z-10 flex flex-col items-center">
                       <div className="w-16 h-16 md:w-20 md:h-20 rounded-[24px] md:rounded-[32px] glass bg-accent/5 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-background transition-all shadow-xl">
                          <action.icon size={28} className="md:w-8 md:h-8" />
                       </div>
                       <div className="text-xs md:text-sm font-black uppercase tracking-[0.4em] text-secondary/40 group-hover:text-accent transition-colors">
                          {action.label}
                       </div>
                    </div>

                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-40 transition-all">
                       <ArrowUpRight size={18} className="text-accent" />
                    </div>
                 </a>
               </Magnetic>
             </motion.div>
           ))}
        </div>

      </div>
    </section>
  )
}
