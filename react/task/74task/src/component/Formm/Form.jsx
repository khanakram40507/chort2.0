import React from 'react'
import { useState } from 'react'
import './Form.css'
import Card from '../card/Card';

const Form = () => {
    const [user, setUser] = useState(null);

  const [data, setData] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
    image: null,
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setData({ ...data, image: e.target.files[0] });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(data);
  };



  return (
    
    <div className='mainform'>
      {!user?(
        <form onSubmit={handleSubmit}
        className=' formBody border-2  flex flex-col items-center justify-center gap-4 p-4 m-4 rounded'>
        <h1 className='text-3xl font-bold text-white'>Create Your Profile</h1>
        <input type="text" placeholder='Enter Your Name' name='name' onChange={handleChange}
          className='input' />
        <input type="text" placeholder='Enter Your Email' name='email' onChange={handleChange}
          className='input' />
        <input type="number" placeholder='Enter Your Age' name='age' onChange={handleChange} className='input' />
        <input type="number" placeholder='Enter Your Phone no' name='phone' onChange={handleChange} className='input' />
        <input type="file" accept='image/*' onChange={handleImage} className='input' />
        <button className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'>Submit</button>
      </form>
      ):(
        <Card user={user} setUser={setUser}/>
      )}

      
    </div>
  )
}

export default Form
