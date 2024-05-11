import React from 'react'

function Bridge() {
  const railWidthPos = [
    [0.03, 0.35, 0.4],
    [0.97, 0.35, 0.4],
    [0.03, 0.35, 0],
    [0.97, 0.35, 0],
  ];

  const railHeightPos = [
    [0.5, .42, .4],
    [0.5, .42, 0],
  ];

  return (
    <>
      {/* wood block */}
      <group position={[-0.2, -0.03, 1.53]} rotation={[0, Math.PI / 2, 0]}>
        {[...Array(4)].map((e, i) => (
          <mesh
            key={i}
            position={[0.17 + .2 * i, .21, .2]}
            castShadow={true}
          >
            <boxGeometry
              args={[.15, .02, .4]}
            />
            <meshLambertMaterial
              color={'#A98F78'}
            />
          </mesh>
        ))}

        {/* wood rail */}
        {railWidthPos.map((e, i) => (
          <mesh
            key={i}
            position={e}
            castShadow={true}
          >
            <boxGeometry args={[.04, .3, .04]} />
            <meshLambertMaterial color={'#A98F78'} />
          </mesh>
        ))}

        {railHeightPos.map((e, i) => (
          <mesh
            key={i}
            position={e}
            castShadow={true}
          >
            <boxGeometry args={[0.9, .04, .04]} />
            <meshLambertMaterial color={'#A98F78'} />
          </mesh>
        ))}
      </group>
    </>
  )

}

export default Bridge;