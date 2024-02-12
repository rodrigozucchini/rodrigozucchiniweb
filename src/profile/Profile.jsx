import React, { useState, useEffect } from 'react';
import pp from '../assets/pp.png';
import title from '../assets/title.png';
import './Profile.css';

export const Profile = () => {

  const [isWideScreen2, setIsWideScreen2] = useState(true);
  const [isWideScreen3, setIsWideScreen3] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      // Actualizar el estado basado en el ancho de la pantalla
      setIsWideScreen2(window.innerWidth >= 1200);
    };
 
    // Suscribirse al evento de cambio de tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Limpieza: desuscribirse del evento cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      // Actualizar el estado basado en el ancho de la pantalla
      setIsWideScreen3(window.innerWidth >= 489);
    };
 
    // Suscribirse al evento de cambio de tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Limpieza: desuscribirse del evento cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
      <>
{!isWideScreen2 && (
          <>
          </>
)}
      <div className='profile-div'>
          <img className="profile-img" src={pp} alt="photo-profile"/>
          {isWideScreen3 && (
          <div classname="profile-title-div">
            <img classname="profile-title" src={title} alt="title-profile" />
          </div>
          )}
{!isWideScreen3 && (
          <div classname="profile-title-div">
            <h1 className='name-title'>SOY <span className='name-title-b'>RODRIGO ZUCCHINI</span>,<br/> DESARROLLADOR WEB</h1>
          </div>
)}
      </div>
      </>
  )
}
