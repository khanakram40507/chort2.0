import React from 'react'
import { useParams } from 'react-router-dom'

const Anycourse = () => {
    const param = useParams();
    
  return (
    <div>
        <h1 className='text-4xl font-bold underline absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Course ID: {param.id}</h1>
    </div>
  )
}

export default Anycourse
