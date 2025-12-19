import { Badge } from '@beborn/components/badge'
import type { ISidoItem, ISigunguItem } from '@beborn/shared/interfaces'
import { X } from 'lucide-react'

interface IBreedItem {
  kindCd: string
  kindNm: string
}

interface IFilterBadgeProps {
  selectedSido: string
  selectedSigungu: string
  selectedBreed: string
  sidoList: ISidoItem[]
  sigunguList: ISigunguItem[]
  breedList: IBreedItem[]
  onSidoChange: (value: string | undefined) => void
  onSigunguChange: (value: string | undefined) => void
  onBreedChange: (value: string | undefined) => void
}

export const FilterBadge = ({
  selectedSido,
  selectedSigungu,
  selectedBreed,
  sidoList,
  sigunguList,
  breedList,
  onSidoChange,
  onSigunguChange,
  onBreedChange
}: IFilterBadgeProps) => {
  return (
    <div className='scrollbar-hide flex flex-1 items-center gap-2 overflow-x-auto'>
      {selectedSido && (
        <Badge
          variant='secondary'
          className='flex shrink-0 items-center gap-1 pr-1'
        >
          <span className='text-xs'>
            {sidoList.find((s) => s.orgCd === selectedSido)?.orgdownNm}
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation()
              onSidoChange('all')
            }}
            className='cursor-pointer rounded-full p-0.5 hover:bg-gray-300'
          >
            <X className='h-3 w-3' />
          </span>
        </Badge>
      )}
      {selectedSigungu && (
        <Badge
          variant='secondary'
          className='flex shrink-0 items-center gap-1 pr-1'
        >
          <span className='text-xs'>
            {sigunguList.find((s) => s.orgCd === selectedSigungu)?.orgdownNm}
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation()
              onSigunguChange('all')
            }}
            className='cursor-pointer rounded-full p-0.5 hover:bg-gray-300'
          >
            <X className='h-3 w-3' />
          </span>
        </Badge>
      )}
      {selectedBreed && (
        <Badge
          variant='secondary'
          className='flex shrink-0 items-center gap-1 pr-1'
        >
          <span className='whitespace-nowrap text-xs'>
            {breedList.find((b) => b.kindCd === selectedBreed)?.kindNm}
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation()
              onBreedChange('all')
            }}
            className='cursor-pointer rounded-full p-0.5 hover:bg-gray-300'
          >
            <X className='h-3 w-3' />
          </span>
        </Badge>
      )}
    </div>
  )
}


