import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Card from './component/Card';
const App = () => {


  const [allUsers, setAllUsers] = useState([]);
  const getData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
   
    setAllUsers(response.data);

  }

  return (
    <div>
      <button className="bg-blue-600 w-fit text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 active:scale-95 transition duration-200"
        onClick={getData}>
        Get dataaa
      </button>
      <div className='flex flex-wrap gap-4 mt-4'>
        {allUsers.map((user,idx) => (
        <Card key={user} idx={idx} />
  ))} 
      </div>
    </div>
  )
}

export default App



