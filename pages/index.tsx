import Image from 'next/image'
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import Header from './components/header'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import Slider from './components/slider'



export default function Home() {
  return (
    <div className="h-screen bg-fixed bg-center bg-cover bg-red-700 flex-col flex overflow-hidden">
      <Header/>
      <div className='h-screen md:scale-75 '>
        <Slider 
          bg={["skins", "skins", "skins", "skins", "skins"]}
          links={["/classic", "/classic", "/classic", "/classic", "/classic"]}
          buttonTexts={["Play", "Play", "Play", "Play", "Play",]}
          texts={["GUESS THE MAP", "GUESS THE ABILITY", "GUESS THE QUOTE", "GUESS THE BUNDLE", "GUESS THE AGENT"]}
        />
      </div>
    </div>
  )
}


