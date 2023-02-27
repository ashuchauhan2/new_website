import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function BackgroundShapes({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0, }}
    animate={{ 
        scale: [1,2,2,3,1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
     }}
     transition={{
        delay: 1.5,
        duration: 2.5,
     }}
    className='relative flex justify-center items-center'>
        <div className='absolute border border-turqoise-400 rounded-full w-[200px] h-[200px] mt-52 animate-ping opacity-20'></div>
        <div className='absolute border border-cyan-400 rounded-full w-[500px] h-[500px] mt-52 hover:animate-pulse opacity-20'></div>
        <div className='absolute border border-cyan-400 w-[700px] h-[700px] mt-52 rounded-full'/>
        <div className='absolute border border-emerald-300 w-[365px] h-[365px] mt-52 rounded-full'/>
    </motion.div>
  )
}

export default BackgroundShapes