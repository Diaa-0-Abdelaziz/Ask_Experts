import React from 'react'
export default function MainShaired({pathImage, headLine, paragraph}){

    return(
        <section className={`relative ${pathImage} bg-cover	 py-28`}>
      <div className="container ">
      <article className='bg-[#FFFFFFD9] py-[50px] 2xSM:px-[58px] md:ml-52 mx-4 px-5  w-fit	 rounded-special'>
      <span className='text-base font-normal text-[#181818] tracking-[2px] bg-[#FFCC4A] px-4	rounded-full'>{headLine}</span>
        <p className='md:text-[50px] text-[25px] font-bold text-[#181818] mb-2'>{paragraph}</p>
       </article>
      
      </div>
    </section>
    )
}