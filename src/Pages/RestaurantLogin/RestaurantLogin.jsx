import React, { useState } from 'react';
import './RestaurantLogin.css'
import rest from '../../assets/Restaurant-cartoon.png'

export const RestaurantLogin = () => {
  return (
    <div className='login_bg flex justify-center items-center'>
      <div className=' rounded-xl h-128 shadow-lg w-200 bg-white py-9 px-5 flex'>
        <div className='w-1/2'>
          <div className='flex justify-center text-6xl font-serif text-blue-700 mb-12 '>
            Sign up
          </div>
          <form>
            <div className='inputs'>
              <div className='input'>
                <input
                  type='text'
                  placeholder='Email'
                  className='input-field'
                />
                <label htmlFor='input-field' className='input-label'>Email</label>
                <span className='input-highlight'></span>
              </div>
              <div className='input'>
                <input
                  type='text'
                  placeholder='Password'
                  className='input-field'
                />
                <label htmlFor='input-field' className='input-label'>Password</label>
                <span className='input-highlight'></span>
              </div>
            </div>
            
          </form>
          <a href='/restaurant-dash'><button className='form_buttons'>Submit</button></a>
          <button className='form_buttons'>Forgot Password</button>

        </div>
        <div className='w-1/2'>
          <img className='image_edits object-cover' src={rest} alt='Cartoon restaurant' />
        </div>
      </div>
    </div>
  )
}

export default RestaurantLogin