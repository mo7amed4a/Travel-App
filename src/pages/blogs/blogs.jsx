import React, { useState } from "react";
import PaginationApp from "../../components/pagination";
import BlogComponentApp from "../../components/blogs/blogsComponent";
import useFetch from "../../hooks/useFetch";

function BlogsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, loading, error } = useFetch(`posts?pageNumber=${currentPage}&POST_PER_PAGE=3`);

  console.log("Posts data:", data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-4">
      {data?.data?.posts?.map((article) => (
        <BlogComponentApp article={article} key={article._id} />
      ))}
      
      <div className="flex flex-col items-center col-span-full justify-center">
        <PaginationApp
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={data?.data?.totalPages || 1}
        />
      </div>

    </div>
  );
}

export default BlogsPage;
