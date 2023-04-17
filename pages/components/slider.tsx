import { KeenSliderPlugin, TrackDetails, useKeenSlider } from 'keen-slider/react'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface SlideProps {
    slides: string[]
    links: string[]
}

const AdaptiveHeight: KeenSliderPlugin = (slider) => {
    function updateHeight() {
      slider.container.style.height =
        slider.slides[slider.track.details.rel].offsetHeight + "px"
    }
    slider.on("created", updateHeight)
    slider.on("slideChanged", updateHeight)
  }

const Slider = (slideProps:SlideProps) => {
    const [details, setDetails] = React.useState<TrackDetails | null>(null)
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: 'free-snap',
        slides: {
            perView:1,
            origin:'center',
            spacing:2,  
        },
        breakpoints: {
            "(min-width: 640px)": {
              slides: { perView: 3, spacing: 15, origin:'center' },
            },
            "(min-width: 800px)": {
                slides: { perView: 3, spacing: 30, origin:'center' },
              },
            "(min-width: 1200px)": {
              slides: { perView: 3, spacing: 50, origin:'center' },
            },
          },
        detailsChanged(s) {
        setDetails(s.track.details)
        },
        slideChanged(s) {
            setCurrentSlide(s.track.details.rel)
            s.slides[s.track.details.rel].style.transform = 'scaleY(1.5)';
          },
        initial: 2,
        },
        [AdaptiveHeight]
    )

    function scaleStyle(idx: number) {
        if (!details) return {}
        const slide = details.slides[idx]
        const scale_size = 0.7
        const scale = 1 - (scale_size - scale_size * slide.portion)
        return {
            transform: `scale(${scale})`,
            WebkitTransform: `scale(${scale})`,
            opacity: `${scale}`
        }
    }
    return (
        <div ref={sliderRef} className="keen-slider zoom-out h-screen sm:flex-shrink flex mx-auto">
            {slideProps.slides.map((src, idx) => (
            <div key={idx} className="keen-slider__slide zoom-out__slide">
                <div style={scaleStyle(idx)} className='h-screen sm:h-fit'>
                    <div className='h-screen sm:h-fit sm:flex-grow-0 flex place-items-center'>
                        <Image src={src} alt='' width={500} height={600} className='flex-grow h-[100%]' style={{height:600}}/>
                        <Link href={slideProps.links[idx]} className='absolute bottom-16 h-[10%] w-1/3'><button className='w-full h-full border-white border font-valorant hidden transition hover:scale-110'>Lorem ipsum</button></Link>
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}

export default Slider