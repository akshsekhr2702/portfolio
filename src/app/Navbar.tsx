import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='text-white max-w-[800px] flex justify-between custom gap-10 items-center rounded-3xl '>
        <div>
            {/* logo */}
            <h1 className='text-justify font-extrabold  '>
                <Image src={'/logo-white-256x256.png'} alt='image' width={40} height={40}/>
            </h1>
        </div>
        <div>
            <ul className='flex flex-row justify-evenly items-center gap-4 text-md font-medium outfit'>
                <li ><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/about">About</a></li>
               
            </ul>
        </div>
    </div>
  )
}

export default Navbar