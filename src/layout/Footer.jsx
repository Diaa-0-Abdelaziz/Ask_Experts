import React from 'react'
// import photo from "./imgs/Photo-footer.jpg"
import logo from "../imgs/Logo.png"
export default function Footer() {
  return (
   <footer className=' relative mt-10 bg-[url("./imgs/Photo-footer.jpg")]  bg-cover'>
   
   {/* <div className=' flow-root'> 
<p>lllllllllllllllllllllllllllllllllll</p>
<p>lllllllllllllllllllllllllllllllllll</p>
<p>lllllllllllllllllllllllllllllllllll</p>
<p>lllllllllllllllllllllllllllllllllll</p>
<p>lllllllllllllllllllllllllllllllllll</p>
<p>lllllllllllllllllllllllllllllllllll</p>
<p>lllllllllllllllllllllllllllllllllll</p>
<p>lllllllllllllllllllllllllllllllllll</p>
<p>lllllllllllllllllllllllllllllllllll</p>
<p>lllllllllllllllllllllllllllllllllll</p>
<p>lllllllllllllllllllllllllllllllllll</p>
<p>lllllllllllllllllllllllllllllllllll</p>
<p>lllllllllllllllllllllllllllllllllll</p>
<p>lllllllllllllllllllllllllllllllllll</p>
<p>lllllllllllllllllllllllllllllllllll</p>
<p>lllllllllllllllllllllllllllllllllll</p>
   </div> */}
   
   
   
   
   
   
    {/* <img src={photo} alt="" className=' w-full h-full' /> */}
    <div className=' py-5  h-full w-full bg-[#181818BF] backdrop-blur-lg   '>
        <div className='flex flex-wrap gap-y-10 justify-around'>

       
    <div className=' max-w-[352px]'>
    <div className='flex gap-2 items-center'> <img src={logo} alt="logo" className=' w-10'/><span className='text-3xl font-semibold text-white '>AskExperts</span></div>
    <ul className=' flex text-xl font-semibold text-white mt-10'>
        <li>Fb. /</li>
        <li>Ig. /</li>
        <li>Tw. /</li>
        <li>Be.</li>
    </ul>
    </div>
    <div className='lg:block hidden border border-[#707070]'></div>

    <ul className=' mx-10 flex flex-wrap justify-around gap-x-20 gap-y-10'>
        <li>
            <span className='text-xl font-semibold text-white relative after:content-[""] after:border-[#FFCC4A] after:absolute after:w-1/3 after:border-2 after:rounded-3xl after:-bottom-2 after:-left-0'>Product</span>
            <ul className=' mt-5 list-disc text-white text-base	font-normal'>
                <li>Service</li>
                <li>FAQ</li>
                <li>Single Service</li>
                <li>Get Quote</li>
                <li>Prices</li>
            </ul>
        </li>
        <li>
            <span className='text-xl font-semibold text-white relative after:content-[""] after:border-[#FFCC4A] after:absolute after:w-1/3 after:border-2 after:rounded-3xl after:-bottom-2 after:-left-0'>Company</span>
            <ul className=' mt-5 list-disc text-white text-base	font-normal'>
                <li>About</li>
                <li>News</li>
                <li>Contacts</li>
                <li>Testimonials</li>
                <li>Our team</li>
                <li>Our approach</li>
            </ul>
        </li>
        <li>
            <span className='text-xl font-semibold text-white relative after:content-[""] after:border-[#FFCC4A] after:absolute after:w-1/3 after:border-2 after:rounded-3xl after:-bottom-2 after:-left-0'>Address</span>
            <ul className=' mt-5 text-white text-base	font-normal'>
                <li>1700 W Blancke St, kiyev port south USA, America</li>
                <li>
                <div className=' mt-10'>
                <span className=' font-semibold text-lg cursor-pointer m-auto rounded-full text-[#181818] bg-white py-4	px-8'>Book an Appoinment</span>
                </div>
                </li>
                
            </ul>
        </li>
    </ul>

    </div>

    <p className=' mx-5 mt-20 pt-5 relative text-white text-base text-center	font-normal	after:content-[""] after:border-[#707070] after:absolute after:w-3/4 after:border after:top-0 after:left-1/2 after:-translate-x-1/2'>&copy;2022 Consultalk. All rights reserved | Terms of Service | Privacy Policy</p>

    </div>
   </footer>
  )
}
