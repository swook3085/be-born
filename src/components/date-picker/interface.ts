export interface IDatePickerProps {
  date?: Date
  onDateChange?: (date: Date | undefined) => void
  placeholder?: string
  disabled?: boolean
  maxDate?: Date
  minDate?: Date
  className?: string
}

