import React from 'react'
import { Description } from '../../src/profile/Description'
import { Add } from '../../src/profile/Add'
import { Testimonio } from '../../src/profile/Testimonio'
import { Webs } from '../../src/profile/Webs'
import Whatsapp from '../../src/wpp/Wpp'


export const Home = () => {
  return (
    <>
        <Whatsapp />
        <Description />
        <Add />
        <Webs />
        <Testimonio />
        
    </>
  )
}
