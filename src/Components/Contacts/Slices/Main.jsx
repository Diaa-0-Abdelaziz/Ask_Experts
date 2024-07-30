import React from 'react'
import MainShaired from '../../../ImportantSlicesSharedComponents/main'
export default function Main() {
  const pathImage = 'bg-[url(./imgs/contact-main-photo.jpg)]'
  const headLine = 'Contactus'
  const paragraph = 'Feel Free To Reach Us'
  return (
      <MainShaired
      pathImage = {pathImage}
      headLine = {headLine}
      paragraph = {paragraph}
      />
     
  )
}
