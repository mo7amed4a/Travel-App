import React from 'react';
import img from "../../images/wall122.jpg"; 
import { Link } from 'react-router-dom';

export default function Thirdpart() {
    let carts = [
        {
            img1: img,
            clock: "5D/4N",
            people: "8",
            location: "Canada",
            price: '1,230',
            title: "Experience the natural beauty of island",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laudantium recusandae modi, adipisci magni similique"
        },
        {
          img1: img,
          clock: "5D/4N",
          people: "8",
          location: "Canada",
          price: '1,660',
          title: "Experience the natural beauty of island",
          details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laudantium recusandae modi, adipisci magni similique"
      },
      {
        img1: img,
        clock: "5D/4N",
        people: "8",
        location: "Canada",
        price: '1,230',
        title: "Experience the natural beauty of island",
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laudantium recusandae modi, adipisci magni similique"
    }
    ];


    return (
   <div className=' mt-[100px]'>

<div className="flex flex-col items-center justify-center  text-center">
  <div className="flex items-center mb-4">
    <div className="w-24 bg-red-500 h-[3px] inline-block"></div>
    <p className="ml-2 text-red-500 uppercase font-semibold text-sm">Explore great places</p>
  </div>

  <h2 className="text-5xl font-bold mb-4">Popular Packages</h2>

  <p className="text-lg text-gray-600 max-w-2xl">
    Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid blandit, 
    blandit torquent, odit placeat. Adipiscing repudiandae eius cursus? Nostrum magnis maxime 
    curae placeat.
  </p>
</div>










   <div className="container mx-auto p-6 flex justify-center items-center  flex-wrap">
       
       {carts.map((cart, index) => (
         
           <div className='flex flex-col md:flex-row' key={index}>
               <div className='w-[350px] overflow-hidden shadow-lg h-[600px] mb-6 md:mr-4 relative'>
                   <div>
                       <img src={cart.img1} alt="destination" className='' />

                    
                       <div className='absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded sm:text-sm md:text-base lg:text-lg'>
                           <span className="font-bold">${cart.price}</span>
                           <span className="text-xs md:text-sm"> / per person</span>
                       </div>

                       <div className='w-[300px] bg-[#50d71e] h-[50px] relative bottom-[30px] left-[30px]'>
                           <div className='flex text-white' style={{ justifyContent: "space-around" }}>
                               <div className="mt-2 flex items-center gap-2">
                                   <span><i className="fa-regular fa-clock"></i> <span>{cart.clock}</span></span>
                                   <div className="w-[2px] bg-[#ffffff] h-[25px]"></div>
                               </div>

                               <div className="mt-2 flex items-center gap-2">
                                   <span><i className="fa-regular fa-user"></i> <span className='ml-2'>People: {cart.people}</span></span>
                                   <div className="w-[2px] bg-[#ffffff] h-[25px]"></div>
                               </div>

                               <div className="mt-2 flex items-center gap-2">
                                   <span><i className="fa-solid fa-location-dot"></i> <span className='ml-2'>{cart.location}</span></span>
                               </div>
                           </div>

                           <h2 className='mt-[40px] mb-[20px]' style={{ fontSize: "25px", fontWeight: "bold" }}>
                               {cart.title}
                           </h2>
                           <p>{cart.details}</p>
                       </div>
                   </div>

                   <div className='bg-[gray] h-[0.5px] w-[100%] relative top-[250px]'> </div>

                   <div className='bg-[gray] h-[84px] w-[2px] relative left-[50%] top-[41.5%]'></div>
                   <div className='flex font-bold relative top-[190px]' style={{ justifyContent: 'space-around' }}>
                       <Link className='pointer-events-auto'>Book Now <i className="fa-solid text-red-500 fa-arrow-right"></i></Link>
                       <Link>Wish List <i className="fa-regular text-red-500 fa-heart"></i></Link>
                   </div>
               </div>
           </div>
       ))}
   </div>

   
<div className='flex justify-center text-center mt-6'>
    <button className='bg-red-500 text-white px-4 py-3 text-base md:text-lg lg:text-xl rounded-md w-full sm:w-auto'>
        VIEW ALL PACKAGES
    </button>
</div>

   </div>
     
    );
}
