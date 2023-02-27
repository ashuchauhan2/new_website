import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import { motion } from 'framer-motion'
import FocalPoint from '@/components/FocalPoint'
import BackgroundShapes from '@/components/BackgroundShapes'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Ashu's Portfolio</title>
        <meta name="description" content="Personal website of Ashu Chauhan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className=' bg-gray-700'>
        {/* Header */}
        <Header />
        {/* Focal Point */}
        <FocalPoint />
      </section>
      <section className='bg-gray-800' />
      
    </div>
  )
}
