import { cn } from '@beborn/lib/utils'

import { animalTypes } from './constants'

interface IFilterTabsProps {
  selectedAnimalType: string
  onAnimalTypeChange: (value: string) => void
}

export const FilterTabs = ({
  selectedAnimalType,
  onAnimalTypeChange
}: IFilterTabsProps) => {
  const selectedIndex = animalTypes.findIndex(
    (t) => t.value === selectedAnimalType
  )

  return (
    <div className='flex lg:justify-center'>
      <div className='relative inline-flex w-full items-center gap-2 overflow-x-auto rounded-full bg-gray-100 p-1 lg:w-auto'>
        {/* 슬라이딩 배경 - 모바일 */}
        <div
          className='absolute h-[calc(100%-8px)] rounded-full bg-gray-900 transition-all duration-300 ease-out lg:hidden'
          style={{
            width: `calc(${100 / animalTypes.length}% - 8px)`,
            left: `calc(${selectedIndex * (100 / animalTypes.length)}% + 4px)`,
            transform: 'translateZ(0)'
          }}
        />
        {/* 슬라이딩 배경 - 데스크톱 */}
        <div
          className='absolute hidden h-[calc(100%-8px)] w-[100px] rounded-full bg-gray-900 transition-all duration-300 ease-out lg:block'
          style={{
            left: `calc(${selectedIndex * 100}px + ${selectedIndex * 8 + 4}px)`,
            transform: 'translateZ(0)'
          }}
        />
        {animalTypes.map((type) => {
          const isActive = selectedAnimalType === type.value
          return (
            <button
              key={type.value}
              onClick={() => onAnimalTypeChange(type.value)}
              className={cn(
                'relative z-10 flex h-9 flex-1 items-center justify-center whitespace-nowrap rounded-full px-5 text-sm font-medium transition-colors duration-300 lg:w-[100px] lg:flex-none',
                isActive ? 'text-white' : 'text-gray-600 hover:text-gray-900'
              )}
            >
              {type.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}


