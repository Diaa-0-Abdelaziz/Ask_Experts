import React from 'react'
import img1 from "../../../imgs/Image (1).jpg"
import img2 from "../../../imgs/Photo (9).jpg"
import img3 from "../../../imgs/Image (3).jpg"
import img4 from "../../../imgs/Image (4).jpg"
import img5 from "../../../imgs/Image (5).jpg"
import img6 from "../../../imgs/Image (6).jpg"
import picture1 from "../../../imgs/Photo (10).jpg"
import picture2 from "../../../imgs/Photo (11).jpg"
export default function BlogArticles() {
   const articles = [
      {
         picture:img1,
         header:"Consulting Fees Study 2019 (And How To Raise Your Rates)",
         body:"Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
         auther_Picture:picture1,
         auther_Name:"John Carter"
      },
      {
         picture:img2,
         header:"What is growth hacking and how to apply it to your startup",
         body:"Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
         auther_Picture:picture2,
         auther_Name:"Nayra Melson"
      },
      {
         picture:img3,
         header:"Five Steps to Implement Motivation in Management",
         body:"Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
         auther_Picture:picture1,
         auther_Name:"John Carter"
      },
      {
         picture:img4,
         header:"Team Identifiers, Benefits, and How to Build One that Works",
         body:"Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
         auther_Picture:picture2,
         auther_Name:"Nayra Melson"
      },
      {
         picture:img5,
         header:"Professional Development Goals: Steps and Examples",
         body:"Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
         auther_Picture:picture1,
         auther_Name:"John Carter"
      },
      {
         picture:img6,
         header:"A Guide on What to Bring on the First Day of Work",
         body:"Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
         auther_Picture:picture2,
         auther_Name:"Nayra Melson"
      },
   ]
  return (
   <section className='bg-[#F5F5F5] py-20' >
    <div className=' max-w-5xl mx-auto flex flex-col px-5'>
    <div className=' flex flex-wrap md:justify-between justify-around  items-end mb-10'>
    <div>
    <span className='text-base font-normal text-[#FFFFFF] tracking-[2px] bg-[#4EAF4E] px-4 uppercase	rounded-full'>Blog</span>
    <h2 className=' max-w-[600px] text-[45px] font-bold text-[#181818]  '>Take a look at our latest articles & resources</h2>
    </div>
    <div className=' w-[154.6px]'>
    <p className=' m-auto rounded-full bg-[#FFCC4A] text-[#181818] py-4	px-8 cursor-pointer'>More News</p>
    </div>
     </div>

    </div>


     <div className=' grid lg:grid-cols-2 grid-cols-1 gap-2 lg:mx-30 md:mx-20 mx-5'>
     {articles.map((article, index)=>
   
          <article key={index} className=' p-10'>
            <img src={article.picture} alt=""  className=' rounded-2xl w-full '/>
            <h4 className='text-3xl	font-semibold	text-[#181818] mt-5'>{article.header}</h4>
            <p className=' text-[#595566] font-normal	text-base my-3	'>{article.body}</p>
             <div className=' flex justify-between items-center   py-2 border-t border-b'>
                <div className=' mt-3 text-base	text-[#595566] font-normal flex items-center justify-between gap-3' >
                 <div className=' flex items-center gap-x-2'>
                 <img src={article.auther_Picture} alt="" className=' w-[59px] h-[59px] rounded-full' />
                 <span>{article.auther_Name}</span>
                 </div>
                 <span className=' w-[.5px] h-3 bg-slate-400'></span>
                 <span>September 1, 2022</span>
                </div>
                <div className=' w-[154.6px]'>
                <p className=' cursor-pointer m-auto rounded-full bg-white hover:bg-[#181818] hover:text-white border-2 transition-all duration-500 text-[#181818] py-4 px-8'>Read More</p>
                </div>
             </div>
          </article>
   )}

          {/* <article className=' p-10'>
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
          </article> */}

        
     </div>
      


     
   </section>
  )
}
