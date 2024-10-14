import React from 'react'

export default function ViewBlog({html}) {
  return (
    
    <div 
    className="preview prose prose-img:-mt-5 prose-img:-mb-5" 
    dangerouslySetInnerHTML={{ __html: html }} 
  />
  )
}
