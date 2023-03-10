import { IAnimalDetailChildProps } from '@shared/interface/IAnimalDetailChildProps'
import dayjs from 'dayjs'

/**
 * 보호소 정보 영역
 */
const CareInfo = ({ item, isFetching }: IAnimalDetailChildProps) => {
  if (isFetching || item == null) {
    return (
      <>
        <div className='flex flex-col animate-pulse'>
          <div className='flex flex-row mb-2'>
            <div className='flex h-[20px] w-[80px] bg-gray-200 rounded-full '></div>
            <div className='flex h-[20px] w-[140px] bg-gray-200 rounded-full ml-1'></div>
          </div>
          <div className='flex flex-row mb-2'>
            <div className='flex h-[20px] w-[80px] bg-gray-200 rounded-full '></div>
            <div className='flex h-[20px] w-[250px] bg-gray-200 rounded-full ml-1'></div>
          </div>
          <div className='flex flex-row mb-2'>
            <div className='flex h-[20px] w-[80px] bg-gray-200 rounded-full '></div>
            <div className='flex h-[20px] w-[200px] bg-gray-200 rounded-full ml-1'></div>
          </div>
        </div>
        <hr className='my-4' />
        <div className='flex flex-col animate-pulse'>
          <div className='flex flex-row mb-2'>
            <div className='flex h-[20px] w-[80px] bg-gray-200 rounded-full '></div>
            <div className='flex h-[20px] w-[140px] bg-gray-200 rounded-full ml-1'></div>
          </div>
          <div className='flex flex-row mb-2'>
            <div className='flex h-[20px] w-[80px] bg-gray-200 rounded-full '></div>
            <div className='flex h-[20px] w-[250px] bg-gray-200 rounded-full ml-1'></div>
          </div>
          <div className='flex flex-row mb-2'>
            <div className='flex h-[20px] w-[80px] bg-gray-200 rounded-full '></div>
            <div className='flex h-[20px] w-[200px] bg-gray-200 rounded-full ml-1'></div>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className='mt-5'>
      <div className='flex flex-col'>
        <div className='flex flex-row mb-2'>
          <p className='text-[#676c76] text-md w-[80px]'>보호센터</p>
          <p className='text-md'>{item.careNm}</p>
        </div>
        <div className='flex flex-row mb-2'>
          <p className='text-[#676c76] text-md w-[80px]'>보호주소</p>
          <p className='flex-1 text-md'>{item.careAddr}</p>
        </div>
        <div className='flex flex-row mb-2'>
          <p className='text-[#676c76] text-md w-[80px]'>전화번호</p>
          <p className='flex-1 text-md'>{item.careTel}</p>
        </div>
      </div>
      <hr className='my-4' />
      <div className='flex flex-col'>
        <div className='flex flex-row mb-2'>
          <p className='text-[#676c76] text-md w-[80px]'>관할지역</p>
          <p className='text-md'>{item.orgNm}</p>
        </div>
        <div className='flex flex-row mb-2'>
          <p className='text-[#676c76] text-md w-[80px]'>접수일자</p>
          <p className='flex-1 text-md'>
            {dayjs(item.happenDt).format('YYYY-MM-DD')}
          </p>
        </div>
        <div className='flex flex-row mb-2'>
          <p className='text-[#676c76] text-md w-[80px]'>공고기간</p>
          <p className='flex-1 text-md'>
            {`${dayjs(item.noticeSdt).format('YYYY-MM-DD')} ~ ${dayjs(
              item.noticeEdt,
            ).format('YYYY-MM-DD')}`}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CareInfo
