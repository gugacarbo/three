import { Canvas } from "@react-three/fiber";
import Totem from "./Totem";
import CameraController from "../CameraController";

function ThreeCanvas() {
  return (
      <Canvas>
        <CameraController />
        <ambientLight />
        <pointLight position={[-10, 10, 10]} />
        <Totem />
        {/* <primitive object={new THREE.AxesHelper(10)} /> */}
      </Canvas>
  );
}

export default ThreeCanvas;
