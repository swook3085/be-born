import { ReactNode } from 'react'
import { useRef } from 'react'

interface IBadgeProps {
  type?: 'info' | 'warning' | 'danger'
  children: ReactNode
}
export const Badge = ({ children, type = 'info' }: IBadgeProps) => {
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
      className={`inline-block h-5 whitespace-nowrap px-2.5 text-center align-baseline text-[12px] font-medium leading-5 ${color.current} ${textColor.current} rounded-full`}
    >
      {children}
    </span>
  )
}
