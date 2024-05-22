import React, { useEffect, useRef, useState } from 'react';
import BoxLambert from '../shape/BoxLambert';


function Portal({ pos, rot }) {


  return (
    <>
      <group position={pos} rotation={rot}>
        <BoxLambert args={[.09, .48, .09]} isRecShadow={true} />
        <BoxLambert pos={[0, 0, 0.35 ]} args={[.09, .48, .09]} isRecShadow={true} />
        <mesh position={[0.001, 0.23, 0.17]}>
          <boxGeometry args={[.15, 0.15, .55]} />
          <meshLambertMaterial />
        </mesh>

        <mesh position={[-0.01, 0.01, 0.16]} castShadow>
          <boxGeometry args={[0.02, 0.48, 0.35]} />
          <meshLambertMaterial emissive="#B7E3E1" emissiveIntensity={1.5} toneMapped={false} />
        </mesh>
      </group>
    </>
  )
}

export default Portal;