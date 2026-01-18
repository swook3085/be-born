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
    <div className='flex lg:justify-center mb-2 lg:mb-3'>
      <div className='flex w-full items-center gap-2 overflow-x-auto lg:justify-center lg:gap-3'>
        {animalTypes.map((type) => {
          const isActive = selectedAnimalType === type.value
          return (
            <button
              key={type.value}
              onClick={() => onAnimalTypeChange(type.value)}
              className={cn(
                'relative z-10 flex h-9 items-center justify-center whitespace-nowrap rounded-lg px-4 text-sm font-medium transition-all duration-200 lg:h-10 lg:px-5',
                isActive
                  ? 'bg-gray-200 text-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
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



