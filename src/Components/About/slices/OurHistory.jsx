import React from 'react';
import photo2 from '../../../imgs/Photo-history.jpg'

export default function OurHistory() {
    
  return (
    <section className=' py-40 px-5'>
        <div className=' max-w-5xl mx-auto' >

<div className=' max-w-[732px] text-center mx-auto'>
<span className='text-base font-normal text-[#FFFFFF] tracking-[2px] bg-[#4EAF4E] px-4 uppercase	rounded-full'>Our History</span>
<h2 className=' max-w-[600px] mx-auto text-[45px] font-bold text-[#181818]  '>Better Website Means A User Experience</h2>
<p className='text-base font-normal text-[#595566]'>Ippsum is the result of synergy between our teams and our customers. Our company culture is focused on excellent productivity, customer satisfaction, respect for team and individual achievements.</p>
</div>
<div className='relative  mt-20'>        
     <div className="relative z-50">
        <div className="relative">
            <div className=' after:content-[""] after:z-20 after:bg-[url("./imgs/Pattern.svg")] after:bg-cover after:absolute after:w-60 after:bg-no-repeat after:h-60 after:-top-8 after:-right-0 after:transform      before:content-[""] before:z-30  before:bg-cover before:absolute before:w-[126px] before:h-[113px] before:rounded-2xl before:bg-[#4EAF4E] before:-bottom-28 before:-left-24 before:transform before:translate-x-1/2 before:-translate-y-20'>
                <img src={photo2} alt="she explaines to her something" className="rounded-special relative z-50" />
            </div>
        </div>
        
    </div>
    
    </div>
</div>
    </section>
  )
}
