import React from 'react'
import './Footer.css'
import { useNavigate } from 'react-router-dom'
const Footer = () => {
    const navigate= useNavigate();
  return (
    <div className='footer'>
      <h1>Footer</h1>
      <button onClick={() => navigate('/course')}>explore courses</button>
    </div>
  )
}

export default Footer
