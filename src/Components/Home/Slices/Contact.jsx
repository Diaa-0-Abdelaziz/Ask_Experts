import React from 'react'
import { PiPhoneLight } from "react-icons/pi";
import { LuClock3 } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
export default function Contact() {
  return (
    <section className=' mt-28 overflow-hidden'>
       <div className=" mx-10 m-auto flex flex-wrap gap-5 justify-around">
       <div className=' '>
       <span className='text-base font-normal text-[#181818] tracking-[2px] bg-[#FFCC4A] px-4	rounded-full'>PROCCESS</span>
      <h3 data-aos="fade-right" className='text-[45px] font-bold text-[#181818]'>Contact Us. It’s Easy.</h3>
      <p data-aos="fade-left" className='text-base font-normal	text-[#595566] max-w-[420px]'>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative.</p>      
      <ul>
                <li data-aos="zoom-in" className=' relative flex justify-start gap-5 py-5'>
                    <div>
                    <span className=' text-[26px] font-semibold w-[52px] h-[52px] rounded-full text-[#DEAA27] bg-[#FFECBB] flex justify-center items-center'> <PiPhoneLight/> </span>
                    </div>
                    <div>
                        <p className='text-base font-normal	text-[#595566]	'>Call Today</p>
                        <p className=' font-semibold text-xl text-[#181818]	'>+1 800 100 900</p>
                    </div>
                </li>
                <li data-aos="zoom-in"  className=' relative flex justify-start gap-5 py-5'>
                    <div>
                    <span className=' text-[26px] font-semibold	w-[52px] h-[52px] rounded-full text-[#4EAF4E] bg-[#A4EDA4] flex justify-center items-center'><LuClock3/></span>
                    </div>
                    <div>
                        <p className='text-base font-normal	text-[#595566]	'>Monday To Friday</p>
                        <p className=' font-semibold text-xl text-[#181818]	'>9AM - 5PM</p>
                    </div>
                </li>
                <li data-aos="zoom-in"  className=' relative flex justify-start gap-5 py-5'>
                   <div>
                   <span className=' text-[26px] font-semibold	w-[52px] h-[52px] rounded-full text-[#181818] bg-[#EAEAEA] flex justify-center items-center'><GrLocation/></span>
                   </div>
                    <div>
                        <p className='text-base font-normal	text-[#595566]	'>USA Office</p>
                        <p className=' font-semibold text-xl text-[#181818]	'>195 Devonshire St Boston, MA 02110</p>
                    </div>
                </li>
                
               </ul>
      
       </div>

       <div className=' max-w-[688px]' data-aos="zoom-in">
       <form>
        <div className='flex flex-wrap gap-2 justify-around'>
        <div className="mb-5">
          <label htmlFor="fullname" className="block mb-2">Full Name</label>
          <input type="text" id="fullname" className="border-2  rounded-full py-[22px] px-[22px] outline-none" placeholder="john david"/>
        </div>
        <div className="mb-5">
          <label htmlFor="Email" className="block mb-2">Email</label>
          <input type="email" id="Email" className="border-2  rounded-full py-[22px] px-[22px] outline-none" placeholder="consult@mail.com"/>
        </div>
        <div className="mb-5">
          <label htmlFor="Phone" className="block mb-2">Phone</label>
          <input type="tel" id="Phone" className="border-2  rounded-full py-[22px] px-[22px] outline-none" placeholder="+008 654 231"/>
        </div>
        <div className="mb-5">
          <label htmlFor="Company" className="block mb-2">Company(optional)</label>
          <input type="text" id="Company" className="border-2  rounded-full py-[22px] px-[22px] outline-none" placeholder="yourcompany.com"/>
        </div>
        </div>
  <div>
  <label htmlFor="message" className="block mb-2 ">Message</label>
  <textarea id="message" rows="4" className=" border-2 w-full rounded-3xl resize-none py-[22px] px-[22px] outline-none" placeholder="Briefly tell us about your project and your current goals. How can we help you?"></textarea>
  </div>
  <div className=' w-[154.6px] mt-5'>
                <input type='submit' className=' cursor-pointer m-auto rounded-full bg-[#181818] text-white py-4	px-8' value="Read More"/>
  </div>
</form>
       </div>
       </div>
    </section>
  )
}
