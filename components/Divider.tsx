'use client';

import { motion } from 'framer-motion'
import React from 'react'

const Divider = () => {
  return (
    <motion.div className='bg-gray-200 sm:my-20 my-10 h-16 w-1 rounded-full '
    initial={{opacity:0, y:100}}
    animate={{opacity:1, y:0}}
    transition={{delay:0.125}}
    >
    </motion.div>
  )
}

export default Divider
