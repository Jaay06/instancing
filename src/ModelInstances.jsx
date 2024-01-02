import { Instance } from "@react-three/drei"
import React from "react"
// import { Model } from "./Hamburger-draco"
import { data } from "../store"
import { Instances, Model } from "./Hamburger-draco"
import * as THREE from "three"
import { RigidBody, InstancedRigidBodies } from "@react-three/rapier"

const burgers = Array.from({ length: 200 }, () => ({
  position: [
    THREE.MathUtils.randFloatSpread(10),
    THREE.MathUtils.randFloatSpread(10) + 5,
    THREE.MathUtils.randFloatSpread(10),
  ],
  rotation: [
    Math.random() * Math.PI * 2,
    Math.random() * Math.PI * 2,
    Math.random() * Math.PI * 2,
  ],
  scale: (0.5 - Math.random()) * 2 * 0.2,
  count: 200,
}))

const ModelInstances = () => {
  return (
    <>
      <Instances>
        {burgers.map((props, index) => (
          <Model key={index} {...props} />
        ))}
      </Instances>

      {/* <RigidBody>
        <mesh position={[0, 4, 0]}>
          <boxGeometry />
          <meshBasicMaterial />
        </mesh>
      </RigidBody> */}
    </>
  )
}

export default ModelInstances
