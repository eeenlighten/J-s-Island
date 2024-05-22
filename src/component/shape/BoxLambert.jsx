import React from 'react';


function BoxLambert({ pos, rot, args, color, isRecShadow }) {

  return (
    <>
      <mesh position={pos} rotation={rot} castShadow receiveShadow={ !isRecShadow ? false : true}>
        <boxGeometry attach="geometry" args={args} />
        <meshLambertMaterial attach="material" color={color} toneMapped={true} />
      </mesh>
    </>
  )
}

export default BoxLambert;