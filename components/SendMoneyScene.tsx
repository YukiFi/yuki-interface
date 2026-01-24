"use client";

import { useRef, useMemo, useState, useEffect, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const COLORS = {
  node: "#ffffff",
  nodeEmphasis: "#e1a8f0",
  pulse: "#e1a8f0",
  line: "#ffffff",
} as const;

const NODE_POSITIONS: Record<string, [number, number, number]> = {
  you: [0, 0, 0],
  chelle: [-1.6, 1.1, 0.2],
  jay: [-0.4, 1.5, -0.1],
  mina: [1.0, 1.3, 0.1],
  worker: [1.8, 0.4, -0.2],
};

function createCurve(from: [number, number, number], to: [number, number, number]): THREE.CatmullRomCurve3 {
  const midY = (from[1] + to[1]) / 2 + 0.3;
  const midZ = (from[2] + to[2]) / 2 + 0.2;
  return new THREE.CatmullRomCurve3([
    new THREE.Vector3(...from),
    new THREE.Vector3((from[0] + to[0]) / 2, midY, midZ),
    new THREE.Vector3(...to),
  ]);
}

function NetworkNode({ position, isCenter = false }: { position: [number, number, number]; isCenter?: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const baseY = position[1];

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = baseY + Math.sin(state.clock.elapsedTime * 0.6 + position[0] * 2) * 0.02;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[isCenter ? 0.06 : 0.04, 16, 16]} />
      <meshBasicMaterial 
        color={isCenter ? COLORS.nodeEmphasis : COLORS.node} 
        transparent 
        opacity={isCenter ? 1 : 0.6} 
      />
    </mesh>
  );
}

function ConnectionLine({ curve }: { curve: THREE.CatmullRomCurve3 }) {
  const geometry = useMemo(() => {
    const points = curve.getPoints(24);
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [curve]);

  return (
    <line geometry={geometry}>
      <lineBasicMaterial color={COLORS.line} transparent opacity={0.06} />
    </line>
  );
}

interface PulseData {
  id: number;
  curve: THREE.CatmullRomCurve3;
  startTime: number;
}

function Pulse({ curve, startTime, duration = 0.7, onComplete }: { 
  curve: THREE.CatmullRomCurve3; 
  startTime: number; 
  duration?: number; 
  onComplete: () => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const completedRef = useRef(false);

  useFrame((state) => {
    if (completedRef.current || !meshRef.current) return;

    const elapsed = state.clock.elapsedTime - startTime;
    const t = Math.min(elapsed / duration, 1);

    if (t >= 1) {
      completedRef.current = true;
      onComplete();
      return;
    }

    const position = curve.getPointAt(t);
    meshRef.current.position.copy(position);
    
    const scale = 1 - Math.abs(t - 0.5) * 0.4;
    meshRef.current.scale.setScalar(scale);
  });

  if (completedRef.current) return null;

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.025, 8, 8]} />
      <meshBasicMaterial color={COLORS.pulse} transparent opacity={0.9} />
    </mesh>
  );
}

function CameraController({ isMobile }: { isMobile: boolean }) {
  const { camera } = useThree();
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current.x = (e.clientX / window.innerWidth - 0.5) * 0.15;
      targetRef.current.y = (e.clientY / window.innerHeight - 0.5) * 0.1;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  useFrame(() => {
    if (isMobile) {
      camera.lookAt(0, 0.5, 0);
      return;
    }
    camera.position.x += (targetRef.current.x - camera.position.x) * 0.02;
    camera.position.y += (targetRef.current.y + 0.5 - camera.position.y) * 0.02;
    camera.lookAt(0, 0.5, 0);
  });

  return null;
}

