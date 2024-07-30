import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
   <section className=' py-10 px-5'>
    <article className='bg-white  text-center z-50 py-[50px] 2xSM:px-[58px] px-5  max-w-xl	 rounded-special shadow-md m-auto'>
        <p className='md:text-[100px] text-[50px] font-bold text-[#181818] mb-2'>404</p>
        <p className='md:text-[50px] text-[50px] font-bold text-[#181818] mb-2'>Page Not Found</p>
        <p className='text-[#595566] text-base	font-normal mb-5'>This Page Doesn't or was removed! We suggest you back to home</p>
       
        <Link className=' m-auto rounded-full bg-[#181818] text-white py-4 px-8' to={'/'}>Back to home</Link>
     
       </article>
   </section>
  )
}
