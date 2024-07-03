import Image from 'next/image'
import React from 'react'
import { SiJavascript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
const Experience = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
    <div className='flex flex-col justify-center items-center text-white glass p-10 bg-[#191c1a] backdrop-blur-md '>
        <div><h1 className='text-6xl font-semibold oswald p-10'>ONE UNIVERSE MULTIPLE POSSIBILITIES</h1></div>
        <div className='flex justify-center items-center p-10 gap-2'>
          <div className='rounded-[50%] bg-slate-800 h-16 w-16 flex justify-center items-center'><SiExpress size={40}/></div>
          <div className='rounded-[50%] bg-slate-800 h-20 w-20 flex justify-center items-center'> <SiTypescript size={70} className='rounded-[50%]'/></div>
          <div className='rounded-[50%] bg-slate-800 h-24 w-24 flex justify-center items-center'><FaNodeJs  size={80} /></div>
          <div className='rounded-[50%] bg-slate-800 h-40 w-40  flex justify-center items-center'><SiJavascript size={120}className='rounded-[50%]'/></div>
          <div className='rounded-[50%] bg-slate-800 h-24 w-24 flex justify-center items-center'><RiNextjsFill size={80} /></div>
          <div className='rounded-[50%] bg-slate-800 h-20 w-20 flex justify-center items-center'><FaReact size={60}/></div>
          <div className='rounded-[50%] bg-slate-800 h-16 w-16 flex justify-center items-center'><SiMongodb size={40}/></div>
        </div>
        <div><p className='text-white text-xl outfit w-[600px] text-center'>With over 2 years of experience building for the web. JavaScript (or TypeScript) and React remains my preferred tools for web applications. The adaptability and extensive ecosystem empower me to deliver rapid and scalable solutions with ease.</p></div>
    </div>
    <div className='flex justify-center mt-10 text-white glass2  '>
      <div className='oswald text-6xl p-10 font-semibold text-wrap  '>BUILDING THE FUTURE <br /> OF STUDYING AT <br /> VEMANA.</div>
      <div className=' outfit text-xl text-wrap w-[600px] text-center p-10'>Currently, I’m focused on crafting scalable enterprise procurement solutions at Procol and leading the team responsible for bringing new ideas to life.

Previously, I’ve had the privilege of working with a geospatial data intelligence company on a GIS tool. Additionally, I have collaborated with several freelance clients in the past to overhaul their marketing sites and core products.</div>
    </div>
    
    </div>
  )
}

export default Experience