import React from 'react'

export default function ViewBlog({html}) {
  return (
    
    <div 
    className="preview prose" 
    dangerouslySetInnerHTML={{ __html: html }} 
  />
  )
}
