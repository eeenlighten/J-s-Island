import React from 'react'
import BoxLambert from '../shape/BoxLambert'

function Road({ pos, args, rot }) {
  return (
    <>
      <BoxLambert pos={pos} args={args} rot={rot} color={'#CC9A61'} isRecShadow={false} />
    </>
  )
}

export default Road