
import React from 'react'
import Home from './component/Home'
import { Route, Routes } from 'react-router-dom'
import About from './component/About'

const App = () => {
  return (
    <div>
      <h1>hum change nhi honge ok </h1> {/* // ye change nhi hoga ok koi bhi routes pai jao tab bhi */}

      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element ={<About/>} />
      </Routes>
     
    </div>
  )
}

export default App
