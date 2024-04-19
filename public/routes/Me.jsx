import React from 'react'
import { Story } from '../../src/history/Story'
import Intro from '../../src/curso/Intro'
import CopyObj from '../../src/curso/CopyObj'
import Button from '../../src/curso/Button'

export const Me = () => {
  return (
    <>
        <Intro />
        <CopyObj />
        <Button />
        <Story />
    </>
  )
}
