import { useLoader } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import BoxLambert from './shape/BoxLambert';
import { useGLTF } from '@react-three/drei';
import Chicken from './animal/Chicken';


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


  // mannual text
  const { nodes: arrowNodes, materials: arrowMat } = useGLTF(process.env.PUBLIC_URL + '/models/text.glb');

  const { nodes: portalNodes, materials: portalMat } = useGLTF(process.env.PUBLIC_URL + '/models/text2.glb');

  const [currentIndex, setCurrentIndex] = useState(0);
  const models = ["/models/text3.glb", "/models/text4.glb"];

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

  const { nodes: musicNodes, materials: musicMat } = useGLTF(process.env.PUBLIC_URL + modelPath);


  return (
    <>
      <group>
        <BoxLambert pos={[3, 0.3, 1.5]} args={[2, .2, 2]} color={'#36591C'}/>
        <BoxLambert pos={[3, 0, 1.5]} args={[2, .4, 2]} color="#272A15" />
      </group>

      {/* Manual arrow */}
      <mesh 
        position={[2.57, .42, 1]}
        scale={[0.065, 0.009, 0.065]}
        geometry={arrowNodes.Cube001.geometry}
        material={arrowMat.Cube001}
        material-emissive="#B7E3E1"
        material-emissiveIntensity={.5}
      />

      {/* Manual portal */}
      <mesh
        position={[2.39, .42, 1.65]}
        scale={[0.085, 0.009, 0.085]}
        geometry={portalNodes.Cube002.geometry}
        material={portalMat.Cube002}
        material-emissive="#B7E3E1"
        material-emissiveIntensity={.5}
      />

      {/* Manual music */}
      <mesh
        position={[2.7, .41, 2.2]}
        scale={[0.25, 0.009, 0.25]}
        geometry={musicNodes.Cube003.geometry}
        material={musicMat.Cube003}
        material-emissive="#B7E3E1"
        material-emissiveIntensity={.5}
      />

      <primitive object={volcano} />
      <primitive object={stone} />

      <Chicken pos={[2.2, .27, .7]} rot={[0, Math.PI / 3, 0]} />
    </>
  )
}

export default SubIsland;