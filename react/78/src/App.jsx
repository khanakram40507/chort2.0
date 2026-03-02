// basically when we are try to change our ui then if we want some thing running in side stack then we can use use effect

import React, { use, useEffect, useState } from 'react'
;

const App = () => {

  const[number1,setNumber1]=useState(0);
  const[number2,setNumber2]=useState(0);
  const[sum,setSum]=useState(0);

  useEffect(() => {
    console.log('use effect is running');
  },[number1])  // when we click on number 1 button then only use effect will run because we have given number1 in dependency array
 

  return (
    <div>
     <h1>{number1}</h1>
     <button onClick={() => setNumber1(Math.floor(Math.random() * 100))}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Number 1</button>

      <br />
      <br />

      <h1>{number2}</h1>
     <button onClick={() => setNumber2(Math.floor(Math.random() * 100))}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Number 2</button>

      <br />
      <br />
      <h1>{sum}</h1>
      <button onClick={() => setSum(number1+number2)}
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"> Get Sum</button>
    
    </div>
  )
}

export default App
