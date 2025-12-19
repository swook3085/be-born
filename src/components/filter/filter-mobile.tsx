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
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@beborn/components/ui/drawer'
import type { ISidoItem, ISigunguItem } from '@beborn/shared/interfaces'

import { FilterBadge } from './filter-badge'

interface IBreedItem {
  kindCd: string
  kindNm: string
}
import { SlidersHorizontal } from 'lucide-react'

import { getToday } from './constants'

interface IFilterMobileProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  activeFilterCount: number
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

export const FilterMobile = ({
  isOpen,
  onOpenChange,
  activeFilterCount,
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
}: IFilterMobileProps) => {
  return (
    <div className='lg:hidden'>
      <Drawer open={isOpen} onOpenChange={onOpenChange}>
        <DrawerTrigger asChild>
          <Button
            variant='outline'
            className='flex w-full items-center justify-between gap-3 p-4'
          >
            {/* 선택된 필터 표시 */}
            {activeFilterCount > 0 ? (
              <FilterBadge
                selectedSido={selectedSido}
                selectedSigungu={selectedSigungu}
                selectedBreed={selectedBreed}
                sidoList={sidoList}
                sigunguList={sigunguList}
                breedList={breedList}
                onSidoChange={onSidoChange}
                onSigunguChange={onSigunguChange}
                onBreedChange={onBreedChange}
              />
            ) : (
              <div className='flex items-center gap-2'>
                <SlidersHorizontal className='h-4 w-4 text-gray-500' />
                <span className='text-sm text-gray-600'>
                  지역 · 품종 · 기간 선택
                </span>
              </div>
            )}

            <SlidersHorizontal className='h-5 w-5 shrink-0 text-gray-500' />
          </Button>
        </DrawerTrigger>

        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>필터 설정</DrawerTitle>
          </DrawerHeader>

          <div className='max-h-[60vh] space-y-4 overflow-y-auto p-4'>
            {/* 기간 */}
            <div className='grid grid-cols-2 gap-3'>
              <div className='space-y-2'>
                <Label className='text-sm font-medium'>시작일</Label>
                <DatePicker
                  date={startDate}
                  onDateChange={onStartDateChange}
                  placeholder='시작일'
                  maxDate={endDate || getToday()}
                />
              </div>
              <div className='space-y-2'>
                <Label className='text-sm font-medium'>종료일</Label>
                <DatePicker
                  date={endDate}
                  onDateChange={onEndDateChange}
                  placeholder='종료일'
                  minDate={startDate}
                  maxDate={getToday()}
                />
              </div>
            </div>

            {/* 지역 */}
            <div className='grid grid-cols-2 gap-3'>
              <div className='space-y-2'>
                <Label className='text-sm font-medium'>시도</Label>
                <Select
                  value={selectedSido || 'all'}
                  onValueChange={onSidoChange}
                >
                  <SelectTrigger className='h-10'>
                    <SelectValue placeholder='전체' />
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
              </div>
              <div className='space-y-2'>
                <Label className='text-sm font-medium'>시군구</Label>
                <Select
                  value={selectedSigungu || 'all'}
                  onValueChange={onSigunguChange}
                  disabled={!selectedSido}
                >
                  <SelectTrigger className='h-10'>
                    <SelectValue placeholder='전체' />
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
            </div>

            {/* 품종 */}
            <div className='space-y-2'>
              <Label className='text-sm font-medium'>품종</Label>
              <Select
                value={selectedBreed || 'all'}
                onValueChange={onBreedChange}
                disabled={
                  !selectedAnimalType ||
                  selectedAnimalType === '429900' ||
                  selectedAnimalType === ''
                }
              >
                <SelectTrigger className='h-10'>
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
          </div>

          <DrawerFooter>
            <Button variant='outline' onClick={onReset} className='w-full'>
              초기화
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

