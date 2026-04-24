"use client"

import React, { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshTransmissionMaterial, Sphere, Stars, Environment, ContactShadows, Preload } from "@react-three/drei"
import * as THREE from "three"
import { useTheme } from "next-themes"

function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = React.useState(false)
  const elapsedTime = useRef(0)

  useFrame((state, delta) => {
    elapsedTime.current += delta
    const time = elapsedTime.current
    const { x, y } = state.mouse
    
    if (sphereRef.current) {
      sphereRef.current.rotation.x = time * 0.3
      sphereRef.current.rotation.y = time * 0.45
      sphereRef.current.position.x = THREE.MathUtils.lerp(sphereRef.current.position.x, x * 1.5, 0.05)
      sphereRef.current.position.y = THREE.MathUtils.lerp(sphereRef.current.position.y, y * 1.5, 0.05)
    }
  })

  return (
    <Float speed={4} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere 
        ref={sphereRef} 
        args={[1, 32, 32]} 
        scale={2.2}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshTransmissionMaterial
          backside
          samples={2}
          thickness={0.5}
          chromaticAberration={0.01}
          anisotropy={0.1}
          distortion={0.1}
          distortionScale={0.1}
          temporalDistortion={0.1}
          color={hovered ? "#34d399" : "#10b981"}
          attenuationDistance={0.5}
          attenuationColor="#ffffff"
        />
      </Sphere>
    </Float>
  )
}

function CodeBlocks() {
  const groupRef = useRef<THREE.Group>(null)
  const elapsedTime = useRef(0)
  
  const blocks = React.useMemo(() => {
    return [...Array(25)].map(() => ({
      position: [
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10 - 5
      ] as [number, number, number],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number],
    }))
  }, [])

  useFrame((state, delta) => {
    elapsedTime.current += delta
    const time = elapsedTime.current
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      {blocks.map((block, i) => (
        <mesh 
          key={i}
          position={block.position}
          rotation={block.rotation}
        >
          <boxGeometry args={[0.15, 0.15, 0.15]} />
          <meshStandardMaterial 
            color={i % 2 === 0 ? "#10b981" : "#3b82f6"} 
            roughness={0.5} 
            metalness={0.8} 
            transparent 
            opacity={0.4} 
          />
        </mesh>
      ))}
    </group>
  )
}

function BackgroundScene() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isLowPower, setIsLowPower] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleResize = () => {
      // Check if mobile OR low-power
      setIsLowPower(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (!mounted || isLowPower) {
    return (
        <div className="absolute inset-0 -z-10 bg-grid opacity-20 pointer-events-none" />
    )
  }

  const isDark = resolvedTheme === "dark"
  const fogColor = isDark ? "#020617" : "#ffffff"

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none opacity-60 dark:opacity-80 transition-opacity duration-1000">
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 45 }} 
        dpr={[1, 1.5]}
        shadows={false}
        gl={{ 
            antialias: false, 
            depth: true,
            stencil: false,
            powerPreference: "high-performance" 
        }}
      >
        <ambientLight intensity={isDark ? 0.6 : 0.4} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={isDark ? 200 : 50} 
          color="#10b981" 
        />
        <pointLight 
          position={[-10, -10, -10]} 
          color="#3b82f6" 
          intensity={isDark ? 100 : 30} 
        />
        <fog attach="fog" args={[fogColor, 15, 30]} />
        <Environment preset="night" />
        <AnimatedSphere />
        <CodeBlocks />
        <Stars radius={100} depth={50} count={400} factor={4} saturation={0} fade speed={2} />
        <Preload all />
      </Canvas>
    </div>
  )
}

export default React.memo(BackgroundScene)
