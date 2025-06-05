import clsx from 'clsx'
import Link from 'next/link'

import type { IPaginationArrowProps } from './interface'

export const PaginationArrow = ({
  disabled,
  arrow,
  onClick
}: IPaginationArrowProps) => {
  return (
    <li className={clsx('page-item', disabled && 'disabled')}>
      <Link
        className={clsx(
          'page-link relative flex h-9 w-9 items-center justify-center rounded-full border-0 bg-transparent outline-none transition-all duration-300',
          disabled
            ? 'pointer-events-none text-gray-500'
            : 'text-gray-800 hover:bg-gray-200 hover:text-gray-800 focus:shadow-none'
        )}
        href='#'
        aria-label={arrow === 'prev' ? 'Previous' : 'Next'}
        onClick={onClick}
      >
        {arrow === 'prev' ? <span>&laquo;</span> : <span>&raquo;</span>}
      </Link>
    </li>
  )
}
