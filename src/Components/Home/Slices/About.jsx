import React from 'react'
import brand1 from '../../../imgs/1.svg'
import brand2 from '../../../imgs/2.svg'
import brand3 from '../../../imgs/3.svg'
import brand4 from '../../../imgs/4.svg'
import brand5 from '../../../imgs/5.svg'
import brand6 from '../../../imgs/6.svg'
export default function About() {
    const brands = [brand1, brand2, brand3, brand4, brand5, brand6]
   
  return (
    <section>
        <ul className=' flex gap-10 items-center mx-10 md:flex-nowrap flex-wrap justify-center'>
           
            {
                brands.map((brand, index) => 
                    <li key={index} className=''> <img src={brand} alt="" /></li>
                )}
           
        </ul>
        
    </section>
  )
}
