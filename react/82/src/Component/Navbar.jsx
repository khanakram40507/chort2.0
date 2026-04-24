import React from 'react'
import './Navbar.scss'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = () => {
  const user=useContext(ThemeDataContext);
  return (  
    <div className='nav'>
      <h1>this is navbar</h1>
      <p>User: {user}</p>
    </div>
  )
}

export default Navbar
