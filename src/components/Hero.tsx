import React, { ReactNode } from 'react'
import AnimatedSquare from './AnimatedSquare'
import { TiltCard } from '@/app/about/page'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='text-white flex flex-col justify-center items-center  my-20 oswald md:h-dvh h-dvh/2 '>

      <h1 className='text-7xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-center'>TURNING</h1>
      <h1 className='text-7xl sm:text-6xl md:text-8xl font-extrabold flex tracking-tight text-center'>
        <AnimatedSquare>IDEAS</AnimatedSquare>{" "}INTO
      </h1>
      <Fadetext>REALITY</Fadetext>
      
    </div>
  )
}

export default Hero


const Fadetext = ({children}:{children:ReactNode}) =>{
  return(
    <h1 className='text-7xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-center animate-fade'>
      {children}
    </h1>
  )
  ;
}