import React, { useRef } from "react";
import { useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";
// import { useControls } from "leva";

export default function Model() {
  const { nodes } = useGLTF("/medias/torus.glb");
  const { viewport } = useThree();
  const torus = useRef(null);

//   const materialProps = useControls({
//     thickness: { value: 2, min: 0, max: 3, step: 0.05 },

//     roughness: { value: 0.5, min: 0, max: 1, step: 0.1 },

//     transmission: { value: 1, min: 0, max: 1, step: 0.1 },

//     ior: { value: 1, min: 0, max: 3, step: 0.1 },

//     chromaticAberration: { value: 1, min: 0, max: 1 },

//     clearcoat: { value: 1, min: 0, max: 1, step: 0.1 },

//     clearcoatRoughness: { value: 1, min: 0, max: 1, step: 0.1 },

//     backside: { value: true },
//   });

  // Définit les propriétés du matériau sans utiliser les controls de 'leva'
  const materialProps = {
    thickness: 2,
    roughness: 0.5,
    transmission: 1,
    ior: 1,
    chromaticAberration: 1,
    clearcoat: 1,
    clearcoatRoughness: 1,
    backside: true,
  };

  useFrame(() => {
    torus.current.rotation.x += 0.002;
    torus.current.rotation.z += 0.002;
  });

  return (
    <group scale={viewport.width / 3.75}>
      <mesh ref={torus} {...nodes.ToreSurf} scale={[0.8, 0.8, 0.8]}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}
