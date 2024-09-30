import React, { useState } from 'react'
import TableBooking from '../../../components/dashboard/TableBooking'
import { Button } from 'flowbite-react'
import PaginationApp from '../../../components/pagination'

export default function PackageDashboard() {
    const [currentPage, setCurrentPage] = useState(1)
    const packages = [
        {
            author: "John Doe",
            avatar: "/images/comment4.jpg",
            title: "Lorem Ipsum",
            date: "12 may",
            content: "lorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omio"
        },
        {
            author: "John Doe",
            avatar: "/images/comment4.jpg",
            title: "Lorem Ipsum",
            date: "12 may",
            content: "lorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omio"
        },
        {
            author: "John Doe",
            avatar: "/images/comment4.jpg",
            title: "Lorem Ipsum",
            date: "12 may",
            content: "lorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omio"
        },
        {
            author: "John Doe",
            avatar: "/images/comment4.jpg",
            title: "Lorem Ipsum",
            date: "12 may",
            content: "lorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omio"
        },
        {
            author: "John Doe",
            avatar: "/images/comment4.jpg",
            title: "Lorem Ipsum",
            date: "12 may",
            content: "lorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omio"
        },
        {
            author: "John Doe",
            avatar: "/images/comment4.jpg",
            title: "Lorem Ipsum",
            date: "12 may",
            content: "lorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omio"
        },
        {
            author: "John Doe",
            avatar: "/images/comment4.jpg",
            title: "Lorem Ipsum",
            date: "12 may",
            content: "lorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omio"
        },
        {
            author: "John Doe",
            avatar: "/images/comment4.jpg",
            title: "Lorem Ipsum",
            date: "12 may",
            content: "lorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omio"
        },
        {
            author: "John Doe",
            avatar: "/images/comment4.jpg",
            title: "Lorem Ipsum",
            date: "12 may",
            content: "lorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omiolorem irviown wefnofioo omio"
        },
    ]
  return (
    <main className='w-full py-4'>
        <section className='w-full'>
            <TableBooking title={'Packages'} description={'Packages List'} values={packages} Buttons={<>
                <Button>Edit</Button>
                <Button color={"failure"}>Delete</Button>
            </>}/>
            <PaginationApp currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={10}/>
        </section>
    </main>
  )
}
