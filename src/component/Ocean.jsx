import * as THREE from 'three'
import React, { useRef, useMemo } from 'react'
import { extend, useThree, useLoader, useFrame } from '@react-three/fiber'
import { Water } from 'three-stdlib'

extend({ Water })

function Ocean() {
  const ref = useRef();
  const gl = useThree((state) => state.gl);
  const waterNormals = useLoader(THREE.TextureLoader, process.env.PUBLIC_URL + '/textures/waternormals.jpg');
  const geom = useMemo(() => new THREE.PlaneGeometry(1000, 1000), []);

  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
 
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(0, 0, 0),
      sunColor: 0xffffff,
      waterColor: '#00f9ff',
      distortionScale: 3.7,
      fog: false,
      format: gl.encoding
    }),
    [waterNormals]
  );
  useFrame((state, delta) => (ref.current.material.uniforms.time.value += delta * .04));
  return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
}


export default Ocean;