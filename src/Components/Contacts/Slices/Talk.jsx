import React from 'react'
import { PiPhoneLight } from "react-icons/pi";
import { CgMail } from "react-icons/cg";
import { GrLocation } from "react-icons/gr";
import photo2 from '../../../imgs/Photo-contact.jpg'
export default function Talk() {
  return (
    <section>
 <div className="xl:mx-40 lg:mx-24 md:mx-12 mx-5 m-auto">
        <div className='flex lg:flex-nowrap flex-wrap mx-10 justify-around gap-20 mt-36'>
       
        <div className='relative max-w-[560px] mt-20'>        
         <div className="relative z-50">
            <div className="relative">
                <div className=' after:content-[""] after:z-20 after:bg-[url("./imgs/Pattern.svg")] after:bg-cover after:absolute after:w-60 after:bg-no-repeat after:h-60 after:top-0 after:-left-10 after:transform  after:-translate-y-20     before:content-[""] before:z-30  before:bg-cover before:absolute before:w-[126px] before:h-[113px] before:rounded-2xl before:bg-[#4EAF4E] before:-top-5 before:-left-5 '>
                    <img src={photo2} alt="she explaines to her something" className="rounded-special relative z-50" />
                </div>
            </div>
            
        </div>
        
        </div>

        <div className=' max-w-[590px]'>
          <span className='text-base font-normal text-[#181818] bg-[#4EAF4E] px-3	rounded-full uppercase'>Let’s talk</span>
          <p className='text-[45px] font-bold text-[#181818]'>Get In Touch With Us</p>
          
          <p className='text-base font-normal text-[#595566]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          
          <ul className=' max-w-[459px] mt-5'>
                <li className=' relative flex justify-start gap-5 py-2'>
                     <div>
                    <span className=' text-[26px] font-semibold w-[52px] h-[52px] rounded-full text-white bg-[#181818] flex justify-center items-center'> <PiPhoneLight/> </span>
                    </div>
                    <div>
                        <p className='text-base font-normal	text-[#595566]	'>Have Any Question?</p>
                        <p className=' font-semibold text-xl text-[#181818]	'>Free +01 238 543 987</p>
                    </div>
                </li>
                <li  className=' relative flex justify-start gap-5 py-2'>
                <div>
                    <span className=' text-[26px] font-semibold	w-[52px] h-[52px] rounded-full text-white bg-[#181818] flex justify-center items-center'><CgMail/></span>
                    </div>
                    <div>
                        <p className='text-base font-normal	text-[#595566]	'>Write Email</p>
                        <p className=' font-semibold text-xl text-[#181818]	'>Info@consultalk.com</p>
                    </div>
                </li>
                <li  className=' relative flex justify-start gap-5 py-2'>
                <div>
                   <span className=' text-[26px] font-semibold	w-[52px] h-[52px] rounded-full text-white bg-[#181818] flex justify-center items-center'><GrLocation/></span>
                   </div>
                    <div>
                        <p className='text-base font-normal	text-[#595566]	'>Visit Anytime</p>
                        <p className=' font-semibold text-xl text-[#181818]	'>King Street, Prior Lake, New York.</p>
                    </div>
                </li>
                
               </ul>
        </div>

        

       </div>
       
       
        </div>
    </section>
  )
}
