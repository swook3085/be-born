'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HiHome, HiOutlineHome } from 'react-icons/hi2'
import { HiBuildingOffice2, HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { HiMagnifyingGlass, HiOutlineMagnifyingGlass } from 'react-icons/hi2'

const navigationItems = [
  {
    label: '홈',
    href: '/',
    icon: HiHome,
    iconOutline: HiOutlineHome
  },
  {
    label: '보호소',
    href: '/shelter',
    icon: HiBuildingOffice2,
    iconOutline: HiOutlineBuildingOffice2
  },
  {
    label: '실종/제보',
    href: '/missing',
    icon: HiMagnifyingGlass,
    iconOutline: HiOutlineMagnifyingGlass
  }
]

export const MobileNav = () => {
  const pathname = usePathname()

  return (
    <nav className='fixed bottom-0 left-0 right-0 z-50 rounded-t-2xl border-t border-gray-200 bg-white shadow-[0_-2px_8px_rgba(0,0,0,0.08)] lg:hidden'>
      <div className='mx-auto flex max-w-[1280px] items-center justify-around'>
        {navigationItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = isActive ? item.icon : item.iconOutline

          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'flex flex-col items-center justify-center gap-1 px-4 py-3 transition-all duration-200 active:scale-95',
                isActive ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'
              )}
            >
              <Icon
                className={clsx('h-6 w-6 transition-all duration-200', {
                  'text-gray-900': isActive,
                  'text-gray-500': !isActive
                })}
              />
              <span
                className={clsx('text-[11px] font-medium leading-tight', {
                  'font-semibold text-gray-900': isActive,
                  'text-gray-500': !isActive
                })}
              >
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
