"use client"
import AnimatedNavBtn from '@/components/AnimatedNavBtn'
import { animate, AnimatePresence, frame, motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'

const navLinks = [
    {title:'Home', href:'/'},
    {title:'Contact', href:'/'},
    {title:'About', href:'/'},
    {title:'Gallery', href:'/'},
    {title:'Works', href:'/'},
  ]
  
  
  
  
const works = () => {

    const [open, setOpen] = useState(false);

const toggleMenu  = () =>{

  setOpen((prevOpen)=>(!prevOpen))

}

const menuVars = {
    initial:{
        scaleY:0,
    },
    animate:{
        scaleY:1,
        transition: {
            duration: 0.5,
            ease:[0.12 , 0, 0.39, 0]
        }
    },
    exit:{
        scaleY:0,
        transition: {
            duration: 0.5,
            ease:[0.22 , 1, 0.36, 1]
        }
    }

}


  return (
    <AnimatePresence>
        {
            open && (
                <motion.div
    variants={menuVars}
    initial={"initial"}
    animate="animate"
    exit={"exit"}
    className='fixed left-0 top-0 w-full h-screen bg-yellow-400 p-6 origin-top'>
        <div className='flex flex-col h-full  '>
      <div className='flex justify-between '>
        <h1 className='text-lg text-white bg-red'>Portfolio</h1>
        <div onClick={toggleMenu}><AnimatedNavBtn/></div>
      </div>
      <div className='flex flex-col  h-full justify-center items-center gap-4'>
        {
          navLinks.map((link,index)=>{
            return <MobileViewLink key={index} title={link.title} href ={link.href} />
          })
        }
      </div>

      </div>
    </motion.div>
            )
        }
    </AnimatePresence>
  )
}

export default works

const MobileViewLink = ({title, href}:{title:any, href:any}) =>{
    return <div className='text-4xl text-center'>
      <Link href={href}>{title}</Link>
    </div>
  }