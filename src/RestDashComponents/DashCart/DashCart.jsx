import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidenav from '../Sidenav/Sidenav';
import { ethers } from 'ethers';
import { Web3Provider } from '@ethersproject/providers';

export const DashCart = ({cart, setCartData}) => {

    
    const navigate = useNavigate();
  
    const handleCheckout = () => {
        navigate('/restaurant-dash/checkout');
    }

    const handleContinueShopping = () => {
        navigate('/restaurant-dash');
        console.log(cart);
    };

    const handleClearCart = () => {
        setCartData([]);
        localStorage.removeItem('cartData');
      };

    const handleMinusQuantity = (index) => {
        const newCart = [...cart];
        if (newCart[index].quantity > 1) {
          newCart[index].quantity--;
          setCartData(newCart);
        }
        else{
          newCart.splice(index, 1);
          setCartData(newCart);
      
        }
    };
    
    const handleAddQuantity = (index) => {
        const newCart = [...cart];
        newCart[index].quantity++;
        setCartData(newCart);
    };

    const totalPrice = cart.reduce((acc, item) => {
        const numericPrice = parseFloat(item.price.replace('$', ''));
        return acc + numericPrice * item.quantity;
      }, 0);
      
      
      const formattedTotalPrice = totalPrice.toFixed(2); // Round to two decimal places

  return (
    <div className='bg-sky-200 h-full'>
        <Sidenav />
        <div className='w-full justify-center flex py-10 px-2 space-x-6 h-full '>
        <main>
            <div className=' text-center font-mono font-bold text-6xl mb-5'>Cart</div>
            <div className='space-y-6'>
            {cart.map((item, index) => (
                <div className=' bg-white rounded-xl h-52 w-80 outline flex flex-col items-center space-y-6' key={index}>
                    <div className='flex justify-center text-center text-4xl mt-5'>
                        {item.title}
                    </div>
                    <div className='flex justify-start text-2xl '>
                        Price: {item.price} 
                    </div>
                    <p>
                        Quantity: {item.quantity} <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2.5 border border-blue-500 hover:border-transparent rounded space-x-5' onClick={() => handleMinusQuantity(index)}> - </button>
                        <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded' onClick={() => handleAddQuantity(index)}> + </button>
                    </p>
                </div>
            ))}
            </div>
            <h2>Total Price: {formattedTotalPrice}</h2>
            <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2.5 border border-blue-500 hover:border-transparent rounded space-x-5' onClick={handleContinueShopping}>
            Continue Shopping
            </button>
            <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2.5 border border-blue-500 hover:border-transparent rounded space-x-5' onClick={handleCheckout}>
                Checkout
            </button>
            <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2.5 border border-blue-500 hover:border-transparent rounded space-x-5' onClick={handleClearCart}>
                Clear Cart
            </button>
        </main>
        
        </div>

    </div>
  )
  
}


export default DashCart;