import Image from 'next/legacy/image'
import KindImageIcon from './KindImageIcon'
import { Badge } from './Badge'
import { IAnimalListItemProps } from '@shared/interface/IPet'
import {
  converState,
  endDateBadgeType,
  getKindCdName,
  noticeDateDiff,
  replaceHTTP,
} from '@shared/utils'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MouseEvent } from 'react'

const PcAnimalItem = ({ item, detail }: IAnimalListItemProps) => {
  const { push } = useRouter()
  const { kindCd, noticeSdt, noticeEdt, careNm } = item

  const goDetail = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const param = {
      // page: item.page,
      id: item.desertionNo,
      bgnde: item.happenDt,
      state: converState(item.processState),
      neuterYn: item.neuterYn,
    }
    push({
      pathname: 'detail',
      query: param,
    })
  }

  return (
    <div className='hidden lg:flex justify-center'>
      <Link href={'/detail'} onClick={goDetail}>
        <figure className='rounded-lg bg-white w-52'>
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
            <h2 className='text-gray-900 text-base mb-2'>{item.noticeNo}</h2>
            <div className='m-1 cursor-default text-[13px] h-4 truncate'>
              <div className='flex items-center'>
                <KindImageIcon kindCd={kindCd} />
                <p className='ml-1'>{getKindCdName(kindCd)}</p>
              </div>
            </div>
            <p className='m-1 cursor-default text-[13px] h-4 truncate'>
              {item.age} · {item.weight}
            </p>
            <p className='mt-2 cursor-default text-[13px] text-[#676c76] truncate bottom-0'>
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
