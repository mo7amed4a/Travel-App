import React from 'react'
import TableBooking from '/src/components/dashboard/TableBooking.jsx'


export default function DashoardPage() {
  return (
    <main className='w-full py-5 space-y-5'>
      <section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
        <div className='bg-white shadow flex h-20'>
          <div className='bg-blue-500 w-20 h-full flex items-center justify-center text-white'>
            <i className="text-4xl far fa-chart-bar"></i>
          </div>
          <div className='px-4 flex flex-col items-start justify-center'>
            <p className='text-lg font-bold'>Today Views</p>
            <span className='font-bold'>9</span>
          </div>
        </div>
        <div className='bg-white shadow flex h-20'>
          <div className='bg-green-500 w-20 h-full flex items-center justify-center text-white'>
            <i className="text-4xl  far fa-dollar-sign"></i>
          </div>
          <div className='px-4 flex flex-col items-start justify-center'>
            <p className='text-lg font-bold'>Earnings</p>
            <span className='font-bold'>4</span>
          </div>
        </div>
        <div className='bg-white shadow flex h-20'>
          <div className='bg-purple-700 w-20 h-full flex items-center justify-center text-white'>
            <i className="text-4xl far fas fa-users"></i>
          </div>
          <div className='px-4 flex flex-col items-start justify-center'>
            <p className='text-lg font-bold'>Users</p>
            <span className='font-bold'>4</span>
          </div>
        </div>
        <div className='bg-white shadow flex h-20'>
          <div className='bg-red-700 w-20 h-full flex items-center justify-center text-white'>
            <i className="text-4xl far fa-envelope-open"></i>
          </div>
          <div className='px-4 flex flex-col items-start justify-center'>
            <p className='text-lg font-bold'>Enquiry</p>
            <span className='font-bold'>4</span>
          </div>
        </div>
      </section>
      <section className='mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <TableBooking title="Recent Booking" description="Airtport Hotels The Right Way To Start A Short Break Holiday" />
        <TableBooking title="Package Enquiry" description="Airtport Hotels The Right Way To Start A Short Break Holiday" />
      </section>
      <section>
        <TableBooking title="Recent Booking" description="Airtport Hotels The Right Way To Start A Short Break Holiday" />
      </section>
    </main>
  )
}
