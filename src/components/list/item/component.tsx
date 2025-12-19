import { KindImageIcon } from '@beborn/components/kind-image'
import { StatusBadge } from '@beborn/components/status-badge'
import { endDateBadgeType, noticeDateDiff } from '@beborn/shared'
import Link from 'next/link'

import { AnimalImage } from './image'
import type { IAnimalListItemProps } from './interface'

const AnimalItem = ({ item }: IAnimalListItemProps) => {
  const { noticeSdt, noticeEdt, careNm, desertionNo } = item

  return (
    <li>
      <Link className='flex flex-col' href={`/detail/${desertionNo}`}>
        <AnimalImage src={item.popfile1} alt={item.noticeNo} />
        <div className='flex flex-col gap-1 pt-2'>
          <h2 className='line-clamp-1 text-sm font-medium text-gray-900 lg:text-base'>
            {item.noticeNo}
          </h2>
          <div className='cursor-default truncate text-xs lg:text-sm'>
            <div className='flex items-center'>
              <KindImageIcon upKindCd={item.upKindCd} />
              <p className='ml-1 text-black'>{item.kindNm}</p>
            </div>
          </div>
          <p className='cursor-default truncate text-xs text-black lg:text-sm'>
            {item.age} · {item.weight}
          </p>
          <p className='cursor-default truncate text-xs text-[#676c76] lg:text-sm'>
            <StatusBadge type={endDateBadgeType(noticeSdt, noticeEdt)}>
              종료 {noticeDateDiff(noticeSdt, noticeEdt)}일 전
            </StatusBadge>
            &nbsp;
            {careNm}
          </p>
        </div>
      </Link>
    </li>
  )
}

export default AnimalItem
