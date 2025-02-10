import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { CartItem } from '../components/CartItem';

export const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0))
  }, [cart])

  return (
    <div className='bg-yellow-500 min-h-screen p-5'>
      {
        cart.length > 0 ?
          (
            <div className='flex justify-evenly w-2/5 '>
              <div className='flex flex-wrap justify-evenly mt-20 text-center font-bold'>
                {
                  cart.map((item, index) => {
                    return <CartItem key={index} item={item} />
                  })
                }
              </div>

              <div className='bg-gray-200 p-9 h-2/5 items-center rounded-lg shadow-lg mt-20 text-2xl fixed right-20'>
                <h3 className='text-gray-700 mb-4'>Summary :</h3>
                <p className='text-gray-700 mb-4'>Total amount will be : <span className='font-bold'>${totalAmount}</span></p>
                <div className=' flex-col justify-center '>
                  <button className='bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full mb-4'>BUY NOW</button>
                  <br/>
                  <NavLink to='/'>
                    <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full'>Shop More</button>
                  </NavLink>
                </div>
              </div>

            </div>
          ) :
          (
            <div className='h-5/6 w-auto flex justify-center mt-56'>
              <div className='bg-white p-6 rounded-lg shadow-lg'>
                <div className='text-gray-700 mb-4'>Your cart is empty</div>
                <NavLink to='/'>
                  <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full'>Shop Now</button>
                </NavLink>
              </div>
            </div>
          )
      }
    </div>
  )
}
