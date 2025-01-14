'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const NavLink = ({
    urlLink, name
}:{
    urlLink: string
    name: string

}) => {
    const pathname = usePathname();
  return (
    <Link 
        href={urlLink}
        className={clsx(
            'capitalize',
            pathname === urlLink
            ? 'border-b-2 border-custom-orange font-semibold'
            : ''
        )}>
            {name}
    </Link>
  )
}

export default NavLink