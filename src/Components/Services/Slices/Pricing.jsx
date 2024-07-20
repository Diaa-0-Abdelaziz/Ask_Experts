import React from 'react'
import pattern from '../../../imgs/Pattern.svg'
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function Pricing() {
    const plans = [
        {
            name:" Basic Plan",
            info:" The argument in favor of using to filler text goes something.",
            salary:"35",
        },
        {
            name:" Standard Plan",
            info:" The argument in favor of using to filler text goes something.",
            salary:"56",
        },
        {
            name:" Standard Plan",
            info:" The argument in favor of using to filler text goes something.",
            salary:"75",
        },
    ]
  return (
   <section className=' bg-[#F5F5F5] sm:mt-20 mt-64 py-28'>
    <div className=''>
    <div className='text-center'>
    <span className='text-base font-normal text-[#FFFFFF] tracking-[2px] bg-[#4EAF4E] px-4 uppercase	rounded-full'>Pricing</span>
    <h2 className=' text-[45px] font-bold text-[#181818]  '>Our Pricing Plan</h2>
    </div>
    <div className=' w-fit m-auto flex flex-wrap gap-10'>
    {plans.map((plan, index)=>
    <article key={index} className=' p-5 bg-white max-w-[367px] rounded-2xl group'>
    <div className=' relative bg-[rgb(48,48,48)] overflow-hidden rounded-2xl py-2 px-7'>
      <img src={pattern} alt="" className=' absolute -top-10 right-3 w-[93px] h-[93px]' />
      <h3 className=' text-white text-[25px] font-semibold'>{plan.name}</h3>
      <p className=' py-3   text-white text-base font-normal max-w-[250px]'>{plan.info}</p>
     <div className='border border-dotted border-[#565656]'></div>
    <div className=' flex gap-2 items-center'>
     <div>
     <span className=' flex items-center text-[50px] text-white font-bold'><MdOutlineAttachMoney/>{plan.salary}</span>
     </div>
      <div>
      <span className='text-base font-normal text-[#FFFFFF] tracking-[2px] bg-[#3E3E3E] px-4 py-1 uppercase group-hover:bg-[#4EAF4E] transition-all duration-500	rounded-full'>monthly</span>
      </div>
    </div>
    </div>
    <ul className=' p-5 flex flex-col gap-5 mt-5'>
      <li className=' flex items-center text-base font-normal'><IoIosArrowDroprightCircle className=' me-5 text-2xl'/><span className=' text-[#595566]'></span>24/7 system monitoring</li>
      <li className=' flex items-center text-base font-normal'><IoIosArrowDroprightCircle className=' me-5 text-2xl'/><span className=' text-[#595566]'></span>Security management</li>
      <li className=' flex items-center text-base font-normal'><IoIosArrowDroprightCircle className=' me-5 text-2xl'/><span className=' text-[#595566]'></span>Secure finance backup</li>
      <li className=' flex items-center text-base font-normal'><IoIosArrowDroprightCircle className=' me-5 text-2xl'/><span className=' text-[#595566]'></span>Remote support</li>
    </ul>
    <p className='text-lg font-semibold text-[#181818] border-2 px-4 py-3 uppercase mt-5 rounded-full text-center group-hover:bg-[#FFCC4A] transition-all duration-500 cursor-pointer'>Get This Plan</p>
  </article>
    )}

    </div>
    </div>
   </section>
  )
}
