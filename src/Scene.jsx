import { OrbitControls, Sky } from "@react-three/drei";
import { Canvas  } from '@react-three/fiber';
import { Suspense, useEffect, useState, useRef } from "react";
import * as THREE from 'three';
import { sRGBEncoding, ACESFilmicToneMapping } from 'three';
import { Physics } from "@react-three/rapier";
import Ground from "./component/Ground";
import BloomLight from "./component/utils/BloomLight";
import LoadingScreen from "./component/LoadingScreen";
import gsap from "gsap";


const mp3Play = new Audio(process.env.PUBLIC_URL + '/music/music.mp3');

export function Scene() {
  const [start, setStart] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const cameraRef = useRef();

  useEffect(() => {
    if (start && isPlaying) {
      mp3Play.play();
    } else {
      mp3Play.pause();
    }
  }, [start, isPlaying]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsPlaying((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [start]);

    useEffect(() => {
        if (cameraRef.current) {
            gsap.to(cameraRef.current.position, {
                duration: 5.9,
                x: 4,
                y: 10,
                z: 10,
                ease: "power4.inOut",
            });
        }
    }, [cameraRef.current]);

  return (
    <>
      <Canvas
        onCreated={({ camera, gl, scene }) => {
          gl.setPixelRatio(window.devicePixelRatio);
          gl.outputEncoding = sRGBEncoding;
          gl.toneMapping = ACESFilmicToneMapping;
          gl.antialias = false
          camera.updateProjectionMatrix();
          cameraRef.current = camera;
        }}
        shadows={{ 
          enabled: true,
          autoUpdate: true,
          type: THREE.PCFSoftShadowMap}}
        camera={{
          position: [-1, 1.2, 5],
          isPerspectiveCamera: true,
          near: 0.01,
          far: 1000,
          fov: 30 }}
      >

        <Suspense fallback={null}>
          <Physics>

            {/* controls */}
            <OrbitControls
              enableZoom={false}
              enableRotate={false}
              mouseButtons={false}
            />

            {/* light */}
            <ambientLight intensity={.5} color={'white'}  />

            <spotLight
              shadow-mapSize={[1024 * 4, 1024 * 4]}
              castShadow
              color='#ffffff'
              intensity={.3}
              position={[0, 20, 0]}
              angle={THREE.MathUtils.degToRad(60) * .2}
              shadow-blurSample={32}
            />

            <directionalLight
              intensity={1.7}
              color={'#ffffff'}
              position={[-40, 30, -30]}
              castShadow
            />

            <directionalLight
              intensity={.4}
              color={'#ffffff'}
              position={[40, -30, 30]}
            />

            <BloomLight />
            
            <Sky />
            <Ground />
          </Physics>
        </Suspense>
      </Canvas>

      <LoadingScreen started={start} isPlaying={isPlaying} onStarted={() => setStart(true)} />
    </>
  )
}