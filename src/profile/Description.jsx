import React from 'react';
import './Description.css'
import principal from '../assets/back.png'
import { ButtonAsesoria } from './ButtonAsesoria';

export const Description = () => {

  return (
    <div className='div-back-title'>
        <p className='profile-back-title'>La Clave Digital para Brillar como NETWORKER en el 2024</p>
          <div className='alto-vuelo-div'>
            <img src={principal} className='alto-vuelo-img' />
          </div>
          <ButtonAsesoria />    
    </div>
  )
}
