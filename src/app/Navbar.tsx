"use client"
import AnimatedNavBtn from '@/components/AnimatedNavBtn'
import { AnimatePresence, motion, useMotionValue, useMotionValueEvent, useScroll } from 'framer-motion'
import { DragCloseDrawerExample } from '@/components/DragCloseDrawer'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Navbar = () => {

  const [hidden, setHidden] = useState(false);
    const {scrollY} = useScroll()

    useMotionValueEvent(scrollY, 'change' ,(latest )=>{
      const previous:any = scrollY.getPrevious() 
      console.log(latest, previous);
      if(latest > previous && latest > 150 ){
        setHidden(true)
      }else{
        setHidden(false)
      }

    })
//MOBILE NAV STUFFS
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
    <motion.div
    
    variants={{
      
      visible:{
        y:'0'
      },
      hidden:{
        y:['-10%','-30%','-50%','-70%','-90%','-100%','-200%'],
        visibility:'hidden'
      }
    }}
    transition={{
      duration:0.5,
      ease:'easeOut'
    }}
    animate={hidden?'hidden': 'visible'}
    
     className='fixed  top-5 md:top-10 w-full bg-[#1d1d1f] p-4 text-white max-w-[800px] flex justify-between custom gap-10 items-center rounded-full shadow-md'>
        <div className=''>
            
            <h1 className='font-extrabold'>
                <Image src={'/logo-white-256x256.png'} alt='image' width={40} height={40}/>
            </h1>
        </div>
        <div>
            <ul className='hidden md:flex flex-row justify-evenly items-center gap-4 text-md font-medium outfit'>
                <li><a href="/">Home</a></li>
                <li><a href="/contact">Contact</a></li>
                <li ><a href='/'>About</a></li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/works">Works</a></li>
            </ul>
            <div onClick={toggleMenu} className='md:hidden xl:hidden lg:hidden'>
            {/* Add a button or icon for mobile menu */}
            
              <AnimatedNavBtn />
            
          </div>
        </div>
        <div id='mobile-menu' className='hidden absolute top-16 right-4 bg-[#1d1d1f] p-4 rounded-lg shadow-lg md:hidden'>
        <ul className='flex flex-col gap-4 text-md font-medium outfit'>
          <li><a href="/">Home</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/works">Works</a></li>
        </ul>
      </div>
      <AnimatePresence>
        {
            open && (
                <motion.div
    variants={menuVars}
    initial={"initial"}
    animate="animate"
    exit={"exit"}
    className=' fixed left-0 top-0 w-full h-screen bg-[#0D1321] uppercase font- p-6 origin-top oswald'>
        <div className='flex flex-col h-full  '>
      <div className='flex justify-between '>
        <h1 className='text-lg text-white bg-red'>DAMMIT AKSH</h1>
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
        
        
    </motion.div>
    
  )
}

export default Navbar



const navLinks = [
  {title:'Home', href:'/'},
  {title:'Contact', href:'/'},
  {title:'About', href:'/'},
  {title:'Gallery', href:'/'},
  {title:'Works', href:'/'},
]

const MobileViewLink = ({title, href}:{title:any, href:any}) =>{
  return <div className='text-4xl text-center'>
    <Link href={href}>{title}</Link>
  </div>
}