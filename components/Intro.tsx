"use client";
import Image from 'next/image'
import React from 'react'
import profile from '@/public/profile.jpg'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';



export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center'>
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
        <motion.p
        className="mb-10 mt-4 px-4 text-2xl  !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Akash.</span> I'm a{" "}
        <span className="font-bold">frontend developer</span> with{" "}
        <span className="font-bold">1.5 years</span> of experience. I enjoy
        building <span className="italic">websites</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="group  bg-gray-800 text-white hover:bg-gray-950 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack "
          href="/CV.pdf"
          download
        >
          Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          
        </a>
        <Link
          href="#contact"
          className="group bg-white  px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition dark:bg-white/10"
        //   onClick={() => {
        //     setActiveSection("Contact");
        //     setTimeOfLastClick(Date.now());
        //   }}
        >
          Contact me <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          
        </Link>

        <div className="flex items-center border border-red justify-center gap-3">
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/akash-saini-312496226"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.3rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/akkysaini"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
        </div>
      </motion.div>
    </section>
  )
}
