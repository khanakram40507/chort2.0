import React from 'react'
import { Outlet } from 'react-router-dom'
import './Course.css'

const Course = () => {
  return (
    <div>
      <h1 className='text-4xl font-bold text-center'>Our Courses</h1>
      <div className='sale'> 
        <p>sale is live </p>
      <p>sale is live </p>
      <p>sale is live </p>
      <p>sale is live </p>
      <p>sale is live </p>
      </div>

      <Outlet /> {/** ye outlet ke andar jo bhi component aayega wo yaha show hoga */}
    </div>
  )
}

export default Course
