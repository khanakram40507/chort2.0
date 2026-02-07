import React from 'react'
import { useState } from 'react'

const Form = () => {
   const[name, setName] = useState('')
   const[allNames, setAllNames] = useState([])

    const handleSubmit = (e) => {
      //prevent the default behavior of form submission which is to refresh the page
        e.preventDefault()
        //create a new array for storing all the names.
        let newName = [...allNames]
        //push the current name into the new array
        newName.push(name)

        //update the state with the new array of names
        setAllNames(newName)
        console.log(newName)
                                           // setName('') // to clear the input text after submission
    }
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <form className='border-2 flex flex-col items-center justify-center gap-4' 
      onSubmit={(e)=>{
        handleSubmit(e);
      }}>
        <input className='bg-pink-500 text-2xl text-white m-4 p-4 rounded text-center'
        type="text" 
        placeholder='Enter your Name' value={name} 
        onChange={(e) => setName(e.target.value)} 
        required/>
        <button className='bg-blue-500 w-50 text-white text-xl mb-4 p-4 rounded'>Submit</button>
       
      </form>
       {allNames.map((name, index) => (
          <h1 key={index} className='bg-gray-200 border-2 border-gray-300 text-2xl text-gray-700'>{name}</h1>
        ))}
    </div>
  )
}

export default Form
