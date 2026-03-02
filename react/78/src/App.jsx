
import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1 )} className='bg-black text-white rounded px-4 py-2 w-fit'> Increment</button>
    </div>
  )
}

export default App
