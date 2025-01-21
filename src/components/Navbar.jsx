import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <NavLink to='/card'>
        <div className='bg-teal-400'>cart</div>

        </NavLink>
    </div>
  )
}
