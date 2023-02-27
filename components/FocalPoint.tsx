import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundShapes from './BackgroundShapes';

type Props = {}

export default function FocalPoint({}: Props) {
    const [text, count] = useTypewriter({
        words: ['Hey, my name is Ashu Chauhan', 'Aspiring Full-Stack Developer', 'Never ending learner', 'Welcome to my site!'],
        delaySpeed: 1500,
    });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundShapes />
        <h1>
            <span className='font-bold text-cyan-400'>{text}</span>
            <Cursor cursorColor='cyan' />
        </h1>
        <div>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[17px] justify-center items-center'>Student</h2>
        </div>
    </div>

  )
}