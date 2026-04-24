"use client"

import React, { useState, useEffect } from "react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { Sun, Moon, Menu, X, ArrowRight } from "lucide-react"
import Magnetic from "./magnetic"

export default function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => setMounted(true), [])

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
    setHidden(false)
  })

  if (!mounted) return null

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ]

  const isDark = resolvedTheme === "dark"

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-8 px-4 pointer-events-none"
    >
      <div className={`flex items-center justify-between w-full max-w-5xl px-8 py-4 rounded-full transition-all duration-500 border pointer-events-auto ${
        scrolled 
          ? "glass-heavy border-accent/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-2xl" 
          : "glass border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]"
      }`}>
        <Magnetic>
          <a href="#" className="group flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg overflow-hidden transition-transform group-hover:rotate-12 border border-white/10">
              <img src="/icon.png" alt="MA" className="w-full h-full object-cover" />
            </div>
            <div className="text-xl font-black tracking-tighter">
              MUHAMMED ANSIL<span className="text-accent">.</span>
            </div>
          </a>
        </Magnetic>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <Magnetic key={link.name}>
              <a
                href={link.href}
                className="text-[10px] font-black tracking-widest uppercase px-4 py-2 hover:text-accent transition-colors block"
              >
                {link.name}
              </a>
            </Magnetic>
          ))}
          <div className="w-px h-6 bg-accent/20 mx-4" />
          <Magnetic>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-3 rounded-full hover:bg-muted transition-all active:scale-90"
            >
              {isDark ? <Sun size={18} className="text-accent" /> : <Moon size={18} />}
            </button>
          </Magnetic>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-muted transition-colors"
          >
            {isDark ? <Sun size={20} className="text-accent" /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="absolute top-28 left-4 right-4 p-8 bg-background/95 backdrop-blur-2xl rounded-[32px] md:hidden border border-foreground/10 shadow-2xl pointer-events-auto"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-black tracking-tight hover:text-accent transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
