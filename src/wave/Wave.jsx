import React from 'react'
import Waves from '../assets/wave.png';
import './wave.css';

const Wave = () => {
  return (
    <div className='wave-div'>
        <img className="wave-img" src= {Waves} />
    </div>
  )
}

export default Wave;