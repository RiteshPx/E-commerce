import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="bg-teal-500 p-4 flex justify-between items-center">
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2d7bF1q2WBQnHUhqaR2OuxjFiv_EIWBwqow&s' alt='logo' className="h-10" />

      <div className="space-x-4">
        <NavLink 
          to='/' 
          className="text-white font-semibold py-2 px-4 rounded-md hover:bg-teal-400 transition duration-200"
          activeClassName="bg-teal-600"
        >
          Home
        </NavLink>
        
        <NavLink 
          to='/card' 
          className="text-white font-semibold py-2 px-4 rounded-md hover:bg-teal-400 transition duration-200"
          activeClassName="bg-teal-600"
        >
          Cart
        </NavLink>
      </div>
    </nav>
  )
}
