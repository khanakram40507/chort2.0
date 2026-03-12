import React from 'react'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Course from './pages/Course'
import Kodr from './pages/Kodr'
import Kodex from './pages/Kodex'
import AllCourse from './pages/AllCourse'
import Footer from './component/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/course' element={<Course />} >
          <Route path='/course' element={<AllCourse />} />        
          <Route path='/course/kodr' element={<Kodr/>} />
          <Route path='/course/kodex' element={<Kodex/>} />
        </Route>
        
      </Routes>
        <Footer/>
      


    </div>
  )
}

export default App
