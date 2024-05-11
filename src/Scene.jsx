import {
    Environment,
    OrbitControls,
    OrthographicCamera,
    PerspectiveCamera,
    useHelper,
    SoftShadows,
    Reflector,
    Sky,
  } from "@react-three/drei";
import { Suspense, useEffect, useState, useRef } from "react";
import * as THREE from 'three';
import Ground from "./component/Ground";
import Popup from "./component/Popup";
import Player from './component/Player';
import MainIsland from './component/MainIsland';
import SubIsland from './component/SubIsland';
import Boat from './component/decoration/Boat';
import AudioPlay from "./component/utils/AudioPlay";
import BloomLight from "./component/utils/BloomLight";

  
export function Scene() {

  return (
    <Suspense fallback={null}>
      {/* controls */}
      <OrbitControls />

      {/* light */}
      <ambientLight intensity={.4} color={'white'}  />

      <spotLight
        shadow-mapSize={[1024 * 4, 1024 * 4]}
        castShadow
        color='#ffffff'
        intensity={.5}
        position={[0, 20, 0]}
        angle={THREE.MathUtils.degToRad(60) * .2}
        shadow-blurSample={32}
      />

      <directionalLight
        intensity={1.2}
        color={'#ffffff'}
        position={[-40, 30, -30]}
        castShadow
      />

      <directionalLight
        intensity={.3}
        color={'#ffffff'}
        position={[40, -30, 30]}
      />

      {/* sky */}
      <Sky turbidity={10} />
      
      {/* component */}
      <Popup />
      <Ground />
      <SubIsland />
      <MainIsland />
      {/* <Boat /> */}
      <Player />
      <AudioPlay />
      <BloomLight />
    </Suspense>
  )
}