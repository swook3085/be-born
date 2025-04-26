import { Badge } from '@beborn/components/Badge'
import KindImageIcon from '@beborn/components/KindImageIcon'
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

const AnimalItem = ({ item, index }: IAnimalListItemProps) => {
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
    <div className='flex w-40 lg:w-52'>
      <figure className='w-40 rounded-lg bg-white lg:w-52'>
        <Link
          className='relative block h-40 w-40 overflow-hidden rounded-lg lg:h-52 lg:w-52'
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
        <figcaption className='pt-2'>
          <h2 className='mx-1 mb-2 h-5 text-sm font-medium text-gray-900 lg:text-base'>
            {item.noticeNo}
          </h2>
          <div className='m-1 h-5 cursor-default truncate text-xs lg:text-sm'>
            <div className='flex items-center'>
              <KindImageIcon kindCd={kindCd} />
              <p className='ml-1 text-black'>{getKindCdName(kindCd)}</p>
            </div>
          </div>
          <p className='m-1 h-4 cursor-default truncate text-xs text-black lg:text-sm'>
            {item.age} · {item.weight}
          </p>
          <p className='bottom-0 mt-2 h-5 cursor-default truncate text-xs text-[#676c76] lg:text-sm'>
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

export default AnimalItem
