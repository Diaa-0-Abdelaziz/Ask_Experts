import React from 'react'
// import photo from '../../../imgs/Photo.png'

import { PiNotepad } from "react-icons/pi";

export default function Main() {
  
  return (
    <section className='relative bg-[url("./imgs/Photo.png")] bg-cover	 py-48'>
      {/* <img src={photo} alt="" className=' w-full'/> */}
      <div className="container " data-aos="fade-right">
      <article className='bg-[#FFFFFFD9] py-[50px] 2xSM:px-[58px] md:ml-36 mx-4 px-5  max-w-xl	 rounded-special'>
        <p className='md:text-[50px] text-[25px] font-bold text-[#181818] mb-2'>Your small business growth advisors</p>
        <p className='text-[#595566] text-base	font-normal mb-3'>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</p>
       <ul className=' flex gap-9 flex-wrap w-full p-5'>
        <li className=' m-auto rounded-full bg-[#181818] text-white py-4	px-8'>Our Services</li>
        <li className='m-auto rounded-full flex items-center gap-3 bg-[white] text-[#181818] py-2 px-3 border-2 border-[#EBEBEB]'><PiNotepad className='bg-[#4EAF4E] w-11	h-11 rounded-full p-2'/>Book a Meeting</li>
       </ul>
       </article>
      
      </div>
    </section>
  )
}
