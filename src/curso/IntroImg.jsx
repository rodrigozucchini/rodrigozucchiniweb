import React from 'react';
import './IntroImg.css';
import IntroImagen from '../assets/curso.jpeg';

const IntroImg = () => {
  return (
    <div className='flyer'>
        <img className='flyer-img' src={IntroImagen} alt="mockup" />
    </div>
  )
}

export default IntroImg;