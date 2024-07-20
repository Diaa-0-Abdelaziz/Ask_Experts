import React from 'react'
import picture1 from '../../../imgs/Photo (1)our team.jpg'
import picture2 from '../../../imgs/Photo (2)our team.jpg'
import picture3 from '../../../imgs/Photo (3)our team.jpg'
import picture4 from '../../../imgs/Photo (4)our team.jpg'
import picture5 from '../../../imgs/Photo (5)our team.jpg'
import picture6 from '../../../imgs/Photo (6)our team.jpg'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
export default function TeamMembers() {
    const teams = [
        {
            picture:picture1,
            name:"Sarah Jasmine",
            info:"Leverage agile frameworks to provide a robust synopsis for high level overviews.",
            jop:"CEO at Company"
        },
        {
            picture:picture2,
            name:"John Carter",
            info:"Leverage agile frameworks to provide a robust synopsis for high level overviews.",
            jop:"Manager"
        },
        {
            picture:picture3,
            name:"Daisy Stella",
            info:"Leverage agile frameworks to provide a robust synopsis for high level overviews.",
            jop:"CEO at Company"
        },
        {
            picture:picture4,
            name:"Maya Elizabeth",
            info:"Leverage agile frameworks to provide a robust synopsis for high level overviews.",
            jop:"CEO at Company"
        },
        {
            picture:picture5,
            name:"Ryan Jackson",
            info:"Leverage agile frameworks to provide a robust synopsis for high level overviews.",
            jop:"CEO at Company"
        },
        {
            picture:picture6,
            name:"Lilly Victoria",
            info:"Leverage agile frameworks to provide a robust synopsis for high level overviews.",
            jop:"CEO at Company"
        },
    ]
  return (
   <section className=' lg:mx-20 mx-5 mt-10'>
      <div className=' flex flex-wrap md:justify-between justify-around gap-5  items-end mb-10'>
    <div>
    <h2 className=' max-w-[740px] text-[45px] font-bold sm:text-[#181818] text-[#181818]  '>Meet Our Great Team</h2>
    <p className='text-base font-normal text-[#595566] max-w-[650px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.</p>
    </div>
    <div className=' w-[154.6px]'>
    <p className='m-auto rounded-full bg-[#181818] text-[#ffffff] py-4	px-8 cursor-pointer'>Get in touch</p>
    </div>
     </div>
     <div className=' flex gap-5 justify-around flex-wrap mt-20'>
        {teams.map((person, index)=>
        <article className=' w-fit ' key={index}>
        <div className='relative rounded-3xl bg-slate-600 w-fit overflow-hidden group/play'>
           <img src={person.picture} alt="" />
           <span className='text-base font-semibold text-white bg-[#181818] px-3 rounded-full uppercase absolute right-5 bottom-5  group-hover/play:bg-[#FFCC4A] group-hover/play:text-[#181818] transition-all duration-300'>{person.jop}</span>
        </div>
        <h3 className=' my-5 text-[#181818] text-3xl font-bold text-center   '>{person.name}</h3>
        <p className='max-w-[343px] text-center text-base font-normal text-[#595566]'>{person.info}</p>
        
        <ul className=' flex justify-around max-w-28 mx-auto mt-5 text-[#181818]'>
           <li><FaInstagram className=' cursor-pointer'/></li>
           <li><FaFacebook className=' cursor-pointer'/></li>
           <li><IoLogoTwitter className=' cursor-pointer'/></li>
        </ul>
       </article>
        )}
      </div>
   </section>
  )
} 
