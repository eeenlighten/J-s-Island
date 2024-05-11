import "./index.css";
import { createRoot } from "react-dom/client";
import { Physics } from "@react-three/cannon";
import React from "react";
import { sRGBEncoding, ACESFilmicToneMapping } from 'three';
import * as THREE from "three";
import { Canvas  } from '@react-three/fiber';
import { Scene } from "./Scene";


createRoot(document.getElementById("root")).render(
  <Canvas
    onCreated={({ camera, gl, scene }) => {
      gl.setPixelRatio(window.devicePixelRatio);
      gl.outputEncoding = sRGBEncoding;
      gl.toneMapping = ACESFilmicToneMapping;
      gl.antialias = false
      camera.updateProjectionMatrix();
    }}
    shadows={{ 
      enabled: true,
      autoUpdate: true,
      type: THREE.PCFSoftShadowMap}}
    camera={{
      position: [4, 10, 10],
      isPerspectiveCamera: true,
      near: 0.01,
      far: 1000,
      aspect: window.innerWidth / window.innerHeight,
      fov: 30 }}>

    <Physics
      broadphase="SAP"
      gravity={[0, -2.6, 0]}
      >
      <Scene />
    </Physics>
    
  </Canvas>
);