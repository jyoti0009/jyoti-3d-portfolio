"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Laptop() {
  const laptop = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (laptop.current) {
      laptop.current.rotation.y += delta * 0.35;

      laptop.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
    }
  });

  return (
    <group ref={laptop} scale={1.3}>

      {/* Laptop Base */}
      <mesh position={[0, -1, 0]}>
        <boxGeometry args={[3.8, 0.25, 2.5]} />
        <meshStandardMaterial
          color="#18233a"
          metalness={0.7}
          roughness={0.25}
        />
      </mesh>

      {/* Keyboard */}
      <mesh position={[0, -0.82, 0.05]}>
        <boxGeometry args={[3.2, 0.05, 1.8]} />
        <meshStandardMaterial
          color="#050816"
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>

      {/* Screen Frame */}
      <mesh position={[0, 0.65, -0.9]} rotation={[0.15, 0, 0]}>
        <boxGeometry args={[3.6, 2.4, 0.18]} />
        <meshStandardMaterial
          color="#111827"
          metalness={0.7}
          roughness={0.2}
        />
      </mesh>

      {/* Screen */}
      <mesh position={[0, 0.65, -0.99]} rotation={[0.15, 0, 0]}>
        <boxGeometry args={[3.15, 1.95, 0.03]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#0369a1"
          emissiveIntensity={1.5}
          metalness={0.2}
          roughness={0.2}
        />
      </mesh>

      {/* Screen Code Lines */}
      <mesh position={[-0.7, 1.1, -1.02]} rotation={[0.15, 0, 0]}>
        <boxGeometry args={[1.2, 0.08, 0.02]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" />
      </mesh>

      <mesh position={[-0.5, 0.75, -1.02]} rotation={[0.15, 0, 0]}>
        <boxGeometry args={[1.6, 0.08, 0.02]} />
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" />
      </mesh>

      <mesh position={[-0.8, 0.4, -1.02]} rotation={[0.15, 0, 0]}>
        <boxGeometry args={[1, 0.08, 0.02]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" />
      </mesh>

    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="w-full h-[450px]">

      <Canvas
        camera={{
          position: [0, 1, 7],
          fov: 45,
        }}
      >

        {/* Lighting */}
        <ambientLight intensity={1.5} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={3}
        />

        <pointLight
          position={[-4, 2, 4]}
          intensity={2}
          color="#06b6d4"
        />

        {/* 3D Laptop */}
        <Float
          speed={2}
          rotationIntensity={0.3}
          floatIntensity={0.6}
        >
          <Laptop />
        </Float>

        {/* Mouse interaction */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.8}
        />

      </Canvas>

    </div>
  );
}