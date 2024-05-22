import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';


function Turtle({ pos, rot }) {
  const faceParts = [
    { position: [0, 2.15, 0], args: [1, .7, .5], color: '#92AF5D' },
    { position: [0, 2.3, .37], args: [1, .4, .25], color: '#92AF5D' },
  ];

  const eyes = [
    { position: [.5, 2.2, 0], outerArgs: [.1, .4, .4], outerColor: '#FFFFFF', innerPosition: [.55, 2.2, 0], innerArgs: [.01, .2, .2], innerColor: '#000000' },
    { position: [-.5, 2.2, 0], outerArgs: [.1, .4, .4], outerColor: '#FFFFFF', innerPosition: [-.55, 2.2, 0], innerArgs: [.01, .2, .2], innerColor: '#000000' },
  ];

  const mouthParts = [
    { position: [0, 2.1, .3], args: [.5, .1, .3], color: '#FFFFFF' },
    { position: [0, 2, .3], args: [.5, .1, .2], color: '#F76C75' },
    { position: [0, 1.9, .35], args: [.5, .1, .1], color: '#F76C75' },
  ];

  const bodyParts = [
    { position: [0, 2, -1.25], args: [1.25, .3, 2], color: '#48271D' },
    { position: [0, 2.4, -.3], args: [.6, .4, .1], color: '#48271D' },
    { position: [0, 2.4, -.52], args: [1, .6, .35], color: '#8B5742' },
    { position: [0, 2.4, -.87], args: [1, .6, .35], color: '#653B23' },
    { position: [0, 2.4, -1.22], args: [1, .6, .35], color: '#8B5742' },
    { position: [0, 2.4, -1.57], args: [1, .6, .35], color: '#653B23' },
    { position: [0, 2.4, -1.92], args: [1, .6, .35], color: '#8B5742' },
  ];

  const legs = [
    { position: [-.3, 1.7, -1.8], args: [.3, .6, .3], color: '#92AF5D' },
    { position: [.3, 1.7, -1.8], args: [.3, .6, .3], color: '#92AF5D' },
    { position: [-.3, 1.7, -.7], args: [.3, .6, .3], color: '#92AF5D' },
    { position: [.3, 1.7, -.7], args: [.3, .6, .3], color: '#92AF5D' },
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
    <group scale={[.1, .1, .1]} position={pos} rotation={rot}>
      <group ref={chickenRef}>
        {/* Face */}
        {faceParts.map((part, index) => (
          <mesh key={index} position={part.position} castShadow>
            <boxGeometry args={part.args} />
            <meshLambertMaterial color={part.color} />
          </mesh>
        ))}

        {/* Eyes */}
        {eyes.map((eye, index) => (
          <React.Fragment key={index}>
            <mesh position={eye.position} castShadow>
              <boxGeometry args={eye.outerArgs} />
              <meshLambertMaterial color={eye.outerColor} />
            </mesh>
            <mesh position={eye.innerPosition} castShadow>
              <boxGeometry args={eye.innerArgs} />
              <meshLambertMaterial color={eye.innerColor} />
            </mesh>
          </React.Fragment>
        ))}

        {/* Mouth */}
        {mouthParts.map((part, index) => (
          <mesh key={index} position={part.position} castShadow>
            <boxGeometry args={part.args} />
            <meshLambertMaterial color={part.color} />
          </mesh>
        ))}

        {/* Body */}
        {bodyParts.map((part, index) => (
          <mesh key={index} position={part.position} castShadow>
            <boxGeometry args={part.args} />
            <meshLambertMaterial color={part.color} />
          </mesh>
        ))}
      </group>

      {/* Legs */}
      {legs.map((leg, index) => (
        <mesh key={index} position={leg.position} castShadow>
          <boxGeometry args={leg.args} />
          <meshLambertMaterial color={leg.color} />
        </mesh>
      ))}
    </group>
  );
}

export default Turtle;