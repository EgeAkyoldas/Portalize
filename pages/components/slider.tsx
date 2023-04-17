import { KeenSliderInstance, KeenSliderPlugin, TrackDetails, useKeenSlider } from 'keen-slider/react'
import React, { useState } from 'react'
import Link from 'next/link'

interface SlideProps {
  bg: string[]
  links: string[]
  buttonTexts: string[]
  texts: string []
}

const AdaptiveHeight: KeenSliderPlugin = (slider) => {
    function updateHeight() {
      slider.container.style.height =
        slider.slides[slider.track.details.rel].offsetHeight + "px"
    }
    slider.on("created", updateHeight)
    slider.on("slideChanged", updateHeight)
  }

  function SetButtonTexts (slideProps:SlideProps) {
      if (slideProps.buttonTexts.length == 0) return {}
      for (let index = 0; index < slideProps.buttonTexts.length; index++) {
        const element = document.getElementById(`button-${index}`);
        if(element == null) return {}
        element.innerHTML = slideProps.buttonTexts[index];
      }
  };

  function SetText (slider:KeenSliderInstance, slideProps:SlideProps) {
    if (slideProps.texts.length == 0) return {}
    for (let index = 0; index < slideProps.texts.length; index++) {
      const element = document.getElementById(`text-${index}`);
      if(element == null) return {}
      element.innerHTML = slideProps.texts[index];
    }
};

const Slider = (slideProps:SlideProps) => {
    const [details, setDetails] = React.useState<TrackDetails | null>(null)
    const [loaded, setLoaded] = useState(false)
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [screenWidth, setScreenWidth] = React.useState(0)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: 'free-snap',
        slides: {
            perView:1,
            origin:'center',
            spacing:0,  
        },
        breakpoints: {
            "(min-width: 768px)": {
                slides: { perView: 3, spacing: 30, origin:'center' },
              },
            "(min-width: 1200px)": {
              slides: { perView: 3, spacing: 50, origin:'center' },
            },
          },
        detailsChanged(s) {
          setDetails(s.track.details)
          setScreenWidth((window.innerWidth > 0) ? window.innerWidth : screen.width)
        },
        created(s){
          setLoaded(true)
          SetButtonTexts(slideProps)
          SetText(s, slideProps)
        },
        slideChanged(s) {
            setCurrentSlide(s.track.details.rel)
          },
        initial: 2,
        },
        [AdaptiveHeight]
    )

    function scaleStyle(idx: number) {
        if (screenWidth < 768) return {}
        if (!details) return {}
        const slide = details.slides[idx]
        const scale_size = 0.7
        const scale = 1 - (scale_size - scale_size * slide.portion)
        return {
            transform: `scale(${scale}, ${((slide == details.slides[currentSlide]) ? 1.1 : scale)})`,
            WebkitTransform: `scale(${scale}, ${scale})`,
            opacity: scale,
            maxWidth: 350
        }
    }
    return (
        <div ref={sliderRef} className="keen-slider zoom-out flex flex-row">
            {slideProps.bg.map((src, idx) => (
            <div key={idx} className="keen-slider__slide zoom-out__slide">
                <div style={scaleStyle(idx)} className='h-screen md:h-[90vh] md:mx-auto transition-all duration-150'>
                    <div className=' h-screen md:h-[90vh] md:flex-grow-0 flex-col flex'>
                        <div className='h-full bg-ascent bg-cover bg-center md:rounded-2xl md:shadow-2xl md:shadow-black'></div>
                          <p id={`text-${idx}`} className='absolute font-valorant text-6xl top-16 left-[10%] w-0'></p>
                          <Link href={slideProps.links[idx]} className='absolute bottom-[10%] left-1/2 -translate-x-2/4  h-[10%] w-2/4 mx-auto text-center flex-shrink-1'>
                            <button id={`button-${idx}`} className='w-full h-full border-white border font-valorant transition hover:scale-110 z-30'></button>
                          </Link>
                    </div>
                </div>
            </div>
            ))}
            {loaded && instanceRef.current && (
              <div className="dots md:flex justify-center absolute gap-10 w-full -bottom-16 hidden md:visible">
                {[
                  ...Array(instanceRef.current.track.details.slides.length).keys(),
                ].map((idx) => {
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        instanceRef.current?.moveToIdx(idx)
                      }}
                      className={"dot hover:border-2 border-solid border-black" + (currentSlide === idx ? " active" : "")}
                    ></button>
                  )
                })}
              </div>
            )}
        </div>
    )
}

export default Slider