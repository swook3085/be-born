import type { ISigunguItem } from '@beborn/shared/interfaces'
import { useRouter, useSearchParams } from 'next/navigation'
import catData from 'public/data/cat.json'
import dogData from 'public/data/dog.json'
import sidoData from 'public/data/sido.json'
import sigunguData from 'public/data/sigungu.json'
import { useEffect, useState } from 'react'

import {
  formatDateForAPI,
  getDateBefore30Days,
  getToday,
  parseAPIDate
} from './constants'

export const useFilterState = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [isOpen, setIsOpen] = useState(false)
  const [selectedAnimalType, setSelectedAnimalType] = useState('')
  const [selectedSido, setSelectedSido] = useState('')
  const [selectedSigungu, setSelectedSigungu] = useState('')
  const [selectedBreed, setSelectedBreed] = useState('')
  const [startDate, setStartDate] = useState<Date | undefined>(
    getDateBefore30Days()
  )
  const [endDate, setEndDate] = useState<Date | undefined>(getToday())
  const [sigunguList, setSigunguList] = useState<ISigunguItem[]>([])

  const sidoList = sidoData.response.body.items.item
  const catBreeds = catData.response.body.items.item
  const dogBreeds = dogData.response.body.items.item

  // 선택된 동물 타입에 따라 품종 리스트 결정
  const getBreedList = () => {
    if (selectedAnimalType === '422400') return catBreeds
    if (selectedAnimalType === '417000') return dogBreeds
    return []
  }

  const breedList = getBreedList()

  // 활성 필터 개수 계산
  const getActiveFilterCount = () => {
    let count = 0
    if (selectedSido) count++
    if (selectedSigungu) count++
    if (selectedBreed) count++
    return count
  }

  const activeFilterCount = getActiveFilterCount()

  // searchParams 초기값 설정
  useEffect(() => {
    setSelectedAnimalType(searchParams.get('upKind') || '')
    setSelectedSido(searchParams.get('sido') || '')
    setSelectedSigungu(searchParams.get('sigungu') || '')
    setSelectedBreed(searchParams.get('kind') || '')

    const startParam = searchParams.get('startDate')
    const endParam = searchParams.get('endDate')
    if (startParam) setStartDate(parseAPIDate(startParam))
    if (endParam) setEndDate(parseAPIDate(endParam))
  }, [searchParams])

  // 시도 변경 시 시군구 목록 로드
  useEffect(() => {
    if (selectedSido) {
      const sigunguMap = sigunguData.response.body.items as Record<
        string,
        ISigunguItem[]
      >
      const sigungu = sigunguMap[selectedSido] || []
      setSigunguList(sigungu)
    } else {
      setSigunguList([])
    }
  }, [selectedSido])

  // URL 업데이트 함수
  const updateSearchParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }

    params.set('page', '1')
    router.push(`?${params.toString()}`, { scroll: false })
  }

  // 동물 타입 변경 시
  const handleAnimalTypeChange = (value: string) => {
    setSelectedAnimalType(value)
    setSelectedBreed('')

    const params = new URLSearchParams(searchParams.toString())
    params.delete('kind')
    if (value) {
      params.set('upKind', value)
    } else {
      params.delete('upKind')
    }
    params.set('page', '1')
    router.push(`?${params.toString()}`, { scroll: false })
  }

  // 시도 변경 시
  const handleSidoChange = (value: string | undefined) => {
    const newValue = value === 'all' ? '' : value || ''
    setSelectedSido(newValue)
    setSelectedSigungu('')

    const params = new URLSearchParams(searchParams.toString())
    if (newValue) {
      params.set('sido', newValue)
    } else {
      params.delete('sido')
    }
    params.delete('sigungu')
    params.set('page', '1')
    router.push(`?${params.toString()}`, { scroll: false })
  }

  // 시군구 변경 시
  const handleSigunguChange = (value: string | undefined) => {
    const newValue = value === 'all' ? '' : value || ''
    setSelectedSigungu(newValue)
    updateSearchParams('sigungu', newValue)
  }

  // 품종 변경 시
  const handleBreedChange = (value: string | undefined) => {
    const newValue = value === 'all' ? '' : value || ''
    setSelectedBreed(newValue)
    updateSearchParams('kind', newValue)
  }

  // 시작일 변경 시
  const handleStartDateChange = (date: Date | undefined) => {
    setStartDate(date)
    const params = new URLSearchParams(searchParams.toString())

    if (date) {
      params.set('startDate', formatDateForAPI(date))
    } else {
      params.delete('startDate')
    }

    params.set('page', '1')
    router.push(`?${params.toString()}`, { scroll: false })
  }

  // 종료일 변경 시
  const handleEndDateChange = (date: Date | undefined) => {
    setEndDate(date)
    const params = new URLSearchParams(searchParams.toString())

    if (date) {
      params.set('endDate', formatDateForAPI(date))
    } else {
      params.delete('endDate')
    }

    params.set('page', '1')
    router.push(`?${params.toString()}`, { scroll: false })
  }

  // 필터 초기화
  const handleReset = () => {
    setSelectedAnimalType('')
    setSelectedSido('')
    setSelectedSigungu('')
    setSelectedBreed('')
    setStartDate(getDateBefore30Days())
    setEndDate(getToday())
    setSigunguList([])
    router.push('?page=1', { scroll: false })
  }

  return {
    isOpen,
    setIsOpen,
    selectedAnimalType,
    selectedSido,
    selectedSigungu,
    selectedBreed,
    startDate,
    endDate,
    sidoList,
    sigunguList,
    breedList,
    activeFilterCount,
    handleAnimalTypeChange,
    handleSidoChange,
    handleSigunguChange,
    handleBreedChange,
    handleStartDateChange,
    handleEndDateChange,
    handleReset
  }
}



