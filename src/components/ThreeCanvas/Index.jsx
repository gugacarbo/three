import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useLoader, useFrame, useThree } from "@react-three/fiber";
import B1 from "../../assets/B1.jpeg";
import B2 from "../../assets/B2.jpeg";
import B3 from "../../assets/B3.jpeg";
import W1 from "../../assets/W1.jpeg";
import W2 from "../../assets/W2.jpeg";
import W3 from "../../assets/W3.jpeg";
import { TextureLoader } from "three";
import styled from "styled-components";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const TotemBlack = [B1, B2, B3];
const TotemBlack2 = [W1, W2, W3];

function ThreeCanvas() {
  const [TotemImgs, SetTotemImgs] = useState(TotemBlack);
  const [spin, setSpin] = useState(false);
  const [speed, setSpeed] = useState(0.01);

  return (
    <>
      <Canvas>
        <ambientLight />
        <CameraController />
        <pointLight position={[-10, 10, 10]} />
        <Totem imgs={TotemImgs} spin={spin} speed={speed} />
        <primitive object={new THREE.AxesHelper(10)} />
      </Canvas>
      <ButtonBox>
        <Button
          onClick={() => {
            SetTotemImgs((img) => {
              if (img === TotemBlack) {
                return TotemBlack2;
              } else {
                return TotemBlack;
              }
            });
          }}
        >
          Trocar
        </Button>
        <Button
          onClick={() => {
            setSpin((spinning) => !spinning);
          }}
        >
          girar
        </Button>
        <input
          type="number"
          min={0.01}
          max={0.1}
          value={speed}
          onChange={(e) => {
            setSpeed(e.target.value);
          }}
          step={0.01}
        />
      </ButtonBox>
    </>
  );
}

export default ThreeCanvas;

const ButtonBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`;

const Button = styled.button``;



function Totem({ imgs, spin, speed, ...props }) {
  const [rotation, setRotation] = useState(0);

  useFrame(({ clock }) => {
    if (spin) {
      setRotation((rotation) => rotation + parseFloat(speed));
    }
  });
  const myMesh = useRef();
  return (
    <group
      ref={myMesh}
      {...props}
      position={[0, 0, 0]}
      rotation={[0, rotation, 0]}
    >
      <group position={[-0.0, 0, -0.248]}>
        <Side
          rotation={[0, -2.0944, 0]}
          position={[-0.5, 0, -0]}
          img={imgs[0]}
        />
        <Side rotation={[0, 0, 0]} position={[0, 0, 0.866]} img={imgs[1]} />
        <Side rotation={[0, 2.0944, 0]} position={[0.5, 0, -0]} img={imgs[2]} />
      </group>
      <primitive object={new THREE.AxesHelper(10)} />
    </group>
  );
}

function Side(props) {
  const texture = useLoader(TextureLoader, props.img);

  return (
    <mesh {...props} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[2, 3.8]} />

      <meshBasicMaterial
        attach="material"
        color={"#fff"}
        map={texture}
        side={2}
      />
    </mesh>
  );
}

import * as THREE from "three";

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};
