import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/Slices/CartSlice'

export const Products = ({ ele }) => {
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(add(ele))
    }
    const removeFromCart=()=>{
        dispatch(remove(ele.id))
    }
    const { cart } = useSelector((state) => state);
    return (
        <div>
            <div className='text-base font-bold'>{ele.title.substring(0, 18)}</div>
            <div className='text-xs m-3'>{ele.description.substring(0, 50)}</div>
            <img src={ele.image} alt="pen" className='w-40 h-52'></img>
            <div className='flex justify-between m-2 '>
                <div className='font-extrabold text-blue-600'>{ele.price}</div>
                {
                    cart.some(item => item.id === ele.id) ? (
                        <button className='border border-blue-500 rounded-md ml-2 mr-2' onClick={removeFromCart}>remove from cart</button>
                    ) : (
                        <button className='border border-blue-500 rounded-md ml-2 mr-2' onClick={addToCart}>Add to Card</button>
                    )
                }
            </div>
        </div>
    )
}
