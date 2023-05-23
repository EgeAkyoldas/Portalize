import React from "react";
import Button from "./components/button"


export default function Home() {
  return (
    <>
      <main>
        <div id="hero-section">
          <div className="relative w-[100vw] h-[100vh] ">
            <p className="absolute bottom-[25%] left-3 md:left-24 text-5xl font-light">Create your 3D Space<br /><span className="font-bold text-2xl">With No-Code System</span><br /><span className="text-lg leading-3">Create 3D spaces without code knowledge and share your own domain. <br /> Explore Many Experiance and Communitys</span></p>
            <span className="absolute left-[50%] -translate-x-1/2 md:translate-x-0 md:left-24 bottom-[16%] md:bottom-[18%]"><Button>LAUNCH EDITOR</Button></span>
          </div>
        </div>
      </main>
    </>
  )
}