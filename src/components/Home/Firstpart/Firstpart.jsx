import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../../images/wallpaperflare.com_wallpaper.jpg';
import img2 from '../../../images/wallpaperflare.com_wallpaper2.jpg';

const ImageSlider = () => {
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

  const slides = [
    { image: img1, text: 'Welcome to the first slide !', text2: "TRAVELLING AROUND THE WORLD" },
    { image: img2, text: 'Explore the second slide!', text2: "TRAVELLING AROUND THE WORLD" },
  ];

  return (
    <div className="relative max-w-[100vw] h-screen  bg-red-400">
      <Slider {...settings} ref={sliderRef}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-screen">
            <img
              src={slide.image}
              alt={`slide-${index}`}
              className="w-full h-full bg-black object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-35"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
              <div className="flex flex-col items-center">
                <h1 className="text-white text-5xl font-bold mb-2">
                  <span className="block">{slide.text2.split(' ').slice(0, 2).join(' ')}</span>
                  <span className="block">{slide.text2.split(' ').slice(2).join(' ')}</span>
                </h1>
                <p className="text-white text-2xl mb-9">{slide.text}</p>
                <button className='bg-sky-700 text-white px-8 py-3 hover:bg-sky-900'>CONTINUE READING</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-full focus:outline-none z-10"
        onClick={prevSlide}
      >
        ❮
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 rounded-full focus:outline-none z-10"
        onClick={nextSlide}
      >
        ❯
      </button>
    </div>
  );
};

export default ImageSlider;
