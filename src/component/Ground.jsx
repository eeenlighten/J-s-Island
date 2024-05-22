import React, { useEffect, useRef, useState } from 'react';
import { ColliderBox } from './utils/ColliderBox';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { RigidBody, CuboidCollider, TrimeshCollider } from "@react-three/rapier";
import Player from './Player';
import MainIsland from './MainIsland';
import SubIsland from './SubIsland';
import Boat from './decoration/Boat';
import Ocean from "./Ocean";


function Ground() {
  const result = useLoader(GLTFLoader, process.env.PUBLIC_URL + '/models/ramp.glb');

  const geometry = result.scene.children[0].geometry;

  const vertices = geometry.attributes.position.array;
  const indices = geometry.index.array;


  return (
    <>
      <Ocean />
      <MainIsland />
      <SubIsland />
      <Boat />
      <Player />

      {/* Ground */}
      <ColliderBox position={[.0, 0.085, 1.8]} scale={[.35, .085, 0.35]} />
      <ColliderBox position={[.001, 0.085, 0]} scale={[.65, .085, 0.65]} />
      <ColliderBox position={[-.3, 0.085, -.6]} scale={[.65, .24, 0.65]} />
      <ColliderBox position={[-.2, 0.085, -1.9]} scale={[.85, .38, 0.85]} />
      <ColliderBox position={[-2, 0.015, -2]} scale={[.95, .595, 0.95]} />

      {/* Wall */}
      <ColliderBox position={[-.45, 0.085, 1.8]} scale={[0.09, 1, .35]} />
      <ColliderBox position={[.45, 0.085, 1.8]} scale={[0.09, 1, .35]} />
      <ColliderBox position={[0, 0, 2.2]} scale={[.35, 1, .09]} />
      <ColliderBox position={[-.33, 0.085, 1.05]} scale={[0.09, 1, .37]} />
      <ColliderBox position={[.33, 0.085, 1.05]} scale={[0.09, 1, .37]} />
      <ColliderBox position={[.75, 0.085, -1.05]} scale={[0.09, 1, 1.7]} />
      <ColliderBox position={[.5, 0.085, -.85]} scale={[0.15, 1, 0.2]} />
      <ColliderBox position={[-1.15, 0.085, -3.05]} scale={[1.8, 1, 0.09]} />
      <ColliderBox position={[-0.2, 0.085, -2.85]} scale={[0.85, 1, 0.09]} />
      <ColliderBox position={[-3.05, 0.085, -2]} scale={[0.09, 1, 0.96]} />
      <ColliderBox position={[-1.95, 0.085, -.95]} scale={[1, 1, .09]} />
      <ColliderBox position={[-1.05, 0.085, -.4]} scale={[0.09, 1, .46]} />
      <ColliderBox position={[-.79, 0.085, .35]} scale={[.13, 1, .3]} />
      <ColliderBox position={[-.53, 0.085, .75]} scale={[.12, 1, .1]} />
      <ColliderBox position={[.53, 0.085, .75]} scale={[.12, 1, .1]} />

      {/* road */}
      <ColliderBox position={[.02, .174, .4]} scale={[.075, .0035, .075]} />
      <ColliderBox position={[-.12, .33, -.2]} scale={[.11, .0075, .11]} />
      <ColliderBox position={[-.35, .33, -.48]} scale={[.075, .0075, .075]} rotation={[0, .15, 0]} />
      <ColliderBox position={[-.2, .33, -.7]} scale={[.075, .0075, .075]} rotation={[0, .2, 0]} />
      <ColliderBox position={[-.1, .47, -1.3]} scale={[.085, .0075, .085]} rotation={[0, .3, 0]} />
      <ColliderBox position={[-.25, .47, -1.65]} scale={[.1, .0075, .1]} rotation={[0, .5, 0]} />
      <ColliderBox position={[-.15, .47, -2.05]} scale={[.1, .0075, .1]} rotation={[0, -.37, 0]} />
      <ColliderBox position={[-.55, .47, -1.9]} scale={[.1, .0075, .1]} rotation={[0, -.37, 0]} />
      <ColliderBox position={[-.1, .47, -2.35]} scale={[.11, .0075, .11]} />
      <ColliderBox position={[-1.3, .615, -2.05]} scale={[.11, .0075, .11]} rotation={[0, .2, 0]} />
      <ColliderBox position={[-1.75, .615, -2]} scale={[.13, .0075, .13]} rotation={[0, -.2, 0]} />
      <ColliderBox position={[-2.1, .615, -2.1]} scale={[.11, .0075, .11]} rotation={[0, .1, 0]} />
      <ColliderBox position={[-2.45, .615, -1.9]} scale={[.11, .0075, .11]} rotation={[0, -.1, 0]} />

      {/* stairs */}
      <RigidBody
        colliders={false}
        type='fixed'
        position={[-.06, .17, .2]}
        scale={[.135, .26, .15]}
      >
        <TrimeshCollider args={[vertices, indices]}/>
      </RigidBody>

      <RigidBody
        colliders={false}
        type='fixed'
        position={[-.25, .315, -.9]}
        scale={[.17, .255, .15]}
      >
        <TrimeshCollider args={[vertices, indices]}/>
      </RigidBody>

      <RigidBody
        colliders={false}
        type='fixed'
        position={[-.9, .46, -1.75]}
        scale={[.24, .25, .15]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <TrimeshCollider args={[vertices, indices]}/>
      </RigidBody>

      {/* etc */}
      <ColliderBox position={[.2, .4, -.5]} scale={[.05, .05, .05]} />
      <ColliderBox position={[.2, .55, -2]} scale={[.05, .05, .05]} />
      <ColliderBox position={[.5, .55, -1.9]} scale={[.08, .08, .08]} />
      <ColliderBox position={[.5, .52, -1.73]} scale={[.06, .06, .06]} rotation={[0, Math.PI / 3, 0]} />
      <ColliderBox position={[.4, .58, -1.26]} scale={[.11, .11, .11]} />
      <ColliderBox position={[.4, .58, -1.5]} scale={[.11, .11, .11]} />
      <ColliderBox position={[.42, .77, -2.6]} scale={[.14, .3, .14]} />
      <ColliderBox position={[-.85, .77, -2.6]} scale={[.14, .3, .14]} />
      <ColliderBox position={[-.58, .77, -2.6]} scale={[.1, .3, .1]} />
      <ColliderBox position={[-2.7, 1.02, -2.7]} scale={[.12, .35, .12]} />
      <ColliderBox position={[-2.65, .97, -1.35]} scale={[.1, .35, .1]} />
      <ColliderBox position={[-2.35, .88, -1.28]} scale={[.09, .25, .09]} />
      <ColliderBox position={[-2.15, .67, -1.3]} scale={[.12, .05, .12]} />
      <ColliderBox position={[-1.97, .64, -1.31]} scale={[.07, .03, .08]} />
      <ColliderBox position={[-1.5, .72, -1.5]} scale={[.08, .08, .08]} rotation={[0, Math.PI / 3, 0]} />
      <ColliderBox position={[-2.2, .72, -2.45]} scale={[.08, .08, .08]} rotation={[0, Math.PI / 3, 0]} />
      <ColliderBox position={[-2.15, .72, -2.75]} scale={[.1, .1, .1]} />
      <ColliderBox position={[-2.4, .72, -2.75]} scale={[.1, .1, .1]} />
      
      <group>
        <ColliderBox position={[-.65, .515, -.3]} scale={[.045, .19, .046]} />
        <ColliderBox position={[-.65, .515, -.65]} scale={[.045, .19, .046]} />
        <ColliderBox position={[-.659, .515, -.475]} scale={[.075, .19, .2]} isCollider={true} order={1} />
      </group>


      <group position={[.35, .14, -3.25]} rotation={[0, Math.PI / 2, 0]}>
        <ColliderBox position={[-.65, .515, -.3]} scale={[.045, .19, .046]} />
        <ColliderBox position={[-.65, .515, -.65]} scale={[.045, .19, .046]} />
        <ColliderBox position={[-.7, .515, -.475]} scale={[.015, .19, .18]} isCollider={true} order={2} />
      </group>

      <group position={[-2.05, .29, -1.55]}>
        <ColliderBox position={[-.65, .515, -.3]} scale={[.045, .19, .046]} />
        <ColliderBox position={[-.65, .515, -.65]} scale={[.045, .19, .046]} />
        <ColliderBox position={[-.62, .515, -.475]} scale={[.025, .19, .19]} isCollider={true} order={3} />
      </group>
    </>
  )
}

export default Ground;