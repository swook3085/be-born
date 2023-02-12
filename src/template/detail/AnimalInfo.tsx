import { IAnimalDetailChildProps } from '@shared/interface/IAnimalDetailChildProps'
import { getKindCdName } from '@shared/utils'

/**
 * 동물 정보 영역
 */
const AnimalInfo = ({ item, isFetching }: IAnimalDetailChildProps) => {
  if (isFetching || item == null) {
    return (
      <div className='mx-5 mt-2 animate-pulse'>
        <div className='h-[20px] w-[250px] bg-gray-200 rounded-full mb-1'></div>
        <div className='h-[20px] w-[200px] bg-gray-200 rounded-full mb-1'></div>
        <div className='h-[20px] w-[180px] bg-gray-200 rounded-full mb-1'></div>
        <div className='h-[20px] w-[300px] bg-gray-200 rounded-full mb-1'></div>
        <hr className='my-4' />
      </div>
    )
  }
  return (
    <div className='mx-5 mt-2'>
      <div className='flex flex-col'>
        <div className='flex flex-row mb-1'>
          <p className='text-[#676c76] text-sm w-[40px]'>품종</p>
          <p className='text-sm'>{getKindCdName(item.kindCd)}</p>
          <div className='w-px h-4 bg-[#676c76] mx-2 mt-0.5'></div>
          <p className='text-[#676c76] text-sm w-[40px]'>성별</p>
          <p className='text-sm'>
            {item.sexCd === 'M' && '수컷'}
            {item.sexCd === 'F' && '암컷'}
          </p>
        </div>
        <div className='flex flex-row mb-1'>
          <p className='text-[#676c76] text-sm w-[40px]'>털색</p>
          <p className='text-sm'>{item.colorCd}</p>
          <div className='w-px h-4 bg-[#676c76] mx-2 mt-0.5'></div>
          <p className='text-[#676c76] text-sm w-[40px]'>체중</p>
          <p className='text-sm'>{item.weight}</p>
        </div>
        <div className='flex flex-row mb-1'>
          <p className='text-[#676c76] text-sm w-[40px]'>나이</p>
          <p className='text-sm'>{item.age}</p>
        </div>
        <div className='flex flex-row mb-1'>
          <p className='text-[#676c76] text-sm w-[40px]'>특징</p>
          <p className='flex-1 text-sm'>{item.specialMark}</p>
        </div>
      </div>
      <hr className='my-4' />
    </div>
  )
}

export default AnimalInfo
