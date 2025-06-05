import usePagination from '@beborn/shared/hooks/pagination'
import { MouseEvent } from 'react'

import { PaginationArrow } from './arrow'
import type { IPaginationProps } from './interface'
import { PagiItem } from './item'

export const Pagination = ({ total }: IPaginationProps) => {
  const {
    page: curPage,
    list = [],
    isFirst,
    isLast,
    onClickNext,
    onClickPrev
  } = usePagination(total)

  const handleClickNext = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    onClickNext()
  }

  const handleClickPrev = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    onClickPrev()
  }

  if (total === 0) return

  return (
    <div className='flex justify-center'>
      <nav aria-label='Page navigation example'>
        <ul className='list-style-none flex'>
          <PaginationArrow
            arrow='prev'
            disabled={isFirst}
            onClick={handleClickPrev}
          />
          {list.map((idx: number) => (
            <PagiItem key={idx} page={idx} active={curPage === idx} />
          ))}
          <PaginationArrow
            arrow='next'
            disabled={isLast}
            onClick={handleClickNext}
          />
        </ul>
      </nav>
    </div>
  )
}
