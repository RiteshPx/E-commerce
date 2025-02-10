import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { CartItem } from '../components/CartItem';
import axios from 'axios';
import { empty } from '../redux/Slices/CartSlice';

export const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0))
  }, [cart])

  const buyHandler = async() => {
    try {
     const response = await axios.post('http://localhost:5000/capture-payment', {
       amount: totalAmount*60,
     });
     console.log(response.data);

     const options = {
       key: process.env.REACT_APP_RAZORPAY_KEY_ID,
       amount: response.data.amount,
       currency: 'INR',
       name: 'Acme Corp',
       description: 'Test Transaction',
       order_id: response.data.id,
       handler: function(response) {
        dispatch(empty());
         alert("Payment Successful");   

       },
     prefill: {
       name: 'Gaurav Kumar',
       email: 'gafga@gmail.com',
     },
     theme: {
       color: "#3399cc", // Customize Razorpay theme color
   },
  //  callback_url: "http://localhost:3000/success", // Redirect to this URL
   };
   const rzp1 = new window.Razorpay(options);
   rzp1.open();
 }catch (error) {
       console.log(error)
    }
}
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
                <p className='text-gray-700 mb-4'>Total amount will be : <span className='font-bold'>₹{totalAmount*60}</span></p>
                <div className=' flex-col justify-center '>
                  <button onClick={buyHandler}className='bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full mb-4'>BUY NOW</button>
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
