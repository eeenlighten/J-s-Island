import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import { CapsuleCollider, RigidBody } from "@react-three/rapier";
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
  const rigidbody = useRef();
  const playerRef = useRef();
  const { forward, backward, left, right } = useInput();
  const model = useGLTF( process.env.PUBLIC_URL + "/models/player.glb");
  const { actions } = useAnimations(model.animations, model.scene);

  model.scene.scale.set(.0024, .0024, .0024);

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
    const impulse = { x: 0, y: 0, z: 0 };

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

      // move
      const moveX = runDirection.x * velocity * delta;
      const moveZ = runDirection.z * velocity * delta;

      impulse.x += moveX * 0.17;
      impulse.z += moveZ * 0.17;

      rigidbody.current.applyImpulse(impulse, true);
    }
  });

  return (
    <>
      <group>
        <RigidBody
          enabledRotations={[false, false, false]}
          colliders={false}
          linearDamping={12}
          lockRotations
          ref={rigidbody}
        >
          <CapsuleCollider args={[0.1, 0.1]} position={[0, 1.2, 1.8]} />
          <primitive ref={playerRef} position={[0, 1, 1.8]} object={model.scene} />
        </RigidBody>
      </group>
    </>
  )
}

export default Player;