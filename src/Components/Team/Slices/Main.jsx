import React from 'react'
import MainShaired from '../../../ImportantSlicesSharedComponents/main'
export default function Main() {
  const pathImage = 'bg-[url(./imgs/photo-team-members.jpg)]'
  const headLine = 'Team'
  const paragraph = 'The Consultors'
  return (
      <MainShaired
      pathImage = {pathImage}
      headLine = {headLine}
      paragraph = {paragraph}
      />
     
  )
}
