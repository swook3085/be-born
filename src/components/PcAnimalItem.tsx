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

const PcAnimalItem = ({ item }: IAnimalListItemProps) => {
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
      <Link href={'/detail'} onClick={goDetail}>
        <figure className='w-52 rounded-lg bg-white'>
          <Image
            layout='fixed'
            width={208}
            height={208}
            quality={100}
            objectFit='cover'
            src={replaceHTTP(item.popfile)}
            className='rounded-lg'
            alt={item.noticeNo}
          />

          <figcaption className='pt-0.5'>
            <h2 className='mb-2 text-base text-gray-900'>{item.noticeNo}</h2>
            <div className='m-1 h-4 cursor-default truncate text-[13px]'>
              <div className='flex items-center'>
                <KindImageIcon kindCd={kindCd} />
                <p className='ml-1 text-black'>{getKindCdName(kindCd)}</p>
              </div>
            </div>
            <p className='m-1 h-4 cursor-default truncate text-[13px] text-black'>
              {item.age} · {item.weight}
            </p>
            <p className='bottom-0 mt-2 cursor-default truncate text-[13px] text-[#676c76]'>
              <Badge type={endDateBadgeType(noticeSdt, noticeEdt)}>
                종료 {noticeDateDiff(noticeSdt, noticeEdt)}일 전
              </Badge>
              &nbsp;
              {careNm}
            </p>
          </figcaption>
        </figure>
      </Link>
    </div>
  )
}

export default PcAnimalItem
