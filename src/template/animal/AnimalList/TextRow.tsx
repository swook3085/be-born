import { ReactNode } from 'react'

interface ITextRow {
  title: string
  children: ReactNode
}

const TextRow = ({ title, children }: ITextRow) => {
  return (
    <div className='m-0.5 ml-2'>
      {/* <p className='float-left w-12 text-[#676c76] cursor-default text-sm truncate'>
        {title}
      </p> */}
      <p className='cursor-default text-sm truncate'>{children}</p>
    </div>
  )
}

export default TextRow
