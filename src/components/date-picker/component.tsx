'use client'

import { Button } from '@beborn/components/button'
import { Calendar } from '@beborn/components/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@beborn/components/popover'
import { cn } from '@beborn/lib/utils'
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'
import { Calendar as CalendarIcon } from 'lucide-react'

import type { IDatePickerProps } from './interface'

export const DatePicker = ({
  date,
  onDateChange,
  placeholder = '날짜 선택',
  disabled = false,
  maxDate,
  minDate,
  className
}: IDatePickerProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'h-10 w-full justify-start text-left font-normal',
            !date && 'text-muted-foreground',
            className
          )}
          disabled={disabled}
        >
          <CalendarIcon className='mr-2 h-4 w-4 shrink-0' />
          {date ? (
            <span className='truncate'>{format(date, 'yyyy.MM.dd')}</span>
          ) : (
            <span className='truncate'>{placeholder}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0' align='start'>
        <Calendar
          mode='single'
          selected={date}
          onSelect={onDateChange}
          locale={ko}
          disabled={(date: Date) => {
            if (maxDate && date > maxDate) return true
            if (minDate && date < minDate) return true
            return false
          }}
        />
      </PopoverContent>
    </Popover>
  )
}
