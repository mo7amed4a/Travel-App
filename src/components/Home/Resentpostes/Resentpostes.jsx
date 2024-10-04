import React from 'react';

import { Link } from 'react-router-dom';
import BlogComponentApp from '../../blogs/blogsComponent';

export default function Resentpostes() {
    return (
        <div className='mt-[100px]'>
            <div className="flex flex-col items-center justify-center text-center">
                <div className="flex items-center mb-4">
                    <div className="w-24 bg-red-500 h-[3px] inline-block"></div>
                    <p className="ml-2 text-red-500 uppercase font-semibold text-sm">FROM OUR BLOG</p>
                </div>

                <h2 className="text-5xl font-bold mb-4">OUR RECENT POSTS</h2>

                <p className="text-lg text-gray-600 max-w-2xl">
                    Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid blandit, blandit torquent, odit placeat. Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae placeat.
                </p>
            </div>

          
            <div className="container-app grid grid-cols-1 md:grid-cols-3">
            <BlogComponentApp />
            <BlogComponentApp />
            <BlogComponentApp />

                {/* <div className='flex flex-col sm-flex-col md:flex-row'>
                    <div className='w-[365px] overflow-hidden bg-gray-300 shadow-lg h-[450px] mb-6 md:mr-4 relative'>
                        <div className='w-[100%] h-[170px] absolute top-[64%] bg-white p-4'>
                            <h3 className="text-lg font-semibold mb-2">Take only memories, leave only footprints</h3>
                            <p className="text-gray-600 text-sm">Demoteam | August 17, 2021 | No Comments</p>
                        </div>
                    </div>
                </div> */}
                
            </div>

         
        </div>
    );
}
