import ReactDOM from "react-dom/client"
import "./style.css"
import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 7, 6],
      }}
    >
      <Experience />
    </Canvas>
  </>
)
