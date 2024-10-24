'use client';

import { Canvas } from '@react-three/fiber'

import HeroModel from './HeroModel';

import { Environment } from '@react-three/drei'



export default function Index() {

  return (

    <Canvas className='custom-hero__canvas bg-transparent opacity-25 -z-10 md:-top-1/2 -top-3/4' style={{overflow: 'visible', position: 'absolute', right: '0', height:'100vh'}}>

        <HeroModel />

        <directionalLight intensity={2} position={[0, 2, 3]}/>

        <Environment preset="city" />

    </Canvas>

  )

}
