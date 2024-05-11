import { useFrame, useLoader } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';



function Boat() {

  let mesh = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "/models/boat.glb"
  ).scene;

  // boat Animation
  let move = useRef();

  const amplitude = .01;
  const frequency = 3.05;

  useFrame((state, delta) => {
    move.current.rotation.x = Math.sin(state.clock.elapsedTime * frequency) * amplitude;
  });

  return (
    <group ref={move} scale={[.1, .1, .1]} castShadow receiveShadow>
      <primitive object={mesh} rotation={[0, Math.PI / 1, 0]} position={[-8, .83, 19]} />
    </group>
  )
}

export default Boat;