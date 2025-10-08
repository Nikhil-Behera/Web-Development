import React from 'react'
import lemon from '../assets/lemon.jpg'

const Usercard = () => {
  return (
    <div className='usercard'>
        <p id='user-intro'>Hello Nikhil</p>
        <img id='user-img' src={lemon} alt="Nikhil"></img>
        <p id='user-desc'>Description here!!</p>
    </div>
  )
}

export default Usercard
