import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useFBX } from '@react-three/drei';
import tooth from "../../../images/tooth.FBX";
import styles from './ToothModel.module.scss';

function Tooth3D() {
  const fbx = useFBX(tooth);
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return <primitive object={fbx} ref={ref} scale={[0.05, 0.05, 0.05]} />;
}

export default function ToothModel() {
  return (
    <div className={styles.toothModelContainer}>
      <Canvas camera={{ position: [0, 0, 10] }} className={styles.toothCanvas}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 5]} />
        <Tooth3D />
      </Canvas>
    </div>
  );
}





/*import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import Stats from 'three/examples/jsm/libs/stats.module'
import tooth from "../../../images/tooth.FBX";

const ToothModel = () => {
    const mountRef = useRef(null)

    useEffect(() => {
        const scene = new THREE.Scene()
        scene.add(new THREE.AxesHelper(5))

        const light = new THREE.PointLight(0xffffff, 50)
        light.position.set(0.8, 1.4, 1.0)
        scene.add(light)

        const ambientLight = new THREE.AmbientLight()
        scene.add(ambientLight)

        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )
        camera.position.set(0.8, 1.4, 1.0)

        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight)
        mountRef.current.appendChild(renderer.domElement)

        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enableDamping = true
        controls.target.set(0, 1, 0)

        const fbxLoader = new FBXLoader();

        fbxLoader.load(
            tooth, 
            (object) => {
                scene.add(object); 
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total) * 100 + '% loaded'); 
            },
            (error) => {
                console.log('An error occurred:', error); 
            }
        );
        
        const stats = new Stats()
        mountRef.current.appendChild(stats.dom)

        const onWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
        }

        window.addEventListener('resize', onWindowResize, false)

        const animate = () => {
            requestAnimationFrame(animate)

            controls.update()
            renderer.render(scene, camera)
            stats.update()
        }

        animate()

        return () => {
            window.removeEventListener('resize', onWindowResize)
            mountRef.current.removeChild(renderer.domElement)
            mountRef.current.removeChild(stats.dom)
        }
    }, [])

    return <div ref={mountRef} />
}

export default ToothModel;

*/

