import React from 'react'
import Main from './Slices/Main'
import About from './Slices/About'
import Services from './Slices/Services'
import Proccess from './Slices/Proccess'
import Proccess2 from './Slices/Proccess2'
import FeedBack from './Slices/FeedBack'
import BookNow from './Slices/BookNow'
import Blog from './Slices/Blog'
import Contact from './Slices/Contact'

export default function Home() {
  return (
    <>
    <Main/>
    <About/>
    <Services/>
    <Proccess/>
    <Proccess2/>
    <FeedBack/>
    <BookNow/>
    <Blog/>
    <Contact/>
    </>
  )
}
