import React, { useState } from "react";
import PaginationApp from "../../components/pagination";
import { Badge, Blockquote } from "flowbite-react";

function BlogsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
          <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-4">
            {[0,2,3,4].map((article, index) => (
               <article className="p-4 w-full" key={index}>
              <figure className="w-full bg-blue-500">
                <a href="#">
                  <img className="w-full h-[290px]"
                    src="/images/img17.jpg"
                    alt=""
                  />
                </a>
              </figure>
              <div className="flex flex-col gap-y-2">
                <h3 className="text-xl hover:text-secondary">
                  <a href="#">Life is a beautiful journey not a destination {article}</a>
                </h3>
                <div className="flex gap-x-4 text-sm text-gray-500">
                  <span className="hover:text-secondary">
                    <a href="#">Demoteam</a>
                  </span>
                  <span className="hover:text-secondary">
                    <a href="#">August 17, 2021</a>
                  </span>
                  <span className="hover:text-secondary">
                    <a href="#">No Comments</a>
                  </span>
                </div>
                <p className="text-gray-700">
                  Praesent, risus adipisicing donec! Cras. Lobortis id aliquip
                  taciti repudiandae porro dolore facere officia! Natoque
                  mollitia ultrices convallis nisl suscipit
                </p>
                <a href="#" className="text-secondary font-semibold">
                  CONTINUE READING..
                </a>
              </div>
            </article>))}
            <div className="flex flex-col items-center col-span-full justify-center">
              {/* <h1 className="text-center text-6xl">{currentPage}</h1> */}
              <PaginationApp
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={10}
              />
            </div>
          </div>

  );
}

export default BlogsPage;
