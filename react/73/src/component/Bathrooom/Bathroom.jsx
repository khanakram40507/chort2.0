import React, { useState } from 'react'
import Men from './Men';
import Female from './Female';

const Bathroom = () => {
    const[Gender, setGender] = useState("Male");
    function changeGender(){
        if(Gender === "Male"){
            setGender("Female");
        } else {
            setGender("Male");
        }
    }
  return (
    <div>

      <h1 className='text-2xl font-bold mt-2'>i m {Gender}</h1>
      <button className='bg-blue-600 rounded p-2 mt-2 text-white text-xl font-bold' onClick={changeGender}>Change Gender</button>
      {Gender === "Male" ? <Men /> : <Female />}
    </div>
  )
}

export default Bathroom
