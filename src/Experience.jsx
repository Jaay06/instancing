import React from "react"
import { GizmoHelper, OrbitControls } from "@react-three/drei"
import Floor from "./Floor"
import ModelInstances from "./ModelInstances"
import { Physics } from "@react-three/rapier"
import { Perf } from "r3f-perf"

const Experience = () => {
  return (
    <>
      <Perf position="top-left" />
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight />

      <Physics debug>
        <ModelInstances />
        <Floor />
        <GizmoHelper />
      </Physics>
    </>
  )
}

export default Experience
