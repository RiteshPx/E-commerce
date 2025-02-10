import React from 'react'
import { remove } from '../redux/Slices/CartSlice'
import { useDispatch } from 'react-redux'


export const CartItem = ({ item }) => {
    const dispatch = useDispatch()
    const removeFromCart = () => {
        dispatch(remove(item.id));
    }
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-1 p-4 bg-white w-3/5 hover:shadow-black transition duration-200">
            <div>{item.title}</div>
            <img src={item.image} className='w-52 h-48 object-contain'></img>
            <div className='flex justify-evenly items-center m-2'>
                <div className='text-blue-600 text-xl m-2'>{item.price}</div>
                <button onClick={removeFromCart}
                    class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition duration-200">
                    Remove item
                </button>
            </div>
        </div>


    )
}
