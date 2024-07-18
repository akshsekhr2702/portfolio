"use client"
import { TiltCard } from '@/components/TiltCard'
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

