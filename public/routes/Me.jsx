import React from 'react'
import { Story } from '../../src/history/Story'
import { Profile } from '../../src/profile/Profile'
import Wave from '../../src/wave/Wave'

export const Me = () => {
  return (
    <>
        <Profile />
        <Wave />
        <Story />
    </>
  )
}
