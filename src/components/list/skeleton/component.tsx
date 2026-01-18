import { ErrorImage } from '@beborn/components/error/image'

const AnimalItemSkelton = () => {
  return (
    <li className='box-border'>
      <div className='flex flex-col'>
        <ErrorImage className='h-12 w-12 text-gray-200' />
        <div className='flex flex-col gap-1 pt-2'>
          <div className='h-5 w-36 rounded-full bg-gray-200 lg:h-6 lg:w-[180px]'></div>
          <div className='flex h-4 items-center lg:h-5'>
            <div className='h-4 w-4 rounded-full bg-gray-200 lg:h-5'></div>
            <div className='ml-1 h-4 w-24 rounded-full bg-gray-200 lg:h-5'></div>
          </div>
          <div className='h-4 w-[120px] rounded-full bg-gray-200 lg:h-5 lg:w-[120px]'></div>
          <div className='flex h-4 items-center lg:h-5'>
            <div className='h-4 w-20 rounded-full bg-gray-200 lg:h-5'></div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default AnimalItemSkelton
