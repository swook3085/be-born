import { FilterIcon } from '@heroicons/react/solid'
import { useDispatch } from 'react-redux'
import { onOpen } from '@modules/store/slices/slideModal'

const FilterButton = () => {
  const dispatch = useDispatch()
  return (
    <button
      type='button'
      className='-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6'
      onClick={() => dispatch(onOpen())}
    >
      <span className='sr-only'>Filters</span>
      <FilterIcon className='h-6 w-6' aria-hidden='true' />
    </button>
  )
}

export default FilterButton
