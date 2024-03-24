import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidenav from '../Sidenav/Sidenav';
import { ethers } from 'ethers';
import { Web3Provider } from '@ethersproject/providers';

export const DashCheckout = ({cart, setCartData}) => {

    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);

    const navigate = useNavigate();

    const totalPrice = cart.reduce((acc, item) => {
        const numericPrice = parseFloat(item.price.replace('$', ''));
        return acc + numericPrice * item.quantity;
      }, 0);
      
      
      const formattedTotalPrice = totalPrice.toFixed(2);
      const finalPrice = formattedTotalPrice / 3392 * 1000000000000000000;

    const connectWallet = () => {
        if (window.ethereum) {
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result => {
                accountChanged(result[0])
            })
        } else {
            setErrorMessage('MetaMask not installed')
        }
    }

    const accountChanged = (accountName) => {
        setDefaultAccount(accountName);
        getUserBalance(accountName)
    }   

    const getUserBalance = async (accountAddress, provider) => {
        try {
            const balance = await provider.getBalance(accountAddress);
            setUserBalance(ethers.utils.formatEther(balance));
        } catch (error) {
            setErrorMessage('Error fetching user balance: ' + error.message);
        }
    };

    async function sendTransaction(e) {
        let params = [{
            from: "0x76c8a9ed785b5ae6446a4a08d81ff9581ee621eb",
            to: e.target.to_address.value,
            gas: Number(21000).toString(16),
            gasPrice: Number(2500000).toString(16),
            value: Number(finalPrice).toString(16),
        }]
        let result = await window.ethereum.request({method: "eth_sendTransaction", params}).catch((err) => {
            console.log(err)
        })
    }

  return (
    <div className='flex justify-center items-center content-center flex-col h-200 mt-11 bg-sky-200'>
        <div className='flex  content-center flex-col'>
        <button className='form_buttons' onClick={connectWallet}> Get your address and balance </button>
        <div className=' text-center font-mono font-bold text-2xl mb-5'>Address: {defaultAccount}</div>
        <div className=' text-center font-mono font-bold text-2xl mb-5'>Balance: ${userBalance}</div>
        </div>

        <div className='flex flex-col justify-end content-center'>
        <form onSubmit={sendTransaction}>
            <h1>Enter Transaction address: </h1>
            {/* <input type='text' name='to_address' placeholder='Address: '/> */}
            <div className='input'>
                <input type='text' placeholder='Address' name='to_address' className='input-field'/>
                <label htmlFor='input-field' className='input-label'>Address</label>
                <span className='input-highlight'></span>
            </div>
            <button className='form_buttons flex items-center justify-center'><input type='submit' value='Submit'/></button>
        </form>
        </div>

        {errorMessage}
        
    </div>
    
  )
}

export default DashCheckout