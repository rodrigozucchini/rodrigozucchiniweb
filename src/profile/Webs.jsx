import React, { useState, useEffect } from 'react';
import client1 from '../assets/client1.png'
import client2 from '../assets/client2.png'
import client3 from '../assets/client3.png'

import client4 from '../assets/client1b.png'
import client5 from '../assets/client2b.png'
import client6 from '../assets/client3b.png'
import client12 from '../assets/client4b.png'
import client13 from '../assets/client5b.png'
import client14 from '../assets/client6b.png'
import client15 from '../assets/client7b.png'
import client16 from '../assets/client8b.png'

import client7 from '../assets/client4.png'
import client8 from '../assets/client5.png'
import client9 from '../assets/client6.png'
import client10 from '../assets/client7.png'
import client11 from '../assets/client8.png'

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

            <div className='diferent-webs'>
                    <div  className='diferent-webs-h1-div'>
                        <h1  className='diferent-webs-h1'>
                        Incruises
                        </h1>
                        <p  className='diferent-webs-p'>
                        ✅Adaptada a diferentes dispositivos <br />
                        ✅Colores Personalizados  <br />
                        ✅Dominio Propio  <br />
                        ✅Videos e Imagenes  <br />
                        ✅Botones de Redireccionamiento<br />
                        </p>
                    </div>
                <img className='diferent-webs-img' src={client7}/>
            </div>

            <div className='diferent-webs'>
                    <div  className='diferent-webs-h1-div'>
                        <h1  className='diferent-webs-h1'>
                        Profit Zone
                        </h1>
                        <p  className='diferent-webs-p'>
                        ✅Adaptada a diferentes dispositivos <br />
                        ✅Testimonios y Resultados  <br />
                        ✅Dominio Propio  <br />
                        ✅Videos e Imagenes  <br />
                        ✅Botones de Redireccionamiento<br />
                        </p>
                    </div>
                <img className='diferent-webs-img' src={client8}/>
            </div>

            <div className='diferent-webs'>
                    <div  className='diferent-webs-h1-div'>
                        <h1  className='diferent-webs-h1'>
                       Fisel Mexico
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
                <img className='diferent-webs-img' src={client9}/>
            </div>

            <div className='diferent-webs'>
                    <div  className='diferent-webs-h1-div'>
                        <h1  className='diferent-webs-h1'>
                       Elite style
                        </h1>
                        <p  className='diferent-webs-p'>
                        ✅Adaptada a diferentes dispositivos <br />
                        ✅Colores Personalizados  <br />
                        ✅Dominio Propio  <br />
                        ✅Imagenes  <br />
                        ✅Botones de Redireccionamiento<br />
                        </p>
                    </div>
                <img className='diferent-webs-img' src={client10}/>
            </div>

            <div className='diferent-webs'>
                    <div  className='diferent-webs-h1-div'>
                        <h1  className='diferent-webs-h1'>
                       Medical System
                        </h1>
                        <p  className='diferent-webs-p'>
                        ✅Adaptada a diferentes dispositivos <br />
                        ✅Colores Personalizados  <br />
                        ✅Testimonios y Resultados  <br />
                        ✅Dominio Propio  <br />
                        ✅Turnero  <br />
                        </p>
                    </div>
                <img className='diferent-webs-img' src={client11}/>
            </div>

        </div>
        </>
      )}

      {/* Contenido para pantallas más grandes */}
      {!isWideScreen && (
        <>
        <div className='div-webs'>
            <div className='diferent-webs'>
                <img className='diferent-webs-img' src={client4}/>
            </div>

            <div className='diferent-webs'>
                <img className='diferent-webs-img' src={client5}/>
            </div>

            <div className='diferent-webs'>
                <img className='diferent-webs-img' src={client6}/>
            </div>

            <div className='diferent-webs'>
                <img className='diferent-webs-img' src={client12}/>
            </div>

            <div className='diferent-webs'>
                <img className='diferent-webs-img' src={client13}/>
            </div>

            <div className='diferent-webs'>
                <img className='diferent-webs-img' src={client14}/>
            </div>

            <div className='diferent-webs'>
                <img className='diferent-webs-img' src={client15}/>
            </div>

            <div className='diferent-webs'>
                <img className='diferent-webs-img' src={client16}/>
            </div>

        </div>
        </>
      )}
        <ButtonAsesoria />
    </div>
  )
}
