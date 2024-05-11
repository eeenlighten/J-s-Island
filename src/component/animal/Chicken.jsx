import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';


function Chicken({ pos, rot }) {
  const bodyParts = [
    { position: [0, 2, 0], size: [0.5, 1, 0.5] },
    { position: [0, 1.75, -0.35], size: [0.5, 0.5, 0.25] },
    { position: [0.3, 1.65, -0.1], size: [0.15, 0.3, 0.5] },
    { position: [-0.3, 1.65, -0.1], size: [0.15, 0.3, 0.5] }
  ];

  const faceParts = [
    { position: [0, 2.25, 0.37], size: [0.15, 0.15, 0.25], color: '#FA8069' },
    { position: [0, 2.1, 0.32], size: [0.15, 0.15, 0.15], color: '#E73A78' },
    { position: [0.25, 2.3, 0.05], size: [0.01, 0.1, 0.1], color: '#000000' },
    { position: [-0.25, 2.3, 0.05], size: [0.01, 0.1, 0.1], color: '#000000' }
  ];

  const footParts = [
    { position: [0.2, 1.35, -0.1], size: [0.1, 0.3, 0.1] },
    { position: [0.3, 1.15, 0], size: [0.1, 0.1, 0.5] },
    { position: [0.1, 1.15, 0], size: [0.1, 0.1, 0.5] },
    { position: [0.2, 1.15, -0.2], size: [0.1, 0.1, 0.1] },
    { position: [0.2, 1.15, 0], size: [0.1, 0.1, 0.1] },
    { position: [-0.2, 1.35, -0.1], size: [0.1, 0.3, 0.1] },
    { position: [-0.1, 1.15, 0], size: [0.1, 0.1, 0.5] },
    { position: [-0.3, 1.15, 0], size: [0.1, 0.1, 0.5] },
    { position: [-0.2, 1.15, -0.2], size: [0.1, 0.1, 0.1] },
    { position: [-0.2, 1.15, 0], size: [0.1, 0.1, 0.1] }
  ];

  
  const chickenRef = useRef();
  const [eating, setEating] = useState(false);

  useFrame(() => {
    if (eating) {
      chickenRef.current.rotation.x = Math.sin(Date.now() * 0.0045) * 0.07;
    }
  });

  const startEating = () => {
    setEating(true);
  };

  const stopEating = () => {
    setEating(false);
  };

  useEffect(() => {
    startEating();
    return () => stopEating();
  }, []);

  return (
    <>
      <group position={pos} rotation={rot} scale={[0.1, 0.1, 0.1]}>
        <group  ref={chickenRef}>
          {/* body */}
          {bodyParts.map((e, i) => (
            <mesh key={i} position={e.position} castShadow>
              <boxGeometry args={e.size} />
              <meshLambertMaterial />
            </mesh>
          ))}

          {/* head */}
          <mesh position={[0, 2.575, 0.02]} castShadow>
            <boxGeometry args={[.15, .15, .35]} />
            <meshLambertMaterial color={'#E73A78'} />
          </mesh>

          {/* face */}
          {faceParts.map((e, i) => (
            <mesh key={i} position={e.position} castShadow>
              <boxGeometry args={e.size} />
              <meshLambertMaterial color={e.color} />
            </mesh>
          ))}
        </group>

        {/* foot */}
        {footParts.map((e, i) => (
          <mesh key={i} position={e.position} castShadow>
            <boxGeometry args={e.size} />
            <meshLambertMaterial color={'#FA8069'} />
          </mesh>
        ))}
      </group>
    </>
  )
}

export default Chicken;