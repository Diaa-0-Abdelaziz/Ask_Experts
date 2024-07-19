import React from 'react'
import picture1 from '../../../imgs/Photo (1)our team.jpg'
import picture2 from '../../../imgs/Photo (2)our team.jpg'
import picture3 from '../../../imgs/Photo (3)our team.jpg'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
export default function OurTeam() {
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
    ]
  return (
    <section className=' py-40 px-5 bg-[#F5F5F5]'>
      <div className=' max-w-[1200px] mx-auto'> 
      <span className='text-base font-normal text-[#181818] bg-[#FFCC4A] px-3	rounded-full uppercase'>our team</span>
      <h2 className=' max-w-[600px] text-[45px] font-bold text-[#181818]  '>We champion the bold to achieve the extraordinary</h2>
      <p className='max-w-[643px] text-base font-normal text-[#595566]'>Ippsum is the result of synergy between our teams and our customers. Our company culture is focused on excellent productivity, customer satisfaction, respect for team.</p>
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
      
      
      </div>
    </section>
  )
}
