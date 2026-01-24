"use client";
import React, { Suspense, useRef, useMemo, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { 
  MeshTransmissionMaterial, 
  Environment,
  Float,
  Sphere
} from "@react-three/drei";
import * as THREE from "three";
import { useWaitlist } from "@/context/WaitlistContext";
import { Button } from "@/components/ui/button";

// Custom shader for the living balance material
const LivingBalanceGeometry = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();
  
  // Mouse influence with spring physics
  const targetRotation = useRef({ x: 0, y: 0 });
  const currentRotation = useRef({ x: 0, y: 0 });
  
  // Create custom geometry - a smooth, organic torus knot
  const geometry = useMemo(() => {
    const geo = new THREE.TorusKnotGeometry(1, 0.35, 256, 64, 2, 3);
    geo.computeVertexNormals();
    return geo;
  }, []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    // Breathing animation - gentle scale pulse
    const breathe = Math.sin(state.clock.elapsedTime * 0.5) * 0.02 + 1;
    meshRef.current.scale.setScalar(breathe);
    
    // Slow continuous rotation
    meshRef.current.rotation.y += delta * 0.08;
    meshRef.current.rotation.z += delta * 0.03;
    
    // Mouse influence with spring damping
    targetRotation.current.x = pointer.y * 0.3;
    targetRotation.current.y = pointer.x * 0.4;
    
    currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * 0.02;
    currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * 0.02;
    
    meshRef.current.rotation.x = currentRotation.current.x;
    meshRef.current.rotation.y += currentRotation.current.y * delta;
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <MeshTransmissionMaterial
        backside
        samples={16}
        resolution={512}
        transmission={0.95}
        roughness={0.0}
        thickness={0.5}
        ior={1.5}
        chromaticAberration={0.06}
        anisotropy={0.3}
        distortion={0.1}
        distortionScale={0.2}
        temporalDistortion={0.1}
        clearcoat={1}
        attenuationDistance={0.5}
        attenuationColor="#edc4f5"
        color="#ffffff"
      />
    </mesh>
  );
};

// Inner glowing core
const InnerCore = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    // Pulsing glow intensity
    const pulse = Math.sin(state.clock.elapsedTime * 0.8) * 0.3 + 0.7;
    (meshRef.current.material as THREE.MeshBasicMaterial).opacity = pulse * 0.4;
  });

  return (
    <Sphere ref={meshRef} args={[0.3, 32, 32]}>
      <meshBasicMaterial color="#e1a8f0" transparent opacity={0.4} />
    </Sphere>
  );
};

// Ambient light rings
const LightRing = ({ radius, speed, delay }: { radius: number; speed: number; delay: number }) => {
  const ringRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!ringRef.current) return;
    ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed + delay) * 0.2;
    ringRef.current.rotation.y = state.clock.elapsedTime * speed * 0.5;
    
    // Breathing opacity
    const opacity = Math.sin(state.clock.elapsedTime * 0.3 + delay) * 0.15 + 0.25;
    (ringRef.current.material as THREE.MeshBasicMaterial).opacity = opacity;
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[radius, 0.008, 16, 100]} />
      <meshBasicMaterial color="#e1a8f0" transparent opacity={0.3} />
    </mesh>
  );
};

// The complete 3D scene
const LivingBalanceScene = ({ scrollProgress }: { scrollProgress: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (!groupRef.current) return;
    // Scroll-based evolution - unfold and rotate as user scrolls
    groupRef.current.rotation.x = scrollProgress * Math.PI * 0.3;
    groupRef.current.position.y = scrollProgress * -1;
    groupRef.current.scale.setScalar(1 + scrollProgress * 0.2);
  });

  return (
    <group ref={groupRef}>
      {/* Main sculptural form */}
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.3}>
        <LivingBalanceGeometry />
        <InnerCore />
      </Float>
      
      {/* Subtle orbital rings */}
      <LightRing radius={1.8} speed={0.2} delay={0} />
      <LightRing radius={2.2} speed={0.15} delay={1} />
      <LightRing radius={2.6} speed={0.1} delay={2} />
    </group>
  );
};

