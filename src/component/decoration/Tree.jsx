import React, { useRef } from 'react';

function Tree({ pos, sca, kind }) {
  const trunkRef = useRef();
  const leavesRef = useRef();

  return (
    <>
      {kind === 'cone' ?
        <group scale={sca}>
          <mesh
            ref={ trunkRef }
            position={pos}
            castShadow
            receiveShadow
          >
            <boxGeometry args={[.1, .1, .1]} />
            <meshLambertMaterial color={'#9A6169'} />
          </mesh>

          <mesh
            ref={ leavesRef }
            position={[pos[0], pos[1] + 0.27, pos[2]]}
            castShadow
            receiveShadow
          >
            <coneGeometry args={[.2, .5, 5]} />
            <meshLambertMaterial color={'#056F40'} />
          </mesh>
        </group>
        : 
        <mesh position={pos} receiveShadow castShadow>
          <tetrahedronGeometry args={[.13, 3]} />
          <meshLambertMaterial color={'#AF9439'} />
        </mesh>
      }
      
    </>
  )
};


export default Tree;