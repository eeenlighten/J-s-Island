import React, { useEffect, useRef, useState } from 'react';
import BoxLambert from '../shape/BoxLambert';
import { Bloom, EffectComposer } from '@react-three/postprocessing';


function BloomLight() {

  return (
    <>
      <EffectComposer disableNormalPass enabled={true} castShadow>
        <Bloom
          intensity={1}
          mipmapBlur={true}
          luminanceThreshold={1}
          luminanceSmoothing={0}
        />
      </EffectComposer>
    </>
  )
}

export default BloomLight;