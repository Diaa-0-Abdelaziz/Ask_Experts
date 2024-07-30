import React, { useState } from 'react'
import { TbClockHour3 } from "react-icons/tb";
import { RiMenu3Line } from "react-icons/ri";

import { GrLocation } from "react-icons/gr";

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import logo from '../imgs/Logo.svg';
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";
import { PiPhoneLight } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)

    let location = useLocation()

    let navLinks = [
      {
        pathname:'/',
        navName:'Home'
      },
      {
        pathname:'/about',
        navName:'About'
      },
      {
        pathname:'/services',
        navName:'Services'
      },
      {
        pathname:'/team',
        navName:'Team'
      },
      {
        pathname:'/blog',
        navName:'Blog'
      },
      {
        pathname:'/contact',
        navName:'Contact'
      },
    ]








    const handleMenu = ()=>{
        setToggleMenu(!toggleMenu)
    }
    const handleCloseMenu = ()=>{
        setToggleMenu(false)
    }
  return (
    <>
    <div className="bg-[#181818] xSmall:block hidden">
      <div className="justify-around flex container m-auto py-[18px]">
      <p className='   text-sm	  text-white flex gap-1'><TbClockHour3 className=' m-auto text-[#FFCC4A]'/><span> Monday - Friday8AM - 9PM</span></p>
      <div className='  text-sm	  text-white flex gap-1'><GrLocation className=' m-auto text-[#FFCC4A]'/><span>725 Park Ave, New York</span></div>
      <ul className='  mt-1  text-sm	 text-white flex gap-3 '>
        <li><FaInstagram/></li>
        <li><FaFacebook/></li>
        <li><IoLogoTwitter/></li>
        <li><IoLogoLinkedin/></li>
      </ul>
      </div>
    </div>
    
    <nav className='bg-[#1B1B1B] py-10 relative'>
      <div className="justify-around flex container m-auto ">
        <div className='flex gap-2 items-center'> <img src={logo} alt="logo" className=' w-10'/><span className='text-3xl font-semibold text-white '>AskExperts</span></div>
        <ul className={`z-50	flex xl:flex-row flex-col gap-4 text-lg	font-normal	 xl:static xl:w-auto xl:bg-transparent absolute left-0 bg-[#1B1B1B] w-full ${toggleMenu ? 'h-56' : 'h-0'} xl:h-auto duration-500 overflow-hidden top-full`}>
         
         {navLinks.map((link, index) =>
        
        <li className=' flex items-center cursor-pointer' key={index}>
          
          {location.pathname === link.pathname ? <GoDotFill className=' text-[#4EAF4E]'/> : <GoDot className=' text-[#515151]'/>}
          <Link className={` ${location.pathname === link.pathname ? 'text-[#5AB612]' : 'text-white'}`} to={link.pathname} onClick={handleCloseMenu}>{link.navName}</Link></li>
        )}
          {/* <li className='text-white flex items-center cursor-pointer'><GoDot className='  '/>About</li> */}



          {/* <li className='text-white flex items-center cursor-pointer'><GoDot className=' me-2 text-[#515151]'/>Services</li>
          <li className='text-white flex items-center cursor-pointer'><GoDot className=' me-2 text-[#515151]'/>Work</li>
          <li className='text-white flex items-center cursor-pointer'><GoDot className=' me-2 text-[#515151]' />Pages</li>
          <li className='text-white flex items-center cursor-pointer'><GoDot className=' me-2 text-[#515151]'/>Contact</li> */}
       
       
        </ul>
        <div className='text-lg	hidden gap-2 bg-white py-2 sm:flex	pr-10 pl-2.5	 rounded-[42px]'>
          <PiPhoneLight className=' text-[hsl(0,0%,5%)] w-11	h-11 p-2 bg-[#FFC32B] rounded-full'/>
          <p className=' m-auto'>+ (888) 452 1505</p>
        </div>
        <i className='xl:hidden block	 text-white text-4xl cursor-pointer' onClick={handleMenu}>
        {!toggleMenu ?<RiMenu3Line /> : <IoClose/>}
        </i>
      </div>
    </nav>
    </>
  )
}
