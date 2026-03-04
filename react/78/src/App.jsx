
import React, { use, useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'


const App = () => {
  const [num, setNum] = useState(0);

  const[data, setData] = useState('')


const getData = async () => {
  const response = await axios.get(' https://randomuser.me/api/');
  
  console.log((response.data.results[0].name.first)+" "+(response.data.results[0].name.last));
  setData((response.data.results[0].name.first)+" "+(response.data.results[0].name.last));

} 

useEffect(() => {
  getData();
},[num])



  return (
    <div>
      <h1 className='text-4xl font-bold text-center'>Welcome to My App</h1>
      <h1 className='text-2xl text-center'>{data}</h1>
      <h1 className='text-2xl text-center'>{num}</h1>
      <button  className='bg-green-600 w-fit text-2xl bold rounded p-4 m-4' onClick={() => setNum(num+1)}>Get dataaa</button>
      
    </div>
  )
}

export default App
