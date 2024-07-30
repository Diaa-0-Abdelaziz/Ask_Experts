import React from 'react'
import img1 from "../../../imgs/Image (1).jpg"
import img2 from "../../../imgs/Photo (9).jpg"
import picture1 from "../../../imgs/Photo (10).jpg"
import picture2 from "../../../imgs/Photo (11).jpg"
export default function Blog() {
  return (
   <section className='bg-[#F5F5F5] py-20' >
    <div className=' max-w-5xl mx-auto flex flex-col px-5'>
    <div className=' flex flex-wrap md:justify-between justify-around  items-end mb-10'>
    <div>
    <span className='text-base font-normal text-[#FFFFFF] tracking-[2px] bg-[#4EAF4E] px-4 uppercase	rounded-full'>Blog</span>
    <h2  data-aos="fade-right" className=' max-w-[600px] text-[45px] font-bold text-[#181818]  '>Take a look at our latest articles & resources</h2>
    </div>
    <div className=' w-[154.6px]' data-aos="fade-left">
    <p className=' m-auto rounded-full bg-[#FFCC4A] text-[#181818] py-4	px-8'>More News</p>
    </div>
     </div>



     <div className=' flex lg:flex-row lg:w-full m-auto sm:w-4/5 w-full flex-col gap-10'>
          <article data-aos="zoom-in">
            <img src={img1} alt=""  className=' rounded-2xl'/>
            <h4 className='text-3xl	font-semibold	text-[#181818] mt-5'>Consulting Fees Study 2019 (And How To Raise Your Rates)</h4>
            <p className=' text-[#595566] font-normal	text-base my-3	'>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
             <div className=' flex justify-between items-center   py-2 border-t border-b'>
                <div className=' mt-3 text-base	text-[#595566] font-normal flex items-center justify-between gap-3' >
                 <div className=' flex items-center gap-x-2'>
                 <img src={picture1} alt="" className=' w-[59px] h-[59px] rounded-full' />
                 <span>Johan Carter</span>
                 </div>
                 <span className=' w-[.5px] h-3 bg-slate-400'></span>
                 <span>September 1, 2022</span>
                </div>
                <div className=' w-[154.6px]'>
                <p className=' cursor-pointer m-auto rounded-full bg-[#181818] text-white py-4	px-8'>Read More</p>
                </div>
             </div>
          </article>

          <article data-aos="zoom-in">
            <img src={img2} alt=""  className=' rounded-2xl'/>
            <h4 className='text-3xl	font-semibold	text-[#181818] mt-5'>Consulting Fees Study 2019 (And How To Raise Your Rates)</h4>
            <p className=' text-[#595566] font-normal	text-base my-3	'>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
             <div className=' flex justify-between items-center   py-2 border-t border-b'>
                <div className=' mt-3 text-base	text-[#595566] font-normal flex items-center justify-between gap-3' >
                 <div className=' flex items-center gap-x-2'>
                 <img src={picture2} alt="" className=' w-[59px] h-[59px] rounded-full' />
                 <span>Nayra Melson</span>
                 </div>
                 <span className=' w-[.5px] h-3 bg-slate-400'></span>
                 <span>September 1, 2022</span>
                </div>
                <div className=' w-[154.6px]'>
                <p className=' cursor-pointer m-auto rounded-full bg-[#181818] text-white py-4	px-8'>Read More</p>
                </div>
             </div>
          </article>

        
     </div>
      


     
    </div>
   </section>
  )
}
