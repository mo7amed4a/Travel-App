import React from 'react'

export default function TravelofferSection() {

    let carts = [
        {
            name: "CANADA",
            title: "Trekking to the mountain camp site",
            price: 1105,
            discount: "20% off"
        },
        {
            name: "NEW ZEALAND",
            title: "Experience the natural beauty of glacier",
            price: 1200,
            discount: "15% off"
        },
        {
            name: "MALAYSIA",
            title: "Trekking to the mountain camp site",
            price: 1476,
            discount: "10% off"
        }
    ];

    return (
        <div className="mt-[100px]">

    
            <div className="flex flex-col items-center justify-center text-center">
                <div className="flex items-center mb-4">
                    <div className="w-24 bg-red-500 h-[3px] inline-block"></div>
                    <p className="ml-2 text-red-500 uppercase font-semibold text-sm">TRAVEL OFFER & DISCOUNT</p>
                </div>
                <h2 className="text-5xl font-bold mb-4">PSPECIAL TRAVEL OFFER</h2>
                <p className="text-lg text-gray-600 max-w-2xl">
                    Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid blandit, 
                    blandit torquent, odit placeat. Adipiscing repudiandae eius cursus? Nostrum magnis maxime 
                    curae placeat.
                </p>
            </div>

         
            <div className="container mx-auto p-6">
                <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8">
                    {carts.map((cart, index) => (
                        <div 
                            key={index} 
                            className="w-[360px] relative bg-gray-300 shadow-lg h-[450px] mb-6 md:mb-8 mt-8"
                        >
                         
                            <div className="absolute top-[-40px] right-[-20px] bg-red-500 text-white rounded-full w-[80px] h-[80px] flex items-center justify-center">
                                <span className="text-center font-bold">{cart.discount}</span>
                            </div>

                          
                            <div className="w-[320px] absolute left-[20px] top-[70%] h-[170px] bg-white p-4">
                                <h3 className="text-blue-500 text-lg font-bold">{cart.name}</h3>
                                <p className="text-xl font-bold mb-2">{cart.title}</p>
                                <span className="text-red-500 line-through mr-2">$1500</span>
                                <span className="text-red-400 font-bold">${cart.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
