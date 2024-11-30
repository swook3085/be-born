import {
  endDateBadgeType,
  getKindCdName,
  noticeDateDiff,
  replaceHTTP
} from '@beborn/shared'
import { IAnimalListItemProps } from '@beborn/shared/interfaces/IPet'
import Image from 'next/image'
import Link from 'next/link'
import { MouseEvent } from 'react'

import { Badge } from './Badge'
import KindImageIcon from './KindImageIcon'

const PcAnimalItem = ({ item, index }: IAnimalListItemProps) => {
  const { kindCd, noticeSdt, noticeEdt, careNm } = item

  const goDetail = (e: MouseEvent<HTMLAnchorElement>) => {
    // e.preventDefault()
    // const param = {
    //   // page: item.page,
    //   upKind: _upKind,
    //   id: item.desertionNo,
    //   bgnde: item.happenDt,
    //   state: converState(item.processState),
    //   neuterYn: item.neuterYn,
    // }
    // push({
    //   pathname: 'detail',
    //   query: param,
    // })
  }

  return (
    <div className='hidden justify-center lg:flex'>
      <figure className='w-52 rounded-lg bg-white'>
        <Link
          className='relative block h-52 w-52 overflow-hidden rounded-lg'
          href={'/detail'}
          onClick={goDetail}
        >
          <Image
            fill
            priority={index < 8}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            quality={100}
            className='object-cover'
            src={replaceHTTP(item.popfile)}
            alt={item.noticeNo}
          />
        </Link>
        <figcaption>
          <h2 className='my-2 h-5 text-base font-medium text-gray-900'>
            {item.noticeNo}
          </h2>
          <div className='h-4.5 m-1 cursor-default truncate text-sm'>
            <div className='flex items-center'>
              <KindImageIcon kindCd={kindCd} />
              <p className='ml-1 text-black'>{getKindCdName(kindCd)}</p>
            </div>
          </div>
          <p className='m-1 h-4 cursor-default truncate text-sm text-black'>
            {item.age} · {item.weight}
          </p>
          <p className='bottom-0 mt-2 cursor-default truncate text-sm text-[#676c76]'>
            <Badge type={endDateBadgeType(noticeSdt, noticeEdt)}>
              종료 {noticeDateDiff(noticeSdt, noticeEdt)}일 전
            </Badge>
            &nbsp;
            {careNm}
          </p>
        </figcaption>
      </figure>
    </div>
  )
}

export default PcAnimalItem
