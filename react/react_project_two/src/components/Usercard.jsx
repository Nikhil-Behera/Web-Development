import React from 'react'
import lemon from '../assets/lemon.jpg'
import "./Usercard.css"

const Usercard = (props) => {
  return (
    <div className='usercard'>
        <p id='user-intro'>Hello {props.name}</p>
        <img id='user-img' src={props.image} alt={props.name}></img>
        <p id='user-desc'>Description : {props.desc}</p>
    </div>
  )
}

export default Usercard
