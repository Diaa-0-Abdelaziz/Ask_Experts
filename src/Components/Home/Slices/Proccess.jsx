import React from 'react'
import { CgSandClock } from "react-icons/cg";
import { PiChartBar } from "react-icons/pi";
import { IoEarthOutline } from "react-icons/io5";
import { PiChartLine } from "react-icons/pi";

export default function Proccess() {
  return (
    <section className=' overflow-hidden'>
        <div className=" md:mx-28 mx-10 mt-40">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-20 ">
               <div>
               <span className='text-base font-normal text-[#FFFFFF] tracking-[2px] bg-[#4EAF4E] px-4	rounded-full'>PROCCESS</span>
               <h2 className=' text-[45px] font-bold text-[#181818] '  data-aos="fade-right">There have some easy steps to join with us!</h2>
               <p className=' font-normal text-base	text-[#595566] mb-10	' data-aos="fade-left">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
               <ul>
                <li data-aos="fade-right" className=' relative flex justify-start gap-5 py-10 after:content-[""] after:bg-[#D8D8D8] after:absolute after:w-full after:border after:top-0 after:-left-0'>
                    <div>
                    <span className=' text-[26px] font-semibold w-[52px] h-[52px] rounded-full text-[#181818] bg-[#FFCC4A] flex justify-center items-center'>1</span>
                    </div>
                    <div>
                        <p className=' font-semibold text-xl text-[#181818]	'>Setup Account</p>
                        <p className='text-base font-normal	text-[#595566]	'>We understand the importance of approaching each work integrally.</p>
                    </div>
                </li>
                <li data-aos="fade-left" className=' relative flex justify-start gap-5 py-10 after:content-[""] after:bg-[#D8D8D8] after:absolute after:w-full after:border after:top-0 after:-left-0'>
                    <div>
                    <span className=' text-[26px] font-semibold	w-[52px] h-[52px] rounded-full text-white bg-[#4EAF4E] flex justify-center items-center'>2</span>
                    </div>
                    <div>
                        <p className=' font-semibold text-xl text-[#181818]	'>Consult with us</p>
                        <p className='text-base font-normal	text-[#595566]	'>Increase social reach and productivity with our App Directory, a collection.</p>
                    </div>
                </li>
                <li data-aos="fade-right"  className=' relative flex justify-start gap-5 py-10 after:content-[""] after:bg-[#D8D8D8] after:absolute after:w-full after:border after:top-0 after:-left-0'>
                   <div>
                   <span className=' text-[26px] font-semibold	w-[52px] h-[52px] rounded-full text-white bg-[#181818] flex justify-center items-center'>3</span>
                   </div>
                    <div>
                        <p className=' font-semibold text-xl text-[#181818]	'>Payment & Boost</p>
                        <p className='text-base font-normal	text-[#595566]	'>We encourage every team member to be a whole person. We have a flexible.</p>
                    </div>
                </li>
                
               </ul>
               </div>

               <div>
               <span className='sm:text-base text-xs font-normal text-[#181818] tracking-[2px] bg-[#FFCC4A] px-4	rounded-full uppercase '>Growing with our clients</span>
               <h2 data-aos="fade-right" className='text-[45px] font-bold text-[#181818] mb-10'>30 Years of Experience</h2>
               <p data-aos="fade-right" className=' font-normal text-base	text-[#595566] mb-10'>Capitalize on low hanging fruit to identify a ballpark value added activity beta test. Override the digital divide with additional from DevOps.</p>
               <p data-aos="fade-right" className=' font-normal text-base	text-[#595566] mb-10'>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
               <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-8'>
             
                
                <article data-aos="zoom-in" className=' border-2 bg-[#EBEBEB] rounded-3xl py-5 px-2'>
                <i className='text-[26px] font-semibold w-[52px] h-[52px] rounded-full text-white bg-[#181818] flex justify-center items-center'><CgSandClock/></i>
                 <p className='font-semibold text-[25px] '>Consistency</p>
                 <p className='font-normal text-base text-[#595566]'>Podcasting operational change management  workflow.</p>
                </article>    
                <article data-aos="zoom-in" className='border-2 bg-[#EBEBEB] rounded-3xl py-5 px-2'>
                <i className='text-[26px] font-semibold w-[52px] h-[52px] rounded-full text-white bg-[#181818] flex justify-center items-center'><PiChartBar/></i>
                 <p className='font-semibold text-[25px] '>Consistency</p>
                 <p className='font-normal text-base text-[#595566]'>Podcasting operational change management  workflow.</p>
                </article>    
                <article data-aos="zoom-in" className='border-2 bg-[#EBEBEB] rounded-3xl py-5 px-2'>
                <i className='text-[26px] font-semibold w-[52px] h-[52px] rounded-full text-white bg-[#181818] flex justify-center items-center'><IoEarthOutline/></i>
                 <p className='font-semibold text-[25px] '>Consistency</p>
                 <p className='font-normal text-base text-[#595566]'>Podcasting operational change management  workflow.</p>
                </article>    
                <article data-aos="zoom-in" className='border-2 bg-[#EBEBEB] rounded-3xl py-5 px-2'>
                <i className='text-[26px] font-semibold w-[52px] h-[52px] rounded-full text-white bg-[#181818] flex justify-center items-center'><PiChartLine/></i>
                 <p className='font-semibold text-[25px] '>Consistency</p>
                 <p className='font-normal text-base text-[#595566]'>Podcasting operational change management  workflow.</p>
                </article>    
             
            </div>
               
               </div>
            </div>
        </div>
    </section>
  )
}
