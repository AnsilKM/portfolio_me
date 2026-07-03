"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function SpotlightBackground() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; char: string; left: number; size: number; delay: number; duration: number }>>([]);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 200, mass: 1 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    
    // Generate stable random particle locations on mount
    const pool = ["{}", "</>", "val", "fun", "[]", "Kotlin", "Flutter", "KMP", "Compose", "async", "ktor", "io"];
    const generated = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      char: pool[i % pool.length],
      left: Math.random() * 90 + 5, // random left offset percentage
      size: Math.random() * 8 + 10,   // random size (10px to 18px)
      delay: Math.random() * -20,     // start immediately at negative delay so they are pre-spread out
      duration: Math.random() * 20 + 25 // speed (25s to 45s)
    }));
    setParticles(generated);

    const handleMouseMove = (e: MouseEvent) => {
      // Offset values by half the glow width/height (225px) to center it
      mouseX.set(e.clientX - 225);
      mouseY.set(e.clientY - 225);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
      {/* Blueprint Grid Layer */}
      <div 
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--bg-grid-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--bg-grid-color) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />
      
      {/* Subtle Dot Matrix Accent */}
      <div 
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          backgroundImage: `radial-gradient(var(--bg-dot-color) 1px, transparent 1px)`,
          backgroundSize: "22px 22px",
        }}
      />

      {/* Floating Ambient Code Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-15">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ y: "105vh", x: `${p.left}vw`, opacity: 0 }}
            animate={{
              y: "-10vh",
              opacity: [0, 0.4, 0.4, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              fontSize: p.size,
              fontFamily: "monospace",
              color: "var(--accent)",
              fontWeight: 600,
            }}
          >
            {p.char}
          </motion.div>
        ))}
      </div>

      {/* Floating Mouse Glow Spotlight */}
      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full"
        style={{
          left: glowX,
          top: glowY,
          background: "var(--spotlight-glow)",
        }}
      />
    </div>
  );
}
