import React from 'react'
import Slider from "react-slick";
import { IoIosArrowRoundForward } from "react-icons/io";

import { IoIosArrowRoundBack } from "react-icons/io";
import img1 from "../../../imgs/Proccess2.7.jpg"
export default function FeedBack() {

  function SampleNextArrow(props) {
    const {onClick } = props;
    return (
      <div onClick={onClick}  className=' cursor-pointer md:block hidden'><span className="absolute flex items-center rounded-3xl  top-1/2 -translate-y-full -right-32 text-lg font-bold		 bg-[#F3F3F3] py-1 pl-4 pr-2">Next<i className=" w-11 h-11 rounded-full bg-[#FFC32B] text-[#181818] text-xl flex justify-center items-center ml-2 "><IoIosArrowRoundForward/></i></span></div>
      
    );
  }
  
  function SamplePrevArrow(props) {
    const {onClick } = props;
    return (
      <>
      <div onClick={onClick} className=' cursor-pointer md:block hidden'><span className="absolute flex items-center rounded-3xl text-lg	font-bold	  top-1/2 -translate-y-full -left-32 bg-[#F3F3F3] py-1 pr-4 pl-2  "><i className=" w-11 h-11 rounded-full bg-[#181818] text-xl text-white flex justify-center items-center mr-2 "><IoIosArrowRoundBack/></i>Prev</span></div>
      
      
      </>
    );
  }
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };





  let products = [
    {
      id:1,
      Name:"Kathleen Smith",
      Job:"Web Designer",
      img:img1
    },
    {
      id:2,
      Name:"Kathleen Smith",
      Job:"Web Designer",
      img:img1
    },
  ]
  return (
    <>
    <section className=' overflow-hidden mt-10'>
      <div className=' max-w-[626px] p-2 m-auto text-center mb-10'>
      <span className='text-base font-normal text-[#FFFFFF] tracking-[2px] bg-[#4EAF4E] px-4 uppercase	rounded-full'>Client Feedback</span>
      <p data-aos="fade-right" className=' text-[40px] text-[#CECECE] font-bold	'>
      “Lorem ipsum dolor sit amet, consectetur <span className=' text-[#181818]'>adipiscing elit, sed do eiusmod</span> tempor incididunt ut labore et dolore”
      </p>
      </div>
       <div className=" w-96 m-auto" data-aos="zoom-in">
         <Slider {...settings} className=' '>
          {products.map((pro)=> <div className='  ' key={pro.id}>
          
           <div className=' w-fit mx-auto flex items-center flex-col  overflow-hidden'>
          <img src={pro.img} alt="" className='w-[210px] h-[210px] rounded-full' loading='lazy' />
          <div className=' text-center'>
          <p className='font-semibold text-xl	text-[#181818] mt-5'>{pro.Name}</p>
          <p className='font-semibold text-base text-[#4EAF4E] mt-2'>{pro.Job}</p>
          </div>
        </div>

          </div>)}
      </Slider>
       </div>
        </section>
    </>
  )
}
