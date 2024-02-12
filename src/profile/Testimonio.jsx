import React from 'react'
import './Testimonio.css'
import c1 from "../assets/1.png"
import c2 from "../assets/2.png"
import c3 from "../assets/3.png"
import c4 from "../assets/4.png"
import c5 from "../assets/5.png"
import c6 from "../assets/6.png"

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
        <div className='div-testimonio'>
            <div  className='card-testimonio'>
                <img   className='img-testimonio' src={c4}/>
            </div>
            <div  className='card-testimonio'>
                <img   className='img-testimonio' src={c5}/>
            </div>
            <div  className='card-testimonio'>
                <img   className='img-testimonio' src={c6}/>
            </div>
        </div>
    </div>
  )
}
