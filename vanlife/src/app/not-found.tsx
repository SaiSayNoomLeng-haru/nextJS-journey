import CtaLink from '@/components/CtaLink'
import React from 'react'

const NotFound = () => {
  return (
    <div className='grid gap-5 place-content-center min-h-[50vh]'>
        <p className='text-center text-fs-900 font-bold'>404 <span className="text-fs-700">page not found</span></p>
        <h1 className='text-fs-600 font-semibold'>Sorry, the page you were looking for was not found.</h1>
        <CtaLink 
            desc='Return to Home'
            destination='/'
            className='bg-custom-black-900 text-white'/>
    </div>
  )
}

export default NotFound