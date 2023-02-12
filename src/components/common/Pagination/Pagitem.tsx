import { MouseEvent, MouseEventHandler } from 'react'

interface IPagiItemProps {
  page: number
  active?: boolean
  onClick: (page: number) => void
}

const PagiItem = ({ page, active = false, onClick }: IPagiItemProps) => {
  const _onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    onClick(page)
  }
  return (
    <li className={`page-item${active ? ' active' : ''}`}>
      <a
        className={`page-link relative block py-1.5 px-3 border-0 ${
          active
            ? 'bg-[#ECB04D] text-white hover:text-white hover:bg-[#ECB04D]'
            : 'bg-transparent text-gray-800 hover:text-gray-800 hover:bg-gray-200'
        } outline-none transition-all duration-300 rounded-full focus:shadow-none`}
        href='#'
        onClick={_onClick}
      >
        {page}
      </a>
    </li>
  )
}

export default PagiItem
