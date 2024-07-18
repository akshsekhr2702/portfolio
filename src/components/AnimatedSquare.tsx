"use client"

import React, { ReactNode, useEffect, useRef } from 'react'

const AnimatedSquare = ({children}:{children:ReactNode}) => {


  return (
    
      <div ><span></span>
        <div className=' px-2 border-2  animate-text-space-in-out ' id='resize'>
        {children}
      </div>
      </div>
   
  )
}

export default AnimatedSquare


const DivWidthLogger = () => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current) {
      const divWidth = divRef.current.offsetWidth;
      console.log('Width of the div:', divWidth);
    }
  }, []);

  return (
    <div
      ref={divRef}
      style={{
        width: '70%',
        border: '1px solid black',
        padding: '20px',
        boxSizing: 'border-box'
      }}
    >
      This is the div whose width will be logged.
    </div>
  );
};
