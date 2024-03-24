import React from 'react'
import './SupplierLogin.css'
import truck from '../../assets/Truck-unload.png'
import { useState } from 'react'

export const SupplierLogin = () => {
  const [data, setData] = useState({
    business_name: "",
    address: "",
    phone_number: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setData(data => ({
      ...data,
      [name]: value
    }))
  }
  const postData = async () => {
    try {
      const response = await fetch('http://localhost:8000/supplier-login', {
        method: "POST",
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='login_bg flex justify-center items-center'>
      <div className=' rounded-xl h-220 shadow-lg w-200 bg-white py-9 px-5 flex'>
        <div className='w-1/2'>
          <div className='flex justify-center text-6xl font-serif text-blue-700 mb-12 '>
            Sign Up
          </div>
          <form action='#'>
            <div className='inputs'>
              <div className='input'>
                <input
                  type='text'
                  placeholder='Business Name'
                  name='business_name'
                  value={data.business_name}
                  className='input-field'
                  onChange={handleChange}
                />
                <label htmlFor='input-field' className='input-label'>Business Name</label>
                <span className='input-highlight'></span>
              </div>
              <div className='input'>
                <input
                  required
                  type='text'
                  placeholder='Address'
                  name='address'
                  className='input-field'
                  value={data.address}
                  onChange={handleChange}
                />
                <label htmlFor='input-field' className='input-label'>Address</label>
                <span className='input-highlight'></span>
              </div>
              <div className='input'>
                <input
                  required
                  type='text'
                  placeholder='Phone Number'
                  name='phone_number'
                  className='input-field'
                  value={data.phone_number}
                  onChange={handleChange}
                />
                <label htmlFor='input-field' className='input-label'>Phone Number</label>
                <span className='input-highlight'></span>
              </div>
              <div className='input'>
                <input
                  required
                  type='email'
                  placeholder='Email'
                  name='email'
                  className='input-field'
                  value={data.email}
                  onChange={handleChange}
                />
                <label htmlFor='input-field' className='input-label'>Email</label>
                <span className='input-highlight'></span>
              </div>
              <div className='input'>
                <input
                  required
                  type='password'
                  placeholder='Password'
                  name='password'
                  className='input-field'
                  value={data.password}
                  onChange={handleChange}
                />
                <label htmlFor='input-field' className='input-label'>Password</label>
                <span className='input-highlight'></span>
              </div>
            </div>
            <button className='form_buttons'><input type="submit" onClick={postData} /></button>
            <button className='form_buttons'>Forgot Password</button>
          </form>
        </div>
        <div className='w-1/2'>
          <img className='image_edits object-cover' src={truck} alt='Truck unloading' />
        </div>
      </div>
    </div>
  )
}

export default SupplierLogin