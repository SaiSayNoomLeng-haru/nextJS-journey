import clsx from 'clsx'
import React from 'react'
import Link from 'next/link'

const CtaLink = ({
    className = '', 
    destination,
    desc
}: {
    className: string
    destination: string
    desc: string
}) => {
    // classes
    const ctaLink = clsx(
        'text-center rounded-sm font-bold py-3', className
    )
  return (
    <Link
        href={destination}
        className={ctaLink}>
            {desc}
    </Link>
  )
}

export default CtaLink