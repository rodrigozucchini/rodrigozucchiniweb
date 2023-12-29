import React from 'react'
import './Testimonio.css'
import c1 from "../assets/1.png"
import c2 from "../assets/2.png"
import c3 from "../assets/3.png"

export const Testimonio = () => {
  return (
    <div  className='back-testimonio'>
        <h1 className='title-testimonio'>CLIENTES DICEN...</h1>
        <div className='div-testimonio'>
            <div  className='card-testimonio'>
                <img   className='img-testimonio' src={c1}/>
            </div>
            <div  className='card-testimonio'>
                <img   className='img-testimonio' src={c2}/>
            </div>
            <div  className='card-testimonio'>
                <img   className='img-testimonio' src={c3}/>
            </div>
        </div>
    </div>
  )
}
