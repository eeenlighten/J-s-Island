import { Bloom, BrightnessContrast, DotScreen, EffectComposer, HueSaturation } from '@react-three/postprocessing';
import { useEffect, useRef, useState } from 'react';


function BloomLight() {


  return (
    <>
      <EffectComposer disableNormalPass>
        <Bloom
          intensity={1.2}
          mipmapBlur={true}
          luminanceThreshold={1}
          luminanceSmoothing={0}
        />
      </EffectComposer>
    </>
  )
}

export default BloomLight;