import React, { useRef } from 'react';
import { Canvas, useFrame  } from '@react-three/fiber';
import { OrbitControls, useFBX } from '@react-three/drei';

function ToothModel() {
  const fbx = useFBX("../../../images/tooth.FBX");
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return <primitive object={fbx} ref={ref} />;
}

export default function Tooth3D() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <ToothModel />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
