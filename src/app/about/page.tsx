"use client"
import { motion,useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowBigLeftDashIcon, MousePointer } from 'lucide-react'
import Image from 'next/image'
import React, { ReactNode } from 'react'
import { SlCursorMove } from 'react-icons/sl'

const about = () => {
  return (
    <div className='h-screen grid w-full place-content-center bg-gradient-to-br from-transparent to-indigo-950 text-slate-900'>
        <TiltCard>
            <h1>Hi there</h1>
        </TiltCard>
    </div>
  )
}

export default about

 export const TiltCard = ({children}:{children:any }) =>{

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(
        mouseYSpring,
        [-0.5, 0.5],
         ["17.5deg", "-17.5deg"]);


    const rotateY = useTransform(
            mouseXSpring,
            [-0.5, 0.5],
             ["-17.5deg", "17.5deg"]
            );

    const handleMouseMove = (e?:any) =>{
        // boundingClientRect is used to collect which position it is in
        //target is used to select the element which the mouse is eventing on rn
        const rect = e.target.getBoundingClientRect();
        
        const width = rect.width;
        const height  = rect.height;
        
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX/width - 0.5;
        const yPct = mouseY/height - 0.5;

        x.set(xPct)
        y.set(yPct)
        
    }
    const handleMouseLeave = () =>{
        x.set(0);
        y.set(0);
    }

    return(
        <motion.div 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
                rotateX,
                rotateY,
                
                transformStyle:'preserve-3d',
                
            }}
        className=' relative h-96 w-96 rounded-xl bg-gradient-to-br glass from-[#191c1a]  to-violet-300'>
            <div
            style={{
                transform:'translateZ(75px) ',
                transformStyle:'preserve-3d',
               
                
            }}
             className='absolute inset-6 bg-white  rounded-xl grid place-content-center '>
                {children}
            </div>
        </motion.div>
    )
}