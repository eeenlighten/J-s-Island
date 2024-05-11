import React, { useEffect, useRef, useState } from 'react';
import Ocean from './Ocean';
import { ColliderBox } from './utils/ColliderBox';
import { usePlane } from '@react-three/cannon';
import { BufferAttribute } from 'three';
import { MeshReflectorMaterial } from '@react-three/drei';


function Ground() {
  const [ref] = usePlane(
    () => ({
      type: 'Static',
      rotation: [-Math.PI / 2, 0, 0]
    }),
    useRef(null)
  );


  // // const meshRef = useRef(null);
  // const meshRef2 = useRef(null);

  // useEffect(() => {
  //   // var uvs = meshRef.current.geometry.attributes.uv.array;
  //   // meshRef.current.geometry.setAttribute("uv2", new BufferAttribute(uvs, 2));
    
  //   var uvs2 = meshRef2.current.geometry.attributes.uv.array;
  //   meshRef2.current.geometry.setAttribute("uv2", new BufferAttribute(uvs2, 2));
  // }, [meshRef2.current]);

  return (
    <>
      {/* ground */}
      <Ocean />
      {/* <mesh
        ref={meshRef2}
        position={[-2.285, .11, -1.325]}
        rotation-x={-Math.PI * 0.5}
      >
        <planeGeometry args={[12, 12]} />
        <meshBasicMaterial
          opacity={0.325}
          // transparent={true}
          color={'yellowgreen'}
        />
      </mesh> */}


      {/* <ColliderBox position={[0.53,1,0.65]} scale={[1.1, 1.5, 1.1]}/> */}
    </>
  )
}

export default Ground;