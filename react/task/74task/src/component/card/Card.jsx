import React from 'react'
import './Card.css'

const Card = ({user,setUser}) => {
  return (
    
    <div className='card border-2 flex flex-col items-center justify-center gap-4 p-4 m-4 '>
        
        <div>
              {user.image && (
        <img
          className="card-img"
          src={URL.createObjectURL(user.image)}
          alt={user.name}
        />)}
        </div>
        <h2 className=' inputData text-2xl font-bold'>Name : {user.name}</h2>
        <h3 className=' inputData text-lg font-bold'>Email: {user.email}</h3>
        <h3 className='inputData font-bold'>Age: {user.age}</h3>
        <h3 className='inputData font-bold'>Phone: {user.phone}</h3>
        <button
        onClick={() => setUser(null)}
        className="bg-blue-500 text-white font-bold border-2  px-4 py-2 rounded"
      >
        Edit
      </button>



    </div>
  )
}

export default Card
