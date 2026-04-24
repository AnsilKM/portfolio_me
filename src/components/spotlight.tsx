"use client"

import React, { useState, useEffect } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

export default function Spotlight() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Use springs to smooth the mouse movement
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 })

  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth >= 768) {
          mouseX.set(e.clientX)
          mouseY.set(e.clientY)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
        window.removeEventListener("resize", handleResize)
        window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mouseX, mouseY])

  if (!mounted || isMobile) return null

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at var(--x, 0px) var(--y, 0px), rgba(16, 185, 129, 0.08), transparent 80%)`,
        opacity: 0.5,
      } as any}
      animate={{
        "--x": `${springX.get()}px`,
        "--y": `${springY.get()}px`,
      } as any}
    />
  )
}
