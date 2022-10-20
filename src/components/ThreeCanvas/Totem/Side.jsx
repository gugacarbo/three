import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function Side({ img, ...props }) {
  const texture = useLoader(TextureLoader, img);

  return (
    <group {...props}>
      <mesh receiveShadow>
        <planeGeometry attach="geometry" args={[2, 3.8]} />

        <meshBasicMaterial
          attach="material"
          color={"#fff"}
          map={texture}
          side={2}
        />
      </mesh>
      <mesh receiveShadow position={[0, 0, -0.01]}>
        <planeGeometry attach="geometry" args={[1.95, 3.75]} />
        <meshBasicMaterial attach="material" color={"#fff"} side={2} />
      </mesh>
    </group>
  );
}
