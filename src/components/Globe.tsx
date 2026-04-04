"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import * as THREE from "three";

// Extend Three.js line to avoid SVG type collision
extend({ Line_: THREE.Line });

declare module "@react-three/fiber" {
  interface ThreeElements {
    line_: JSX.IntrinsicElements["mesh"] & { geometry?: THREE.BufferGeometry };
  }
}

function SurfaceDots({ count = 200, radius = 1.52 }: { count?: number; radius?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = radius * Math.cos(phi);
    }
    return arr;
  }, [count, radius]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.08;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#D4A006" size={0.02} transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

function ConnectionArcs({ count = 12, radius = 1.52 }: { count?: number; radius?: number }) {
  const groupRef = useRef<THREE.Group>(null);

  const arcs = useMemo(() => {
    const result: THREE.BufferGeometry[] = [];
    for (let i = 0; i < count; i++) {
      const phi1 = Math.acos(2 * Math.random() - 1);
      const theta1 = 2 * Math.PI * Math.random();
      const phi2 = Math.acos(2 * Math.random() - 1);
      const theta2 = 2 * Math.PI * Math.random();

      const start = new THREE.Vector3(
        radius * Math.sin(phi1) * Math.cos(theta1),
        radius * Math.sin(phi1) * Math.sin(theta1),
        radius * Math.cos(phi1)
      );
      const end = new THREE.Vector3(
        radius * Math.sin(phi2) * Math.cos(theta2),
        radius * Math.sin(phi2) * Math.sin(theta2),
        radius * Math.cos(phi2)
      );

      const mid = start.clone().add(end).multiplyScalar(0.5);
      mid.normalize().multiplyScalar(radius * 1.4);

      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      const points = curve.getPoints(32);
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      result.push(geo);
    }
    return result;
  }, [count, radius]);

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.08;
  });

  return (
    <group ref={groupRef}>
      {arcs.map((geo, i) => (
        <line_ key={i} geometry={geo}>
          <lineBasicMaterial color="#D4A006" transparent opacity={0.15} />
        </line_>
      ))}
    </group>
  );
}

function Rings() {
  const ref = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.08;
  });

  return (
    <group ref={ref}>
      {/* Saturn-style rings */}
      <mesh rotation={[Math.PI / 2.5, 0, 0.15]}>
        <ringGeometry args={[2.0, 2.15, 80]} />
        <meshBasicMaterial color="#D4A006" transparent opacity={0.1} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[Math.PI / 2.5, 0, 0.15]}>
        <ringGeometry args={[2.25, 2.35, 80]} />
        <meshBasicMaterial color="#C2703E" transparent opacity={0.06} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[Math.PI / 2.5, 0, 0.15]}>
        <ringGeometry args={[2.45, 2.52, 80]} />
        <meshBasicMaterial color="#FACC15" transparent opacity={0.04} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function WireframeGlobe() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.08;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.5, 32, 24]} />
      <meshBasicMaterial color="#D4A006" wireframe transparent opacity={0.08} />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <WireframeGlobe />
      <SurfaceDots />
      <ConnectionArcs />
      <Rings />
    </>
  );
}

export default function Globe() {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 40 }}
        dpr={[1, 2]}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <Scene />
      </Canvas>
    </div>
  );
}
