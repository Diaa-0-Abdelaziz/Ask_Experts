import React from 'react'
import { PiPhoneLight } from "react-icons/pi";
import photo2 from "../../../imgs/Proccess2.8.jpg"
import photo8 from "../../../imgs/Photo (8).jpg"
export default function BookNow() {
  return (
    <section className=' my-20'>
     <div className=' py-10 px-20 rounded-special overflow-hidden  m-auto bg-[#181818] flex Screen-920:flex-row flex-col gap-y-20 items-center justify-between max-w-5xl'>
       <div>
       <span className='  text-base font-normal text-[#FFFFFF] tracking-[2px] bg-[#4EAF4E] px-4 uppercase	rounded-full'>Book Now</span>
       <h3 className='max-w-[480px] text-[45px] font-bold text-white	'>Better Consult, <span className=' text-[#727272]'>Better</span> Results</h3>
       <p className='font-normal my-5 max-w-[420px]	text-base	text-white'>Our software development agency has a growth up to 30% per each year. If you are result-oriented, not afraid to take initiative – drop us a note and join our team!</p>
       <div className='text-lg gap-2 bg-[#FFC32B] py-2 flex w-[250px]	pr-10 pl-2.5	 rounded-[42px]'>
          <PiPhoneLight className=' text-[hsl(0,0%,5%)]   w-11	h-11 p-2'/>
          <p className=' m-auto font-semibold	'>+ (888) 452 1505</p>
        </div>
       </div>


        <div className=' relative'> 
         <div className=' absolute -top-20 w-40 right-0 rounded-b-2xl overflow-hidden'>
         <img src={photo8} alt=""  />
         <div className=' absolute top-0 left-0 right-0 bottom-0 bg-[#FFCC4A]/50'>

         </div>
         </div>
        <div className=' relative top-20 mr-5 after:content-[""] after:z-20 after:bg-[url("./imgs/Pattern.svg")] after:bg-cover after:absolute after:w-48 after:bg-no-repeat after:h-48 after:top-10 after:-left-1/2 after:transform after:translate-x-1/2 after:-translate-y-20                                                                before:content-[""] before:z-30  before:bg-cover before:absolute before:w-[130px] before:h-[145px] before:rounded-2xl before:bg-[#4EAF4E] before:top-12 before:-left-20 before:transform before:translate-x-1/2 before:-translate-y-20'>
                    <img src={photo2} alt="she explaines to her something" className="rounded-t-special relative z-50 w-72" />
                </div>
          
          
          </div>  








     </div>

        
    </section>
  )
}
