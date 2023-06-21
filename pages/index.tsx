import React from "react";
import Image from 'next/image';
import Button from "./components/button"
import PricingCardF from "./components/pricingcard-free"
import PricingCardP from "./components/pricingcard-pro"
import PricingCardB from "./components/pricingcard-business"
import GameCard from "./components/gamecard"
import { Navbar } from "./components/Navbar";
import img from "../../Portalize/assets/img.jpg";


export default function Home() {
  return (
    <>
     <Navbar/>
      <main className="w-[100vw] font-body bg-Hero bg-contain bg-repeat">
        <div className="hero-section">
          <div className="relative w-[100vw] h-[80vh]">
            <p className="absolute bottom-[65%] w-[85%] left-1/2 md:translate-x-0 -translate-x-1/2 md:left-24 text-5xl xl:text-6xl font-light text-center md:text-start text-white"> <span>Portalize Your</span> <span style={{color: 'rgba(156, 79, 255, 1)', fontWeight: "bold"}}>World</span><br /><span className="font-light text-2xl xl:text-2xl">Influence New Way</span></p>
          </div>
        </div>
        <div className="hero-section">
          <div className="relative w-[100vw] h-[30vh] ">
            <div className="bg-transparent container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-transparent rounded-lg shadow-lg p-6 flex flex-col h-full">
                <div className="flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-2 text-center">Community Based</h2>
                <p className="text-lg text-center">Create 3D Spaces without code knowledge and share your own domain. Explore Many Experiance and Communitys</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-transparent rounded-lg shadow-lg p-6 flex flex-col h-full">
                <div className="flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-2 text-center" >User Friendly</h2>
                <p className="text-lg text-center">Create 3D Spaces without code knowledge and share your own domain. Explore Many Experiance and Communitys</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-transparent rounded-lg shadow-lg p-6 flex flex-col h-full">
                <div className="flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-2 text-center">Marketplace</h2>
                <p className="text-lg text-center">Create 3D Spaces without code knowledge and share your own domain. Explore Many Experiance and Communitys</p>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
        <div className="cta-section">
        <div className="relative w-[100vw] h-[30vh]">
            <p className="absolute bottom-[10%] w-[85%] left-1/2 md:translate-x-0 -translate-x-1/2 md:left-24 text-5xl xl:text-6xl font-bold text-center md:text-start text-white">Explore New Worlds<br/></p>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-row  ">
            <div className="flex space-x-10">
              <div style={{backgroundColor:"#303030", borderRadius: "29px"}} className="max-w-xlg rounded overflow-hidden shadow-lg">
              <Image style={{borderRadius: "0px 0px 40px 40px"}} className="w-full" src={img} alt="Card Image" height={200}/>
              <div className="px-6 py-4">
                <div className="font-bold text-3xl mb-2 text-center">Poker House</div>
                    <p className="text-white-700 text-center">Community Space</p>
                </div>
              </div>
              <div style={{backgroundColor:"#303030", borderRadius: "29px"}} className="max-w-xlg rounded overflow-hidden shadow-lg">
              <Image style={{borderRadius: "0px 0px 40px 40px"}} className="w-full" src={img} alt="Card Image"  height={200}/>
              <div className="px-6 py-4">
                <div className="font-bold text-3xl mb-2 text-center">Residance</div>
                    <p className="text-white-700 text-center">Art</p>
                </div>
              </div>
              <div style={{backgroundColor:"#303030", borderRadius: "29px"}} className="max-w-xlg rounded overflow-hidden shadow-lg">
              <Image style={{borderRadius: "0px 0px 40px 40px"}} className="w-full" src={img} alt="Card Image"  height={200}/>
              <div className="px-6 py-4">
                <div className="font-bold text-3xl mb-2 text-center">Boson Pro</div>
                    <p className="text-white-700 text-center">Business Space</p>
                </div>
              </div>
              <div style={{backgroundColor:"#303030", borderRadius: "29px"}} className="max-w-xlg rounded overflow-hidden shadow-lg">
              <Image style={{borderRadius: "0px 0px 40px 40px"}} className="w-full" src={img} alt="Card Image"  height={200}/>
              <div className="px-6 py-4">
                <div className="font-bold text-3xl mb-2 text-center">Neon Club</div>
                    <p className="text-white-700 text-center">Music</p>
                </div>
              </div>
              <div style={{backgroundColor:"#303030", borderRadius: "29px"}} className="max-w-xlg rounded overflow-hidden shadow-lg">
              <Image style={{borderRadius: "0px 0px 40px 40px"}} className="w-full" src={img} alt="Card Image"  height={200}/>
              <div className="px-6 py-4">
                <div className="font-bold text-3xl mb-2 text-center">Soul Magic</div>
                    <p className="text-white-700 text-center">Game</p>
                </div>
              </div>         
            </div>
          </div>
        </div>
        <div className="relative w-[100vw] h-[15vh] ">
            <p className="absolute bottom-[20%] w-[85%] left-1/2 md:translate-x-0 -translate-x-1/2 md:left-24 text-5xl xl:text-6xl font-bold text-center md:text-start text-white">Featured<br/></p>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-row  ">
            <div className="flex space-x-10">
              <div style={{backgroundColor:"#303030", borderRadius: "29px"}} className="max-w-xlg rounded overflow-hidden shadow-lg">
              <Image style={{borderRadius: "0px 0px 40px 40px"}} className="w-full" src={img} alt="Card Image" height={200}/>
              <div className="px-6 py-4">
                <div className="font-bold text-3xl mb-2 text-center">Poker House</div>
                    <p className="text-white-700 text-center">Community Space</p>
                </div>
              </div>
              <div style={{backgroundColor:"#303030", borderRadius: "29px"}} className="max-w-xlg rounded overflow-hidden shadow-lg">
              <Image style={{borderRadius: "0px 0px 40px 40px"}} className="w-full" src={img} alt="Card Image"  height={200}/>
              <div className="px-6 py-4">
                <div className="font-bold text-3xl mb-2 text-center">Residance</div>
                    <p className="text-white-700 text-center">Art</p>
                </div>
              </div>
              <div style={{backgroundColor:"#303030", borderRadius: "29px"}} className="max-w-xlg rounded overflow-hidden shadow-lg">
              <Image style={{borderRadius: "0px 0px 40px 40px"}} className="w-full" src={img} alt="Card Image"  height={200}/>
              <div className="px-6 py-4">
                <div className="font-bold text-3xl mb-2 text-center">Boson Pro</div>
                    <p className="text-white-700 text-center">Business Space</p>
                </div>
              </div>
              <div style={{backgroundColor:"#303030", borderRadius: "29px"}} className="max-w-xlg rounded overflow-hidden shadow-lg">
              <Image style={{borderRadius: "0px 0px 40px 40px"}} className="w-full" src={img} alt="Card Image"  height={200}/>
              <div className="px-6 py-4">
                <div className="font-bold text-3xl mb-2 text-center">Neon Club</div>
                    <p className="text-white-700 text-center">Music</p>
                </div>
              </div>
              <div style={{backgroundColor:"#303030", borderRadius: "29px"}} className="max-w-xlg rounded overflow-hidden shadow-lg">
              <Image style={{borderRadius: "0px 0px 40px 40px"}} className="w-full" src={img} alt="Card Image"  height={200}/>
              <div className="px-6 py-4">
                <div className="font-bold text-3xl mb-2 text-center">Soul Magic</div>
                    <p className="text-white-700 text-center">Game</p>
                </div>
              </div>         
            </div>
          </div>
        </div>       
      </div>
      <div style={{marginTop: "80px"}} className="flex items-center justify-center">
        <div className="max-w-md relative w-[80vw] h-[20vh] ">
          <button className="bg-gradient-to-r from-transparent via-transparent to-transparent via-purple-500 bg-clip-text text-transparent border-2 border-gray-700 hover:border-purple-500 hover:bg-purple-500 hover:text-white font-bold py-2 px-4 rounded-full w-full text-white">
            Explore All Spaces
          </button>
       </div>
      </div>
        <div className="room-section">
          <div className="relative w-[100vw] h-[100vh] md:h-[80vh] md:grid md:grid-cols-2">
            <div className="block md:relative relative w-[40vw] h-[80vh]"> 
              <p className="absolute align-middle top-1/2 -translate-y-1/2  md:left-24 z-10 text-2xl font-light sm:text-5xl md:text-6xl text-center md:text-start w-full">
                <span 
                className="font-bold">Analytics
                </span>
                  <br/>
                  <br/>
                  <div className="flex justify-end opacity-50 border border-white block "></div>
                  <br/>
                <span className="sm:text-4xl" style={{fontWeight:"lighter", lineHeight: "46px"}}>
                Create 3D Spaces without code knowledge and share your own domain. Explore Many Experiance and Communitys
                  </span> 
                </p>
            </div>
            <div className="block md:relative">
              <Image src={"/img/landing-page/room-bg1.png"} className="absolute top-[20%] md:top-[50%] md:-translate-y-1/2 z-0 right-0" alt="roombg1" width={1164} height={615} quality={80}></Image>
            </div>
          </div>
        </div>       
        
        <div className="room-section h-[80vh]">
        <div className="relative w-[100vw] h-[20vh]">     
        <p className="absolute w-[85%] left-1/2 md:translate-x-0 -translate-x-1/2 md:left-24 text-5xl xl:text-7xl font-bold text-center md:text-center text-white"> <span>MARKETPLACE</span><br /><span className="font-light text-2xl xl:text-5xl">ACSESS MILLIONS OF ASSET</span></p>
          </div>
          <div className="flex justify-center items-center w-[100%]">
              <Image src={"/img/landing-page/room-bg1.png"} className="relative top-[20%] md:top-[50%] z-0 " alt="roombg1" width={1164} height={615} quality={80}></Image>
            </div>
        </div>

        <div className="room-section">
          <div className="relative w-[100vw] h-[100vh] md:h-[80vh] md:grid md:grid-cols-2">
            <div className="block md:relative relative w-[40vw] h-[80vh]"> 
              <p className="absolute align-middle top-1/2 -translate-y-1/2  md:left-24 z-10 text-2xl font-light sm:text-5xl md:text-6xl text-center md:text-start w-full">
                <span 
                className="font-bold">Ready To Use Templates
                </span>
                  <br/>
                  <br/>
                  <div className="flex justify-end opacity-50 border border-white block "></div>
                  <br/>
                <span className="sm:text-4xl" style={{fontWeight:"lighter", lineHeight: "46px"}}>
                Create 3D Spaces without code knowledge and share your own domain. Explore Many Experiance and Communitys
                  </span> 
                </p>
            </div>
            <div className="block md:relative">
              <Image src={"/img/landing-page/room-bg1.png"} className="absolute top-[20%] md:top-[50%] md:-translate-y-1/2 z-0 right-0" alt="roombg1" width={1164} height={615} quality={80}></Image>
            </div>
          </div>
        </div>

            <div className="room-section h-[75vh]">
              <div className="flex justify-center items-center">
              <div className="relative w-[60vw] h-[50vh]">
                <Image src={img} alt="Image 1" className="absolute top-0 left-0 w-full h-full object-cover " width={1164} height={300} quality={80} style={{ zIndex: 1 , borderRadius: "33px"}}></Image>
                <Image src={img} alt="Image 1" className="absolute top-0 left-0 w-full h-full object-cover" width={1164} height={300} quality={80} style={{ zIndex: 2, top: '20%', borderRadius: "33px" }}></Image>
                <Image src={img} alt="Image 1" className="absolute top-0 left-0 w-full h-full object-cover" width={1164} height={300} quality={80} style={{ zIndex: 3, top: '40%', borderRadius: "33px" }}></Image>   
              </div>
              </div>
            </div>

        <div className="pricing-section">
          <div className="relative w-[100vw] h-[2400px] md:h-[100vh]">
            <div className="absolute top-[10%] left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-20 text-7xl font-light"><p>Join <span className="font-bold">Today</span></p></div>
            <div className="absolute grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-3 bottom-0 top-[15%] md:top-[50%] md:-translate-y-1/2 left-1/2 -translate-x-1/2 scale-90 w-[100vw] justify-center place-items-center">
                <PricingCardF/>
                <PricingCardP/>
                <PricingCardB/>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <div className="relative w-[100vw] h-[100vh]">
            <Image src={"/img/landing-page/cta-bg.png"} width={671} height={702} alt="ctabg" className="absolute top-1/2 -translate-y-[40%] left-1/2 -translate-x-1/2"/>
            <div className="absolute top-1/2 -translate-y-1/2 text-center font-extrabold text-4xl md:text-8xl w-full">
              <p className="">JOIN COMMUNITY<br />BUILD TOGETHER</p>
            </div>
          </div>
        </div>
        
      </main>
    </>
  )
}