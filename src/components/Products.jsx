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
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-1 p-4 bg-white w-1/5 hover:shadow-black transition duration-200">
            <img src={ele.image} alt={ele.title} className="w-80 h-80 object-contain" />
            <div className="px-5 py-2">
                <div className="font-bold text-xl mb-1">{ele.title.substring(0, 18)}</div>
                <p className="text-gray-700 text-sm">
                    {ele.description.substring(0, 90)}...
                </p>
            </div>
            <div className="px-5 pt-4 pb-2 flex justify-evenly items-center">
                <span className="font-extrabold text-blue-600">${ele.price}</span>
                {
                    cart.some(item => item.id === ele.id) ? (
                        <button className="bg-red-500 hover:bg-red-700 text-white font-medium py-1 px-2 rounded" onClick={removeFromCart}>
                            Remove from Cart
                        </button>
                    ) : (
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded" onClick={addToCart}>
                            Add to Cart
                        </button>
                    )
                }
            </div>
        </div>
    )
}
