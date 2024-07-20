import React from 'react'
 import icon1 from "../../../imgs/Icon.svg"
 import icon2 from "../../../imgs/Icon (1).svg"
 import icon3 from "../../../imgs/Icon (2).svg"
 import icon4 from "../../../imgs/Icon (5).svg"
 import icon5 from "../../../imgs/Icon (4).svg"
 import icon6 from "../../../imgs/Icon (3).svg"
export default function ServicesServ() {
    const services = [
        {
            image:icon1,
            title:"Audit & Evaluation",
            descrip:"Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling."
        },
        {
            image:icon2,
            title:"Financial Projections",
            descrip:"Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling."
        },
        {
            image:icon3,
            title:"Funds and investments",
            descrip:"Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling."
        },
        {
            image:icon4,
            title:"Finance & Restructuring",
            descrip:"Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling."
        },
        {
            image:icon5,
            title:"Taxes & Efficiency",
            descrip:"Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling."
        },
        {
            image:icon6,
            title:"Investment banking",
            descrip:"Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling."
        },
    ]
  return (
    <section className=' bg-[#F5F5F5] sm:mt-20 mt-64 py-28'> 
        <div className="container m-auto">
            <div className=' text-center'>
            <span className='text-base font-normal text-[#FFFFFF] tracking-[2px]	 bg-[#4EAF4E] px-4	rounded-full'>SERVICES</span>
            <p className=' m-auto text-[#181818] font-bold text-[45px] max-w-4xl '>Get Control Over Your Business I take your finance to next level</p>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-8 mx-10'>
                {services.map((data, index) => 
                
                <article key={index} className=' bg-[#EBEBEB] rounded-3xl p-10 hover:bg-[#181818]  cursor-pointer group/parent transition-all duration-500'>
                 <img src={data.image} alt="" />
                 <p className='font-semibold text-[25px] group-hover/parent:text-white transition-all duration-500'>{data.title}</p>
                 <p className='font-normal text-base text-[#595566] group-hover/parent:text-white transition-all duration-500'>{data.descrip }</p>
                </article>    
                )}
                
            </div>
        </div>
    </section>
  )
}