// Camera with subtle parallax
const CameraRig = () => {
  const { camera, pointer } = useThree();
  const targetPosition = useRef({ x: 0, y: 0 });
  
  useFrame(() => {
    targetPosition.current.x = pointer.x * 0.3;
    targetPosition.current.y = pointer.y * 0.2;
    
    camera.position.x += (targetPosition.current.x - camera.position.x) * 0.02;
    camera.position.y += (targetPosition.current.y - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });

  return null;
};

export default function Hero() {
  const { openWaitlist } = useWaitlist();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [sceneReady, setSceneReady] = useState(false);
  
  // Scroll progress for 3D evolution
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20
  });
  
  const [scrollValue, setScrollValue] = useState(0);
  
  useEffect(() => {
    return smoothScrollProgress.on("change", (v) => setScrollValue(v));
  }, [smoothScrollProgress]);

  // Entry animation - cinematic timing
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Handle 3D scene ready
  const handleSceneCreated = () => {
    // Small delay to ensure first frame is rendered
    setTimeout(() => setSceneReady(true), 100);
  };

  // Parallax for text elements
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[100vh] bg-[#050506] overflow-hidden"
    >
      {/* 3D Canvas - positioned right */}
      <div 
        className="absolute inset-0 z-0 transition-all duration-1000 ease-out"
        style={{
          opacity: sceneReady ? 1 : 0,
          filter: sceneReady ? 'blur(0px)' : 'blur(20px)',
          transform: sceneReady ? 'scale(1)' : 'scale(1.05)',
        }}
      >
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          dpr={[1, 2]}
          gl={{ 
            antialias: true, 
            alpha: true,
            powerPreference: "high-performance"
          }}
          onCreated={handleSceneCreated}
        >
          <Suspense fallback={null}>
            {/* Lighting setup */}
            <ambientLight intensity={0.1} />
            <directionalLight 
              position={[5, 5, 5]} 
              intensity={0.8} 
              color="#ffffff"
            />
            <directionalLight 
              position={[-3, -2, -2]} 
              intensity={0.2} 
              color="#ffffff"
            />
            {/* Accent rim light */}
            <pointLight 
              position={[-4, 0, -3]} 
              intensity={2} 
              color="#e1a8f0"
              distance={10}
            />
            <pointLight 
              position={[4, 2, -2]} 
              intensity={0.5} 
              color="#d17de6"
              distance={8}
            />
            
            {/* Environment for reflections */}
            <Environment preset="night" />
            
            {/* The living balance */}
            <LivingBalanceScene scrollProgress={scrollValue} />
            
            {/* Camera parallax */}
            <CameraRig />
          </Suspense>
        </Canvas>
      </div>

      {/* Atmospheric overlay for text legibility - subtle tonal shift, no hard gradients */}
      <div className="absolute inset-0 bg-[#050506]/70 z-10 pointer-events-none" style={{
        maskImage: "linear-gradient(to right, black 0%, black 50%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, black 0%, black 50%, transparent 100%)"
      }} />
      
      {/* Subtle vignette - atmospheric, not decorative */}
      <div className="absolute inset-0 z-10 pointer-events-none" style={{
        background: "radial-gradient(ellipse at center, transparent 0%, rgba(5, 5, 6, 0.4) 100%)"
      }} />

      {/* Content */}
      <motion.div 
        className="relative z-20 h-full flex items-center"
        style={{ y: textY, opacity: textOpacity }}
      >
        <div className="max-w-page mx-auto px-6 sm:px-12 lg:px-20 w-full">
          <div className="max-w-2xl">
            {/* Overline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-zinc-500">
                <span className="w-8 h-px bg-brand/60" />
                Introducing Yuki
              </span>
            </motion.div>

            {/* Headline - staggered word reveal */}
            <div className="overflow-hidden mb-8">
              <motion.h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight leading-[0.95]">
                <motion.span
                  className="block text-white"
                  initial={{ y: 120, opacity: 0 }}
                  animate={isLoaded ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  Your money,
                </motion.span>
                <motion.span
                  className="block text-brand-light italic"
                  initial={{ y: 120, opacity: 0 }}
                  animate={isLoaded ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  always working.
                </motion.span>
              </motion.h1>
            </div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={isLoaded ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg sm:text-xl text-zinc-400 max-w-lg mb-12 leading-relaxed"
            >
              The next generation money app. Earn yield while you spend, 
              send, and live. Non-custodial and transparent by design.
            </motion.p>

            {/* CTA Buttons - glassmorphic */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg"
                onClick={openWaitlist}
                className="bg-brand/90 hover:bg-brand text-brand-900 px-8 py-6 text-base backdrop-blur-sm transition-all duration-300 hover:brightness-105"
              >
                Join the Waitlist
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="text-zinc-300 bg-white/[0.03] hover:bg-white/[0.06] px-8 py-6 text-base backdrop-blur-sm transition-all duration-300 hover:brightness-105"
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll hint - minimal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 0.3 } : {}}
        transition={{ delay: 3, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none" 
            className="text-white/40"
          >
            <path 
              d="M10 14L4 8M10 14L16 8" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
