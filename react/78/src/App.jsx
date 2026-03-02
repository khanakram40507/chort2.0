// basically when we are try to change our ui then if we want some thing running in side stack then we can use use effect

import React, { use, useEffect, useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');  
 useEffect(() => {
  console.log('use effect called');
 },[count]) // when we want to run use effect when count changes not input box ui changes then we can pass count in dependency array , [] isko denpency array kehte hai , jab bhi  hame chahate hai ki koi pariticular cheeze change hone pai , use effect run hoga , tab ham [] is array ke ander us name ko pass karte hai 


  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1 )} className='bg-black text-white rounded px-4 py-2 w-fit'> Increment</button>
    </div>
  )
}

export default App
