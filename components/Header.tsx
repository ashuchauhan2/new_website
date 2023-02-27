import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between mx-auto max-w-7xl z-20 xl:items-center'>
        <motion.div
        initial={{ opacity: 0, x: -600 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 1.75 }}}
        >
            <SocialIcon url='https://www.linkedin.com/in/ashuc27/' bgColor='transparent' fgColor='cyan'/>
            <SocialIcon url='https://www.github.com/ashuchauhan2' bgColor='transparent' fgColor='cyan'/>
            <SocialIcon url='https://www.youtube.com/channel/UCSWQFt4mn3j1fqUtaCSjhRA' bgColor='transparent' fgColor='cyan'/>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, x: 600 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 1.75 }}}
        >
            <SocialIcon className='cursor-pointer' network='email' bgColor='transparent' fgColor='cyan'/>
            <p className='uppercase hidden md:inline-flex text-sm text-cyan-400'>Email me</p>
        </motion.div>
    </header>
  )
}