'use client';

import { Canvas } from '@react-three/fiber'

import HeroModel from './HeroModel';

import { Environment } from '@react-three/drei'



export default function Index() {

  return (

    <Canvas className='bg-transparent -z-10' style={{position: 'absolute', right: '0'}}>

        <HeroModel />

        <directionalLight intensity={2} position={[0, 2, 3]}/>

        <Environment preset="city" />

    </Canvas>

  )

}
