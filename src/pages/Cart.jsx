import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { CartItem } from '../components/CartItem';

export const Cart = () => {
  const [ totalAmount, setTotalAmount ] = useState(0);
  const { cart } = useSelector((state) => state);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price ,0))
},[cart])

  return (
    <div>
      {
        cart.length > 0 ?
          (
            <div className='flex justify-evenly'>
              <div>
                {
                  cart.map((item, index) => {
                    return <CartItem key={index} item={item} />
                  })
                }
              </div>

              <div>
                <h3>summay :</h3>
                <p>Total amount will be : {totalAmount}</p>
                <button>BUY NOW</button>
                <NavLink to='/'>
                  <button className='bg-blue-500  border border-solid rounded-full p-2 mt-5 text-white '>shop now</button>
                </NavLink>
              </div>

            </div>
          ) :
          (
            <div className='h-5/6 w-auto flex justify-center mt-56'>
              <div className='bg-slate-300 p-6 rounded-full'>
                <div >Empty</div>
                <NavLink to='/'>
                  <button className='bg-blue-500  border border-solid rounded-full p-2 mt-5 text-white '>shop now</button>
                </NavLink>
              </div>
            </div>
          )
      }
    </div>
  )
}
