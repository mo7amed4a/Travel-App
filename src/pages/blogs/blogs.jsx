import React, { useState } from "react";
import PaginationApp from "../../components/pagination";
import { Link } from "react-router-dom";
import BlogComponentApp from "../../components/blogs/blogsComponent";

function BlogsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
          <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-4">
            {[0,2,3,4].map((article, index) => (
               <BlogComponentApp article={article}
                key={index} />
              ))}
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
