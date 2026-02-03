import React, { useState } from 'react'


const App = () => {
  
  const [arr, setArr] = useState([90,80,70,60,28]);
  const grace = () => {
    const newArr = arr.filter((val) => {
      return val < 35;
    });   
    setArr(newArr);
  }

  return (
    <div>
      {arr.map((val, idx) => (
        <h1 className='text-3xl font-bold mx-4' key={idx}>student {idx} is getting :{val}</h1>
      ))}
      <button onClick={grace} className='bg-blue-500 text-3xl w-fit font-bold p-2 m-3 rounded active:scale-95' >click</button>
    </div>
  )
}

export default App

