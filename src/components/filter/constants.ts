import { format, parse } from 'date-fns'

export const animalTypes = [
  { value: '', label: '전체' },
  { value: '417000', label: '강아지' },
  { value: '422400', label: '고양이' },
  { value: '429900', label: '기타' }
]

// 날짜를 API 포맷으로 변환 (Date -> YYYY.MM.DD)
export const formatDateForAPI = (date: Date | undefined) => {
  if (!date) return ''
  return format(date, 'yyyy.MM.dd')
}

// API 포맷을 Date로 변환 (YYYY.MM.DD -> Date)
export const parseAPIDate = (dateString: string) => {
  if (!dateString) return undefined
  try {
    return parse(dateString, 'yyyy.MM.dd', new Date())
  } catch {
    return undefined
  }
}

// 오늘 날짜 가져오기
export const getToday = () => {
  return new Date()
}

// 30일 전 날짜 가져오기
export const getDateBefore30Days = () => {
  const date = new Date()
  date.setDate(date.getDate() - 30)
  return date
}



