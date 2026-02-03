import React from 'react'
import { useState } from 'react';

const Count = () => {
    const[count, setCount] = useState(0);
    function btnClick(){
        setCount(count + 1);
    }
  return (
    <div>
      <h1 className='bg-green  text-2xl m-4'>{count}</h1>
      <button onClick={btnClick} className='bg-blue-500 text-white px-4 py-2 rounded active:scale-80' >increase</button>
    </div>
  )
}

export default Count
