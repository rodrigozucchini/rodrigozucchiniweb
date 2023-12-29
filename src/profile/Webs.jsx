import React, { useState, useEffect } from 'react';
import client1 from '../assets/client1.png'
import client2 from '../assets/client2.png'
import client3 from '../assets/client3.png'
import client4 from '../assets/client1b.png'
import client5 from '../assets/client2b.png'
import client6 from '../assets/client3b.png'
import './Webs.css'
import { ButtonAsesoria } from './ButtonAsesoria'

export const Webs = () => {

    const [isWideScreen, setIsWideScreen] = useState(true);

    useEffect(() => {
      const handleResize = () => {
        // Actualizar el estado basado en el ancho de la pantalla
        setIsWideScreen(window.innerWidth >= 770);
      };
   
      // Suscribirse al evento de cambio de tamaño de la ventana
      window.addEventListener('resize', handleResize);
  
      // Limpieza: desuscribirse del evento cuando el componente se desmonta
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return (
    <div className='back-webs'>
            <h1 className='title-webs'>LOS QUE YA CONFIARON...</h1>
        {isWideScreen && (
        <>
        <div className='div-webs'>
            <div className='diferent-webs'>
                <div  className='diferent-webs-h1-div'>
                    <h1  className='diferent-webs-h1'>
                    Programa de Finanzas 
                    </h1>
                    <p  className='diferent-webs-p'>
                    ✅Adaptada a diferentes dispositivos <br />
                    ✅Colores Personalizados  <br />
                    ✅Testimonios y Resultados  <br />
                    ✅Dominio Propio  <br />
                    ✅Videos e Imagenes  <br />
                    ✅Botones de Redireccionamiento<br />
                    </p>
                </div>
                <img className='diferent-webs-img' src={client1}/>
            </div>

            <div className='diferent-webs'>
                    <div  className='diferent-webs-h1-div'>
                        <h1  className='diferent-webs-h1'>
                        Cumbre 
                        </h1>
                        <p  className='diferent-webs-p'>
                        ✅Adaptada a diferentes dispositivos <br />
                        ✅Colores Personalizados  <br />
                        ✅Testimonios y Resultados  <br />
                        ✅Dominio Propio  <br />
                        ✅Videos e Imagenes  <br />
                        ✅Botones de Redireccionamiento<br />
                        </p>
                    </div>
                <img className='diferent-webs-img' src={client2}/>
            </div>

            <div className='diferent-webs'>
                    <div  className='diferent-webs-h1-div'>
                        <h1  className='diferent-webs-h1'>
                        Shark Team
                        </h1>
                        <p  className='diferent-webs-p'>
                        ✅Adaptada a diferentes dispositivos <br />
                        ✅Colores Personalizados  <br />
                        ✅Testimonios y Resultados  <br />
                        ✅Dominio Propio  <br />
                        ✅Videos e Imagenes  <br />
                        ✅Botones de Redireccionamiento<br />
                        </p>
                    </div>
                <img className='diferent-webs-img' src={client3}/>
            </div>
        </div>
        </>
      )}

      {/* Contenido para pantallas más grandes */}
      {!isWideScreen && (
        <>
        <div className='div-webs'>
            <div className='diferent-webs'>
                <div  className='diferent-webs-h1-div'>
                    <h1  className='diferent-webs-h1'>
                    Programa de Finanzas 
                    </h1>
                    <p  className='diferent-webs-p'>
                    ✅Adaptada a diferentes dispositivos <br />
                    ✅Colores Personalizados  <br />
                    ✅Testimonios y Resultados  <br />
                    ✅Dominio Propio  <br />
                    ✅Videos e Imagenes  <br />
                    ✅Botones de Redireccionamiento<br />
                    </p>
                </div>
                <img className='diferent-webs-img' src={client4}/>
            </div>

            <div className='diferent-webs'>
                    <div  className='diferent-webs-h1-div'>
                        <h1  className='diferent-webs-h1'>
                        Cumbre 
                        </h1>
                        <p  className='diferent-webs-p'>
                        ✅Adaptada a diferentes dispositivos <br />
                        ✅Colores Personalizados  <br />
                        ✅Testimonios y Resultados  <br />
                        ✅Dominio Propio  <br />
                        ✅Videos e Imagenes  <br />
                        ✅Botones de Redireccionamiento<br />
                        </p>
                    </div>
                <img className='diferent-webs-img' src={client5}/>
            </div>

            <div className='diferent-webs'>
                    <div  className='diferent-webs-h1-div'>
                        <h1  className='diferent-webs-h1'>
                        Shark Team
                        </h1>
                        <p  className='diferent-webs-p'>
                        ✅Adaptada a diferentes dispositivos <br />
                        ✅Colores Personalizados  <br />
                        ✅Testimonios y Resultados  <br />
                        ✅Dominio Propio  <br />
                        ✅Videos e Imagenes  <br />
                        ✅Botones de Redireccionamiento<br />
                        </p>
                    </div>
                <img className='diferent-webs-img' src={client6}/>
            </div>
        </div>
        </>
      )}
        <ButtonAsesoria />
    </div>
  )
}
