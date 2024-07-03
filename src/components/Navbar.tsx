import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-[800px] h-[40px] rounded-[20px] shadow-inner '>
        <div className=' flex items-center justify-center gap-20 mt-2 bg-[#1d1d1f] w-auto rounded-[24px] shadow-inner  shadow-[#343434]'>
        <div  className='flex  justify-start items-start p-2 '>
            <Image src={'/logowhite.png'} alt='' height={40} width={40}></Image>
        </div>
        <div>
        <ul className=' text-white flex  text-center items-center gap-4 px-32'>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Gallary</a></li>
                <li><a href="">W0rks</a></li>
            </ul>
        </div>
    </div>
    </nav>
  )
}

export default Navbar