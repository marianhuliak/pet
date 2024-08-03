"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

const ToothModel = () => {
  const meshRef = useRef(null);

  useEffect(() => {
    const loader = new FBXLoader();
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById("three-canvas")?.appendChild(renderer.domElement);

    loader.load("app/images/tooth.FBX", (object) => {
      scene.add(object);
      object.position.set(0, 0, 0);
    });

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      if (meshRef.current) meshRef.current.rotation.y += 0.01; // Обертання по осі Y
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
    };
  }, []);

  return <div id="three-canvas" style={{ width: "88px", height: "84px" }} />;
};

export default ToothModel;
