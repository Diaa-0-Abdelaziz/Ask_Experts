import React from 'react'
import photo2 from "../../../imgs/Pattern.svg"
export default function ContactUs() {
  return (
    <section className=' my-20'>
     <div className=' py-10  px-5 rounded-special overflow-hidden  m-auto bg-[#181818] flex Screen-920:flex-row flex-col gap-y-20 items-center justify-between max-w-5xl'>
       <div >
       <h3 className=' text-[35px] font-bold text-white	'>Subscribe Our Newsletter</h3>
       <p className='font-bold mt-2 text-base	text-white'>Build stronger Customer Relationships with Consultalk</p>

       </div>
    
      <div className=' flex gap-5 flex-wrap'>
      <input type='email' placeholder='your mail address' className='text-base gap-2 bg-white outline-none py-2 flex w-[250px]	pl-5	 rounded-[42px]'/>
      <p className='m-auto rounded-full bg-[#FFCC4A] text-[#181818] py-4	px-8 cursor-pointer'>Send Message</p>
      </div>
     </div>

        
    </section>
  )
}
