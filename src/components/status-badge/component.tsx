import { useRef } from 'react'

import type { IStatusBadgeProps } from './interface'

export const StatusBadge = ({ children, type = 'info' }: IStatusBadgeProps) => {
  const color = useRef<string>('bg-gray-200')
  const textColor = useRef<string>('text-gray-700')

  switch (type) {
    case 'danger':
      color.current = 'bg-red-600'
      textColor.current = 'text-white'
      break
    case 'warning':
      color.current = 'bg-yellow-500'
      textColor.current = 'text-white'
      break
  }

  return (
    <span
      className={`inline-block h-5 whitespace-nowrap px-2 text-center align-baseline text-xs font-medium leading-5 ${color.current} ${textColor.current} rounded-full`}
    >
      {children}
    </span>
  )
}


