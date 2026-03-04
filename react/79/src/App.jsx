
import React from 'react'
import Home from './component/page/Home'
import { Route, Routes } from 'react-router-dom'
import About from './component/page/About'
import Navbar from './component/Navbar'
import Product from './component/page/Product'
import MenProduct from './component/MenProduct'
import Anycourse from './component/page/Anycourse'  
import PageNotFound from './component/page/PageNotFound'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element ={<About/>} />
          <Route path='/product' element ={<Product/>} />

          {/* Nested route */}
          <Route path='/product/men' element ={<MenProduct/>} />

          {/* Dynamic route */}
          <Route path='/product/:id' element ={<Anycourse/>} />
          
          {/* 404 page */}
          <Route path='*' element ={<PageNotFound/>} />
          
      </Routes>
     
    </div>
  )
}

export default App
