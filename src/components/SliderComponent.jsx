import React, { useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '/images/img21.jpg';
import img2 from '/images/img27.jpg';
import { baseURL } from '../lib/api/Axios';


export default function SliderComponent({slides = [
  { url: img1},
  { url: img2},
]}) {
    const sliderRef = useRef(null);  
  const settings = {
    dots: false,            
    infinite: true,        
    speed: 500,            
    slidesToShow: 1,       
    slidesToScroll: 1,     
    arrows: false,         
    autoplay: true,        
    autoplaySpeed: 3000,
    fade: true,

};

  const nextSlide = () => {
    
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
      <div className='relative'>
        <Slider {...settings} ref={sliderRef}>
          {slides.map((slide, index) => (
            <div key={index} className="relative h-96">
              <img
                src={baseURL+slide.url}
                alt={`slide-${index}`}
                className="w-full h-full bg-black object-cover"
              />
              
            </div>
          ))}
        </Slider>
        { slides.length > 1 &&
          <>
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-4 rounded-full focus:outline-none z-10"
            onClick={prevSlide}
          >
            ❮
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-4 rounded-full focus:outline-none z-10"
            onClick={nextSlide}
          >
            ❯
          </button>
          </>
        }
      </div>
  )
}
