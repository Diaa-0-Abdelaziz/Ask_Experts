import React from 'react'
import MainShaired from '../../../ImportantSlicesSharedComponents/main'
export default function Main() {
  const pathImage = 'bg-[url(./imgs/Photo-main-services.jpg)]'
  const headLine = 'Services'
  const paragraph = 'Creative Services For Boost Your Business Growth'
  return (
      <MainShaired
      pathImage = {pathImage}
      headLine = {headLine}
      paragraph = {paragraph}
      />
     
  )
}
