import React from 'react'
import MainShaired from '../../../ImportantSlicesSharedComponents/main'
export default function Main() {
  const pathImage = 'bg-[url(./imgs/photo-blog.jpg)]'
  const headLine = 'blog'
  const paragraph = 'Latest Blogs & News'
  return (
      <MainShaired
      pathImage = {pathImage}
      headLine = {headLine}
      paragraph = {paragraph}
      />
     
  )
}
