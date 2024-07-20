import React from 'react'
import Hero from './Hero'
import About from './About'
import Experience from './Experience'
import GBackground from './GBackground'
import AnimatedSquare from './AnimatedSquare'
import Footer from './Footer'
import { DivOrigami } from './DivOrigami'

const Body = () => {
  return (
    <GBackground>
          <div className=''>
          <Hero />
          <About />
          <Experience />
          <Footer/>
          <DivOrigami />
          </div>
    </GBackground>
  )
}

export default Body