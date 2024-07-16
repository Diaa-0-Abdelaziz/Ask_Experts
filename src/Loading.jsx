import React from 'react'
import { Triangle } from 'react-loader-spinner'

export default function Loading() {
  return (
   <section className=' z-50 absolute top-0 left-0 right-0 bottom-0 bg-[#181818] flex items-center justify-center'>
    <Triangle
  visible={true}
  height="100"
  width="100"
  color="#ffffff"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
   </section>
  )
}
