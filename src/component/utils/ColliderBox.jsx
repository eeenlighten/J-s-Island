import { RigidBody, CuboidCollider } from "@react-three/rapier";
import React, { useCallback, useState } from 'react';
import Popup from "../Popup";


export function ColliderBox({ position, scale, rotation, isCollider, order }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCollisionEnter = useCallback((e) => {
    if (isCollider) {
      setIsOpen(true);
    }
  }, [isCollider]);

  const handleCollisionExit = useCallback((e) => {
    if (isCollider) {
      setIsOpen(false);
    }
  }, [isCollider]);


  return (
    <>
      <group>
        <RigidBody
          colliders={false}
          type="fixed"
          lockRotations
          onCollisionEnter={handleCollisionEnter}
          onCollisionExit={handleCollisionExit}
        >
          <CuboidCollider position={position} args={scale} rotation={rotation} />
        </RigidBody>
      </group>
      { isOpen && <Popup order={order} isOpen={isOpen} /> }
    </>
  )
}