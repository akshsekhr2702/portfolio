import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
import Reveal from './Reveal';

const About = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20 mt-10 md:mt-20 bg-gradient-to-b from-transparent to-[#131316] text-white px-6 md:px-20 py-20 md:py-40'>
      <Reveal>
      <div className='w-full md:max-w-[50%] text-center md:text-start'>
        <h1 className='text-3xl sm:text-4xl md:text-6xl oswald font-bold'>
          HI! I&lsquo;M <span className='text-orange-600'>AKSHYANSHU</span>,<br />
          I LOVE MAKING THINGS <br />THAT HELP PEOPLE DO <br />THEIR THING.
        </h1>
      </div>
      </Reveal>

      <div className='w-full md:w-[400px] outfit mt-8 md:mt-0'>
       
        <p className='text-base sm:text-lg md:text-xl text-start'>
          I’m a senior frontend engineer based in India, specializing in building pixel-perfect, engaging, and accessible digital experiences. <br />
          <br />
          As a passionate engineer and also a total nerd, I enjoy building software in the sweet spot where design, problem-solving, and engineering meet — creating things that not only look good but are also easy to use and well-built under the hood.
        </p>
        
        {/* cta  */}
        <Reveal>
        <span className='flex mt-4 text-xl sm:text-2xl md:text-4xl oswald text-start'>
          MORE ABOUT ME<MdOutlineArrowOutward />
        </span>
        </Reveal>
        
      </div>
      
    </div>
  )
}

export default About
