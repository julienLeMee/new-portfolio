'use client';

import { Canvas } from '@react-three/fiber'

import HeroModel from './HeroModel';

import { Environment } from '@react-three/drei'



export default function Index() {

  return (

    <Canvas className='custom-hero__canvas bg-transparent dark:opacity-100 opacity-25 -z-10' style={{overflow: 'visible', position: 'absolute', right: '0', height:'100vh'}}>

        <HeroModel />

        <directionalLight intensity={2} position={[0, 2, 3]}/>

        <Environment preset="city" />

    </Canvas>

  )

}
