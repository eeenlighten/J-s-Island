import { act, useFrame, useLoader, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useAnimations, useGLTF, OrbitControls } from '@react-three/drei';
import { useInput } from './hooks/useInput';
import * as THREE from 'three';


let runDirection = new THREE.Vector3();
let rotateAngle = new THREE.Vector3(0, 1, 0);
let rotateQuarternion = new THREE.Quaternion();

const directionOffset = ({ forward, backward, left, right }) => {
  let directionOffset = 0; // up

  if(forward) {
    if(left) {
      directionOffset = Math.PI / 4; // up + right
    } else if(right) {
      directionOffset = -Math.PI / 4; // up + left
    }
  } else if(backward) {
    if(left) {
      directionOffset = Math.PI / 4 + Math.PI / 2; // down + left
    } else if(right) {
      directionOffset = -Math.PI / 4 - Math.PI / 2; // down + right
    } else {
      directionOffset = Math.PI; // down
    }
  } else if(left) {
    directionOffset = Math.PI / 2; // left
  }else if(right) {
    directionOffset = -Math.PI / 2; // right
  }

  return directionOffset;
}

function Player() {
  const { forward, backward, left, right } = useInput();
  const model = useGLTF("./models/player.glb");
  const { actions } = useAnimations(model.animations, model.scene);

  model.scene.scale.set(.0022, .0022, .0022);

  model.scene.traverse((object) => {
    if(object.isMesh) {
      object.castShadow = true;
    }
  });

  const currentAction = useRef();
  const camera = useThree((state) => state.camera);

  useEffect(() => {

    let action = '';

    if(forward || backward || left || right) {
      action = 'running';
    } else {
      action = 'idle';
    }

    if(currentAction.current != action) {
      const nextActionToPlay = actions[action];
      const current = actions[currentAction.current];
      current?.fadeOut(0.2);
      nextActionToPlay?.reset().fadeIn(0.2).play();
      currentAction.current = action;
    }
  }, [forward, backward, left, right]);

  useFrame((state, delta) => {
    if(currentAction.current == 'running') {
      let angleYCameraDirection = Math.atan2(
        camera.position.x - model.scene.position.x,
        camera.position.z - model.scene.position.z,
      );

      let newDirectionOffset = directionOffset({
        forward,
        backward,
        left,
        right,
      });
    
      // rotate model
      rotateQuarternion.setFromAxisAngle(
        rotateAngle,
        angleYCameraDirection + newDirectionOffset
      )
      model.scene.quaternion.rotateTowards(rotateQuarternion, 0.2);

      // calculate direction
      camera.getWorldDirection(runDirection);
      runDirection.y = 0;
      runDirection.normalize();
      runDirection.applyAxisAngle(rotateAngle, newDirectionOffset);

      // run velocity
      const velocity = currentAction.current == 'running' ? 1 : 0;

      // move model
      const moveX = runDirection.x * velocity * delta;
      const moveZ = runDirection.z * velocity * delta;
      model.scene.position.x += moveX;
      model.scene.position.z += moveZ;
    }
  });


  return (
    <>
      {/* <primitive position={[0, 0.17, 1.8]} object={model.scene} /> */}
      <group>
        <primitive position={[0, 0.17, 1.8]} object={model.scene} />
        {/* <mesh scale={[.2, .2, .2]} rotation-x={-Math.PI / 2} position={[0, 0.35, 1.8]}>
          <planeGeometry />
          <meshBasicMaterial />
        </mesh> */}
      </group>

    </>
  )
}

export default Player;