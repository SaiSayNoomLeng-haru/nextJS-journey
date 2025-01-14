'use client'

import React from 'react'
import { NavbarLink } from 'app/_lib/definitions';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const HostNavbar = () => {
     const hostNavLinks: NavbarLink[] = [
        { name: 'dashboard', url: '/host'},
        { name: 'income', url: '/host/income'},
        { name: 'vans', url: '/host/vans'},
        { name: 'reviews', url: '/host/reviews'}
      ];

      const pathname = usePathname();

  return (
    <nav 
        className='flex gap-3'>
          {hostNavLinks.map((link: NavbarLink) => (
            <Link
              key={link.name}
              href={link.url}
              className={clsx(
                'capitalize',
                { 'border-b-2 border-custom-orange font-semibold' : pathname === link.url }
              )}>
                {link.name}
            </Link>
          ))}
      </nav>
  )
}

export default HostNavbar