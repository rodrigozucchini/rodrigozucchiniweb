import React from 'react'
import {Title} from '../../src/coaching/Title'
import Whatsapp from '../../src/wpp/Wpp'
import { Key } from '../../src/profile/Key'
import {Webs} from '../../src/profile/Webs'
import {Testimonio} from '../../src/profile/Testimonio'

export const Coaching = () => {
  return (
    <>
    <Whatsapp />
      <Title />
      <Key />
      <Webs />
      <Testimonio />
    </>
  )
}
