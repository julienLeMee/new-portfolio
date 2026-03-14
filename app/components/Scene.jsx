'use client';

import { Canvas } from '@react-three/fiber'
import { useRef, useState, useEffect } from 'react'
import Model from './Model';
import { Environment } from '@react-three/drei'

export default function Index() {
  const [frameloop, setFrameloop] = useState('never');
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFrameloop(entry.isIntersecting ? 'always' : 'never'),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={{ height: '100vh' }}>
      <Canvas
        frameloop={frameloop}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        className='bg-background'
        style={{ height: '100%' }}
      >
        <Model />
        <directionalLight intensity={2} position={[0, 2, 3]} />
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
