import React from 'react'

const Card = (user) => {
  return (
    <div className='bg-white h-[100px] w-[200px] m-4 rounded flex items-center justify-center'>
      <h1 className='text-4xl font-bold'>{user}</h1>
    </div>
  )
}

export default Card
