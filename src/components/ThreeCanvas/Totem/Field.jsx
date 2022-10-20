import { extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import Poppins from "../../../assets/Poppins_Regular.json";

import { Box3 } from "three";
import { useEffect, useRef } from "react";

extend({ TextGeometry });

export default function Field({ text, ...props }) {
  const textRef = useRef();
  const meshRef = useRef();
  const font = new FontLoader().parse(Poppins);
  // configure font geometry
  const textOptions = {
    font,
    size: 0.065,
    height: 0.001,
  };

  const box = new Box3();



  useEffect(() => {
    if (textRef.current?.boundingSphere?.radius) {
      let radius = textRef.current?.boundingSphere?.radius;
      meshRef.current.position.x = -radius;
    }
  }, [textRef.current, textRef.current?.boundingSphere?.radius]);

  return (
    <group {...props}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <textGeometry
          ref={textRef}
          attach="geometry"
          args={[text, textOptions]}
        />
        <meshLambertMaterial attach="material" color={"black"} />
      </mesh>
    </group>
  );
}
