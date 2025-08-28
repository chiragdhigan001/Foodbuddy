import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useMemo } from "react";

function Stars() {
  const sphere = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 5000; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      positions.push(x, y, z);
    }
    return new Float32Array(positions);
  }, []);

  return (
    <Points positions={sphere} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.015}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

function ThreeBackground() {
  return (
    <Canvas
      className="three-canvas"
      camera={{ position: [0, 0, 3] }}
    >
      <Stars />
    </Canvas>
  );
}

export default ThreeBackground;
