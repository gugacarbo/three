import { useLoader } from "@react-three/fiber";
import { useContext } from "react";
import { TextureLoader } from "three";
import TotemContext from "../../../context/TotemContext";

export default function Qr({ img, ...props }) {
  const { qr } = useContext(TotemContext);
  
  const texture = useLoader(TextureLoader, qr);

  return (
    <group {...props}>
      <mesh receiveShadow position={[0, 0.27, 0.01]}>
        <planeGeometry attach="geometry" args={[0.94, 0.94]} />

        <meshBasicMaterial
          attach="material"
          color={"#fff"}
          map={texture}
          side={2}
        />
      </mesh>
    </group>
  );
}
