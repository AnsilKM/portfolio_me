"use client"

import React, { useEffect, useState } from "react"
import { motion, useSpring } from "framer-motion"

export default function Cursor() {
  const [mounted, setMounted] = useState(false)
  
  const mouseX = useSpring(0, { stiffness: 800, damping: 40, mass: 0.5 })
  const mouseY = useSpring(0, { stiffness: 800, damping: 40, mass: 0.5 })
  
  const dotX = useSpring(0, { stiffness: 1500, damping: 60 })
  const dotY = useSpring(0, { stiffness: 1500, damping: 60 })

  useEffect(() => {
    setMounted(true)
    
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16)
      mouseY.set(e.clientY - 16)
      dotX.set(e.clientX - 4)
      dotY.set(e.clientY - 4)
    }

    window.addEventListener("mousemove", moveMouse)
    return () => window.removeEventListener("mousemove", moveMouse)
  }, [mouseX, mouseY, dotX, dotY])

  if (!mounted) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent/30 pointer-events-none z-[100] hidden md:block"
        style={{
          x: mouseX,
          y: mouseY,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[100] hidden md:block"
        style={{
          x: dotX,
          y: dotY,
        }}
      />
    </>
  )
}
