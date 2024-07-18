import React from 'react';
import { GrStatusGood } from "react-icons/gr";
import photo2 from '../../../imgs/OUR VISION.jpg'
export default function OurVision() {
    
  return (
    <section className=' overflow-hidden'>
       
        <div className="xl:mx-40 lg:mx-24 md:mx-12 mx-5 m-auto">
        <div className='flex lg:flex-nowrap flex-wrap mx-10 justify-around gap-20 mt-36'>
        <div className=' max-w-[590px]'>
          <span className='text-base font-normal text-[#181818] bg-[#FFCC4A] px-3	rounded-full'>OUR VISION</span>
          <p className='text-[45px] font-bold text-[#181818]'>Turn your ideas into reality.</p>
          
          <p className='text-base font-normal text-[#595566]'>Capitalize on low hanging fruit to identify a ballpark value added activity beta test.</p>
          <p className='text-base font-normal text-[#595566] mb-5'>Override the digital divide with additional from DevOps.</p>
          
          <p className='text-base font-normal text-[#595566] mb-5 flex items-start'><GrStatusGood className=' text-3xl me-7 text-[#4EAF4E]'/> <span>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day.</span></p>
          <p className='text-base font-normal text-[#595566] mb-5 flex items-start'><GrStatusGood className=' text-3xl me-7 text-[#4EAF4E]'/><span>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test override the digital.</span></p>
        
        </div>
        <div className='relative max-w-[560px] mt-20'>        
         <div className="relative z-50">
            <div className="relative">
                <div className=' after:content-[""] after:z-20 after:bg-[url("./imgs/Pattern.svg")] after:bg-cover after:absolute after:w-60 after:bg-no-repeat after:h-60 after:top-0 after:right-10 after:transform after:translate-x-1/2 after:-translate-y-20     before:content-[""] before:z-30  before:bg-cover before:absolute before:w-[126px] before:h-[113px] before:rounded-2xl before:bg-[#4EAF4E] before:top-12 before:right-10 before:transform before:translate-x-1/2 before:-translate-y-20'>
                    <img src={photo2} alt="she explaines to her something" className="rounded-special relative z-50" />
                </div>
            </div>
            
        </div>
        
        </div>
       </div>
       
       <ul className=' flex justify-around flex-wrap md:gap-0 gap-10 mt-40 '>
    <li>
        <p className=' text-[50px] font-bold'>1125+</p>
        <p className=' text-lg font-medium'>Successful Work</p>
    </li>
    <li>
        <p className=' text-[50px] font-bold'>908+</p>
        <p className=' text-lg font-medium'>Team member</p>
    </li>
    <li>
        <p className=' text-[50px] font-bold'>258+</p>
        <p className=' text-lg font-medium'> Happy Customers</p>
    </li>
    <li>
        <p className=' text-[50px] font-bold'>564+</p>
        <p className=' text-lg font-medium'>Creative Idea</p>
    </li>
   
   </ul>
        </div>
    </section>
  )
}
