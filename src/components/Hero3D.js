import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function RotatingBox() {
  const meshRef = useRef();
  useFrame(({ clock }) => {
    meshRef.current.rotation.x = clock.getElapsedTime();
    meshRef.current.rotation.y = clock.getElapsedTime();
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="violet" />
    </mesh>
  );
}

export default function Hero3D() {
  return (
    <div className="h-screen w-full">
      <Canvas camera={{ position: [5, 5, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <RotatingBox />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
