"use client"
import React, { useEffect, useRef } from 'react'
import {motion, useAnimate, useAnimation, useInView} from 'framer-motion'

interface Props{
    children: JSX.Element;
    width?:"fit-content" | "100%";
}




const Reveal = ({children, width = "fit-content"}:Props) => {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(()=>{
       if(isInView){
        // fire the animation
        mainControls.start('visible')

       }
    },[isInView])

    useEffect(()=>{
        if(isInView)
        slideControls.start('visible')
    })
  return (
    <div ref={ref} style={{
        position:"relative",
        width,
        overflow:'hidden'
    }}>
        <motion.div
        variants={{
            hidden:{opacity:0, y: 75, },
            visible:{opacity:1, y: 0, },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{
            duration:0.5,
            delay:0.25,
        }}
        >

            {children}
        </motion.div>
        {/* TODO: Add slide div thing */}
        <motion.div
        variants={{
            hidden:{left:0},
            visible:{left: "100%"}

        }}
        initial='hidden'
        animate={slideControls}
        transition={{
            duration:.6,
            ease:'easeIn'
        }}
        style={{
            position:'absolute',
            top:4,
            bottom:4,
            left:0,
            right:0,
            background:'#ADD8E6',
            zIndex:20
        }}

        />

    </div>
  )
}

export default Reveal