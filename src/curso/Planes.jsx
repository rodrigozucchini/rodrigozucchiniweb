import React from 'react';
import './Planes.css';

export const Planes = () => {
  return (
    <div className="back-card">
        <div className="card-3">
            <h1 className="card-text-3">INICIAL</h1>
            <p className="card-calendary">Para personas sin conocimiento</p>
            <p className="card-price-yes-3">$50 USD</p>
            <div className="card-div-button">
                <a className="card-button-yes-3" target="_blank" href="https://wa.link/yaw0tq">
                    ¡Quiero unirme al Programa ahora!
                </a>
            </div>
        </div>
        <div className="card-3">
            <h1 className="card-text-3">INTERMEDIO</h1>
            <p className="card-calendary">Para personas con conocimiento intermedio que necesitan mejorar habilidades/lenguajes</p>
            <p className="card-price-yes-3">$70 USD</p>
            <div className="card-div-button">
                <a className="card-button-yes-3" target="_blank" href="https://wa.link/yaw0tq">
                    ¡Quiero unirme al Programa ahora!
                </a>
            </div>
        </div>
        <p className="card-mensaje">
        Incluye:<br/>
         <b>Clases exclusivas 1 a 1 por semana</b><br/>
        <b>Actividades despues de clase a entregar</b><br/>
        <b>Mentoria personalizada para cada alumno 1VS 1</b><br/>
        <b>Proyectos a realizar Profesionales cuando dominemos algunos conceptos</b><br/>
        <b>Revision de codigo</b><br/>
        <b>BONUS: proyecto de simulacion de trabajo real</b><br/>
        </p>
    </div>
  )
}