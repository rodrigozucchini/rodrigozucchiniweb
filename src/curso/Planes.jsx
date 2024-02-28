import React from 'react';
import './Planes.css';

export const Planes = () => {
  return (
    <div className="back-card">
        <div className="card">
            <h1 className="card-text">PRECIO NORMAL</h1>
            <p className="card-calendary">No disponible por la oferta actual de $150 usd</p>
            <p className="card-price">$499 USD</p>
            <div className="card-div-button">
                <button className="card-button">PRECIO NO DISPONIBLE</button>
            </div>
        </div>
        <div className="card-3">
            <h1 className="card-text-3">PRECIO OFERTA</h1>
            <p className="card-calendary">Precio por mes</p>
            <p className="card-price-yes-3">$150 USD</p>
            <div className="card-div-button">
                <a className="card-button-yes-3" target="_blank" href="https://wa.link/yaw0tq">
                    ¡Quiero unirme al Programa ahora!
                </a>
            </div>
        </div>
        <p className="card-mensaje">
        Incluye:<br/>
         <b>2 clases por semana de 2 horas cada uno (32 horas mensuales)</b><br/>
        <b>Actividades despues de clase a entregar entre cada clase</b><br/>
        <b>Mentoria personalizada para cada alumno</b><br/>
        <b>Proyectos a realizar Profesionales cuando dominemos algunos conceptos</b><br/>
        <b>Revision de codigo</b><br/>
        <b>BONUS: proyecto de simulacion de trabajo real</b><br/>
        Oferta disponible solo por 30 días
        </p>
    </div>
  )
}