import React from 'react'
import foto2 from '../assets/foto2.jpg';
import './story.css';

export const Story = () => {
  return (
    <div className="story">
      <h1 className="title-story"><i>Yo soy...</i></h1>
      <div  className="story-div-text">
        <div className="story-img-profile">
          <img className="img-profile" src={foto2} alt="photo-profile"/>
        </div>
          <p className="story-text">
              <li>Rodrigo Zucchini 😜</li>
              <br/>
              <li>Programador Argentino ¡🇦🇷!⭐⭐⭐</li>
              <br/>
              <li>Vivo en Buenos Aires, Argentina.</li>
              <br/>
              <li>Apasionado por el fútbol ⚽y el código🧩, soy autodidacta en constante búsqueda de conocimiento.</li>
              <br/>
              <li>Mi viaje en el mundo de la programación comenzó hace cinco años.</li>
          </p>
      </div>
      <h1 className="title-story"><i>Acerca</i></h1>
      <div  className="story-div-text">
          <p className="story-text">
              <b>En el ámbito laboral:</b><br/>
              Me desempeño como Data Entry, donde la precisión y la atención al detalle son fundamentales. <br/>
              Me desempeño como Frontend Dev, en FISEL MEXICO (trabajo remoto).<br/><br/>
              <b>Emprendimiento:</b><br/>
              Diseño y desarrollo landing pages que no solo son visualmente atractivas, sino también funcionales y efectivas.<br/>
              Si estás buscando potenciar tu presencia en línea con una landing page impactante ¡estás en el lugar correcto✋!<br/>
              Ayudo a personas sin conocimiento de programacion a insertarse en este maravilloso mundo, con asesorias personalizadas y actividades 1 vs 1<br/>
              <br/><br/>
              ¡Vamos a construir juntos algo grandioso🤙!
          </p>
      </div>
      <h1 className="title-story"><i>Educación</i></h1>
      <div  className="story-div-text">
          <p className="story-text">
              <b>Actualmente:</b><br/>
              Avanzando en mi formación académica como estudiante de la Ciencias de Datos en la Universidad de Luján.<br/>
              Además en el Instituto N° 189 de Luján (Análisis, Desarrollo y Programación de Aplicaciones).<br/><br/>
              <b>Ingles:</b>
              <br/>
              Nivel Intermedio (B1-B2)
              <br/><br/>
              <b>Manejo: </b><br/>
              C, Javascript, Excel, SQL, React, CSS, HTML.<br/>
          </p>
      </div>
    </div>
  )
}
