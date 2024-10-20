import React from 'react'

export default function NotFoundPage({page}) {
  return (
    <div className='flex justify-center items-center -mt-36 -mb-10 w-full'>
      <div className={`h-screen bg-blue-900/70 flex justify-center items-center ${page === 'dashboard' ? 'w-full mt-40' : 'w-screen'}`}>

        <div className='relative text-center md:text-start w-full md:w-auto'>
            <h6 className='text-[150px] md:text-[240px] font-bold text-white text-opacity-35'>404</h6>
            <p className='w-full -mt-10 md:mt-0 xl:w-[160%] md:absolute md:-left-5 md:top-2/4 font-bold text-white text-xl md:text-3xl'>Oops! That page can't be found</p>
            <div className='text-center md:-mt-8'>
                <a href='/' className='text-primary hover:underline font-bold'>Go to Home</a>
            </div>
        </div>
      </div>
    </div>
  )
}