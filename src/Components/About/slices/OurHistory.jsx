import React from 'react';
import photo2 from '../../../imgs/Photo-history.jpg'
import { RiPlayLargeFill } from "react-icons/ri";

export default function OurHistory() {
    
  return (
    <section className=' py-40 px-5'>
        <div className=' max-w-5xl mx-auto' >

<div className=' max-w-[732px] text-center mx-auto'>
<span className='text-base font-normal text-[#FFFFFF] tracking-[2px] bg-[#4EAF4E] px-4 uppercase	rounded-full'>Our History</span>
<h2 className=' max-w-[600px] mx-auto text-[45px] font-bold text-[#181818]  '>Better Website Means A User Experience</h2>
<p className='text-base font-normal text-[#595566]'>Ippsum is the result of synergy between our teams and our customers. Our company culture is focused on excellent productivity, customer satisfaction, respect for team and individual achievements.</p>
</div>
<div className='mt-20'>        
     <div className=" z-50">
        <div>
            <div className=' relative after:content-[""] after:z-20 after:bg-[url("./imgs/Pattern.svg")] after:bg-cover after:absolute after:w-60 after:bg-no-repeat after:h-60 after:-top-8 after:-right-0 after:transform      before:content-[""] before:z-30  before:bg-cover before:absolute before:w-[126px] before:h-[113px] before:rounded-2xl before:bg-[#4EAF4E] before:-bottom-28 before:-left-24 before:transform before:translate-x-1/2 before:-translate-y-20'>
                <img src={photo2} alt="she explaines to her something" className=" rounded-special w-full relative z-40" />
                <div className=' flex items-center justify-center bg-black/50 absolute top-0 left-0 right-0 bottom-0 rounded-special z-50'>
                     <div className=' flex items-center justify-center border-[.3px]  rounded-full border-[#FFFFFF6B] bg-[#FFFFFF14] w-[109px] h-[109px]'>
                        <div className='flex items-center justify-center w-[87px] h-[87px] rounded-full bg-[#FFFFFF2B] border-[.3px] border-[#D0D0D0]'>
                            <div className='flex items-center justify-center cursor-pointer w-[67px] h-[67px] rounded-full bg-white group/play '>
                                 <RiPlayLargeFill className=' text-[#3B3A5D] text-2xl group-hover/play:text-[#ff1f1f] transition-all duration-300'/>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
        
    </div>
    
    </div>
</div>
    </section>
  )
}
