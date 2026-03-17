import React from 'react'
import Course from './component/Course'
import Allsections from './component/Allsections'
import Navbar from './component/Navbar'
import Footer from './component/Footer'

const App = () => {

  const courseData={
    courseName:"React",
    instructor:"John Doe",
    duration:"4 weeks",
    price:199.99
  }
  return (
    <div>
      <Allsections courseData={courseData} />
      

      <h1>hi</h1>
    </div>
  )
}

export default App
