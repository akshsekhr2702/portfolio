"use client"
import { DragCloseDrawerExample } from '@/components/DragCloseDrawer';
import React, { useState } from 'react';
import {motion, MotionConfig} from 'framer-motion'

const AnimatedNavBtn = () => {
  return (
    <div className=''>
      <AnimatedButton />
    </div>
  );
}

export default AnimatedNavBtn ;


const AnimatedButton = () =>{


  const [active, setActive ] = useState(false);
  
    
 return(
  <MotionConfig 
  transition={{
    ease: "easeInOut",
    duration:0.5
  }}
  >
    <motion.button 
    onClick={()=>setActive((pv)=>!pv)}
    animate={active ? "open":"closed"}
    className='relative h-10 w-10 rounded-xl bg-white/0 transition-colors  hover:bg-white/20 p-2'>
        <motion.span style={{
            left:'50%',
            top:'25%',
            x:"-50%",
            y:'-50%',

        }}
        variants={{
          open:{
            y:'0.5rem',
            rotate:'45deg'
          },
          closed:{
            rotate:'0deg'
          }
        }}
       

         className='absolute h-1 w-7 bg-white' />
        <motion.span style={{
            top:'50%',
            left:'50%',
            x:"-50%",
            y:'-50%',
            
            
        }}
        variants={{
          open:{
            
            rotate:'-45deg'
          },
          closed:{
            rotate:'0deg'
          }
        }}
        className='absolute h-1 w-7 bg-white' />
        <motion.span style={{
            left:'calc(50% + 10px)',
            bottom:'25%',
            x:"-50%",
            y:'50%'
            
        }} className='absolute h-1 w-2 bg-white'
        variants={{
          open:{
            y:'-10px',
           visibility:'hidden'
          },
          closed:{
            visibility:'visible'
          }
        }}
        transition={{
          duration:0.1
        }}

         />

    </motion.button>
    </MotionConfig>
 );
}