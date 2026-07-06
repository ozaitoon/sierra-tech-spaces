"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function TransformerCore() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = Math.sin(t * 0.22) * 0.14;
    groupRef.current.position.y = Math.sin(t * 0.6) * 0.08;
  });

  return (
    <group ref={groupRef} position={[0, 0.1, 0]}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2.6, 1.55, 1.15]} />
        <meshStandardMaterial color="#16191a" metalness={0.86} roughness={0.26} />
      </mesh>
      <mesh position={[0, 0.91, 0]} castShadow>
        <boxGeometry args={[2.85, 0.18, 1.32]} />
        <meshStandardMaterial color="#ff6a2a" emissive="#6b1c08" emissiveIntensity={0.22} metalness={0.35} roughness={0.35} />
      </mesh>
      {[-0.78, 0, 0.78].map((x) => (
        <group key={x} position={[x, 1.23, 0]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.18, 0.18, 0.46, 24]} />
            <meshStandardMaterial color="#2b3435" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0.28, 0]}>
            <torusGeometry args={[0.24, 0.025, 12, 40]} />
            <meshStandardMaterial color="#18d5c2" emissive="#075e56" emissiveIntensity={0.35} metalness={0.5} roughness={0.2} />
          </mesh>
        </group>
      ))}
      {[-1.08, -0.36, 0.36, 1.08].map((x) => (
        <mesh key={x} position={[x, 0.04, 0.62]} castShadow>
          <boxGeometry args={[0.08, 1.15, 0.08]} />
          <meshStandardMaterial color="#d2a15f" emissive="#3d220a" emissiveIntensity={0.18} metalness={0.75} roughness={0.28} />
        </mesh>
      ))}
    </group>
  );
}

function Pylon({ x, z, scale = 1 }: { x: number; z: number; scale?: number }) {
  return (
    <group position={[x, -0.18, z]} scale={scale}>
      <mesh rotation={[0, 0, -0.18]} position={[-0.32, 0.58, 0]}>
        <boxGeometry args={[0.08, 1.8, 0.08]} />
        <meshStandardMaterial color="#9da4a6" metalness={0.6} roughness={0.36} />
      </mesh>
      <mesh rotation={[0, 0, 0.18]} position={[0.32, 0.58, 0]}>
        <boxGeometry args={[0.08, 1.8, 0.08]} />
        <meshStandardMaterial color="#9da4a6" metalness={0.6} roughness={0.36} />
      </mesh>
      <mesh position={[0, 1.35, 0]}>
        <boxGeometry args={[1.08, 0.08, 0.08]} />
        <meshStandardMaterial color="#ff6a2a" emissive="#4f1304" emissiveIntensity={0.18} metalness={0.4} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.52, 0]}>
        <boxGeometry args={[0.7, 0.06, 0.06]} />
        <meshStandardMaterial color="#9da4a6" metalness={0.6} roughness={0.36} />
      </mesh>
    </group>
  );
}

function TransmissionPath() {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.x = Math.sin(state.clock.elapsedTime * 0.28) * 0.12;
  });

  return (
    <group ref={ref}>
      <Pylon x={-3.9} z={-1.4} scale={0.72} />
      <Pylon x={3.7} z={-1.65} scale={0.78} />
      {[0.68, 0.98, 1.28].map((y) => (
        <mesh key={y} position={[0, y, -1.52]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.012, 0.012, 7.7, 12]} />
          <meshStandardMaterial color="#18d5c2" emissive="#18d5c2" emissiveIntensity={0.45} />
        </mesh>
      ))}
    </group>
  );
}

function Pipeline() {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.35) * 0.025;
  });

  return (
    <group ref={ref} position={[0, -0.72, 1.3]} rotation={[0, 0.18, 0]}>
      <mesh rotation={[0, 0, Math.PI / 2]} receiveShadow>
        <cylinderGeometry args={[0.16, 0.16, 6.4, 36]} />
        <meshStandardMaterial color="#20292b" metalness={0.88} roughness={0.2} />
      </mesh>
      {[-2.4, -1.2, 0, 1.2, 2.4].map((x) => (
        <mesh key={x} position={[x, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.18, 0.018, 10, 32]} />
          <meshStandardMaterial color="#ff6a2a" emissive="#742207" emissiveIntensity={0.28} metalness={0.6} roughness={0.22} />
        </mesh>
      ))}
    </group>
  );
}

function FieldGrid() {
  const bars = useMemo(() => {
    const items: { position: [number, number, number]; size: [number, number, number] }[] = [];
    for (let i = -6; i <= 6; i += 1) {
      items.push({ position: [i * 0.8, -1.05, 0], size: [0.012, 0.012, 5.8] });
      items.push({ position: [0, -1.04, i * 0.48], size: [8.8, 0.012, 0.012] });
    }
    return items;
  }, []);

  return (
    <group>
      {bars.map((bar, index) => (
        <mesh key={index} position={bar.position}>
          <boxGeometry args={bar.size} />
          <meshStandardMaterial color="#324446" emissive="#102224" emissiveIntensity={0.2} transparent opacity={0.52} />
        </mesh>
      ))}
    </group>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const points = new Float32Array(180 * 3);
    for (let i = 0; i < 180; i += 1) {
      points[i * 3] = (Math.random() - 0.5) * 9;
      points[i * 3 + 1] = Math.random() * 4 - 1.4;
      points[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    return points;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.035;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#f5c16c" size={0.026} transparent opacity={0.62} sizeAttenuation />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 5, 4]} intensity={2.1} color="#fff1d2" />
      <pointLight position={[-2.8, 1.7, 2.6]} intensity={4} color="#ff6a2a" />
      <pointLight position={[2.8, 2.4, -2]} intensity={3.2} color="#18d5c2" />
      <FieldGrid />
      <TransmissionPath />
      <Pipeline />
      <TransformerCore />
      <Particles />
    </>
  );
}

export default function AttaIndustrialScene() {
  return (
    <Canvas
      camera={{ position: [0, 1.45, 6.2], fov: 42 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
      shadows
      style={{ background: "transparent" }}
    >
      <Scene />
    </Canvas>
  );
}
