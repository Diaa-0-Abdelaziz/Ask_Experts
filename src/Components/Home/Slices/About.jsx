import React, { useEffect, useState } from 'react'
import brand1 from '../../../imgs/1.svg'
import brand2 from '../../../imgs/2.svg'
import brand3 from '../../../imgs/3.svg'
import brand4 from '../../../imgs/4.svg'
import brand5 from '../../../imgs/5.svg'
import brand6 from '../../../imgs/6.svg'
import { IoMdStar } from "react-icons/io";
import { FaSmile } from "react-icons/fa";
import photo2 from '../../../imgs/Photo2.png'
import "../../../circleProgress.css"
export default function About() {
    const brands = [brand1, brand2, brand3, brand4, brand5, brand6]
  
    const [loadingPercent, setloadingPercent] = useState(0);
    const [dot, setDot] = useState(0);
    const [text, setText] = useState("00");
  
    useEffect(() => {
      
        const secs = 50;
  
        const currentLoadingPercent = 440 - 440 * (secs / 60);
        setloadingPercent(currentLoadingPercent);
  
        const currentDot = 360 * (secs / 60);
        setDot(currentDot);
  
        setText(secs >= 10 ? secs : `0${secs}`);
 
    }, []);








  return (
    <section className=' overflow-hidden'>
        <ul className=' flex gap-10 items-center mx-10 md:flex-nowrap flex-wrap justify-center' >
           
            {
                brands.map((brand, index) => 
                    <li key={index} className='' data-aos="flip-left"> <img src={brand} alt="" /></li>
                )}
           
        </ul>
        <div className="container m-auto">
        <div className='flex flex-wrap mx-10 justify-around gap-20 mt-36'>
        <div className=' max-w-[480px]'>
          <span className='text-base font-normal text-[#181818] bg-[#FFCC4A] px-3	rounded-full' data-aos="zoom-in">ABOUT US</span>
          <p className='text-[45px] font-bold text-[#181818]' data-aos="fade-right">About our Consuting Agency Team</p>
          <p className='font-bold	text-lg	text-[rgb(24,24,24)]' data-aos="fade-right">We create experiences and build products that make business grow</p>
          <p className='text-base font-normal text-[#595566]' data-aos="fade-right">Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</p>
          <ul  className=' relative flex flex-wrap justify-around gap-y-10 mt-10 after:content-[""] after:bg-[#D8D8D8] after:absolute after:w-full after:border after:-top-5 after:-left-0       before:content-[""] before:bg-[#D8D8D8] before:absolute before:w-full before:border before:-bottom-5 before:-left-0'>
            <li data-aos="zoom-in" className='bg-[#F6F6F6] rounded-[15px] px-9 py-5'> 
              <p className='text-3xl flex items-center gap-3 mb-3'><IoMdStar className=' text-[#FFCC4A]'/> <span className='font-bold	text-[#181818]'>400+</span></p>
              <span className='text-base font-bold'>Business Services</span>
            </li>
            <li  className='sm:block hidden'><div className=' border h-full bg-[#D8D8D8]'></div></li>
            <li data-aos="zoom-in" className='bg-[#F6F6F6] rounded-[15px] px-9 py-5'>
              <p className='text-3xl flex items-center gap-3 mb-3'><FaSmile className=' text-[#4EAF4E]'/> <span className='font-bold	text-[#181818]'>100+</span></p>
              <span className='text-base font-bold'>Happy Customer</span>
            </li>
          </ul>
        
        </div>
        <div className='relative max-w-[514px]' data-aos="fade-left">        
         <div className="relative z-50">
            <div className="relative">
                <div className=' after:content-[""] after:z-20 after:bg-[url("./imgs/Pattern.svg")] after:bg-cover after:absolute after:w-3/5 after:bg-no-repeat after:h-full after:top-1/2 after:-left-1/2 after:transform after:translate-x-1/2 after:-translate-y-20'>
                    <img src={photo2} alt="she explaines to her something" className="rounded-special relative z-50" />
                </div>
                <article className=' absolute max-w-96 xSmall:-bottom-10 -bottom-60 px-3 py-2 xSmall:-left-10 left-0 z-50 bg-white shadow-2xl justify-around items-center rounded-special flex flex-wrap '>
                    <div className="Appstar ">
                        <div className="container">
                          <div className="text">{text}+</div>
                          <div style={{ transform: `rotate(${dot}deg)` }} className="dot"></div>
                          <svg>
                            <circle cx="70" cy="70" r="70" />
                            <circle strokeDashoffset={loadingPercent} cx="70" cy="70" r="70" strokeLinecap="round"   />
                          </svg>
                        </div>
                      </div>
                      <p className=' text-[#181818] text-base font-bold max-w-32 xSmall:text-left text-center'>Market Experiences</p>
                   </article>
                
            </div>
            
        </div>
        
        </div>
       </div>
        </div>
    </section>
  )
}
