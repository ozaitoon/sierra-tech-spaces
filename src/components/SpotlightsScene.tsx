"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function MovingSpotlight({
  color,
  position,
  speed,
  radius,
}: {
  color: string;
  position: [number, number, number];
  speed: number;
  radius: number;
}) {
  const lightRef = useRef<THREE.SpotLight>(null);
  const targetRef = useRef<THREE.Object3D>(null);

  useFrame((state) => {
    if (targetRef.current) {
      const t = state.clock.elapsedTime * speed;
      targetRef.current.position.x = Math.sin(t) * radius;
      targetRef.current.position.z = Math.cos(t) * radius;
    }
  });

  return (
    <>
      <object3D ref={targetRef} position={[0, 0, 0]} />
      <spotLight
        ref={lightRef}
        color={color}
        position={position}
        intensity={50}
        angle={0.4}
        penumbra={0.8}
        distance={20}
        target={targetRef.current || undefined}
        castShadow
      />
    </>
  );
}

function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
      <planeGeometry args={[30, 30]} />
      <meshStandardMaterial color="#000000" roughness={0.9} metalness={0.1} />
    </mesh>
  );
}

function CenterSphere() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.2;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <mesh ref={ref} castShadow>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial color="#1a1817" roughness={0.3} metalness={0.8} />
    </mesh>
  );
}

export default function SpotlightsScene() {
  return (
    <Canvas
      camera={{ position: [0, 4, 8], fov: 40 }}
      dpr={[1, 1.5]}
      shadows
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.05} />
      <MovingSpotlight color="#8B5CF6" position={[-3, 6, 3]} speed={0.7} radius={3} />
      <MovingSpotlight color="#EC4899" position={[3, 6, -3]} speed={0.5} radius={4} />
      <MovingSpotlight color="#A78BFA" position={[0, 6, 4]} speed={0.9} radius={2.5} />
      <CenterSphere />
      <Floor />
    </Canvas>
  );
}
