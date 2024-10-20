import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

export default function ParticlesComponent() {
  const particlesRef = useRef();
  const particleCount = 1000;
  const particlePositions = new Float32Array(particleCount * 3);

  // Initialisation des positions des particules
  useEffect(() => {
    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      particlePositions.set([x, y, z], i * 3);
    }
    particlesRef.current.geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );
  }, []);

  // Animation des particules
  useFrame(() => {
    const positions = particlesRef.current.geometry.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3 + 1] -= 0.01; // Mouvement vertical des particules
      if (positions[i * 3 + 1] < -5) {
        positions[i * 3 + 1] = 5; // Remet en haut si elle descend trop bas
      }
    }
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry />
      <pointsMaterial
        size={0.05}
        color={'#e3afbe'}
        transparent
        opacity={0.8}
      />
    </points>
  );
}
