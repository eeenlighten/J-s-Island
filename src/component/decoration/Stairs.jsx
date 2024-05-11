import React from 'react'
import BoxLambert from '../shape/BoxLambert';

function Stairs({ pos, args, rot }) {

  return (
    <>
      <group>
        <BoxLambert pos={pos} args={args} rot={rot} color={'#DCC09D'} />
      </group>
    </>
  )
}

export default Stairs