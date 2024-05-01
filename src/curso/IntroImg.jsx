import React from 'react';
import './IntroImg.css';
import IntroImagen from '../assets/curso.png';
import IntroImagen2 from '../assets/curso2.png';

const IntroImg = () => {
  return (
    <div className='flyer'>
        <img className='flyer-img' src={IntroImagen} alt="mockup" />
        <img className='flyer-img2' src={IntroImagen2} alt="mockup" />
    </div>
  )
}

export default IntroImg;