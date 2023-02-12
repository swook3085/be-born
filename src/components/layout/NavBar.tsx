import Link from 'next/link'
import React from 'react'
import { ReactNode } from 'react'

interface INavbarProps {
  children?: ReactNode
}

const Navbar = ({ children }: INavbarProps) => {
  return (
    <header className='flex h-[65px] justify-center top-0 z-50 shadow-sm bg-white sticky border-b border-gray-200'>
      <div className='w-[1280px] overflow-hidden flex justify-between px-4'>
        <h1 className='text-2xl font-bold tracking-tight text-gray-900'>
          <Link href='/'>Beborn</Link>
        </h1>
        <div className='flex items-center'>{children}</div>
      </div>
    </header>
  )
}

export default Navbar
