"use client"

import React, { useRef, useMemo } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Html, OrbitControls, CurveModifier, Line, Float as DreiFloat } from "@react-three/drei"
import * as THREE from "three"

const steps = [
  { 
    id: "01", 
    title: "Discovery", 
    desc: "Analyzing core business requirements and mapping high-integrity user flows.",
    icon: "🔍"
  },
  { 
    id: "02", 
    title: "Architecture", 
    desc: "Designing scalable MVVM systems and shared logic engines via KMP.", 
    icon: "🏗️"
  },
  { 
    id: "03", 
    title: "Development", 
    desc: "Crafting fluid native UIs with Jetpack Compose and high-performance Kotlin logic.", 
    icon: "⚡"
  },
  { 
    id: "04", 
    title: "Sovereignty", 
    desc: "Finalizing and shipping high-grade mobile architectures to production.", 
    icon: "🏛️"
  }
]

function Scene({ scrollProgress }: { scrollProgress: any }) {
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(-10, 5, 0),
      new THREE.Vector3(-2, 2, 5),
      new THREE.Vector3(5, -2, -5),
      new THREE.Vector3(10, -5, 0),
    ])
  }, [])

  const linePoints = useMemo(() => curve.getPoints(100), [curve])
  
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#10b981" />
      
      {/* 3D Path */}
      <Line
        points={linePoints}
        color="#10b981"
        lineWidth={2}
        transparent
        opacity={0.3}
      />

      {/* Dynamic Indicator along the path */}
      <MovingIndicator curve={curve} scrollProgress={scrollProgress} />

      {/* Floating Milestone Markers */}
      {steps.map((step, i) => {
        const point = curve.getPointAt(i / (steps.length - 1))
        return (
          <group key={step.id} position={point}>
             <Html distanceFactor={15}>
                <motion.div 
                   initial={{ opacity: 0, scale: 0.8 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   className="whitespace-nowrap flex flex-col items-center pointer-events-none"
                >
                   <div className="p-4 glass border border-white/20 rounded-2xl bg-black/40 backdrop-blur-xl shadow-2xl">
                      <div className="text-[10px] font-black uppercase tracking-widest text-accent mb-1">Phase {step.id}</div>
                      <div className="text-sm font-black text-white uppercase tracking-[0.2em]">{step.title}</div>
                   </div>
                   <div className="w-10 h-px bg-accent/40 mt-4 rotate-90" />
                </motion.div>
             </Html>
             
             {/* Glowing Milestone Sphere */}
             <DreiFloat speed={2} rotationIntensity={2} floatIntensity={1}>
                <mesh>
                   <sphereGeometry args={[0.2, 16, 16]} />
                   <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={2} toneMapped={false} />
                </mesh>
             </DreiFloat>
          </group>
        )
      })}
    </>
  )
}

function MovingIndicator({ curve, scrollProgress }: any) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
        const t = scrollProgress.get()
        const point = curve.getPointAt(Math.min(Math.max(t, 0), 0.99))
        meshRef.current.position.set(point.x, point.y, point.z)
    }
  })

  return (
    <mesh ref={meshRef}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={5} toneMapped={false} />
        <pointLight intensity={2} color="#10b981" distance={5} />
    </mesh>
  )
}

export default function Process() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-background">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* Header Block Overlay */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-center z-10 space-y-4">
           <div className="inline-block px-4 py-1 glass border border-accent/20 rounded-full text-[10px] font-black tracking-[0.4em] uppercase text-accent mb-4">
             Execution Protocol
           </div>
           <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">
             STRATEGIC <br /><span className="premium-gradient">PIPELINE.</span>
           </h2>
        </div>

        {/* High-Impact 3D Scene */}
        <div className="absolute inset-0 z-0">
           <Canvas 
              shadows={{ type: THREE.PCFShadowMap }} 
              camera={{ position: [0, 0, 15], fov: 45 }} 
              gl={{ antialias: true, alpha: true }}
           >
              <Scene scrollProgress={scrollYProgress} />
              <OrbitControls enableZoom={false} enablePan={false} />
           </Canvas>
        </div>

        {/* Narrative Side-HUDs (Dynamic based on scroll) */}
        <div className="absolute left-8 lg:left-24 top-1/2 -translate-y-1/2 z-20 hidden md:block max-w-sm">
           <div className="space-y-4 pt-20">
              {steps.map((step, i) => {
                 const opacity = useTransform(scrollYProgress, 
                   [i/4, i/4 + 0.1, (i+1)/4 - 0.1, (i+1)/4], 
                   [0, 1, 1, 0]
                 )
                 const x = useTransform(scrollYProgress, 
                   [i/4, i/4 + 0.1], 
                   [-20, 0]
                 )

                 return (
                   <motion.div key={step.id} style={{ opacity, x }} className="space-y-4 p-8 glass rounded-[32px] border border-accent/10">
                      <div className="w-12 h-12 rounded-2xl bg-accent text-background flex items-center justify-center text-2xl shadow-xl">
                         {step.icon}
                      </div>
                      <h3 className="text-2xl font-black tracking-tighter">{step.title}</h3>
                      <p className="text-secondary/70 text-sm font-medium leading-relaxed">{step.desc}</p>
                   </motion.div>
                 )
              })}
           </div>
        </div>

        {/* Mobile Detail Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-[10px] font-black uppercase tracking-widest text-secondary/40 flex items-center space-x-2">
           <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
           <span>Continuous Scroll for Pipeline Analysis</span>
        </div>

      </div>
    </section>
  )
}
