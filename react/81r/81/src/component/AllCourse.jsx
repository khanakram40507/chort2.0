import React from 'react'
import Course from './Course'

const AllCourse = (props) => {

    console.log(props.courseData)
  return (
    <div>
      <Course courseData={props.courseData} />
      <Course courseData={props.courseData} />
      <Course courseData={props.courseData} />
      <Course courseData={props.courseData} />

    </div>
  )
}

export default AllCourse
