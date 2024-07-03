import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

const About = () => {
  return (
    <div className='flex justify-between text-center items-center gap-20 mt-20 bg-[#0D1321]  text-white px-20 py-40'>

        <div className='max-w-[50%] text-start leading-relaxed'>
       <h1 className='text-6xl oswald font-bold'> HI! I'M <span className='text-orange-600'>AKSHYANSHU</span>,<br />
        I LOVE MAKING THINGS <br />THAT HELP PEOPLE DO <br />THEIR THING.</h1>
        </div>
        <div className=' w-[400px] outfit'>
            <p className='text-xl text-start'>I’m a senior frontend engineer based in India, specializing in building pixel-perfect, engaging, and accessible digital experiences. <br />
            <br />

As a passionate engineer and also a total nerd, I enjoy building software in the sweet spot where design, problem-solving, and engineering meet — creating things that not only look good but are also easy to use and well-built under the hood.</p>
            {/* cta  */}
            <span className='flex mt-4 text-4xl oswald text-start'> MORE ABOUT ME<MdOutlineArrowOutward /></span>
        </div>
    </div>
  )
}

export default About