'use client'

import { NavbarLink } from 'app/_lib/definitions';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaUserAstronaut } from 'react-icons/fa';

const Navbar = () => {
    const links = [
        { name: 'about', url: '/about'},
        { name: 'vans', url: '/vans'},
        { name: 'host', url: '/host'},
        { name: 'sign-in', url: '/sign-in', icon: <FaUserAstronaut />}
    ]
    const pathname = usePathname();

    // classes and styles
    const header = 'flex justify-between items-center custom-container'
    const mainNav = 'flex gap-3 items-center'
  return (
    <header className={header}>
        <Link
            href='/'>
                <Image 
                    src='/assets/images/logo.png'
                    width={80}
                    height={80}
                    alt=''
                    style={{width: 'auto', height: 'auto'}}
                    priority
                />
        </Link>

        <nav
            className={mainNav}
            role='navigation'>
            {
                links.map((link: NavbarLink) => (
                    <Link
                        key={link.name}
                        href={link.url}
                        className={clsx(
                            'capitalize',
                            pathname === `/${link.name}` 
                            ? 'border-b-2 border-custom-orange font-semibold' 
                            : ''
                        )}>
                            {link.icon ? link.icon : link.name}
                    </Link>
                ))
            }
        </nav>
    </header>
  )
}

export default Navbar