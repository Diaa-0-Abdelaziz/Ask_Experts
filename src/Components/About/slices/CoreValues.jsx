import React from 'react'
import { LuLayers } from "react-icons/lu";

import { PiChartBar } from "react-icons/pi";
import { IoEarthOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

export default function CoreValues() {
 
  return (
   <section className='  py-20  mt-40  bg-[#F5F5F5] '>

     <div className='  w-9/12 m-auto '>
        <div className=' flex flex-wrap md:justify-between justify-around  items-end mb-10'>
    <div>
    <span className='text-base font-normal text-[#181818] tracking-[2px] bg-[#FFCC4A] px-4 rounded-full'>Growing with our Clients</span>
    <h2 className=' max-w-[740px] text-[45px] font-bold sm:text-[#181818] text-[#181818]  '>Our core values & principles</h2>
    <p className='text-base font-normal text-[#595566]'>Capitalize on low hanging fruit to identify a ballpark value added activity beta test.</p>
    <p className='text-base font-normal text-[#595566]'> Override the digital divide with additional from DevOps.</p>
    </div>
    <div className=' w-[154.6px]'>
    <p className='m-auto rounded-full bg-[#181818] text-[#ffffff] py-4	px-8'>Get in touch</p>
    </div>
     </div>


     <div className=' grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-8 items-start justify-center'>
             
                
                <article className=' border-2 bg-[#ffffff] rounded-3xl p-5'>
                <i className='text-[26px] font-semibold w-[52px] h-[52px] rounded-full text-white bg-[#181818] flex justify-center items-center'><LuLayers/></i>
                 <p className='font-semibold text-[25px] my-5'>Creative Ideas</p>
                 <p className='font-normal text-base text-[#595566]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget accumsan augue Donec aliquam.</p>
                
                <span className=' text-lg font-semibold text-[#181818] flex items-center mt-7'>Read More <FaArrowRight className=' ms-4'/> </span>
                
                </article>    
              
              
              
                <article className='border-2 bg-[#ffffff] rounded-3xl p-5'>
                <i className='text-[26px] font-semibold w-[52px] h-[52px] rounded-full text-white bg-[#181818] flex justify-center items-center'><PiChartBar/></i>
                 <p className='font-semibold text-[25px] my-5'>Best Features</p>
                 <p className='font-normal text-base text-[#595566]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                 <span className=' text-lg font-semibold text-[#181818] flex items-center mt-7'>Read More <FaArrowRight className=' ms-4'/> </span>
                </article>    
                <article className='border-2 bg-[#ffffff] rounded-3xl p-5'>
                <i className='text-[26px] font-semibold w-[52px] h-[52px] rounded-full text-white bg-[#181818] flex justify-center items-center'><IoEarthOutline/></i>
                 <p className='font-semibold text-[25px] my-5'>Experience</p>
                 <p className='font-normal text-base text-[#595566]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget accumsan augue Donec aliquam.</p>
                 <span className=' text-lg font-semibold text-[#181818] flex items-center mt-7'>Read More <FaArrowRight className=' ms-4'/> </span>
                </article>    
                <article className='border-2 bg-[#ffffff] rounded-3xl p-5'>
                <i className='text-[26px] font-semibold w-[52px] h-[52px] rounded-full text-white bg-[#181818] flex justify-center items-center'><IoSettingsOutline/></i>
                 <p className='font-semibold text-[25px] my-5'>Easy Solutions</p>
                 <p className='font-normal text-base text-[#595566]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                 <span className=' text-lg font-semibold text-[#181818] flex items-center mt-7'>Read More <FaArrowRight className=' ms-4'/> </span>
                </article>    
             
            </div>
     </div>
  
   
   </section>
  )
}
