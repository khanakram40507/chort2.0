import React from 'react'
import './Card.css'

const Card = (user) => {
  

  return (
    <div className=' card flex flex-col justify-center items-center gap-4 mt-3  p-4 bg-gray-800 w-96 h-96 rounded-lg'>
        <img src={user.image} alt="" />
        <h1 className=' text-white text-3xl font-bold text-center'>{user.user}</h1>
        <h5 className=' text-white text-xl font-semibold'>{user.role}</h5>
        <p className=' text-white  text-sm text-center font-medium '>
          {user.description}
        </p>
        <button className='bg-blue-500 hover:bg-red-700 active:scale-95 text-white font-bold py-2 px-4 rounded' onClick={user.deleteHandler}>Remove</button>
    </div>
  )
}

export default Card
