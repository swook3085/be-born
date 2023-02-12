import PagiItem from './Pagitem'
import { MouseEvent } from 'react'
import { IPaginationProps } from '@shared/interface/IPagination'
import usePagination from '@shared/hooks/usePagination'

const Pagination = ({ total, page = 1, onPageChange }: IPaginationProps) => {
  const {
    page: curPage,
    list = [],
    onChange,
    next,
    prev,
    isFirst,
    isLast,
  } = usePagination({
    page,
    total,
    onPageChange,
  })

  const _onNext = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    next()
  }

  const _onPrev = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    prev()
  }

  const _onChange = (page: number) => {
    onChange(page)
    _pageChange(page)
  }

  const _pageChange = (page: number) => {
    onPageChange && onPageChange(page)
  }

  if (total === 0) return <></>

  return (
    <div className='flex justify-center'>
      <nav aria-label='Page navigation example'>
        <ul className='flex list-style-none'>
          <li className={`page-item ${isFirst ? 'disabled' : ''}`}>
            <a
              className={`page-link relative block py-1.5 px-3 rounded-full border-0 bg-transparent outline-none transition-all duration-300 rounded ${
                isFirst
                  ? 'text-gray-500 pointer-events-none'
                  : 'text-gray-800 hover:text-gray-800 hover:bg-gray-200'
              } focus:shadow-none`}
              href='#'
              aria-label='Previous'
              onClick={_onPrev}
            >
              <span>&laquo;</span>
            </a>
          </li>
          {list.map((idx: number) => (
            <PagiItem
              key={idx}
              page={idx}
              active={curPage === idx}
              onClick={_onChange}
            />
          ))}
          <li className={`page-item ${isLast ? 'disabled' : ''}`}>
            <a
              className={`page-link relative block py-1.5 px-3 rounded-full border-0 bg-transparent outline-none transition-all duration-300 rounded ${
                isLast
                  ? 'text-gray-500 pointer-events-none'
                  : 'text-gray-800 hover:text-gray-800 hover:bg-gray-200'
              } focus:shadow-none`}
              href='#'
              aria-label='Next'
              onClick={_onNext}
            >
              <span>&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination
