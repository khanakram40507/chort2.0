import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-gray-800 text-white p-4 flex justify-center gap-4'>
      
      <div className='w-fit text-xl bold  flex gap-4'>
        <NavLink to="/" style={({ isActive }) => ({color: isActive ? 'blue': 'white'})}>Home</NavLink>    {/** extra ke liye go to react router dom  */}
        <NavLink to="/about" style={({ isActive }) => ({color: isActive ? 'blue': 'white'})}>About</NavLink>
        <NavLink to="/contact" style={({ isActive }) => ({color: isActive ? 'blue': 'white'})}>Contact</NavLink>
        <NavLink to="/course" style={({ isActive }) => ({color: isActive ? 'blue': 'white'})}>Course</NavLink>
        </div>
    </div>
  )
}

export default Navbar
