import React from 'react'
import { HiMiniPlusSmall } from "react-icons/hi2";


import back from "../../../imgs/Background Pattern.png"
import proccess1 from "../../../imgs/Proccess2.1.jpg"
import proccess2 from "../../../imgs/Proccess2.2.jpg"
import proccess3 from "../../../imgs/Proccess2.3.jpg"
import proccess4 from "../../../imgs/Proccess2.4.jpg"
import proccess5 from "../../../imgs/Proccess2.5.jpg"
import proccess6 from "../../../imgs/Proccess2.6.jpg"
export default function Proccess2() {
    const cart = [
        {
            picture:proccess1,
            title:"Taxes & Efficiency",
            category: "Business"
        },
        {
            picture:proccess2,
            title:"Taxes & Efficiency",
            category: "Business"
        },
        {
            picture:proccess3,
            title:"Taxes & Efficiency",
            category: "Business"
        },
        {
            picture:proccess4,
            title:"Taxes & Efficiency",
            category: "Business"
        },
        {
            picture:proccess5,
            title:"Taxes & Efficiency",
            category: "Business"
        },
        {
            picture:proccess6,
            title:"Taxes & Efficiency",
            category: "Business"
        },
    ]
  return (
   <section className=' sm:py-0  py-10  relative mt-20 '>

    <div className='sm:block hidden  bg-[#181818] h-screen'>
    <img src={back} alt="" className=' w-screen h-screen' />
    </div>
    <div className=' top-0 left-0 bottom-0 right-0 '>


     <div className='  w-9/12 m-auto sm:-mt-96 mt-10 '>
        <div className=' flex flex-wrap md:justify-between justify-around  items-end mb-10'>
    <div>
    <span className='text-base font-normal text-[#FFFFFF] tracking-[2px] bg-[#4EAF4E] px-4	rounded-full'>PROCCESS</span>
    <h2 data-aos="fade-up-right" className=' max-w-[740px] text-[45px] font-bold sm:text-[#FFFFFF] text-[#181818]  '>Our client, global analytical techno company, wanted to build market.</h2>
    </div>
    <div className=' w-[154.6px]' data-aos="fade-up-left">
    <p className=' m-auto rounded-full bg-[#FFCC4A] text-[#181818] py-4	px-8'>More Gallery</p>
    </div>
     </div>


     <div className=' p-5 grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 bg-[#FAFAFA] rounded-3xl shadow-xl'>
        {cart.map((item, index)=>
          <article data-aos="fade-right" key={index} className='group relative overflow-hidden rounded-3xl bg-slate-950'>
        <img src={item.picture} alt="" className=' w-full' />
        <div className=' absolute w-full h-full top-full bg-[#181818BF] backdrop-blur-sm group-hover:top-0  transition-all duration-500 '>
             <div className=' absolute top-0 right-0 p-5'>
                <HiMiniPlusSmall className=' w-[54px] h-[54px] bg-gradient-to-r from-[#FFE9B1] to-[#DDA003] rounded-full cursor-pointer'/>
             </div>

             <div className=' absolute bottom-0 p-5'>
                <p className=' text-[25px] font-semibold text-white'>{item.title}</p>
                <p className='text-[#FFCC4A] font-normal text-base'>{item.category}</p>
             </div>
        </div>
      </article>
        )}
     </div>
   <ul className=' flex justify-around flex-wrap md:gap-0 gap-10 '>
    <li data-aos="zoom-in">
        <p className=' text-[50px] font-bold'>1125+</p>
        <p className=' text-lg font-medium'>Successful Work</p>
    </li>
    <li data-aos="zoom-in">
        <p className=' text-[50px] font-bold'>908+</p>
        <p className=' text-lg font-medium'>Team member</p>
    </li>
    <li data-aos="zoom-in">
        <p className=' text-[50px] font-bold'>258+</p>
        <p className=' text-lg font-medium'> Happy Customers</p>
    </li>
    <li data-aos="zoom-in">
        <p className=' text-[50px] font-bold'>564+</p>
        <p className=' text-lg font-medium'>Creative Idea</p>
    </li>
   
   </ul>
     </div>
    </div>
   
   </section>
  )
}
