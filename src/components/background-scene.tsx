"use client"

import React, { useRef } from "react"
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
      sphereRef.current.position.x = THREE.MathUtils.lerp(sphereRef.current.position.x, x * 2, 0.05)
      sphereRef.current.position.y = THREE.MathUtils.lerp(sphereRef.current.position.y, y * 2, 0.05)
    }
  })

  return (
    <Float speed={4} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere 
        ref={sphereRef} 
        args={[1, 64, 64]} 
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
    return [...Array(40)].map(() => ({
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
      groupRef.current.rotation.y = time * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {blocks.map((block, i) => (
        <Float key={i} speed={3} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh 
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
        </Float>
      ))}
    </group>
  )
}

function BackgroundScene() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === "dark"
  const fogColor = isDark ? "#020617" : "#ffffff"

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none opacity-60 dark:opacity-80">
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 45 }} 
        dpr={[1, 1]}
        shadows={{ type: THREE.PCFShadowMap }}
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
        <ContactShadows 
          resolution={128} 
          scale={20} 
          blur={3} 
          opacity={0.2} 
          far={10} 
          color={isDark ? "#000000" : "#ffffff"} 
        />
        <AnimatedSphere />
        <CodeBlocks />
        <Stars radius={100} depth={50} count={800} factor={4} saturation={0} fade speed={3} />
        <Preload all />
      </Canvas>
    </div>
  )
}

export default React.memo(BackgroundScene)
