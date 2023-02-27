import Link from 'next/link'
import React from 'react'
import { ReactNode } from 'react'

interface INavbarProps {
  show?: boolean
  children?: ReactNode
}

const Navbar = ({ children, show = true }: INavbarProps) => {
  return (
    <header
      className={`${
        show ? '' : 'hidden '
      }flex h-[65px] justify-center top-0 z-50 shadow-sm bg-white sticky border-b border-gray-200`}
    >
      <div className='w-[1280px] overflow-hidden flex justify-between px-4'>
        <h1 className='text-2xl font-bold tracking-tight text-gray-900 flex items-center'>
          <Link href='/'>Beborn</Link>
        </h1>
        <div className='flex items-center'>{children}</div>
      </div>
    </header>
  )
}

export default Navbar
