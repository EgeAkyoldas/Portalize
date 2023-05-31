import { PerspectiveCamera, useGLTF, Preload } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { getProject } from '@theatre/core'
import { SheetProvider, editable as e } from '@theatre/r3f'
import ex from '@theatre/r3f/dist/extension'
import studio from '@theatre/studio'
import React, {Suspense} from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {Model} from './components/Model'
import Image from 'next/image'

const ComingSoon = () => {
  
  return (
    <>
        <main className='relative top-0 left-0'>
             <div id='canvas-container' className='sticky top-0 left-0'>
                <ComingSoonCanvas/>
                
             </div>
             <div className="absolute top-2 left-2"><Image src={"/img/logo.png"} width={218} height={38} alt={"Logo"}/></div>
             <div></div>
        </main>
    </>
  )
}

var ComingSoonCanvas = () => {
    return(
        <Canvas className='!h-[100vh] m-0'>
          <ambientLight intensity={.1} position={[0,0,0]} color={"gold"}/>
          <pointLight intensity={1} position={[0,0,0]} />
          <PerspectiveCamera makeDefault={true} position={[0,4,0]} near={0.001} far={999} fov={80}/>
          <Suspense fallback={null}>
                  <Model />
                  <Preload all/>
                </Suspense>
          {/* <EffectComposer>
            <DepthOfField focusDistance={1} focalLength={50} bokehScale={1} height={480} />
            <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
            <Noise opacity={0.1} />
            <Vignette eskil={false} offset={0.2 } darkness={.91} />
          </EffectComposer> */}
        </Canvas>
    )
}
export default ComingSoon