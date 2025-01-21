import React from 'react'
import { remove } from '../redux/Slices/CartSlice'
import { useDispatch } from 'react-redux'


export const CartItem = ({ item }) => {
    const dispatch = useDispatch()
    const removeFromCart = () => {
        dispatch(remove(item.id));
    }
    return (
        <div className=''>
            <div>{item.title}</div>
            <img src={item.image} className='w-30 h-40'></img>
            <div className='flex justify-evenly'>
                <div>{item.price}</div>
                <button onClick={removeFromCart}
                    class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition duration-200">
                    Remove item
                </button>
            </div>
        </div>


    )
}
