import * as React from 'react'
import type { DayButton } from 'react-day-picker'
import type { Button } from '@beborn/components/button'

export interface ICalendarProps {
  className?: string
  classNames?: Record<string, string>
  showOutsideDays?: boolean
  captionLayout?: 'label' | 'dropdown' | 'dropdown-months' | 'dropdown-years'
  buttonVariant?: React.ComponentProps<typeof Button>['variant']
  formatters?: any
  components?: any
  [key: string]: any
}

export interface ICalendarDayButtonProps extends React.ComponentProps<typeof DayButton> {}

