import React from 'react'

export const RestaurantDashboard = () => {
  return (
    <div className='login_bg flex justify-center items-center'>
      <div className=' rounded-xl h-200 shadow-lg w-120 bg-white py-9 px-5'>
        <div className='flex justify-center text-center text-5xl font-serif text-blue-700 mb-12 '>
          Restaurant Information
        </div>
        <form action='#'>
          <div className='inputs'>
            <div className='input'>
              <input type='text' placeholder='Name' className='input-field'/>
              <label htmlFor='input-field' className='input-label'>name</label>
              <span className='input-highlight'></span>
            </div>
            <div className='input'>
              <input type='text' placeholder='Restaurant name' className='input-field'/>
              <label htmlFor='input-field' className='input-label'>Restaurant name</label>
              <span className='input-highlight'></span>
            </div>
            <div className='input'>
              <input type='text' placeholder='Restaurant address' className='input-field'/>
              <label htmlFor='input-field' className='input-label'>Restaurant address</label>
              <span className='input-highlight'></span>
            </div>
            <div className='input'>
              <input type='text' placeholder='Restaurant phone' className='input-field'/>
              <label htmlFor='input-field' className='input-label'>Restaurant phone</label>
              <span className='input-highlight'></span>
            </div>
          </div>
        </form>
        <a className='flex justify-center' href='/restaurant-dash'><button className='form_buttons'>Done</button></a>
      </div>
    </div>
  )
}

export default RestaurantDashboard