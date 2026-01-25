import React from 'react'
import Card from './component/card'
import Navbar from './component/Navbar'


const App = () => {
  return (
    <div className='bg-black h-screen w-screen'>
      <Navbar name="ak" color="blue" links={["Home", "About", "Contact"  ]} />
      <Navbar name="pk" color="green" links={["Home", "About", "Contact"  ]} />
      <Navbar name="dk" color="red" links={["Home", "About", "Contact"  ]} />
    </div>
  )
}

export default App
