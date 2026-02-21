 "use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

interface DataCloudProps {
  morphProgress: number;
}

function DataCloud({ morphProgress }: DataCloudProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const { rawPositions, structuredPositions } = useMemo(() => {
    const count = 220;
    const raw: THREE.Vector3[] = [];
    const structured: THREE.Vector3[] = [];

    for (let i = 0; i < count; i += 1) {
      const angle = (i / count) * Math.PI * 6;
      const radius = 1.2 + (i / count) * 1.3;
      const x = Math.cos(angle) * radius - 1.6;
      const y = (i / count - 0.5) * 2.4;
      const z = Math.sin(angle) * 1.4;
      raw.push(new THREE.Vector3(x, y, z));
    }

    const cols = 11;
    const rows = Math.ceil(count / cols);
    let index = 0;
    const spacingX = 0.6;
    const spacingY = 0.45;

    for (let r = 0; r < rows; r += 1) {
      for (let c = 0; c < cols; c += 1) {
        if (index >= count) break;
        const sx = (c - cols / 2) * spacingX + 1.4;
        const sy = (rows / 2 - r) * spacingY;
        structured.push(new THREE.Vector3(sx, sy, 0));
        index += 1;
      }
    }

    return { rawPositions: raw, structuredPositions: structured };
  }, []);

  const dummyRef = useRef(new THREE.Object3D());

  useFrame(({ clock }) => {
    if (!meshRef.current) return;

    const t = morphProgress;
    const time = clock.getElapsedTime();
    const dummy = dummyRef.current;

    for (let i = 0; i < rawPositions.length; i += 1) {
      const start = rawPositions[i];
      const target = structuredPositions[i];
      const lerpFactor = 0.5 + 0.5 * Math.sin(time * 0.7 + i * 0.15);
      const mix = THREE.MathUtils.lerp(t * 0.4, 1, lerpFactor);

      dummy.position.set(
        THREE.MathUtils.lerp(start.x, target.x, mix),
        THREE.MathUtils.lerp(start.y, target.y, mix),
        THREE.MathUtils.lerp(start.z, target.z, mix)
      );

      const baseScale = 0.08;
      const pulse = 0.7 + 0.3 * Math.sin(time * 1.2 + i * 0.4);
      dummy.scale.setScalar(baseScale * pulse);

      dummy.rotation.y = time * 0.15;
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, rawPositions.length]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshStandardMaterial
        color="#00a8ff"
        emissive="#0080ff"
        emissiveIntensity={0.9}
        roughness={0.2}
        metalness={0.4}
      />
    </instancedMesh>
  );
}

interface SceneProps {
  scrollProgress: number;
}

export default function DataToIntelligenceScene({ scrollProgress }: SceneProps) {
  const morphProgress = Math.min(Math.max(scrollProgress, 0), 1);

  return (
    <div className="w-full max-w-xl aspect-[4/3] rounded-3xl border border-primary/30 bg-gradient-to-b from-primary/20 via-primary/5 to-background-dark/90 overflow-hidden shadow-[0_0_80px_rgba(0,168,255,0.45)]">
      <Canvas camera={{ position: [0, 0, 7], fov: 40 }}>
        <color attach="background" args={["#020617"]} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[4, 4, 4]} intensity={1.2} />
        <directionalLight position={[-4, -2, -3]} intensity={0.6} />
        <DataCloud morphProgress={morphProgress} />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
