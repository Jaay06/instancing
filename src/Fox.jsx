/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 Fox.glb --transform 
Files: Fox.glb [162.86KB] > Fox-transformed.glb [90.3KB] (45%)
*/

import React, { useRef, useState } from "react"
import { useGLTF, useAnimations, Instance, Instances } from "@react-three/drei"
import * as THREE from "three"

export function Model({ data }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF("/Fox-transformed.glb")
  return (
    <Instances
      range={100}
      material={materials.fox_material}
      geometry={nodes.fox.geometry}
    >
      <group position={[0, 0, 0]}>
        {data.map((props, i) => (
          <Fox key={i} {...props} />
        ))}
      </group>
    </Instances>
  )
}
useGLTF.preload("/Fox-transformed.glb")

const Fox = ({ random, color = new THREE.Color(), ...props }) => {
  const [hover, setHover] = useState(false)
  return (
    <group {...props}>
      <Instance
        scale={[0.01, 0.01, 0.01]}
        onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
      />
    </group>
  )
}
