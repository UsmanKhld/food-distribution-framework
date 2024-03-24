import React, { useState } from 'react';
import './Home.css'

export const Home = () => {
    const [isHovered, setIsHovered] = useState(false);
    
  return (
    <div className='background_color flex justify-center items-center'>
      <div className='flex justify-center gap-x-7 '>
            <a href='/supplier-login' className={`flex justify-center items-center outline flex-col mb-4 text-center h-200 w-120 rounded-xl cursor-pointer transition-all bg-white hover:scale-110 hover:z-10 ${
                isHovered ? ' scale-95' :''
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
                <p className=' font-bold text-4xl '>I am a Supplier</p> 

            </a>
            <a href='/restaurant-login' className={`flex justify-center items-center outline flex-col mb-4 text-center h-200 w-120 rounded-xl cursor-pointer transition-all bg-white hover:scale-110 hover:z-10 ${
                isHovered ? '  scale-95' :''
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
                <p className=' font-bold text-4xl '>I am a Restaurant/Buyer</p>

            </a>

        </div>
    </div>
  )
}

export default Home