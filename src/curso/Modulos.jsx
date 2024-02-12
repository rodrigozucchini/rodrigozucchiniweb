import React,{ useState,useEffect } from 'react';
import './Modulos.css';

const Modulos = () => {

    const [ action1, setAction1 ] = useState(false);
    const [ action2, setAction2 ] = useState(false);
    const [ action3, setAction3 ] = useState(false);
    const [ action4, setAction4 ] = useState(false);
    const [ action5, setAction5 ] = useState(false);
    const [ action6, setAction6 ] = useState(false);
    const [ action7, setAction7 ] = useState(false);
    const [ action8, setAction8 ] = useState(false);
    const [ action9, setAction9 ] = useState(false);
    const [ action10, setAction10 ] = useState(false);
    const [ action11, setAction11 ] = useState(false);
    const [ action12, setAction12 ] = useState(false);
    const [ action13, setAction13 ] = useState(false);
    const [ action14, setAction14 ] = useState(true);

    const actionPreg1 = () => {
        setAction1(!action1)
    }

    const actionPreg2 = () => {
        setAction2(!action2)
    }

    const actionPreg3 = () => {
        setAction3(!action3)
    }

    const actionPreg4 = () => {
        setAction4(!action4)
    }

    const actionPreg5 = () => {
        setAction5(!action5)
    }

    const actionPreg6 = () => {
        setAction6(!action6)
    }

    const actionPreg7 = () => {
        setAction7(!action7)
    }

    const actionPreg8 = () => {
        setAction8(!action8)
    }

    const actionPreg9 = () => {
        setAction9(!action9)
    }

    const actionPreg10 = () => {
        setAction10(!action10)
    }

    const actionPreg11 = () => {
        setAction11(!action11)
    }

    const actionPreg12 = () => {
        setAction12(!action12)
    }

    const actionPreg13 = () => {
        setAction13(!action13)
    }

    const actionPreg14 = () => {
        setAction14(action14)
    }

    const [modulosReview, setModulosReview] = useState(window.innerWidth < 800 ? false : true)

    const renderTestimonios = () => {
        if(window.innerWidth < 800) setModulosReview(false)
        else setModulosReview(true)
    }

    useEffect(() => {
      renderTestimonios()
      window.addEventListener("resize", renderTestimonios)
      return () => window.removeEventListener("resize", renderTestimonios)
    }, [])

  return (
    <div className="modulos">
        {
          modulosReview
          ?
          (
            <h1 className='modulos-h1'> CONOCE LA RUTA DE "PROGRAMA DESDE CERO"</h1>
          )
          :
          (
            <h1 className='modulos-h1'> CONOCE LA RUTA DE <br />"PROGRAMA DESDE CERO"</h1>
          )  
        }
        <div className="modulos-div">
            <span className="modulos-yes" onClick={actionPreg1}>
                { action1 === false ? "\u00A0+ \u00A0 \u00A0 \u00A0 Módulo 0. Introducción." : "\u00A0 - \u00A0 \u00A0 \u00A0Módulo 0. Introducción." }
            </span>
            { 
            action1 === true ? 
                <ul className="modulos-yes-rest">
                    <li>Historia de la programacion</li>
                    <li>Conceptos claves</li>
                    <li>Areas que existen</li>
                    <li>Introduccion al mundo del desarrollo</li>
                    <li>Preparacion de entorno</li>
                    <li>Metodología del programa</li>
                </ul>
            :
                null
            }
        </div>
        <div className="modulos-div">
            <span className="modulos-yes" onClick={actionPreg2}>
                { action2 === false ? "\u00A0+ \u00A0 \u00A0   \u00A0Módulo 1. Definiciones." : "\u00A0- \u00A0 \u00A0   \u00A0Módulo 1. Definiciones." }
            </span>
            { 
            action2 === true ? 
                <ul className="modulos-yes-rest">
                    <li>Definiciones generales</li>
                    <li>Análisis del internet</li>
                    <li>Análisis del mundo web y de los datos</li>
                    <li>BONUS - Hitoria de los lenguajes</li>

                </ul>
            :
                null
            }
        </div>
        <div className="modulos-div">
            <span className="modulos-yes" onClick={actionPreg3}>
                { action3 === false ? "\u00A0+ \u00A0 \u00A0  \u00A0 Módulo 2. Diagramas." : "\u00A0- \u00A0 \u00A0  \u00A0Módulo 2. Diagramas." }
            </span>
            { 
            action3 === true ? 
                <ul className="modulos-yes-rest">
                    <li>Introduccion a los diagramas</li>
                    <li>Conceptos y aplicacion</li>

                </ul>
            :
                null
            }
        </div>
        <div className="modulos-div">
            <span className="modulos-yes" onClick={actionPreg4}>
                { action4 === false ? "\u00A0+ \u00A0 \u00A0  \u00A0Módulo 3. Logica." : "\u00A0- \u00A0 \u00A0   \u00A0Módulo 3. Logica." }
            </span>
            { 
            action4 === true ? 
                <ul className="modulos-yes-rest">
                    <li>Introduccion a la lógica</li>
                    <li>Conceptos y aplicacion</li>
                </ul>
            :
                null
            }
        </div>
        <div className="modulos-div">
            <span className="modulos-yes" onClick={actionPreg5}>
                { action5 === false ? "\u00A0+ \u00A0 \u00A0   \u00A0Módulo 4. Implementacion de logica y diagrama. " : "\u00A0- \u00A0 \u00A0   \u00A0Módulo 4. Implementacion de logica y diagrama. " }
            </span>
            { 
            action5 === true ? 
                <ul className="modulos-yes-rest">
                    <li>Actividades y ayuda</li>
                </ul>
            :
                null
            }
        </div>
        <div className="modulos-div">
            <span className="modulos-yes" onClick={actionPreg6}>
                { action6 === false ? "\u00A0+ \u00A0 \u00A0   \u00A0Módulo 5. Web y más." : "\u00A0- \u00A0 \u00A0   \u00A0Módulo 5. Web y más." }
            </span>
            { 
            action6 === true ? 
                <ul className="modulos-yes-rest">
                    <li>¿Qué es la web?</li>
                    <li>Sus lenguajes</li>
                    <li>Su historia</li>
                    <li>Que hay detras</li>
                    <li>Su futuro</li>
                    <li>Tipos de paginas</li>
                </ul>
            :
                null
            }
        </div>
        <div className="modulos-div">
            <span className="modulos-yes" onClick={actionPreg7}>
                { action7 === false ? "\u00A0+ \u00A0 \u00A0   \u00A0Módulo 6. Datos." : "\u00A0- \u00A0 \u00A0   \u00A0Módulo 6. Datos." }
            </span>
            { 
            action7 === true ? 
                <ul className="modulos-yes-rest">
                    <li>Introduccion a datos</li>
                    <li>Diferencia entre todas las areas de datos</li>
                    <li>Tipos de datos</li>
                    <li>Datos en el futuro y su implementacion</li>
                </ul>
            :
                null
            }
        </div>
        <div className="modulos-div">
            <span className="modulos-yes" onClick={actionPreg8}>
                { action8 === false ? "\u00A0+ \u00A0 \u00A0   \u00A0Módulo 7. HTML." : "\u00A0- \u00A0 \u00A0   \u00A0Módulo 7. HTML." }
            </span>
            { 
            action8 === true ? 
                <ul className="modulos-yes-rest">
                    <li>¿Qué es HTML?</li>
                    <li>Aprendizaje</li>
                    <li>Aplicacion</li>
                </ul>
            :
                null
            }
        </div>
        <div className="modulos-div">
            <span className="modulos-yes" onClick={actionPreg9}>
                { action9 === false ? "\u00A0+ \u00A0 \u00A0   \u00A0Módulo 8. CSS." : "\u00A0- \u00A0 \u00A0   \u00A0Módulo 8. CSS." }
            </span>
            { 
            action9 === true ? 
                <ul className="modulos-yes-rest">
                    <li>¿Qué es CSS?</li>
                    <li>Aprendizaje</li>
                    <li>Aplicacion</li>

                </ul>
            :
                null
            }
        </div>
        <div className="modulos-div">
            <span className="modulos-yes" onClick={actionPreg10}>
                { action10 === false ? "\u00A0+ \u00A0 \u00A0   \u00A0Módulo 9. Lenguaje de practica." : "\u00A0- \u00A0 \u00A0   \u00A0Módulo 9. Lenguaje de practica." }
            </span>
            { 
            action10 === true ? 
            <ul className="modulos-yes-rest">
                <li>La importancia de lOS LENGUAJES</li>
                <li>Errores a evitar</li>
                <li>¿Por qué el 97% falla?</li>
                <li>El método de el descanso</li>
                <li>Reflexiones finales</li>
            </ul>
            :
                null
            }
        </div>
        <div className="modulos-div">
            <span className="modulos-yes" onClick={actionPreg11}>
                { action11 === false ? "\u00A0+ \u00A0 \u00A0   \u00A0Módulo 10. Extra (aplicacion de todo y plan de acción)." : "\u00A0- \u00A0 \u00A0   \u00A0Módulo 10. Extra (aplicacion de todo y plan de acción)." }
            </span>
            { 
            action11 === true ? 
            <ul className="modulos-yes-rest">
                <li>Que hacer despues de terminada todas las secciones</li>
                <li>Plan de accion</li>
                <li>Cómo aplicar todo lo aprendido</li>
                <li>Proyectos desde cero con profesor haciendo seguimiento</li>
            </ul>
            :
                null
            }
        </div>
        { 
        modulosReview
         ?
        (<div className="modulos-div-video">
                <p className="modulos-yes-rest-video">PRIMER CLASE TOTALMENTE GRATIS Y SIN COMPROMISO.</p>
        </div>)
        :
        (<div className="modulos-div-video">
                <p className="modulos-yes-rest-video">PRIMER CLASE TOTALMENTE GRATIS Y SIN COMPROMISO.</p>
            
        </div>)
        }
    </div>
  )
}

export default Modulos;