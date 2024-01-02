/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 hamburger.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/hamburger.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.bottomBun.geometry} material={materials.BunMaterial} />
      <mesh geometry={nodes.meat.geometry} material={materials.SteakMaterial} position={[0, 2.817, 0]} />
      <mesh geometry={nodes.cheese.geometry} material={materials.CheeseMaterial} position={[0, 3.04, 0]} />
      <mesh geometry={nodes.topBun.geometry} material={materials.BunMaterial} position={[0, 1.771, 0]} />
    </group>
  )
}

useGLTF.preload('/hamburger.glb')