import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="bg-yellow-500 p-4 flex justify-between items-center fixed w-full z-10">
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2d7bF1q2WBQnHUhqaR2OuxjFiv_EIWBwqow&s' alt='logo' className="h-10 ml-16" />
      <div className="flex-grow mx-4">
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full p-2 rounded-md border-2 border-white"
        />
      </div>
      <div className="space-x-4 text-xl font-extrabold mr-16">
        <NavLink 
          to='/' 
          className="text-black py-2 px-4 rounded-md border-2 border-white hover:bg-teal-400 transition duration-200"
          activeClassName="bg-teal-600"
        >
          Home
        </NavLink>
        
        <NavLink 
          to='/card' 
          className="text-black py-2 px-4 rounded-md border-2 border-white hover:bg-teal-400 transition duration-200"
          activeClassName="bg-teal-600"
        >
          Cart
        </NavLink>
      </div>
    </nav>
  )
}
