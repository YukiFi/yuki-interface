"use client";
import React, { Suspense, useRef, useMemo, useEffect, useState, memo } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { 
  MeshTransmissionMaterial, 
  Float,
  Sphere,
  Preload
} from "@react-three/drei";
import * as THREE from "three";
import { useWaitlist } from "@/context/WaitlistContext";
import { Button } from "@/components/ui/button";

// Optimized geometry with reduced polygon count
const LivingBalanceGeometry = memo(() => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();
  
  const targetRotation = useRef({ x: 0, y: 0 });
  const currentRotation = useRef({ x: 0, y: 0 });
  
  // OPTIMIZED: Reduced segments from 256,64 to 128,32 - still smooth but 75% fewer polygons
  const geometry = useMemo(() => {
    const geo = new THREE.TorusKnotGeometry(1, 0.35, 128, 32, 2, 3);
    geo.computeVertexNormals();
    return geo;
  }, []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    const breathe = Math.sin(state.clock.elapsedTime * 0.5) * 0.02 + 1;
    meshRef.current.scale.setScalar(breathe);
    
    meshRef.current.rotation.y += delta * 0.08;
    meshRef.current.rotation.z += delta * 0.03;
    
    targetRotation.current.x = pointer.y * 0.3;
    targetRotation.current.y = pointer.x * 0.4;
    
    currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * 0.02;
    currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * 0.02;
    
    meshRef.current.rotation.x = currentRotation.current.x;
    meshRef.current.rotation.y += currentRotation.current.y * delta;
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      {/* OPTIMIZED: Reduced samples from 16 to 6, resolution from 512 to 256 */}
      <MeshTransmissionMaterial
        backside
        samples={6}
        resolution={256}
        transmission={0.92}
        roughness={0.05}
        thickness={0.5}
        ior={1.5}
        chromaticAberration={0.04}
        anisotropy={0.2}
        distortion={0.08}
        distortionScale={0.15}
        temporalDistortion={0.05}
        clearcoat={1}
        attenuationDistance={0.5}
        attenuationColor="#edc4f5"
        color="#ffffff"
      />
    </mesh>
  );
});

LivingBalanceGeometry.displayName = 'LivingBalanceGeometry';

// OPTIMIZED: Reduced sphere segments
const InnerCore = memo(() => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    const pulse = Math.sin(state.clock.elapsedTime * 0.8) * 0.3 + 0.7;
    (meshRef.current.material as THREE.MeshBasicMaterial).opacity = pulse * 0.4;
  });

  return (
    <Sphere ref={meshRef} args={[0.3, 16, 16]}>
      <meshBasicMaterial color="#e1a8f0" transparent opacity={0.4} />
    </Sphere>
  );
});

InnerCore.displayName = 'InnerCore';

// OPTIMIZED: Reduced torus segments
const LightRing = memo(({ radius, speed, delay }: { radius: number; speed: number; delay: number }) => {
  const ringRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!ringRef.current) return;
    ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed + delay) * 0.2;
    ringRef.current.rotation.y = state.clock.elapsedTime * speed * 0.5;
    
    const opacity = Math.sin(state.clock.elapsedTime * 0.3 + delay) * 0.15 + 0.25;
    (ringRef.current.material as THREE.MeshBasicMaterial).opacity = opacity;
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[radius, 0.008, 8, 48]} />
      <meshBasicMaterial color="#e1a8f0" transparent opacity={0.3} />
    </mesh>
  );
});

LightRing.displayName = 'LightRing';

// The complete 3D scene - simplified without scroll tracking for performance
const LivingBalanceScene = memo(() => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!groupRef.current) return;
    // Simple gentle animation instead of scroll-based
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
  });

  return (
    <group ref={groupRef}>
      <Float speed={0.8} rotationIntensity={0.08} floatIntensity={0.2}>
        <LivingBalanceGeometry />
        <InnerCore />
      </Float>
      
      <LightRing radius={1.8} speed={0.2} delay={0} />
      <LightRing radius={2.2} speed={0.15} delay={1} />
    </group>
  );
});

LivingBalanceScene.displayName = 'LivingBalanceScene';

// OPTIMIZED: Simplified camera rig
const CameraRig = memo(() => {
  const { camera, pointer } = useThree();
  const targetPosition = useRef({ x: 0, y: 0 });
  
  useFrame(() => {
    targetPosition.current.x = pointer.x * 0.2;
    targetPosition.current.y = pointer.y * 0.15;
    
    camera.position.x += (targetPosition.current.x - camera.position.x) * 0.015;
    camera.position.y += (targetPosition.current.y - camera.position.y) * 0.015;
    camera.lookAt(0, 0, 0);
  });

  return null;
});

CameraRig.displayName = 'CameraRig';

export default function Hero() {
  const { openWaitlist } = useWaitlist();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [sceneReady, setSceneReady] = useState(false);

  // Entry animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSceneCreated = () => {
    setTimeout(() => setSceneReady(true), 100);
  };

  return (
    <section 
      ref={containerRef}
      className="relative h-[100vh] bg-[#050506] overflow-hidden"
    >
      {/* 3D Canvas - OPTIMIZED: reduced DPR, added performance settings */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          opacity: sceneReady ? 1 : 0,
          transition: 'opacity 0.8s ease-out',
        }}
      >
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ 
            antialias: false,
            alpha: true,
            powerPreference: "high-performance",
            stencil: false,
            depth: true
          }}
          onCreated={handleSceneCreated}
          performance={{ min: 0.5 }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.15} />
            <directionalLight 
              position={[5, 5, 5]} 
              intensity={0.8} 
              color="#ffffff"
            />
            <directionalLight 
              position={[-3, -2, -2]} 
              intensity={0.25} 
              color="#ffffff"
            />
            <pointLight 
              position={[-4, 0, -3]} 
              intensity={2} 
              color="#e1a8f0"
              distance={10}
            />
            
            <LivingBalanceScene />
            <CameraRig />
            <Preload all />
          </Suspense>
        </Canvas>
      </div>

      {/* Atmospheric overlay - simplified single layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050506]/80 via-[#050506]/50 to-transparent z-10 pointer-events-none" />

      {/* Content - OPTIMIZED: removed scroll-based transforms */}
      <div className="relative z-20 h-full flex items-center">
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

            {/* CTA Buttons - OPTIMIZED: removed backdrop-blur */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg"
                onClick={openWaitlist}
                className="bg-brand/90 hover:bg-brand text-brand-900 px-8 py-6 text-base transition-colors duration-200"
              >
                Join the Waitlist
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="text-zinc-300 bg-white/[0.05] hover:bg-white/[0.08] px-8 py-6 text-base transition-colors duration-200"
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll hint - CSS animation instead of Framer Motion */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 transition-opacity duration-1000 ${isLoaded ? 'opacity-30' : 'opacity-0'}`}
        style={{ transitionDelay: '2s' }}
      >
        <div className="animate-bounce">
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
        </div>
      </div>
    </section>
  );
}