function Scene({ reducedMotion, isMobile }: { reducedMotion: boolean; isMobile: boolean }) {
  const [pulses, setPulses] = useState<PulseData[]>([]);
  const eventIndexRef = useRef(0);
  const lastEventRef = useRef(0);
  const pulseIdRef = useRef(0);

  const curves = useMemo(() => ({
    youToChelle: createCurve(NODE_POSITIONS.you, NODE_POSITIONS.chelle),
    youToJay: createCurve(NODE_POSITIONS.you, NODE_POSITIONS.jay),
    youToMina: createCurve(NODE_POSITIONS.you, NODE_POSITIONS.mina),
    youToWorker: createCurve(NODE_POSITIONS.you, NODE_POSITIONS.worker),
    chelleToYou: createCurve(NODE_POSITIONS.chelle, NODE_POSITIONS.you),
  }), []);

  const connectionCurves = useMemo(() => [
    curves.youToChelle,
    curves.youToJay,
    curves.youToMina,
    curves.youToWorker,
  ], [curves]);

  const removePulse = useCallback((id: number) => {
    setPulses(prev => prev.filter(p => p.id !== id));
  }, []);

  useFrame((state) => {
    if (reducedMotion) return;

    const now = state.clock.elapsedTime;
    if (now - lastEventRef.current < 2.8) return;
    lastEventRef.current = now;

    const event = eventIndexRef.current % 3;
    eventIndexRef.current++;

    const newPulses: PulseData[] = [];
    const getId = () => pulseIdRef.current++;

    if (event === 0) {
      newPulses.push(
        { id: getId(), curve: curves.youToChelle, startTime: now },
        { id: getId(), curve: curves.youToJay, startTime: now + 0.04 },
        { id: getId(), curve: curves.youToMina, startTime: now + 0.08 }
      );
    } else if (event === 1) {
      newPulses.push({ id: getId(), curve: curves.youToWorker, startTime: now });
    } else {
      newPulses.push({ id: getId(), curve: curves.chelleToYou, startTime: now });
    }

    setPulses(prev => [...prev, ...newPulses]);
  });

  return (
    <>
      <CameraController isMobile={isMobile} />
      
      {connectionCurves.map((curve, i) => (
        <ConnectionLine key={i} curve={curve} />
      ))}
      <ConnectionLine curve={curves.chelleToYou} />

      <NetworkNode position={NODE_POSITIONS.you} isCenter />
      <NetworkNode position={NODE_POSITIONS.chelle} />
      <NetworkNode position={NODE_POSITIONS.jay} />
      <NetworkNode position={NODE_POSITIONS.mina} />
      <NetworkNode position={NODE_POSITIONS.worker} />

      {pulses.map(pulse => (
        <Pulse
          key={pulse.id}
          curve={pulse.curve}
          startTime={pulse.startTime}
          onComplete={() => removePulse(pulse.id)}
        />
      ))}
    </>
  );
}

export default function SendMoneyScene() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(motionQuery.matches);
    const motionHandler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    motionQuery.addEventListener("change", motionHandler);

    const mobileQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mobileQuery.matches);
    const mobileHandler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mobileQuery.addEventListener("change", mobileHandler);

    return () => {
      motionQuery.removeEventListener("change", motionHandler);
      mobileQuery.removeEventListener("change", mobileHandler);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <Canvas
        camera={{ position: [0, 0.5, isMobile ? 4 : 3.5], fov: isMobile ? 36 : 32 }}
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <Scene reducedMotion={reducedMotion} isMobile={isMobile} />
      </Canvas>

      {/* Labels - responsive positioning */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <span className="absolute left-1/2 bottom-[34%] sm:bottom-[36%] -translate-x-1/2 text-[8px] sm:text-[9px] text-white/50 font-medium tracking-wider uppercase">
          You
        </span>
        <span className="absolute left-[16%] sm:left-[20%] top-[22%] sm:top-[24%] text-[8px] sm:text-[9px] text-white/30 tracking-wide">
          Chelle
        </span>
        <span className="absolute left-[40%] sm:left-[42%] top-[12%] sm:top-[14%] text-[8px] sm:text-[9px] text-white/30 tracking-wide">
          Jay
        </span>
        <span className="absolute right-[28%] sm:right-[30%] top-[16%] sm:top-[18%] text-[8px] sm:text-[9px] text-white/30 tracking-wide">
          Mina
        </span>
        <span className="absolute right-[10%] sm:right-[14%] top-[36%] sm:top-[38%] text-[8px] sm:text-[9px] text-white/30 tracking-wide">
          Worker
        </span>
      </div>
    </div>
  );
}
