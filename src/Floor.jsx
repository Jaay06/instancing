import React from "react"
import * as THREE from "three"
import { useControls } from "leva"
import { RigidBody } from "@react-three/rapier"

const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
const floorMaterial = new THREE.MeshBasicMaterial({ color: "brown" })
const wallMaterial = new THREE.MeshStandardMaterial({ color: "pink" })

const Wall = (props) => {
  return (
    <>
      <mesh geometry={boxGeometry} material={wallMaterial} {...props} />
    </>
  )
}

const Floor = () => {
  const { position, scale } = useControls("walls", {
    position: {
      value: { x: 1, y: 1, z: 1 },
      step: 0.01,
      min: -10,
      max: 10,
    },
    scale: {
      value: { x: 1, y: 1, z: 1 },
      step: 0.01,
      min: 0.1,
      max: 10,
    },
  })

  return (
    <>
      <group>
        {/* //top wall */}
        <Wall scale={[5.6, 2.5, 0.4]} position={[0.06, 1.25, -2.5]} />
        {/* bottom wall */}

        <Wall scale={[5.6, 2.5, 0.4]} position={[0.06, 1.25, 2.5]} />

        {/* //right wall */}
        <Wall scale={[0.2, 2.5, 5]} position={[2.559, 1.36, 0.02]} />
        {/* // left wall */}
        <Wall scale={[0.2, 2.5, 5]} position={[-2.65, 1.25, 0]} />
        <RigidBody type="fixed" restitution={0.2} friction={0}>
          <mesh
            geometry={boxGeometry}
            material={floorMaterial}
            scale={[5, 0.2, 5]}
          />
        </RigidBody>
      </group>
    </>
  )
}

export default Floor
