import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogComponentApp({article}) {
  return (
    <article className="p-4 w-full">
              <figure className="w-full bg-blue-500">
                <Link to={`/blogs/1`}>
                  <img className="w-full h-[290px]"
                    src="/images/img17.jpg"
                    alt=""
                  />
                </Link>
              </figure>
              <div className="flex flex-col gap-y-2">
                <h3 className="text-xl hover:text-secondary">
                  <Link to={`/blogs/1`}>Life is a beautiful journey not a destination {article}</Link>
                </h3>
                <div className="flex gap-x-4 text-sm text-gray-500">
                  <span className="hover:text-secondary">
                    <span>Demoteam</span>
                  </span>
                  <span className="hover:text-secondary">
                    <span>August 17, 2021</span>
                  </span>
                  <span className="hover:text-secondary">
                    <span>No Comments</span>
                  </span>
                </div>
                <p className="text-gray-700">
                  Praesent, risus adipisicing donec! Cras. Lobortis id aliquip
                  taciti repudiandae porro dolore facere officia! Natoque
                  mollitia ultrices convallis nisl suscipit
                </p>
                <Link to={`/blogs/1`} className="text-secondary font-semibold">
                  CONTINUE READING..
                </Link>
              </div>
            </article>
  )
}
