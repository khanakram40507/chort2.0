import React from 'react'
import { useState } from 'react'
import './Form.css'
import Card from './Card';

const Form = () => {
    const [username,setUsername] = useState('');   //state for user name
    const [image,setImage] = useState('');  // state for image url
    const [role,setRole] = useState('');  // state for role
    const [description,setDescription] = useState(' ');// state for description

    const localData =JSON.parse(localStorage.getItem('users') || '[]'); // retrieve users data from local storage

    const [users,setUsers] = useState(localData); // state to store all users data

    // function to handle form submission 
    const submitHandler = (e) => {
        e.preventDefault(); // prevent default form submission behavior

        const oldUsers = [...users]; // create a copy of the existing users array
        oldUsers.push({username,image,role,description}); // add new user data to the copied array
        
        setUsers(oldUsers); // update the users state with the new array
        localStorage.setItem('users',JSON.stringify(oldUsers)); // store updated users data in local storage


        console.log(username,image,role,description);
        setUsername(''); // reset user name input field
        setImage(''); // reset image url input field
        setRole(''); // reset role input field
        setDescription(''); // reset description input field
    }

    const deleteHandler = (index) => {
      const oldUsers = [...users];
      oldUsers.splice(index,1);
      setUsers(oldUsers);
      localStorage.setItem('users',JSON.stringify(oldUsers));
    }
  return (
    <div className='p-2'>
      
       <form className='flex flex-col justify-center items-center' 
       onSubmit={(e)=>submitHandler(e)}>    
       <div className='flex flex-wrap justify-center items-center gap-8'>
        <input className='inputElement' type="text" placeholder='Enter Your Name' value={username} 
        onChange={(e) => setUsername(e.target.value)} />

        <input className='inputElement' type="text" placeholder='image URL' value={image} 
        onChange={(e) => setImage(e.target.value)} />

        <input className='inputElement' type="text" placeholder='Enter Role' value={role} 
        onChange={(e) => setRole(e.target.value)} />

        <input className='inputElement' type="text" placeholder='Enter Description' value={description} 
        
        onChange={(e) => setDescription(e.target.value)} />
       </div>
        <br />

        <button className='button bg-green-500 hover:bg-blue-700 active:scale-95 h-20 w-100 rounded text-3xl font-bold '>Create User</button>
      </form>
      <div className='flex item-center justify-center gap-2'>
       {users.map((user,index) => {
        return <Card key={index} user={user.username} image={user.image} role={user.role} description={user.description} deleteHandler={() => deleteHandler(index)} />
       })}
      </div>
      
    </div>
  )
}

export default Form
