import React from 'react'
import IntroImg from './IntroImg';
import Button from './Button';
import "./Intro.css";

const Intro = () => {
  return (
    <header>
        <div>
          <p className='after-title'>¡Descubre el poder de la programación desde cero!</p>
        </div>
        <h1 className="title">Programa desde cero</h1>
        <IntroImg />
        <h2 className="subtitle">Aprende los fundamentos de la programación paso a paso y sin conocimientos previos.
        </h2>
        <Button />
    </header>
  )
}

export default Intro