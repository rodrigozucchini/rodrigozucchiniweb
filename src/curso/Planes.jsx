import React from 'react';
import './Planes.css';

export const Planes = () => {
  return (
    <div className="back-card">
        <div className="card">
            <h1 className="card-text">PRECIO NORMAL</h1>
            <p className="card-calendary">No disponible por la oferta actual de $210 usd</p>
            <p className="card-price">$700 USD</p>
            <div className="card-div-button">
                <button className="card-button">PRECIO NO DISPONIBLE</button>
            </div>
        </div>
        <div className="card-3">
            <h1 className="card-text-3">PRECIO OFERTA</h1>
            <p className="card-calendary">El precio incluye <br/>los tres meses de contenido, actividades y clases</p>
            <p className="card-price-yes-3">$210 USD</p>
            <div className="card-div-button">
                <a className="card-button-yes-3" target="_blank" href="https://walink.co/e3f56e">
                    ¡Quiero unirme al Programa ahora!
                </a>
            </div>
        </div>
        <p className="card-mensaje">
        Todo el programa se llevara a cabo por <b>3 meses por sólo 210 usd, osea 70 usd por mes.</b><br/>
        Oferta disponible solo por 30 días
        </p>
    </div>
  )
}