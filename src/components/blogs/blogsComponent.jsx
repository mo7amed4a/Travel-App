import React from "react";
import { Link } from "react-router-dom";
import { baseURL } from "../../lib/api/Axios";

export default function BlogComponentApp({ article }) {
  // تحقق مما إذا كانت بيانات المقالة موجودة
  if (!article) {
    return <p>Error: Article data is missing.</p>;
  }

  return (
    <article className="p-4 w-full">

      <figure className="w-full h-[290px] bg-gray-200">
    
        <Link to={`/blogs/${article._id}`}>
          <img
            className="w-full h-full object-contain"
            src={(baseURL + article.image[0].url) || "/images/default.jpg"} // صورة افتراضية إذا لم تكن الصورة موجودة
            alt={article.title || "Default Title"} // عنوان افتراضي إذا لم يكن العنوان موجودًا
          />
        </Link>
      </figure>
      <div className="flex flex-col gap-y-2">
        <h3 className="text-xl hover:text-secondary">
          <Link to={`/blogs/${article._id}`}>{article.title}</Link>
        </h3>
        <div className="flex gap-x-4 text-sm text-gray-500">
          <span className="hover:text-secondary">
            <span>{article.user?.name || "Unknown Author"}</span>
          </span>
          <span className="hover:text-secondary">
            <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
          </span>
          <span className="hover:text-secondary">
            <span>{article.commentsCount || "No"} Comments</span>
          </span>
        </div>
        <p className="text-gray-700">
          {article.description || "No description available."}
        </p>
        <Link to={`/blogs/${article._id}`} className="text-secondary font-semibold">
          CONTINUE READING...
        </Link>
      </div>
    </article>
  );
}
