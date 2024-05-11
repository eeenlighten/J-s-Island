import { useFrame, useLoader } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import BoxLambert from './shape/BoxLambert';


function SubIsland() {
  // volcano
  let volcano = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "/models/volcano.glb"
  ).scene;

  volcano.scale.set(.09, .09, .09);
  volcano.position.set(5, .2, -8);
  volcano.rotation.set(0, Math.PI / 7.5, 0);

  // stone
  let stone = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "/models/stone.glb"
  ).scene;

  stone.scale.set(.01, .01, .01);
  stone.position.set(-5, -.8, 3);
  stone.rotation.set(0, Math.PI / 7.5, 0);

  // mannual
  let arrowTxt = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "/models/text.glb"
  ).scene;

  arrowTxt.scale.set(.25, .25, .25);
  arrowTxt.position.set(2.7, .41, .9);

  let comePortalTxt = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "/models/text2.glb"
  ).scene;

  comePortalTxt.scale.set(.25, .25, .25);
  comePortalTxt.position.set(2.7, .41, 1.5);

  const [currentIndex, setCurrentIndex] = useState(0);
  const models = ["/models/text4.glb", "/models/text3.glb"];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % models.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const modelPath = models[currentIndex] || '';
  let playMusicTxt = useLoader(GLTFLoader, process.env.PUBLIC_URL + modelPath).scene;
  playMusicTxt.scale.set(.25, .25, .25);
  playMusicTxt.position.set(2.7, .41, 2.05);


  return (
    <>
      <group>
        <BoxLambert pos={[3, 0.3, 1.5]}  args={[2, .2, 2]} color={'#36591C'}/>
        <BoxLambert pos={[3, 0, 1.5]} args={[2, .4, 2]} color="#272A15" />
      </group>

      <primitive object={volcano} />
      <primitive object={stone} />
      <primitive object={arrowTxt} />
      <primitive object={comePortalTxt} />
      <primitive object={playMusicTxt} />
    </>
  )
}

export default SubIsland;