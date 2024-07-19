import React from 'react'
import Main from './slices/Main'
import OurVision from './slices/OurVision'
import CoreValues from './slices/CoreValues'
import OurHistory from './slices/OurHistory'
import OurTeam from './slices/OurTeam'
import BookNow from './slices/BookNow'

export default function About() {
  return (
    <>
    <Main/>
    <OurVision/>
    <CoreValues/>
    <OurHistory/>
    <OurTeam/>
    <BookNow/>
    </>
  )
}
