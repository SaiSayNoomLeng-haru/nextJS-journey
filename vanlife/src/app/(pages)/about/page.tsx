import CtaLink from '@/components/CtaLink'
import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About"
}

const About = () => {

  // classes and styles
  const aboutPage = clsx(
    'space-y-3'
  )
  return (
    <section className={aboutPage}>
      <Image 
        src='/assets/images/about-hero.png'
        width={600}
        height={300}
        alt="a man sitting on the van watching the stars at night"
        aria-label='a man sitting on the van watching the stars at night'
        className='rounded-sm'
        priority/>

        <h1 className="heading">Don't squeeze in a seadan when you could relax in a van.</h1>

        <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.</p>

        <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>

        <div className='p-5 bg-custom-pale rounded-sm flex flex-col gap-3'>
          <p className='font-semibold'>Your destination is waiting.</p>
          <p className='font-semibold'>Your van is ready.</p>

          <CtaLink 
            destination='/vans'
            desc='Explore our vans'
            className='bg-custom-black-100 text-white'
          />
        </div>
    </section>
  )
}

export default About