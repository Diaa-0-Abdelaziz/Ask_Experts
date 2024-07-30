import React from 'react'
import { PiPhoneLight } from "react-icons/pi";
import photo2 from "../../../imgs/contact-team.jpg"
export default function Contact() {
  return (
    <section className=' my-20'>
     <div className=' py-10 px-20 rounded-special overflow-hidden  m-auto bg-[#181818] flex Screen-920:flex-row flex-col gap-y-20 items-center justify-between max-w-5xl'>
       <div >
       <span className='  text-base font-normal text-[#FFFFFF] tracking-[2px] bg-[#323232] px-4 uppercase	rounded-full'>Contact</span>
       <h3 className='max-w-[480px] text-[45px] font-bold text-white	'>Ready To Talk?</h3>
       <p className='font-normal mt-5 text-base	text-white'>Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.</p>
       <p className='font-normal mb-5 max-w-[420px]	text-base	text-white'>Massa placerat duis ultricies lacus sed turpis. Pellentesque  pellentesque habitant morbi tristique.</p>
      <div className=' flex gap-5 flex-wrap'>
      <input type='email' placeholder='your mail address' className='text-base gap-2 bg-white outline-none py-2 flex w-[250px]	pl-5	 rounded-[42px]'/>
      <p className='m-auto rounded-full bg-[#4EAF4E] text-[#ffffff] py-4	px-8 cursor-pointer'>Send Message</p>
      </div>

       </div>


       
        <div className=' lg:block hidden relative -top-20 -right-40 after:content-[""] after:z-20 after:bg-[url("./imgs/Pattern.svg")] after:bg-cover after:absolute after:w-[80px] after:h-[80px] after:bg-no-repeat after:top-5 after:-left-4  scale-[2.5] -rotate-[30deg]'>
                    <img src={photo2} alt="she explaines to her something" className="rounded-md relative z-50 w-72" />
                </div>
          
           








     </div>

        
    </section>
  )
}
