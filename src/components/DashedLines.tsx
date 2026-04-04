"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import * as THREE from "three";

extend({ Line_: THREE.Line });

function Lines({ count = 70 }: { count?: number }) {
  const groupRef = useRef<THREE.Group>(null);

  const lines = useMemo(() => {
    const result: { geo: THREE.BufferGeometry; color: string }[] = [];

    for (let i = 0; i < count; i++) {
      const points: THREE.Vector3[] = [];
      const segments = 6 + Math.floor(Math.random() * 6);
      let x = (Math.random() - 0.5) * 16;
      let y = (Math.random() - 0.5) * 16;
      let z = (Math.random() - 0.5) * 16;

      for (let j = 0; j < segments; j++) {
        points.push(new THREE.Vector3(x, y, z));
        x += (Math.random() - 0.5) * 3;
        y += (Math.random() - 0.5) * 3;
        z += (Math.random() - 0.5) * 3;
      }

      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const colors = ["#8B5CF6", "#EC4899", "#A78BFA", "#7C3AED"];
      const color = colors[Math.floor(Math.random() * colors.length)];
      result.push({ geo, color });
    }
    return result;
  }, [count]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.03;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {lines.map((l, i) => (
        <line_ key={i} geometry={l.geo}>
          <lineDashedMaterial
            color={l.color}
            dashSize={0.3}
            gapSize={0.15}
            transparent
            opacity={0.4}
          />
        </line_>
      ))}
    </group>
  );
}

export default function DashedLines() {
  return (
    <Canvas
      camera={{ position: [0, 0, 20], fov: 45 }}
      dpr={[1, 1.5]}
      style={{ background: "transparent" }}
    >
      <Lines />
    </Canvas>
  );
}
