import React from 'react'
import { FaWallet } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

import { IoMdTrendingUp } from "react-icons/io";

import photo2 from '../../../imgs/PhotoServices.jpg'
export default function Proccess() {
  return (
    <section>
        <div className=" md:mx-28 mx-10 mt-40">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-20 ">
              
              
              
            <div className=' mt-24'>        
                <div className=" z-50">
                    <div>
                        <div className=' relative after:content-[""] after:z-20 after:bg-[url("./imgs/Pattern.svg")] after:bg-cover after:absolute after:w-60 after:bg-no-repeat after:h-60  after:-bottom-10 after:-left-10      before:content-[""] before:z-30  before:bg-cover before:absolute before:w-[126px] before:h-[113px] before:rounded-2xl before:bg-[#4EAF4E] before:-top-8 before:-right-5 before:transform '>
                            <img src={photo2} alt="she explaines to her something" className=" rounded-special w-full relative z-40" />
                            
                        </div>
                    </div>
                    
                </div>
            </div>
              
              
              
               <div>
               <span className='text-base font-normal text-[#FFFFFF] tracking-[2px] bg-[#4EAF4E] px-4	rounded-full'>PROCCESS</span>
               <h2 className=' text-[45px] font-bold text-[#181818] mt-10 '>Our Consuting Service Development</h2>
               <ul className=' max-w-[459px]'>
                <li className=' relative flex justify-start gap-5 py-10'>
                    <div>
                    <span className=' text-3xl font-semibold w-[52px] h-[52px] rounded-full text-[#181818] flex justify-center items-center'> <FaWallet/> </span>
                    </div>
                    <div>
                        <p className=' font-semibold text-xl text-[#181818]	'>Banking and Finance</p>
                        <p className='text-base font-normal	text-[#595566]	'>Professionally fashion wireless leadership rather than prospective experiences my cardinate clicks-and-mortar testing whereas.</p>
                    </div>
                </li>
                <li  className=' relative flex justify-start gap-5 py-10'>
                    <div>
                    <span className=' text-4xl font-semibold	w-[52px] h-[52px] rounded-full text-[#181818] flex justify-center items-center'> <IoIosSettings className=""/> </span>
                    </div>
                    <div>
                        <p className=' font-semibold text-xl text-[#181818]	'>Logistic and Transportation</p>
                        <p className='text-base font-normal	text-[#595566]	'>Compellingly embrace empowered e-business after user friendly intellectual capital. Interactively actualize front-end processes.</p>
                    </div>
                </li>
                <li  className=' relative flex justify-start gap-5 py-10'>
                   <div>
                   <span className=' text-4xl font-semibold	w-[52px] h-[52px] rounded-full text-[#181818] flex justify-center items-center'><IoMdTrendingUp/></span>
                   </div>
                    <div>
                        <p className=' font-semibold text-xl text-[#181818]	'>Trading</p>
                        <p className='text-base font-normal	text-[#595566]	'>Uniquely matrix economically sound value through cooperative technology parallel task fully researched data and enterprise.</p>
                    </div>
                </li>
                
               </ul>
               </div>

               {/* <div>
               <span className='sm:text-base text-xs font-normal text-[#181818] tracking-[2px] bg-[#FFCC4A] px-4	rounded-full uppercase '>Growing with our clients</span>
               <h2 className='text-[45px] font-bold text-[#181818] mb-10'>30 Years of Experience</h2>
               <p className=' font-normal text-base	text-[#595566] mb-10'>Capitalize on low hanging fruit to identify a ballpark value added activity beta test. Override the digital divide with additional from DevOps.</p>
               <p className=' font-normal text-base	text-[#595566] mb-10'>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
               <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-8'>
             
                
                <article className=' border-2 bg-[#EBEBEB] rounded-3xl py-5 px-2'>
                <i className='text-[26px] font-semibold w-[52px] h-[52px] rounded-full text-white bg-[#181818] flex justify-center items-center'><CgSandClock/></i>
                 <p className='font-semibold text-[25px] '>Consistency</p>
                 <p className='font-normal text-base text-[#595566]'>Podcasting operational change management  workflow.</p>
                </article>    
                <article className='border-2 bg-[#EBEBEB] rounded-3xl py-5 px-2'>
                <i className='text-[26px] font-semibold w-[52px] h-[52px] rounded-full text-white bg-[#181818] flex justify-center items-center'><PiChartBar/></i>
                 <p className='font-semibold text-[25px] '>Consistency</p>
                 <p className='font-normal text-base text-[#595566]'>Podcasting operational change management  workflow.</p>
                </article>    
                <article className='border-2 bg-[#EBEBEB] rounded-3xl py-5 px-2'>
                <i className='text-[26px] font-semibold w-[52px] h-[52px] rounded-full text-white bg-[#181818] flex justify-center items-center'><IoEarthOutline/></i>
                 <p className='font-semibold text-[25px] '>Consistency</p>
                 <p className='font-normal text-base text-[#595566]'>Podcasting operational change management  workflow.</p>
                </article>    
                <article className='border-2 bg-[#EBEBEB] rounded-3xl py-5 px-2'>
                <i className='text-[26px] font-semibold w-[52px] h-[52px] rounded-full text-white bg-[#181818] flex justify-center items-center'><PiChartLine/></i>
                 <p className='font-semibold text-[25px] '>Consistency</p>
                 <p className='font-normal text-base text-[#595566]'>Podcasting operational change management  workflow.</p>
                </article>    
             
            </div>
               
               </div> */}
            </div>
        </div>
    </section>
  )
}
