"use client";
import Image from 'next/image'
import React from 'react'
import profile from '@/public/profile.jpg'
import { motion } from 'framer-motion'


export default function Intro() {
  return (
    <section>
        <div className="flex items-center justify-center">
            <div className='relative'>
            <motion.div
            initial={{opacity:0,scale:0}}
            animate={{opacity:1,scale:1}}
            >
            <Image 
            src={profile} 
            quality={95} 
            priority={true} 
            alt='Akash-Saini-Photo'
            className='rounded-full border-[0.35rem] border-white object-cover shadow-xl  h-auto w-32 sm:w-[200px] ' 
            /></motion.div>
            <motion.span 
            className='text-3xl sm:text-5xl absolute bottom-0 right-0 origin-center'
            animate={{
                rotate: [0, 10, 15, 20, 25, 0, -10, -15, -20, -25, 0]
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7,0.8, 0.9, 1],
                loop: Infinity, 
                delay:2
              }}
            >
                👋
            </motion.span>
            </div>
        </div>
    </section>
  )
}
