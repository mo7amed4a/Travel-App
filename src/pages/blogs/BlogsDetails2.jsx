import React from 'react';

export default function BlogsDetailsPage2({ post }) {
  if (!post) return <p>لا توجد تفاصيل للعرض.</p>; // Message when no post is available

  return (
    <div>
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="mt-2 text-gray-700">{post.description}</p>
    </div>
  );
}
