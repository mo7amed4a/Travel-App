import React from 'react'

export default function TravelSection() {
    const activities = [
        { name: "Adventure", destinations: "15 Destinations", icon: "🌄" },
        { name: "Trekking", destinations: "15 Destinations", icon: "🎒" },
        { name: "Camp Fire", destinations: "15 Destinations", icon: "🔥" },
        { name: "Off Road", destinations: "15 Destinations", icon: "🛣️" },
        { name: "Camping", destinations: "15 Destinations", icon: "🏕️" },
        { name: "Exploring", destinations: "15 Destinations", icon: "🗺️" },
    ];
    
    return (
        <div className='container mx-auto  mt-[100px] p-6'>
            
<div className="flex flex-col items-center justify-center mb-8  text-center">
  <div className="flex items-center mb-4">
    <div className="w-24 bg-red-500 h-[3px] inline-block"></div>
    <p className="ml-2 text-red-500 uppercase font-semibold text-sm">TRAVEL BY ACTIVITY</p>
  </div>

  <h2 className="text-5xl font-bold mb-4">ADVENTURE & ACTIVITY</h2>

  <p className="text-lg text-gray-600 max-w-2xl">
    Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid blandit, 
    blandit torquent, odit placeat. Adipiscing repudiandae eius cursus? Nostrum magnis maxime 
    curae placeat.
  </p>
</div>

            <div className='flex flex-wrap justify-center gap-4'>
                {activities.map((activity, index) => (
                    <div key={index} className='w-[180px] h-[190px] text-center' style={{ border: "1px solid black" }}>
                        <div className='text-[80px]'>
                            {activity.icon}
                        </div>
                        <h3 className='font-bold'>{activity.name}</h3>
                        <p>{activity.destinations}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
