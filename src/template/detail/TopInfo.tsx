import { PhoneIcon, ShareIcon } from '@heroicons/react/outline'
import { IAnimalDetailChildProps } from '@shared/interface/IAnimalDetailChildProps'
import { ForwardedRef, forwardRef } from 'react'

/**
 * 전화/공유 영역
 */
const TopInfo = forwardRef(
  (
    { item, isFetching }: IAnimalDetailChildProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    if (isFetching || item == null) {
      return (
        <div
          ref={ref}
          className='animate-pulse flex flex-col rounded drop-shadow-lg bg-white justify-center -mt-6 items-center mx-5 pt-5'
        >
          <div className='flex flex-col justify-center items-center'>
            <div className='h-[30px] w-[250px] bg-gray-200 rounded-full m-0.5 ml-2'></div>
            <div className='h-[20px] w-[150px] bg-gray-200 rounded-full mb-2.5'></div>
          </div>
          <div className='flex flex-row w-full'>
            <div className='h-[60px] flex-1 bg-gray-200'></div>
            <div className='h-[60px] flex-1 bg-gray-200'></div>
          </div>
        </div>
      )
    }
    return (
      <div
        ref={ref}
        className='flex flex-col rounded drop-shadow-lg bg-white justify-center -mt-6 items-center mx-5 pt-5'
      >
        <div className='flex flex-col justify-center items-center'>
          <h2 className='mb-2.5 text-2xl'>{item.noticeNo}</h2>
          <p className='text-sm m-2.5 text-[#676c76]'>
            {item.happenPlace}에서 발견
          </p>
        </div>
        <div className='flex flex-row w-full'>
          <a
            href={`tel:${item.careTel}`}
            className='flex flex-1 py-5 flex-row justify-center items-center'
          >
            <PhoneIcon className='w-5 h-5 mr-1' />
            전화
          </a>
          <button className='flex flex-1 py-5 flex-row justify-center items-center'>
            <ShareIcon className='w-5 h-5 mr-1' />
            공유
          </button>
        </div>
      </div>
    )
  },
)

export default TopInfo
