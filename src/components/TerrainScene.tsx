"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Terrain() {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(20, 20, 128, 128);
    const positions = geo.attributes.position;

    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      const z =
        Math.sin(x * 0.5) * Math.cos(y * 0.5) * 1.5 +
        Math.sin(x * 1.2 + y * 0.8) * 0.5 +
        Math.cos(x * 0.3 - y * 1.1) * 0.8 +
        (Math.random() - 0.5) * 0.15;
      positions.setZ(i, z);
    }

    geo.computeVertexNormals();
    return geo;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.02;
    const positions = meshRef.current.geometry.attributes.position;
    const time = state.clock.elapsedTime;

    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      const z =
        Math.sin(x * 0.5 + time * 0.3) * Math.cos(y * 0.5 + time * 0.2) * 1.5 +
        Math.sin(x * 1.2 + y * 0.8 + time * 0.15) * 0.5 +
        Math.cos(x * 0.3 - y * 1.1 + time * 0.1) * 0.8;
      positions.setZ(i, z);
    }
    positions.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 2.8, 0, 0]} position={[0, -2, 0]}>
      <meshStandardMaterial
        color="#8B5CF6"
        wireframe
        transparent
        opacity={0.25}
      />
    </mesh>
  );
}

export default function TerrainScene() {
  return (
    <Canvas
      camera={{ position: [0, 5, 12], fov: 50 }}
      dpr={[1, 1.5]}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 10, 5]} intensity={1} color="#8B5CF6" />
      <pointLight position={[-5, 5, -5]} intensity={0.5} color="#A78BFA" />
      <Terrain />
    </Canvas>
  );
}
