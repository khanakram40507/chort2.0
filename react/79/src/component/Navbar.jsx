import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-pink-800 text-white font-bold text-xl p-4 justify-between flex'>
        <h2>Navbar</h2>
        <input type="text" name="search" id="search" placeholder="Search..." className='p-2 rounded-md border border-white'/>
        <div>
             <Link to='/' className='p-2'>Home</Link>
            <Link to='/about' className='p-2'>About</Link>
            <Link to='/product' className='p-2'>Product</Link>
        </div>
         
    </div>
    
  )
}

export default Navbar
