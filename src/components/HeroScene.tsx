"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function LODObject({ position, color }: { position: [number, number, number]; color: string }) {
  const groupRef = useRef<THREE.Group>(null);
  const offset = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.x = t * 0.03 + offset;
    groupRef.current.rotation.y = t * 0.04 + offset;
    groupRef.current.position.y = position[1] + Math.sin(t * 0.15 + offset) * 0.5;
  });

  // Create LOD-style icosahedrons at different detail levels layered
  return (
    <group ref={groupRef} position={position}>
      {/* High detail — outer wireframe */}
      <mesh>
        <icosahedronGeometry args={[1, 2]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.06} />
      </mesh>
      {/* Medium detail — mid shell */}
      <mesh>
        <icosahedronGeometry args={[0.7, 1]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.1} />
      </mesh>
      {/* Low detail — inner core */}
      <mesh>
        <icosahedronGeometry args={[0.4, 0]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.18} />
      </mesh>
    </group>
  );
}

function LODField() {
  const groupRef = useRef<THREE.Group>(null);

  const objects = useMemo(() => {
    const items: { position: [number, number, number]; color: string }[] = [];
    const colors = ["#D4A006", "#C2703E", "#FACC15", "#B88B05", "#D4A006"];
    for (let i = 0; i < 30; i++) {
      items.push({
        position: [
          (Math.random() - 0.5) * 28,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 28,
        ],
        color: colors[i % colors.length],
      });
    }
    return items;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.015;
    }
  });

  return (
    <group ref={groupRef}>
      {objects.map((obj, i) => (
        <LODObject key={i} position={obj.position} color={obj.color} />
      ))}
    </group>
  );
}

function SlowCamera() {
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    state.camera.position.x = Math.sin(t * 0.04) * 12;
    state.camera.position.z = Math.cos(t * 0.04) * 12;
    state.camera.position.y = 3 + Math.sin(t * 0.06) * 2;
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 3, 12], fov: 50 }}
      dpr={[1, 2]}
      style={{ background: "transparent" }}
    >
      <SlowCamera />
      <LODField />
    </Canvas>
  );
}
