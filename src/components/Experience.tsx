import Image from 'next/image'
import React from 'react'
import { SiJavascript, SiTypescript, SiExpress, SiMongodb } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs, FaReact } from "react-icons/fa";

const Experience = () => {
  return (
    <div className='flex flex-col justify-center items-center w-inherit bg-gradient-to-b from-[#131316] via-violet-700 to-transparent '>
      {/* DIV 1 */}
      <div className='flex flex-col justify-center items-center text-white  p-6 md:p-10  b  backdrop-blur-md w-inherit'>
        <div>
          <h1 className='text-4xl md:text-6xl font-semibold oswald p-6 md:p-10 text-center'>ONE UNIVERSE MULTIPLE POSSIBILITIES</h1>
        </div>
        <div className='flex flex-wrap justify-center items-center p-6 md:p-10 gap-4'>
          <div className='rounded-full bg-slate-800 h-12 w-12 md:h-16 md:w-16 flex justify-center items-center'>
            <SiExpress size={30} />
          </div>
          <div className='rounded-full bg-slate-800 h-14 w-14 md:h-20 md:w-20 flex justify-center items-center'>
            <SiTypescript size={40} />
          </div>
          <div className='rounded-full bg-slate-800 h-16 w-16 md:h-24 md:w-24 flex justify-center items-center'>
            <FaNodeJs size={50} />
          </div>
          <div className='rounded-full bg-slate-800 h-20 w-20 md:h-40 md:w-40 flex justify-center items-center'>
            <SiJavascript size={60} />
          </div>
          <div className='rounded-full bg-slate-800 h-16 w-16 md:h-24 md:w-24 flex justify-center items-center'>
            <RiNextjsFill size={50} />
          </div>
          <div className='rounded-full bg-slate-800 h-14 w-14 md:h-20 md:w-20 flex justify-center items-center'>
            <FaReact size={40} />
          </div>
          <div className='rounded-full bg-slate-800 h-12 w-12 md:h-16 md:w-16 flex justify-center items-center'>
            <SiMongodb size={30} />
          </div>
        </div>
        <div>
          <p className='text-white text-base md:text-xl outfit w-full md:w-[600px] text-center px-4 md:px-0'>
            With over 2 years of experience building for the web. JavaScript (or TypeScript) and React remains my preferred tools for web applications. The adaptability and extensive ecosystem empower me to deliver rapid and scalable solutions with ease.
          </p>
        </div>
      </div>
      {/* DIV 2 */}
      <div className='flex flex-col md:flex-row justify-center items-center mt-10 text-white glass2 max-w-full'>
        <div className='flex-1 oswald text-3xl md:text-6xl p-6 md:p-10 font-semibold text-center md:text-left'>
          BUILDING THE FUTURE <br /> A GUY WITH  <br /> DREAMS.
        </div>
        <div className='flex-1 outfit text-base md:text-xl w-full md:w-[600px] text-center md:text-left p-6 md:p-10'>
          Currently, I’m focused on crafting scalable enterprise procurement solutions at Procol and leading the team responsible for bringing new ideas to life.
          <br /><br />
          Previously, I’ve had the privilege of working with a geospatial data intelligence company on a GIS tool. Additionally, I have collaborated with several freelance clients in the past to overhaul their marketing sites and core products.
        </div>
      </div>
    </div>
  )
}

export default Experience
