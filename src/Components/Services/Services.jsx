import React from 'react'
import Main from './Slices/Main'
import ServicesServ from './Slices/Services'
import Proccess from './Slices/Proccess'
import Pricing from './Slices/Pricing'
import Contact from '../Home/Slices/Contact'

export default function Services() {
  return (
   <>
   <Main/>
   <ServicesServ/>
   <Proccess/>
   <Pricing/>
   <Contact/>
   </>
  )
}
