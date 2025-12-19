'use client'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@beborn/components/sheet'
import clsx from 'clsx'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode, useState } from 'react'

interface IHeaderProps {
  show?: boolean
  children?: ReactNode
}

const navigationItems = [
  { label: '홈', href: '/' },
  { label: '보호소', href: '/shelter' },
  { label: '실종/제보', href: '/missing' }
]

export const Header = ({ children, show = true }: IHeaderProps) => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      tabIndex={-1}
      className={clsx(
        'sticky top-0 z-50 flex h-[60px] justify-center border-b border-gray-100 bg-white lg:h-[70px]',
        {
          hidden: !show
        }
      )}
    >
      <div className='flex w-full max-w-[1280px] items-center justify-between px-4 lg:px-8'>
        <h1 className='flex items-center'>
          <Link
            href='/'
            className='text-[24px] font-bold tracking-tight text-primary transition-colors hover:text-primary/80 lg:text-[32px]'
          >
            beborn
          </Link>
        </h1>

        {/* 모바일 메뉴 */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className='lg:hidden'>
            <Menu className='h-6 w-6 text-gray-700' />
          </SheetTrigger>
          <SheetContent side='right' className='w-[280px]'>
            <SheetHeader>
              <SheetTitle className='text-left text-2xl font-bold text-primary'>
                beborn
              </SheetTitle>
            </SheetHeader>
            <nav className='mt-8 flex flex-col gap-6'>
              {navigationItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={clsx(
                      'text-lg font-bold transition-colors',
                      isActive
                        ? 'text-gray-900'
                        : 'text-gray-600 hover:text-gray-900'
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>
          </SheetContent>
        </Sheet>

        {/* 데스크톱 메뉴 */}
        <nav className='hidden items-center gap-10 lg:flex'>
          {navigationItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  'text-lg font-bold transition-colors',
                  isActive
                    ? 'text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                )}
              >
                {item.label}
              </Link>
            )
          })}
          {children && <div className='ml-4 flex items-center'>{children}</div>}
        </nav>
      </div>
    </header>
  )
}
