import Side from "./Side";
import Field from "./Field";
import Qr from "./Qr";
import { useContext, useRef, useState } from "react";
import TotemContext from "../../../context/TotemContext";
import { useFrame } from "@react-three/fiber";

export default function Totem(props) {
  const { imgs, spinning, speed } = useContext(TotemContext);
  const [rotation, setRotation] = useState(0);

  useFrame(() => {
    if (spinning) {
      setRotation((rotation) => rotation + parseFloat(speed));
    }
  });
  const myMesh = useRef();
  return (
    <group ref={myMesh} {...props} rotation={[0, rotation, 0]}>
      <group position={[-0.0, 0, -0.248]}>
        <Side
          rotation={[0, -2.0944, 0]}
          position={[-0.5, 0, -0]}
          img={imgs[0]}
        />
        <group>
          <Side position={[0, 0, 0.866]} img={imgs[1]} />
          <Qr position={[0, 0, 0.866]} />
          <TextFields />
        </group>

        <Side rotation={[0, 2.0944, 0]} position={[0.5, 0, -0]} img={imgs[2]} />
      </group>
      {/* <primitive object={new THREE.AxesHelper(10)} /> */}
    </group>
  );
}

function TextFields() {
  const { name, keyString, keyType } = useContext(TotemContext);

  return (
    <group position={[0, -0.54, 0.866]}>
      <Field position={[0, 0, 0]} text={keyString} />
      <Field position={[0, -0.308, 0]} text={keyType} />
      <Field position={[0, -0.620, 0]} text={name} />
    </group>
  );
}
