import React from 'react'

function Stone({ args, pos, rot }) {

    return (
      <>
        <mesh position={pos} rotation={rot} castShadow receiveShadow>
          <dodecahedronGeometry args={args} />
          <meshLambertMaterial color={'#9EAEAC'} />
        </mesh>
      </>
  )
}

export default Stone