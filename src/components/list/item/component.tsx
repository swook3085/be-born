import { KindImageIcon } from '@beborn/components/kind-image'
import { Link } from '@beborn/components/link'
import { StatusBadge } from '@beborn/components/status-badge'
import { endDateBadgeType, noticeDateDiff } from '@beborn/shared'

import { AnimalImage } from './image'
import type { IAnimalListItemProps } from './interface'

const AnimalItem = ({ item }: IAnimalListItemProps) => {
  const { noticeSdt, noticeEdt, careNm, desertionNo } = item
  const daysLeft = noticeDateDiff(noticeSdt, noticeEdt)

  return (
    <li>
      <Link
        className='group relative flex flex-col overflow-hidden bg-white active:scale-[0.98]'
        href={`/detail/${desertionNo}`}
      >
        {/* 이미지 영역 */}
        <div className='relative'>
          <AnimalImage src={item.popfile1} alt={item.noticeNo} />
          {/* 상태 배지 - 이미지 상단 왼쪽 */}
          <div className='absolute left-2 top-2 z-10'>
            <StatusBadge type={endDateBadgeType(noticeSdt, noticeEdt)}>
              종료 {daysLeft}일 전
            </StatusBadge>
          </div>
        </div>

        {/* 정보 영역 */}
        <div className='flex flex-col gap-2 p-3'>
          {/* 제목 */}
          <h2 className='line-clamp-2 text-sm font-semibold leading-tight text-gray-900 lg:text-base'>
            {item.noticeNo}
          </h2>

          {/* 품종 */}
          <div className='flex items-center gap-1.5'>
            <KindImageIcon upKindCd={item.upKindCd} />
            <p className='truncate text-xs font-medium text-gray-700 lg:text-sm'>
              {item.kindNm}
            </p>
          </div>

          {/* 나이/체중 */}
          <div className='flex items-center gap-1.5 text-xs text-gray-600 lg:text-sm'>
            <span>{item.age}</span>
            <span className='text-gray-300'>·</span>
            <span>{item.weight}</span>
          </div>

          {/* 보호소명 */}
          <p className='truncate text-xs text-gray-500 lg:text-sm'>{careNm}</p>
        </div>
      </Link>
    </li>
  )
}

export default AnimalItem
