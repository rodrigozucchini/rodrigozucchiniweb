import React from 'react'
import { Story } from '../../src/history/Story'
import { Profile } from '../../src/profile/Profile'
import Intro from '../../src/curso/Intro'
import Modulos from '../../src/curso/Modulos'
import CopyObj from '../../src/curso/CopyObj'
import Bonus from '../../src/curso/Bonus'
import { Planes } from '../../src/curso/Planes'

export const Me = () => {
  return (
    <>
        <Intro />
        <Bonus />
        <CopyObj />
        <Planes />
        <Modulos />
        <Profile />
        <Story />
    </>
  )
}
