'use client';

import { Canvas } from '@react-three/fiber'
import { useRef, useState, useCallback, useEffect } from 'react'
import HeroModel from './HeroModel';
import { Environment } from '@react-three/drei'

export default function Index() {
  const [frameloop, setFrameloop] = useState('always');
  const observerRef = useRef(null);

  const handleCreated = useCallback(({ gl }) => {
    const canvas = gl.domElement;
    const observer = new IntersectionObserver(
      ([entry]) => setFrameloop(entry.isIntersecting ? 'always' : 'never'),
      { threshold: 0 }
    );
    observer.observe(canvas);
    observerRef.current = observer;
  }, []);

  useEffect(() => {
    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <Canvas
      frameloop={frameloop}
      dpr={[1, 2]}
      performance={{ min: 0.5 }}
      onCreated={handleCreated}
      className='custom-hero__canvas bg-transparent opacity-25 -z-10 md:-top-1/2 -top-3/4'
      style={{ overflow: 'visible', position: 'absolute', right: '0', height: '100vh' }}
    >
      <HeroModel />
      <directionalLight intensity={2} position={[0, 2, 3]} />
      <Environment preset="city" />
    </Canvas>
  )
}
