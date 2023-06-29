import React from "react";
import Image from 'next/image';
import Button from "./components/button"
import PricingCardF from "./components/pricingcard-free"
import PricingCardP from "./components/pricingcard-pro"
import PricingCardB from "./components/pricingcard-business"
import GameCard from "./components/gamecard"
import { Navbar } from "./components/Navbar";
import img from "../../Portalize/assets/img.jpg";
import first from "../../Portalize/assets/1.png";
import second from "../../Portalize/assets/2.png";
import third from "../../Portalize/assets/3.png";
import side1 from "../../Portalize/assets/side1.png";
import side2 from "../../Portalize/assets/side2.png";
import marketplace from "../../Portalize/assets/marketplace.png";
import community from "../../Portalize/assets/icon-community.png";
import friendly from "../../Portalize/assets/icon-friendly.png";
import marketplaceI from "../../Portalize/assets/icon-marketplace.png";
import Background from ".../../Portalize/assets/background.png"



export default function Home() {
  return (
    <>
     <Navbar/>
      <main className="w-[100vw] font-body bg-Hero bg-contain bg-repeat">
        <div className="hero-section">
          <div className="relative w-[100vw] h-[50vh] md:h-[100vh]">
            <p className="absolute bottom-[55%] w-[85%] left-1/2 md:translate-x-0 -translate-x-1/2 md:left-24 text-5xl xl:text-6xl font-light text-center md:text-start text-white"> <span>Portalize Your</span> <span style={{color: 'rgba(156, 79, 255, 1)', fontWeight: "bold"}}>World</span><br /><span className="font-light text-2xl xl:text-2xl">Influence New Way</span></p>
          </div>
        </div>
        <div style={{marginBottom: "8rem" }} className="hero-section " >
          <div className="relative w-[100vw] h-[100vh] md:h-[30vh]">
            <div className="bg-transparent container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-transparent rounded-lg shadow-lg p-6 flex flex-col h-full">
                <div className="flex items-center justify-center mb-4 mobile-only">
                  <Image className="w-[25vw] mx-auto" src={community} alt="Card Image"/>                  
                </div>
                <div className="flex items-center justify-center mb-4 browser-only">
                  <Image className="w-[8vw] mx-auto" src={community} alt="Card Image"/>                  
                </div>
                <h2 className="text-3xl font-bold mb-2 text-center">Community Based</h2>
                <p className="text-lg text-center">Create 3D Spaces without code knowledge and share your own domain. Explore Many Experiance and Communitys</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-transparent rounded-lg shadow-lg p-6 flex flex-col h-full">
              <div className="flex items-center justify-center mb-4 mobile-only">
                  <Image className="w-[25vw] mx-auto" src={friendly} alt="Card Image"/>                  
                </div>
                <div className="flex items-center justify-center mb-4 browser-only">
                  <Image className="w-[8vw] mx-auto" src={friendly} alt="Card Image"/>                  
                </div>
                <h2 className="text-3xl font-bold mb-2 text-center" >User Friendly</h2>
                <p className="text-lg text-center">Create 3D Spaces without code knowledge and share your own domain. Explore Many Experiance and Communitys</p>
              </div> 
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-transparent rounded-lg shadow-lg p-6 flex flex-col h-full">
              <div className="flex items-center justify-center mb-4 mobile-only">
                  <Image className="w-[25vw] mx-auto" src={marketplaceI} alt="Card Image"/>                  
                </div>
                <div className="flex items-center justify-center mb-4 browser-only">
                  <Image className="w-[8vw] mx-auto" src={marketplaceI} alt="Card Image"/>                  
                </div>
                <h2 className="text-3xl font-bold mb-2 text-center">Marketplace</h2>
                <p className="text-lg text-center">Create 3D Spaces without code knowledge and share your own domain. Explore Many Experiance and Communitys</p>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>     

        <div>

        </div>
        <div  style={{marginTop: ""}} className="relative w-[100vw] h-[100vh] md:h-[20vh] ">
            <p className="absolute bottom-[20%] w-[85%] left-1/2 md:translate-x-0 -translate-x-1/2 md:left-24 text-5xl xl:text-6xl font-bold text-center md:text-start text-white">Explore New Worlds<br/></p>
        </div>
        <div className="container mx-auto px-4">
        <div style={{ scrollbarWidth: 'none'}} className="flex flex-row overflow-x-auto hide-scrollbar background" >
        <div className="flex  space-x-4 " >
            <div style={{ backgroundColor: "#303030", borderRadius: "29px", width: "250px", height: "300px", "@media (max-width: 768px)": { width: "200px", height: "150px" } }} className="max-w-xlg rounded overflow-hidden shadow-lg">
              <Image style={{ borderRadius: "0px 0px 40px 40px", width: "100%", height: "200px", "@media (max-width: 768px)": { width: "150px", height: "150px" } }} src={img} alt="Card Image" />
              <div className="px-6 py-4">
                <div className="font-bold text-3xl mb-2 text-center">Poker House</div>
                <p className="text-white-700 text-center md:text-xs">Community Space</p>
              </div>
            </div>
            
            <div style={{ backgroundColor: "#303030", borderRadius: "29px", width: "250px", height: "300px", "@media (max-width: 768px)": { width: "200px", height: "150px" } }} className="max-w-xlg rounded overflow-hidden shadow-lg">
              <Image style={{ borderRadius: "0px 0px 40px 40px", width: "100%", height: "200px", "@media (max-width: 768px)": { width: "150px", height: "150px" } }} src={img} alt="Card Image" />
              <div className="px-6 py-4">
                <div className="font-bold text-3xl mb-2 text-center">Residence</div>
                <p className="text-white-700 text-center md:text-xs">Art</p>
              </div>
            </div>
            
            <div style={{ backgroundColor: "#303030", borderRadius: "29px", width: "250px", height: "300px", "@media (max-width: 768px)": { width: "200px", height: "150px" } }} className="max-w-xlg rounded overflow-hidden shadow-lg">
              <Image style={{ borderRadius: "0px 0px 40px 40px", width: "100%", height: "200px", "@media (max-width: 768px)": { width: "150px", height: "150px" } }} src={img} alt="Card Image" />
              <div className="px-6 py-4">
                <div className="font-bold text-3xl mb-2 text-center">Boson Pro</div>
                <p className="text-white-700 text-center md:text-xs">Business Space</p>
              </div> 
            </div>

            <div style={{ backgroundColor: "#303030", borderRadius: "29px", width: "250px", height: "300px", "@media (max-width: 768px)": { width: "200px", height: "150px" } }} className="max-w-xlg rounded overflow-hidden shadow-lg">
              <Image style={{ borderRadius: "0px 0px 40px 40px", width: "100%", height: "200px", "@media (max-width: 768px)": { width: "150px", height: "150px" } }} src={img} alt="Card Image" />
              <div className="px-6 py-4">
                <div className="font-bold text-3xl mb-2 text-center">Residence</div>
                <p className="text-white-700 text-center md:text-xs">Art</p>
              </div>
            </div>
            
            <div style={{ backgroundColor: "#303030", borderRadius: "29px", width: "250px", height: "300px", "@media (max-width: 768px)": { width: "200px", height: "150px" } }} className="max-w-xlg rounded overflow-hidden shadow-lg">
              <Image style={{ borderRadius: "0px 0px 40px 40px", width: "100%", height: "200px", "@media (max-width: 768px)": { width: "150px", height: "150px" , order: "-1"} }} src={img} alt="Card Image" />
              <div className="px-6 py-4">
                <div className="font-bold text-3xl mb-2 text-center">Boson Pro</div>
                <p className="text-white-700 text-center md:text-xs">Business Space</p>
              </div> 
            </div>      
        </div>
          </div>
        </div>    
        <div className="relative w-[100vw] h-[20vh] md:h-[20vh] ">
            <p className="absolute bottom-[20%] w-[85%] left-1/2 md:translate-x-0 -translate-x-1/2 md:left-24 text-5xl xl:text-6xl font-bold text-center md:text-start text-white">Featured<br/></p>
        </div>
        <div className="container mx-auto px-4">
        <div style={{ scrollbarWidth: 'none'}} className="flex flex-row overflow-x-auto hide-scrollbar" >
        <div className="flex space-x-5 " >
            <div style={{ backgroundColor: "#303030", borderRadius: "29px", width: "250px", height: "300px", "@media (max-width: 768px)": { width: "200px", height: "150px" } }} className="max-w-xlg rounded overflow-hidden shadow-lg">
              <Image style={{ borderRadius: "0px 0px 40px 40px", width: "100%", height: "200px", "@media (max-width: 768px)": { width: "150px", height: "150px" } }} src={img} alt="Card Image" />
              <div className="px-6 py-4">
                <div className="font-bold text-3xl mb-2 text-center">Poker House</div>
                <p className="text-white-700 text-center md:text-xs">Community Space</p>
              </div>
            </div>
            
            <div style={{ backgroundColor: "#303030", borderRadius: "29px", width: "250px", height: "300px", "@media (max-width: 768px)": { width: "200px", height: "150px" } }} className="max-w-xlg rounded overflow-hidden shadow-lg">
              <Image style={{ borderRadius: "0px 0px 40px 40px", width: "100%", height: "200px", "@media (max-width: 768px)": { width: "150px", height: "150px" } }} src={img} alt="Card Image" />
              <div className="px-6 py-4">
                <div className="font-bold text-3xl mb-2 text-center">Residence</div>
                <p className="text-white-700 text-center md:text-xs">Art</p>
              </div>
            </div>
            
            <div style={{ backgroundColor: "#303030", borderRadius: "29px", width: "250px", height: "300px", "@media (max-width: 768px)": { width: "200px", height: "150px" } }} className="max-w-xlg rounded overflow-hidden shadow-lg">
              <Image style={{ borderRadius: "0px 0px 40px 40px", width: "100%", height: "200px", "@media (max-width: 768px)": { width: "150px", height: "150px" } }} src={img} alt="Card Image" />
              <div className="px-6 py-4">
                <div className="font-bold text-3xl mb-2 text-center">Boson Pro</div>
                <p className="text-white-700 text-center md:text-xs">Business Space</p>
              </div> 
            </div>

            <div style={{ backgroundColor: "#303030", borderRadius: "29px", width: "250px", height: "300px", "@media (max-width: 768px)": { width: "200px", height: "150px" } }} className="max-w-xlg rounded overflow-hidden shadow-lg">
              <Image style={{ borderRadius: "0px 0px 40px 40px", width: "100%", height: "200px", "@media (max-width: 768px)": { width: "150px", height: "150px" } }} src={img} alt="Card Image" />
              <div className="px-6 py-4">
                <div className="font-bold text-3xl mb-2 text-center">Residence</div>
                <p className="text-white-700 text-center md:text-xs">Art</p>
              </div>
            </div>
            
            <div style={{ backgroundColor: "#303030", borderRadius: "29px", width: "250px", height: "300px", "@media (max-width: 768px)": { width: "200px", height: "150px" } }} className="max-w-xlg rounded overflow-hidden shadow-lg">
              <Image style={{ borderRadius: "0px 0px 40px 40px", width: "100%", height: "200px", "@media (max-width: 768px)": { width: "150px", height: "150px" , order: "-1"} }} src={img} alt="Card Image" />
              <div className="px-6 py-4">
                <div className="font-bold text-3xl mb-2 text-center">Boson Pro</div>
                <p className="text-white-700 text-center md:text-xs">Business Space</p>
              </div> 
            </div>      
            </div>
          </div>
        </div>      
      


        {/* mobile section */}
        
      
        <div className="browser-only">
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
            <div className=" sm:relative h-[90vh]">
              <Image src={side2} className="absolute top-[20%] md:top-[50%] md:-translate-y-1/2 z-0 right-0" alt="roombg1"></Image>
            </div>
          </div>
        </div>       
        
        <div className="room-section flex flex-col justify-center items-center" style={{marginTop: "150px" }}>
          <div className="relative w-full h-1/5">
            <p className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 text-5xl xl:text-7xl font-bold text-center text-white">
              <span>MARKETPLACE</span><br />
              <span className="font-light text-2xl xl:text-5xl">ACCESS MILLIONS OF ASSETS</span>
            </p>
          </div>
          <div className="relative w-full h-4/5">
            <div className="h-full flex justify-center items-center">
              <div className="max-h-full">
                <Image src={marketplace} className="object-cover max-w-full max-h-full" alt="roombg1" style={{ borderRadius: '33px', marginTop: "-250px" }}/>
              </div>
            </div>
          </div>
        </div>

        <div className="room-section" style={{marginTop: "-450px" }}>
          <div className="relative w-full h-[100vh] md:h-[80vh] md:grid md:grid-cols-2">
            <div className="flex items-center justify-center md:relative md:w-[40vw] md:h-[80vh]">
              <div className="md:absolute md:inset-0 flex flex-col justify-center md:left-24 z-10 text-2xl font-light sm:text-5xl md:text-6xl text-center md:text-start">
                <span className="font-bold">Ready To Use Templates</span>
                <br />        
                <div className="flex justify-end opacity-50 border border-white block"></div>
                <br />
                <span className="sm:text-4xl" style={{ fontWeight: "lighter", lineHeight: "46px" }}>
                  Create 3D Spaces without code knowledge and share your own domain. Explore Many Experiences and Communities
                </span>
              </div>
            </div>
            <div className="relative">
              <Image src={side1} className="absolute top-1/2 transform -translate-y-1/2 z-0 right-0" alt="roombg1" />
            </div>
          </div>
        </div>


        <div style={{marginTop: "150px" }} className="room-section h-[75vh]">
          <div className="flex justify-center items-center">
            <div className="relative w-[80vw] h-[60vh]">
              <Image src={third} alt="Image 3" className="absolute top-0 left-0 w-full h-full object-cover" style={{ zIndex: 3, top: '40%', borderRadius: "33px", objectPosition: "top center" }}></Image>
              <Image src={second} alt="Image 2" className="absolute top-0 left-0 w-full h-full object-cover" style={{ zIndex: 2, top: '20%', borderRadius: "33px" , objectPosition: "top right"}}></Image>
              <Image src={first} alt="Image 1" className="absolute top-0 left-0 w-full h-full object-cover" style={{ zIndex: 1, borderRadius: "33px", objectPosition: "top right" }}></Image>
            </div>
          </div>
        </div>
        <div className="pricing-section">
          <div className="relative w-[100vw] h-[2400px] md:h-[100vh]">
            <div className="absolute top-[15%] left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-20 text-7xl font-light"><p>Join <span className="font-bold">Today</span></p></div>
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
        </div>
      

      <div className="mobile-only">
      <div style={{marginTop: "80px"}} className="flex items-center justify-center">
        <div className="max-w-md relative w-[80vw] h-[20vh] ">
          <button className="bg-gradient-to-r from-transparent via-transparent to-transparent via-purple-500 bg-clip-text text-transparent border-2 border-gray-700 hover:border-purple-500 hover:bg-purple-500 hover:text-white font-bold py-2 px-4 rounded-full w-full text-white">
            Explore All Spaces
          </button>
       </div>
      </div>
        <div className="room-section">
          <div className="relative w-[100vw] h-[100vh] flex flex-column">
            <div className="block md:relative relative mx-auto w-[80vw] h-[40vh]"> 
              <p className="absolute align-middle top-1/2 -translate-y-1/2  md:left-24 z-10 text-2xl font-light sm:text-5xl md:text-6xl text-center md:text-start w-full">
                <span 
                className="font-bold">Analytics
                </span>
                  <br/>
                  <br/>
                  <div className="flex justify-end opacity-50 border border-white block "></div>
                  <br/>
                <span className="sm:text-3xl" style={{fontWeight:"lighter", lineHeight: "30px"}}>
                Create 3D Spaces without code knowledge and share your own domain. Explore Many Experiance and Communitys
                  </span> 
                </p>
            </div>
            <div style={{height: "100px", backgroundColor: "salmon", }} className="h-[20vh]">
              <Image  src={side2} className="absolute top-[50%]  right-[-50%] -translate-x-1/2 z-0" alt="roombg1"></Image>
            </div>
          </div>
        </div>       
        
        <div style={{marginTop: "480px"}} className="room-section flex flex-col justify-center items-center mx-auto w-[100vw] h-[0vh]">
          <div className="relative w-full h-1/5">
            <p className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 text-5xl xl:text-4xl font-bold text-center text-white ">
              <span>MARKETPLACE</span><br />
              <span className="font-light text-xl">ACCESS MILLIONS OF ASSETS</span>
            </p>
          </div>
          <div className="relative h-screen">
            <div className="flex justify-center items-center h-full">
              <div className="max-w-full max-h-full mx-auto">
                <Image
                  src={marketplace}
                  className="object-cover w-full h-full"
                  alt="roombg1"
                  style={{ borderRadius: '33px' }}
                />
              </div>
            </div>
        </div>

        </div>

        <div className="room-section" >
          <div className="relative w-full h-[100vh]">
            <div className="flex items-center justify-center md:relative mx-auto w-[80vw] h-[100vh]">
              <div className="md:absolute md:inset-0 flex flex-col justify-center md:left-24 z-10 text-2xl font-light sm:text-5xl md:text-6xl text-center md:text-start">
                <span className="font-bold">Ready To Use Templates</span>
                <br />        
                <div className="flex justify-end opacity-50 border border-white block"></div>
                <br />
                <span className="sm:text-4xl" style={{ fontWeight: "lighter", lineHeight: "46px" }}>
                  Create 3D Spaces without code knowledge and share your own domain. Explore Many Experiences and Communities
                </span>
              </div>
            </div>
            <div className="relative  h-[30vh]">
              <Image src={side1} className="absolute top-1/2 transform -translate-y-1/2 z-0 right-0" alt="roombg1" />
            </div>
          </div>
        </div>


        <div style={{marginTop: "480px"}} className="room-section h-[100vh]" >
          <div className="flex justify-center items-center">
            <div className="relative w-[90vw] h-[50vh]">
              <Image src={third} alt="Image 3" className="absolute top-0 left-0 w-full h-full object-cover" style={{ zIndex: 3, top: '40%', borderRadius: "33px", objectPosition: "top left" }}></Image>
              <Image src={second} alt="Image 2" className="absolute top-0 left-0 w-full h-full object-cover" style={{ zIndex: 2, top: '20%', borderRadius: "33px" , objectPosition: "top right"}}></Image>
              <Image src={first} alt="Image 1" className="absolute top-0 left-0 w-full h-full object-cover" style={{ zIndex: 1, borderRadius: "33px", objectPosition: "top right" }}></Image>
            </div>
          </div>
        </div>

        <div  style={{marginTop: "-50px"}} className="pricing-section">
          <div className="relative w-[100vw] h-[100vh] md:h-[100vh]">
            <div className="absolute left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-20 text-7xl font-light"><p>Join <span className="font-bold">Today</span></p></div>
            <div className="absolute grid grid-cols-1 gap-5 bottom-0 top-[30%] md:top-[50%] md:-translate-y-1/2 left-1/2 -translate-x-1/2 scale-90 w-[100vw] justify-center place-items-center">
                <PricingCardF/>
                <PricingCardP/>
                <PricingCardB/>
            </div>
          </div>
        </div>

        <div style={{marginTop: "800px"}} className="cta-section">
          <div className="relative w-[100vw] h-[100vh]">
            <Image src={"/img/landing-page/cta-bg.png"} width={671} height={702} alt="ctabg" className="absolute top-1/2 -translate-y-[40%] left-1/2 -translate-x-1/2"/>
            <div className="absolute top-1/2 -translate-y-1/2 text-center font-extrabold text-4xl md:text-8xl w-full">
              <p className="">JOIN COMMUNITY<br />BUILD TOGETHER</p>
            </div>
          </div>
        </div>
      </div>  
      
      
        
        
      </main>
    </>
  )
}