"use client"
import { DragCloseDrawerExample } from '@/components/DragCloseDrawer'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed  top-5 md:top-10 w-full bg-[#1d1d1f] p-4 text-white max-w-[800px] flex justify-between custom gap-10 items-center rounded-3xl shadow-md'>
        <div>
            
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
            <div className='md:hidden'>
            {/* Add a button or icon for mobile menu */}
            <button id='menu-toggle' className='p-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
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
        
        
    </div>
    
  )
}

export default Navbar
