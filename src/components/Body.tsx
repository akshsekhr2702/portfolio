import React from 'react'
import Hero from './Hero'
import About from './About'
import Experience from './Experience'
import GBackground from './GBackground'
import AnimatedSquare from './AnimatedSquare'

const Body = () => {
  return (
    <GBackground>
          <div className=''>
          <Hero />
          <About />
          <Experience />
         
          </div>
    </GBackground>
  )
}

export default Body