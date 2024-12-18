import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import { ReactNode } from 'react'

interface IHeaderProps {
  show?: boolean
  children?: ReactNode
}

export const Header = ({ children, show = true }: IHeaderProps) => {
  return (
    <header
      tabIndex={-1}
      className={clsx(
        'sticky top-0 z-50 flex h-[65px] justify-center border-b border-gray-200 bg-white shadow-sm',
        {
          hidden: !show
        }
      )}
    >
      <div className='flex w-[1280px] justify-between overflow-hidden px-4'>
        <h1 className='flex items-center text-2xl font-bold tracking-tight text-gray-900'>
          <Link href='/'>Beborn</Link>
        </h1>
        <div className='flex items-center'>{children}</div>
      </div>
    </header>
  )
}
