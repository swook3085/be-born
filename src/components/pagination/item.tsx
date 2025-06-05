import clsx from 'clsx'
import Link from 'next/link'

import type { IPagiItemProps } from './interface'

export const PagiItem = ({ page, active = false }: IPagiItemProps) => {
  return (
    <li className={clsx('page-item', active && 'active')}>
      <Link
        prefetch={true}
        className={clsx(
          'page-link relative flex h-9 w-9 items-center justify-center border-0',
          active
            ? 'bg-[#ECB04D] text-white hover:bg-[#ECB04D] hover:text-white'
            : 'bg-transparent text-gray-800 hover:bg-gray-200 hover:text-gray-800',
          'rounded-full outline-none transition-all duration-300 focus:shadow-none'
        )}
        href={`?page=${page}`}
      >
        {page}
      </Link>
    </li>
  )
}
