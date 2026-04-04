"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import * as THREE from "three";

extend({ Line_: THREE.Line });

// ── Terrain Mesh (positioned in upper-mid area) ──
function Terrain() {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(20, 20, 100, 100);
    const positions = geo.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      const z =
        Math.sin(x * 0.5) * Math.cos(y * 0.5) * 1.5 +
        Math.sin(x * 1.2 + y * 0.8) * 0.5;
      positions.setZ(i, z);
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.015;
    const positions = meshRef.current.geometry.attributes.position;
    const time = state.clock.elapsedTime;
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      const z =
        Math.sin(x * 0.5 + time * 0.2) * Math.cos(y * 0.5 + time * 0.15) * 1.5 +
        Math.sin(x * 1.2 + y * 0.8 + time * 0.1) * 0.5;
      positions.setZ(i, z);
    }
    positions.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 2.8, 0, 0]} position={[0, -15, -10]}>
      <meshBasicMaterial color="#8B5CF6" wireframe transparent opacity={0.12} />
    </mesh>
  );
}

// ── Dashed Lines (spread across mid area) ──
function DashedLines() {
  const groupRef = useRef<THREE.Group>(null);

  const lines = useMemo(() => {
    const result: { geo: THREE.BufferGeometry; color: string }[] = [];
    const colors = ["#8B5CF6", "#EC4899", "#A78BFA", "#7C3AED"];
    for (let i = 0; i < 50; i++) {
      const points: THREE.Vector3[] = [];
      const segments = 5 + Math.floor(Math.random() * 5);
      let x = (Math.random() - 0.5) * 30;
      let y = (Math.random() - 0.5) * 60 + 5;
      let z = (Math.random() - 0.5) * 20 - 10;
      for (let j = 0; j < segments; j++) {
        points.push(new THREE.Vector3(x, y, z));
        x += (Math.random() - 0.5) * 4;
        y += (Math.random() - 0.5) * 4;
        z += (Math.random() - 0.5) * 3;
      }
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      result.push({ geo, color: colors[Math.floor(Math.random() * colors.length)] });
    }
    return result;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {lines.map((l, i) => (
        <line_ key={i} geometry={l.geo}>
          <lineDashedMaterial color={l.color} dashSize={0.3} gapSize={0.15} transparent opacity={0.2} />
        </line_>
      ))}
    </group>
  );
}

// ── Floating LOD Objects (scattered everywhere) ──
function LODObject({ position, color }: { position: [number, number, number]; color: string }) {
  const groupRef = useRef<THREE.Group>(null);
  const offset = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.x = t * 0.02 + offset;
    groupRef.current.rotation.y = t * 0.03 + offset;
    groupRef.current.position.y = position[1] + Math.sin(t * 0.1 + offset) * 0.8;
  });

  return (
    <group ref={groupRef} position={position}>
      <mesh>
        <icosahedronGeometry args={[0.8, 2]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.05} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.55, 1]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.08} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.3, 0]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.14} />
      </mesh>
    </group>
  );
}

// ── Particles (everywhere) ──
function Particles({ count = 400 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 40;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 120;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 30 - 10;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.008;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#8B5CF6" size={0.04} transparent opacity={0.35} sizeAttenuation />
    </points>
  );
}

// ── Spotlights (lower area) ──
function MovingSpotlight({ color, position, speed, radius }: {
  color: string; position: [number, number, number]; speed: number; radius: number;
}) {
  const targetRef = useRef<THREE.Object3D>(null);

  useFrame((state) => {
    if (targetRef.current) {
      const t = state.clock.elapsedTime * speed;
      targetRef.current.position.x = position[0] + Math.sin(t) * radius;
      targetRef.current.position.z = position[2] + Math.cos(t) * radius;
    }
  });

  return (
    <>
      <object3D ref={targetRef} position={position} />
      <spotLight
        color={color}
        position={[position[0], position[1] + 8, position[2]]}
        intensity={30}
        angle={0.4}
        penumbra={0.8}
        distance={25}
        target={targetRef.current || undefined}
      />
    </>
  );
}

// ── Camera slowly scrolls through the scene ──
function ScrollCamera() {
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    // Slow gentle drift
    state.camera.position.x = Math.sin(t * 0.03) * 3;
    state.camera.position.z = 15 + Math.cos(t * 0.02) * 2;
    state.camera.lookAt(0, state.camera.position.y, 0);
  });

  return null;
}

// ── Full scene combining everything ──
function Scene() {
  const colors = ["#8B5CF6", "#EC4899", "#A78BFA", "#7C3AED"];

  const lodObjects = useMemo(() => {
    const items: { position: [number, number, number]; color: string }[] = [];
    for (let i = 0; i < 40; i++) {
      items.push({
        position: [
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 25 - 8,
        ],
        color: colors[i % colors.length],
      });
    }
    return items;
  }, []);

  return (
    <>
      <ScrollCamera />
      <ambientLight intensity={0.15} />

      {/* Particles fill everything */}
      <Particles />

      {/* LOD objects scattered through the full height */}
      {lodObjects.map((obj, i) => (
        <LODObject key={i} position={obj.position} color={obj.color} />
      ))}

      {/* Dashed lines in the middle area */}
      <DashedLines />

      {/* Terrain in the lower area */}
      <Terrain />

      {/* Spotlights at the bottom */}
      <MovingSpotlight color="#8B5CF6" position={[0, -35, 0]} speed={0.5} radius={4} />
      <MovingSpotlight color="#EC4899" position={[3, -35, -3]} speed={0.4} radius={5} />
      <MovingSpotlight color="#A78BFA" position={[-3, -35, 2]} speed={0.6} radius={3} />

      {/* Floor for spotlights */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -40, 0]}>
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial color="#000000" roughness={0.9} metalness={0.1} />
      </mesh>
    </>
  );
}

export default function FullPageScene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 50 }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
