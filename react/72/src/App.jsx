import React, { useState } from 'react'


const App = () => {
  const arr=["a","b","c","d"];
  const [count, setCount] = useState(0)
  const clkFun = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h1 className='text-3xl font-bold mx-4'>{arr[count]}</h1>
      <button onClick={clkFun} className='bg-blue-500 text-3xl w-fit font-bold p-2 m-3 rounded'>click</button>
    </div>
  )
}

export default App

