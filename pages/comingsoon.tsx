import * as THREE from 'three'
import React from 'react'
import {Canvas, useLoader} from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import {getProject, types} from '@theatre/core'
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'
import {editable as e,SheetProvider} from '@theatre/r3f'



const ComingSoon = () => {
    const CsSheet = getProject('Portalize').sheet('ComingSoonPage');

    studio.initialize()
    studio.extend(extension)
    
  return (
    <>
        <main>
             <div id='canvas-container' className=''>
                <Canvas camera={PerspectiveCamera}>
                    <SheetProvider sheet={CsSheet}>
                        <e.PerspectiveCamera {{makeDefault=true}} />
                    </SheetProvider>
                </Canvas>
             </div>
        </main>
    </>
  )
}

export default ComingSoon