import React, { useEffect, useRef, useState } from 'react';
import BoxLambert from '../component/shape/BoxLambert';
import { useFrame, extend, useThree } from '@react-three/fiber';
import * as THREE from "three";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import Portal from "../component/decoration/Portal";
import Bridge from '../component/decoration/Bridge';
import Stairs from '../component/decoration/Stairs';
import Chicken from "../component/animal/Chicken";
import Sheep from "../component/animal/Sheep";
import Road from '../component/decoration/Road';
import Tree from '../component/decoration/Tree';
import Stone from '../component/decoration/Stone';


function Island() {


  return (
    <>
      {/* player Island */}
      <group position={[0, 0.06, 0]}>
        <BoxLambert pos={[0, 0.085, 1.8]} args={[.7, .05, .7]} color='#36591C' isRecShadow={true} />
        <BoxLambert pos={[0, 0, 1.8]} args={[.7, .12, .7]} color="#272A15" />
        <Bridge />
      </group>


      {/* first Island */}
      <group position={[0, 0.06, 0]}>
          <BoxLambert pos={[0, 0.085, 0]} args={[1.3, 0.05, 1.3]} color="#36591C" isRecShadow={true} />
          <BoxLambert pos={[0, 0, 0]} args={[1.3, .12, 1.3]} color="#272A15" />
          
          <Stairs pos={[.05, .13, .117]} args={[0.5, 0.04, 0.13]} />

          <Road pos={[0.02, 0.11, 0.4]} args={[0.15, 0.015, 0.15]} />
      </group>

      {/* second island */}
      <group>
        <group position={[-0.3, 0.13, -0.6]}>
          <BoxLambert pos={[0, 0.16, 0]} args={[1.3, 0.07, 1.3]} color="#36591C" isRecShadow={true} />
          <BoxLambert pos={[0, 0, 0]} args={[1.3, .25, 1.3]} color="#272A15" />
        </group>

        <Stairs pos={[-0.1, .35, -0.98]} args={[0.65, 0.08, 0.13]} />
        <Stairs pos={[-0.15, .39, -1.01]} args={[0.45, 0.06, 0.07]} />

        <Road pos={[-0.2, 0.33, -0.7]} args={[0.15, 0.015, 0.15]} rot={[0, 0.2, 0]} />
        <Road pos={[-0.35, 0.33, -0.48]} args={[0.15, 0.015, 0.15]} rot={[0, 0.15, 0]} />
        <Road pos={[-0.12, 0.33, -0.2]} args={[0.22, 0.015, 0.22]} />

        <Portal pos={[-0.65, .55, -0.65]} />

        <Chicken pos={[.2, .215, -.5]} rot={[0, -Math.PI / 4, 0]} />
      </group>

      {/* third island */}
      <group>
        <group position={[-0.5, 0.19, -2.2]}>
          <BoxLambert pos={[0.3, 0.23, 0.3]} args={[1.7, 0.09, 1.7]} color="#8A8B37" isRecShadow={true} />
          <BoxLambert pos={[0.3, 0, 0.3]} args={[1.7, .37, 1.7]} color="#272A15" />
        </group>

        <group position={[-0.01, -0.06, -2]} rotation={[0, Math.PI / 2, 0]}>
          <Stairs pos={[-0.1, .54, -0.98]} args={[0.8, 0.1, 0.4]} />
          <Stairs pos={[0.05, .59, -1]} args={[0.7, 0.15, 0.2]} rot={[0, -0.2, 0]} />
        </group>

        <Road pos={[-0.1, 0.47, -1.3]} rot={[0, 0.3, 0]} args={[0.17, 0.015, 0.17]} />
        <Road pos={[-0.25, 0.47, -1.65]} rot={[0, 0.5, 0]} args={[0.2, 0.015, 0.2]} />
        <Road pos={[-0.55, 0.47, -1.9]} rot={[0, 1.2, 0]} args={[0.2, 0.015, 0.2]} />
        <Road pos={[-0.15, 0.47, -2.05]} rot={[0, 1.2, 0]} args={[0.2, 0.015, 0.2]} />
        <Road pos={[-0.1, 0.47, -2.35]} rot={[0, Math.PI/2, 0]} args={[0.22, 0.015, 0.22]} />
      
        <Portal pos={[-0.3, .7, -2.6]} rot={[0, Math.PI / 2, 0]} />

        <Chicken pos={[.2, .355, -2]} rot={[0, 0, 0]} />

        <Tree sca={[.7, 1.3, .7]} pos={[-1.2, .4, -3.7]} kind='cone' />
        <Tree sca={[.5, 1.1, .5]} pos={[-1.2, .47, -5.2]} kind='cone' />
        <Tree sca={[1, 1.2, 1]} pos={[0.4, .43, -2.6]} kind='cone' />
        <Tree sca={[.6, 0.8, .6]} pos={[0.8, .63, -3.7]} kind='cone' />
        <Tree pos={[0.4, .58, -1.5]} />
        <Tree pos={[0.4, .58, -1.25]} />
        <BoxLambert args={[.12, .12, .12]} pos={[0.5, .52, -1.73]} rot={[0, Math.PI / 3, 0]} color='#7A6C5A' />
        <BoxLambert args={[.15, .15, .15]} pos={[0.5, .54, -1.9]} color='#7A6C5A' />
      </group>

      {/* last Island */}
      <group position={[-2.3, 0.27, -2.3]}>
        <BoxLambert pos={[0.3, 0.335, 0.3]} args={[1.9, 0.15, 1.9]} color="#8A8B37" isRecShadow={true} />
        <BoxLambert pos={[0.3, 0, 0.3]} args={[1.9, .52, 1.9]} color="#272A15" />

        <Road pos={[1, 0.42, .25]} rot={[0, 0.2, 0]} args={[0.22, 0.015, 0.22]} />
        <Road pos={[0.55, 0.42, .3]} rot={[0, -.2, 0]} args={[0.26, 0.015, 0.26]} />
        <Road pos={[0.2, 0.42, .2]} rot={[0, .1, 0]} args={[0.22, 0.015, 0.22]} />
        <Road pos={[-0.15, 0.42, .4]} rot={[0, -.1, 0]} args={[0.22, 0.015, 0.22]} />

        <Portal pos={[-0.4, .64, 0.1]} boxPos={[0, 0, 0]} />
        
        <Sheep pos={[.1, .075, -.15]} rot={[0, Math.PI / 3, 0]} />
        <Sheep pos={[.8, .075, .8]} rot={[0, -Math.PI / 3, 0]} />

        <Tree sca={[.8, 1.5, .8]} pos={[-.5, .32, -.5]} kind='cone' />
        <Tree sca={[.7, 1.3, .7]} pos={[-.5, .36, 1.4]} kind='cone' />
        <Tree sca={[.6, 1, .6]} pos={[-.1, .46, 1.7]} kind='cone' />
        <Tree pos={[-.1, .51, -.45]} />
        <Tree pos={[.15, .51, -.45]} />

        <Stone pos={[0.15, .4, 1]} args={[.15, 0]} rot={[0, 12, Math.PI / 2]} />
        <Stone pos={[0.34, .38, 1]} args={[.1, 0]} />
      </group>
    </>
  )
}

export default Island;