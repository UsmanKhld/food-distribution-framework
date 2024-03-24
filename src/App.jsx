import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home, RestaurantDashboard, RestaurantLogin, SupplierLogin } from './Pages/index'
import { DashOrders, DashHome, DashCart } from './RestDashComponents/index';
import DashCheckout from './RestDashComponents/DashCheckout/DashCheckout';

const App = () => {

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    getData
    const storedCartData = localStorage.getItem('cartData');
    if (storedCartData) {
      setCartData(JSON.parse(storedCartData));
    }
  }, []);

  const addToCart = (item) => {
    // Check if the item is already in the cart based on the title
    const existingItemIndex = cartData.findIndex((cartItem) => cartItem.title === item.title);

    if (existingItemIndex !== -1) {
      // If the item is already in the cart, update its quantity
      const updatedCart = cartData.map((cartItem, index) =>
        index === existingItemIndex
          ? { ...cartItem, quantity: cartItem.quantity + 1 } // Increase quantity
          : cartItem
      );

      // Update the cart state
      setCartData(updatedCart);

      // Save updated cart data to localStorage
      localStorage.setItem('cartData', JSON.stringify(updatedCart));
    }
    else {
      // If the item is not in the cart, add it with quantity 1
      const newCartData = [...cartData, { ...item, quantity: 1 }];
      setCartData(newCartData);

      // Save updated cart data to localStorage
      localStorage.setItem('cartData', JSON.stringify(newCartData));
    }
    console.log(`${item.title} item added`)
  };

  const getData = async () => {
    const email = 'McDonalds@gmail.com';
    try {
      const response = await fetch(`http://localhost:8000/${email}`)
      const json = await response.json()
      console.log(json)
    } catch (error) {
      console.error(err);
    }
  }

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/supplier-login" element={<SupplierLogin />} />
          <Route path="/restaurant-login" element={<RestaurantLogin />} />
          <Route path="/restaurant-signup" element={<RestaurantDashboard />} />
          <Route path="/restaurant-dash" element={<DashHome addToCart={addToCart} />} />
          <Route path="/restaurant-dash/orders" element={<DashOrders />} />
          <Route path="/restaurant-dash/cart" element={<DashCart cart={cartData} addToCart={addToCart} setCartData={setCartData} />} />
          <Route path="/restaurant-dash/checkout" element={<DashCheckout cart={cartData} addToCart={addToCart} setCartData={setCartData} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App