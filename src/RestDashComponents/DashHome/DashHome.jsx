import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidenav from '../Sidenav/Sidenav';
import {items} from '../../Constants/index';
import './DashHome.css'

export const DashHome = ({ addToCart }) => {

    const navigate = useNavigate();
    const [localCart, setLocalCart] = useState([]); // Local cart state for SpecialMenu
    const [isHovered, setIsHovered] = useState(false);

    const handleAddToCart = (title) => {
        const itemToAdd = items.find(item => item.title === title); // Find the item by title
        if (itemToAdd) {
            addToCart(itemToAdd);
            setLocalCart(prevCart => [...prevCart, itemToAdd]); // Update state immutably
            
        } else {
            console.error(`Item with title ${title} not found.`);
        }
    };

  return (
    <div> 
        <Sidenav />
        <div className='w-full justify-center flex py-10 px-2 space-x-6 h-full bg-sky-200'>
        <main>
            <div className=' text-center font-mono font-bold text-5xl mb-5'>Products available</div>
            <div className=' text-center font-mono text-lg mb-11'>Click to add to cart</div>
            <div className='flex justify-center space-x-11 '>
                <div onClick={() => handleAddToCart("Beef")} className={`flex justify-center items-center outline flex-col mb-4 text-center h-48 w-96 rounded-xl cursor-pointer transition-all bg-sky-400 hover:scale-125 hover:z-10 ${
                    isHovered ? ' scale-95' :''
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                    <p className=' font-bold text-lg '>Beef</p>
                    <p className=' text-sm'>1 pound of beef</p> 

                </div>
                <div onClick={() => handleAddToCart("Chicken")} className={`flex justify-center items-center outline flex-col mb-4 text-center h-48 w-96 rounded-xl cursor-pointer transition-all bg-sky-400 hover:scale-125 hover:z-10 ${
                    isHovered ? '  scale-95' :''
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                    <p className=' font-bold text-lg '>Chicken</p>
                    <p className=' text-sm'>1 pound of chicken</p> 

                </div>
                <div onClick={() => handleAddToCart("Bacon")} className={`flex justify-center items-center outline flex-col mb-4 text-center h-48 w-96 rounded-xl cursor-pointer transition-all bg-sky-400 hover:scale-125 hover:z-10 ${
                    isHovered ? '  scale-95' :''
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                    <p className=' font-bold text-lg '>Bacon</p>
                    <p className=' text-sm'>1 pound of bacon</p> 

                </div>

        </div>

        <div className='flex justify-center space-x-11'>
            <div onClick={() => handleAddToCart("Lettuce")} className={`flex justify-center items-center outline flex-col mb-4 text-center h-48 w-96 rounded-xl cursor-pointer transition-all bg-sky-400 hover:scale-125 hover:z-10 ${
                isHovered ? ' scale-95' :''
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
                <p className=' font-bold text-lg '>Lettuce</p>

            </div>
            <div onClick={() => handleAddToCart("Tomato")} className={`flex justify-center items-center outline flex-col mb-4 text-center h-48 w-96 rounded-xl cursor-pointer transition-all bg-sky-400 hover:scale-125 hover:z-10 ${
                isHovered ? ' scale-95' :''
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
                <p className=' font-bold text-lg '>Tomato</p>

            </div>
            <div onClick={() => handleAddToCart("Carrot")} className={`flex justify-center items-center outline flex-col mb-4 text-center h-48 w-96 rounded-xl cursor-pointer transition-all bg-sky-400 hover:scale-125 hover:z-10 ${
                    isHovered ? '  scale-95' :''
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                    <p className=' font-bold text-lg '>Carrot</p>

                </div>

        </div>

        <div onClick={() => handleAddToCart("Bread")} className='flex justify-center space-x-11'>
            <div className={`flex justify-center items-center outline flex-col mb-4 text-center h-48 w-96 rounded-xl cursor-pointer transition-all bg-sky-400 hover:scale-125 hover:z-10 ${
                isHovered ? ' scale-95' :''
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
                <p className=' font-bold text-lg '>Bread</p>
                <p className=' text-sm'>1 loaf of bread</p> 

            </div>
            <div onClick={() => handleAddToCart("Rice")} className={`flex justify-center items-center outline flex-col mb-4 text-center h-48 w-96 rounded-xl cursor-pointer transition-all bg-sky-400 hover:scale-125 hover:z-10 ${
                isHovered ? ' scale-95' :''
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
                <p className=' font-bold text-lg '>Rice</p>
                <p className=' text-sm'>1 pound of rice</p> 

            </div>
            <div onClick={() => handleAddToCart("Pasta")} className={`flex justify-center items-center outline flex-col mb-4 text-center h-48 w-96 rounded-xl cursor-pointer transition-all bg-sky-400 hover:scale-125 hover:z-10 ${
                    isHovered ? '  scale-95' :''
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                    <p className=' font-bold text-lg '>Pasta</p>
                    <p className=' text-sm'>1 pound of pasta</p> 

                </div>

        </div>
        </main>
        </div>
    </div>
  )
}

export default DashHome