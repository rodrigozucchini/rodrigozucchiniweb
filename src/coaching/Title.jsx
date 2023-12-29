import React, { useState, useEffect } from 'react';
import './Title.css'
import title from '../assets/title-coaching2.png'
import title2 from '../assets/title-coaching.png'
import { ButtonAsesoria } from '../profile/ButtonAsesoria';

export const Title = () => {

  const [isWide, setIsWide] = useState(true);


  useEffect(() => {
    const handleResize = () => {
      // Actualizar el estado basado en el ancho de la pantalla
      setIsWide(window.innerWidth >= 600);
    };
 
    // Suscribirse al evento de cambio de tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Limpieza: desuscribirse del evento cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='div-back-title'>
        <p className='profile-back-title'>Destaca tu MARCA PERSONAL con una WEB</p>
          <div className='alto-vuelo-div'>

            {isWide && 
          (
            <img src={title} className='alto-vuelo-img' />
          )
          }
          {!isWide && (
            <img src={title2} className='alto-vuelo-img' />
          )}
          </div>
          <ButtonAsesoria />    
    </div>
  )
}
