import React from 'react'
import Reveal from './Reveal'
import Link from 'next/link'
import About from './About'



const Footer = () => {
  return (
    <div className=' relative flex flex-col md:flex-row md:justify-between items-center outfit text-white p-10 md:px-32 md:py-16 bg-gradient-to-b from-transparent to-slate-800'>
        <div className='flex flex-col justify-start items-start'>
            <h1 className='text-xl text-start font-semibold'>Akshyanshu Sekhar Nayak</h1>
            <p className='text-muted-foreground md:text-lg text-xl '>A Student at Vemana Institute of Technology,<br />
            Open for all side projects and Collaborations.
            </p>
        </div>
        <div className='flex  justify-between md:justify-center  items-start md:items-center mt-4 gap-20'>
            <Reveal>
                <div className='flex flex-col gap-4'> 
                    <h1 className='text-xl'>Me</h1>
                    <ul className='text-muted-foreground  outfit'>
                        <li><Link href={'https://x.com/aksh_sekhr2702'}>About</Link></li>
                        <li><Link href={'https://www.instagram.com/dammit_aksh/'}>Post</Link></li>
                        <li><Link href={'/'}>Works</Link></li>
                        <li><Link href={'/'}>Gallery</Link></li>
                        <li><Link href={'/'}>Uses</Link></li>
                    </ul>
                </div>
            </Reveal>
            <Reveal>
            <div className='flex flex-col gap-4'> 
                <h1 className='text-xl'>Connect</h1>
                    <ul className='text-muted-foreground  outfit'>
                        <li><Link href={'https://x.com/aksh_sekhr2702'}>Twitter</Link></li>
                        <li><Link href={'https://www.instagram.com/dammit_aksh/'}>Instagram</Link></li>
                        <li><Link href={'https://github.com/akshsekhr2702'}>GitHub</Link></li>
                        <li><Link href={'https://www.linkedin.com/in/akshyanshu-sekhar-nayak-499643249/'}>Linkedin</Link></li>
                         <li><Link href={'/about'}>Email</Link></li>
                    </ul>
                </div>
            </Reveal>
        </div>
        

    </div>
  )
}

export default Footer



