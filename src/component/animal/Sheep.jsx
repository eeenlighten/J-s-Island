import React, { useRef, useEffect, useState } from 'react';


function Sheep({ pos, rot }) {
  
  const faceParts = [
    { position: [0, 2.1, 0.4], size: [0.3, 0.2, 0.3], color: '#7B4B47' },
    { position: [0.08, 2.15, 0.55], size: [0.05, 0.05, 0.01], color: '#5E3C3C' },
    { position: [-0.08, 2.15, 0.55], size: [0.05, 0.05, 0.01], color: '#5E3C3C' },
    { position: [0.175, 2.05, 0.3], size: [0.05, 0.25, 0.1], color: '#7B4B47' },
    { position: [-0.175, 2.05, 0.3], size: [0.05, 0.25, 0.1], color: '#7B4B47' },
    { position: [0.165, 2.1, 0.45], size: [0.03, 0.1, 0.1] },
    { position: [0.176, 2.1, 0.45], size: [0.01, 0.03, 0.03], color: '#000000' },
    { position: [-0.165, 2.1, 0.45], size: [0.03, 0.1, 0.1] },
    { position: [-0.176, 2.1, 0.45], size: [0.01, 0.03, 0.03], color: '#000000' }
  ];

  const legParts = [
    [.15, 1.675, .15],
    [.15, 1.525, .15],
    [-.15, 1.675, .15],
    [-.15, 1.525, .15],
    [.15, 1.675, -.15],
    [.15, 1.525, -.15],
    [-.15, 1.675, -.15],
    [-.15, 1.525, -.15],
  ];

  const jumpRef = useRef();

  const jumpHeight = .04;
  const jumpDuration = 0.3;
  const jumpInterval = 800;
  const restDuration = 300;

  useEffect(() => {
    const jumpIntervalId = setInterval(() => {
      jump(3);
      setTimeout(() => {
        rest();
      }, (jumpDuration * 1000 + jumpInterval) * 3);
    }, (jumpDuration * 1000 + jumpInterval) * 3 + restDuration);

    return () => clearInterval(jumpIntervalId);
  }, []);

  const jump = (count) => {
    let jumps = 0;
    const jumpIntervalId = setInterval(() => {
      if (jumps < count) {
        jumpRef.current.position.y += jumpHeight;
        setTimeout(() => {
          jumpRef.current.position.y -= jumpHeight;
        }, jumpDuration * 1000);
        jumps++;
      } else {
        clearInterval(jumpIntervalId);
      }
    }, jumpInterval);
  };

  const rest = () => {
    setTimeout(() => {
    }, restDuration);
  };

  return (
    <>
      <group position={pos} rotation={rot} scale={[0.27, 0.27, 0.27]} ref={jumpRef}>
        {/* body */}
        <mesh position={[0, 2, 0]} castShadow>
          <boxGeometry args={[.5, .5, .5]} />
          <meshLambertMaterial />
        </mesh>

        {/* face */}
        {faceParts.map((e, i) => (
          <mesh key={i} position={e.position} castShadow>
            <boxGeometry args={e.size} />
            <meshLambertMaterial color={e.color} />
          </mesh>
        ))}

        {/* hair */}
        <mesh position={[0, 2.25, .25]} castShadow>
          <boxGeometry args={[.2, .1, .3]} />
          <meshLambertMaterial />
        </mesh>

        {/* legs */}
        {legParts.map((e, i) => (
          <mesh key={i} position={e} castShadow>
            <boxGeometry args={[.1, .15, .1]} />
            <meshLambertMaterial color={i % 2 === 0 ? '#AB8072' : '#5E3C3C'} />
          </mesh>
        ))}
      </group>
    </>
  )
}

export default Sheep;