import Image from 'next/image'
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import Header from './components/header'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import Link from 'next/link'
import Slider from './components/slider'

const images = [
  "/ascent.jpg",
  "/ascent.jpg",
  "/ascent.jpg",
  "/ascent.jpg",
  "/ascent.jpg",
]

const links = [
  "/ascent.jpg",
  "/ascent.jpg",
  "/ascent.jpg",
  "/ascent.jpg",
  "/ascent.jpg",
]

export default function Home() {
  
  return (
    <div className="h-screen bg-fixed bg-center bg-cover bg-red-700 flex-col flex overflow-hidden">
      <div className='h-screen sm:pt-[10%]  sm:scale-95'>
        <Slider slides={images} links={links}/>
      </div>
    </div>
  )
}


