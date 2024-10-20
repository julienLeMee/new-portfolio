import React, { useRef } from 'react'
import { useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber'
import { MeshTransmissionMaterial } from "@react-three/drei";

export default function Model() {
    const { nodes } = useGLTF("/medias/torus.glb");
    const { viewport } = useThree();
    const torus = useRef(null);

    // Définit les propriétés du matériau sans utiliser les controls de 'leva'
    const materialProps = {
        thickness: 0.2,
        roughness: 0,
        transmission: 1,
        ior: 1.2,
        chromaticAberration: 0.02,
        backside: true,
    };

    useFrame(() => {
        torus.current.rotation.x += 0.005;
        torus.current.rotation.z += 0.005;
    });

    return (
        <group scale={viewport.width / 3.75}>
            <mesh ref={torus} {...nodes.ToreSurf} scale={[0.8, 0.8, 0.8]}>
                <MeshTransmissionMaterial {...materialProps} />
            </mesh>
        </group>
    );
}
