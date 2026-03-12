import React from 'react'
import './card.css'

const Card = (user) => {
    const clr1=Math.floor(Math.random()*255);
    const clr2=Math.floor(Math.random()*255);
    const clr3=Math.floor(Math.random()*255);

  return (
    <div style={{backgroundColor:`rgb(${clr1},${clr2},${clr3})`}} className='card' >
      <div >
        <h1 className='text-2xl text-white'>{user.title}</h1>
        <p>{user.body}</p>
      </div>
    </div>
  )
}


export default Card
