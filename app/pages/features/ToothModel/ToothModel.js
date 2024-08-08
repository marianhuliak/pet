import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import tooth from "../../../images/tooth.FBX";
import styles from './ToothModel.module.scss';

function Tooth3D() {
  const fbx = useLoader(FBXLoader, tooth);
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return <primitive object={fbx} ref={ref} scale={[0.47, 0.47, 0.47]} />;
}

export default function ToothModel({ id }) {
  return (
    <div className={styles.toothModelContainer} key={id}>
      <Canvas camera={{ position: [0, 0, 100] }} className={styles.toothCanvas}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 50]} />
        <Tooth3D /> 
        <OrbitControls />
      </Canvas>
    </div>
    
  );
}

