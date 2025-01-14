import clsx from 'clsx'
import React from 'react'

const Footer = ({className = ''}) => {
    // classes and styles
    const footerClass = clsx(
      'py-3 text-center bg-custom-black-100 text-custom-gray',
      className
    )
  return (
    <footer className={footerClass}>
        <p>&copy; {new Date().getFullYear()} #VanLife</p>
    </footer>
  )
}

export default Footer