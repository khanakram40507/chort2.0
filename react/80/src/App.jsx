import React from 'react'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
        
      


    </div>
  )
}

export default App
