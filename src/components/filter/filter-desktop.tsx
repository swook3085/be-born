import { Button } from '@beborn/components/button'
import { DatePicker } from '@beborn/components/date-picker'
import { Label } from '@beborn/components/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@beborn/components/select'
import type { ISidoItem, ISigunguItem } from '@beborn/shared/interfaces'

interface IBreedItem {
  kindCd: string
  kindNm: string
}

import { getToday } from './constants'

interface IFilterDesktopProps {
  selectedSido: string
  selectedSigungu: string
  selectedBreed: string
  selectedAnimalType: string
  startDate: Date | undefined
  endDate: Date | undefined
  sidoList: ISidoItem[]
  sigunguList: ISigunguItem[]
  breedList: IBreedItem[]
  onSidoChange: (value: string | undefined) => void
  onSigunguChange: (value: string | undefined) => void
  onBreedChange: (value: string | undefined) => void
  onStartDateChange: (date: Date | undefined) => void
  onEndDateChange: (date: Date | undefined) => void
  onReset: () => void
}

export const FilterDesktop = ({
  selectedSido,
  selectedSigungu,
  selectedBreed,
  selectedAnimalType,
  startDate,
  endDate,
  sidoList,
  sigunguList,
  breedList,
  onSidoChange,
  onSigunguChange,
  onBreedChange,
  onStartDateChange,
  onEndDateChange,
  onReset
}: IFilterDesktopProps) => {
  return (
    <div className='hidden lg:block'>
      <div className='bg-card flex items-center gap-3 rounded-lg border p-4 shadow-sm'>
        {/* 기간 */}
        <div className='flex items-center gap-2'>
          <Label className='shrink-0 text-sm font-medium'>기간</Label>
          <DatePicker
            date={startDate}
            onDateChange={onStartDateChange}
            placeholder='시작일'
            maxDate={endDate || getToday()}
            className='w-[180px]'
          />
          <span className='text-muted-foreground'>~</span>
          <DatePicker
            date={endDate}
            onDateChange={onEndDateChange}
            placeholder='종료일'
            minDate={startDate}
            maxDate={getToday()}
            className='w-[180px]'
          />
        </div>

        <div className='bg-border h-6 w-px' />

        {/* 지역 */}
        <div className='flex items-center gap-2'>
          <Label className='shrink-0 text-sm font-medium'>지역</Label>
          <Select value={selectedSido || 'all'} onValueChange={onSidoChange}>
            <SelectTrigger className='h-9 w-[150px]'>
              <SelectValue placeholder='시도' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>전체</SelectItem>
              {sidoList.map((sido) => (
                <SelectItem key={sido.orgCd} value={sido.orgCd}>
                  {sido.orgdownNm}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            value={selectedSigungu || 'all'}
            onValueChange={onSigunguChange}
            disabled={!selectedSido}
          >
            <SelectTrigger className='h-9 w-[150px]'>
              <SelectValue placeholder='시군구' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>전체</SelectItem>
              {sigunguList.map((sigungu) => (
                <SelectItem key={sigungu.orgCd} value={sigungu.orgCd}>
                  {sigungu.orgdownNm}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className='bg-border h-6 w-px' />

        {/* 품종 */}
        <div className='flex items-center gap-2'>
          <Label className='shrink-0 text-sm font-medium'>품종</Label>
          <Select
            value={selectedBreed || 'all'}
            onValueChange={onBreedChange}
            disabled={
              !selectedAnimalType ||
              selectedAnimalType === '429900' ||
              selectedAnimalType === ''
            }
          >
            <SelectTrigger className='h-9 w-[200px]'>
              <SelectValue placeholder='전체' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>전체</SelectItem>
              {breedList.map((breed) => (
                <SelectItem key={breed.kindCd} value={breed.kindCd}>
                  {breed.kindNm}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* 초기화 */}
        <Button
          variant='ghost'
          size='sm'
          onClick={onReset}
          className='ml-auto shrink-0'
        >
          초기화
        </Button>
      </div>
    </div>
  )
}

