import { IAnimalDetailChildProps } from '@shared/interface/IAnimalDetailChildProps'
import { getKindCdName } from '@shared/utils'

/**
 * 동물 정보 영역
 */
const AnimalInfo = ({ item, isFetching }: IAnimalDetailChildProps) => {
  if (isFetching || item == null) {
    return (
      <div className='mx-5 mt-5 animate-pulse'>
        <div className='h-[20px] w-[250px] bg-gray-200 rounded-full mb-1'></div>
        <div className='h-[20px] w-[200px] bg-gray-200 rounded-full mb-1'></div>
        <div className='h-[20px] w-[180px] bg-gray-200 rounded-full mb-1'></div>
        <div className='h-[20px] w-[300px] bg-gray-200 rounded-full mb-1'></div>
        <hr className='my-4' />
      </div>
    )
  }
  return (
    <div className='mx-5 mt-5'>
      <div className='flex flex-col'>
        <div className='flex flex-row mb-2'>
          <p className='text-[#676c76] text-md w-[60px]'>품종</p>
          <p className='text-md'>{getKindCdName(item.kindCd)}</p>
        </div>
        <div className='flex flex-row mb-2'>
          <p className='text-[#676c76] text-md w-[60px]'>성별</p>
          <p className='text-md'>
            {item.sexCd === 'M' && '수컷'}
            {item.sexCd === 'F' && '암컷'}
          </p>
        </div>
        <div className='flex flex-row mb-2'>
          <p className='text-[#676c76] text-md w-[60px]'>털색</p>
          <p className='text-md'>{item.colorCd}</p>
        </div>
        <div className='flex flex-row mb-2'>
          <p className='text-[#676c76] text-md w-[60px]'>나이</p>
          <p className='text-md'>{item.age}</p>
        </div>
        <div className='flex flex-row mb-2'>
          <p className='text-[#676c76] text-md w-[60px]'>체중</p>
          <p className='text-md'>{item.weight}</p>
        </div>
        <div className='flex flex-row mb-2'>
          <p className='text-[#676c76] text-md w-[60px]'>특징</p>
          <p className='flex-1 text-md'>{item.specialMark}</p>
        </div>
      </div>
      <hr className='my-4' />
    </div>
  )
}

export default AnimalInfo
