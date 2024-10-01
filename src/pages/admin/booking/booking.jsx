import React from 'react'
import TableBooking from '../../../components/dashboard/TableBooking'

export default function BookingDashboard() {
  const booking = [
    {
      // select: true,
      avatar: "/images/comment4.jpg",
      name: "John Doe",
      date: "12 may",
      city: "Japan",
      enquiry: "15",
    },
    {
      // select: true,
      avatar: "/images/comment4.jpg",
      name: "John Doe",
      date: "12 may",
      city: "Japan",
      enquiry: "15",
    },
    {
      // select: true,
      avatar: "/images/comment4.jpg",
      name: "John Doe",
      date: "12 may",
      city: "Japan",
      enquiry: "15",
    },
  ]
  return (
    <main className='w-full'>
      <TableBooking title={"Booking"} description={"Booking Details"} values={booking}/>
    </main>
  )
}
